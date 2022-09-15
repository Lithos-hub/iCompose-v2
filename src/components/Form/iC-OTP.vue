<template>
  <label class="m-2 font-medium" v-if="label">{{ label }}</label>
  <div class="flex mt-3">
    <div v-for="i in numOfInputs" :key="i">
      <input
        v-model="inputValue[`input_${i - 1}`]"
        :id="`input-${i}`"
        maxlength="1"
        autocomplete="off"
        class="mx-1 w-[50px] h-[50px] shadow-md border-zinc-800 rounded-md text-[30px] text-center hover:shadow-lg focus:outline-none"
        @input="onInput($event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, watch } from "vue";
/* It doesn't work
    import { FormProps } from "../interfaces/form";
  */

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: string;
  }>(),
  {}
);

const numOfInputs: Ref<number> = ref(5);
const otpCounter: Ref<number> = ref(1);

const inputValue = ref(
  Object.assign(
    {},
    ...Array.from(Array(numOfInputs.value).keys()).map((num) => {
      return {
        [`input_${num}`]: undefined,
      };
    })
  )
);

const onInput = (event: Event): void => {
  const e = event as InputEvent;
  const inputType = e.inputType;

  const { target } = event;
  const id = (target as HTMLInputElement).id;

  const [_, index] = id.split("-");

  let numIndex = Number(index);

  let nextInput = document.querySelector(
    `#input-${numIndex > 5 ? 5 : numIndex + 1}`
  ) as HTMLElement | null;

  if (inputType === "deleteContentBackward") {
    otpCounter.value === 0 ? (otpCounter.value = 1) : otpCounter.value--;
    const prevInput = document.querySelector(
      `#input-${otpCounter.value}`
    ) as HTMLElement | null;
    setTimeout(() => {
      prevInput?.focus();
    }, 250);
  } else {
    if (nextInput) {
      otpCounter.value > 5 ? (otpCounter.value = 5) : otpCounter.value++;
      nextInput.focus();
    }
  }
};

watch(
  () => inputValue.value,
  (val) => {
    emit("update:modelValue", Object.values(val).join(""));
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: none;
}
</style>
