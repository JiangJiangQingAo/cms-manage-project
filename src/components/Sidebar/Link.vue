<template>
	<!-- eslint-disable vue/require-component-is -->
	<component v-bind="linkProps(to)">
		<slot></slot>
	</component>
</template>

<script>
import { Validator } from "@bigbighu/cms-utils";

export default {
	name:'AppLink',
	// data(){
	//     return{}
	// },
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	methods: {
		linkProps(url) {
			// 判断当前链接是否为外部链接
			if (Validator.isExternal(url)) {
				return {
					is: "a",
					href: url,
					target: "_blank",
				};
			}
			return {
				is: "router-link",
				to: url,
			};
		},
	},
};
</script>
