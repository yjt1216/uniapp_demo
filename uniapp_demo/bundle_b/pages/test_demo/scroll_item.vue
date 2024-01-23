<template>
	<view class="main">
		<u-navbar title="滚动" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		  <view class="address-book-container">
		    <!-- 左侧通讯录 -->
		    <scroll-view class="scroll-container" scroll-y="true" :scroll-into-view="toView" scroll-with-animation="true">
		      <view class="address-book" v-for="(item, index) in addressBook" :key="index" :id="item.id">
		        <view class="address-book-index">{{ item.id }}</view>
		        <view class="contact-container" v-for="(item, index) in item.data" :key="index">
		          <img class="contact-img" src="http://www.lixia.gov.cn/picture/0/s_97b76c734a6f40f8abba95615cbff1e1.jpg" alt="" />
		          <view class="contact-detail-container">
		            <view class="contact-name">{{ item.zh_title }}</view>
		            <view class="contact-address">{{ item.address }}</view>
		            <view class="contact-phone">{{ item.phone }}</view>
		          </view>
		        </view>
		      </view>
		    </scroll-view>
		 
		    <!-- 右侧字母导航条 -->
		    <view class="letter-nav">
		      <view class="item" v-for="(item, index) in indexList" :key="index" @click="toSelectIndex(item)">{{ item }}</view>
		    </view>
		  </view>
	</view>
</template>
<script>
	export default {
		data(){
			return {
				indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
				'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
				toView: '',
			}
		},
		onLoad:function(){
			
		},
		methods:{
		    toSelectIndex(item){
		        this.toView = item
		    }
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		display: flex;
		justify-content: space-between;
		width: 100vw;
		height: calc(100vh - 44px);
		.left-content{
			margin-top: 180rpx;
			width: 250rpx;
			height: 100%;
			background-color: #E7E7E7;
			.left-item{
				width: 100%;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
			}
		}
		.activeItem{
			background-color: #fff;
			color: skyblue;
		}
		.right-content{
			margin-top: 180rpx;
			flex: 1;
			height: 100%;
			background-color: #f4f4f4;
		}
	}
	
	.content-item{
		width: 100%;
		height: 200rpx;
		background-color: aqua;
		margin-top: 20rpx;
	}
	.title{
		padding: 15px 0 0 10px;
	}
</style>