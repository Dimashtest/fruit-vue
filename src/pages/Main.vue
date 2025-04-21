<template>
    <div v-auto-animate class="bg-white rounded-[20px] px-[80px]">
        <Header :toggleCart="toggleCart" />
        <Slider />
        <Search :onChange="onChange" />
        <AllProducts :fruits="fruits" :toggleAdd="toggleAdd" />
        <div v-if="isOpenCart" class="w-full h-full opacity-[70%] bg-black fixed left-0 top-0 z-1"></div>
        <Cart v-if="isOpenCart" :toggleCart="toggleCart" />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Fruits from '../Data/fruits.json'
import Cart from '../components/Cart.vue'
import AllProducts from '../components/AllProducts.vue'
import { ref } from 'vue'

const fruits = ref(Fruits)
const searchText = ref('')
const isOpenCart = ref(false)

function onChange(e) {
    searchText.value = e.target.value
    fruits.value = Fruits.filter(fruit => fruit.title.toLowerCase().includes(searchText.value.trim().toLowerCase()))
    console.log(fruits.value)
}

function toggleCart() {
    isOpenCart.value = !isOpenCart.value
}
function toggleAdd(fruit) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(fruit)
    localStorage.setItem('cart', JSON.stringify(cart))
}

</script>