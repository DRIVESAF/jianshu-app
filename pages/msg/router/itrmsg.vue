<template>
	<view style="height: 100rpx">
		<!-- 头部栏开始 -->
		<view class="con-bar py-0 NaNrpx-4 h-12 bg-white d-f align-center justify-between fixed-top">
			<!-- 返回 -->
			<uni-icons type="left" size="23" color="#000000" @click="onClick()"></uni-icons>
			<!-- 消息 -->
			<view>
				<text class="con-bar-title">消息</text>
			</view>
			<!-- 占位元素 -->
			<uni-icons type="left" size="23" color="#ffffff"></uni-icons>
		</view>
		<!-- 头部栏结束 -->
	</view>

	<!-- 顶部导航栏 -->
	<view class="bg-white">
		<view class="d-f align-center NaNrpx-1">
			<view class="roll flex align-center w-100" style="overflow-x: scroll">
				<view
					class="NaNrpx-4 py-2 font flex-shrink text-jianshu"
					v-for="(item, index) in tabBars"
					:key="index"
					:class="tabIndex === index ? 'xuanke-bottom' : 'text-body'"
					@click="changeTab(index)"
				>
					{{ item.name }}
				</view>
			</view>
			<!-- 右侧栏目标 -->
			<view class="flex-shrink">
				<uni-icons type="bars" size="27" color="#7f7f7f"></uni-icons>
			</view>
		</view>

		<!-- 滑动区域容器，和导航栏内容对应 -->
		<swiper :current="tabIndex" :duration="150" @change="onChangeTab" :style="'height:' + scrollH + 'px'">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
					<comment></comment>
				</scroll-view>
			</swiper-item>
			<swiper-item scroll-y="true" :style="'height:' + scrollH + 'px'">
				<dianzan></dianzan>
			</swiper-item>
			<swiper-item scroll-y="true" :style="'height:' + scrollH + 'px'">
				<concern></concern>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import comment from './comment.vue';
import dianzan from './dianzan.vue';
import concern from './concern.vue';

const tabBars = ref([{ name: '评论' }, { name: '赞' }, { name: '关注' }, { name: '赞赏和付费' }, { name: '投稿请求' }, { name: '举报管理' }]);

const tabIndex = ref(0);
const scrollH = ref(0);
const roundTableList = ref([]);

// 页面生命周期
onLoad(() => {
	uni.getSystemInfo({
		success: (res) => {
			console.log(res);
			scrollH.value = res.windowHeight - res.statusBarHeight;
		}
	});
});

// 选项卡切换
const changeTab = (index) => {
	tabIndex.value = index;
};

// 滑动选项卡
const onChangeTab = (e) => {
	tabIndex.value = e.detail.current;
};

const onClick = () => {
	uni.switchTab({
		url: '/pages/msg/msg'
	});
};
</script>

<style>
.roll::-webkit-scrollbar {
	display: none;
}
</style>
