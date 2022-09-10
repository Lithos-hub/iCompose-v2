<template>
  <div class="flex flex-col">
    <label class="m-2 font-medium">Text field</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as EventTarget).value)"
      class="p-3 pl-5 rounded-full hover:shadow-lg focus:outline-none duration-200 ease-in-out"
      placeholder="Write here"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
