<template>
  <div class="spinner__wrapper">
    <div class="spinner"></div>
    <small class="font-medium text-[12px] text-[#216d8b]" v-if="innerText">{{
      innerText
    }}</small>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  innerText?: string;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.spinner__wrapper {
  position: relative;
}
.spinner {
  height: 80px;
  width: 80px;
  border: 6px solid #216d8b;
  border-radius: 100%;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  animation: rotate 1s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
small {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
