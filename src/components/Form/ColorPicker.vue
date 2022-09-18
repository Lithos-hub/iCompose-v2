<template>
  <div class="flex flex-col min-w-[290px] relative">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <!-- <input
      :value="modelValue"
      type="color"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="bordered ? 'input border' : 'input'"
      :name="name"
    /> -->
    <div class="mx-auto">
      <button
        :class="`ml-1 min-w-[48px] h-[48px] rounded-full ${selectedColor} text-white`"
        @click="showColorPicker = !showColorPicker"
      >
        <i
          :class="`fa-solid fa-droplet ${
            selectedColor === 'bg-white' ? 'text-black' : 'text-white'
          }`"
        ></i>
      </button>
    </div>

    <div
      class="mt-1 bg-white rounded-[25px] h-auto py-2 w-full border shadow-lg absolute top-[100px]"
      v-if="showColorPicker"
    >
      <Transition name="fade">
        <div class="p-2 grid grid-cols-5 gap-1 text-center">
          <div
            v-for="color of colors"
            :key="color"
            :class="`h-[30px] w-[30px] rounded-full ${color} cursor-pointer border border-slate-300 mx-auto`"
            @click="selectColor(color)"
          ></div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* It doesn't work
    import { FormProps } from "../interfaces/form";
  */

import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    modelValue: string;
    bordered?: boolean;
  }>(),
  {}
);

const showColorPicker = ref(false);

const selectedColor = ref("bg-indigo-800");

const colors = [
  "bg-white",
  "bg-slate-400",
  "bg-black",
  "bg-pink-400",
  "bg-red-400",
  "bg-indigo-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-lime-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-sky-700",
  "bg-blue-400",
  "bg-cyan-400",
  "bg-teal-600",
];

const selectColor = (color: string) => {
  selectedColor.value = color;
  emit("update:modelValue", color);
};
</script>

<style lang="scss" scoped>
@import "../../scss/app";
.input {
  @apply h-[48px] w-auto px-[30px] py-[10px] rounded-[25px] hover:shadow-lg focus:outline-none duration-200 ease-in-out;
}
</style>
