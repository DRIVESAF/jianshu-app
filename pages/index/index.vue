<template>
  <view class="new-file">
	<!-- 搜索开始 -->
	  		<uni-search-bar placeholder="搜索感兴趣的内容" bgColor="#f2f2f2" @confirm="search" />
	<!-- 搜索结束 -->
    
	<!-- 选项卡开始 -->
    <!-- 头部选项卡 -->
   <view class="head-nav">
      <view :class="navIndex==1?'activite':''" @click="checkIndex(1)">推荐</view>
      <view :class="navIndex==2?'activite':''" @click="checkIndex(2)">小岛</view>
	  <view :class="navIndex==3?'activite':''" @click="checkIndex(3)">专题</view>
	  <view :class="navIndex==4?'activite':''" @click="checkIndex(4)">连载</view>
	  
    </view>
    <!-- 内容切换 -->
   <view class="content" v-if="navIndex==1">
      我是选项一
    </view>
    <view class="content" v-if="navIndex==2">
      我是选项二
    </view>
    <view class="content" v-if="navIndex==3">
      我是选项三
    </view>
    <view class="content" v-if="navIndex==4">
      我是选项四
    </view>
    <!-- 选项卡结束 -->
	
  </view>
  
</template>

<script>
  export default{
    data(){
      return{
        navIndex:1
      }
    },
    methods:{
      checkIndex(index){
        this.navIndex =index;
      }
    }
  }
</script>

<style scoped>
  .head-nav{
    width: 50%;
    margin:20rpx auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
	color: #aaaabd;
  }
  .activite{
    color:#333333;
    border-bottom: 6rpx solid #f26f51;
  }
  .head-nav>view{
    padding-bottom: 10rpx;
  }
  .box{background: #008000;}
</style>