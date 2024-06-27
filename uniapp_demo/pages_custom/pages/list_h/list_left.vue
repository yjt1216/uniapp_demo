<template>
	<view class="list-left">
		<nav-bar title="左侧tabs" ></nav-bar>
		<view class="search-warp">
			<view> 搜索框</view>
		</view>
		<view class="center-warp">
			<scroll-view class="left-warp" :scroll-y="true">
				<view class="tab-box" :class="{active:0==tabIndex}" v-for="(tab,i) in tabList" :key="i"
					@click="tabChangeClick(i)">
				{{tab}}</view>
			</scroll-view>
			<view class="right-warp">
				<mescroll-uni :fixed="false" @init="mescrollInit" @down="downCallback"
					@up="upCallback">
					<view v-for="good in goods" :id="'good'+good.id" class="good-li"  :key="good.id">
						<image class="good-img" :src="good.goodImg" mode="widthFix"/>
						<view class="flex-item">
							<view class="good-name">{{good.goodName}}</view>
							<text class="good-price">{{good.goodPrice}} 元</text>
							<text class="good-sold">已售{{good.goodSold}}件</text>
						</view>
					</view>
				</mescroll-uni>
			</view>
			
		</view>
		<view class="bottom-warp">底部区域</view>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"
	import {apiGoods,apiGetTabs} from "@/api/mock.js"
	export default {
		mixins:[MescrollMixin],
		data(){
			return {
				tabIndex: 0,
				tabList:[],
				goods:[],
			}
		},
		onLoad() {
			
		},
		methods:{
			upCallback(page){
				if(this.tabList.length == 0){
					apiGetTabs().then(res=>{
						this.tabList = res;
						this.mescroll.resetUpScroll();
					}).catch(err=>{
						this.mescroll.endErr();
					});
					return;
				}
				let keyword = this.tabList[this.tabIndex];
				apiGoods(page.num, page.size, keyword).then(res=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(res.list.length);
					//设置列表数据
					if(page.num == 1) this.goods = []; //如果是第一页需手动制空列表
					this.goods=this.goods.concat(res.list); //追加新数据
				}).catch(()=>{
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},
			tabChangeClick(index){
				if(this.tabIndex != index){
					this.tabIndex = index
					this.goods = []; // 先置空列表,显示加载进度条
					this.mescroll.resetUpScroll(); // 重置列表数据
				}
			}
		}
		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		/* #ifdef MP-ALIPAY */
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/* #endif */
		
		
		.list-left{
			height: 100%;
			display: flex;
			flex-direction: column;
			
			.search-warp{
				font-size: 28rpx;
				padding: 20rpx;
				text-align: center;
				background-color: #cecece;
			}
			.center-warp{
				flex: 1;
				min-width: 0;
				min-height: 0;
				border: 8rpx solid red;
				display: flex;
				
				.left-warp{
					width: 180rpx;
					height: 100%;
					background-color: #eee;
					
					.tab-box{
						font-size: 28rpx;
						padding: 28rpx;
						&.active{
							color: orange;
						}
					}
				}
				.right-warp{
					flex: 1;
					min-width: 0;
					
					.good-li{
						display: flex;
						align-items: center;
						padding: 20upx;
						border-bottom: 1upx solid #eee;
						
						.good-img{
							width: 160upx;
							height: 160upx;
							margin-right: 20rpx;
						}
						
						.flex-item{
							flex: 1;
							
							.good-name{
								font-size: 26upx;
								line-height: 40upx;
								height: 80upx;
								margin-bottom: 20upx;
								overflow: hidden;
							}
							.good-price{
								font-size: 26upx;
								color: red;
							}
							.good-sold{
								font-size: 24upx;
								margin-left: 16upx;
								color: gray;
							}
							
						}
					}
				}
				
			}
			.bottom-warp{
				padding: 20rpx;
				text-align: center;
				background-color: #ff6990;
			}
			
		}
		
	}
</style>