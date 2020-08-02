<template>
	<view class="content">
		<view class="status_bar" v-show="pre"> <!-- 这里是状态栏 --></view>
		<view :class="pre?'preView':'full'" ref="pre">
			<image :class="pre?'preLogo':'logo'" src="/static/cat.gif" @click="isFull"></image>
			<text class="time" v-show="nowTime">{{ nowTime }}</text>
		</view>
		<TODO/>
	</view>
</template>

<script>
	import TODO from "../../components/todo.vue";
	export default {
		data() {	
			return {
				timer:'',
				nowTime:'',
				hours:'',
				minutes:'',
				seconds:'',
				dot:true,
				pre:true
			}
		},
		components:{
			TODO
		},
		onShow() {
			this.timer = setInterval(()=>{this.time();},999);
			this.showTabBar()
			// const innerAudioContext = uni.createInnerAudioContext();
			// innerAudioContext.autoplay = true;
			// innerAudioContext.loop = true;
			// innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
			// innerAudioContext.onPlay(() => {
			//   console.log('开始播放');
			// });
			// innerAudioContext.onError((res) => {
			//   console.log(res.errMsg);
			//   console.log(res.errCode);
			// });
		},
		onHide() {
			this.clear()
		},

		onPullDownRefresh() {
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
		    },
		methods: {
			showTabBar(){
				uni.showTabBar({ animation:true })
			},
			hidetabBar(){
				uni.hideTabBar({ animation:true })
			},
			isFull(){
				//	全屏
				if(this.pre){
					uni.setKeepScreenOn({
					success:(res)=>{console.log(res)},
				    keepScreenOn: true
				});
				plus.navigator.setFullscreen(true);
				plus.screen.lockOrientation("landscape");
				this.hidetabBar()
				this.pre = false
				}else{
					//	取消全屏
					this.pre = true
					plus.navigator.setFullscreen(false);
					plus.screen.unlockOrientation();
					uni.showTabBar({animation:true})
				}
				
				
			},
			
			//	清除获取时间的定时器
			clear(){
				clearInterval(this.timer)
			},
			//	获取当前时间
			time(){
				let temp = null;		
					temp = new Date();
					this.nowTime = temp.toTimeString().split(' ')[0];
			},
			//	定时启动震动与声音
			vibrate(){
				uni.vibrateLong({
								    success: function () {
								        console.log('success');
								    },
										complete: ()=>{
											console.log('进来了');
										}
								});
			}
			
			}
	}
</script>

<style lang="scss" scoped>
.content{
	overflow-x: hidden;
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	
	.time{
		color: white;
		bottom: 0;
		text-shadow: 2rpx 2rpx 4rpx white;
	}
	
	.full{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 999;
		font-size: 100px;
		background: black;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		font-size: 300rpx;
	}
	.preView{
		height: 200px;
		width: 100%;
		border-radius: 20rpx;
		border: 1rpx solid white;
		font-size: 150rpx;
		background: rgba(255, 253, 253, 0.52);
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
	.preLogo{
		position: absolute;
		border-radius: 50%;
		top: 0;
		right: 1px;
		height: 100rpx;
		width: 100rpx;
		z-index: 0;
		&::after{
			content:"<";
			font-size: 25rpx;
			color: white;
			position: absolute;
			top: 4px;
			left: 4px;
			transform: rotate(45deg);
		}
		&::before{
			content:">";
			font-size: 25rpx;
			color: white;
			position: absolute;
			bottom: 4px;
			right: 4px;
			transform: rotate(45deg);
		}
	}
	.logo {			
		position: absolute;
		top: 0;
		right: 5rpx;
		border-radius: 50%;
		height: 150rpx;
		width: 150rpx;
		border: 1px dashed #fff;
		&::after{
			content:">";
			font-size: 25rpx;
			color: white;
			position: absolute;
			top: 4px;
			left: 20px;
			transform: rotate(45deg);
		}
		&::before{
			content:"<";
			font-size: 25rpx;
			color: white;
			position: absolute;
			bottom: 4px;
			right: 20px;
			transform: rotate(45deg);
		}
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
}
</style>
