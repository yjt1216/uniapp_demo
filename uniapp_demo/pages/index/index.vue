<template>
	<view class="index-page">
		<!-- <u-navbar title="首页" bgColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></u-navbar> -->
		<nav-bar title="首页" :back="false"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<!-- <view class="banner">
			<ad-swipers height="340rpx" :lists="bannerList"></ad-swipers>
		</view> -->
		
		
		<view class="group-title">功能示例</view>
		
		
		<navigator url="/bundle_c/pages/amap_location/amap_location">
			<view class="demo-li"> 高德地图 <text class="demo-tip"> amap </text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/map_demo/map_demo">
			<view class="demo-li"> 腾讯地图 <text class="demo-tip"> chooseLocation </text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/operate/operate_demo">
			<view class="demo-li"> 经营统计 <text class="demo-tip"> table + charts </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/upload_img/upload_photo">
			<view class="demo-li">上传照片<text class="demo-tip"> 选择图片</text></view>
		</navigator>
		<navigator url="/bundle/pages/action_sheet/action_sheet">
			<view class="demo-li">输入<text class="demo-tip"> textarea</text></view>
		</navigator>
		<!-- 
		<navigator url="/bundle_b/pages/chart_demo/echart_demo">
			<view class="demo-li"> 圆环图 <text class="demo-tip"> echart </text></view>
		</navigator>
		<navigator url="/bundle_b/pages/chart_demo/chart_ring">
			<view class="demo-li"> 圆环图 <text class="demo-tip"> chart_ring </text></view>
		</navigator>
		<navigator url="/bundle_b/pages/chart_demo/chart_map">
			<view class="demo-li"> 地图 <text class="demo-tip"> chart_map </text></view>
		</navigator>
		<navigator url="/bundle_b/pages/chart_demo/china_map">
			<view class="demo-li"> 地图 <text class="demo-tip"> china_map </text></view>
		</navigator>
		<navigator url="/bundle_b/pages/chart_demo/chart_demo">
			<view class="demo-li"> 统计图 <text class="demo-tip"> chart_demo </text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/segment_demo/segment_demo">
			<view class="demo-li"> 分段 <text class="demo-tip"> segment_demo </text></view>
		</navigator>
		
		
		<navigator url="/bundle_b/pages/filter_date/filter_date">
			<view class="demo-li"> 筛选日期 <text class="demo-tip"> filter </text></view>
		</navigator>
		<navigator url="/bundle_b/pages/test_demo/scroll_item">
			<view class="demo-li"> 滚动特定item <text class="demo-tip"> scroll_item </text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/test_demo/test_demo">
			<view class="demo-li"> 蓝湖代码 <text class="demo-tip"> test_demo </text></view>
		</navigator>
		<navigator url="/pages/login/login">
			<view class="demo-li"> 登陆 <text class="demo-tip"> login </text></view>
		</navigator>
		<navigator url="/pages/login/login_example">
			<view class="demo-li"> 登陆 <text class="demo-tip"> login example </text></view>
		</navigator>
		<view @click="shareClick">
			<view class="demo-li"> 分享 <text class="demo-tip"> 点击share </text></view>
		</view>
		
		<navigator url="/bundle_b/pages/input_demo/input_demo">
			<view class="demo-li"> 输入框<text class="demo-tip"> input </text></view>
		</navigator>
		
		
		<navigator url="/bundle/pages/mescroll_swiper/mescroll_swiper">
			<view class="demo-li">轮播图+商品列表 吸顶悬浮<text class="demo-tip">切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		<navigator url="/bundle/pages/nurse_order/nurse_order">
			<view class="demo-li">护士订单<text class="demo-tip">可整体滑动 切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/service_order/service_order">
			<view class="demo-li">服务订单<text class="demo-tip"> 切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/loading_page/loading_page">
			<view class="demo-li">数据list 刷新加载<text class="demo-tip"> z-pagings</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/action_sheet/action_sheet">
			<view class="demo-li">action sheet<text class="demo-tip"> 选择 </text></view>
		</navigator> 
		
		<navigator url="/bundle/pages/sign_page/vertical_sign">
			<view class="demo-li">竖屏签名<text class="demo-tip"> 签名界面</text></view>
		</navigator>
		<navigator url="/bundle/pages/sign_page/landscape_sign">
			<view class="demo-li">横屏签名<text class="demo-tip"> 签名界面</text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/huabi/autograph_test">
			<view class="demo-li">签名<text class="demo-tip"> test</text></view>
		</navigator>
		
		<navigator url="/pages/html_test/html_test">
			<view class="demo-li">测试本地html<text class="demo-tip"> html_test</text></view>
		</navigator>
		<navigator url="/pages/web_view/informed_consent">
			<view class="demo-li"> 知情同意书 <text class="demo-tip"> web view 底部按钮 </text></view>
		</navigator>
		<navigator url="/pages/web_view/webview_test">
			<view class="demo-li"> 底部按钮 <text class="demo-tip"> web view  </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/list_input/list_input">
			<view class="demo-li">input<text class="demo-tip"> 循环创建input 底部签名 返回文件路径</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/appraise_form/appraise_form">
			<view class="demo-li">评估表单<text class="demo-tip"> 填空 单选 多选 签名</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/header_footer/header_footer">
			<view class="demo-li">头部底部<text class="demo-tip"> 头部 数据列表list 底部 </text></view>
		</navigator> -->
		
		<!-- 
		<navigator url="/bundle/pages/take_photo/take_photo">
			<view class="demo-li">take_photo<text class="demo-tip"> take photo </text></view>
		</navigator> -->
		<!-- <navigator url="/bundle/pages/tag_page/tag-page">
			<view class="demo-li">tag_page<text class="demo-tip"> tag </text></view>
		</navigator>
		<navigator url="/bundle/pages/choose_photo/choose_photo">
			<view class="demo-li"> choose photo<text class="demo-tip"> 选择图片 </text></view>
		</navigator> -->
		
		<!-- <navigator url="/bundle/pages/choose_date/choose_date">
			<view class="demo-li"> choose date<text class="demo-tip"> 日期picker </text></view>
		</navigator> 
		<navigator url="/bundle/pages/pop_box/pop_box">
			<view class="demo-li"> pop_box<text class="demo-tip"> 弹窗 </text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/keyboard_pop/keyboard_pop">
			<view class="demo-li"> 键盘弹框顶起底部空间<text class="demo-tip"> keyboard </text></view>
		</navigator>
		
		
		<navigator url="/bundle/pages/upload_img/upload_photo">
			<view class="demo-li">upload photo<text class="demo-tip"> 压缩并保存图片 </text></view>
		</navigator>
		
		
		<navigator url="/bundle/pages/list_h/list_h">
			<view class="demo-li"> list h<text class="demo-tip"> 水平滚动 </text></view>
		</navigator>
		<navigator url="/bundle/pages/list_h/list_water">
			<view class="demo-li"> list water<text class="demo-tip"> 瀑布流 </text></view>
		</navigator>
		<navigator url="/bundle/pages/list_h/list_left">
			<view class="demo-li"> list left<text class="demo-tip"> 左侧tabs </text></view>
		</navigator>
		
		
		<navigator url="/bundle_b/pages/lesson_play/lesson_play">
			<view class="demo-li"> lesson action<text class="demo-tip"> 视频播放 </text></view>
		</navigator>
		<navigator url="/bundle/pages/video_player/video_player">
			<view class="demo-li"> video player<text class="demo-tip"> video_player </text></view>
		</navigator>
		
		
		<navigator url="/bundle_b/pages/chart_demo/chart_demo">
			<view class="demo-li"> chart统计 <text class="demo-tip"> 统计图 </text></view>
		</navigator> 
		
		
		<navigator url="/bundle_b/pages/pay/pay_page">
			<view class="demo-li"> 支付UI <text class="demo-tip"> pay </text></view>
		</navigator>
		<navigator url="/bundle_b/pages/weixin_openid/weixin_openid">
			<view class="demo-li"> 微信公众号 <text class="demo-tip"> open id </text></view>
		</navigator>
		
		<navigator url="/bundle_b/pages/spread_code/spread_code">
			<view class="demo-li"> 二维码生成 <text class="demo-tip"> QR code </text></view>
		</navigator> 
		
		<navigator url="/bundle/pages/card_list/card_list">
			<view class="demo-li"> 卡片list<text class="demo-tip"> 卡片 </text></view>
		</navigator>
		
		
		
		<navigator url="/bundle/pages/user-intro/user-intro">
			<view class="demo-li"> user-intro<text class="demo-tip"> user-intro </text></view>
		</navigator> -->
		
		<!-- <navigator url="/bundle/pages/video_live/video_live">
			<view class="demo-li"> video live <text class="demo-tip"> 直播 测试 </text></view>
		</navigator> -->
		
		<!-- <navigator url="/bundle/pages/drop_down/drop_down">
			<view class="demo-li"> drop_down <text class="demo-tip"> 筛选 </text></view>
		</navigator>
		
		
		<navigator url="/bundle/pages/wallet/wallet">
			<view class="demo-li"> wallet <text class="demo-tip"> 我的钱包 </text></view>
		</navigator> -->
		
		<!-- <y-tabbar ref="tabbar" native></y-tabbar> -->
		
	</view>
