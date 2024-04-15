<template>
	<view class="bg-white" style="height: 100%">
		<!-- 内容栏开始 -->

		<view v-for="(item, index) in list" :key="index">
			<content>
				<!-- 项目 -->
				<template v-slot:con>
					{{ item.con }}
				</template>
				<!-- 收支 -->
				<template v-slot:plus>
					<view :style="{ color: item.sub ? '#33394a' : '#f26f51' }">
						{{ item.plus }}
					</view>
				</template>
				<!-- 时间 -->
				<template v-slot:time>
					{{ item.time }}
				</template>
			</content>
		</view>

		<!-- 内容栏结束 -->

		<!-- end开始 -->
		<view class="w-100 h-20 bg-white d-f align-center justify-center">
			<text class="text-aaaaaa font">— 没有更多了 —</text>
		</view>
		<!-- end结束 -->
	</view>
</template>

<script setup>
import content from './content.vue';
import { ref } from 'vue';
import { computed } from 'vue';

// 使用计算属性判断数组中是否含有 flag: ''
const hasFlagEmpty = computed(() => {
	return dataArray.value.some((item) => item.flag === '');
});

const list = ref([
	{
		con: '归还',
		sub: true,
		plus: '-10.000',
		time: '2021-02-21 00:00\r借入时间\r2019-09-28\r07:50'
	},
	{
		con: '借入',
		plus: '+10.000',
		time: '2021-02-21 00:00\r归还时间\r2019-09-28\r07:50'
	},
	{
		con: '归还',
		sub: true,
		plus: '-35.000',
		time: '2021-02-21 00:00\r借入时间\r2019-09-28\r07:50'
	},
	{
		con: '借入',
		plus: '+35.000',
		time: '2021-02-21 00:00\r归还时间\r2019-09-28\r07:50'
	}
]);
</script>

<style></style>
