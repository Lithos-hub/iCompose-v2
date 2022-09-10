<template>
  <div class="flex flex-col">
    <label class="m-2 font-medium">Select</label>
    <div class="relative">
      <input
        :value="modelValue"
        class="p-3 pl-5 rounded-full hover:shadow-lg focus:outline-none w-[213px]"
        placeholder="Select an item"
        @click="isSearching = true"
      />
      <i
        class="fa-solid fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-[12px]"
      ></i>
      <div class="absolute top-[00px] w-[213px] rounded-lg" v-if="isSearching">
        <ul>
          <li
            v-for="(item, i) of props.data"
            :key="i"
            class="p-2 border-b bg-white hover:bg-slate-100 poin cursor-pointer first:rounded-t-[25px] last:rounded-b-[25px]"
            @click="onItemClick(item)"
          >
            <span class="pl-3">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  modelValue: string;
  data: any[];
}>();

const emit = defineEmits(["update:modelValue", "on-select"]);

const isSearching = ref(false);

const onItemClick = (item: any) => {
  isSearching.value = false;
  emit("on-select", item);
};
</script>

<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
