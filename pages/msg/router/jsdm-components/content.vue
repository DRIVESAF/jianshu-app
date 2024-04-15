<template>
	<view class="bg-white">
		<view class="bg-white h-12 mx-4 py-3 d-f flex-column justify-between border-bottom">
			<view class="top d-f justify-between">
				<!-- 收项目名称 -->
				<view class="font-md">
					<slot name="con"></slot>
				</view>
				<!-- 收支明细 -->
				<view>
					<slot name="plus"></slot>
				</view>
			</view>
			<view class="bottom d-f justify-between">
				<!-- 时间 -->
				<text class="text-light-muted font-sm">
					<slot name="time"></slot>
				</text>
				<view class="font-md">
					<slot name="more"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup></script>

<style></style>
