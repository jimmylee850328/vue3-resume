<template>
  <div class="section">
    <div class="slide" v-for="(portfolio, index) in portfolios" :key="index">
      <div class="flex items-center justify-center h-screen">
        <div class="w-full p-3 md:w-[650px]">
          <div class="flex justify-center items-center gap-2 mb-4">
            <p class="text-center text-primary md:text-3xl text-xl font-bold">
              {{ portfolio.title }}
            </p>
            <div class="flex gap-2">
              <div class="relative group" v-if="portfolio.vercelLink">
                <a
                  :href="portfolio.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 bg-primary rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-md"
                >
                  <img :src="vercelIcon" alt="Vercel" class="w-4 h-4" />
                </a>
                <span
                  class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  Vercel Demo
                </span>
              </div>

              <div class="relative group" v-if="portfolio.githubLink">
                <a
                  :href="portfolio.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 bg-primary rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-md"
                >
                  <img :src="githubIcon" alt="GitHub" class="w-4 h-4" />
                </a>
                <span
                  class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  GitHub Repo
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4 mb-8 overflow-hidden rounded shadow">
            <img class="w-full object-cover" :src="portfolio.imageSrc" :alt="portfolio.title" />
          </div>
          <div class="flex justify-center">
            <p class="text-left text-secondary text-lg font-medium max-w-[95%]">
              {{ portfolio.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import vercelIcon from '@/assets/images/portfolio/vercel-icon.svg';
import githubIcon from '@/assets/images/portfolio/github-icon.svg';

const portfolios = ref([
  {
    title: 'Vue3 Youtube App',
    description:
      '此專案是由 Vue3 + Vite 建立，透過此專案練習了 Vue3 的語法、如何使用 Tailwind 切版、也學會了如何透過 axios 進行串接 API，以及如何使用 Vue Router 建立頁面路由。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-youtube-app.png', import.meta.url).href,
    vercelLink: 'https://your-youtube-app-vercel-link.com',
    githubLink: 'https://github.com/yourusername/vue3-youtube-app'
  },
  {
    title: 'Vue3 weather app',
    description:
      '此專案是由 Vue3 + Vite 建立，除了 Vue3 的語法以及 Tailwind 切版之外，還使用到 localstorage 進行緩存，並串接了 OpenWeatherMap API。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-youtube-app.png', import.meta.url).href,
    vercelLink: 'https://your-weather-app-vercel-link.com',
    githubLink: 'https://github.com/yourusername/vue3-weather-app'
  }
]);
</script>

<style scoped></style>
