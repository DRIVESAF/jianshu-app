<template>
	<!-- 悬浮按钮开始 -->
	<view>
		<uni-fab :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="horizontal" :popMenu="true" @trigger="trigger" @fabClick="fabClick" />
	</view>
	<!-- 悬浮按钮结束 -->
</template>

<script></script>

<style>
/* 悬浮按钮开始 */
:deep(.uni-fab__content--other-platform) {
	box-shadow: none !important;
}
/* 悬浮按钮结束 */
</style>
