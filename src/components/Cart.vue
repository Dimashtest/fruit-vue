<template>
    <div class="h-screen fixed top-[0px] right-[0px] bg-white w-100 z-2 overflow-auto">
        <div class="p-10">
            <div class="flex items-center justify-between mb-10">
                <h3 class="text-2xl">Корзина</h3>
                <img @click="toggleCart" class="cursor-pointer" src="/close.svg" alt="">
            </div>
            <div v-if="cartItems.length > 0"
                class="flex items-center justify-center gap-[40px] flex-wrap mt-10 pb-20">
                <CartItem @addToCart="addToCart(fruit)" v-for="fruit in fruits" :key="fruit.id" :fruit="fruit" />
            </div>
            <div v-else class="h-[70vh] flex flex-col items-center justify-center">
                <img src="/sad.png" alt="">
                <h2>Ничего не найдено</h2>
            </div>
            <div class="flex flex-col gap-[10px]">
                <CartItem v-for="cartItem in cartItems.slice().reverse()" :key="cartItem.id" :cartItem="cartItem"
                    @removeItemCart="removeItemCart" />
            </div>
        </div>
    </div>
</template>

<script setup>

import CartItem from './CartItem.vue'

defineProps({
    toggleCart: Function,
    cartItems: Array,
    removeItemCart: Function
})

</script>