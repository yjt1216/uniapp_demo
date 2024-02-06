<template>
	<view>
		
		<amap-choose :color="color" :keyMap="keyMap" :AMapKeyWeb="AMapKeyWeb" 
			:show="showMap" :initLocation="initLocation" 
			@placeChoose="placeChoose" @changeShow="changeShow">
		</amap-choose>
		
		<button type="primary" @click="clickBtn">map</button>
		
		<text class="title">{{chooseAddrss}}</text>
		
	</view>
</template>

<script>
	import amapChoose from "bundle_c/components/amap-choose/amap-choose.vue"
	export default {
		components:{
			amapChoose
		},
		data(){
			return {
				tabs: [
					{name:'全部'}, 
					{name:'待付款'}, 
					{name:'待服务'}, 
					{name:'待评价'},
					{name:'退款'},
				],
				tabIndex: 0 ,// 当前tab的下标
				showMap:false,
				initLocation:'120.737635,31.266634',
				//高德地图webjs的key 
				keyMap:'bb54d32661ce014f5a1bf3d8b5ef4199',
				//高德地图web服务的key
				AMapKeyWeb:"0b1f8852511cd6954ec64ad6caef928a",
				color:'#fff',
				chooseAddrss:''
			}
		},
		methods:{
			leftNavClick(){
				uni.navigateBack();
			},
			clickBtn(){
				this.showMap = true;
			},
			changeShow(statue){
				this.showMap = statue;
			},
			placeChoose(e){
				console.log('选择地址e',e);
				this.chooseAddrss = e.address;
			}
		}
	}
</script>

<style lang="scss">
</style>