<template>
	<view>
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		21 Days Plan
	</view>
</template>

<script>
	export default {
		onLoad() {
			// this.hidetabBar();
		},
		methods:{
			hidetabBar(){
				uni.hideTabBar({
					animation:true,
					success: ()=>{console.log('tabBar隐藏')},
					fail:()=>{console.log('tabBar隐藏失败')},
					complete:()=>{console.log('tabBar隐藏函数调用结束')}
				})
			}
		}
	}
</script>

<style>
	.status_bar {
	     height: var(--status-bar-height);
	     width: 100%;
	 }
</style>
