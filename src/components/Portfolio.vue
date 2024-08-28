<template>
  <div class="section">
    <div class="slide" v-for="(portfolio, index) in portfolios" :key="index">
      <div class="flex items-center justify-center h-screen">
        <div class="w-full p-3 md:w-[650px]">
          <h3 class="text-center text-primary md:text-3xl text-xl font-bold">
            {{ portfolio.title }}
          </h3>
          <div class="relative mt-4 mb-8 overflow-hidden rounded-lg shadow-lg">
            <img class="w-full object-cover" :src="portfolio.imageSrc" :alt="portfolio.title" />
          </div>
          <h4 class="text-center text-secondary md:text-lg text-sm">{{ portfolio.description }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const portfolios = ref([
  {
    title: 'Vue3 Youtube App',
    description:
      '此專案是由 Vue3 + Vite 建立，透過此專案練習了 Vue3 的語法、如何使用 Tailwind 切版、也學會了如何透過 axios 進行串接 API，以及如何使用 Vue Router 建立頁面路由。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-youtube-app.png', import.meta.url).href
  },
  {
    title: 'Vue3 weather app',
    description:
      '此專案是由 Vue3 + Vite 建立，除了 Vue3 的語法以及 Tailwind 切版之外，還使用到 localstorage 進行緩存，並串接了 OpenWeatherMap API。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-youtube-app.png', import.meta.url).href
  }
]);
</script>

<style scoped></style>
