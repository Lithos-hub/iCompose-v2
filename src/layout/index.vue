<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <main class="flex flex-1">
      <SideMenu />
      <div class="flex-1">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/Navbar.vue";
import SideMenu from "../components/SideMenu.vue";
</script>
