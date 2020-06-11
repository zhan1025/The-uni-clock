<template>
	<view class="plan_body">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<uni-nav-bar leftIcon="back" leftText="首页" @clickLeft="back" border="false">
			<view class="title"><text class="y_font">21</text> Days Plan</view>
		</uni-nav-bar>
		<uni-swipe-action class="plans">
			<uni-swipe-action-item class="plan_item" :options="options" data-num="0" @click="onClick()" @change="change">
				 <view class='cont'>SwipeAction 基础使用场景</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item class="plan_item" :options="options" @click="onClick" @change="change">
				 <view class='cont'>SwipeAction 基础使用场景</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item class="plan_item" :options="options" @click="onClick" @change="change">
				 <view class='cont'>SwipeAction 基础使用场景</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<view class="add_bar" @click="add"> + </view>
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components:{
			uniNavBar,
			uniSwipeAction,
			uniSwipeActionItem
		},
		data(){
			return{
				options:[
				        {
									text: '取消',
									style: {
											backgroundColor: '#007aff'
									}
				        }, {
				            text: '删除',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				      ]
			}
		},
		onShow() {
			this.hidetabBar();
			this.console();
		},
		methods:{
			...mapActions(['console']),
			onClick(e){
			      console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
			    },
			change(open){
				console.log('当前开启状态：'+ open)
			},
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
		display: flex;
		flex-direction: column;
		.plans{
			flex: 1;
			overflow-y: scroll;
			background: #dadada7d;
			.cont{
				flex: 1;
				height: 90rpx;
				line-height: 90rpx;
				padding: 0 30rpx;
				position: relative;
				background-color: #fff;
				font-size: 30rpx;
				border-bottom-color: #f5f5f5;
				border-bottom-width: 2rpx;
				border-bottom-style: solid;
			}
		}
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
			box-shadow: 4px -3px 5px #000;
		}
	}
</style>
