<template>
  <div class="relative">
    <!-- 漢堡選單按鈕 (只在小螢幕顯示) -->
    <button @click="toggleMenu" class="fixed top-4 left-4 z-50 text-[#d1a39e] md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- 左側邊欄 -->
    <nav
      id="menu"
      :class="[
        'bg-[#f5f1e8] fixed left-0 top-0 h-full w-64 p-8 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0 lg:w-1/6 md:w-1/5'
      ]"
    >
      <div>
        <div class="text-[#d1a39e] font-semibold mb-8">
          <span class="border border-[#d1a39e] px-2 py-1">LUBE CHAO</span>
        </div>
        <ul class="space-y-4 text-[#d1a39e]">
          <li><a href="#page1" @click="closeMenu">首頁</a></li>
          <li><a href="#page2" @click="closeMenu">關於我</a></li>
          <li><a href="#page3" @click="closeMenu">經歷</a></li>
          <li><a href="#page4" @click="closeMenu">作品</a></li>
          <li><a href="#page5" @click="closeMenu">聯絡我</a></li>
        </ul>
      </div>
      <div class="text-sm text-gray-500">© 2022 LUBE</div>
    </nav>

    <!-- 遮罩層 (僅在小螢幕且選單開啟時顯示) -->
    <div
      @click="closeMenu"
      :class="[
        'fixed inset-0 bg-black bg-opacity-50 z-30',
        isMenuOpen ? 'block' : 'hidden',
        'md:hidden'
      ]"
    ></div>

    <!-- Fullpage 內容 -->
    <div class="md:flex">
      <!-- 這個 div 用來在大螢幕上佔位，確保內容區域寬度正確 -->
      <div class="hidden md:block lg:w-1/6 md:w-1/5"></div>

      <div class="w-full lg:w-5/6 md:w-4/5">
        <full-page :options="options" id="fullpage" ref="fullpage">
          <!-- 第一個 Section -->
          <Homepage />

          <!-- 第二個 Section -->
          <Portfolio />

          <!-- 其他 Sections (保持不變) -->

          <div class="section">
            <h3 class="text-center text-2xl">Section 3</h3>
          </div>
          <div class="section">
            <h3 class="text-center text-2xl">Section 4</h3>
          </div>
          <div class="section">
            <h3 class="text-center text-2xl">Section 5</h3>
          </div>
        </full-page>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Homepage from '@/components/Homepage.vue';
import Portfolio from '@/components/Portfolio.vue';

const fullpage = ref(null);
const isMenuOpen = ref(false);

const options = {
  afterLoad: afterLoad,
  scrollOverflow: true,
  scrollBar: false,
  menu: '#menu',
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  sectionsColor: ['#dcccb2', '#dcccb2', '#dcccb2', '#dcccb2', '#dcccb2']
};

function afterLoad() {
  console.log('After load');
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
