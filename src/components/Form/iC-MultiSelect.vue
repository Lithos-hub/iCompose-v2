<template>
  <div ref="multiselect" class="flex flex-col">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <div class="relative" @click="isSearching = true">
      <ul
        class="grid grid-cols-4 text-center absolute top-1/2 left-2 -translate-y-1/2 overflow-y-scroll max-h-[35px]"
      >
        <li
          class="m-1 p-1 bg-indigo-800 text-white rounded-full text-[12px]"
          v-for="(item, i) of checkbox"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
      <input
        :value="modelValue"
        class="p-3 pl-5 rounded-full hover:shadow-lg focus:outline-none w-full text-transparent cursor-pointer"
        :placeholder="placeholder"
        @click="isSearching = true"
      />
      <i
        class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[12px]"
      ></i>
      <div class="absolute top-[50px] w-[213px] rounded-lg" v-if="isSearching">
        <ul>
          <li
            v-for="(item, i) of props.data"
            :key="i"
            class="p-2 border-b bg-white hover:bg-slate-100 poin cursor-pointer first:rounded-t-[25px] last:rounded-b-[25px]"
            @click="onItemClick(item)"
          >
            <div class="flex pl-3">
              <input
                v-model="checkbox"
                type="checkbox"
                :value="item"
                class="mr-5 w-4 h-4 my-auto text-purple-600 bg-gray-100 rounded border-gray-300 cursor-pointer input hoverFx"
              />
              <div class="my-auto">{{ item }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
/* It doesn't work
    import { FormProps } from "../interfaces/form";
  */

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    modelValue: string[];
    data: any[];
  }>(),
  {}
);

const emit = defineEmits(["update:modelValue", "on-select"]);

const multiselect = ref();

const checkbox: Ref<string[]> = ref([]);

const isSearching: Ref<boolean> = ref(false);

const onItemClick = (item: string): void => {
  if (checkbox.value.indexOf(item) === -1) {
    checkbox.value.push(item);
  } else {
    checkbox.value.splice(checkbox.value.indexOf(item), 1);
  }
  emit("on-select", checkbox);
};

const onListenMouseClick = () => {
  document.addEventListener("click", (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (!multiselect.value.contains(element)) {
      isSearching.value = false;
    }
  });
};

onMounted(() => {
  onListenMouseClick();
});
</script>

<style lang="scss" scoped>
@import "../../scss/app.scss";

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
