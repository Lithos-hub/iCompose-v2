<template>
  <div class="flex flex-col flex-grow w-full h-screen">
    <header class="sticky top-0 w-full z-50">
      <Navbar />
    </header>
    <main class="flex flex-1">
      <SideMenu class="w-[75px] hover:w-[300px] mr-[50px]" />
      <div class="flex-1 container relative mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import SideMenu from "@/components/SideMenu.vue";
</script>
