<template>
	<view class="topic">
		<view class="item" v-for="(item, index) in list" :key="index">
			<view class="item-content">
				<!-- 图片 -->
				<image class="item-img" :src="item.src"></image>
				<view class="item-text">
					<!-- 标题 -->
					<view class="item-title">
						{{ item.title }}
						<!-- 更新 -->
						<view class="item-update text-light-muted font">{{ item.update }}</view>
					</view>
					<!-- 用户 -->
					<view class="item-user">
						<image :src="item.icon" class="item-icon"></image>
						<view class="item-usn">{{ item.usn }}</view>
					</view>

					<!-- 内容 -->
					<view class="item-des font-sm">{{ item.text }}</view>
				</view>
			</view>
		</view>
		<!-- end开始 -->
		<view class="item-end flex-column">
			<image src="https://img2.imgtp.com/2024/04/07/hYBxqPmQ.png" mode=""></image>
			<view class="end-text">
				<text>去发现</text>
				<text class="text-link-blue">更多有趣的作者和专题>></text>
			</view>
		</view>
	</view>
</template>

<script>
import end from './end.vue';

export default {
	data() {
		return {
			list: [
				{
					src: 'https://img2.imgtp.com/2024/04/07/aVe38QuJ.png',
					text: '整治领导的一致性科技偏见',
					title: '区块链社会学',
					update: '99+更新',
					icon: 'https://img2.imgtp.com/2024/04/07/gUgOSVkF.png',
					usn: '沛文沛语'
				},
				{
					src: 'https://img2.imgtp.com/2024/04/07/Xqga1yZL.png',
					title: '玩转Sketch教程',
					text: '[基础篇]夜雨原创玩转Sketch教程课时7:…',
					update: '99+更新',
					icon: 'https://img2.imgtp.com/2024/04/07/FEIZLQNB.png',
					usn: '夜雨y'
				},
				{
					src: 'https://img2.imgtp.com/2024/04/07/3LzGGdwv.png',
					title: 'Axure RP9实用教程: 原型+高保真+',
					text: 'Axure RP9案例: 如何实现省市区数据的三…',
					icon: 'https://img2.imgtp.com/2024/04/07/sIWSGleL.png',
					usn: 'Axure原型设计'
				}
			]
		};
	},
	methods: {
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	},
	components: {
		end
	}
};
</script>

<style>
.item {
	height: 220rpx;
	width: 100%;
	background-color: #ffffff;
	display: flex;
	align-items: center;
}

.item-content {
	height: 140rpx;
	width: 100%;
	margin: 0 40rpx;
	display: flex;
	align-items: center;
}

.item-img {
	height: 190rpx;
	width: 140rpx;
	flex-shrink: 0;
}

.item-text {
	margin: 0 20rpx;
	height: 140rpx;
	width: 100%;
}

.item-title {
	width: 100%;
	display: flex;
}

.item-des {
	height: 70rpx;
	width: 100%;
}

.item-user {
	display: flex;
	gap: 24rpx;
	padding: 6rpx 0;
}

.item-icon {
	width: 40rpx;
	height: 40rpx;
	border-radius: 50%;
}

.item-end {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 600rpx;
	background-color: #ffffff;
}
</style>
