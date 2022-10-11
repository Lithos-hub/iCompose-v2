<template>
  <div class="relative">
    <header>
      <slot name="card-header"></slot>
    </header>
    <main>
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
