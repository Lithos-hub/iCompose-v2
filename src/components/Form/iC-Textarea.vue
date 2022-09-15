<template>
  <div class="flex flex-col">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <textarea
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      class="p-3 pl-5 rounded-2xl hover:shadow-lg focus:outline-none duration-200 ease-in-out"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
/* It doesn't work
    import { FormProps } from "../interfaces/form";
  */

defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    modelValue: string;
  }>(),
  {}
);
</script>
