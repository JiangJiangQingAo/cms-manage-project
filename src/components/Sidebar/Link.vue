<template>
	<component :is="linkProps(to)">
		<slot/>
	</component>
</template>

<script>
import { Validator } from "@bigbighu/cms-utils";

export default {
	// name:'link',
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
