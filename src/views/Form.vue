<template>
  <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="grid grid-cols-3 gap-10">
      <div>
        <ICInput v-model="inputs.normal" />
      </div>
      <div>
        <ICSearchbox
          v-model="inputs.search"
          :data="searchItems"
          @on-search="setSearchItem"
        />
      </div>
      <div>
        <ICSelect
          v-model="inputs.select"
          :data="searchItems"
          @on-select="setSelectItem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

import ICInput from "../components/iC-Input.vue";
import ICSearchbox from "../components/iC-Searchbox.vue";
import ICSelect from "../components/iC-Select.vue";

const inputs = ref({
  normal: "",
  search: "",
  select: "",
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
</script>
