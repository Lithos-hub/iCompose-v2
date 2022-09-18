<template>
  <div class="bg-white shadow-lg p-5 w-[350px] rounded-lg">
    <h2 class="text-xl mb-2">Events</h2>
    <hr />
    <h4 class="text-md mt-2 font-medium">
      Date:
      <span class="p-1 px-3 bg-indigo-800 text-white rounded-[25px]">{{
        `${formatDateNumber(date.day)}-${formatDateNumber(date.month)}-${
          date.year
        }`
      }}</span>
    </h4>
    <h4 class="text-md mt-10 font-medium">Current events</h4>
    <div v-if="events && events.length" class="overflow-y-scroll max-h-[200px]">
      <div
        v-for="(item, i) of events"
        :key="i"
        :class="`rounded-full w-auto p-2 px-3 my-1 flex justify-between cursor-pointer border shadow-md ${item.color}`"
        @click="showEventInfo(item)"
      >
        <div :class="item.color === 'bg-white' ? 'text-black' : 'text-white'">
          {{ item.title }}
        </div>
        <div @click="deleteEvent(item)" class="cursor-pointer">
          <i
            :class="`fa-solid fa-xmark ${
              item.color === 'bg-white' ? 'text-black' : 'text-white'
            }`"
          ></i>
        </div>
      </div>
    </div>
    <div v-else>
      <span class="text-red-500">There are no events</span>
    </div>
    <hr class="mt-10 mb-5" />
    <h4 class="text-md font-medium">Add new events</h4>
    <div>
      <Input
        v-model="eventData.title"
        label="Title"
        placeholder="Title"
        class="my-2"
        :bordered="true"
      />
      <Textarea
        v-model="eventData.description"
        label="Description"
        placeholder="Description"
        class="my-2"
        :bordered="true"
      />
      <ColorPicker
        v-model="eventData.color"
        label="Event color"
        placeholder="Select a color"
        :bordered="true"
      />
      <div class="flex justify-between mt-5">
        <button
          class="bg-white border text-black hover:bg-slate-700 hover:text-white btn__dialog"
          @click="close"
        >
          Close
        </button>
        <button
          :class="
            !eventData.title
              ? 'bg-gray-400 text-slate-800 btn__dialog'
              : 'bg-indigo-600 hover:bg-indigo-400 text-white btn__dialog'
          "
          :disabled="!eventData.title"
          @click="addEvent"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

import Input from "../form/Input.vue";
import Textarea from "../Form/Textarea.vue";

import { EventModel } from "../../interfaces/calendar";
import ColorPicker from "../Form/ColorPicker.vue";

interface DateModel {
  day: number;
  month: number;
  year: number;
}

const props = defineProps<{
  events: EventModel[] | [];
  date: DateModel;
}>();

const emit = defineEmits(["add", "close", "delete-event"]);

const eventData: Ref<EventModel> = ref({
  title: "",
  description: "",
  color: "bg-white",
});

const formatDateNumber = (num: number) => {
  return num < 10 ? `0${num}` : num;
};
const showEventInfo = (event: EventModel) => {
  eventData.value = { ...event };
};
const addEvent = () => {
  emit("add", { id: new Date().getTime() as number, ...eventData.value });
  eventData.value = {
    title: "",
    description: "",
    color: "",
  };
};
const deleteEvent = (item: EventModel) =>
  emit("delete-event", item, props.date.day);
const close = () => emit("close");
</script>

<style lang="scss" scoped>
@import "../../scss/app";
</style>
