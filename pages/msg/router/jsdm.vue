<template>
	<view style="height: 100rpx">
		<!-- 头部栏开始 -->
		<view class="con-bar py-0 NaNrpx-4 h-10 bg-white d-f align-center justify-between fixed-top">
			<!-- 返回 -->
			<uni-icons type="closeempty" size="23" color="#000000" @click="onClick()"></uni-icons>
			<!-- 消息 -->
			<view>
				<text class="con-bar-title">明细</text>
			</view>
			<!-- 占位元素 -->
			<uni-icons type="left" size="23" color="#ffffff"></uni-icons>
		</view>
		<!-- 头部栏结束 -->
	</view>

	<!-- 广告栏开始 -->
	<view class="d-f NaNrpx-3 py align-center justify-between" style="background-color: #ffffeb" v-show="advShow">
		<view class="d-f align-center">
			<uni-icons type="sound" color="#dd856e" size="30"></uni-icons>
			<text class="text-jianshu font-sm">收益太低？</text>
			<text class="font-sm">点击查看如何获得更高收益</text>
		</view>

		<uni-icons type="closeempty" color="#dd856e" size="15" @click="onClose()" style="font-weight: bold"></uni-icons>
	</view>
	<!-- 广告栏结束 -->

	<!-- 顶部导航栏 -->

	<view>
		<view class="bg-white flex align-center w-100 justify-center">
			<view
				class="NaNrpx-4 py-3 font text-jianshu"
				v-for="(item, index) in tabBars"
				:key="index"
				:class="tabIndex === index ? 'xuanke-bottom' : 'text-light-muted'"
				@click="changeTab(index)"
			>
				{{ item.name }}
			</view>
		</view>

		<!-- 滑动区域容器，和导航栏内容对应 -->
		<swiper :current="tabIndex" :duration="150" @change="onChangeTab" :style="'height:' + scrollH + 'px'">
			<!-- 简书钻 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
					<jsd></jsd>
				</scroll-view>
			</swiper-item>
			<!-- 简书贝 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
					<jsb></jsb>
				</scroll-view>
			</swiper-item>
			<!-- 借钻 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
					<rentd></rentd>
				</scroll-view>
			</swiper-item>
			<!-- 持钻奖励 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
					<reward></reward>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import jsd from './jsdm-components/jsd.vue';
import jsb from './jsdm-components/jsb.vue';
import rentd from './jsdm-components/rentd.vue';
import reward from './jsdm-components/reward.vue';
import dianzan from './dianzan.vue';
import concern from './concern.vue';

const advShow = ref(true);

const onClose = () => {
	advShow.value = !advShow.value;
};

const tabBars = ref([{ name: '简书钻' }, { name: '简书贝' }, { name: '借钻' }, { name: '持钻奖励' }]);

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

<style></style>
