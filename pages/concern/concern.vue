<template>
	<view class="concern">
		<!-- 状态栏开始 -->
		<view :style="{ height: statusBarHeight + 'px' }" class="condition bg-white"></view>
		<!-- 状态栏结束 -->

		<!-- 搜索开始 -->
		<view class="con-bar">
			<uni-icons type="personadd" size="23" color="#adadad"></uni-icons>

			<text class="con-bar-title">关注</text>

			<uni-icons type="search" size="23" color="#adadad"></uni-icons>
		</view>
		<!-- 搜索栏结束 -->

		<!-- 选项卡开始 -->
		<!-- 内容切换 -->
		<view class="head-nav bg-white d-f justify-evenly align-end">
			<view :class="navIndex == 1 ? 'activite' : ''" @click="checkIndex(1)">动态</view>
			<view :class="navIndex == 2 ? 'activite' : ''" @click="checkIndex(2)">小岛</view>
			<view :class="navIndex == 3 ? 'activite' : ''" @click="checkIndex(3)">专题</view>
			<view :class="navIndex == 4 ? 'activite' : ''" @click="checkIndex(4)">连载</view>
			<view :class="navIndex == 5 ? 'activite' : ''" @click="checkIndex(5)">文集</view>
		</view>
		<!-- 动态页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 1">
			<development></development>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 1">
			<development></development>
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
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 3">
			<topic></topic>
		</view>
		// #endif
		<!-- 连载页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 4">
			<series></series>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 4">
			<series></series>
		</view>
		// #endif

		<!-- 文集页 -->
		// #ifdef APP-PLUS
		<view class="content" :style="{ top: statusBarHeight + 88 + 'px' }" v-if="navIndex == 5">
			<essay></essay>
		</view>
		// #endif // #ifdef H5
		<view class="content2" :style="{ top: statusBarHeight + 94 + 'px' }" v-if="navIndex == 5">
			<essay></essay>
		</view>
		// #endif

		<!-- 选项卡结束 -->
	</view>
</template>

<script>
import development from './components/development.vue';
import island from './components/island.vue';
import topic from './components/topic.vue';
import series from './components/series.vue';
import essay from './components/essay.vue';

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
	created() {
		// 获取手机系统信息
		const info = uni.getSystemInfoSync();
		// 设置状态栏高度
		this.statusBarHeight = info.statusBarHeight;
	},
	components: {
		development,
		island,
		topic,
		series,
		essay
	}
};
</script>

<style>
.con-bar {
	padding: 0 40rpx;
	height: 120rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.con-bar-title {
	font-size: 36rpx;
}

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
