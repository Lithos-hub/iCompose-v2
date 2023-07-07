<template>
  <div
    class="mx-auto mt-[100px] max-w-[1000px] bg-white p-5 rounded-[15px] shadow-md overflow-auto max-h-[800px]"
  >
    <section class="grid grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div class="relative text-center flex justify-center">
        <h1 class="my-auto text-2xl mr-5">#1</h1>
        <Spinner />
      </div>
      <div class="relative text-center flex justify-center">
        <h1 class="my-auto text-2xl mr-5">#2</h1>
        <Spinner inner-text="Loading..." />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Spinner from "@/components/Spinner.vue";
</script>
