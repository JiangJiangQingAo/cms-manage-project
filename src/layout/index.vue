<template>
	<div class="app-wrapper">
		<Sidebar />
		<Navbar/>
        <Appmin/>
	</div>
	<!-- <Sidebar></Sidebar> -->
</template>

<script>
// import Sidebar from '../components/Sidebar/index.vue';
// import Navbar from '../components/Navbar/index.vue'
// import Appmin from '../components/Appmin/index.vue'
import { Sidebar, Navbar, Appmin} from '../components'
export default {
	name: 'Layout',
	components: {
		Sidebar,
		Navbar,
		Appmin
	},
	data() {
		return {};
	},
};
</script>
