<template>
  <div class="cell relative">
    <div
      class="grid grid-cols-4 gap-2 m-1 text-center"
      v-show="eventItems?.length"
    >
      <CalendarEvent
        v-for="(item, i) of eventItems"
        :key="i"
        :color="item.color"
      />
    </div>
    <div class="absolute bottom-1 left-1 font-medium">{{ numberDay }}</div>
  </div>
</template>

<script lang="ts" setup>
import { EventModel } from "../../interfaces/calendar";
import CalendarEvent from "./CalendarEvent.vue";

interface Props {
  numberDay: number;
  eventItems?: EventModel[];
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "../../scss/app";
</style>
