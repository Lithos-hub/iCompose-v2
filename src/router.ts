import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    redirect: "/home",
    component: () => import("./layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("./views/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("./views/About.vue"),
      },
      {
        path: "/spreadsheet",
        name: "Spreadsheet",
        component: () =>
          import("./components/spreadsheet/iC-SpreadsheetTable.vue"),
      },
      {
        path: "/simpleTable",
        name: "SimpleTable",
        component: () => import("./components/iC-SimpleTable.vue"),
      },
      {
        path: "/card",
        name: "Card",
        component: () => import("./components/iC-Card.vue"),
      },
      {
        path: "/smartForm",
        name: "SmartForm",
        component: () => import("./components/iC-SmartForm.vue"),
      },
      {
        path: "/snackbar",
        name: "Snackbar",
        component: () => import("./views/Snackbar.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
