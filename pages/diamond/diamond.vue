<template>
	<view class="bg-white">
		<view class="mx-3 bg-white">
			<view class="pt-5 flex pb-4 bg-white">
				<view class="flex">
					<image class="avatar" src="https://img2.imgtp.com/2024/04/12/oMd7YoT1.png" />
					<view class="pl-1 bg-white">
						<view class="font-14">Axure原型设计</view>
						<view class="font-12 text-light-muted">LV7钻石元老</view>
					</view>
				</view>

				<view class="flex ml-auto align-center mr-3 bg-white">
					<image class="icon1" src="https://img2.imgtp.com/2024/04/12/0tkuXG9y.png" />
					<view class="font-13">6819</view>
				</view>
			</view>

			<view class="bg-white">
				<view class="asset NaNrpx-4 py-4">
					<view class="font-13 text-white">总资产（钻和贝）></view>
					<view class="font-24 text-white">1322.870</view>
				</view>

				<view class="justify-end flex ml-auto align-center pt-2">
					<view class="font-13 text-light-muted">展开详情</view>
					<uni-icons type="down" color="#8a8a8a" size="13"></uni-icons>
				</view>
			</view>

			<!-- 切换栏 -->

			<scroll-view id="tab" scroll-x="true" class="flex bg-white">
				<view v-for="(item, index) in barNameList" :key="item.id" class="tabName" :data-current="index" @click="ontabtap">
					<text class="tabName_text" :class="[tabIndex === index ? 'active_text pb-2' : '']">{{ item.name }}</text>
				</view>
			</scroll-view>

			<view v-if="tabIndex === 0" class="py-2 bg-white">
				<view class="flex pb-2">
					<view class="font-12 text-light-muted">买会员，立享特钻奖励，</view>
					<view class="font-12" style="color: red">快速提升收益</view>
				</view>

				<view class="income pb-2 NaNrpx-5">
					<view class="border1 bold py-2">0.10</view>

					<view class="flex py-5">
						<view class="bl">
							<view class="font-13">Poc权益</view>
							<view class="font-18">0.10</view>
						</view>

						<view class="br">
							<view class="font-13">持钻奖励</view>
							<view class="font-13 text-light-muted pt-2">收益率高至31.98%！</view>
						</view>
					</view>
					<view class="flex pb-5">
						<view class="bl">
							<view class="font-13">推广收益</view>
							<view class="font-13 text-light-muted pt-2">邀请好友赚收益！</view>
							<view class="font-13 text-light-muted">去邀请></view>
						</view>

						<view class="br">
							<view class="font-13">旗下会员持钻奖励</view>
							<view class="font-13 text-light-muted pt-2">会员大师专属~</view>
							<view class="font-13 text-light-muted">了解详情</view>
						</view>
					</view>
				</view>
			</view>

			<view v-else-if="tabIndex === 1" class="py-2 bg-white">
				<view class="flex pb-2">
					<view class="font-12 text-light-muted">买会员，立享特钻奖励，</view>
					<view class="font-12" style="color: red">快速提升收益</view>
				</view>
				<view class="income NaNrpx-5 pb-2">
					<view class="border1 bold py-2">184.57</view>

					<view class="flex py-5">
						<view class="bl">
							<view class="font-13">Poc权益</view>
							<view class="font-18">184.57</view>
						</view>

						<view class="br">
							<view class="font-13">持钻奖励</view>
							<view class="font-13 text-light-muted pt-2">收益率高至31.98%！</view>
						</view>
					</view>
					<view class="flex pb-5">
						<view class="bl">
							<view class="font-13">推广收益</view>
							<view class="font-13 text-light-muted pt-2">邀请好友赚收益！</view>
							<view class="font-13 text-light-muted">去邀请></view>
						</view>

						<view class="br">
							<view class="font-13">旗下会员持钻奖励</view>
							<view class="font-13 text-light-muted pt-2">会员大师专属~</view>
							<view class="font-13 text-light-muted">了解详情</view>
						</view>
					</view>
				</view>
			</view>

			<view class="flex align-center py-2 bg-white">
				<view class="font-16">我要赚收益</view>

				<view class="font-12 text-light-muted ml-auto">1000个收益加成卡待领取></view>
			</view>

			<scroll-view class="scrollRow bg-white">
				<view class="monthTab flex">
					<!-- 循环体start -->
					<view v-for="(item, index) in monthList" :key="index" class="item11">
						<view class="item flex-column pt-2" style="" :style="{ width: monthItemWidth }">
							// #ifdef H5
							<image class="icon" :src="item.path"></image>
							// #endif // #ifdef APP-PLUS
							<image class="icon" src="../static/tabbar/phototest.jpg"></image>

							// #endif

							<view class="name mr-1 py-2">{{ item.name }}</view>

							<!-- <view class="button my-2">
		            <text class="btn-text">+ 加入</text>
		          </view> -->
						</view>
					</view>
					<!-- 循环体end -->
				</view>
			</scroll-view>
			<view class="container1 pb-2 mb-2">
				<image class="icon3" src="https://img2.imgtp.com/2024/04/12/wr4XOEtB.png" />
			</view>

			<midell-box :current-page="2"></midell-box>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			barNameList: [
				{
					name: '昨日收益',
					id: '0'
				},
				{
					name: '累计收益',
					id: '1'
				}
			],
			monthList: [
				{
					path: 'https://img2.imgtp.com/2024/04/12/7gzrRTGd.png',
					name: '任务中心',
					count: '306'
				},
				{
					path: 'https://img2.imgtp.com/2024/04/12/8niJ2u82.png',
					name: '持钻奖励',
					count: '550'
				},
				{
					path: 'https://img2.imgtp.com/2024/04/12/bioPjqc2.png',
					name: '天天抽奖',
					count: '5229'
				},
				{
					path: 'https://img2.imgtp.com/2024/04/12/JV7ybJvv.png',
					name: '排行榜',
					count: '233'
				},
				{
					path: 'https://img2.imgtp.com/2024/04/12/drrV1Dbq.png',
					name: '邀请有奖',
					count: '233'
				}
			]
		};
	},
	methods: {
		tabChange(e) {
			let index = e.target.current || e.detail.current; // 获取到当前移动到第几个
			this.switchTab(index);
		},
		// scroll-view 点击 tab 时 改变下标
		ontabtap(e) {
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			this.switchTab(index);
		},
		switchTab(index) {
			if (this.tabIndex === index) {
				return;
			}
			this.tabIndex = index;
		},
		getURL(url) {
			return new URL(`../../static/tabbar/${url}`, import.meta.url).href;
		}
	}
};
</script>

