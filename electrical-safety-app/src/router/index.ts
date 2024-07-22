/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";

const routes = [
  {
    path: "/",
    component: () => import("@/components/Layout.vue"),
    name: "MainPage",
    children: [
      { path: "", component: () => import("@/pages/MainPage.vue") },
      {
        path: "/first-time",
        component: () => import("../pages/FirstTimePage.vue"),
      },
      {
        path: "/regular",
        component: () => import("../pages/RegularPage.vue"),
      },
      {
        path: "/extraordinary",
        component: () => import("../pages/Extraordinary.vue"),
      },
    ],
  },
];
// {
//   path: "/first-time",
//   component: () => import("@/components/Layout.vue"),
//   name: "FirsTimePage",
//   children: [
//     {
//       path: "",
//       component: () => import("@/pages/FirsTimePage.vue"),
//     },
//   ],
// },
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
