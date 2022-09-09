<template>
  <iCSnackbar
    v-if="show"
    title="Notification title"
    message="Notification message"
    :icon="icon"
    :type="snackbarType"
    @close-snackbar="close"
  />
  <div class="grid h-screen place-items-center ml-[250px]">
    <div class="flex justify-around w-[40vw]">
      <div>
        <button
          class="base__btn bg-white hover:shadow-lg hover:scale-110 hover:shadow-slate-400"
          @click="open('success')"
        >
          <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
        </button>
        <h2 class="text-center font-semibold mt-3 text-green-700">Success</h2>
      </div>
      <div>
        <button
          class="base__btn bg-white hover:shadow-lg hover:scale-110 hover:shadow-slate-400"
          @click="open('info')"
        >
          <i class="fa-solid fa-circle-info text-2xl text-blue-500"></i>
        </button>
        <h2 class="text-center font-semibold mt-3 text-blue-700">Info</h2>
      </div>
      <div>
        <button
          class="base__btn bg-white hover:shadow-lg hover:scale-110 hover:shadow-slate-400"
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
import iCSnackbar from "../components/iC-Snackbar.vue";

export default defineComponent({
  name: "Snackbar",
  components: {
    iCSnackbar,
  },
  setup() {
    const show = ref(false);
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
      show.value = !show.value;

      if (show.value) {
        setTimeout(() => {
          const snackbar = document.querySelector(".snackbar");
          snackbar?.classList.add("snackbar__hide");
        }, 4000);

        setTimeout(() => {
          show.value = false;
        }, 5000);
      }
    };

    const close = () => {
      const snackbar = document.querySelector(".snackbar");
      snackbar?.classList.add("snackbar__hide");
      setTimeout(() => {
        show.value = false;
        snackbar?.classList.remove("snackbar__hide");
      }, 999);
    };

    return { show, snackbarType, open, close, icon };
  },
});
</script>

<style lang="" scoped></style>
