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
        @input="onInput(`input-${i + 1}`)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted, watch } from "vue";
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

const onInput = (id: string) => {
  const nextInput = document.querySelector(`#${id}`) as HTMLElement | null;

  if (nextInput) {
    nextInput.focus();
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

<style lang="" scoped></style>
