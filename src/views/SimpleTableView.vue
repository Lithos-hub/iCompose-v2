<template>
  <div class="relative mt-[50px] mx-auto">
    <SimpleTable
      :data="backupData"
      :headers="headers"
      :first-row="firstRow"
      :last-row="lastRow"
      class="shadow-md"
    />
    <SimpleTableControls
      :data="banks"
      @set-settings="setSettings"
      class="shadow-md"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";

import SimpleTable from "@/components/SimpleTable/SimpleTable.vue";
import SimpleTableControls from "@/components/SimpleTable/SimpleTableControls.vue";

import { banks } from "../api/banks";

import { HeadModel, TableApiResponse } from "../interfaces/table";

const backupData: Ref<TableApiResponse[]> = ref(banks);
const firstRow: Ref<number> = ref(1);
const lastRow: Ref<number> = ref(10);

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

const setSettings = ({ first, last }: { first: number; last: number }) => {
  firstRow.value = first;
  lastRow.value = last;
};
</script>
