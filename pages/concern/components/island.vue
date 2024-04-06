<template>
	<view class="island">
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
				{ src: 'https://img2.imgtp.com/2024/04/06/wwljazOi.png', text: '我记得在《萌芽》看到过一句话: 写作就好像一张…', title: '笔尖那点事儿', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/jXNsNbJB.png', title: '简书意见反馈', text: '为什么我的简书文章打不开啊? 为什么? 为什么?', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/sDLGBRhT.png', title: '进化朗读者的小岛', text: '日期:2021.2.19日 在读书籍《认知觉醒》阅读进度', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/6fTbkgnS.png', title: '微故事', text: '种子法则: 1，决定你要什么。2，你必须找到想要', update: '99+更新' },
				{ src: 'https://img2.imgtp.com/2024/04/06/7rNYqzGt.png', title: '简书|英语角', text: '加我免费领取红包封面，微信公众号: 花辩视觉' },
				{ src: 'https://img2.imgtp.com/2024/04/06/b4Voy0at.png', title: '魔都生活(上海)', text: '降温了，注意保姆案喔!' }
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
