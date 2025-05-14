<template>
    <div class="py-[30px] border-b-[1px] border-[#D9D9D9] justify-between flex mb-10">
        <router-link to="/">
            <div class="flex gap-4 items-center">
                <div>

                    <img src="../assets/logo.svg" alt="">

                </div>
                <div class="flex flex-col  gap-2">
                    <span class="text-[20px] font-bold">NICE FRUITS</span>
                    <span class="text-[14px] mt-[-14px] text-[#9D9D9D]">Твой фруктовый рай</span>
                </div>
            </div>
        </router-link>
        <div class="flex gap-6">
            <div class="flex gap-2 items-center cursor-pointer" @click="toggleCart">
                <div>
                    <img class="w-[20px]" src="../assets/korz.svg" alt="">
                </div>
                <span class="font-[14px] text-[#5C5C5C]">{{ totalPrice }} тг.</span>

            </div>
            <div class="flex items-center justify-center">
                <router-link to="/favorites">
                    <div class="flex gap-2 items-center">
                        <div>
                            <img class="w-[20px]" src="../assets/favorite.svg" alt="">
                        </div>
                        <span class="font-[14px] text-[#5C5C5C]">Избранное</span>
                    </div>
                </router-link>
            </div>


            <div class="flex gap-2 items-center">
                <div>
                    <img class="w-[20px]" src="../assets/Union.svg" alt="">
                </div>
                <span class="font-[14px] text-[#5C5C5C]">Профиль</span>
            </div>

        </div>
    </div>

</template>

<script setup>



defineProps({
    toggleCart: Function,
    isOpenCart: Boolean,
    totalPrice: Number
})


</script>

<style lang="scss" scoped></style>
