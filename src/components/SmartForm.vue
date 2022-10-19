<template>
  <form>
    <section class="grid gap-5 md:grid-cols-1 lg:grid-cols-3">
      <div v-for="{ label, value, valid, type } of map" class="w-auto">
        <div v-if="typeof value === 'string'">
          <Input
            v-model="formModels[label]"
            v-if="typeof value === 'string'"
            bordered
            :type="getTypeof(value)"
            :placeholder="label"
            :valid="valid"
            :error-message="getMessage(type)"
          />
          <small class="text-[12px] text-indigo-800 italic"
            >Type: {{ getTypeof(value) }}</small
          >
        </div>
        <div v-if="typeof value === 'number'">
          <Input
            v-model.number="formModels[label]"
            v-if="typeof value === 'number'"
            bordered
            :error-message="getMessage(type)"
            :type="getTypeof(value)"
            :placeholder="label"
            :valid="valid"
          />
          <small class="text-[12px] text-indigo-800 italic block"
            >Type: {{ getTypeof(value) }}</small
          >
        </div>
        <div v-if="typeof value === 'boolean'">
          <Checkbox
            v-model="formModels[label]"
            v-if="typeof value === 'boolean'"
            :label="label"
            class="mt-3"
            :valid="valid"
          />
          <small class="text-[12px] text-indigo-800 italic"
            >Type: {{ getTypeof(value) }}</small
          >
        </div>
      </div>
    </section>
  </form>

  <section
    class="mx-auto mt-5 max-w-[1000px] overflow-auto bg-[#303030] text-white shadow-lg p-5 rounded-[15px]"
  >
    <h1 class="text-lg font-medium mb-2">Form output:</h1>
    <pre>{{ formModels }}</pre>
  </section>
</template>

<script lang="ts" setup>
import { ref, Ref, watch } from "vue";
import Input from "../components/Form/Input.vue";
import Checkbox from "./Form/Checkbox.vue";

type mapModel = {
  label: string;
  value: any;
  valid: boolean;
  type: string;
}[];

const formModels: Ref<Record<string, any>> = ref({});

interface Props {
  data: object;
}

const props = defineProps<Props>();
const map = ref(buildFirstMap());

watch(
  () => Object.values(formModels.value),
  (newVal, oldVal) => {
    if (newVal.join("").length !== oldVal.join("").length) {
      const mapped = map.value.map((item) => {
        return {
          ...item,
          value: formModels.value[item.label],
          valid: validate(
            item.type,
            formModels.value[item.label],
            formModels.value[item.label]
          ),
        };
      }) as mapModel;
      map.value = mapped;
    }
  }
);

const getMessage = (type: any) => {
  const options = {
    email: "Invalid email format",
    text: "Invalid type of data, write text instead number",
    number: "Invalid type of data, write number instead text",
  };

  return options[type as keyof typeof options];
};

function buildFirstMap() {
  return Object.keys(props.data).map((key) => {
    formModels.value[key as keyof typeof props.data] =
      props.data[key as keyof typeof props.data];
    return {
      label: key,
      value: props.data[key as keyof typeof props.data],
      valid: validate(
        getTypeof(props.data[key as keyof typeof props.data]) as string,
        props.data[key as keyof typeof props.data],
        getTypeof(props.data[key as keyof typeof props.data]) === "number"
      ),
      type: getTypeof(props.data[key as keyof typeof props.data]),
    };
  }) as mapModel;
}

function validate(type: string, value: any, isRequired: boolean) {
  let isValid = true;
  if (type === "email") {
    isValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
  }
  if (type === "number" && isRequired) {
    isValid = value;
  }

  console.log("Validating: ", getTypeof(value), value, isValid);
  return isValid;
}

function getTypeof(value: any) {
  if (typeof value === "string") {
    if (value.includes("@")) {
      return "email";
    } else if (value.includes("/") || value.includes("-")) {
      return "date";
    } else if (value.includes("http")) {
      return "url";
    } else if (String(value) === "true" || String(value) === "false") {
      return "checkbox";
    } else {
      return "text";
    }
  }
  if (typeof value === "number") {
    if (String(value).length === 9) {
      return "tel";
    } else {
      return "number";
    }
  }
  if (typeof value === "boolean") {
    return "checkbox";
  }
}
</script>
