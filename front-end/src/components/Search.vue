<template>
    <div class="flex items-center justify-between mt-5">
        <h2 class="font-bold text-[38px] text-[#275B1A]">Все фрукты</h2>
        <div class="flex gap-2 items-center border border-slate-200 p-2 rounded-full">
            <img src="../assets/search.svg" alt="">
            <input @input="onChange" placeholder="Поиск..." class=" outline-none border-none" type="text">
        </div>
    </div>
</template>

<script setup>
defineProps({
    onChange: Function
})
</script>
