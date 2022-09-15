<template>
  <div class="z-20 h-[150px] w-[100px]">
    <div
      v-if="event"
      class="bg-orange-400 text-white text-center w-9/12 p-2 px-3 rounded-[25px] mx-auto hover:bg-orange-300 cursor-pointer"
    >
      <div class="flex justify-between">
        <div class="text-sm">{{ event.title }}</div>
        <div @click="deleteEvent(event)">
          <i class="fa-solid fa-xmark text-sm"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EventModel } from "../../interfaces/calendar";

interface Props {
  event: EventModel;
}

const props = defineProps<Props>();

const emit = defineEmits(["delete"]);

const deleteEvent = (event: EventModel) => emit("delete", event);
</script>
