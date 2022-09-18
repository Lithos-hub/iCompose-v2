<template>
  <div class="flex flex-col">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="bordered ? 'input border' : 'input'"
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
    bordered?: boolean;
  }>(),
  {}
);
</script>

<style lang="scss" scoped>
.input {
  @apply p-3 pl-5 rounded-[25px] hover:shadow-lg focus:outline-none duration-200 ease-in-out;
}
</style>
