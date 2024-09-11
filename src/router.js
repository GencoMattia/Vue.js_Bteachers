import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import Error404 from "./pages/errors/Error404.vue";
import PageSingleProject from "./pages/PageSingleProject.vue";
import PageTeachersList from "./pages/PageTeachersList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: PageHome
        },
        {
            path: "/teachers",
            name: "teachers-list",
            component: PageTeachersList
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