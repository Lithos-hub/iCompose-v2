<template>
  <div class="table__spreadsheet-wrapper">
    <SpreadsheetDialog
      v-if="isShowingOptions"
      @close-dialog="hide"
      @apply-options="applyOptions"
    />
    <table class="mx-auto">
      <thead class="table__spreadsheet-header">
        <tr>
          <th class="clickable" @click="showOptions">
            <div
              class="table__spreadsheet-header--actions table__spreadsheet-header--showOptions"
            >
              <i class="fa-solid fa-gear"></i>
            </div>
          </th>
          <th
            v-for="(char, i) in alphabet"
            :key="i"
            class="table__spreadsheet-header--alphabet clickable"
            @click="selectColumn(i + 1)"
          >
            {{ char }}
          </th>
        </tr>
        <tr>
          <th class="clickable" @click="downloadExcel">
            <div
              class="table__spreadsheet-header--actions table__spreadsheet-header--download"
            >
              <i class="fa-solid fa-file-excel"></i>
            </div>
          </th>
          <th
            :class="
              selectedOptions.isUsingSorting
                ? 'table__spreadsheet-header--field clickable'
                : ''
            "
            v-for="(head, i) in headers"
            :key="'A' + i"
            @click="
              selectedOptions.isUsingSorting ? sortAscDescData(head) : null
            "
          >
            <input
              v-if="selectedOptions.isUsingFiltering"
              class="table__spreadsheet-header--input"
              v-model="filterInput[head]"
              :placeholder="head"
              @input="filterData(head, filterInput[head])"
            />
            <SpreadsheetDynHead v-else :head="head" />
            <span
              v-if="
                (selectedOptions.isUsingSorting && sortAscen[head] === true) ||
                sortAscen[head] === false
              "
            >
              <i
                :class="
                  sortAscen[head]
                    ? 'fa-solid fa-chevron-up'
                    : 'fa-solid fa-chevron-down'
                "
              ></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="'B' + i">
          <td class="table__spreadsheet-index" @click="selectRow(i + 1)">
            {{ i + 1 }}
          </td>
          <td v-for="(head, i) in headers" :key="'C' + i">
            <input
              v-if="!Array.isArray(item[head])"
              v-model="item[head]"
              :class="`cell__column-${zeroPad(i + 1, 2)} cell__row-${zeroPad(
                i + 1,
                2
              )}`"
            />
            <select
              v-else
              :class="`cell__column-${zeroPad(i + 1, 2)} cell__row-${zeroPad(
                i + 1,
                2
              )}`"
            >
              <option
                v-for="(option, index) in item[head]"
                :key="index"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, Ref, computed, defineComponent } from "vue";

import * as XLSX from "xlsx";

import SpreadsheetDialog from "./iC-SpreadsheetDialog.vue";
import SpreadsheetDynHead from "./iC-SpreadsheetDynHead.vue";

import {
  SpreadsheetOptions,
  SpreadsheetApiResponse,
} from "../../interfaces/spreadsheet";

import { carClients } from "../../api/car-clients";

import useDialog from "../../composables/useDialog";
import useTable from "../../composables/useTable";

export default defineComponent({
  components: {
    SpreadsheetDialog,
    SpreadsheetDynHead,
  },
  setup() {
    const selectedOptions: Ref<SpreadsheetOptions> = ref({
      isUsingSimpleRow: false,
      isUsingMultipleRow: false,
      isUsingSimpleCol: false,
      isUsingMultipleCol: false,
      isUsingFiltering: false,
      isUsingSorting: false,
    });

    const data: Ref<SpreadsheetApiResponse[]> = ref(carClients);
    const clonedData = ref(data.value);

    const headers: Ref<string[]> = computed(
      () => Object.keys(data[0]) as string[]
    );

    const applyOptions = (options: SpreadsheetOptions): void => {
      selectedOptions.value = options;
    };

    const { isShowingOptions, showOptions, hide } = useDialog();
    const { sortData, filterByInput } = useTable();

    const sortAscen: Ref<undefined | any> = ref(undefined);
    const filterInput: Ref<undefined | any> = ref(undefined);
    const isAscending: Ref<boolean> = ref(true);
    const multipleSelectedRows = ref([]);
    const multipleselectedCols = ref([]);

    const sortAscDescData = async (head: string): Promise<void> => {
      sortAscen.value[head] = isAscending.value;
      const dataToSort = data.value;
      data.value = await sortData(dataToSort, head, sortAscen.value[head]);
      isAscending.value = !isAscending.value;
    };

    const filterData = async (head: string, value: unknown): Promise<void> => {
      filterInput.value[head] = value;
      const input = filterInput.value[head];
      if (!input) {
        data.value = clonedData.value;
      }
      const dataToFilter = data.value;
      setTimeout(async () => {
        const result = await filterByInput(dataToFilter, head, input);
        data.value = result;
      }, 150);
    };

    let initialCol: string = "0";
    let initialRow: string = "0";
    let finalCol: string = "0";
    let finalRow: string = "0";
    let pasteInformation: string = "";

    const zeroPad = (num: number, places: number) =>
      String(num).padStart(places, "0");

    const listenCopyPaste = () => {
      document.addEventListener("paste", (event) => {
        pasteInformation = (
          event.clipboardData || (<any>window).clipboardData
        ).getData("text");
        const cleanPaste1 = pasteInformation
          .replaceAll("\r", "---")
          .replaceAll("\t", "---")
          .replaceAll("\t\r", "---")
          .replaceAll("\n", "");

        const splittedPaste = cleanPaste1.split("---");
        const selectedCellsHTML = document.querySelectorAll(".cell-selection");
        selectedCellsHTML.forEach((cell, index) => {
          if (cell.tagName === "INPUT") {
            const cellToProcess = cell as HTMLInputElement;
            cellToProcess.value = splittedPaste[index]
              ? splittedPaste[index]
              : "";
          }
        });
        event.preventDefault();
      });
    };

    const cleanSelections = () => {
      const selectedCellsHTML = document.querySelectorAll(".cell-selection");
      selectedCellsHTML.forEach((cell) =>
        cell.classList.remove("cell-selection")
      );
    };

    const listenMouseSelectable = () => {
      function getOffset(el: Element) {
        const rect = el.getBoundingClientRect();
        return {
          left: `${rect.left + window.scrollX}px`,
          top: `${rect.top + window.scrollY}px`,
        };
      }
      const tableBody = document.querySelector("tbody") as HTMLElement;

      let initialCell = "";
      let finalCell = "";

      tableBody.addEventListener("mousedown", (event: Event): void => {
        const target = event.target as HTMLElement;

        if (target.tagName === "INPUT") {
          // ? Clean process ? //
          initialCell = "";
          finalCell = "";
          cleanSelections();
          // ? End clean process ? //
          // ? Selection area creation ? //
          const div = document.createElement("div");
          tableBody.appendChild(div);
          div.classList.add("drag-div");

          const dragDiv = document.querySelector(".drag-div") as HTMLElement;

          dragDiv.style.position = "fixed";
          dragDiv.style.background = "transparent";
          dragDiv.style.top = getOffset(target).top;
          dragDiv.style.left = getOffset(target).left;
          // ? End selection area creation ? //
          // ? First cell selected assignation ? //
          if ((target as HTMLElement).className.includes("cell__col")) {
            initialCell = target.className;
            finalCell = target.className;
          }
          // ? End first cell selected assignation ? //

          tableBody.addEventListener("mousemove", (event) => {
            // ? Selection area drawing when mouseover ? //
            tableBody.style.cursor = "pointer";
            dragDiv.style.border = "2px dashed #5340ff";
            dragDiv.style.width = `${event.clientX - dragDiv.offsetLeft}px`;
            dragDiv.style.height = `${event.clientY - dragDiv.offsetTop}px`;
            if (target.className.includes("cell__col")) {
              finalCell = target.className;
            }
          });
          // ? End selection area drawing when mouseover ? //
        }
      });

      // ? When mouse up => we remove selection area and select the cells ? //
      tableBody.addEventListener("mouseup", () => {
        const div = document.querySelector(".drag-div");
        if (div) {
          div.remove();
          setTimeout(() => {
            // eslint-disable-next-line prefer-destructuring
            initialCol = initialCell.split("cell__column-")[1].split(" ")[0];
            // eslint-disable-next-line prefer-destructuring
            initialRow = initialCell.split("cell__row-")[1].split(" ")[0];
            // eslint-disable-next-line prefer-destructuring
            finalCol = finalCell.split("cell__column-")[1].split(" ")[0];
            // eslint-disable-next-line prefer-destructuring
            finalRow = finalCell.split("cell__row-")[1].split(" ")[0];
            // eslint-disable-next-line no-plusplus
            for (let i = initialCol; i <= finalCol; i++) {
              // eslint-disable-next-line no-plusplus
              for (let j = initialRow; j <= finalRow; j++) {
                const cellsSelected = document.querySelector(
                  `.cell__column-${zeroPad(i, 2)}.cell__row-${zeroPad(j, 2)}`
                );
                cellsSelected.classList.add("cell-selection");
              }
            }
          }, 50);
        }
      });
    };

    const selectRow = (index: number) => {
      cleanSelections();
      const selectedRow = document.querySelectorAll(
        `.cell__row-${zeroPad(index, 2)}`
      );
      if (selectedOptions.isUsingSimpleRow.value) {
        selectedRow.forEach((row) => {
          row.classList.add("cell-selection");
        });
      } else {
        if (multipleSelectedRows.some((item) => item.index === index)) {
          multipleSelectedRows.forEach((row) => {
            if (row.index === index) {
              row.selectedRow.forEach((item) => {
                item.classList.remove("cell-selection");
              });
              multipleSelectedRows.splice(multipleSelectedRows.indexOf(row), 1);
            }
          });
        } else {
          multipleSelectedRows.push({
            index,
            selectedRow,
          });
        }
        multipleSelectedRows.forEach((row) => {
          row.selectedRow.forEach((item) => {
            item.classList.add("cell-selection");
          });
        });
      }
    };

    const selectColumn = (index: number): void => {
      cleanSelections();
      const selectedCol = document.querySelectorAll(
        `.cell__column-${zeroPad(index, 2)}`
      );
      if (selectedOptions.isUsingSimpleCol.value) {
        selectedCol.forEach((col) => {
          col.classList.add("cell-selection");
        });
      } else {
        if (multipleselectedCols.some((item) => item.index === index)) {
          multipleselectedCols.forEach((col) => {
            if (col.index === index) {
              col.selectedCol.forEach((item) => {
                item.classList.remove("cell-selection");
              });
              multipleselectedCols.splice(multipleselectedCols.indexOf(col), 1);
            }
          });
        } else {
          multipleselectedCols.push({
            index,
            selectedCol,
          });
        }
        multipleselectedCols.forEach((col) => {
          col.selectedCol.forEach((item) => {
            item.classList.add("cell-selection");
          });
        });
      }
    };

    const generateAlphabet = (): string[] => {
      const alpha = [];
      const alphabetChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      let counterLoop = 0;
      const numLoops = Math.floor(props.headers.length / 26);

      alphabetChars.forEach((char, index) => {
        alpha.push(char);

        while (index === alphabetChars.length - 1 && counterLoop < numLoops) {
          for (let j = 0; j < alphabetChars.length; j += 1) {
            alpha.push(alphabetChars[counterLoop] + alphabetChars[j]);
          }
          counterLoop += 1;
        }
      });
      return alpha.slice(0, props.headers.length);
    };

    const alphabet = ref(generateAlphabet());

    const downloadExcel = (): void => {
      const columns = headers.map((head) => head);
      const rows = [];
      const matrix = [];

      data.value.forEach((el) => {
        rows.push(Object.values(el));
      });
      matrix.push(columns);
      matrix.push(...rows);
      const ws = XLSX.utils.aoa_to_sheet(matrix);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Spreadsheet");
      /* generate file and send to client */
      const date = new Date();
      const today = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
      XLSX.writeFile(wb, `Filename - ${today}.xlsx`);
    };

    onMounted(() => {
      listenCopyPaste();
      listenMouseSelectable();
    });

    return {
      selectedOptions,
      clonedData,
      data,
      headers,
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
      sortAscDescData,
      filterData,
      initialCol,
      initialRow,
      finalCol,
      finalRow,
      pasteInformation,
      zeroPad,
      listenCopyPaste,
      cleanSelections,
      listenMouseSelectable,
      selectRow,
      selectColumn,
      generateAlphabet,
      downloadExcel,
    };
  },
});
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.table__spreadsheet-wrapper {
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 600px;
  max-width: auto;
  margin: 0 auto;
  border-radius: 20px 0px 20px 20px;
  border: 5px solid $dark;
  box-shadow: 0px 1px 3px black, 0px 4px 5px $dark;
}

table {
  position: relative;
  width: 100%;
  border-collapse: collapse;
}

.table__spreadsheet-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: $dark;

  th {
    color: $secondary;
  }
}

tr {
  border: none;
}

input,
td,
select {
  cursor: pointer;
  text-align: center;
  height: 40px;
  border: none;
  padding: 0;
  min-width: 170px;
  width: 100%;
  border-right: 1px solid $tertiary;
  border-bottom: 1px solid $tertiary;

  select {
    height: 41px;
  }
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";

  &:focus {
    outline: none;
  }
}

option {
  background: #151515;
  color: $secondary;
  padding: 20px;
}

.table__spreadsheet-header--input {
  border: none;
  transition: all 0.3s ease-out;
  background: transparent;
  color: $secondary;
  caret-color: $secondary;
  font-size: 16px;

  &:focus {
    outline: 1px solid $secondary;
    background: $secondaryDark;
    caret-color: $primary;
    color: $primary;
    border-radius: 2px;
    outline-width: 1px;
    outline-offset: 0px;
  }

  &:not(:focus) {
    color: $primary;
  }

  &::placeholder {
    color: $secondary;
  }
  &:hover::placeholder {
    transition: all 0.3s ease-out;
    color: white;
  }
}

.table__spreadsheet-header--actions {
  padding: 5px;
  height: 30px;
  width: 30px;
}

.table__spreadsheet-header--showOptions {
  transition: all 0.3s ease-in-out;
  color: $secondary;

  &:hover {
    border-radius: 50px;
    background: #bb66b4;
    color: white;
  }
}
.table__spreadsheet-header--download {
  transition: all 0.3s ease-in-out;
  color: $secondary;

  &:hover {
    border-radius: 50px;
    background: #66bb6a;
    color: white;
  }
}

.table__spreadsheet-header--field {
  transition: all 0.3s ease-out;

  &:hover {
    color: $primary;
    background: rgba(56, 51, 100, 0.5);
  }
}

.table__spreadsheet-header--alphabet {
  transition: all 0.3s ease-out;

  &:hover:not(:first-child) {
    color: white;
    background: $twilight;
  }
}
.table__spreadsheet-index {
  position: sticky;
  left: 0;
  transition: all 0.3s ease-out;
  min-width: 40px;
  height: auto;
  background: $dark;
  border-bottom: 1px solid $secondary;

  &:hover {
    color: white;
    background: $twilight;
  }
}

.table__spreadsheet--selector-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
  transition: all 0.3s ease-out;
}

input:not(.table__spreadsheet-header--input):focus {
  outline: none;
  animation: $pulseAnimation;
}

.cell-selection {
  animation: $pulseAnimation;
  color: white;
  input {
    color: white;
  }
}
</style>
