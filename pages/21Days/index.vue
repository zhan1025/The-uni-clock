<template>
	<view class="plan_body">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<uni-nav-bar leftIcon="back" leftText="首页" @clickLeft="back" border="false">
			<view class="title"><text class="y_font">21</text> Days Plan</view>
		</uni-nav-bar>
		<uni-swipe-action class="plans" v-show="planList.length" >
			<uni-swipe-action-item v-for="(item, index) in planList" 
			:key="item.id" 
			class="plan_item" 
			:options="item.options"  
			@click="onClick($event,index)" 
			@change="change">
				 <view class='cont'>{{item.content}}</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<view class="add_bar" @click="add($event)" :id="add_active?'add_bar--active':''">
			<view class="add_bar--wrap">
				
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
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
				add_active: false,
				options:[
				        {
									text: '编辑',
									type: 1,
									style: {
											backgroundColor: '#169a0f'
									}
								},
								{
									text: '删除',
									type: 0,
									style: {
										backgroundColor: 'rgb(255,58,49)'
									}
								}
				      ],
				planList:[
					{
							id: 2,
							options: [{
								text: '编辑',
								type: 1,
								style: {
										backgroundColor: '#169a0f'
								}
							},
							{
								text: '删除',
								type: 0,
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}],
							content: 'item'
						},
						{
							id: 3,
							options: [{
								text: '编辑',
								type: 1,
								style: {
										backgroundColor: '#169a0f'
								}
							},
							{
								text: '删除',
								type: 0,
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}],
							content: 'item'
						}
				]
			}
		},
		onShow() {
			this.hidetabBar();
		},
		methods:{
			...mapMutations(['setPlanList']),
			//	添加plan
			add(e){
				this.add_active = !this.add_active
			},
			onClick(e,index){
			      // console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
						console.dir(e)
						if(!e.content.type){
							uni.showModal({
							title: '提示',
							content: '是否删除',
							success: (res) => {
								if (res.confirm) {
									this.planList.splice(index, 1)
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
						}else{
							// TODO:
						}
			    },
			change(open){
				// console.log('当前开启状态：'+ open)
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
	 #add_bar--active{
		 
		 // 	display: block;
			// position: absolute;
			// bottom: 25rpx;
			// z-index: -1;
		 // 	width: 50rpx;
		 // 	height: 150rpx;
			// background: #007AFF;
		 // 	border-radius: 50%;
			transform: rotate(-135deg);
		 	transition: height .2s ease-in-out;
	 }
	.add_bar{
		width: 50rpx;
		height: 50rpx;
		font-size: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #000;
		background: #8bc3ff;
		border-radius: 50%;
		position: fixed;
		right: 25rpx;
		bottom: 100rpx;
		
		&::before{
			content: '+';
			display:block;
			position: absolute;
			top: 44%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		// &:hover{
		// 	box-shadow: 4px -3px 5px #000;
		// }
		.add_bar--wrap{
			display: none;
			position: absolute;
			z-index: -2;
			width: 50rpx;
			height: 150rpx;
			border-radius: 50%;
			transition: all .2s ease-in-out;
		}
	}
</style>
