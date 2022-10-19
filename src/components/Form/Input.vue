<template>
  <div class="flex flex-col">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :type="type"
      :required="required"
      :class="bordered && valid ? 'input border' : 'input invalid'"
      :placeholder="placeholder"
    />
    <small class="text-red-500 ml-3" v-if="!valid">{{ errorMessage }}</small>
  </div>
</template>

<script lang="ts" setup>
/* It doesn't work
  import { FormProps } from "../interfaces/form";
*/

defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    type: String || Number,
  },
  bordered: {
    type: Boolean,
  },
  required: {
    type: Boolean,
  },
  valid: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.input {
  @apply p-3 pl-5 rounded-[15px] hover:shadow-lg focus:outline-none duration-200 ease-in-out;
}

.invalid {
  @apply p-3 pl-5 rounded-[15px] border-2 border-red-500 focus:outline-none duration-200 ease-in-out;
}
</style>
