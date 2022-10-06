<template>
  <button
    :class="`${variant} w-[${width}px] max-w-[${maxWidth}px] h-[${height}px] max-h-[${maxHeight}px]`"
    :disabled="variant === 'disabled'"
  >
    <i :class="icon" v-if="iconLeft" />
    <span class="mx-2"> Click me! </span>
    <i :class="icon" v-if="iconRight" />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  icon?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.default {
  transition: all 0.3s ease;
  @apply bg-indigo-800 p-2 text-white rounded-sm hover:bg-indigo-500 hover:shadow-lg duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.bordered {
  transition: all 0.3s ease;
  @apply bg-transparent p-2 text-black border border-black rounded-sm hover:bg-slate-100 hover:shadow-lg duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.disabled {
  transition: all 0.3s ease;
  @apply bg-gray-300 p-2 text-gray-100 rounded-sm  duration-200;
}

.rounded {
  transition: all 0.3s ease;
  @apply bg-orange-500 p-2 text-gray-100 rounded-full duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.icon {
  transition: all 0.3s ease;
  @apply bg-sky-500 p-2 text-gray-100 rounded-sm duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.neumorphic {
  @apply bg-transparent text-[#303030] py-2 px-[1.5rem] rounded-[0.5rem] duration-1000 ease-linear;
  box-shadow: 0.5rem 0.5rem 1rem #dfdfdf, -0.5rem -0.5rem 1rem white;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem white, -0.5rem -0.5rem 1rem #dfdfdf;
  }
  &:active {
    box-shadow: inset 2rem 2rem 1rem white, inset 2rem 2rem 1rem #dfdfdf;
  }
}
</style>
