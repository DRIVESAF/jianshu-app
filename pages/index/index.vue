<template>
	<view class="index">
		<!-- 状态栏开始 -->
		<view :style="{ height: statusBarHeight + 'px' }" class="condition"></view>
		<!-- 状态栏结束 -->

		<!-- 搜索开始 -->
		<view class="search">
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="搜索感兴趣的内容" clearButton="none" cancelButton="none" @confirm="search" />
		</view>
		<!-- 搜索结束 -->

		<!-- 选项卡开始 -->
		<!-- 内容切换 -->
		<view class="head-nav">
			<view :class="navIndex == 1 ? 'activite' : ''" @click="checkIndex(1)">推荐</view>
			<view :class="navIndex == 2 ? 'activite' : ''" @click="checkIndex(2)">小岛</view>
			<view :class="navIndex == 3 ? 'activite' : ''" @click="checkIndex(3)">专题</view>
			<view :class="navIndex == 4 ? 'activite' : ''" @click="checkIndex(4)">连载</view>
		</view>
		<!-- 推荐页 -->
		<view class="content" v-if="navIndex == 1">
			<recommend></recommend>
		</view>
		<!-- 小岛页 -->
		<view class="content" v-if="navIndex == 2">
			<island></island>
		</view>
		<!-- 专题页 -->
		<view class="content" v-if="navIndex == 3">
			<topic></topic>
		</view>
		<!-- 连载页 -->
		<view class="content" v-if="navIndex == 4">
			<series></series>
		</view>

		<!-- 选项卡结束 -->

		<!-- 悬浮按钮开始 -->
		<view>
			<uni-fab :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="horizontal" :popMenu="true" @trigger="trigger" @fabClick="fabClick" />
		</view>
		<!-- 悬浮按钮结束 -->
	</view>
</template>

<script>
import recommend from './components/recommend.vue';
import island from './components/island.vue';
import topic from './components/topic.vue';
import series from './components/series.vue';

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
		series
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
/* 状态栏开始 */
.condition {
	background-color: #ffffff;
}
/* 状态栏结束 */

/* 搜索框开始 */
.search {
	background-color: #ffffff;
}
:deep(.uni-searchbar) {
	justify-content: center;
}
:deep(.uni-searchbar__box) {
	justify-content: center !important;
	width: 80%;
	flex: none !important;
}
/* 搜索框结束 */

/* 选项卡开始 */
.head-nav {
	width: 100%;
	padding: 20px auto;
	height: 40px;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-end;
	color: #aaaabd;
	background-color: #ffffff;
}
.activite {
	color: #333333;
	border-bottom: rpx solid #f26f51;
}
.head-nav > view {
	padding-bottom: 20px;
}
.box {
	background: #008000;
}
/* 选项卡结束 */

/* 悬浮按钮开始 */
:deep(.uni-fab__content--other-platform) {
	box-shadow: none !important;
}
/* 悬浮按钮结束 */
</style>
