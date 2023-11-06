<template>
	<view>
		<nav-bar title="横向list"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<u-scroll-list :indicator="indicator" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
		    <view class="item-im" v-for="(item, index) in list" :key="index">
		        <!-- <image :src="item.thumb"></image> -->
				<image :src="listImageH" style="width: 330rpx; height: 183rpx; background-color: #eeeeee;"></image>
		    </view>
		</u-scroll-list>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                indicator: false, //滑动显示条
                list: [{
                    thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
                }, {
                    thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
                }, {
                    thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
                }, {
                    thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
                }, {
                    thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
                }],
				listImageH:'/static/list_h.png',
            }
        }
    }
</script>

<style>
	.item-im{
		margin: 30rpx;
		width: 330rpx;
		height: 183rpx;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>