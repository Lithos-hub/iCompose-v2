<template>
  <div class="grid grid-cols-7 relative text-center">
    <div class="w-full" v-for="n in daysInWeek">
      {{ getDayName(n) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { daysInWeek, getDayName } from "./utils";
</script>
