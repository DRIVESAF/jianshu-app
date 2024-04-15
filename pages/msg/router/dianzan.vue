<template>
	<view class="bg-silver">
		<view class="box p-1" v-for="(item, index) in list" :key="index">
			<view class="user d-f justify-between mx-3 align-center">
				<view class="d-f">
					<!-- 头像 -->
					<image class="avattar" :src="item.src"></image>
					<view class="flex-column mx-2 justify-center d-f">
						<!-- 用户名 -->
						<view class="user-id">{{ item.name }}</view>
						<!-- 时间 -->
						<view class="font-sm text-light-muted">{{ item.time }}</view>
					</view>
				</view>
			</view>
			<!-- 点赞 -->
			<view class="user-comment mx-3 font align-center d-f">
				<uni-icons type="hand-up-filled" color="#f26f51" size="25"></uni-icons>
				赞了你的文章
			</view>
			<!-- 原文 -->
			<view class="essay mx-3 bg-silver py-1 font d-f align-center">
				<view>
					原文
					<text class="text-hover-primary">{{ item.essay }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
	{
		src: 'https://img2.imgtp.com/2024/04/10/bNY7Mmga.png',
		name: '开霖',
		essay: '《Axure 9.0基础教程: 初始Axure 9.0，从操作界面及功能概述开始》',
		time: '01-19 09:47'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/10/kmncUHt3.png',
		name: '7d67482f78c6',
		essay: '《进行原型设计之前，你需要了解草图、低保真和高保真的区别》',
		time: '01-19 09:47'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/10/xyERThoL.png',
		name: 'Liyu 3da0',
		essay: '《进行原型设计之前，你需要了解草图、低保真和高保真的区别》',
		time: '20-12-11 11:58'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/10/dJLehEDs.png',
		name: '假面舞客人',
		essay: '《Axure 9.0基础教程:史上最详细的元件说明，建议你认真看完 (一)》',
		time: '01-19 09:47'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/09/GyiIPyBc.png',
		name: '假面舞客人',
		essay: '《Axure 9.0基础教程:史上最详细的元件说明，建议你认真看完 (一)》',
		time: '01-19 09:47'
	}
]);
</script>

<style>
.box {
	height: 370rpx;

	background-color: #ffffff;
	margin-bottom: 24rpx;
}

.user {
	height: 130rpx;
}
.user-comment {
	height: 70rpx;
}
.essay {
	height: 120rpx;
}
.com-time {
	height: 70rpx;
}

.avattar {
	width: 100rpx;
	height: 100rpx;
}
</style>
