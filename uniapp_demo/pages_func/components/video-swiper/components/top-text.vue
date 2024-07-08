<template>
	<view>
		<view v-if="show" class="top-text">
			<view v-if="place!=''" class="box" @click="setActive(0)">
				<view class="text-box">
				    <text :class="active == 0 ? 'text-active' : 'text' ">{{place}}</text>
				    <text :class="active == 0 ? 'text-border-active':'text-border'"></text>
				</view>
				<view class="num-box" v-if="place_num!=0">
					<text class="num">{{place_num}}</text>
				</view>
			</view>
			<view v-if="place!=''"  class="box-line">
				<text class="text"></text>
			</view>
			<view class="box" @click="setActive(1)">
				<view class="text-box">
				    <text :class="active == 1 ? 'text-active' : 'text' ">关注</text>
				    <text :class="active == 1 ? 'text-border-active':'text-border'"></text>
				</view>
				<view class="num-box" v-if="follow_num!=0">
					<text class="num" >{{follow_num}}</text>
				</view>
			</view>
			<view class="box-line">
				<text class="text"></text>
			</view>
			<view class="box" @click="setActive(2)">
				<view class="text-box">
				    <text :class="active == 2 ? 'text-active' : 'text' ">推荐</text>
				    <text :class="active == 2 ? 'text-border-active':'text-border'"></text>
				</view>
				<view class="num-box" v-if="recommend_num!=0">
					<text class="num" >{{recommend_num}}</text>
				</view>
			</view>
		</view>
		<view @click="live" v-if="show && liveStatus"  class="left-text">
			<text class="iconfont iconfont-size">&#xe605;</text>
		</view>
		<view @click="search"  v-if="show"  class="right-text">
			<text class="iconfont iconfont-size">&#xe612;</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				city:'',
				place_num: 0,
				follow_num: 0,
				recommend_num: 0,
				place:'',
				active:2,
				show:false,
				liveStatus:true
			}
		},
		methods:{
			setRecommendNum(num){
				this.recommend_num = num
			},
			setPlaceNum(num){
				this.place_num = num
			},
			setFollowNum(num){
				this.follow_num = num
			},
			setPlace(place){
				this.place = place
			},
			topShow(status){
				this.show = status
			},
			showLive(status){
				this.liveStatus = status
			},
			setActive(num){
				this.active = num
				this.$emit('active',num)
			},
			live(){
				this.$emit('live')
			},
			search(){
				this.$emit('search')
			}
		}
	}
</script>

<style scoped>
	.iconfont {
		font-family: iconfont;
	}
	.top-text {
		flex-direction: row;
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		z-index: 10001;
		height: 50px;
		justify-content: center;
	}

	.box {
		width: 120rpx;
		height: 90rpx;
		position: relative;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.box-line {
		width: 3rpx;
		height: 90rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.text-box{
	    align-items: center;
	    justify-content: space-between;
	    height: 60rpx;
	}
	
	.text {
		color: #FFFFFF;
		font-size: 36rpx;
	    height: 50rpx;
	}
	
	.text-active {
		font-weight: 600;
		color: #FFFFFF;
		font-size: 36rpx;
	    height: 50rpx;
	}
	
	.text-border {
	    width: 50rpx;
	    height: 8rpx;
	}
	
	.text-border-active {
	    height: 8rpx;
	    width: 50rpx;
	    background-color: #FFFFFF;
	}

	.right-text {
		position: fixed;
		top: 50px;
		right: 20px;
		z-index: 10002;
		height: 90rpx;
		flex-direction: row;
		align-items: center;
	}
	
	.left-text {
		position: fixed;
		top: 50px;
		left: 20px;
		z-index: 10002;
		height: 90rpx;
		flex-direction: row;
		align-items: center;
	}

	.left-text-style {
		color: #FAFBFF;
		font-size: 30rpx;
	}

	.num-box {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #FF1B00;
		color: #FFFFFF;
		border-radius: 30rpx;
		width: 30rpx;
		height: 30rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.num {
		color: #FFFFFF;
		font-size: 20rpx;
	}
	.iconfont-size {
		color: #FFFFFF;
		font-size: 50rpx;
		text-align: center;
		font-weight: 600;
	}
</style>
