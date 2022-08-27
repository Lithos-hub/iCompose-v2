<template>
  <nav
    class="p-5 w-[250px] h-screen bg-white border-r-indigo-100 drop-shadow-lg overflow-scroll"
  >
    <h1>Components</h1>
    <router-link
      v-for="{ text, to } of menuItems"
      :to="to"
      class="p-2 ml-5 my-3 block font-semibold hover:bg-indigo-800 hover:text-white rounded-lg"
    >
      {{ text }}
    </router-link>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const menuItems = ref([
  {
    text: "Spreadsheet Table",
    to: "/spreadsheet",
  },
  {
    text: "Simple Data Table",
    to: "/simpleTable",
  },
  {
    text: "Card",
    to: "/card",
  },
  {
    text: "Smart form",
    to: "/smartForm",
  },
]);
</script>

<style lang="" scoped></style>
