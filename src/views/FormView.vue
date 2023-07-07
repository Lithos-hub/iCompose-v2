<template>
  <div
    class="mx-auto mt-[100px] max-w-[1000px] bg-white p-5 rounded-[15px] shadow-md overflow-auto max-h-[800px]"
  >
    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Input
          v-model="normal"
          label="Text field"
          placeholder="Write here"
          bordered
        />
      </div>
      <div>
        <Textarea
          v-model="textarea"
          label="Text area"
          placeholder="Write here"
          bordered
        />
      </div>
      <div>
        <Autocomplete
          v-model="search"
          label="Autocomplete"
          placeholder="Write here"
          bordered
          :data="searchItems"
          @on-search="setSearchItem"
        />
      </div>
      <div>
        <Select
          v-model="select"
          label="Select"
          placeholder="Select an item"
          bordered
          :data="searchItems"
          @on-select="setSelectItem"
        />
      </div>
      <div>
        <MultiSelect
          v-model="multiselect"
          label="Multi Select"
          placeholder="Select several items"
          bordered
          :data="searchItems"
          @on-select="setMultiselectItems"
        />
      </div>
      <div>
        <ColorPicker
          v-model="color"
          label="Color picker"
          placeholder="Select a color"
        />
      </div>
      <div>
        <OTP v-model="otp" label="OTP" />
      </div>
      <div>
        <Checkbox v-model="checkbox" label="Checkbox" />
      </div>
    </section>
  </div>
  <section
    class="mx-auto mt-5 max-w-[1000px] overflow-auto bg-[#303030] text-white shadow-lg p-5 rounded-[15px]"
  >
    <h1 class="text-lg font-medium mb-2">Form output:</h1>
    <pre>{{ inputs }}</pre>
  </section>
</template>

<script lang="ts" setup>
import { Ref, ref, reactive, toRefs } from "vue";

import Input from "@/components/form/Input.vue";
import Autocomplete from "@/components/form/Autocomplete.vue";
import Select from "@/components/form/Select.vue";
import MultiSelect from "@/components/Form/MultiSelect.vue";
import OTP from "@/components/Form/OTP.vue";
import Textarea from "@/components/Form/Textarea.vue";
import ColorPicker from "@/components/Form/ColorPicker.vue";
import Checkbox from "@/components/Form/Checkbox.vue";

const inputs = reactive({
  normal: "",
  search: "",
  select: "",
  multiselect: [] as string[],
  otp: "",
  textarea: "",
  color: "",
  checkbox: false,
});

const { normal, search, select, multiselect, otp, textarea, color, checkbox } =
  toRefs(inputs);

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

const setSearchItem = (item: any) => (search.value = item);

const setSelectItem = (item: any) => (select.value = item);

const setMultiselectItems = (items: string[]) => (multiselect.value = items);
</script>
