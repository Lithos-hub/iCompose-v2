<template>
  <div class="container mx-auto mt-[200px]">
    <div class="grid grid-cols-3 gap-y-5 bg-white p-5 rounded-[15px] shadow-lg">
      <div
        v-for="({ variant, text, icon }, i) of buttonsList"
        :key="i"
        class="text-center"
      >
        <label class="block mb-2 font-semibold">{{ variant }}</label>
        <Button :variant="variant" width="150" :icon="icon">
          <span>{{ text }}</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/Button.vue";

const buttonsList = [
  {
    variant: "default",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
  {
    variant: "bordered",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
  {
    variant: "disabled",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
  {
    variant: "rounded",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
  {
    variant: "icon",
    width: "150",
    icon: "fa-solid fa-magnifying-glass",
    iconLeft: true,
    text: "Click me!",
  },
  {
    variant: "neumorphic",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
  {
    variant: "future",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
  {
    variant: "modern",
    width: "150",
    iconLeft: false,
    text: "Click me!",
  },
];
</script>
