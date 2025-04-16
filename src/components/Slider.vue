<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 2000,
}

const sliderItems = [
    {
        id: 1,
        title: 'Покупай лучшие фрукты только у нас!',
        description: '№1 в Казахстане',
        image: '/fruits.svg'
    },
    {
        id: 2,
        title: 'Самые свежие товары во всем мире!',
        description: 'Топ 1 в СНГ',
        image: '/fruits.svg'
    },
    {
        id: 3,
        title: 'Далеко идти не надо, привезут доставкой!',
        description: 'Никаких конкурентов',
        image: '/fruits.svg'
    },
    
]
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in sliderItems" :key="slide.id">
        <div class="bg-[#F4EFE9] rounded-[20px] carousel__item h-[400px] w-full mt-[70px] flex justify-between items-center p-[70px]"> 
            <div class="flex flex-col gap-9">
                <h2 class="text-[#275B1A] font-bold text-[48px] w-[550px]">{{  slide.title }}</h2>
                <p class="text-[#C4C4C4] text-[50px]"> {{ slide.description }}</p>
            </div>
            <img :src="slide.image" alt="">
        </div>
    </Slide>

    <template #addons>
        
      <Navigation />
    </template>
  </Carousel>
</template>
<style lang="scss" scoped>

</style>