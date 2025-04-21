<template>
    <div
        class="w-[250px] h-[350px] border relative border-[#D3D3D3] flex flex-col items-center justify-center rounded-[20px] p-6 gap-3 hover:-translate-y-2 transition-all hover:shadow-xl">
        <div class="absolute top-4 left-4 border border-[#D3D3D3] p-2 rounded-[10px]">
            <img src="/favorite.svg" alt="">
        </div>
        <img width="180px" height="180px" :src="fruit.image" alt="">
        <h3 class="text-[18px] ">{{ fruit?.title }}</h3>
        <div class="flex items-center justify-between w-full">
            <div class="flex flex-col gap-1">
                <p class="text-[#BDBDBD] text-[16px]">Цена</p>
                <span class="text-[18px] font-bold">{{ fruit.price }} тг/кг.</span>
            </div>
            <div class="border-[#D3D3D3] p-2 rounded-[10px] border-[2px] cursor-pointer">
                <img @click="() => toggleAdd(fruit)" src="/add.svg" alt="">

            </div>
        </div>
    </div>

</template>

<script setup>
defineProps({
    fruit: Object,
    toggleAdd: Function
})
</script>