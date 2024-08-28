<template>
  <div class="section">
    <div class="slide">
      <vue-typer-next v-if="isPage2" class="ml-3" :data="testData" cursor-char="|" />
    </div>
    <div class="slide">
      <h3 class="text-center text-2xl">Slide 2.2</h3>
    </div>
    <div class="slide">
      <h3 class="text-center text-2xl">Slide 2.3</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { vueTyperNext } from 'vue-typer-next';
import 'vue-typer-next/dist/style.css';

const testData = ref(
  'ehwifhoewifhoiewhfoiewhfoiewhoifhioewhfoiewfehwifhoewifhoiewhfoiewhfoiewhoifhioewhfoiewfehwifhoewifhoiewhfoiewhfoiewhoifhioewhfoiewf'
);
const isPage2 = ref(false);

const checkHash = () => {
  isPage2.value = window.location.hash === '#page2';
};

onMounted(() => {
  checkHash();
  window.addEventListener('hashchange', checkHash);
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', checkHash);
});
</script>

<style scoped></style>
