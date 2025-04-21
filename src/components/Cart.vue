<template>
    <div class="h-screen fixed top-[0px] right-[0px] bg-white w-100 z-2">
        <div class="p-10">
            <div class="flex justify-between mb-10 items-center">
                <p class="text-3xl font-bold">Корзина</p>
                <img @click="toggleCart" class="" src="/close.svg" alt="">
            </div>
            <div>
                <CartItem :items="cartFruits" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CartItem from './CartItem.vue'
defineProps({
    toggleCart: Function
})
import { ref} from 'vue'

const cartItems = ref([])

onMounted(() => {
    const data = localStorage.getItem('cart')
    if (data) {
        cartItems.value = JSON.parse(data)
        console.log(cartItems.value)
    } else {
        console.log('Корзина пуста')
    }
})

</script>