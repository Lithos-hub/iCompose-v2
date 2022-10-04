<template>
  <div
    :class="`relative 
    ${width ? `w-[${width}px]` : 'w-auto'}
    ${height ? `h-[${height}px]` : 'h-auto'}
    ${maxWidth ? `max-w-[${maxWidth}px]` : ''}
    ${maxHeight ? `max-h-[${maxHeight}px]` : ''}
    `"
  >
    <header>
      <slot name="card-header"></slot>
    </header>
    <main class="m-0">
      <slot />
    </main>
    <footer>
      <slot name="card-footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
}>();
</script>
