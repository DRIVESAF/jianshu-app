<template>
	<view class="content">
		<!-- 搜索开始 -->
		<uni-search-bar placeholder="搜索感兴趣的内容" bgColor="#f2f2f2" @confirm="search" />
		<!-- 搜索结束 -->
		<!-- 顶部选项卡开始 -->
			<scroll-view class="tab" scroll-x="">
				<view class="tab-box">
					<view v-for="item in list" :key="index" class="tab-item">{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 顶部选项卡结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					name:'推荐'
				},
				{
					name:'小岛'
				},
				{
					name:'专题'
				},
				{
					name:'连载'
				}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.tab{
		border-bottom: 1px #e5eef1 solid;
		width: 100%;
		box-sizing: border-box;
	}
	.tab-box{
		display: flex;
		height: 45rpx;
		align-items: center;
		/* 不换行 */
		flex-wrap: nowrap;
		margin-bottom: 10px;
		box-sizing: border-box;
		justify-content: space-around;
		}
	.tab-item{
			flex-shrink: 0;
			color:#abb3b5;
	}
</style>