</template>

<script>
import localStore from '../../sheep/config/local_store';
	
	export default {
		data(){
			return {
				bannerList:[
					{
						image: "https://didi.depin.tech/storage/file/2019/09/29/5d904d42e3222.jpg"
					},
					{
						image: "https://didi.depin.tech/storage/file/2019/09/29/5d90512bccb32.jpg"
					}
				],
				bannerImages:[],
				code:'',
				state:'',
			}
		},
		mounted(option) {
			// console.log('index on mounted ',option);
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: 'mescroll ('+ uni.getSystemInfoSync().platform + ')'
			})
			
			// console.log('index on load ',option);
			//    await Cache.set('user_info', { name: 'John Doe', age: 30 }, 60);
			
			this.getUserInfo();
			
			
		},
		methods:{
			async getUserInfo(){
				const userInfo = await localStore.get('user_info');
				console.log('首页getUserInfo--userInfo',userInfo);
			},
			shareClick(){
				this.$share.share({
				  title: '分享标题',
				  content: '分享内容',
				  imageUrl: '分享图片链接',
				  url: '分享链接',
				  success: () => {
				    console.log('分享成功')
				  },
				  fail: (err) => {
				    console.log('分享失败', err)
				  }
				})

			}
			
			
		}
		
	}
</script>

<style lang="scss">
	.index-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.group-title {
		font-size: 30upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: red;
	}
	
	.demo-li {
		font-size: 28upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: #18B4FE;
	}
	.demo-li .demo-tip {
		float: right;
		margin-top: 4upx;
		font-size: 24upx;
		color: gray;
	}
	
</style>