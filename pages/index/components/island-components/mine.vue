<template>
	<view class="w-100">
		<!-- 横向滚动条开始 -->
		<scroll-view class="squ-scroll bg-white pl-3" scroll-x="ture">
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
		<view class="bg-white py-2 NaNrpx-4 mt-2" v-for="(item, index) in dataList" :key="item.id">
			<view class="card-user my-2 mx-0">
				// #ifdef APP-PLUS
				<image class="card-img" :src="item.cover" mode=""></image>
				// #endif // #ifdef H5
				<image class="card-img br-5" :src="getUrl(item.cover)" mode=""></image>
				// #endif
				<view class="pl-2 d-f flex-column justify-center">
					<text class="fs-3 font-weight-bolder">{{ item.name }}</text>
					<text class="time h6">{{ item.time }}</text>
				</view>
			</view>
			<view class="data mt-4">
				<image src="../../../../static/logo.png" mode="" style="width: 60rpx; height: 400rpx"></image>
				<text class="data">
					{{ item.content }}
				</text>
			</view>
			<view class="py-2 px-0">
				<text class="topic-name fs-3">{{ item.topicname }}</text>
				<uni-icons type="hand-up">{{ item.zan }}</uni-icons>
				<uni-icons type="chat">{{ item.common }}</uni-icons>
			</view>
		</view>
		<!-- 说说内容结束 -->
	</view>
</template>

<script>
import shuoshuo from './shuoshuo.vue';

export default {
	data() {
		return {
			list: [
				{ src: '../../../../static/images/u324.jpg', text: '魔都生活（…' },
				{ src: '../../../../static/images/u327.jpg', text: '微故事' }
			],
			dataList: [
				{
					cover: '../../../../static/images/u329.jpg',
					name: '潘小将',
					time: '昨天 10:02',
					content: '来个晨跑，发现进博会后，四叶草的早晨又美了，美好的事物，可以驱赛阴霾，让人回归自信，是不是?',
					topicname: '魔都生活（上海）小岛',
					zan: '4',
					common: '2'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '12.07 19:04',
					content: '在对比中生活，时常觉得技不如人，又不想自甘堕落，无数次暗示自己:加油，你可以做到!',
					topicname: '魔都生活 (上海) 小岛',
					zan: '4',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '前天15:46',
					content: '看到一句话，很适合自己的境况:最苦的其实从来都不是磨难，而是在你苦苦追求之后你发现你想要的根本就无法让你感到幸福，可谓之踏过千山万水却不值得之感。',
					topicname: '魔都生活 (上海) 小岛',
					zan: '2',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '5小时前',
					content: '有木有人参加过上海商圈晚会呀',
					topicname: '魔都生活 (上海) 小岛',
					zan: '赞',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '12.04 18:27',
					content: '这是一个，大家都在忙着赚钱的城市啊。',
					topicname: '魔都生活 (上海) 小岛',
					zan: '1',
					common: '1'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '前天 10:38',
					content: '还是要接受自己的平凡和小我，小小的我，大大的世界!',
					topicname: '魔都生活 (上海) 小岛',
					zan: '赞',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '前天 10:38',
					content: '还是要接受自己的平凡和小我，小小的我，大大的世界!',
					topicname: '魔都生活 (上海) 小岛',
					zan: '赞',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '前天 10:38',
					content: '还是要接受自己的平凡和小我，小小的我，大大的世界!',
					topicname: '魔都生活 (上海) 小岛',
					zan: '赞',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '前天 10:38',
					content: '还是要接受自己的平凡和小我，小小的我，大大的世界!',
					topicname: '魔都生活 (上海) 小岛',
					zan: '赞',
					common: '评论'
				},
				{
					cover: '../../../../static/images/u315.jpg',
					name: '听妳说',
					time: '前天 10:38',
					content: '还是要接受自己的平凡和小我，小小的我，大大的世界!',
					topicname: '魔都生活 (上海) 小岛',
					zan: '赞',
					common: '评论'
				}
			]
		};
	},
	methods: {
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
	width: 70%;
	height: 60%;
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

.card-user {
	display: flex;
}
.card-img {
	height: 80rpx;
	width: 80rpx;
}
.time {
	color: #aaaaaa;
}
.data {
	height: 100%;
}

:deep(.uni-icons) {
	font-size: 33rpx !important;
	float: right;
	margin: 0 4rpx;
}

.topic-name {
	color: #aaaaaa;
}
</style>
