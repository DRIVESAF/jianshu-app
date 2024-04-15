<template>
	<view class="msg">
		<!-- 状态栏开始 -->
		<view :style="{ height: statusBarHeight + 'px' }" class="condition bg-white"></view>
		<!-- 状态栏结束 -->

		<!-- 头部栏开始 -->
		<view class="con-bar py-0 NaNrpx-4 h-12 bg-white d-f align-center justify-between">
			<!-- 占位元素 -->
			<view class="mx-2"></view>
			<!-- 消息 -->
			<view>
				<text class="con-bar-title">消息</text>
			</view>
			<!-- 右侧工具按钮 -->
			<view>
				<uni-icons type="gear" size="23" color="#000000"></uni-icons>
				<uni-icons class="mx-2" type="search" size="23" color="#000000"></uni-icons>
			</view>
		</view>
		<!-- 头部栏结束 -->

		<!-- 选项栏开始 -->
		<view class="bg-white w-100 d-f align-center justify-around" style="height: 250rpx">
			<view class="d-f flex-column align-center" v-for="(item, index) in list" :key="index" @click="optClick(index)">
				<!-- 图片 -->
				<image style="width: 100rpx; height: 100rpx" :src="item.src"></image>
				<!-- 文字 -->
				<view class="">{{ item.name }}</view>
			</view>
		</view>
		<!-- 选项栏结束 -->

		<!-- 简信标题栏开始 -->
		<view class="bg-white h-12 container mt-4 d-f align-center justify-between">
			<view class="font-md">简信</view>
			<view class="font-md text-jianshu">新简信</view>
		</view>
		<!-- 简信标题栏结束 -->

		<!-- 简信内容开始 -->
		<jianxin></jianxin>
		<!-- 简信内容结束 -->
	</view>
</template>

<script setup>
import jianxin from './components/jianxin.vue';

import { ref } from 'vue';

const list = ref([
	{ src: 'https://img2.imgtp.com/2024/04/09/QMNjZHok.png', name: '互动消息' },
	{ src: 'https://img2.imgtp.com/2024/04/09/IGDuWhyc.png', name: '简书钻' },
	{ src: 'https://img2.imgtp.com/2024/04/09/ptsCeFvg.png', name: '其他提醒' }
]);

const optClick = (index) => {
	switch (index) {
		case 0:
			// 处理按钮 1 的点击事件
			uni.navigateTo({
				url: '/pages/msg/router/itrmsg'
			});
			break;
		case 1:
			// 处理按钮 2 的点击事件
			uni.navigateTo({
				url: '/pages/msg/router/jsdm'
			});
			break;
		case 2:
			// 处理按钮 3 的点击事件
			uni.navigateTo({
				url: '/pages/msg/router/othmsg'
			});
			break;
	}
};
</script>

<style>
.con-bar-title {
	font-size: 36rpx;
}
</style>
