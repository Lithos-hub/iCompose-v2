<template>
  <div class="grid grid-flow-col h-screen justify-around">
    <div class="flex flex-col justify-center">
      <div
        class="bg-white rounded-[15px] p-2 text-center max-w-[150px] ml-auto shadow-md"
      >
        <Select
          v-model="currentDateData.month"
          label="Month"
          :data="months"
          @on-select="setMonth"
        />
        <Select
          v-model="currentDateData.year"
          label="Year"
          :data="years"
          @on-select="setYear"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div
        class="bg-white rounded-[15px] p-2 text-center h-auto w-full mx-auto shadow-md"
      >
        <CalendarDays />
        <div class="calendar grid grid-cols-7 gap-1 relative mt-2">
          <CalendarCell
            class="bg-indigo-200 border mx-auto"
            v-for="n of restDaysPrevMonth"
            :number-day="n"
          />
          <CalendarCell
            :class="`${
              i + 1 === currentDay &&
              currentDateData.month === date.getMonth() + 1 &&
              currentDateData.year === date.getFullYear()
                ? 'cell__default bg-green-100 mx-auto'
                : 'cell__default bg-white mx-auto'
            }`"
            v-for="(items, i) of events.slice(0, totalmonthDays)"
            :key="i"
            :number-day="i + 1"
            :eventItems="items"
            @delete="deleteEvent"
            @click="showAddEventDialog(i + 1)"
          />
          <CalendarCell
            class="bg-indigo-200 border mx-auto"
            v-for="n of restDaysCurrentMonth"
            :number-day="n + 1"
          />
        </div>
      </div>
    </div>
    <div>
      <Transition name="fade">
        <CalendarDialog
          class="fixed top-[58px] right-0 h-screen"
          v-if="openDialog"
          :date="currentDateData"
          :events="[...events.at(currentDateData.day as number - 1)]"
          @add="addEvent"
          @delete-event="deleteEvent"
          @close="openDialog = false"
        />
      </Transition>
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
  getMonthName,
} from "./utils";

import { EventModel, DateDataModel } from "../../interfaces/calendar";

import CalendarDialog from "./CalendarDialog.vue";
import CalendarCell from "./CalendarCell.vue";
import Select from "../Form/Select.vue";

const openDialog: Ref<boolean> = ref(false);

const date = new Date();

const currentDay = ref(date.getDate());

const restDaysPrevMonth: Ref<number[]> = ref([1]);
const restDaysCurrentMonth: Ref<number[]> = ref([1]);

const totalmonthDays: Ref<number> = ref(0);
const events: Ref<any> = ref([]);

const currentDateData: Ref<DateDataModel> = ref({
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
});

const months = ref(Array.from(Array(monthMax).keys()).map((_, i) => i + 1));
const years = ref(Array.from(Array(10)).map((_, i) => i + date.getFullYear()));

const setMonth = (val: number) => {
  currentDateData.value.month = val;
  getRestDaysPrevMonth();
  getRestDaysCurrentMonth();
  currentDateData.value.day = 1;
};
const setYear = (val: number) => {
  currentDateData.value.year = val;
  getRestDaysPrevMonth();
  getRestDaysCurrentMonth();
  currentDateData.value.day = 1;
};

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const getDateMonthLastDay = (isCurrentMonth: boolean): number => {
  let { year, month } = currentDateData.value;

  totalmonthDays.value = isLeapYear(year)
    ? daysInMonthLeap[isCurrentMonth ? month : month - 1]
    : daysInMonth[isCurrentMonth ? month : month - 1];
  return new Date(
    `${isCurrentMonth ? month : month - 1}-${totalmonthDays.value}-${
      month === 1 ? year - 1 : year
    }`
  ).getDay();
};

const getRestDaysPrevMonth = () => {
  const { year, month } = currentDateData.value;
  const date = new Date(`${month}-01-${year}`);
  const totalPrevMonthDays: number = isLeapYear(year)
    ? daysInMonthLeap[month === 1 ? 12 : month - 1]
    : daysInMonth[month === 1 ? 12 : month - 1];

  const restDaysPrevMonthArr = Array.from(
    Array(date.getDay() !== 1 ? date.getDay() - 1 : date.getDay()).keys()
  );
  const firstDayPrevMonthToShow =
    totalPrevMonthDays - restDaysPrevMonthArr.length + 1;

  restDaysPrevMonth.value = restDaysPrevMonthArr.map(
    (num) => firstDayPrevMonthToShow + num
  );
};
const getRestDaysCurrentMonth = () => {
  const lastDayDate: number = getDateMonthLastDay(true);
  restDaysCurrentMonth.value = Array.from(
    Array(daysInWeek - lastDayDate).keys()
  ).slice(0, 6);
};
const showAddEventDialog = (n: number) => {
  currentDateData.value.day = n;
  openDialog.value = true;
};
const addEvent = (item: EventModel) => {
  const eventIndex = (currentDateData.value.day as number) - 1;
  const eventWherePush = events.value[eventIndex];

  if (eventWherePush.length) {
    events.value[eventIndex].push({
      ...item,
    });
  } else {
    events.value[eventIndex] = [item];
  }

  // reUpdateComponent.value++;
};
const deleteEvent = (item: EventModel, day: number) => {
  const listToUpdate = [...events.value[day - 1]];

  events.value[day - 1] = [
    ...listToUpdate.filter(({ id }: { id: number }) => id !== item.id),
  ];
};

onMounted(() => {
  getRestDaysPrevMonth();
  getRestDaysCurrentMonth();
  events.value = Array.from(Array(31).fill([]));
});
</script>
