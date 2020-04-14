<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		      </view>
		<view :class="pre?'preView':'all'" >
			<text class="time">{{hours}}<text class="dot" :id="dot?'black':'none'">:</text>{{minutes}}.<text class="seconds">{{seconds}}</text></text>
			<image :class="pre?'preLogo':'logo'" src="/static/cat.gif" @click="noPre"></image>
		</view>
		<button type="primary" plain="true"  @click="all">全屏</button>
	</view>
</template>

<script>
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
		onShow() {
			this.time()
		},
		onHide() {
			this.clear()
		},
		onLoad() {

		},
		onPullDownRefresh() {
		        console.log('refresh');
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
		    },
		methods: {
			noPre(){
				this.pre = true
			},
			all(){	
				uni.setKeepScreenOn({
					success:(res)=>{console.log(res)},
				    keepScreenOn: true
				});
				this.pre = false
				
			},
			clear(){
				clearInterval(this.timer)
			},
			pad(params){
				if(params<9){
					return '0'+params
				} else{
					return params
				}
			},
			time(){
				let temp = null
				this.timer = setInterval(()=>{
					temp = new Date()
					this.seconds = this.pad(temp.getSeconds())
					if(this.hours !== temp.getHours()){
						this.hours = this.pad(temp.getHours())
					}
					if(this.minutes !== temp.getMinutes()){
						this.minutes = this.pad(temp.getHours())
					}
					
					this.dot = !this.dot
				},999)
			}
		}
	}
</script>

<style>
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
	.seconds{
		font-size: 100rpx;
		color: #dbdb2a;
	}
	.all{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 999;
		font-size: 100px;
		background: #000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#black{
		color: #000;
	}
	.time{
		color: #fff;
		bottom: 0;
	}
	.preView{
		height: 200px;
		width: 100%;
		font-size: 200rpx;
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
		height: 200rpx;
		width: 200rpx;
	}
	.logo {
		position: absolute;
		border-radius: 50%;
		top: 0;
		right: 0;
		height: 500rpx;
		width: 500rpx;
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
