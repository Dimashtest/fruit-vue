<template>
    <div class="bg-white rounded-[20px] px-[80px]" v-auto-animate>
        <Header :toggleCart="toggleCart" />
        <Slider />
        <Search :onChange="onChange" />
        <AllProducts :fruits="fruits" :addToCart="addToCart" />
        <div @click="toggleCart" v-if="isOpenCart" class="w-full h-full opacity-[70%] bg-black fixed left-0 top-0 z-1">
        </div>
        <Cart v-if="isOpenCart" :toggleCart="toggleCart" :removeItemCart="removeItemCart" :cartItems="cartItems" />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Fruits from '../Data/fruits.json'
import Cart from '../components/Cart.vue'
import AllProducts from '../components/AllProducts.vue'
import { onMounted, ref } from 'vue'

const fruits = ref(Fruits)
const searchText = ref('')
const isOpenCart = ref(false)
const cartItems = ref([])

function renderFruits() {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    cartItems.value = cartItemsFromLocalStorage || []
    if (cartItemsFromLocalStorage) {
        fruits.value = fruits.value.map(item => {
            const findFruit = cartItems.value.find(fruitFromCart => fruitFromCart.id === item.id)
            if (findFruit) {
                return {
                    ...item,
                    isAdded: true
                }
            }
            else {
                return {
                    ...item,
                    isAdded: false
                }
            }

        })
    }
    else {
        fruits.value = fruits.value.map(item => ({
            ...item,
            isAdded: false
        }))
    }
}

function addToCart(fruitCart) {

    const isFoundFruit = cartItems.value.find(item => item.id === fruitCart.id)

    if (!isFoundFruit) {
        cartItems.value.push(fruitCart)
        localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }
    else {
        cartItems.value = cartItems.value.filter(item => item.id != fruitCart.id)
        localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }


    fruits.value = fruits.value.map(item => {
        const findFruit = cartItems.value.find(fruitFromCart => fruitFromCart.id === item.id)
        if (findFruit) {
            return {
                ...item,
                isAdded: true
            }
        }
        else {
            return {
                ...item,
                isAdded: false
            }
        }

    })
    console.log(cartItems.value)
    console.log(fruits.value)
}

function removeItemCart(id) {
    cartItems.value = cartItems.value.filter(item => item.id != id)
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

onMounted(() => {
    renderFruits()
})

function onChange(e) {
    searchText.value = e.target.value
    fruits.value = Fruits.filter(fruit => fruit.title.toLowerCase().includes(searchText.value.trim().toLowerCase()))
    console.log(fruits.value)
}

function toggleCart() {
    isOpenCart.value = !isOpenCart.value
}

</script>