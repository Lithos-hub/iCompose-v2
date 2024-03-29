<template>
  <nav
    ref="sideMenu"
    class="sticky top-0 left-0 h-screen bg-white hover:px-8 overflow-y-auto duration-200 p-5 border-r z-10"
  >
    <div v-show="show" class="fadeIn">
      <strong class="text-indigo-800">Components list</strong>
      <hr class="mt-3" />
      <router-link
        v-for="{ text, to, icon } of menuItems"
        :to="to"
        :class="`sideMenu-link ${
          route?.path === to ? 'bg-indigo-800 text-white' : 'text-slate-800'
        }`"
      >
        <div class="flex justify-between w-full">
          <i
            :class="`icon p-1 text-[18px] ${icon} ${
              route?.path === to ? 'bg-none text-white mr-3' : 'text-slate-800'
            }`"
          ></i>
          <span>{{ text }}</span>
        </div>
      </router-link>
    </div>
    <div v-show="!show" class="pt-9 fadeIn">
      <ul>
        <li v-for="{ icon, to } of menuItems" class="p-1 my-2 text-center">
          <i
            :class="`p-2 w-[40px] h-[40px] rounded-full text-[18px] ${icon} ${
              route?.path === to ? 'text-indigo-800' : 'text-slate-800'
            }`"
          ></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, VNodeRef } from "vue";
import { useRoute } from "vue-router";

interface MenuItem {
  text: string;
  to: string;
  icon: string;
}

const route = useRoute();

const sideMenu = ref<VNodeRef | null>(null);

const menuItems: MenuItem[] = [
  {
    text: "Spreadsheet Table",
    to: "/spreadsheet",
    icon: "fa-solid fa-table-list",
  },
  {
    text: "Simple Data Table",
    to: "/simpleTable",
    icon: "fa-sharp fa-solid fa-table",
  },
  {
    text: "Form",
    to: "/form",
    icon: "fa-regular fa-file-lines",
  },
  {
    text: "Calendar",
    to: "/calendar",
    icon: "fa-regular fa-calendar",
  },
  {
    text: "Snackbar",
    to: "/snackbar",
    icon: "fa-solid fa-circle-exclamation",
  },
  {
    text: "Card",
    to: "/card",
    icon: "fa-regular fa-square",
  },
  {
    text: "Button",
    to: "/button",
    icon: "fa-regular fa-hand-pointer",
  },
  {
    text: "Dialog",
    to: "/dialog",
    icon: "fa-solid fa-comment-dots",
  },
  {
    text: "Spinner",
    to: "/spinner",
    icon: "fa-solid fa-spinner",
  },
  {
    text: "Smart form",
    to: "/smartForm",
    icon: "fa-solid fa-font",
  },
];

const show = ref(false);

const showMenuItems = () => (show.value = true);
const hideMenuItems = () => (show.value = false);

onMounted(() => {
  sideMenu.value.addEventListener("mouseover", () => {
    showMenuItems();
  });
  sideMenu.value.addEventListener("mouseout", () => {
    hideMenuItems();
  });
});

onUnmounted(() => {
  sideMenu.value.removeEventListener("mouseover");
  sideMenu.value.removeEventListener("mouseout");
});
</script>

<style lang="scss" scoped>
.sideMenu-link {
  @apply p-2 my-3 block font-semibold hover:bg-indigo-800 hover:text-white rounded-lg;

  &:hover .icon {
    @apply text-white;
  }
}

.fadeIn {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
