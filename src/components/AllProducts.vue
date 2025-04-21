<template>
    <div v-auto-animate>
        <div v-auto-animate v-if="fruits.length > 0" class="flex items-center justify-center gap-[40px] flex-wrap mt-10 pb-20">
            <Product v-for="fruit in fruits" :key="fruit.id" :fruit="fruit" :toggleAdd="toggleAdd" />
        </div>
        <div v-else class="h-[90vh] flex flex-col items-center justify-center">
            <img src="/sad.png">
            <h2>Ничего не найдено</h2>
        </div>
    </div>

</template>

<script setup>
import Product from './Product.vue'

defineProps({
    fruits: Array,
    toggleAdd: Function
})


</script>