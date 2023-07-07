<template>
  <div
    class="mx-auto mt-[100px] max-w-[1000px] bg-white p-5 rounded-[15px] shadow-md overflow-auto max-h-[800px]"
  >
    <section
      class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center bg-[#303030] rounded-xl"
    >
      <div
        v-for="({ variant, text }, i) of spinners"
        :key="i"
        class="p-10 text-white flex flex-col gap-5 items-center justify-center"
      >
        <h2>{{ text }}</h2>
        <Spinner :variant="variant" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Spinner from "@/components/Spinner.vue";

const spinners = [
  {
    variant: "primary",
    text: "Primary",
  },
  {
    variant: "secondary",
    text: "Secondary",
  },
  {
    variant: "tertiary",
    text: "Tertiary",
  },
  {
    variant: "modern",
    text: "Modern",
  },
  {
    variant: "atom",
    text: "Atom",
  },
];
</script>
