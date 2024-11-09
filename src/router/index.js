import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";
Vue.use(VueRouter);

const constantRouters = [
	{
		path: "/",
		component: Layout,
		children: [
			{
				path: "home",
				name: "首页",
				meta: { title: "首页" },
				component: () => import("../pages/home"),
			},
		],
	},
];
export default new VueRouter({ routes: constantRouters });
