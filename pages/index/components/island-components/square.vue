<template>
	<view class="square">
		<scroll-view class="squ-scroll" scroll-x="ture">
			<!-- 卡片开始 -->
			<view class="scroll-box" v-for="(item, index) in list" :key="item.id">
				// #ifdef MP-WEIXIN
				<image class="scroll-img" :src="item.src"></image>
				// #endif // #ifdef H5
				<image class="scroll-img" :src="getUrl(item.src)"></image>
				// #endif // #ifdef APP-PLUS
				<image class="scroll-img" :src="item.src"></image>
				// #endif

				<text class="scroll-text">{{ item.text }}</text>
				<text class="scroll-text" style="color: #aaaabd">{{ item.num }}成员</text>
				<view class="button-group" @click="join" :style="{ color: j ? '#b2aab2' : '#2fc25b' }">＋加入</view>
			</view>
			<!-- 卡片结束 -->
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			j: false,
			list: [
				{ src: '../../../../static/images/u56.jpg', text: '我们爱画画', num: '306' },
				{ src: '../../../../static/images/u62.jpg', text: '彦姐书的…', num: '550' },
				{ src: '../../../../static/images/u69.jpg', text: '情感事务所', num: '5229' },
				{ src: '../../../../static/images/u76.jpg', text: '微博故事', num: '181' },
				{ src: '../../../../static/images/u83.jpg', text: '为你高兴', num: '17' },
				{ src: '../../../../static/images/u90.jpg', text: '吐槽那些…', num: '53' },
				{ src: '../../../../static/images/u97.jpg', text: '魔都生活', num: '13' },
				{ src: '../../../../static/images/u104.jpg', text: '时光小岛', num: '12' },
				{ src: '../../../../static/images/u111.jpg', text: '90后相亲', num: '20' },
				{ src: '../../../../static/images/u118.jpg', text: '因为爱情', num: '3' },
				{ src: '../../../../static/images/u125.jpg', text: '山夕月无痕', num: '15' },
				{ src: '../../../../static/images/u132.jpg', text: '风花雪月', num: '53' }
			]
		};
	},
	methods: {
		join() {
			this.j = !this.j;
		},
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	}
};
</script>

<style lang="scss">
.square {
	width: 100%;
}
:deep(.uni-scroll-view-content) {
	display: flex !important;
}
.scroll-box {
	background-color: #fff;
	flex-shrink: 0;
	width: 32%;
	height: 380rpx;
	padding: 10rpx;
}
.scroll-img {
	width: 100%;
	height: 50%;
	float: left;
}

.scroll-text {
	text-align: center;
	display: block;
	padding: 4rpx;
}

image {
	display: inline;
	opacity: inherit;
	height: auto;
	width: auto;
	padding-bottom: 20rpx;
}

.button-group {
	border: 4rpx solid;
	width: 60%;
	text-align: center;
	border-radius: 32rpx;
	margin: 7rpx auto;
}
</style>
