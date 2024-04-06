<template>
	<view class="development">
		<!-- 最近更新开始 -->
		<view class="update bg-white">
			<text>最近更新</text>
			<text class="text-light-muted">
				查看全部
				<uni-icons type="right" size="15" color="#ababac"></uni-icons>
			</text>
		</view>
		<!-- 最近更新结束 -->

		<!-- 横向滚动条开始 -->
		<scroll-view class="squ-scroll" scroll-x="ture">
			<!-- 卡片开始 -->
			<view class="scroll-box bg-white flex-shrink" v-for="(item, index) in list" :key="index">
				// #ifdef H5
				<image class="scroll-img" :src="getUrl(item.src)"></image>
				// #endif // #ifdef APP-PLUS
				<image class="scroll-img" :src="item.src"></image>
				// #endif

				<text class="scroll-text text-light-muted d-block text-center">{{ item.text }}</text>
			</view>
			<!-- 卡片结束 -->
		</scroll-view>
		<!-- 横向滚动条结束 -->

		<!-- 卡片开始 -->
		<view class="bg-white py-2 NaNrpx-4 mt-2" v-for="(item, index) in dataList" :key="item.id">
			<view class="card-user my-2 mx-0">
				// #ifdef APP-PLUS
				<image class="card-img" :src="item.cover" mode=""></image>
				// #endif // #ifdef H5
				<image class="card-img br-5" :src="getUrl(item.cover)" mode=""></image>
				// #endif
				<view class="pl-2 d-f flex-column justify-center">
					<!-- 用户名 -->
					<text class="fs font">{{ item.name }}</text>
					<!-- 发布时间 -->
					<text class="time h6">赞了文章 | {{ item.time }}</text>
				</view>
			</view>
			<!-- 标题 -->
			<text class="font-md">{{ item.title }}</text>
			<!-- 内容 -->
			<view class="data mt-4">
				<text class="data font">
					{{ item.content }}
				</text>
			</view>
			<view class="py-2 px-0">
				<text class="topic-name fs-3">{{ item.topicname }} {{ item.read }} 阅读 {{ item.common }} 评论 {{ item.zan }} 赞</text>
			</view>
		</view>
		<!-- 卡片结束 -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ src: 'https://img2.imgtp.com/2024/04/06/X2Xd4120.png', text: '齐帆齐', num: '306', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/vUgHmI6u.png', text: '刘英腾', num: '550', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/s6V29XqL.png', text: '彭小六', num: '5229', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/tK9LvbYD.png', text: '简书', num: '181', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/GIf9UMcm.png', text: '我又多活…', num: '17', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/rYZdKLX5.png', text: '行距版君', num: '53', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/NMS7LJSB.png', text: '不止思考', num: '13', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/lOdSmwZ9.png', text: '简宝玉', num: '12', flag: 'false' },
				{ src: 'https://img2.imgtp.com/2024/04/06/tmRSw3XK.png', text: '水中沚', num: '3', flag: 'false' }
			],
			// 卡片内容数据
			dataList: [
				{
					cover: 'https://img2.imgtp.com/2024/04/06/0I5pdLH2.png',
					name: '齐帆齐',
					title: '我的长篇小说《爱之殇》开笔了',
					time: '2分钟前 ',
					content:
						'我这个人是真没救了，真是太没有出息了。说这话的是我是不是想知道发生了什么事情? 给自己放假到正月初九，虽然我知道熬不过初五。可是在大年正月初六的时候，我…',
					topicname: '从容小主',
					read: '816',
					common: '14',
					zan: '72'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/06/0I5pdLH2.png',
					name: '齐帆齐',
					title: '我家有个小福星',
					time: '11分钟前',
					content: '原创/绒花树1、歪打正着 电视遥控坏了，打不开电视，也改不了台。这下三周岁的小孙女儿不高兴了，她每天都…',
					topicname: '从容小主',
					zan: '72',
					common: '14',
					read: '816'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/06/0I5pdLH2.png',
					name: '齐帆齐',
					title: '齐帆齐:写作是心智模式的较量',
					time: '19小时前',
					content:
						'写作很多人把它想得太过于遥远，以为那是专业人士或者是高学历的人才能做的事。虽然无数事例证明了，只要你愿意写都可以成为写作者，如同王小波所说，只要会说话就…',
					topicname: '',
					zan: '11',
					common: '2'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/06/0I5pdLH2.png',
					name: '齐帆齐',
					title: '齐帆齐:写作是心智模式的较量',
					time: '10小时前',
					content: '被骗了三百块钱，心里贼不舒服',
					topicname: '不是凤凰也涅…',
					zan: '15',
					common: '3'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/06/0I5pdLH2.png',
					name: '齐帆齐',
					title: '怎么做一个合格的读者',
					time: '昨天 17:45',
					content: '这两天，涵涵的睡眠质量明显下降了。原先上午可以睡2个半小时，下午可以睡2个多小时的他，这两天直接不干了昨天还睡了3个小时的他，今天只睡了两个小时还不到!',
					topicname: ' ycl春雷',
					read: '49',
					zan: '7',
					common: '5'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/06/0I5pdLH2.png',
					name: '齐帆齐',
					title: '你是间歇性自律，还是习惯性自律?',
					time: '昨天 23:40',
					content:
						'文一凡为了避开“每逢佳节胖五斤”的魔咒，我从年前就计划好，春节期间一定要管住嘴，迈开腿。最低标准是: 不掉秤可以，只要不长秤就算成功! 从大年三-晚上年夜饭..',
					topicname: '一凡亲了教育',
					read: '183',
					zan: '5',
					common: '0'
				}
			]
		};
	},
	methods: {
		getUrl(url) {
			return new URL(url, import.meta.url).href;
		}
	},
	components: {}
};
</script>

<style>
.update {
	height: 100rpx;
	display: flex;
	align-items: center;
	padding: 0 40rpx;
	justify-content: space-between;
}

:deep(.uni-scroll-view-content) {
	display: flex !important;
}
.scroll-box {
	padding-top: 40rpx;
	width: 26%;
	height: 300rpx;
	padding-right: 15rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25rpx;
}
.scroll-img {
	width: 75%;
	height: 50%;
	float: left;
}

/* 卡片开始 */
.card-user {
	display: flex;
}
.card-img {
	height: 110rpx;
	width: 100rpx;
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
/* 卡片结束 */
</style>
