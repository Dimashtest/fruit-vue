<template>
    <div class="relative border-2 border-[#F3F3F3] flex gap-2 items-center p-5 rounded-[20px]">
        <img :src="cartItem.image" alt="">
        <div class="flex flex-col gap-3 justify-between items-start h-full">
            <span class="text-xl">{{ cartItem.title }}</span>
            <p class="font-bold">{{ cartItem.price }} тг./1 кг.</p>
        </div>
        <img @click="$emit('removeItemCart', cartItem.id)" class="absolute bottom-7 right-3" src="/close.svg" alt="">
    </div>
</template>

<script setup>
defineProps({
    cartItem: Object
})

defineEmits(['removeItemCart'])
</script>