<style>
.avatar {
	width: 82rpx;
	height: 82rpx;
}

.icon1 {
	width: 30rpx;
	height: 30rpx;
}
.asset {
	background: #f26f51;
	border-radius: 8rpx;
}

.tabName {
	width: 25%;
	display: inline-block;
	height: 70rpx;
	white-space: nowrap;
}
.tabName_text {
	color: #aaaaaa;

	width: 100%;
	height: 100%;
}

.active_text {
	color: black;
	text-decoration: none; /* 取消文字的默认下划线 */
	position: relative; /* 让伪元素相对于文本定位 */
}
.active_text::after {
	content: ''; /* 添加伪元素的内容 */
	position: absolute; /* 设置伪元素绝对定位 */
	bottom: -3rpx; /* 控制下划线位置 */
	left: 32%; /* 控制下划线位置 */
	width: 35%; /* 控制下划线长度 */
	height: 4rpx; /* 控制下划线粗细 */
	background-color: red; /* 控制下划线颜色 */
}

.income {
	background-color: #f0f2f5;
	border-radius: 8rpx;
}

.border1 {
	border-bottom: 1rpx solid #dbdbdb;
}

.bl {
	width: 50%;
}
.br {
	width: 50%;
}

.scrollRow {
	display: flex;
	justify-content: space-between; /* 元素分布均匀 */
	height: 290rpx;
	.monthTab {
		flex-wrap: wrap; /* 开启换行 */

		.item {
			display: flex;
			align-items: center;
			width: 160rpx;
		}

		.name {
			font-size: 24rpx;
			color: #181818;
			padding-left: 10rpx;
		}

		.icon {
			width: 50rpx;
			height: 58rpx;
		}
	}
}

.item11 {
	width: calc(25% - 0px); /* 每行显示四个元素，减去 margin 的宽度 */
}

.icon3 {
	width: 704rpx;
	height: 158rpx;
}

.container1 {
	height: 388rpx;
}
</style>
