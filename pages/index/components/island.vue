<template>
	<!-- 小岛页 -->
	<view class="island">
		<swiper circular vertical="true" autoplay="true">
			<swiper-item v-for="item in swipers" :key="item">
				<view class="img">
					<image mode="widthFix" :src="item.src"></image>
				</view>
				<text class="text">{{ item.text }}</text>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swipers: [
				{ src: '../../../static/images/点赞.png', text: '每天起床第一句，先给自己打个气' },
				{ src: '../../../static/images/钻石-blue.png', text: '你的专业，摆地摊能干什么？' }
			]
		};
	}
};
</script>

<style lang="scss">
swiper {
	background-color: #fff;
	height: 70rpx;
	display: flex;
}
.img {
	width: 140rpx;
	height: 140rpx;
	float: left;
	margin: 10rpx 0 0 60rpx;
}

.text {
	font-size: 26rpx;
	float: left;
	margin: 15rpx 0 0 20rpx;
	padding: 0 60rpx;
	border-left: 2rpx solid #e1e1e1;
}
</style>
