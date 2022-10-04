<template>
  <nav
    class="z-30 py-3 px-10 flex justify-between border border-b-indigo-100 bg-white"
  >
    <div class="flex">
      <h1 class="text-xl">iCompose</h1>
      <div
        class="py-1 px-2 ml-5 bg-indigo-800 text-cyan-200 font-semibold rounded-full"
      >
        v{{ version }}
      </div>
    </div>
    <div class="flex flex-row justify-around">
      <router-link
        v-for="{ text, to } of menuItems"
        :to="to"
        class="mx-2 my-auto font-semibold hover:text-indigo-800"
      >
        {{ text }}
      </router-link>
      <a
        href="https://github.com/Lithos-hub/iCompose-v2"
        target="_blank"
        class="mx-2 my-auto"
      >
        <i class="fa-brands fa-github text-[20px] hover:text-indigo-800"></i>
      </a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const version = import.meta.env.VITE_APP_VERSION;

const menuItems = ref([
  {
    text: "Home",
    to: "/home",
  },
  {
    text: "About",
    to: "/about",
  },
]);
</script>
