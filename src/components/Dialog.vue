<template>
  <TransitionGroup name="fade">
    <div
      id="overlay"
      class="z-30 fixed top-0 left-0 h-screen w-screen bg-slate-700 bg-opacity-50"
      @click="!persistent ? close() : animatePulse()"
    ></div>
    <div class="z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        ref="innerDialog"
        class="relative w-[900px] h-auto bg-white rounded-[15px] shadow-lg pb-2"
      >
        <header
          class="relative top-0 left-0 w-full h-auto bg-indigo-800 rounded-t-[15px] p-2 text-white"
        >
          <div class="flex justify-between">
            <h1 class="text-2xl p-2 font-medium">{{ props.title }}</h1>
            <div class="my-auto mr-5">
              <div
                class="p-2 rounded-full text-center h-[35px] w-[35px] hover:bg-indigo-500 duration-200"
                @click="close"
              >
                <i class="fa-solid fa-xmark text-[20px]"></i>
              </div>
            </div>
          </div>
        </header>
        <main class="m-5">
          <slot></slot>
        </main>
        <footer class="pa-5 m-5">
          <slot name="footer" class=""></slot>
        </footer>
      </div>
    </div>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  title: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  persistent?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["close"]);

const innerDialog = ref();

const close = () => emit("close");

const animatePulse = () => {
  innerDialog.value.style.transition = "all .1s ease";
  innerDialog.value.style.transform = "scale(1.05)";
  setTimeout(() => {
    innerDialog.value.style.transform = "scale(1)";
  }, 100);
};
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";
</style>
