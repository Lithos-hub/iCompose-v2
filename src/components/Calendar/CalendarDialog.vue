<template>
  <div class="bg-white shadow-lg p-5 w-[250px] h-[500px] rounded-lg">
    <h2 class="text-xl my-2">Add events</h2>
    <hr />
    <h3 class="text-lg mt-5 text-center font-medium">
      {{ `${date.day}-${date.month}-${date.year}` }}
    </h3>
    <div class="flex flex-col justify-between">
      <div>
        <Input
          v-model="eventData.title"
          placeholder="Title"
          class="my-2"
          :bordered="true"
        />
        <Textarea
          v-model="eventData.description"
          placeholder="Description"
          class="my-2"
          :bordered="true"
        />
      </div>
      <div class="ml-auto">
        <button
          class="bg-indigo-600 text-white font-medium p-3 rounded-[25px]"
          :disabled="!eventData.title"
          @click="addEvent"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { EventModel } from "../../interfaces/calendar";
import Input from "../form/Input.vue";
import Textarea from "../Form/Textarea.vue";

interface Props {
  day: number;
  month: number;
  year: number;
}

const props = defineProps<{
  date: Props;
}>();

const emit = defineEmits(["add"]);

const eventData: Ref<EventModel> = ref({
  title: "",
  description: "",
});

const addEvent = () => emit("add", { ...eventData.value });
</script>
