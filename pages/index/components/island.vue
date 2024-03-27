<template>
	<!-- 小岛页 -->
	<view class="island">
		<swiper circular vertical="true" autoplay="true">
			<swiper-item v-for="item in swipers" :key="item">
				<image mode="widthFix" :src="item.src"></image>
				<text>{{ item.text }}</text>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swipers: [
				{ src: '../../../static/images/赞.svg', text: '每天起床第一句，先给自己打个气' },
				{ src: '../../../static/images/钻.svg', text: '你的专业，摆地摊能干什么？' }
			]
		};
	}
};
</script>

<style lang="scss">
swiper {
	background-color: #fff;
	height: 80rpx;
}
image {
	width: 4rpx;
	height: 4rpx;
	float: left;
}
</style>
