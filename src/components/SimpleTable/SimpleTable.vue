<template>
  <div class="max-h-[500px] overflow-scroll">
    <table class="bg-white text-center w-full">
      <thead>
        <tr>
          <th
            class="px-5 py-3 bg-indigo-500 text-white sticky top-0 min-w-[100px] font-light text-[18px]"
            v-for="({ text }, i) in props.headers"
            :key="'A' + i"
          >
            {{ text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover:bg-slate-200"
          v-for="(item, i) of props.data?.slice(props.firstRow, props.lastRow)"
          :key="'B' + i"
        >
          <td
            class="p-2 text-[15px]"
            v-for="({ value }, i) in props.headers"
            :key="i"
          >
            {{ item[value as keyof typeof item] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { HeadModel, TableApiResponse } from "../../interfaces/table";

const props = withDefaults(
  defineProps<{
    data: TableApiResponse[];
    headers: HeadModel[];
    firstRow: number;
    lastRow: number;
  }>(),
  {}
);
</script>

<style lang="" scoped></style>
