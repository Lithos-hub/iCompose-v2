<template>
  <div class="container mx-auto mt-[200px]">
    <div class="grid grid-cols-3 gap-y-5 bg-white p-5 rounded-[15px] shadow-lg">
      <div class="text-center">
        <label class="block mb-2 font-semibold">Default</label>
        <Button variant="default" width="150" />
      </div>
      <div class="text-center">
        <label class="block mb-2 font-semibold">Bordered</label>
        <Button variant="bordered" width="150" />
      </div>
      <div class="text-center">
        <label class="block mb-2 font-semibold">Disabled</label>
        <Button variant="disabled" width="150" />
      </div>
      <div class="text-center">
        <label class="block mb-2 font-semibold">Rounded</label>
        <Button variant="rounded" width="150" />
      </div>
      <div class="text-center">
        <label class="block mb-2 font-semibold">Icon</label>
        <Button
          variant="icon"
          width="150"
          icon="fa-solid fa-magnifying-glass"
          icon-left
        />
      </div>
      <div class="text-center">
        <label class="block mb-2 font-semibold">Neumorphic</label>
        <Button variant="neumorphic" width="150" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../components/Button.vue";
</script>
