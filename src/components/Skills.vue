<template>
  <div class="section min-h-screen flex items-center justify-center p-4">
    <div class="container mx-auto">
      <div class="font-pacifico text-center text-[#CC6E62] text-4xl mb-4 font-bold">Skills</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(category, index) in skills"
          :key="index"
          class="bg-[#c6af95] p-4 rounded-lg shadow"
        >
          <h3 class="text-xl font-semibold mb-3 text-white">{{ category.category }}</h3>
          <ul class="space-y-2 text-sm md:text-base">
            <li
              v-for="(item, itemIndex) in category.items"
              :key="itemIndex"
              class="text-gray-100 flex items-center"
            >
              <div class="my-1">
                <span class="text-yellow-300 mr-2 flex-shrink-0">&#9733;</span>
                <span>{{ item }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  {
    category: '前端技能',
    items: [
      '熟悉 HTML5 與 CSS3 語言',
      '熟悉 Tailwind CSS 框架',
      '響應式 RWD 應用開發',
      '熟悉 JavaScript 與 ES6 知識',
      '熟悉 Vue3 語法以及 Vue-Router 應用',
      '運用 Axios 串接後端 API'
    ]
  },
  {
    category: '後端與版本控制',
    items: [
      '了解 Node.js 與 Express.js 應用',
      '熟悉 Git 指令並依循 Git Flow 進行版本控管',
      '使用 Python 開發小工具'
    ]
  }
]);
</script>