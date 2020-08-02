<script>
	import { mapActions } from 'vuex';
	export default {
		globalData:{
			bg:[]
		},
		onLaunch: function() {
				}, 
		onShow: function() {
			
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* ImageResolution.aspx?w=414&h=736 */
	page{
		background: url(https://cn.bing.com/th?id=OHR.IsolaBella_ZH-CN4031046209_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4) no-repeat;
		background-size: 150% 100%;
		background-position: center;
	}
	uni-nav-bar{
		width:100%;
	}
	uni-page-body{
		height: 100%;
		width: 100%;
		background: url(https://cn.bing.com/th?id=OHR.IsolaBella_ZH-CN4031046209_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4) no-repeat;
		background-size: 150% 100%;
		background-position: center;
	}
	uni-tabbar{
		opacity: 0.5;
	}
</style>
