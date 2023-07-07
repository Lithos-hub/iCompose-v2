<template>
  <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="flex mt-6">
      <div>
        <label class="ml-4 block">Number of columns</label>
        <input
          v-model="defaultCols"
          type="number"
          placeholder="Number of columns"
          class="mx-2 p-2 pl-4 border border-indigo-900 mb-2 rounded-[200px] focus:outline-none"
          @input="onChangeTableConf"
        />
      </div>
      <div>
        <label class="ml-4 block">Number of rows</label>
        <input
          v-model="defaultRows"
          type="number"
          placeholder="Number of rows"
          class="mx-2 p-2 pl-4 border border-indigo-900 mb-2 rounded-[200px] focus:outline-none"
          @input="onChangeTableConf"
        />
      </div>
    </div>
    <div
      class="w-max max-w-[1600px] max-h-[700px] mx-auto overflow-y-scroll mt-2 shadow-lg bg-slate-400"
    >
      <table>
        <thead class="sticky top-0 bg-slate-400 text-slate-800">
          <tr>
            <th class="px-5"></th>
            <th
              v-for="(char, i) in alphabet"
              :key="i"
              class="p-2 border-l border-l-slate-200"
            >
              {{ char }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in defaultRows" :key="'B' + i">
            <td
              class="px-2 text-center sticky left-0 border border-b-slate-300 bg-slate-200 text-slate-800"
            >
              {{ i }}
            </td>
            <td v-for="j in defaultCols">
              <input
                ref="spreadsheetInput"
                :class="`h-[30px] focus:outline-none row-${i} col-${j}`"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, Ref, defineComponent } from "vue";

import { SpreadsheetOptions } from "../interfaces/spreadsheet";

import useDialog from "../composables/useDialog";
import useTable from "../composables/useTable";

export default defineComponent({
  setup() {
    const selectedOptions: Ref<SpreadsheetOptions> = ref({
      isUsingSimpleRow: false,
      isUsingMultipleRow: false,
      isUsingSimpleCol: false,
      isUsingMultipleCol: false,
      isUsingFiltering: false,
      isUsingSorting: false,
    });

    const defaultRows: Ref<number> = ref(50);
    const defaultCols: Ref<number> = ref(40);
    const refreshComponent: Ref<number> = ref(0);

    const spreadsheetInput = ref();

    const { isShowingOptions, showOptions, hide } = useDialog();
    const { sortData, filterByInput } = useTable();

    const alphabet: Ref<string[] | []> = ref([]);

    const sortAscen: Ref<object> = ref({});
    const filterInput: Ref<object> = ref({});
    const isAscending: Ref<boolean> = ref(true);
    const multipleSelectedRows = ref([]);
    const multipleselectedCols = ref([]);
    const initialCol: Ref<string> = ref("0");
    const initialRow: Ref<string> = ref("0");
    const finalCol: Ref<string> = ref("0");
    const finalRow: Ref<string> = ref("0");
    const pasteInformation: Ref<string> = ref("");

    const onChangeTableConf = (event: Event) => {
      console.log(event);
      setTimeout(() => {
        refreshComponent.value++;
        generateAlphabet();
      }, 250);
    };

    const generateAlphabet = (): void => {
      const alphabetChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      let counterLoop = 0;
      let arr: string[] = [];

      for (let i = 0; i < defaultCols.value; i++) {
        if (i < alphabetChars.length) {
          arr.push(alphabetChars[i]);
        } else {
          for (let j = 0; j < alphabetChars.length; j++) {
            arr.push(`${alphabetChars.at(counterLoop)}${alphabetChars[j]}`);
          }
          counterLoop++;
        }
      }

      alphabet.value = arr.slice(0, defaultCols.value);
    };

    onMounted(() => {
      generateAlphabet();
      // listenCopyPaste();
      // listenMouseSelectable();
    });

    return {
      defaultRows,
      defaultCols,
      spreadsheetInput,
      selectedOptions,
      isShowingOptions,
      showOptions,
      hide,
      sortData,
      filterByInput,
      sortAscen,
      filterInput,
      isAscending,
      multipleSelectedRows,
      multipleselectedCols,
      onChangeTableConf,
      // sortAscDescData,
      // filterData,
      alphabet,
      initialCol,
      initialRow,
      finalCol,
      finalRow,
      pasteInformation,
      // zeroPad,
      // listenCopyPaste,
      // cleanSelections,
      // listenMouseSelectable,
      // selectRow,
      // selectColumn,
      generateAlphabet,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";
</style>
