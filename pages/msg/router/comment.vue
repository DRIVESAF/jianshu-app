<template>
	<view class="bg-silver">
		<view class="box p-1" v-for="(item, index) in list" :key="index">
			<view class="user d-f justify-between mx-3 align-center">
				<!-- 用户信息 -->
				<view class="d-f">
					<!-- 头像 -->
					<image class="avattar" :src="item.src"></image>
					<!-- 用户名 -->
					<view class="flex-column mx-2 justify-center d-f">
						<view class="user-id">{{ item.name }}</view>
						<!-- 描述 -->
						<view class="font-sm text-light-muted">评论了你的文章</view>
					</view>
				</view>
				<!-- 回复 -->
				<view class="replay border p-1 font-sm rounded">回复</view>
			</view>
			<!-- 评论 -->
			<view class="user-comment mx-3 font align-center d-f">{{ item.comment }}</view>
			<!-- 原文 -->
			<view class="essay mx-3 bg-silver py-1 font align-center d-f">
				<view>
					原文
					<text class="text-hover-primary">{{ item.essay }}</text>
				</view>
			</view>
			<!-- 时间 -->
			<view class="com-time mx-3 align-center d-f text-light-muted font-sm bg">{{ item.time }}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
	{
		src: 'https://img2.imgtp.com/2024/04/10/fO7nehLV.png',
		name: '假面舞客',
		comment: '为何我的Axure 9.0.03646版本汉化不全? 没有填充啊什么的，只有FILL',
		essay: '《Axure 9.0基础教程:史上最详细的元件说明，建议你认真看完 (一)》',
		time: '01-19 09:47'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/10/Js5tI3Ci.png',
		name: '昆 cb69',
		comment: '是不是应该设置参数啊? 俺没看明白',
		essay: '《《Axure 交互案例: ioS滑动开关分分钟学会，源文件免费送》',
		time: '01-19 09:47'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/10/7mRebAzK.png',
		name: '苹果开发者账户',
		comment: '源头出!苹果个人、公司号，可长期合作!另，提供代申请代提交代缴费业务!欢迎联系!',
		essay: '《2018苹果开发者账号申请流程》',
		time: '20-12-11 11:58'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/10/dJLehEDs.png',
		name: '假面舞客人',
		comment: '为何我的Axure 9.0.03646版本汉化不全? 没有填充啊什么的，只有FILL',
		essay: '《Axure 9.0基础教程:史上最详细的元件说明，建议你认真看完 (一)》',
		time: '01-19 09:47'
	},
	{
		src: 'https://img2.imgtp.com/2024/04/09/GyiIPyBc.png',
		name: '假面舞客人',
		comment: '为何我的Axure 9.0.03646版本汉化不全? 没有填充啊什么的，只有FILL',
		essay: '《Axure 9.0基础教程:史上最详细的元件说明，建议你认真看完 (一)》',
		time: '01-19 09:47'
	}
]);
</script>

<style>
.box {
	height: 400rpx;
	background-color: #ffffff;
	margin-bottom: 24rpx;
}

.user {
	height: 130rpx;
}
.user-comment {
	height: 100rpx;
}
.essay {
	height: 100rpx;
}
.com-time {
	height: 70rpx;
}

.avattar {
	width: 100rpx;
	height: 100rpx;
}
</style>
