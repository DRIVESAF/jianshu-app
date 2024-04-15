<template>
	<view class="bg-white">
		<view class="flex pt-5">
			<view class="flex-1 ml-2">
				<image src="https://img2.imgtp.com/2024/04/12/bbqV4PSL.png" mode="" style="width: 40rpx; height: 40rpx"></image>
			</view>

			<view class="mr-2" style="font-size: 26rpx; color: rgb(242, 111, 81)">写文章</view>
		</view>

		<view class="">
			<view class="flex box2 mt-1" style="margin-top: 2rpx">
				<view class="flex-1">
					<image style="width: 100rpx; height: 100rpx; border-radius: 50%" class="ml-4 mr-2 mt-3" src="https://img2.imgtp.com/2024/04/12/6BWg8yPa.png"></image>
				</view>

				<view class="mt-4 flex-4">
					<view class="flex">
						<view class="flex-1" style="font-size: 30rpx">原型设计</view>
					</view>

					<view class="flex">
						<view class="mt-1" style="color: #888; font-size: 28rpx">关注 30</view>

						<view class="mt-1 ml-2" style="color: #888; font-size: 28rpx">粉丝 23232</view>
					</view>
				</view>

				<view class="pl-1 mt-3 mr-2 flex" style="background-color: rgb(242, 242, 242); width: 160rpx; height: 50rpx; border-radius: 40rpx">
					<view class="" style="margin-top: 6rpx; margin-left: 4rpx">
						<image src="https://img2.imgtp.com/2024/04/12/raKlJhu8.png" mode="" style="width: 40rpx; height: 40rpx"></image>
					</view>

					<view class="" style="font-size: 16rpx; margin-top: 14rpx; margin-left: 4rpx">简书创作者</view>
				</view>
			</view>

			<view class="mx-4 mt-2 mb-2 rectangle" style="">
				<view class="flex">
					<view class="flex-1 flex mt-1 ml-2">
						<view class="">
							<image src="https://img2.imgtp.com/2024/04/12/2BgCBSX5.png" mode="" style="height: 60rpx; width: 60rpx"></image>
						</view>

						<view class="mt-1 ml-1" style="font-size: 26rpx">总资产 1323.191</view>
					</view>

					<view class="mt-2 mr-2" style="font-size: 24rpx; color: #888">查看></view>
				</view>

				<view class="flex mt-3 ml-5">
					<view class="flex-1">
						<view class="mt-1 ml-2">
							<image src="https://img2.imgtp.com/2024/04/12/P61ZcVXd.png" mode="" style="width: 60rpx; height: 60rpx"></image>
						</view>

						<view class="" style="font-size: 26rpx">我的文章</view>

						<view class="mt-1 ml-2" style="font-size: 16rpx; color: #888">2篇私密</view>
					</view>

					<view class="flex-1">
						<view class="mt-1 ml-2">
							<image src="https://img2.imgtp.com/2024/04/12/qJavAOqK.png" mode="" style="width: 60rpx; height: 60rpx"></image>
						</view>

						<view class="" style="font-size: 26rpx">我的帖子</view>

						<view class="mt-1 ml-2" style="font-size: 16rpx; color: #888">0个帖子</view>
					</view>

					<view class="flex-1">
						<view class="mt-1 ml-2">
							<image src="https://img2.imgtp.com/2024/04/12/OUufneRk.png" mode="" style="width: 60rpx; height: 60rpx"></image>
						</view>

						<view class="" style="font-size: 26rpx">赞和收藏</view>

						<view class="mt-1 ml-2" style="font-size: 16rpx; color: #888"></view>
					</view>

					<view class="flex-1">
						<view class="mt-1 ml-2">
							<image src="https://img2.imgtp.com/2024/04/12/b1YAP8mP.png" mode="" style="width: 60rpx; height: 60rpx"></image>
						</view>

						<view class="" style="font-size: 26rpx">奖励任务</view>

						<view class="mt-1 ml-2" style="font-size: 16rpx; color: #888">领简书钻</view>
					</view>
				</view>
			</view>
		</view>

		<view class="">
			<image src="https://img2.imgtp.com/2024/04/12/GgVJVfY3.png" mode="" style="width: 670rpx; height: 148rpx" class="ml-5"></image>
		</view>

		<view class="box1">
			<!-- 简书会员 -->
			<view class="box2 mt-2 pb-2">
				<view class="flex" @click="goVip()">
					<view class="flex-1 ml-3" style="font-size: 26rpx">简书会员</view>

					<view class="mr-1" style="font-size: 20rpx; color: #888; margin-top: 4rpx">去广告</view>

					<view class="">
						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 简书活动 -->
			<view class="box2 pb-2" style="margin-top: 2rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">简书活动</view>

					<view class="mr-1" style="font-size: 20rpx; color: #888; margin-top: 30rpx"></view>

					<view class="mt-2">
						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 我的钱包 -->
			<view class="box2 pb-2" style="margin-top: 2rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">我的钱包</view>

					<view class="flex pt-2 align-center">
						<view class="mr-1" style="font-size: 20rpx; color: #888">0张优惠卷</view>

						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 我的小岛 -->
			<view class="box2 pb-2" style="margin-top: 2rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">我的小岛/专题/文集</view>

					<view class="mr-1" style="font-size: 20rpx; color: #888; margin-top: 30rpx"></view>

					<view class="mt-2">
						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 我的书架 -->
			<view class="box2 pb-2" style="margin-top: 2rpx">
				<view class="flex align-center">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">我的书架</view>

					<view class="flex align-center pt-2">
						<view class="mr-1" style="font-size: 20rpx; color: #888">含已购内容</view>

						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 浏览记录 -->
			<view class="box2 pb-2" style="margin-top: 2rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">浏览记录</view>

					<view class="mr-1" style="font-size: 20rpx; color: #888; margin-top: 30rpx"></view>

					<view class="mt-2">
						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 开启页面模式 -->
			<view class="box2 pb-2" style="margin-top: 30rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2 d-f justify-between" style="font-size: 26rpx">
						开启页面模式
						<switch style="transform: scale(0.7)" checked @change="switch1Change" />
					</view>

					<view class="mr-1" style="font-size: 20rpx; color: #888; margin-top: 30rpx"></view>

					<view class="mt-2"></view>
				</view>
			</view>
			<!-- 设置 -->
			<view class="box2 pb-2" style="margin-top: 2rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">设置</view>

					<view class="mr-1" style="font-size: 20rpx; color: #888; margin-top: 30rpx"></view>

					<view class="mt-2">
						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
			<!-- 帮助与反馈 -->
			<view class="box2 pb-3" style="margin-top: 2rpx">
				<view class="flex">
					<view class="flex-1 ml-3 mt-2" style="font-size: 26rpx">帮助与反馈</view>

					<view class="flex pt-2">
						<view class="mr-1" style="font-size: 20rpx; color: #888">有问题在这里</view>

						<image src="https://img2.imgtp.com/2024/04/12/3m6Q58tN.png" mode="" class="mr-2" style="width: 36rpx; height: 36rpx"></image>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部导航栏 -->

		<view class="bg"></view>

		<midell-box :current-page="4"></midell-box>
	</view>
