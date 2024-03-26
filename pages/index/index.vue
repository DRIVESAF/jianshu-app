<template>
	<uni-search-bar placeholder="搜索感兴趣的内容" bgColor="#e5edf0" @confirm="search" />
    <scroll-view id="tab" scroll-x="true">
    		<view v-for="(item,index) in barNameList" :key="item.id" class="tabName" :data-current="index" @click="ontabtap">
    			<text class="tabName_text" :class="tabIndex == index?'active_text':''">{{item.name}}</text>
    		</view>
    </scroll-view>
	<van-button type="primary" @click="handleClick">点击按钮</van-button>
</template>

<script>
	export default{
			data(){
				return{
					tabIndex:0,
					barNameList:[{
					    name: '推荐',
					    id: '0'
					}, {
					    name: '小岛',
					    id: '1'
					}, {
					    name: '专题',
					    id: '2'
					},{
					    name: '连载',
					    id: '3'
					}]
				}
			},
			methods:{
				// scroll-view 点击 tab 时 改变下标
				ontabtap(e){
					let index = e.target.dataset.current || e.currentTarget.dataset.current;
					this.switchTab(index);
				},
				switchTab(index){
					if(this.tabIndex == index){
						return
					}
					this.tabIndex = index;
				}
			}
		}
</script>

<style>
		#tab{
			width: 100%;
			display: flex;
		}
		.tabName{
			text-align: center;
			width: 25%;
			display: inline-block;
			height: 80rpx;
			line-height: 80rpx;
			white-space: nowrap;
		}
		.tabName_text{
			display: inline-block;
			width: 100%;
			height: 100%;
		}
		.active_text{
			background-color: #f0f8fa;
			color: #abb3b5;
		}
		#tabContent{
			width: 100%;
		}
</style>
