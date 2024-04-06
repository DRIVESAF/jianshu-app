<template>
	<view class="w-100">
		<!-- 横向滚动条开始 -->
		<scroll-view class="squ-scroll bg-white" scroll-x="ture">
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
			j: false,
			list: [
				{ src: '../../../../static/images/u324.jpg', text: '魔都生活（…' },
				{ src: '../../../../static/images/u327.jpg', text: '微故事' }
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
	width: 200rpx;
	height: 230rpx;
	padding-right: 15rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14rpx;
}
.scroll-img {
	width: 150rpx;
	height: 150rpx;
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