</template>

<script setup>
const goVip = () => {
	uni.redirectTo({
		url: '/pages/my/router/vip'
	});
};
</script>

<style>
.rectangle {
	width: 670rpx;

	height: 306rpx;

	border: 2rpx solid rgb(242, 242, 242);

	position: relative;
}

.rectangle::after {
	content: '';

	position: absolute;

	top: 28%;

	left: 0rpx;

	width: 670rpx;

	height: 2rpx;

	background-color: rgb(242, 242, 242);

	/* 线的颜色 */

	transform: translateY(-50%);
}

.recommend-style {
	font-size: 32rpx;

	color: rgb(245, 154, 35);

	/* 推荐的特定颜色 */

	font-weight: bold;

	/* 字体加粗 */
}

.discover-style {
	font-size: 32rpx;

	color: rgb(100, 149, 237);

	/* 发现的特定颜色 */

	font-style: bold;

	/* 字体斜体 */
}

.hot-style {
	font-size: 32rpx;

	color: rgb(220, 20, 60);

	/* 热门的特定颜色 */

	font-style: bold;

	/* 字体斜体 */
}

.labec::after {
	content: '';

	position: absolute;

	left: 0rpx;

	width: 100%;

	height: 1rpx;

	top: 140rpx;

	background-color: rgb(242, 242, 242);
}

