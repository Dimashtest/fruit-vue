<template>
    <div v-for="fruit in allFruits" :key="fruit.id">
        <div class="">
            <div class="">
                <img :src="fruit.image" alt="">
                <p class="text-[14px] text-black"> {{ fruit.title }} </p>
                <p class="text-[#BDBDBD] text-[11px]">ЦЕНА:</p>
                <p class="font-bold text-[11px]"> {{ fruit.price }} тг/кг.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import AllFruits from '../components/AllFruits.vue'
defineProps({
    allFruits: Array
})
</script>

<style lang="scss" scoped></style>