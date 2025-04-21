<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 5000,


}

const sliderItems = [
    {
        id: 1,
        title: 'Покупай лучшие фрукты у нас!',
        description: '№1 в Казахстане',
        image: '/slider.svg'
    },
    {
        id: 2,
        title: 'Самые свежие товары во всем мире!',
        description: 'Если не веришь попробуй!',
        image: '/slider.svg'
    },
    {
        id: 3,
        title: 'Hello',
        description: 'Hello',
        image: '/slider.svg'
    },
]

</script>

<template>
    <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in sliderItems" :key="slide.id">
            <div class="carousel__item bg-[#F4EFE9] w-full flex items-start justify-between p-20 rounded-[20px]">
                <div class="flex flex-col justify-between">
                    <h2 class="font-bold mb-4 text-[38px] text-[#275B1A]">{{ slide.title }}</h2>
                    <p class="text-[38px] font-bold mb-4 text-[#C4C4C4] ">{{ slide.description }}</p>
                </div>
                <img :src="slide.image" alt="Не прогружено">
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <CarouselNavigation>
                <template #prev>
                    <span>←</span>
                </template>
                <template #next>
                    <span>→</span>
                </template>
            </CarouselNavigation>


        </template>
    </Carousel>
</template>

<style scoped>
.carousel {
    --vc-nav-background: white;
    --vc-nav-color: #C8C8C8;
    --vc-nav-color-hover: black;
    --vc-nav-border-radius: 50%;
    --vc-nav-width: 40px;
    --vc-nav-height: 40px;
}
</style>