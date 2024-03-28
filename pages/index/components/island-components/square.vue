<template>
	<view class="square">
		<scroll-view class="squ-scroll" scroll-x="ture">
			<!-- 卡片开始 -->
			<view class="scroll-box">
				<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
					<text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
				</uni-card>
			</view>
			<!-- 卡片结束 -->
			<!-- 卡片开始 -->
			<view class="scroll-box">
				<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
					<text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
				</uni-card>
			</view>
			<!-- 卡片结束 -->
			<!-- 卡片开始 -->
			<view class="scroll-box">
				<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
					<text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
				</uni-card>
			</view>
			<!-- 卡片结束 -->
		</scroll-view>
	</view>
</template>

<script></script>

<style lang="scss">
.square {
	width: 100%;
}
:deep(.uni-scroll-view-content) {
	display: flex !important;
}
.scroll-box {
	flex-shrink: 0;
	width: 50%;
}
</style>
