import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
		path: '/',
		name: 'Index',
		component: () => import('../views/Index.vue')
	}
]

const router = createRouter({
    history: createWebHistory('/app1'),
    routes
})

export default router;
