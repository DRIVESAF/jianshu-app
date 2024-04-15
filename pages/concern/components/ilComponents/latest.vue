<template>
	<view class="bg-silver">
		<!-- 置顶 -->
		<view class="d-f p-3 align-center bg-white">
			<!-- 图标 -->
			<view class="text-jianshu bg-fbe6e2 NaNrpx-1 rounded border-f26f51">置顶</view>
			<text class="font-sm NaNrpx-3">免费送一个首开简书会员</text>
		</view>

		<!-- 内容 -->
		<view class="bg-white py-2 NaNrpx-4 mt-2" v-for="(item, index) in list" :key="item.id">
			<!-- 用户信息 -->
			<view class="card-user my-2 mx-0 d-f">
				<image class="card-img br-5" style="height: 100rpx; width: 100rpx" :src="item.cover" mode=""></image>
				<view class="pl-2 d-f flex-column justify-center">
					<text class="fs-3">{{ item.name }}</text>
					<text class="time font-sm text-light-muted">{{ item.time }}</text>
				</view>
			</view>
			<view class="data mt-4">
				<text class="data">
					{{ item.content }}
				</text>
			</view>
			<!-- 操作 -->
			<view class="py-2 px-0 d-f justify-center">
				<view class="topic-name fs-3 NaNrpx-4 d-f align-center">
					<uni-icons type="upload" size="20"></uni-icons>
					<text>分享</text>
				</view>

				<view class="NaNrpx-4 d-f align-center">
					<uni-icons type="chat" size="20"></uni-icons>
					<text>评论</text>
				</view>

				<view class="NaNrpx-4 d-f align-center">
					<uni-icons type="hand-up" size="20"></uni-icons>
					<text>{{ item.common }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 卡片内容数据
			list: [
				{
					cover: 'https://img2.imgtp.com/2024/04/13/5G7t4ykw.jpg',
					name: 'fine饭',
					time: '8小时前 ',
					content: '自己做自己的主心骨\n别等待有一天的哪一步\n只剩万劫不复',
					topicname: '今天你有什么感悟？小鸟',
					zan: '30',
					common: '1'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/13/5G7t4ykw.jpg',
					name: '芝士霉霉要全糖',
					time: '昨天：11:32',
					content: '周一\r晴\r今天的心情也如天气一般',
					topicname: '织梦小岛',
					zan: '1',
					common: '评论'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/13/5G7t4ykw.jpg',
					name: '潘小将',
					time: '昨天 02:46',
					content:
						'有个派出所民警，喜欢上一个女孩，但是害羞不敢表白。被同事知道后决定帮他。他们把他拉到路口，等着女孩出现等了一会儿，女孩终于出现了，在同事们的帮助下，他鼓起勇气拦住了女孩，说道:“小姐，我是派出所的，请你跟我…',
					topicname: '企业管理参考小岛',
					zan: '11',
					common: '2'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/13/5G7t4ykw.jpg',
					name: '渐行渐远',
					time: '10小时前',
					content: '被骗了三百块钱，心里贼不舒服',
					topicname: '生活碎片小岛',
					zan: '15',
					common: '3'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/13/5G7t4ykw.jpg',
					name: 'Minecraft小白…',
					time: '昨天 17:45',
					content: 'hyt又出来了一个龙蛋起床战争，其实跟普通的起床战争规则样...，出于好奇我就去又玩了一局，然后灭了绿，红灭蓝后被我们黄给灭了。',
					topicname: 'Minecraft小岛',
					zan: '7',
					common: '5'
				},
				{
					cover: 'https://img2.imgtp.com/2024/04/13/5G7t4ykw.jpg',
					name: '云端游者',
					time: '昨天 23:40',
					content: '有没有那么一刻\n希望红绿灯永远不要转为绿灯\n就这样站着\n像颗树…',
					topicname: '孤独岛小鸟',
					zan: '5',
					common: '评论'
				}
			]
		};
	}
};
</script>

<style></style>
