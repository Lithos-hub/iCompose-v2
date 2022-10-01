<template>
  <Snackbar
    ref="snackbar"
    title="Notification title"
    message="Notification message"
    :icon="icon"
    :type="snackbarType"
    @close-snackbar="close"
  />
  <div
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-[15px] shadow-md"
  >
    <div class="flex justify-around w-[40vw]">
      <div>
        <button
          class="btn__light bg-white hover:shadow-lg hover:scale-110 hover:shadow-slate-400"
          @click="open('success')"
        >
          <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
        </button>
        <h2 class="text-center font-semibold mt-3 text-green-700">Success</h2>
      </div>
      <div>
        <button
          class="btn__light bg-white hover:shadow-lg hover:scale-110 hover:shadow-slate-400"
          @click="open('info')"
        >
          <i class="fa-solid fa-circle-info text-2xl text-blue-500"></i>
        </button>
        <h2 class="text-center font-semibold mt-3 text-blue-700">Info</h2>
      </div>
      <div>
        <button
          class="btn__light bg-white hover:shadow-lg hover:scale-110 hover:shadow-slate-400"
          @click="open('error')"
        >
          <i class="fa-solid fa-circle-exclamation text-2xl text-red-500"></i>
        </button>
        <h2 class="text-center font-semibold mt-3 text-red-700">Error</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Snackbar from "../components/Snackbar.vue";

export default defineComponent({
  name: "SnackbarView",
  components: {
    Snackbar,
  },
  setup() {
    const snackbarType: Ref<string> = ref("");
    const icon: Ref<string> = ref("");

    const open = (type: string) => {
      switch (type) {
        case "success":
          icon.value = "fa-solid fa-circle-check";
          break;
        case "info":
          icon.value = "fa-solid fa-circle-info";
          break;
        case "error":
          icon.value = "fa-solid fa-circle-exclamation";
          break;
      }

      snackbarType.value = type;

      const snackbar = document.querySelector(".snackbar") as HTMLElement;

      setTimeout(() => {
        snackbar.style.transition =
          "all 250ms cubic-bezier(0.075, 0.82, 0.165, 1)";
        snackbar.style.bottom = "0px";
      }, 250);

      setTimeout(() => {
        snackbar.style.transition = "all 1s ease";
        snackbar.style.bottom = "-200px";
      }, 2250);
    };

    const close = () => {
      const snackbar = document.querySelector(".snackbar") as HTMLElement;
      snackbar.style.transition = "all 1s ease";
      snackbar.style.bottom = "-200px";
    };

    return { snackbarType, open, close, icon };
  },
});
</script>
