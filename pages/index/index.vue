<template>
	<view class="index">
		<!-- 状态栏开始 -->
		<view :style="{ height: statusBarHeight + 'px' }" class="condition bg-white"></view>
		<!-- 状态栏结束 -->

		<!-- 搜索开始 -->
		<view class="bg-white">
			<uni-search-bar class="uni-mt-10 justify-center" radius="100" placeholder="搜索感兴趣的内容" clearButton="none" cancelButton="none" @confirm="search" />
		</view>
		<!-- 搜索结束 -->

		<!-- 选项卡开始 -->
		<!-- 内容切换 -->
		<view class="head-nav bg-white d-f justify-evenly align-end">
			<view :class="navIndex == 1 ? 'activite' : ''" @click="checkIndex(1)">推荐</view>
			<view :class="navIndex == 2 ? 'activite' : ''" @click="checkIndex(2)">小岛</view>
			<view :class="navIndex == 3 ? 'activite' : ''" @click="checkIndex(3)">专题</view>
			<view :class="navIndex == 4 ? 'activite' : ''" @click="checkIndex(4)">连载</view>
		</view>
		<!-- 推荐页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 1">
			<recommend></recommend>
			<ball></ball>
			<end></end>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 1">
			<recommend></recommend>
			<ball></ball>
			<end></end>
		</view>
		// #endif
		<!-- 小岛页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 2">
			<island></island>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 2">
			<island></island>
		</view>
		// #endif
		<!-- 专题页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 3">
			<topic></topic>
			<end></end>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 3">
			<topic></topic>
			<end></end>
		</view>
		// #endif
		<!-- 连载页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 4">
			<series></series>
			<end></end>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 4">
			<series></series>
			<end></end>
		</view>
		// #endif

		<!-- 选项卡结束 -->
	</view>
</template>

<script>
import recommend from './components/recommend.vue';
import island from './components/island.vue';
import topic from './components/topic.vue';
import series from './components/series.vue';
import ball from './components/island-components/ball.vue';
import end from './components/end.vue';

export default {
	data() {
		return {
			navIndex: 1,
			statusBarHeight: 20
		};
	},
	methods: {
		checkIndex(index) {
			this.navIndex = index;
		}
	},
	components: {
		recommend,
		island,
		topic,
		series,
		ball,
		end
	},
	created() {
		// 获取手机系统信息
		const info = uni.getSystemInfoSync();
		// 设置状态栏高度
		this.statusBarHeight = info.statusBarHeight;
	}
};
</script>

<style>
/* 搜索框开始 */
:deep(.uni-searchbar__box) {
	justify-content: center !important;
	width: 80%;
	flex: none !important;
}
/* 搜索框结束 */

/* 选项卡开始 */
.head-nav {
	color: #aaaabd;
}
.activite {
	color: #333333;
	border-bottom: 4rpx solid #f26f51;
}
.head-nav > view {
	padding-bottom: 25rpx;
}
/* 选项卡结束 */
</style>
