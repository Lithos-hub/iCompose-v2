<template>
  <div>
    <div
      class="bg-white border h-[150px] w-[100px] relative cursor-pointer duration-200 rounded-md hover:scale-105 hover:shadow-md hover:border-2 hover:border-slate-900"
    >
      <div class="absolute bottom-1 left-1 font-medium">{{ numberDay }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  numberDay: number;
}

const props = defineProps<Props>();
</script>
