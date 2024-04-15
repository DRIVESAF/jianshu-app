<template>
	<view :style="'height:' + windowHeight + 'px;'" class="d-f flex-column justify-between">
		<view class="bg-white d-f flex-column align-center justify-center" style="height: 30%">
			<image class="h-20" mode="aspectFit" src="https://img2.imgtp.com/2024/04/12/5AjhnfP7.png"></image>
			<text class="text-light-muted">当前你还没有简书钻哦~</text>
		</view>

		<view class="bg-white d-f flex-column align-center justify-be NaNrpx-3" style="height: 68%">
			<text class="font-md py-5">什么是简书钻</text>
			<text class="font">简书钻可以更好地奖赏您在简书做的贡献，文章热度赚取收益，所有的简书社区参与都可以创造价值;</text>
			<text class="font py-5">简书钻可以公平透明地衡量社区贡献，简友根据贡献高低享受不同的权益，新的简书之旅已经启程。</text>

			<button style="color: #ffffff; background-color: #f26f51; border-radius: 64rpx; width: 80%; height: 70rpx" class="my-5 d-f justify-center align-center font-sm">
				了解简书钻详情
			</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			windowHeight: 0
		};
	},
	mounted() {
		this.getWindowHeight(); // 在初始化时获取窗口高度
		window.addEventListener('resize', this.getWindowHeight); // 在窗口大小改变时重新获取窗口高度
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowHeight); // 组件销毁时移除resize事件监听器
	},
	methods: {
		getWindowHeight() {
			this.windowHeight = window.innerHeight;
		}
	}
};
</script>

<style></style>
