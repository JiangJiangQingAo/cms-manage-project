<template>
	<div class="app-wrapper">
		<Sidebar class="sidebar-container" />
		<div class="main-container">
			<navbar />
			<appmain />
		</div>
	</div>
	<!-- <Sidebar></Sidebar> -->
</template>

<script>
import { Sidebar, Navbar, Appmain } from "../components";
export default {
	name: "Layout",
	components: {
		Sidebar,
		Navbar,
		Appmain,
	},
	data() {
		return {};
	},
};
</script>

<style lang="less" scoped>
.app-wrapper {
	&:after {
		content: "";
		display: table;
		clear: both;
	}
	position: relative;
	height: 100%;
	width: 100%;
	

	&.mobile.openSidebar {
		position: fixed;
		top: 0;
	}
	.sidebar-container {
		text-rendering: optimizeLegibility;
		font-family: Arial, microsoft yahei;
		color: #333;
		line-height: 1.5;
		word-break: break-all;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		vertical-align: baseline;
		background: transparent;
		transition: width 0.28s;
		width: 210px !important;
		background-color: #304156;
		height: 100%;
		position: fixed;
		font-size: 0;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
	}
}
.main-container{
	height: 100%;
	margin-left: 210px;
	position: relative;
}

.drawer-bg {
	background: #000;
	opacity: 0.3;
	width: 100%;
	top: 0;
	height: 100%;
	position: absolute;
	z-index: 999;
}

.fixed-header {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9;
	width: calc(100% - 220px);
	transition: width 0.28s;
}

.hideSidebar .fixed-header {
	width: calc(100% - 54px);
}

.mobile .fixed-header {
	width: 100%;
}
#app .hideTree {
	margin-left: 0 !important; // 隐藏左侧菜单
}
</style>
