<template>
    <div class="fixed top-0 left-0 h-full w-full opacity-[70%] bg-black z-2 flex items-center justify-center">
    </div>
    <div class="fixed top-0 left-0 h-full w-full z-2 flex items-center justify-center">
        <div class="bg-white opacity-100 p-10 rounded-[20px] flex flex-col gap-10 items-center justify-center">
            <h2 class="text-2xl font-bold">Выберите количество</h2>
            <div class="flex items-center justify-center gap-4">
                <button @click="() => decrement(staticPriceFruit)"
                    class="cursor-pointer text-2xl bg-lime-700 w-10 h-10 rounded-full flex items-center justify-center text-white">-</button>
                <input @input="changeValue" class="outline-none p-3 w-25 h-10 border-3 border-lime-700 rounded-[10px]"
                    type="number" :value="kgModal">
                <button @click="() => increment(staticPriceFruit)"
                    class="cursor-pointer text-2xl bg-lime-700 w-10 h-10 rounded-full flex items-center justify-center text-white">+</button>
            </div>
            <div class="text-black">
                {{ priceQuant }}
            </div>
            <button @click="() => addToCart(correctFruit)"
                class="p-2 bg-lime-700 text-white font-bold rounded-[10px]">Добавить</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    kgModal: Number,
    decrement: Function,
    increment: Function,
    changeValue: Function,
    addToCart: Function,
    priceQuant: Number,
    staticPriceFruit: Number,
    correctFruit: Object
})


</script>
