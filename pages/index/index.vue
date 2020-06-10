<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view :class="pre?'preView':'all'" ref="pre">
			<image :class="pre?'preLogo':'logo'" src="/static/cat.gif" @click="noPre"></image>
			<text class="time" v-show="nowTime">{{ nowTime }}</text>
		</view>
		<button type="primary" plain="true"  @click="all">全屏显示</button>
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
			//	取消全屏
			noPre(){
				this.pre = true
				plus.navigator.setFullscreen(false);
				plus.screen.unlockOrientation();
				uni.showTabBar({animation:true})
			},
			//	全屏
			all(){	
				uni.setKeepScreenOn({
					success:(res)=>{console.log(res)},
				    keepScreenOn: true
				});
				plus.navigator.setFullscreen(true);
				plus.screen.lockOrientation("landscape");
				this.hidetabBar()
				this.pre = false
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

<style scoped>
	.button{
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	 .status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	.title{
		height: 30px;
		color: #000;
	}
	
	#black{
		color: #000;
	}
	.time{
		color: #fff;
		bottom: 0;
		text-shadow: 2rpx 2rpx 4rpx #FFFFFF;
	}
	
	.all{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 999;
		font-size: 100px;
		background: #000;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		font-size: 300rpx;
	}
	.preView{
		height: 200px;
		width: 100%;
		font-size: 150rpx;
		background: #000;
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
		right: 0;
		height: 100rpx;
		width: 100rpx;
		z-index: 0;
	}
	.logo {			
		position: absolute;
		top: 0;
		right: 5rpx;
		border-radius: 50%;
		height: 150rpx;
		width: 150rpx;
		border: 1px dashed #fff;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
