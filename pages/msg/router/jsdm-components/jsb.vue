<template>
	<view class="jsd">
		<!-- 内容栏开始 -->

		<view v-for="(item, index) in list" :key="index">
			<content>
				<template v-slot:con>
					{{ item.con }}
				</template>
				<template v-slot:plus>
					<view class="text-jianshu">
						{{ item.plus }}
					</view>
				</template>
				<template v-slot:time>
					{{ item.time }}
				</template>
				<template v-slot:more>显示更多</template>
			</content>
		</view>

		<!-- 内容栏结束 -->

		<!-- end开始 -->
		<view class="w-100 h-8 bg-white d-f align-center justify-center">
			<uni-icons type="reload" size="20" color="#aaaaaa"></uni-icons>
			<text class="text-aaaaaa font">加载中</text>
		</view>
		<!-- end结束 -->
	</view>
</template>

<script setup>
import content from './content.vue';
import { ref } from 'vue';

const list = ref([
	{
		con: '内容奖励',
		plus: '+0.052',
		time: '2021-02-21 00:00'
	},
	{
		con: '内容奖励',
		plus: '+0.052',
		time: '2021-02-21 00:00'
	},
	{
		con: '投票奖励',
		plus: '+0.163',
		time: '2021-02-21 00:00'
	},
	{
		con: '内容奖励',
		plus: '+0.052',
		time: '2021-02-21 00:00'
	},
	{
		con: '投票奖励',
		plus: '+0.231',
		time: '2021-02-21 00:00'
	},
	{
		con: '内容奖励',
		plus: '+0.160',
		time: '2021-02-21 00:00'
	},
	{
		con: '投票奖励',
		plus: '+0.052',
		time: '2021-02-21 00:00'
	},
	{
		con: '内容奖励',
		plus: '+0.153',
		time: '2021-02-21 00:00'
	},
	{
		con: '内容奖励',
		plus: '+0.041',
		time: '2021-02-21 00:00'
	},
	{
		con: '内容奖励',
		plus: '+0.053',
		time: '2021-02-21 00:00'
	}
]);
</script>

<style></style>
