<template>
    <view>
        <!-- /hybrid/html/local.html?data=111  向内传值 -->
        <!-- <web-view :webview-styles="webviewStyles" src="/static/test.html" @message="getMessage"></web-view> -->
		
		<!-- <web-view :webview-styles="webviewStyles" src="/static/pay.htm" @message="getMessage"></web-view> -->
		
		<web-view :webview-styles="webviewStyles" :src="link" @message="getMessage">
			<view class="test-view">link</view>
		</web-view>
    </view> 
</template>


<script>
	export default {
		data() {
		    return { 
		        webviewStyles: {
		            progress: {  // 加载网络地址是 进度条样式
		                color: '#46be8a',
						width:'100%'
		            },
					width:300,
					height:600
		        },
				link:'http://222.92.38.178:8091/view-article/fb0ece5c17a8bb2f193b0a66dc770cd4',
		    }
		},
		methods:{
		    getMessage(e) {
		        //从 /hybrid/html/local.html中接收到的消息
		        console.log('接收到的消息：' + JSON.stringify(e.detail.data));
		    },
		   
		}

	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
		background-color: antiquewhite;
	}
	.test-view{
		z-index: 99999;
	}
</style>