<template>
  <div class="section">
    <div class="flex items-center justify-center min-h-screen py-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-3xl w-full px-4">
        <div class="col-span-12">
          <div
            class="font-pacifico text-center text-[#CC6E62] text-3xl sm:text-4xl mb-4 md:mb-0 font-bold"
          >
            It's Me
          </div>
        </div>

        <div class="col-span-12 md:col-span-4 flex justify-center items-center">
          <img
            src="https://lube4100.github.io/img/me.jpg"
            class="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover"
          />
        </div>

        <div class="col-span-12 md:col-span-8 flex justify-center items-center order-3">
          <div class="w-full max-w-sm h-full bg-[#f0e4d7] rounded-[2rem] p-6 shadow-lg relative">
            <div
              class="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f0e4d7] transform rotate-45"
            ></div>
            <div
              class="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#f0e4d7] transform rotate-45"
            ></div>
            <vue-typer-next
              v-if="isThisPage"
              :data="personalIntroduction"
              cursor-char="|"
              class="text-[#9B8970] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { vueTyperNext } from 'vue-typer-next';
import 'vue-typer-next/dist/style.css';

const personalIntroduction = ref([
  '我是趙子潔，',
  '畢業於淡江資訊傳播學系，',
  '因緣際會下接觸網頁前端，',
  '展開一場學習程式的旅程，',
  '很喜歡打完程式看到成果的成就感，',
  '雖然途中常常遭遇挫折，但也越挫越勇，',
  '藉由解決困難與學習新知來充實自己！'
]);

const isThisPage = ref(false);

const checkHash = () => {
  isThisPage.value = window.location.hash === '#about-me';
};

onMounted(() => {
  checkHash();
  window.addEventListener('hashchange', checkHash);
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', checkHash);
});
</script>
