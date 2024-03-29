<template>
	<!-- 推荐页 -->
	<view class="bg-silver">
		<list>
			<cell v-for="(item, index) in dataList" :key="item.id">
				<!-- 卡片开始 -->
				<uni-card shadow="none" margin="0 0 10rpx 0" border="false">
					<!-- 标题 -->
					<template v-slot:title>
						<uni-list>
							<text class="title px-2 py-2">{{ item.title }}</text>
						</uni-list>
					</template>
					<!-- 图片 -->
					// #ifdef MP-WEIXIN
					<image mode="scaleToFill" :src="item.src"></image>
					// #endif // #ifdef H5
					<image mode="scaleToFill" :src="getUrl(item.src)"></image>
					// #endif // #ifdef APP-PLUS
					<image mode="scaleToFill" :src="item.src"></image>
					// #endif
					<!-- 热度 -->
					<view slot="actions" class="card-actions">
						<view class="card-actions-item px-2">
							<text class="card-actions-item-text px-2">{{ item.id }}</text>
							<text class="card-actions-item-text px-2">{{ item.data }}</text>
						</view>
					</view>
				</uni-card>
				<!-- 卡片结束 -->
			</cell>
		</list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 卡片内容数据
			dataList: [
				{ id: 1, title: '如何搭建领导想要的管理驾驶舱，这篇方法论值得收藏', src: '../../../static/images/r1.png', id: '数据分析不是个事儿', data: '164 阅读 0 评论 0 赞 ' },
				{ id: 2, title: '推荐一款优秀的跨平台文件传输工具-AirDroid', src: '../../../static/images/r2.png', id: 'APP实验室', data: '47阅读 0 评论 3赞' },
				{ id: 3, title: '自己以为很红，却压根没多少个粉丝的3位明星，拜托清醒一点', src: '../../../static/images/r3.png', id: '暴走怪咖豆', data: '468 阅读 0 评论 12 赞' },
				{ id: 4, title: '低代码开发平台有哪些？', src: '../../../static/images/r4.png', id: 'JEECG开源社区', data: '90 阅读 0 评论 1 赞' },
				{ id: 5, title: '手机不安装这几个软件，简直太亏', src: '../../../static/images/r5.png', id: '驻地氧气瓶', data: ' 432 阅读 0 评论 3 赞' },
				{ id: 6, title: '【经验】UI设计师是如何工作的？', src: '../../../static/images/r6.png', id: '摹客', data: ' 264 阅读 0 评论 5 赞' }
			]
		};
	},
	methods: {
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	}
};
</script>

<style>
image {
	width: 100%;
	height: 200rpx;
}
/* 标题 */
.title {
	color: #333333;
	font-size: 32rpx;
	line-height: 50rpx;
}
/* 热度 */
.card-actions-item-text {
	font-size: 24rpx;
}
</style>