.labec1::after {
	content: '';

	position: absolute;

	left: 0rpx;

	width: 100%;

	height: 1rpx;

	top: 180rpx;

	background-color: rgb(242, 242, 242);
}

.ad-container {
	height: 200rpx;

	/* 设置容器高度 */

	overflow: hidden;

	/* 隐藏溢出部分 */

	white-space: nowrap;

	/* 水平排列内容 */
}

.ad-content {
	display: inline-block;

	/* 内联块元素水平排列 */

	padding: 10rpx;

	/* 可根据需求调整间距 */
}

/* 选项卡的样式 */

.tab-item.active {
	color: rgb(229, 131, 109);

	/* 激活状态的标签颜色 */
}

/* 下方红色指示器的样式 */

.indicator {
	position: absolute;

	bottom: 0;

	left: 10rpx;

	width: 5%;

	/* 可以根据实际数量调整 */

	height: 4rpx;

	background-color: rgb(229, 131, 109);
}

.border1 {
	position: relative;

	height: 4rpx;

	background-color: rgb(229, 171, 199);
}

.border1::before,
.border1::after {
	content: '';

	position: absolute;

	top: 0;

	width: 60rpx;

	height: 100%;

	border-top: 4rpx solid rgb(252, 20, 71);
}

.border1::before {
	left: 10rpx;
}

.border1::after {
	right: 0;
}

.text1 {
	position: absolute;

	top: -20rpx;

	left: 50%;

	transform: translateX(-50%);

	background-color: white;

	padding: 0 20rpx;

	font-size: 28rpx;
}

.item {
	display: flex;

	flex-direction: row;

	align-items: center;

	margin: 20rpx;
}

.item-image {
	width: 160rpx;

	height: 160rpx;

	margin-right: 20rpx;
}

.item-info {
	display: flex;

	flex-direction: column;
}

.item-name {
	font-size: 32rpx;

	font-weight: bold;
}

.item-description {
	font-size: 28rpx;

	color: #999;
}

.item-rating {
	font-size: 28rpx;

	color: #f5a623;
}

.box1 {
	background-color: rgb(244, 244, 244);
}

.box2 {
	background-color: rgb(255, 255, 255);
}

.window {
	font-weight: bold;
}

.label {
	position: relative;
}

.label::after {
	content: '';

	position: absolute;

	top: 55rpx;

	left: 10rpx;

	width: 100rpx;

	height: 6rpx;

	background-color: var(--info);
}

.search-icon {
	width: 70rpx;

	height: 70rpx;

	position: absolute;

	top: 10;

	left: 10;
}

.search-box {
	height: 60rpx;

	padding-left: 0rpx;

	background-color: var(--bgColor);

	border-radius: var(--radius);
}

.thumbnail {
	width: 220rpx;

	height: 110rpx;

	border-radius: var(--radius);
}

.bottom-img {
	height: 50rpx;

	width: 50rpx;
}

.img {
	height: 200rpx;

	width: 230rpx;

	border-radius: 20rpx;
}

.bottom-box {
	padding-left: 44rpx;

	width: 50rpx;

	height: 50rpx;
}

.bg {
	background-color: var(--bgColor);

	height: 100rpx;
}

.bottom {
	position: fixed;

	z-index: 1500;

	width: 100%;

	height: 120rpx;

	bottom: 0;

	background-color: white;
}

.x {
	margin-left: 180rpx;
}

.shuosuo {
	border-style: solid;

	border-color: rgb(152, 180, 223);

	border-radius: 30rpx;

	width: 160%;

	height: 60%;
}

.yuanxing {
	height: 70rpx;

	width: 70rpx;

	border-radius: 50%;

	float: left;
}

.yuanxingxiao {
	height: 50rpx;

	width: 50rpx;

	border-radius: 50%;

	float: left;
}

.box {
	border-style: solid;

	border-color: rgb(242, 242, 242);

	border-radius: 40rpx;

	border-width: 4rpx;

	width: 600rpx;

	height: 60rpx;
}
</style>
