import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../ProjectList.vue"),
    },
    {
      path: "/project/:name",
      component: () => import("../ProjectShow.vue"),
    },
  ],
});
