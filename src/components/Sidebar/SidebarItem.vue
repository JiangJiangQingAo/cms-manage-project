<template>
	<div
		v-if="!item.hidden"
		class="menu-wrapper"
	>
    <!-- 没有子菜单 -->
		<template
			v-if="
				hasOneShowingChild(item.children, item) &&
				(!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
				!item.alwaysShow
			"
		>
			<app-link>
				<el-menu-item
					:index="resolvePath(onlyOneChild.path)"
					class="submenu-title-noDropdown"
				>
					<i class="el-icon-tickets"></i>
					{{ onlyOneChild.meta.title }}
				</el-menu-item>
			</app-link>
		</template>
    <!-- 有子菜单 -->
		<el-submenu
			v-else
			:index="resolvePath(item.path)"
		>
			<template slot="title">
				<Item
					:icon="item.meta && item.meta.icon"
					:title="item.meta.title"
				></Item>
			</template>
			<sidebar-item
				v-for="child in item.children"
				:key="child.path"
				:base-path="resolvePath(child.path)"
                class="nest-menu"
			>
			</sidebar-item>
		</el-submenu>
	</div>
</template>

<script>
import path from 'path'
import AppLink from "./Link.vue";
import Item from "./item.vue";
import { Validator } from "@bigbighu/cms-utils";

export default {
	name: "SidebarItem",
	components: {
		AppLink,
		Item,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
		basePath: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			onlyOneChild: "",
		};
	},
	methods: {
		//判断当前的菜单是否包含子菜单
		hasOneShowingChild(children = [], parent) {
			//判断子菜单是否存在数据
			const showingChildren = children.filter((item) => {
				if (item.hidden) {
					return false;
				} else {
					return true;
				}
			});
			// 根据是否包含子菜单来决定页面渲染的数据
			if (showingChildren.length === 0) {
				this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
				return true;
			}
			return false;
		},
		//返回链接的标识
		resolvePath(routePath) {
			//判断跳转链接是否存在
			if (Validator.isExternal(routePath)) {
				return routePath;
			}
            //判断父级菜单的路径
            if(Validator.isExternal(this.basePath)){
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
		},
	},
};
</script>
