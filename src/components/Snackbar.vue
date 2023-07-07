<template>
  <div :class="'snackbar snackbar__show ' + type">
    <div>
      <h1 class="text-white pt-3 pl-5 text-xl">
        <i :class="`${icon} text-white text-md mr-8`"></i>
        {{ title }}
      </h1>
      <p class="text-white ml-20 text-sm">{{ message }}</p>
    </div>
    <button
      class="p-5 mr-10 my-auto text-xl text-white hover:shadow-md hover:drop-shadow-md w-[40px] h-[40px] rounded-full relative duration-200"
      @click="close"
    >
      <i class="snackbar__icon fa-solid fa-xmark"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
  name: "iC-Snackbar",
  emits: ["close-snackbar"],
  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    type: {
      type: String,
      default: "info",
    },
    icon: {
      type: String,
      default: "fa-circle-info",
    },
  },
  setup(_, { emit }: SetupContext) {
    const close = (): void => emit("close-snackbar");

    return { close };
  },
});
</script>

<style lang="scss" scoped>
.snackbar {
  @apply fixed left-0 -bottom-[200px] w-full h-[75px] z-40 shadow-md flex justify-between;
}
.success {
  background-size: cover;
  background: linear-gradient(to right, #489734, #57be45, #489734);
  animation: backgroundMotion 1s linear infinite;
}
.error {
  background-size: cover;
  background: linear-gradient(to right, #973434, #be4545, #973434);
  animation: backgroundMotion 1s linear infinite;
}
.info {
  background-size: cover;
  background: linear-gradient(to right, #3e72a0, #5f86d5, #3e72a0);
  animation: backgroundMotion 1s linear infinite;
}
.snackbar__icon {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}

@keyframes backgroundMotion {
  from {
    background-position: 0vw;
  }
  to {
    background-position-x: 100vw;
  }
}
</style>
