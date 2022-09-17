<template>
  <div class="grid grid-flow-col h-auto mx-auto w-full">
    <div></div>
    <div
      class="relative mt-4 w-full max-w-[900px] h-auto bg-white p-2 rounded-lg"
    >
      <CalendarDays />
      <div class="grid grid-cols-7 gap-1 relative mt-2">
        <CalendarCell
          class="bg-indigo-200 border"
          v-for="n in calendarFirstDay"
          :number-day="
            n + (typeof prevMonthFirstDay === 'number' ? prevMonthFirstDay : 0)
          "
        />
        <CalendarCell
          :class="`${
            i + 1 === currentDay
              ? 'cell__default bg-green-100'
              : 'cell__default bg-white'
          }`"
          v-for="(items, i) of events"
          :key="i"
          :number-day="i + 1"
          :eventItems="items"
          @delete="deleteEvent"
          @click="showAddEventDialog(i + 1)"
        />
        <CalendarCell
          class="bg-indigo-200 border"
          v-for="n in restDaysInMonth"
          :number-day="n"
        />
      </div>
    </div>
    <div>
      <CalendarDialog
        class="fixed top-[58px] right-0 h-screen"
        v-if="openDialog"
        :date="currentDateData"
        :events="[...events.at(currentDateData.day - 1)]"
        :key="reUpdateComponent"
        @add="addEvent"
        @delete-event="deleteEvent"
        @close="openDialog = false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted } from "vue";
import CalendarDays from "./CalendarDays.vue";

import {
  daysInMonth,
  daysInMonthLeap,
  daysInMonthMin,
  daysInMonthMax,
  monthMax,
  monthMin,
  dayMin,
  daysInWeek,
  getDayName,
} from "./utils";

import { EventModel, EventItemsModel } from "../../interfaces/calendar";

import CalendarDialog from "./CalendarDialog.vue";
import CalendarCell from "./CalendarCell.vue";

const openDialog: Ref<boolean> = ref(false);

const date = new Date();

const currentDay = ref(date.getDate());
const currentDateData = ref({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
});
const currentLeapYear = isLeapYear(currentDateData.value.year);
const prevMonthFirstDay: Ref<number | undefined> = ref(undefined);
const calendarFirstDay: Ref<number | undefined> = ref(undefined);
const calendarLastDay: Ref<number | undefined> = ref(undefined);
const restDaysInMonth: Ref<number | undefined> = ref(undefined);
const totalmonthDays: Ref<number | undefined> = ref(undefined);
const events: Ref<any> = ref([]);
const reUpdateComponent = ref(0);

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const getPrevMonthFirstDay = () => {
  const { month } = currentDateData.value;
  const lastDayInMonth = daysInMonth.at(month);
  prevMonthFirstDay.value =
    typeof lastDayInMonth === "number" &&
    typeof calendarFirstDay.value === "number"
      ? lastDayInMonth - calendarFirstDay.value + 1
      : 0;
};
const getFirstDayPosition = () => {
  const { year, month } = currentDateData.value;
  const date = new Date(`${month}-01-${year}`);
  const day = date.getDay();
  calendarFirstDay.value = day - 1;
};
const getLastDayPosition = () => {
  const { year, month } = currentDateData.value;
  const lastDayInMonth = daysInMonth.at(month);
  totalmonthDays.value = lastDayInMonth;

  const date = new Date(`${month}-${lastDayInMonth}-${year}`);
  const day = date.getDay();

  calendarLastDay.value = day - 1;
  restDaysInMonth.value = daysInWeek - calendarLastDay.value - 1;
};
const showAddEventDialog = (n: number) => {
  currentDateData.value.day = n;
  openDialog.value = true;
};
const addEvent = (item: EventModel) => {
  const eventIndex = currentDateData.value.day - 1;
  const eventWherePush = events.value[eventIndex];

  if (eventWherePush.length) {
    events.value[eventIndex].push({
      ...item,
    });
  } else {
    events.value[eventIndex] = [item];
  }

  reUpdateComponent.value++;
};
const deleteEvent = (item: EventModel, day: number) => {
  const listToUpdate = [...events.value[day - 1]];

  events.value[day - 1] = [
    ...listToUpdate.filter(({ id }: { id: number }) => id !== item.id),
  ];
};

onMounted(() => {
  getFirstDayPosition();
  getLastDayPosition();
  getPrevMonthFirstDay();
  events.value = Array.from(Array(totalmonthDays.value).fill([]));
});
</script>

<style lang="scss" scoped>
@import "../../scss/app";
</style>
