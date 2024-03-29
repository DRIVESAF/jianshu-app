<template>
	<!-- 专题页面 -->
	<!-- 图标栏开始 -->
	<view class="h-20 d-f justify-around bg-white">
		<view class="tools d-f flex-column align-center transform-y-30" v-for="(item, index) in list" :key="index">
			// #ifdef H5
			<image mode="aspectFit" class="tools-icon" :src="getUrl(item.icon)"></image>
			// #endif // #ifdef APP-PLUS
			<image class="tools-icon" :src="item.icon"></image>
			// #endif
			<view class="name transform-y-100">{{ item.name }}</view>
		</view>
	</view>
	<!-- 图标栏结束 -->
	<!-- 关注栏开始 -->
	<view class="concern bg-white my-4 d-f align-center">
		<image class="concern-icon m-3" src="../../../static/images/x2.png" mode=""></image>
		<view class="title">我关注的专题</view>
	</view>
	<!-- 关注栏结束 -->

	<!-- 专题栏开始 -->
	<view class="column d-f">
		<view class="column-son flex-column d-f" v-for="(column, index) in columnList" :key="index">
			// #ifdef H5
			<image class="column-cover w-100" :src="getUrl(column.src)" mode="aspectFill"></image>
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
				{ icon: '../../../static/images/u689.svg', name: '全部分类' },
				{ icon: '../../../static/images/u692.svg', name: '对话小说' },
				{ icon: '../../../static/images/u695.svg', name: '简书FM' },
				{ icon: '../../../static/images/u698.svg', name: '开通连载' },
				{ icon: '../../../static/images/u702.svg', name: '连载书评' }
			],
			columnList: [
				{ src: '../../../static/images/u680.jpg', name: '有一种光，叫拾荒', tip: '澜嫣' },
				{ src: '../../../static/images/u678.jpg', name: '妖异录之青冥', tip: '人海中的' },
				{ src: '../../../static/images/u679.jpg', name: '故事', tip: '海外敦煌' },
				{ src: '../../../static/images/u705.jpg', name: '生活碎碎念', tip: '唯唯心' },
				{ src: '../../../static/images/u706.jpg', name: '野笔燃心', tip: 'crazy小' },
				{ src: '../../../static/images/u707.jpg', name: '人物杂谈', tip: '婉迁' },
				{ src: '../../../static/images/u730.jpg', name: '心灵驿站', tip: '高富帅暖' },
				{ src: '../../../static/images/u731.jpg', name: '那些花儿', tip: '初初a' },
				{ src: '../../../static/images/u732.jpg', name: '横滨之恋', tip: '杨岁尘' },
				{ src: '../../../static/images/u755.jpg', name: '风华正茂', tip: '杨岁尘' },
				{ src: '../../../static/images/u705.jpg', name: '一只鸡的365天', tip: '如如清' },
				{ src: '../../../static/images/u757.jpg', name: '安暖逸心', tip: '探索幸' },
				{ src: '../../../static/images/u705.jpg', name: '生活随笔', tip: '逸瑶' },
				{ src: '../../../static/images/u780.jpg', name: '天木世界', tip: '田木弓长' },
				{ src: '../../../static/images/u781.jpg', name: '小小文|笔尖说', tip: 'Emilysmi' }
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
	height: 430rpx;
	justify-content: space-between;
}

.column-cover {
	height: 300rpx;
}

.column-tip {
	height: 40rpx;
	font-size: 24rpx;
	color: #aaaaaa;
}
</style>
