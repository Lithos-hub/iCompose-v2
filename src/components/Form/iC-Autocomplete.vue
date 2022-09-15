<template>
  <div ref="component" class="flex flex-col">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <div class="relative">
      <input
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        class="p-3 pl-5 rounded-full w-full hover:shadow-lg focus:outline-none transition-all duration-200 ease-in-out"
        :placeholder="placeholder"
      />
      <i
        class="fa-solid fa-magnifying-glass absolute right-6 top-1/2 -translate-y-1/2"
      ></i>
      <div class="absolute top-[50px] w-full rounded-lg" v-if="isSearching">
        <div v-if="hasResults">
          <ul
            class="max-h-[300px] overflow-auto rounded-t-[25px] rounded-b-[25px]"
          >
            <li
              v-for="(item, i) of results"
              :key="i"
              class="p-2 border-b bg-white hover:bg-slate-100 poin cursor-pointer last:rounded-b-[25px]"
              @click="onItemClick(item)"
            >
              <span class="pl-3">{{ item }}</span>
            </li>
          </ul>
        </div>
        <p
          v-else
          class="py-2 border-b text-[12px] text-slate-500 text-center bg-white rounded-b-[25px]"
        >
          No results found
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watch, onMounted } from "vue";

/* It doesn't work
  import { FormProps } from "../interfaces/form";
*/

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    modelValue: string;
    data: any[];
  }>(),
  {}
);

const emit = defineEmits(["update:modelValue", "on-search"]);

const component = ref();
const hasResults = ref(false);
const isSearching = ref(false);

const results: Ref<string[] | []> = ref([]);

const onItemClick = (item: any): void => {
  emit("on-search", item);
};

watch(
  () => props.modelValue,
  (val) => {
    console.log(val);
    if (val.length) {
      isSearching.value = true;
      results.value = props.data.filter((item) =>
        item.toLowerCase().includes(val.toLowerCase())
      );
      if (results.value.length) {
        hasResults.value = true;
      } else {
        hasResults.value = false;
      }
    } else {
      isSearching.value = false;
      results.value = [];
    }
  }
);

onMounted(() => {
  document.addEventListener("click", () => {
    isSearching.value = false;
  });
});
</script>

<style lang="" scoped></style>
