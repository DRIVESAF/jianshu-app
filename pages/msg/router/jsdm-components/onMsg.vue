<template>
	<view class="bg-white">
		<!-- 头部导航栏开始 -->
		<view class="py-2 d-f justify-between align-center h-8 w-100">
			<uni-icons type="left" size="25" color="#606060" @click="onBack()"></uni-icons>
			<text>{{ itemData.id }}</text>
			<uni-icons type="bars" size="25" color="#606060"></uni-icons>
		</view>
		<!-- 头部导航栏结束 -->

		<view class="chat">
			<scroll-view :style="{ height: `${windowHeight}rpx` }" id="scrollview" scroll-y="true" :scroll-top="scrollTop" :scroll-with-animation="true" class="scroll-view">
				<!-- 聊天主体 -->
				<view id="msglistview" class="chat-body">
					<!-- 聊天记录 -->
					<view v-for="(item, index) in msgList" :key="index">
						<!-- 自己发的消息 -->
						<view class="item self" v-if="item.userContent != ''">
							<!-- 文字内容 -->
							<view class="content right">
								{{ item.userContent }}
							</view>
							<!-- 头像 -->
							<image src="https://img2.imgtp.com/2024/04/07/sIWSGleL.png" style="width: 78rpx; height: 78rpx" mode=""></image>
						</view>
						<!-- 机器人发的消息 -->
						<view class="item Ai" v-if="item.botContent != ''">
							<!-- 头像 -->
							<image :src="itemData.src" style="width: 78rpx; height: 78rpx" mode=""></image>
							<!-- 文字内容 -->
							<view class="content left">
								{{ item.botContent }}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- 底部消息发送栏 -->
			<!-- 用来占位，防止聊天消息被发送框遮挡 -->
			<view class="chat-bottom">
				<view class="send-msg">
					<view class="uni-textarea">
						<textarea v-model="chatMsg" maxlength="300" :show-confirm-bar="false" auto-height></textarea>
					</view>
					<view @click="handleSend" class="send-btn">发送</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			itemData: null,
			//滚动距离
			scrollTop: 0,
			userId: '',
			//发送的消息
			chatMsg: '',
			msgList: [
				{
					botContent: '福利',
					recordId: 0,
					titleId: 0,
					userContent: '',
					userId: 0
				},
				{
					botContent: '',
					recordId: 0,
					titleId: 0,
					userContent: 'https://pan.baidu.com/s/1ru9iqaeZfS7NEfygsBt4uw',
					userId: 0
				}
			]
		};
	},
	computed: {
		windowHeight() {
			return this.rpxTopx(uni.getSystemInfoSync().windowHeight);
		}
	},
	methods: {
		onBack() {
			uni.switchTab({
				url: '/pages/msg/msg'
			});
		},

		// px转换成rpx
		rpxTopx(px) {
			let deviceWidth = wx.getSystemInfoSync().windowWidth;
			let rpx = (750 / deviceWidth) * Number(px);
			return Math.floor(rpx);
		},
		// 发送消息
		handleSend() {
			//如果消息不为空
			if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
				let obj = {
					botContent: '',
					recordId: 0,
					titleId: 0,
					userContent: this.chatMsg,
					userId: 0
				};
				this.msgList.push(obj);
				this.chatMsg = '';
			} else {
				this.$modal.showToast('不能发送空白消息');
			}
		}
	},
	mounted() {
		// 从路由参数中获取传递的数据
		const query = this.$route.query;
		const itemDataStr = query.itemData;

		// 解码并解析为对象
		if (itemDataStr) {
			this.itemData = JSON.parse(decodeURIComponent(itemDataStr));
			console.log(this.itemData);
		}
	}
};
</script>
<style lang="scss" scoped>
$chatContentbgc: #c2dcff;
$sendBtnbgc: #4f7df5;

view,
button,
text,
input,
textarea {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* 聊天消息 */
.chat {
	.scroll-view {
		::-webkit-scrollbar {
			display: none;
			width: 0 !important;
			height: 0 !important;
			-webkit-appearance: none;
			background: transparent;
			color: transparent;
		}

		.chat-body {
			display: flex;
			flex-direction: column;
			padding-top: 23rpx;
			// background-color:skyblue;

			.self {
				justify-content: flex-end;
			}
			.item {
				display: flex;
				padding: 23rpx 30rpx;
				// background-color: greenyellow;

				.right {
					background-color: #eeeeee;
				}
				.left {
					background-color: #e7f1fb;
				}
				// 聊天消息的三角形
				.right::after {
					position: absolute;
					display: inline-block;
					content: '';
					width: 0;
					height: 0;
					left: 100%;
					top: 20rpx;
					border: 12rpx solid transparent;
					border-left: 12rpx solid $chatContentbgc;
				}

				.left::after {
					position: absolute;
					display: inline-block;
					content: '';
					width: 0;
					height: 0;
					top: 20rpx;
					right: 100%;
					border: 12rpx solid transparent;
					border-right: 12rpx solid #ffffff;
				}

				.content {
					position: relative;
					max-width: 486rpx;
					border-radius: 8rpx;
					word-wrap: break-word;
					padding: 24rpx 24rpx;
					margin: 0 24rpx;
					border-radius: 10rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
					line-height: 42rpx;
				}
			}
		}
	}

	/* 底部聊天发送栏 */
	.chat-bottom {
		width: 100%;
		height: 177rpx;

		.send-msg {
			display: flex;
			align-items: flex-end;
			padding: 16rpx 30rpx;
			width: 100%;
			position: fixed;
			bottom: 0;
			background: #ffffff;
			border-top: #dddddd 2rpx solid;
		}

		.uni-textarea {
			textarea {
				width: 537rpx;
				min-height: 60rpx;
				max-height: 500rpx;
				background: #f2f2f2;
				border-radius: 8rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				color: #333333;
				line-height: 43rpx;
				padding: 5rpx 8rpx;
			}
		}

		.send-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 25rpx;
			width: 128rpx;
			height: 75rpx;
			border-radius: 8rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #f26f51;
			line-height: 28rpx;
		}
	}
}
</style>
