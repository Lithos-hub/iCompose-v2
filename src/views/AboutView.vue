<template>
  <div
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <h1 class="text-5xl text-indigo-800">About iCompose</h1>
    <p class="text-lg mt-5 text-slate-800">
      iCompose is a component portfolio made with Vue 3, Vite, TypeScript and
      Tailwind CSS.
    </p>
    <p class="text-lg mt-5 text-slate-800">
      Each component have been made from scratch without using third parties
      libraries. The goal is to create a component framework (such as Vuetify or
      Bootstrap) and be able to install and use it in other projects.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
});
</script>

<style scoped></style>
