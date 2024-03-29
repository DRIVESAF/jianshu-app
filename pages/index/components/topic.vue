<template>
	<!-- 专题页面 -->
	<!-- 图标栏开始 -->
	<view class="h-20 d-f justify-around bg-white">
		<view class="tools d-f flex-column align-center transform-y-30" v-for="(item, index) in list" :key="index">
			// #ifdef H5
			<image class="tools-icon" :src="getUrl(item.icon)" mode=""></image>
			// #endif // #ifdef APP-PLUS
			<image class="icon" :src="item.icon" mode=""></image>
			// #endif
			<view class="name transform-y-100">{{ item.name }}</view>
		</view>
	</view>
	<!-- 图标栏结束 -->
	<!-- 关注栏开始 -->
	<view class="concern bg-white my-4 d-f align-center">
		<image class="concern-icon m-3" src="../../../static/images/x1.png" mode=""></image>
		<view class="title">我关注的专题</view>
	</view>
	<!-- 关注栏结束 -->

	<!-- 专题栏开始 -->
	<view class="column">
		<view class="column-son"></view>
	</view>
	<!-- 专题栏结束 -->
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ icon: '../../../static/images/u551.jpg', name: '简友广场' },
				{ icon: '../../../static/images/u554.jpg', name: '热门专题' },
				{ icon: '../../../static/images/u557.jpg', name: '官方专题' },
				{ icon: '../../../static/images/u560.jpg', name: '投诉建议' },
				{ icon: '../../../static/images/u563.jpg', name: '工作招聘' }
			]
		};
	},
	methods: {
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	},
	components: {}
};
</script>

<style>
.tools {
	height: 122rpx;
}

.tools-icon {
	width: 58rpx;
	height: 66rpx;
}

.name {
	font-size: 26rpx;
}

.concern {
	height: 80rpx;
}

.concern-icon {
	width: 54rpx;
	height: 54rpx;
}

.title {
	font-size: 40rpx;
}

.column {
	height: 100%;
	background: #aaaaff;
	margin: 30rpx;
}

.column-son {
	width: 100%;
	height: 100%;
	background: #aaaaff;
}
</style>
