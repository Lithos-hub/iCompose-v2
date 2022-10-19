<template>
  <div class="relative">
    <label class="absolute left-[30px] my-auto font-medium">{{ label }}</label>
    <input type="checkbox" :value="modelValue" class="hidden" />
    <div
      id="checkbox"
      :class="modelValue ? 'checkbox bg-indigo-800' : 'checkbox'"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <i
        v-if="modelValue"
        class="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[13px]"
      ></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(["update:modelValue"]);

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: boolean;
    valid?: boolean;
  }>(),
  {}
);
</script>

<style lang="scss" scoped>
.checkbox {
  @apply h-[22px] w-[22px] border border-blue-300 rounded relative cursor-pointer;
}

.checkbox:hover {
  box-shadow: 0px 0px 7px rgba(58, 137, 177, 0.391);
}
</style>
