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
        component: () => import("./views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("./views/AboutView.vue"),
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
        component: () => import("./views/SimpleTableView.vue"),
      },
      {
        path: "/card",
        name: "Card",
        component: () => import("./views/CardView.vue"),
      },
      {
        path: "/form",
        name: "Form",
        component: () => import("./views/FormView.vue"),
      },

      {
        path: "/calendar",
        name: "Calendar",
        component: () => import("./components/calendar/CalendarGrid.vue"),
      },
      {
        path: "/snackbar",
        name: "Snackbar",
        component: () => import("./views/SnackbarView.vue"),
      },
      {
        path: "/button",
        name: "Button",
        component: () => import("./views/ButtonView.vue"),
      },
      {
        path: "/dialog",
        name: "Dialog",
        component: () => import("./views/DialogView.vue"),
      },
      {
        path: "/smartForm",
        name: "SmartForm",
        component: () => import("./views/SmartFormView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
