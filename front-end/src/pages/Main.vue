<template>
    <Slider />
    <Search :onChange="onChange" />
    <AllProducts :fruits="fruits" :addToCart="addToCart" :openModalQuantity="openModalQuantity" />
    <div @click="toggleCart" v-if="isOpenCart" class="w-full h-full opacity-[70%] bg-black fixed left-0 top-0 z-1">
    </div>
    <Cart v-if="isOpenCart" :toggleCart="toggleCart" :removeItemCart="removeItemCart" :cartItems="cartItems" />
    <QuantityFruit v-if="isOpenQuantityModal" :kgModal="kgModal" :increment="increment" :decrement="decrement"
        :addToCart="addToCart" :priceQuant="priceQuant" :staticPriceFruit="staticPriceFruit" :changeValue="changeValue"
        :num="num" :correctFruit="correctFruit" />
</template>

<script setup>
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Cart from '../components/Cart.vue'
import QuantityFruit from '../components/QuantityFruit.vue'
import AllProducts from '../components/AllProducts.vue'

import { ref, onMounted, watch } from 'vue'

// 💡 Принимаем пропсы
defineProps({
  isOpenCart: Boolean,
  toggleCart: Function,
  changeTotalPrice: Function
})

const fruits = ref([])
const cartItems = ref([])
const isOpenQuantityModal = ref(false)
const staticPriceFruit = ref(0)
const priceQuant = ref(0)
const kgModal = ref(1)
const correctFruit = ref({})
const searchText = ref('')

// 🔍 Слежение за корзиной
watch(cartItems, (newVal) => {
  const total = newVal.reduce((sum, item) => sum + Number(item.price || 0), 0)
  changeTotalPrice(total) // 🔁 вызываем функцию из родителя
}, { deep: true })

async function fetchFruits() {
  try {
    const res = await fetch('http://localhost:5000/api/allFruits')
    const data = await res.json()
    fruits.value = data.map(fruit => ({
      ...fruit,
      image: `http://localhost:5000/images${fruit.image}`,
      isLiked: false,
      isAdded: false
    }))
    renderFruits()
  } catch (err) {
    console.error('Ошибка при получении фруктов:', err)
  }
}

onMounted(() => {
  fetchFruits()
  renderFruits()
})

function openModalQuantity(fruit) {
  kgModal.value = 1
  staticPriceFruit.value = fruit.price
  priceQuant.value = fruit.price
  correctFruit.value = { ...fruit, price: priceQuant.value }
  isOpenQuantityModal.value = true
}

function increment() {
  kgModal.value++
  priceQuant.value = staticPriceFruit.value * kgModal.value
}

function decrement() {
  if (kgModal.value > 1) {
    kgModal.value--
    priceQuant.value = staticPriceFruit.value * kgModal.value
  }
}

function changeValue(e) {
  kgModal.value = Number(e.target.value)
  priceQuant.value = staticPriceFruit.value * kgModal.value
}

function addToCart(fruitCart) {
  fruitCart.price = priceQuant.value
  fruitCart.kg = kgModal.value
  fruitCart.isAdded = true

  const exists = cartItems.value.find(item => item.id === fruitCart.id)

  if (!exists) {
    cartItems.value.push({ ...fruitCart })
  } else {
    cartItems.value = cartItems.value.filter(item => item.id !== fruitCart.id)
  }

  localStorage.setItem('cart', JSON.stringify(cartItems.value))
  updateFruitsAddedState()
  isOpenQuantityModal.value = false
}

function removeItemCart(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
  updateFruitsAddedState()
}

function updateFruitsAddedState() {
  fruits.value = fruits.value.map(item => ({
    ...item,
    isAdded: cartItems.value.some(cartItem => cartItem.id === item.id)
  }))
}

function renderFruits() {
  const stored = JSON.parse(localStorage.getItem('cart'))
  cartItems.value = stored || []
  updateFruitsAddedState()
}

function onChange(e) {
  searchText.value = e.target.value
  fruits.value = fruits.value.filter(fruit =>
    fruit.title.toLowerCase().includes(searchText.value.trim().toLowerCase())
  )
}
</script>
