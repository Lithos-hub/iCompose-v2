<template>
  <div
    class="relative w-full max-h-[600px] overflow-y-scroll mt-[10vh] mx-[10em] shadow-lg"
  >
    <table class="bg-white rounded-t-lg w-full text-center">
      <thead>
        <tr>
          <th
            class="px-5 py-3 border-r bg-sky-900 text-white first:rounded-tl-lg sticky top-0"
            v-for="({ text }, i) in headers"
            :key="'A' + i"
          >
            {{ text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover:bg-slate-200"
          v-for="(item, i) of data.slice(firstRow, lastRow)"
          :key="'B' + i"
        >
          <td class="p-2 border" v-for="({ value }, i) in headers" :key="i">
            {{ item[value] }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between p-2 w-full bg-white sticky bottom-0">
      <div class="mr-auto flex">
        <p class="text-indigo-800">
          Rows per page:
          <input
            class="ml-2 border border-b-sky-900 text-indigo-900 h-[40px] p-2 w-[100px] focus:outline-none"
            v-model="rowsPerPage"
            placeholder="Number"
            type="number"
            @change="showRowsByAmount"
          />
        </p>
        <button
          class="ml-5 text-indigo-900 p-1 rounded-lg w-[100px] h-[40px] border border-purple-300 hover:bg-indigo-600 hover:text-white duration-200"
          @click="resetTable"
        >
          Reset
        </button>
      </div>
      <div class="flex">
        <div class="my-auto">
          <p class="text-indigo-800">
            Showing: {{ firstRow }}-{{ lastRow }} of {{ totalRows }} rows
          </p>
        </div>
        <div class="my-auto ml-3">
          <button
            @click="showLessRows"
            class="mx-2 text-indigo-800 rounded-full w-[30px] h-[30px] hover:bg-indigo-600 hover:text-white duration-200"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            @click="showMoreRows"
            class="mx-2 text-indigo-800 rounded-full w-[30px] h-[30px] hover:bg-indigo-600 hover:text-white duration-200"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from "vue";

import { banks } from "../api/banks";

import { HeadModel, TableApiResponse } from "../interfaces/table";

const firstRow: Ref<number> = ref(1);
const lastRow: Ref<number> = ref(10);
const totalRows: Ref<number> = computed(() => banks.length);
const rowsPerPage: Ref<number> = ref(10);
const isShowingByAmount: Ref<Boolean> = ref(false);

const data: Ref<TableApiResponse[]> = ref(banks);

const headers: Ref<HeadModel[]> = ref([
  {
    text: "ID",
    value: "id",
  },
  {
    text: "UID",
    value: "uid",
  },
  {
    text: "Account Number",
    value: "account_number",
  },
  {
    text: "IBAN",
    value: "iban",
  },
  {
    text: "Bank name",
    value: "bank_name",
  },
  {
    text: "Routing number",
    value: "routing_number",
  },
  {
    text: "SWIFT (BIC)",
    value: "swift_bic",
  },
]);

const showMoreRows = (): void => {
  if (firstRow.value >= 1 && lastRow.value < totalRows.value) {
    isShowingByAmount.value = false;
    firstRow.value = lastRow.value;
    lastRow.value += rowsPerPage.value;
  }
  if (lastRow.value > banks.length) lastRow.value = banks.length;
};
const showLessRows = (): void => {
  if (firstRow.value > 1 && lastRow.value <= totalRows.value) {
    isShowingByAmount.value = false;
    lastRow.value = firstRow.value;
    firstRow.value -= rowsPerPage.value;
  }
  if (firstRow.value <= 0) firstRow.value = 1;
};

const showRowsByAmount = (): void => {
  if (rowsPerPage.value >= 1 && rowsPerPage.value <= banks.length) {
    isShowingByAmount.value = true;
    lastRow.value = rowsPerPage.value;
  }
};

const resetTable = (): void => {
  isShowingByAmount.value = false;
  data.value = banks;
  firstRow.value = 1;
  lastRow.value = 10;
  totalRows.value = banks.length;
  rowsPerPage.value = 10;
};
</script>

<style lang="scss">
@import "../scss/app.scss";
</style>
