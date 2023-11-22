<template>
    <view>
		<nav-bar title="uniapp video"></nav-bar>
        <view>
            <video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
                @error="videoErrorCallback" controls style="width: 100vw; height: 400rpx;"></video>
        </view>
    </view>
</template>


<script>
export default {
    data() {
        return {
            src: '',
            
        }
    },
    onReady: function(res) {
        // #ifndef MP-ALIPAY
        this.videoContext = uni.createVideoContext('myVideo')
        // #endif
    },
    methods: {
        
        videoErrorCallback: function(e) {
            uni.showModal({
                content: e.target.errMsg,
                showCancel: false
            })
        },
       
    }
}
</script>


<style lang="scss" scoped>
	
</style>