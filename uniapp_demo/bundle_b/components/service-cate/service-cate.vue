<template>
	<view class="service-cate">
		<view class="cate-list-box" v-if="!cateExpanded">
			<view class="cate-item-box" v-for="(item, index) in serviceCateList.slice(0, 3)" :key="index"
				@click="serviceCateItemClick(item)">
				<view class="cate-top">
					<view v-if="dataType === '1'" style="font-weight: 500;">{{item.cate_name}}</view>
					<view v-if="dataType === '2'" style="font-weight: 500;">{{item.hospital_name}}</view>
					<view v-if="dataType === '3'" style="font-weight: 500;">{{item.name}}</view>
					<view v-if="dataType === '4'" style="font-weight: 500;">{{item.city_name}}</view>
					<view class="cate-top-right">
						<view style="font-weight: 500;">{{item.num}}</view>
						<view class="line-space"></view>
						<view style="font-weight: 500;">{{item.ratio}}%</view>
					</view>
				</view>
				<view class="cate-bottom uni-padding-wrap">
					<progress style="flex: 1;"  :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
					<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
				</view>
			</view>
		</view>
		
		<!-- 展开时显示所有项 -->
		<view class="cate-list-box" v-else>
			<view class="cate-item-box" v-for="(item, index) in serviceCateList" :key="index" 
				@click="serviceCateItemClick(item)">
				<view class="cate-top">
					<view v-if="dataType === '1'" style="font-weight: 500;">{{item.cate_name}}</view>
					<view v-if="dataType === '2'" style="font-weight: 500;">{{item.hospital_name}}</view>
					<view v-if="dataType === '3'" style="font-weight: 500;">{{item.name}}</view>
					<view v-if="dataType === '4'" style="font-weight: 500;">{{item.city_name}}</view>
					<view class="cate-top-right">
						<view style="font-weight: 500;">{{item.num}}</view>
						<view class="line-space"></view>
						<view style="font-weight: 500;">{{item.ratio}}%</view>
					</view>
				</view>
				<view class="cate-bottom">
					<progress style="flex: 1;" :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
					<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
				</view>
			</view>
		</view>
					
		<!-- 展开收起按钮 -->
		<button @click="toggleCateExpand">{{ cateExpanded ? '收起' : '展开' }}</button>
		
		<uni-popup ref="infoPop" type="center" :isMaskClick="true" @touchmove.stop.prevent="disabledScroll">
		    <view class="info-box" @touchmove.stop.prevent="disabledScroll">
				<view class="cate-top" style="margin-top: 30rpx;">
					<view style="font-weight: 500; font-size: 32rpx;">{{selectCateItem.cate_name}}</view>
					<view class="cate-top-right">
						<view style="font-weight: 500;">{{selectCateItem.num}}</view>
						<view class="line-space"></view>
						<view style="font-weight: 500;">{{selectCateItem.ratio}}%</view>
					</view>
				</view>
				<view class="table-head">
					<view class="head-name" style="font-size: 28rpx; color: darkgray;">机构名称</view>
					<view class="head-rate" style="font-size: 28rpx; color: darkgray;">占比</view>
					<view class="head-amount" style="font-size: 28rpx; color: darkgray;">数量</view>
				</view>
				<view class="table-content" >
					<view class="content-item" v-for="(item, index) in selectServiceList" :key="index">
						<view class="head-name" style="font-size: 26rpx;">{{ item.item_name }}</view>
						<view class="head-rate" style="font-size: 26rpx;">{{ item.amount }}</view>
						<view class="head-amount" style="font-size: 26rpx;">{{ item.num }}</view>
					</view>
				</view>
			</view>
		</uni-popup>
		
		
	</view>
</template>

<script>
	
	import serviceData from "@/sheep/mock/serviceData.json";
	
	export default{
		props:{
			/* 服务项目分类 */
			serviceCateList:{
				type: Array,
				default(){
					return []
				}
			},
			/* 类型 服务项目1 护士数机构分布2  患者年龄分布3 机构分布4 */
			dataType:{
				type: String,
				default(){
					return '1'
				}
			},
		},
		data(){
			return{
				/* 根据cateExpanded状态决定是否展示所有item 初始默认为收起状态false */
				cateExpanded: false, 
				/* 用户选择item */
				selectCateItem:{},
				selectServiceList:[],
			}
		},
		mounted:function(){
			
		},
		methods:{
			/* 弹窗时防止遮罩下面滑动 */
			disabledScroll(){
				console.log('滚动');
			    return false;
			},
			toggleCateExpand() {
			    this.cateExpanded = !this.cateExpanded;
			},
			serviceCateItemClick(item){
				this.selectCateItem = item;
				this.getMock();
			},
			getMock(){
				setTimeout(()=>{
					var result = JSON.parse(JSON.stringify(serviceData));
					this.selectServiceList = result;
					this.$refs.infoPop.open();
				},300);
			},
		}
	}
</script>

<style lang="scss">
	
	.info-box{
		background: #fff;
		width: 540rpx;
		height: 480rpx;
		padding: 0 30rpx;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		// justify-content: center;
	}
	.info-top{
		font-size: 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.table-head{
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 480rpx;
	}
	
	.table-content{
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		width: 480rpx;
		// height: 300rpx;
	}
	.head-name{
		
		width: 280rpx;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1; /* 限制显示1行 */
		-webkit-box-orient: vertical; /* 设置为竖直排布 */
	}
	.head-rate{
		margin-left: 6rpx;
		
		width: 100rpx;
		text-align: center;
	}
	.head-amount{
		margin-left: 6rpx;
		
		width: 100rpx;
		text-align: center;
	}
	.content-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	
	
	.cate-item-box{
		display: flex;
		flex-direction: column;
		height: 100rpx;
		margin-bottom: 10rpx;
	}
	.cate-top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.cate-top-right{
		display: flex;
		flex-direction: row;
		padding-right: 10rpx;
	}
	.cate-bottom{
		display: flex;
		flex-direction: row;
	}
	.cate-list-box{
		margin-top: 20rpx;
	}
	.line-space{
		margin: 0 10rpx;
		height: 30rpx;
		width: 3rpx;
		background-color: #333;
	}
</style>