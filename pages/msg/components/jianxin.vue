<template>
	<view class="d-f bg-white NaNrpx-3 h-20 align-center" v-for="(item, index) in conList" :key="index" @click="onMsg(index)">
		<jianxinCard>
			<template v-slot:cover>
				<image class="bg-white flex-shrink" style="width: 100rpx; height: 100rpx" :src="getUrl(item.src)"></image>
			</template>

			<template v-slot:jxid>
				{{ item.id }}
			</template>

			<template v-slot:jxtime>
				{{ item.time }}
			</template>

			<template v-slot:content>
				{{ item.des }}
			</template>
		</jianxinCard>
	</view>
</template>

<script setup>
import jianxinCard from './jianxinCard.vue';
import onMsgVue from '../router/jsdm-components/onMsg.vue';
import { ref } from 'vue';

const conList = ref([
	{ src: 'https://img2.imgtp.com/2024/04/09/4uNa0kge.png', id: '天河之源Mren', des: 'https://pan.baidu.com/s/1ru9igaeZfS7…', time: '02-21 22:28' },
	{ src: 'https://img2.imgtp.com/2024/04/09/m2dsvnSK.png', id: '齐帆齐', des: '齐帆齐第2期28天写作营正在火热招募中…', time: '02-21 22:28' },
	{ src: 'https://img2.imgtp.com/2024/04/09/EC79Wqc2.png', id: '简书', des: '齐帆齐第2期28天写作营正在火热招募中…', time: '02-21 22:28' },
	{ src: 'https://img2.imgtp.com/2024/04/09/skLrcc0p.png', id: '2d389qa45xq', des: '齐帆齐第2期28天写作营正在火热招募中…', time: '02-21 22:28' },
	{ src: 'https://img2.imgtp.com/2024/04/09/NeOnG2hi.png', id: '姜曼_8e4b', des: '齐帆齐第2期28天写作营正在火热招募中…', time: '02-21 22:28' },
	{ src: 'https://img2.imgtp.com/2024/04/09/GyiIPyBc.png', id: '齐帆齐', des: '齐帆齐第2期28天写作营正在火热招募中…', time: '02-21 22:28' }
]);

const getUrl = (url) => {
	return new URL(url, import.meta.url).href;
};

const onMsg = (index) => {
	// 获取当前点击项的数据
	const currentItem = conList.value[index];

	// 使用JSON.stringify将对象转换为字符串，以便可以传递给URL
	const itemData = JSON.stringify(currentItem);

	// 使用encodeURIComponent对数据进行编码，以便可以安全地作为URL的一部分
	const encodedData = encodeURIComponent(itemData);

	// 重定向到onMsg页面，并带上参数
	uni.redirectTo({
		url: `/pages/msg/router/jsdm-components/onMsg?itemData=${encodedData}`
	});
};
</script>

<style></style>
