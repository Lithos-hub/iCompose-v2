<template>
  <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="relative rounded-[25px]">
      <CalendarDays class="absolute top-7" />
      <div class="absolute top-10">
        <div
          class="grid grid-cols-7 gap-2 relative"
          v-if="events.some((event) => event !== '')"
        >
          <div v-for="n in calendarFirstDay" class="h-[150px] w-[100px]"></div>
          <CalendarEvents
            v-for="(event, i) of events"
            :key="i"
            :event="event"
            @delete="deleteEvent"
          />
          <div v-for="n in restDaysInMonth" class="h-[150px] w-[100px]"></div>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-2 relative">
        <div
          v-for="n in calendarFirstDay"
          class="bg-indigo-400 border h-[150px] w-[100px]"
        ></div>
        <CalendarCell
          v-for="n in totalmonthDays"
          :number-day="n"
          @click="showAddEventDialog(n)"
        />
        <div
          v-for="n in restDaysInMonth"
          class="bg-indigo-400 border h-[150px] w-[100px]"
        ></div>
      </div>
    </div>
  </div>
  <CalendarDialog
    v-if="openDialog"
    :date="currentDateData"
    @add="addEvent"
    class="fixed top-1/2 right-10 -translate-y-1/2"
  />
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

import { EventModel } from "../../interfaces/calendar";

import CalendarDialog from "./CalendarDialog.vue";
import CalendarCell from "./CalendarCell.vue";
import CalendarEvents from "./CalendarEvents.vue";

const openDialog: Ref<boolean> = ref(false);

const date = new Date();

const currentDateData = ref({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
});
const currentLeapYear = isLeapYear(currentDateData.value.year);
const calendarFirstDay: Ref<number | undefined> = ref(undefined);
const calendarLastDay: Ref<number | undefined> = ref(undefined);
const restDaysInMonth: Ref<number | undefined> = ref(undefined);
const totalmonthDays: Ref<number | undefined> = ref(undefined);
const events: Ref<EventModel[] | string[]> = ref(
  Array.from(Array(totalmonthDays.value).fill(""))
);

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const monthFirstDayName = () => {
  const { year, month } = currentDateData.value;
  const date = new Date(`${month}-01-${year}`);
  const day = date.getDay();
  calendarFirstDay.value = day - 1;
};
const monthLastDayName = () => {
  const { year, month } = currentDateData.value;
  const lastDayInMonth = daysInMonth.at(month);
  totalmonthDays.value = lastDayInMonth;
  const date = new Date(`${month}-${lastDayInMonth}-${year}`);
  const day = date.getDay();
  calendarLastDay.value = day - 1;
  restDaysInMonth.value = daysInWeek - calendarLastDay.value - 1;
};
const showAddEventDialog = (n: number) => {
  openDialog.value = true;
  currentDateData.value.day = n;
};
const addEvent = (item: EventModel) => {
  const dayPosition = currentDateData.value.day - 1;
  events.value[dayPosition] = item;
};
const deleteEvent = (item: EventModel) => {
  const index = events.value.indexOf(item);
  if (index > -1) {
    events.value.splice(index, 1);
  }
};

onMounted(() => {
  monthFirstDayName();
  monthLastDayName();
});
</script>

<style lang="scss" scoped></style>
