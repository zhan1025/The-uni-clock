<template>
	<view class="plan_body">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
			<uni-nav-bar leftIcon="back" leftText="首页" @clickLeft="back" border="false">
				<view class="title"><text class="y_font">21</text> Days Plan</view>
			</uni-nav-bar>
			<view class="add_bar" @click="add"> + </view>
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniNavBar,
		},
		onShow() {
			this.hidetabBar();
			this.console();
		},
		methods:{
			...mapActions(['console']),
			back(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			},
			hidetabBar(){
				uni.hideTabBar({animation:true})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.plan_body{
		height: 100%;
		// background: #ccc;
	}
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%;
	 }
	 /deep/.uni-navbar__header-container{
		 display: flex;
		 justify-content: center;
		 align-items: center;
	 }
	 .title{
		 font-family: monospace;
		 font-weight: bold;
		 text-shadow: 2px -2px 0px #a5c5c6;
		 position: relative;
		 &::after{
			content: '';
			display: block;
			 height: 0px;
			 width: 100%;
			 border: 1rpx solid #000;
			 position: absolute;
			 bottom: 20rpx;
		 }
		 .y_font{
			 font-size: 44rpx;
			 color: #ff9e00;
			 font-weight: bolder;
		 }
	 }
	.add_bar{
		width: 50rpx;
		height: 50rpx;
		font-size: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #000;
		border-radius: 50%;
		position: fixed;
		right: 25rpx;
		bottom: 100rpx;
		&:hover{
			box-shadow: 2px -2px 0px #ccc;
		}
	}
</style>
