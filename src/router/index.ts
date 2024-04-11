import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("@/views/main/index.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/main/HomeView.vue"),
        },
        {
          path: "blog",
          name: "Blog",
          component: () => import("@/views/main/BlogView.vue"),
        },
        {
          path: "plan",
          name: "Plan",
          component: () => import("@/views/main/PlanView.vue"),
        },
        {
          path: "ticket",
          name: "Ticket",
          component: () => import("@/views/main/TicketView.vue"),
        },
        {
          path: "activity",
          name: "Activity",
          component: () => import("@/views/main/ActivityView.vue"),
        },
      ],
    },
  ],
});

export default router;
