<template>
	<view>
		<y-navi :is-back="true">
			<view class="slot-wrap">
				<view style="display: flex;flex: 1;">
					<u-icon name="search"></u-icon>
					<input type="text" v-model="value">
				</view>
				<view class="btn-search" @click="openSearch(value)">搜索</view>
			</view>
		</y-navi>
	</view>
</template>

<script>
	let that = null;
	import yNavi from "bundle_c/components/y-navi/y-navi.vue"
	export default {
		components:{
			yNavi
		},
		data(){
			return {
				value:'',
				history:new Set(),
				newHistory:[],
				searchHistory:[],
				items:[]
			}
		},
		onLoad: () => {
			
		},
		methods:{
			openSearch(e){
				console.log('搜索',e);
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white
	}
	.slot-wrap{
		display: flex;
		flex: 1;
		background-color: #fee9d2;
		height: 60rpx;
		border-radius: 30rpx;
		padding: 0rpx 20rpx;
		align-items: center;
		margin: 0rpx 20rpx;
	}
	.btn-search{
		height: 50rpx;
		border-radius: 25rpx;
		line-height: 50rpx;
		text-align: center;
		background-color: #FA800A;
		padding-left: 20rpx;
		padding-right: 20rpx;
		color: white;
	}
	
	.grid-box{
		overflow: hidden;
	}
	
	.item-gray{
		background-color: #dcddde;
		color: black;
		float: left;
		height: 60rpx;
		border-radius: 15rpx;
		width: 25%;
		margin: 10rpx;
		line-height: 60rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		text-align: center;
		align-items: center;
	}
	
	.item-light{
		background-color: #fee9d2;
		color: black;
		float: left;
		height: 60rpx;
		border-radius: 15rpx;
		width: 25%;
		margin: 10rpx;
		line-height: 60rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		text-align: center;
		align-items: center;
	}
</style>