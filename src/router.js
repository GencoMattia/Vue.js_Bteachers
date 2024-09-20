import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import Error404 from "./pages/errors/Error404.vue";
import PageSingleTeacher from "./pages/PageSingleTeacher.vue";
import PageTeachersList from "./pages/PageTeachersList.vue";
import AboutUs from "./pages/AboutUs.vue";
import QuestSection from "./pages/QuestSection.vue";

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
            path: "/teachers/:id",
            name: "single-teacher",
            component: PageSingleTeacher
        },
        {
            path: "/404",
            name: "404-not-found",
            component: Error404
        },
        {
            path: "/AboutUs",
            name: "About-us",
            component: AboutUs
        },
        {
            path: "/blog",
            name: "Blog",
            component: QuestSection
        },
    ]
});

export { router };