<template>
	<!-- 小岛页 -->
	<!-- 头部滚动条开始 -->
	<view class="island">
		<swiper circular vertical="true" autoplay="true" :interval="3000">
			<swiper-item v-for="item in swipers" :key="item">
				<view class="img">
					<!-- 多端处理 -->
					// #ifdef MP-WEIXIN
					<image mode="aspectFit" :src="item.src"></image>
					// #endif // #ifdef H5
					<image mode="aspectFit" :src="getUrl(item.src)"></image>
					// #endif // #ifdef APP-PLUS
					<image mode="aspectFit" :src="item.src"></image>
					// #endif
				</view>
				<text class="text">{{ item.text }}</text>
			</swiper-item>
		</swiper>
	</view>
	<!-- 头部滚动条结束 -->

	<!-- 子选项卡开始 -->
	<view class="son-nav">
		<view :class="navIndex == 1 ? 'activite' : ''" @click="checkIndex(1)">广场</view>
		<view :class="navIndex == 2 ? 'activite' : ''" @click="checkIndex(2)">我的</view>
	</view>
	<!-- 内容切换 -->
	<view class="son-content" v-if="navIndex == 1">
		<square></square>
	</view>
	<view class="son-content" v-if="navIndex == 2">
		<mine></mine>
	</view>
	<!-- 子选项卡结束 -->
</template>

<script>
import square from './island-components/square.vue';
import mine from './island-components/mine.vue';

export default {
	data() {
		return {
			swipers: [
				{ src: '../../../static/images/点赞.png', text: '每天起床第一句，先给自己打个气' },
				{ src: '../../../static/images/钻石-blue.png', text: '你的专业，摆地摊能干什么？' }
			],
			navIndex: 1,
			navList: ['广场', '我的'],
			listIndex: 0
		};
	},
	methods: {
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		},
		checkIndex(index) {
			this.navIndex = index;
		},

		checkListIndex(index) {
			this.listIndex = index;
		}
	},
	components: {
		square,
		mine
	}
};
</script>

<style lang="scss">
swiper {
	background-color: #fff;
	height: 90rpx;
	display: flex;
}
.img {
	width: 180rpx;
	height: 78rpx;
	float: left;
	margin: 10rpx 0 0 20rpx;
}

image {
	display: inline;
	opacity: inherit;
	height: auto;
	width: auto;
}

.text {
	font-size: 26rpx;
	float: left;
	margin: 25rpx 0 0 20rpx;
	padding: 0 30rpx;
	border-left: 2rpx solid #e1e1e1;
}

.son-nav {
	width: 100%;
	margin-top: 20rpx;
	display: flex;
	justify-content: baseline;
	align-items: center;
	font-size: 26rpx;
	background-color: #fff;
}
.activite {
	color: #e96e58;
}
.son-nav > view {
	padding-bottom: 10rpx;
	margin: 20rpx 10rpx 10rpx 50rpx;
}
.box {
	background: #008000;
}
</style>
