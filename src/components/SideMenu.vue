<template>
  <nav
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-0 bg-white right-auto w-[17.5rem] shadow-lg py-5 px-8 overflow-y-auto"
  >
    <h1>Components</h1>
    <hr class="mt-3" />
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
  {
    text: "Snackbar",
    to: "/snackbar",
  },
]);
</script>

<style lang="" scoped></style>
