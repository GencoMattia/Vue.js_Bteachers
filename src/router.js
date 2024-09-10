import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProjectsList from "./pages/PageProjectsList.vue";
import Error404 from "./pages/errors/Error404.vue";
import PageSingleProject from "./pages/PageSingleProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: PageHome
        },
        {
            path: "/index",
            name: "teachers-list",
            component: PageProjectsList
        },
        {
            path: "/projects/:id",
            name: "single-project",
            component: PageSingleProject
        },
        {
            path: "/404",
            name: "404-not-found",
            component: Error404
        },
    ]
});

export { router };