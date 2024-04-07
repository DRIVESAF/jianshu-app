<template>
	<view class="topic">
		<view class="item" v-for="(item, index) in list" :key="index">
			<view class="item-content">
				<image class="item-img" :src="item.src"></image>
				<view class="item-text">
					<view class="item-title">
						{{ item.title }}
						<view class="item-update text-light-muted font">{{ item.update }}</view>
					</view>
					<view class="item-des font-sm">{{ item.text }}</view>
				</view>
			</view>
		</view>
		<!-- end开始 -->
		<end></end>
	</view>
</template>

<script>
import end from './end.vue';

export default {
	data() {
		return {
			list: [
				{ src: 'https://img2.imgtp.com/2024/04/06/NiysSkOm.png', text: '产品原型总返工? 掌握3个基础能力，高质…', title: '原型之美', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/yh33r3nE.png', title: '产品经理', text: '爆品，一定是好产品吗?', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/34HY1GlZ.png', title: '交互设计与用户体验', text: '产品各场景分析模型', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/Zf5MfJrj.png', title: '@产品', text: '引爆用户增长，最全思维导图', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/fGPG9yeC.png', title: 'PMskill', text: '后台设计~自定义工作流引擎' }
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
	height: 140rpx;
	width: 140rpx;
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
