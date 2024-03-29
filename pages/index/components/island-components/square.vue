<template>
	<view class="w-100">
		<!-- 横向滚动条开始 -->
		<scroll-view class="squ-scroll" scroll-x="ture">
			<!-- 卡片开始 -->
			<view class="scroll-box bg-white flex-shrink" v-for="(item, index) in list" :key="index">
				// #ifdef MP-WEIXIN
				<image class="scroll-img" :src="item.src"></image>
				// #endif // #ifdef H5
				<image class="scroll-img" :src="getUrl(item.src)"></image>
				// #endif // #ifdef APP-PLUS
				<image class="scroll-img" :src="item.src"></image>
				// #endif

				<text class="scroll-text d-block text-center">{{ item.text }}</text>
				<text class="scroll-text d-block text-center" style="color: #aaaabd">{{ item.num }}成员</text>
				<view class="button-group text-center" @click="join(index, item.flag)" :style="{ color: flag ? '#b2aab2' : '#2fc25b' }">＋加入</view>
			</view>
			<!-- 卡片结束 -->
		</scroll-view>
		<!-- 横向滚动条结束 -->

		<!-- 说说内容开始 -->
		<shuoshuo></shuoshuo>
		<!-- 说说内容结束 -->
	</view>
</template>

<script>
import shuoshuo from './shuoshuo.vue';

export default {
	data() {
		return {
			list: [
				{ src: '../../../../static/images/u56.jpg', text: '我们爱画画', num: '306', flag: 'false' },
				{ src: '../../../../static/images/u62.jpg', text: '彦姐书的…', num: '550', flag: 'false' },
				{ src: '../../../../static/images/u69.jpg', text: '情感事务所', num: '5229', flag: 'false' },
				{ src: '../../../../static/images/u76.jpg', text: '微博故事', num: '181', flag: 'false' },
				{ src: '../../../../static/images/u83.jpg', text: '为你高兴', num: '17', flag: 'false' },
				{ src: '../../../../static/images/u90.jpg', text: '吐槽那些…', num: '53', flag: 'false' },
				{ src: '../../../../static/images/u97.jpg', text: '魔都生活', num: '13', flag: 'false' },
				{ src: '../../../../static/images/u104.jpg', text: '时光小岛', num: '12', flag: 'false' },
				{ src: '../../../../static/images/u111.jpg', text: '90后相亲', num: '20', flag: 'false' },
				{ src: '../../../../static/images/u118.jpg', text: '因为爱情', num: '3', flag: 'false' },
				{ src: '../../../../static/images/u125.jpg', text: '山夕月无痕', num: '15', flag: 'false' },
				{ src: '../../../../static/images/u132.jpg', text: '风花雪月', num: '53', flag: 'false' }
			]
		};
	},
	methods: {
		join(index, flag) {
			this.flag = !this.flag;
			console.log(this.flag);
			console.log(index);
		},
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	},
	components: {
		shuoshuo
	}
};
</script>

<style lang="scss">
:deep(.uni-scroll-view-content) {
	display: flex !important;
}
.scroll-box {
	width: 32%;
	height: 400rpx;
	padding-right: 15rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14rpx;
}
.scroll-img {
	width: 100%;
	height: 45%;
	float: left;
}

image {
	display: inline;
	opacity: inherit;
	height: auto;
	width: auto;
}

.button-group {
	border: 3rpx solid;
	width: 60%;
	border-radius: 32rpx;
	margin: 7rpx auto;
}
</style>
