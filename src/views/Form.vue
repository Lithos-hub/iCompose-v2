<template>
  <div class="fixed top-[20em] left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="grid grid-cols-3 gap-10">
      <div>
        <ICInput
          v-model="inputs.normal"
          label="Text field"
          placeholder="Write here"
        />
      </div>
      <div>
        <ICAutocomplete
          v-model="inputs.search"
          label="Autocomplete"
          placeholder="Write here"
          :data="searchItems"
          @on-search="setSearchItem"
        />
      </div>
      <div>
        <ICSelect
          v-model="inputs.select"
          label="Select"
          placeholder="Select an item"
          :data="searchItems"
          @on-select="setSelectItem"
        />
      </div>
      <div>
        <ICMultiSelect
          v-model="inputs.multiselect"
          label="Multi Select"
          placeholder="Select several items"
          :data="searchItems"
          @on-select="setMultiselectItems"
        />
      </div>
      <div>
        <ICOTP v-model="inputs.otp" label="OTP" />
        <small class="ml-1 text-gray-600">Output: {{ inputs.otp }} </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

import ICInput from "../components/form/iC-Input.vue";
import ICAutocomplete from "../components/form/iC-Autocomplete.vue";
import ICSelect from "../components/form/iC-Select.vue";
import ICMultiSelect from "../components/Form/iC-MultiSelect.vue";
import ICOTP from "../components/Form/iC-OTP.vue";

const inputs = ref({
  normal: "",
  search: "",
  select: "",
  multiselect: [] as string[],
  otp: "",
});

const searchItems: Ref<string[]> = ref([
  "Frodo",
  "Sam",
  "Pippin",
  "Merry",
  "Aragorn",
  "Gimli",
  "Legolas",
  "Gandalf",
  "Boromir",
  "Gollum",
]);

const setSearchItem = (item: any) => {
  inputs.value.search = item;
};
const setSelectItem = (item: any) => {
  inputs.value.select = item;
};

const setMultiselectItems = (items: string[]) => {
  inputs.value.multiselect = items;
};
</script>
