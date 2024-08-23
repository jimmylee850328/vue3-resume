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
      :class="[
        'bg-[#f5f1e8] fixed left-0 top-0 h-full w-64 p-8 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0 md:w-1/5 md:relative'
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
      <div class="hidden md:block md:w-1/5"></div>

      <div class="w-full md:w-4/5">
        <full-page :options="options" id="fullpage" ref="fullpage">
          <!-- 第一個 Section -->
          <div class="section">
            <div class="flex items-center justify-center h-screen">
              <div class="relative w-full max-w-md px-4 md:px-0">
                <!-- 粉紅色背景框 -->
                <div
                  class="absolute -top-5 left-5 w-full md:w-[480px] h-[300px] bg-[#d3756e]"
                ></div>

                <!-- 圖片 -->
                <img
                  src="https://lube4100.github.io/img/kv-pic.jpg"
                  alt="Beach scene"
                  class="relative z-10 w-full md:w-[450px] h-auto md:h-[330px] object-cover"
                />

                <!-- 文字內容 -->
                <div class="absolute bottom-0 left-0 transform translate-y-full pl-4 pt-2">
                  <p class="text-[#d1a39e] text-lg">TZU-JIE CHAO</p>
                  <div class="w-12 h-0.5 bg-[#d1a39e] mt-2"></div>
                </div>

                <!-- 垂直文字 -->
                <div
                  class="absolute top-[50%] left-0 transform -rotate-90 origin-bottom-left text-[#CC6E62] text-lg z-10 hidden md:block"
                >
                  resume
                </div>
              </div>
            </div>
          </div>

          <!-- 其他 Sections (保持不變) -->
          <div class="section">
            <div class="slide">
              <h3 class="text-center text-2xl">Slide 2.1</h3>
            </div>
            <div class="slide">
              <h3 class="text-center text-2xl">Slide 2.2</h3>
            </div>
            <div class="slide">
              <h3 class="text-center text-2xl">Slide 2.3</h3>
            </div>
          </div>
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
import { ref } from 'vue'

const fullpage = ref(null)
const isMenuOpen = ref(false)

const options = {
  licenseKey: 'YOUR_KEY_HERE',
  afterLoad: afterLoad,
  scrollOverflow: true,
  scrollBar: false,
  menu: '#menu',
  navigation: true,
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  sectionsColor: ['#dcccb2', '#ff5f45', '#0798ec', '#fec401', '#1bcee6']
}

function afterLoad() {
  console.log('After load')
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>