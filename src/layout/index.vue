<template>
  <div class="flex flex-col flex-grow w-full h-screen m-0 p-0">
    <Navbar />
    <main class="flex flex-1 m-0">
      <SideMenu class="z-20 w-[75px] hover:w-[300px] mr-[50px]" />
      <div class="flex-1 container relative mx-auto pl-[50px]">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import SideMenu from "../components/SideMenu.vue";
</script>
