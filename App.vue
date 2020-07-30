<script>
	import { mapActions } from 'vuex';
	export default {
		globalData:{
			bg:[]
		},
		onLaunch: function() {
			// ImageResolution.aspx?w=375&h=667
			//	https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&nc=1596091782486&pid=hp
			let body = document.getElementsByClassName('uni-body')[0]
			body.style['background'] = "url(https://cn.bing.com//th?id=OHR.HamerkopHunting_ZH-CN3632585255_480x800.jpg&rf=LaDigue_1920x1080.jpg&pid=hp) no-repeat";
			body.style['backgroundSize'] = "100% 100%"
			console.log(new Map())
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
	uni-page-body{
		height: 100%;
		width: 100%;
	}
</style>
