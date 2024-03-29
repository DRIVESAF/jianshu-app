<template>
	<!-- 专题页面 -->
	<!-- 图标栏开始 -->
	<view class="h-20 d-f justify-around bg-white">
		<view class="tools d-f flex-column align-center transform-y-30" v-for="(item, index) in list" :key="index">
			// #ifdef H5
			<image mode="widthFix" class="tools-icon" :src="getUrl(item.icon)"></image>
			// #endif // #ifdef APP-PLUS
			<image class="tools-icon" :src="item.icon"></image>
			// #endif
			<view class="name transform-y-100">{{ item.name }}</view>
		</view>
	</view>
	<!-- 图标栏结束 -->
	<!-- 关注栏开始 -->
	<view class="concern bg-white my-4 d-f align-center">
		<image class="concern-icon m-3" src="../../../static/images/x1.png" mode=""></image>
		<view class="title">我关注的专题</view>
	</view>
	<!-- 关注栏结束 -->

	<!-- 专题栏开始 -->
	<view class="column d-f">
		<view class="column-son flex-column d-f" v-for="(column, index) in columnList" :key="index">
			// #ifdef H5
			<image class="column-cover w-100" :src="getUrl(column.src)" mode=""></image>
			// #endif // #ifdef APP-PLUS
			<image class="column-cover w-100" :src="column.src" mode=""></image>
			// #endif
			<view class="column-name w-100 font">{{ column.name }}</view>
			<view class="column-tip w-100">{{ column.tip }}</view>
		</view>
	</view>
	<!-- 专题栏结束 -->
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ icon: '../../../static/images/u551.jpg', name: '简友广场' },
				{ icon: '../../../static/images/u554.jpg', name: '热门专题' },
				{ icon: '../../../static/images/u557.jpg', name: '官方专题' },
				{ icon: '../../../static/images/u560.jpg', name: '投诉建议' },
				{ icon: '../../../static/images/u563.jpg', name: '工作招聘' }
			],
			columnList: [
				{ src: '../../../static/images/u575.jpg', name: '齐帆齐联合谈写作专题征文', tip: '齐帆齐关注' },
				{ src: '../../../static/images/u576.jpg', name: '我与简书的故事', tip: '齐帆齐关注' },
				{ src: '../../../static/images/u577.jpg', name: '故事', tip: '简书推荐专题' },
				{ src: '../../../static/images/u544.jpg', name: '摄影', tip: '简书推荐专题' },
				{ src: '../../../static/images/u545.jpg', name: '婚姻育儿', tip: '简书推荐专题' },
				{ src: '../../../static/images/u548.jpg', name: '程序员', tip: '简书推荐专题' },
				{ src: '../../../static/images/u591.jpg', name: '旅行在路上', tip: '简书推荐专题' },
				{ src: '../../../static/images/u592.jpg', name: '短篇小说', tip: '简书推荐专题' },
				{ src: '../../../static/images/u593.jpg', name: '原创儿童文学', tip: '简书推荐专题' },
				{ src: '../../../static/images/u602.jpg', name: '手绘', tip: '简书推荐专题' },
				{ src: '../../../static/images/u603.jpg', name: '自然科普', tip: '简书推荐专题' },
				{ src: '../../../static/images/u595.jpg', name: '简书电影', tip: '简书推荐专题' },
				{ src: '../../../static/images/u611.jpg', name: '脱单', tip: '简书推荐专题' },
				{ src: '../../../static/images/u612.jpg', name: '国学与传统文化', tip: '简书推荐专题' },
				{ src: '../../../static/images/u613.jpg', name: '向茶点故事投稿', tip: '简书推荐专题' },
				{ src: '../../../static/images/u612.jpg', name: '连载小说', tip: '简书推荐专题' },
				{ src: '../../../static/images/u622.jpg', name: '诗', tip: '简书推荐专题' },
				{ src: '../../../static/images/u623.jpg', name: '漫画', tip: '简书推荐专题' },
				{ src: '../../../static/images/u632.jpg', name: '创业', tip: '简书推荐专题' },
				{ src: '../../../static/images/u633.jpg', name: '美食', tip: '简书推荐专题' },
				{ src: '../../../static/images/u625.jpg', name: '娱乐圈', tip: '简书推荐专题' },
				{ src: '../../../static/images/u639.jpg', name: '上班这点事', tip: '简书推荐专题' },
				{ src: '../../../static/images/u640.jpg', name: '生活家', tip: '简书推荐专题' }
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
.tools {
	height: 122rpx;
	width: 100%;
}

.tools-icon {
	width: 60rpx;
	height: 70rpx;
}

.name {
	font-size: 26rpx;
}

.concern {
	height: 80rpx;
}

.concern-icon {
	width: 54rpx;
	height: 54rpx;
}

.title {
	font-size: 30rpx;
}

.column {
	padding: 30rpx;
	flex-wrap: wrap;
	gap: 40rpx;
	background: #fff;
}

.column-son {
	width: 200rpx;
	height: 360rpx;
	justify-content: space-between;
}

.column-cover {
	height: 60%;
}

.column-tip {
	height: 40rpx;
	font-size: 24rpx;
	color: #aaaaaa;
}
</style>
