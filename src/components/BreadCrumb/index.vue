<template>
	<div>
		<el-breadcrumb separator="/">
			<transition-group name="breadcrumb">
				<el-breadcrumb-item
					v-for="(item, index) in levelList"
					:key="item.path"
				>
					<span v-if="index == levelList.length - 1">{{
						item.meta.title
					}}</span>
					<a
						v-else
						@click.prevent="handleLink(item)"
						>{{ item.meta.title }}</a
					>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
	name: "BreadCrumb",
	data() {
		return {
			levelList: [],
		};
	},
	created() {
		console.log(this.$route);
		this.getBreadCrumb();
	},
	watch: {
		$route() {
			this.getBreadCrumb();
		},
	},
	methods: {
		//面包屑的处理逻辑
		getBreadCrumb() {
			//获取嵌套路由
			// this.$route.matched
			let matched = this.$route.matched.filter(
				(item) => item.meta && item.meta.title && !item.meta.breadcrumb
			);
			console.log(matched);
			//判断当前的路由是否为首页
			const first = matched[0];
			// this.isHome(first)
			if (!this.isHome(first)) {
				matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
			}
			this.levelList = matched;
		},
		isHome(route) {
			return route.meta.title.trim() === "首页";
		},
		handleLink(item) {
			this.$router.push(item.path);
		},
	},
};
</script>
