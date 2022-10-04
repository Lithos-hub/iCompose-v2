<template>
  <div
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[15px] shadow-md"
  >
    <div class="grid grid-cols-3 gap-10">
      <div>
        <Input
          v-model="inputs.normal"
          label="Text field"
          placeholder="Write here"
          bordered
        />
      </div>
      <div>
        <Textarea
          v-model="inputs.textarea"
          label="Text area"
          placeholder="Write here"
          bordered
        />
      </div>
      <div>
        <Autocomplete
          v-model="inputs.search"
          label="Autocomplete"
          placeholder="Write here"
          bordered
          :data="searchItems"
          @on-search="setSearchItem"
        />
      </div>
      <div>
        <Select
          v-model="inputs.select"
          label="Select"
          placeholder="Select an item"
          bordered
          :data="searchItems"
          @on-select="setSelectItem"
        />
      </div>
      <div>
        <MultiSelect
          v-model="inputs.multiselect"
          label="Multi Select"
          placeholder="Select several items"
          bordered
          :data="searchItems"
          @on-select="setMultiselectItems"
        />
      </div>
      <div>
        <ColorPicker
          v-model="inputs.color"
          label="Color picker"
          placeholder="Select a color"
        />
      </div>
      <div>
        <OTP v-model="inputs.otp" label="OTP" />
        <small class="ml-1 text-gray-600">Output: {{ inputs.otp }} </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

import Input from "../components/form/Input.vue";
import Autocomplete from "../components/form/Autocomplete.vue";
import Select from "../components/form/Select.vue";
import MultiSelect from "../components/Form/MultiSelect.vue";
import OTP from "../components/Form/OTP.vue";
import Textarea from "../components/Form/Textarea.vue";
import ColorPicker from "../components/Form/ColorPicker.vue";

const inputs = ref({
  normal: "",
  search: "",
  select: "",
  multiselect: [] as string[],
  otp: "",
  textarea: "",
  color: "",
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
