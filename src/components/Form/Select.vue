<template>
  <div class="flex flex-col">
    <label class="m-2 font-medium" v-if="label">{{ label }}</label>
    <div class="relative">
      <input
        :value="modelValue"
        :class="bordered ? 'select border' : 'select'"
        :placeholder="placeholder"
        @click="isSearching = true"
      />
      <i
        class="fa-solid fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-[12px]"
      ></i>
      <div
        class="z-20 absolute top-[50px] w-full rounded-lg"
        v-if="isSearching"
      >
        <ul
          class="max-h-[300px] overflow-auto rounded-t-[25px] rounded-b-[25px]"
        >
          <li
            v-for="(item, i) of props.data"
            :key="i"
            class="p-2 border-b bg-white hover:bg-slate-100 w-full poin cursor-pointer first:rounded-t-[25px] last:rounded-b-[25px]"
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
import { ref, Ref, onMounted, onUnmounted } from "vue";
/* It doesn't work
  import { FormProps } from "../interfaces/form";
*/

const props = withDefaults(
  defineProps<{
    label?: string;
    placeholder?: string;
    modelValue: string | number;
    bordered?: boolean;
    data: any[];
  }>(),
  {}
);

const emit = defineEmits(["update:modelValue", "on-select"]);

const isSearching: Ref<boolean> = ref(false);

const onItemClick = (item: any): void => {
  isSearching.value = false;
  emit("on-select", item);
};

const onListenMouseClick = (): void => {
  document.addEventListener("click", (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.tagName !== "INPUT" && element.tagName !== "LI") {
      isSearching.value = false;
    }
  });
};

onMounted(() => {
  onListenMouseClick();
});
onUnmounted(() => {
  window.addEventListener(
    "click",
    (event) => {
      event.stopImmediatePropagation();
    },
    true
  );
});
</script>

<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.select {
  @apply p-3 pl-5 rounded-[15px] hover:shadow-lg focus:outline-none w-full;
}
</style>
