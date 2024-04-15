<template>
	<view class="essay">
		<view class="item" v-for="(item, index) in list" :key="index">
			<view class="item-content">
				<!-- 封面图片 -->
				<image class="item-img" src="https://img2.imgtp.com/2024/04/07/c1p2NScI.png"></image>
				<view class="item-text">
					<view class="item-title">
						{{ item.title }}
					</view>
					<view class="item-des font-sm">{{ item.text }}</view>
				</view>
			</view>
		</view>
		<!-- end开始 -->
		<end2></end2>
	</view>
</template>

<script>
import end2 from './end2.vue';

export default {
	data() {
		return {
			list: [
				{ text: '腾讯高级设计师分享交互设计师必备模板', title: '产品设计观与方法论', update: '99+更新' },
				{ title: '技术干货', text: '关于人工智能的这些专业名词的含义，你真的知道吗?', update: '99+更新' }
			]
		};
	},
	methods: {
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	},
	components: {
		end2
	}
};
</script>

<style>
.essay {
	height: 600px;
	width: 100%;
	background-color: #ffffff;
}
.item {
	height: 190rpx;
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
}

.item-img {
	height: 120rpx;
	width: 120rpx;
	flex-shrink: 0;
}

.item-text {
	margin: 0 20rpx;
	height: 140rpx;
	width: 100%;
}

.item-title {
	height: 70rpx;
	width: 100%;
	display: flex;
}

.item-des {
	height: 70rpx;
	width: 100%;
}
</style>
