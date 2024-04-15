<template>
	<!-- 头像 -->
	<slot name="cover"></slot>
	<!-- 内容 -->
	<view class="bg-white flex-column d-f justify-center mx-3 border-bottom" style="height: 150rpx; gap: 12rpx">
		<view class="d-f justify-between">
			<!-- id -->
			<view class="">
				<slot name="jxid"></slot>
			</view>
			<!-- 时间 -->
			<view class="text-light-muted">
				<slot name="jxtime"></slot>
			</view>
		</view>
		<!-- 预览内容 -->
		<text class="font text-ellipsis text-light-m text-light-muted" v-slot="content">
			<slot name="content"></slot>
		</text>
	</view>
</template>

<script setup></script>

<style></style>
