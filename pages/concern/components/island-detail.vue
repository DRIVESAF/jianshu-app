<template>
	<view class="bg-64696f">
		<!-- 头部信息开始 -->
		<view :class="isFixed ? '' : 'head2'">
			<!-- 头部导航栏开始 -->
			<view class="py-2 d-f justify-between NaNrpx-2 align-center">
				<uni-icons type="left" size="25" color="#fefefe" @click="onClick()"></uni-icons>
				<uni-icons type="bars" size="25" color="#fefefe"></uni-icons>
			</view>
			<!-- 头部导航栏结束 -->
			<!-- 小岛信息开始 -->
			<view class="">
				<view class="h-20 d-f NaNrpx-3">
					<!-- 头像 -->
					<view class="d-f align-center">
						<image src="https://img2.imgtp.com/2024/04/13/BDTNUT9W.jpg" style="height: 150rpx; width: 150rpx" class="flex-shrink" mode=""></image>
					</view>
					<!-- 文字 -->
					<view class="d-f flex-column justify-center mx-3">
						<!-- 标题 -->
						<view class="font-33 text-ecefe5">进化朗读者小岛</view>
						<text class="font color-cccccd">遇见山，我们朗读它的伟岸；遇见花，我们朗诵它的美丽</text>
					</view>
					<!-- 右侧向右栏 -->
					<view class="d-f flex-column-reverse pb-3">
						<uni-icons type="right" size="20" color="#cccccd"></uni-icons>
					</view>
				</view>
				<!-- 小岛信息结束 -->
				<!-- 加入开始 -->
				<view class="d-f align-center NaNrpx-3 justify-between">
					<view class="color-cccccd font">5939名简友已加入></view>
					<!-- 加入按钮 -->
					<view class="example-body">
						<uni-fav
							:checked="checkList[4]"
							:content-text="contentText"
							bg-color="#49bd38"
							fg-color="#ffffff"
							fg-color-checked="#aaaaaa"
							bg-color-checked="#d7d7d7"
							star="false"
							circle="true"
							@click="favClick(4)"
						/>
					</view>
				</view>
				<!-- 加入结束 -->
				<!-- 标签栏开始 -->
				<view class="d-f justify-between p-3 align-center">
					<!-- tag -->
					<view class="d-f" style="gap: 24rpx">
						<view class="font NaNrpx-2 bg-85898c br-32 color-cccccd">#我的简书组织</view>
						<view class="font NaNrpx-2 bg-85898c br-32 color-cccccd">#男生的绿茶语录</view>
					</view>
					<!-- 更多 -->
					<view class="font color-cccccd">更多</view>
				</view>
				<!-- 标签栏结束 -->
			</view>
		</view>
		<!-- 头部信息结束 -->

		<!-- 吸顶标题开始 -->
		<view class="bg-64696f d-f justify-between align-center p-2" :class="isFixed ? 'head2' : 'head'">
			<uni-icons type="left" size="25" color="#fefefe" @click="onClick()"></uni-icons>
			<view class="d-f">
				<text class="text-white NaNrpx-4">进化朗读者的小岛</text>
				<view class="example-body">
					<uni-fav
						:checked="checkList[4]"
						:content-text="contentText"
						bg-color="#49bd38"
						fg-color="#ffffff"
						fg-color-checked="#aaaaaa"
						bg-color-checked="#d7d7d7"
						star="false"
						circle="true"
						style="width: 100rpx; height: 40rpx"
						@click="favClick(4)"
					/>
				</view>
			</view>
			<uni-icons type="bars" size="25" color="#fefefe"></uni-icons>
		</view>
		<!-- 吸顶标题结束 -->
		<!-- 切换栏 -->
		<view class="bg-white">
			<view class="d-f align-center NaNrpx-1 fixed">
				<view class="roll flex align-center w-100">
					<view
						class="mx-3 py-2 font-sm flex-shrink text-jianshu"
						v-for="(item, index) in tabBars"
						:key="index"
						:class="tabIndex === index ? 'xuanke-bottom' : 'text-body'"
						@click="changeTab(index)"
					>
						{{ item.name }}
					</view>
				</view>
			</view>

			<!-- 滑动区域容器，和导航栏内容对应 -->
			<swiper :current="tabIndex" :duration="150" @change="onChangeTab" :style="'height:' + scrollH + 'px'">
				<swiper-item>
					<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">
						<latest></latest>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">heiudhiuq</scroll-view>
				</swiper-item>

				<swiper-item>
					<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">agydugahius</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'">dgi</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import latest from './ilComponents/latest.vue';

const isFixed = ref(false);
const checkList = ref([false, false, false, false, false, false]);
const contentText = reactive({
	contentDefault: '加入',
	contentFav: '已加入'
});
const tabBars = ref([{ name: '最新' }, { name: '热门' }, { name: '精华' }, { name: '荣誉墙' }]);
const tabIndex = ref(0);
const scrollH = ref(0);
const roundTableList = ref([]);

const changeTab = (index) => {
	tabIndex.value = index;
};

const onChangeTab = (e) => {
	tabIndex.value = e.detail.current;
};

onMounted(() => {
	uni.getSystemInfo({
		success: (res) => {
			console.log(res);
			scrollH.value = res.windowHeight - res.statusBarHeight;
		}
	});
});

const onClick = () => {
	uni.switchTab({
		url: '/pages/concern/concern'
	});
};

const favClick = (index) => {
	checkList.value[index] = !checkList.value[index];
	console.log(checkList.value[index]);
};

const handleScroll = () => {
	if (document.documentElement.scrollTop == 0) {
		console.log(isFixed);
		isFixed.value = true;
	} else {
		console.log(isFixed);
		isFixed.value = false;
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});
</script>

<style>
.fixed {
	position: sticky;
	top: 90rpx; /* 设置顶部距离为0，即固定在页面顶部 */
	z-index: 100; /* 可选，设置z-index以确保固定元素在其他内容上方 */
	background-color: #fff;
}

/* true */
.head {
	position: sticky;
	top: 0; /* 设置顶部距离为0，即固定在页面顶部 */
	z-index: 100; /* 可选，设置z-index以确保固定元素在其他内容上方 */
}

/* false */
.head2 {
	display: none;
}
</style>
