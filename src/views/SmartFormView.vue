<template>
  <div
    class="mx-auto mt-[100px] bg-white p-5 rounded-[15px] shadow-md flex flex-col-2 gap-10 justify-center relative"
  >
    <div class="flex flex-col">
      <label class="font-medium mb-2"
        >Write a JavaScript object and click on the button to generate a
        form</label
      >
      <div class="monaco__wrapper"></div>
      <div class="mx-auto my-5">
        <Button variant="bordered" :disabled="!hasChanges" @click="generateForm"
          >Generate form</Button
        >
      </div>
    </div>
    <div class="w-full min-w-[150px]">
      <div v-if="isGenerated && !isLoading">
        <label class="font-medium mb-2">Result:</label>
        <div class="mx-auto my-5">
          <SmartForm :data="generatedObject" />
        </div>
      </div>
    </div>
    <div class="absolute top-1/2 right-[25%] -translate-x-1/2 -translate-y-1/2">
      <Spinner inner-text="Loading..." v-if="isLoading" />
    </div>
  </div>
  <Snackbar
    ref="snackbar"
    title="Fatal error"
    :message="errorMessage"
    icon="fa-solid fa-circle-exclamation"
    type="error"
    @close-snackbar="hideSnackbar"
  />
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted, watch, computed } from "vue";
import loader from "@monaco-editor/loader";

import SmartForm from "../components/SmartForm.vue";
import Button from "../components/Button.vue";
import Spinner from "../components/Spinner.vue";
import Snackbar from "../components/Snackbar.vue";

const jsonCode = ref(`const object = {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    email: "john_doe@example.com",
    isAdmin: true,
    signUpDate: "2022-09-24"
}`);
const hasChanges: Ref<boolean> = ref(true);
const isGenerated: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);
const generatedObject: Ref<Record<string, any>> = ref({});
const errorMessage: Ref<string> = ref("");
const monacoErrors: Ref<any[]> = ref([]);

watch(
  () => jsonCode.value,
  () => (hasChanges.value = true)
);

const loadMonaco = (): void => {
  loader.init().then((monaco) => {
    const monacoWrapper = document.querySelector(
      ".monaco__wrapper"
    ) as HTMLElement;
    let editor = monaco.editor.create(monacoWrapper as HTMLElement, {
      value: jsonCode.value,
      language: "javascript",
      theme: "vs-dark",
      automaticLayout: true,
      minimap: { enabled: false },
    });
    monacoWrapper.addEventListener("keydown", () =>
      setTimeout(() => (jsonCode.value = editor.getValue()), 100)
    );
    monaco.editor.onDidChangeMarkers(([uri]) => {
      const markers = monaco.editor.getModelMarkers({ resource: uri });
      console.log(
        "markers:",
        (monacoErrors.value = markers.map(
          ({
            message,
            startLineNumber,
            startColumn,
            endLineNumber,
            endColumn,
          }) =>
            `${message} [${startLineNumber}:${startColumn}-${endLineNumber}:${endColumn}]`
        ))
      );
    });
  });
};

const javascriptCodeToJSON = (string: string) => {
  const keyValuePairs = string.split("{").at(1).slice(0, -1).trim();
  const trimmed = keyValuePairs
    .split(":")
    .map((element) =>
      element
        .trim()
        .replaceAll("\n", "")
        .replaceAll(`"`, "")
        .replaceAll(" ", "")
    )
    .join(",");
  let processed = Object(trimmed)
    .split(":")
    .at(0)
    .split(",")
    .map((item: Record<string, any>, index: number, arr: any[]) => {
      if (index % 2 === 0) {
        return { [String(item)]: arr.at(index + 1) };
      }
    })
    .filter((item: Record<string, any>) => item);

  const processedObject = Object.assign({}, ...processed);

  Object.keys(processedObject).forEach((key: string) => {
    const valueToProcess = processedObject[key];
    let value = !isNaN(Number(valueToProcess))
      ? Number(valueToProcess)
      : valueToProcess === "true" || valueToProcess === "false"
      ? Boolean(valueToProcess)
      : String(valueToProcess);
    if (key && value) {
      processedObject[key] = value;
    }
  });

  return processedObject;
};

const parseJSON = async (value: string) => {
  return new Promise((resolve, reject) => {
    try {
      if (!monacoErrors.value.length) {
        console.log("value to parse => ", value);
        const result = JSON.parse(JSON.stringify(javascriptCodeToJSON(value)));
        setTimeout(() => {
          resolve(result);
          isLoading.value = false;
        }, 1000);
      } else {
        throw Error();
      }
    } catch (error: any) {
      errorMessage.value =
        "Unable to generate the form because there are some errors in the code.";
      displaySnackbar();
      isLoading.value = false;
    }
  });
};

const displaySnackbar = () => {
  const snackbar = document.querySelector(".snackbar") as HTMLElement;

  setTimeout(() => {
    snackbar.style.transition = "all 250ms cubic-bezier(0.075, 0.82, 0.165, 1)";
    snackbar.style.bottom = "0px";
  }, 250);

  setTimeout(() => {
    snackbar.style.transition = "all 1s ease";
    snackbar.style.bottom = "-200px";
  }, 4000);
};

const hideSnackbar = () => {
  const snackbar = document.querySelector(".snackbar") as HTMLElement;
  snackbar.style.transition = "all 1s ease";
  snackbar.style.bottom = "-200px";
};

const generateForm = async () => {
  isLoading.value = true;
  generatedObject.value = (await parseJSON(jsonCode.value)) as object;
  isGenerated.value = true;
  hasChanges.value = false;
};

onMounted(() => loadMonaco());
</script>

<style lang="scss" scoped>
.monaco__wrapper {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: relative;
  width: 500px;
  height: 300px;
  margin-top: 2px;
}

.monaco__wrapper:after {
  content: "";
  background: url("../assets/img/javascript.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}
</style>
