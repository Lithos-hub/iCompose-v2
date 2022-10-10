<template>
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
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref, Ref } from "vue";

const emit = defineEmits(["reset", "set-settings"]);

const props = withDefaults(
  defineProps<{
    data: unknown[];
  }>(),
  {}
);

const firstRow: Ref<number> = ref(1);
const lastRow: Ref<number> = ref(10);
const totalRows: Ref<number> = computed(() => props.data.length);
const rowsPerPage: Ref<number> = ref(10);
const isShowingByAmount: Ref<Boolean> = ref(false);

const showMoreRows = (): void => {
  if (firstRow.value >= 1 && lastRow.value < totalRows.value) {
    isShowingByAmount.value = false;
    firstRow.value = lastRow.value;
    lastRow.value += rowsPerPage.value;
  }
  if (lastRow.value > props.data.length) lastRow.value = props.data.length;
  emit("set-settings", { first: firstRow.value, last: lastRow.value });
};
const showLessRows = (): void => {
  if (firstRow.value > 1 && lastRow.value <= totalRows.value) {
    isShowingByAmount.value = false;
    lastRow.value = firstRow.value;
    firstRow.value -= rowsPerPage.value;
  }
  if (firstRow.value <= 0) firstRow.value = 1;
  emit("set-settings", { first: firstRow.value, last: lastRow.value });
};

const showRowsByAmount = (): void => {
  if (rowsPerPage.value >= 1 && rowsPerPage.value <= props.data.length) {
    isShowingByAmount.value = true;
    lastRow.value = rowsPerPage.value;
  }
  emit("set-settings", { first: firstRow.value, last: lastRow.value });
};

const resetTable = (): void => {
  isShowingByAmount.value = false;
  firstRow.value = 1;
  lastRow.value = 10;
  totalRows.value = props.data.length;
  rowsPerPage.value = 10;
  emit("reset");
  emit("set-settings", { first: firstRow.value, last: lastRow.value });
};
</script>

<style lang="" scoped></style>
