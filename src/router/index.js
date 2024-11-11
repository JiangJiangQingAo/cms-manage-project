import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";
Vue.use(VueRouter);

const constantRouters = [
	{
		path: "/",
		component: Layout,
		// 路由重定向
		redirect: '/home', 
		children: [
			{
				path: "/home",
				name: "首页",
				meta: { title: "首页" },
				component: () => import("../pages/home"),
			},
			{
				path:'/activity',
				meta: { title: "活动管理", breadcrumb:false },
				component: () => import('../pages/activity/activity.vue')
			}
		],
	},
];
export default new VueRouter({ routes: constantRouters });
