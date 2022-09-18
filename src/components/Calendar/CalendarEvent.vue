<template>
  <div
    :class="`h-[20px] w-[20px] ${color} rounded-full border border-slate-400`"
  ></div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  color: string;
}>();
</script>

<style lang="scss" scoped>
@import "../../scss/app";
</style>
