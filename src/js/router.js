import { createRouter, createWebHistory } from 'vue-router';

import AppProjects from '../pages/AppProjects.vue';

const routes = [
    { path: '/projects', component: AppProjects, name: "projects" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export { router };
