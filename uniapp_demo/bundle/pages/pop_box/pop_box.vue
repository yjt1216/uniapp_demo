<template>
	<view class="pop-box">
		
		<view class="list-cont">
			<scroll-view class="scrool-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
				<view class="input-pop" @click="clickPop">
					点击弹框input
				</view>
				<!-- <view class="input-pop" @click="clickPopRate">
					点击弹框rate
				</view> -->
				<view class="input-pop" @click="clickPopBoxRate">
					点击弹框box rate
				</view>
				
				<uni-card>
					<view>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</view>
					<view>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</view>
				</uni-card>
				
				
			</scroll-view>
		</view>
		
		
		
		<view class="footer">
			<button class="submit-btn"  @click="submitRate">提交评价</button>
		</view>
		
		
		
		<modal v-if="areaShow" title="新增空间" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd" @confirm="confirmAdd">
			<input type="text" v-model="areaTxt" placeholder="限填5个字" class="intxt" maxlength="5" />
		</modal>
		<!-- <modal v-if="isShowRate" title="评价患者" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd" @confirm="confirmAdd">
			<view class="sub-title">本次服务中患者是否愿意配合</view>
			<u-rate :count="5" v-model="rateValue" activeColor="#f0ad4e" inactiveColor="#666666"></u-rate>
		</modal> -->
		
		<modal class="box-pop" v-if="isShowBox" confirm-text="提交评价" cancel-text="取消评价" @cancel="cancelEvaluateFun" @confirm="submitEvaluateFun">
			<view class="box-title">评价患者</view>
			<view class="box-sub-title">本次服务中患者是否愿意配合</view>
			<u-divider hairline="true"  lineColor="#888"></u-divider>
			<view class="rate-center">
				<u-rate :count="5" v-model="boxRate" activeColor="#f0ad4e" inactiveColor="#666666"></u-rate>
			</view>
			
			<u-divider hairline="false" dashed="true" lineColor="#888"></u-divider>
			<!-- 取消 确定 -->
		</modal>
		
	</view>
</template>

<script>
	export default{
	    data(){
	        return{
	            areaShow:false,
	            areaTxt:'',
				/* 弹框 评价view */
				isShowRate: false,
				rateValue:0,
				/* u-model */
				isShowBox: false,
				boxRate: 0
	        }
	    },
	    methods: {
			cancelAdd(){
				this.areaShow = false
				this.isShowRate = false
			},
			confirmAdd(){
				this.areaShow = false
				console.log('弹框输入内容',this.areaTxt)
				this.isShowRate = false
			},
			clickPop(){
				this.areaShow = true
			},
			clickPopRate(){
				this.isShowRate = true
			},
			clickPopBoxRate(){
				this.isShowBox = true
			},
			submitRate(){
				if(this.rateValue == 0){
					uni.showToast({
						title:'请先选择评价级别',
						icon:'none'
					})
				}else{
					uni.showToast({
						title:'评价成功',
						icon:'none'
					})
				}
			},
			cancelEvaluateFun(){
				this.isShowBox = false
				console.log('取消用户评价')
			},
			submitEvaluateFun(){
				this.isShowBox = false
				console.log('提交用户评价')
			}
				
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}
	.pop-box{
		display: flex;
		flex-direction: column;
		// justify-content: center;
		// align-items: center;
		
		width: 100%;
		height: 100%;
	}
	
	.list-cont {
		flex: 1;
		position: relative;
	
		.scrool-more {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
	
		.input-pop{
			margin: 10rpx 20rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #e0e0e0;
		}
		.sub-title{
			text-align: center;
			font-size: 20rpx;
		}
		
	}
	.box-pop{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.box-title{
			text-align: center;
			color: #39C9BC;
			font-size: 32rpx;
		}
		.box-sub-title{
			text-align: center;
			color: #666;
			font-size: 24rpx;
		}
		.rate-center{
			margin-left: 30rpx;
			
		}
		
	}
	
	
	
	.footer {
		color: #fff;
		line-height: 100rpx;
		flex: 0 0 100rpx;
		/* 不放大不缩小固定100rpx */
		
		.submit-btn{
			background-image: linear-gradient(to right, #39C9BC,#6DE8CC);
			color: white;
		}
	}
</style>