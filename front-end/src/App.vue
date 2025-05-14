<template>
  <div class="bg-[#275B1A] px-[100px] py-[50px]">
    <div class="bg-white rounded-[20px] px-[80px]" v-auto-animate>
      <Header :isOpenCart="isOpenCart" :toggleCart="toggleCart" :totalPrice="totalPrice"/>

      <router-view :isOpenCart="isOpenCart" :toggleCart="toggleCart" :changeTotalPrice="changeTotalPrice">
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Main from "./pages/Main.vue";
import Favorites from "./pages/Favorites.vue"
import Header from "./components/Header.vue";

import { ref } from "vue"
const isOpenCart = ref(false)

const totalPrice = ref(0)

function changeTotalPrice (total) {
    totalPrice.value = total
}

function toggleCart() {
  isOpenCart.value = !isOpenCart.value
}


</script>
