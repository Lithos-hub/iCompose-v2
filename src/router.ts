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
          import("./components/Spreadsheet/SpreadsheetTable.vue"),
      },
      {
        path: "/simpleTable",
        name: "SimpleTable",
        component: () => import("./components/SimpleTable.vue"),
      },
      {
        path: "/card",
        name: "Card",
        component: () => import("./views/Card.vue"),
      },
      {
        path: "/form",
        name: "Form",
        component: () => import("./views/Form.vue"),
      },
      {
        path: "/smartForm",
        name: "SmartForm",
        component: () => import("./views/SmartForm.vue"),
      },
      {
        path: "/calendar",
        name: "Calendar",
        component: () => import("./components/calendar/CalendarGrid.vue"),
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
