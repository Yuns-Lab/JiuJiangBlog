import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import { default as e403View } from "../views/error/403.vue";
import { default as e404View } from "../views/error/404.vue";

const generate_403 = (pathList: String[]) => {
    const box: Object[] | any = [];
    pathList.forEach((path) => {
        const route = {
            path: path,
            redirect: "/error/403",
        };
        box.push(route);
    });
    return box;
};

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/error/403",
            name: "403",
            component: e403View,
        },
        ...generate_403(["/403", "/blog", "/project", "/friends"]),
        {
            path: "/error/404",
            name: "404",
            component: e404View,
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/error/404",
        },
    ],
});

router.beforeEach((to, from, next) => {
    localStorage.setItem("XCurrentPagePath", to.path);
    next();
});

export default router;
