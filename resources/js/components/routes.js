import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/logo",
        component: () => import("./Logo.vue"),
        name: "logo",
    },
    {
        path: "/logosymbol",
        component: () => import("./LogoSymbol.vue"),
        name: "logosymbol",
    },
    {
        path: "/colors",
        component: () => import("./Colors.vue"),
        name: "colors",
    },
    {
        path: "/loaders-animations",
        component: () => import("./LoadersAnimations.vue"),
        name: "loadersAnimations",
    },
    {
        path: "/typography",
        component: () => import("./Typography.vue"),
        name: "typography",
    },
    {
        path: "/illustrations",
        component: () => import("./Illustrations.vue"),
        name: "illustrations",
    },
    {
        path: "/wallpapers",
        component: () => import("./Wallpapers.vue"),
        name: "wallpapers",
    },
    {
        path: "/mascots",
        component: () => import("./Mascots.vue"),
        name: "mascots",
    },
];

const router = createRouter({
    linkActiveClass: "font-bold",
    routes,
    history: createWebHistory(),
});
export default router;
