import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
	{
		path: '/about',
		component: AboutView,
	},
	{
		path: '',
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHashHistory('/'),

	routes,
});

export default router;
