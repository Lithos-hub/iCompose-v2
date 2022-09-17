<template>
  <div class="bg-white shadow-lg p-5 w-[300px] rounded-lg">
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
    <div v-if="events && events.length" class="overflow-y-scroll max-h-[300px]">
      <div
        v-for="(item, i) of events"
        :key="i"
        class="bg-orange-500 rounded-full w-auto p-2 px-3 my-1 flex justify-between"
      >
        <div class="text-white">
          {{ item.title }}
        </div>
        <div @click="deleteEvent(item)" class="cursor-pointer">
          <i class="fa-solid fa-xmark text-white"></i>
        </div>
      </div>
    </div>
    <div v-else>
      <span class="text-red-500">There are no events</span>
    </div>
    <hr class="mt-10 mb-5" />
    <h4 class="text-md font-medium">Add new events</h4>
    <div class="flex flex-col justify-between h-full">
      <form @submit.prevent="addEvent">
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
        </div>
        <div class="flex justify-between mt-5">
          <button
            class="bg-white border text-black hover:bg-slate-700 hover:text-white btn__dialog"
            @click="close"
          >
            Close
          </button>
          <button
            type="submit"
            :class="
              !eventData.title
                ? 'bg-gray-400 text-slate-800 btn__dialog'
                : 'bg-indigo-600 hover:bg-indigo-400 text-white btn__dialog'
            "
            :disabled="!eventData.title"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

import Input from "../form/Input.vue";
import Textarea from "../Form/Textarea.vue";

import { EventModel } from "../../interfaces/calendar";

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
});

const formatDateNumber = (num: number) => {
  return num < 10 ? `0${num}` : num;
};
const addEvent = () => {
  emit("add", { id: new Date().getTime() as number, ...eventData.value });
  eventData.value = {
    title: "",
    description: "",
  };
};
const deleteEvent = (item: EventModel) =>
  emit("delete-event", item, props.date.day);
const close = () => emit("close");
</script>

<style lang="scss" scoped>
@import "../../scss/app";
</style>
