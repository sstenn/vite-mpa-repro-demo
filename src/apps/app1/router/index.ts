import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
		path: '/',
		name: 'Index',
		component: () => import('../views/Index.vue')
	},{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	}
]

const router = createRouter({
    history: createWebHistory('/app1'),
    routes
})

export default router;
