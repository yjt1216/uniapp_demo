<template>
	<view class="user-sign">
		
		<!-- <u-cell-item title="保险信息" :arrow="false" style="color: #000000;"><view class="tip-color">免费为服务对象投保中国人寿意外险</view></u-cell-item> -->
		<u-gap height="10" bg-color="#fff1e3" margin-top="20"></u-gap>
		<view class="user-content title">
			签名确认
		</view>
		<view class=" tip-sign" @click="showSign" v-show="showimg.length==0">
			点击此处签名确认
		</view>
		<image class="u-margin" :src="showimg" v-show="showimg.length>0" @click="showSign"></image>
		
		<u-popup v-model="showPop" mode="center" border-radius="14" closeable="true">
			<view class="pop">
				<canvas class="pop-sign" disable-scroll="true" @touchstart="uploadScaleStart" @touchmove="uploadScaleMove"
				  @touchend="uploadScaleEnd" @tap="mouseDown" canvas-id="handWriting">
				</canvas>
				<view class="u-row sign-btn-box">
					<button @click="retDraw" class="delBtn">重写</button>
					<button @click="subCanvas" class="subBtn">保存</button>	
				</view>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	let that = null;
	
	import Handwriting  from '@/common/signature.js';
	
	export default{
		
		data(){
			return{
				showPop:false,
				showimg:'',
				lineColor:'black',
				slideValue:50,
				handwriting:'',
			}
		},
		created() {
			that = this
		},
		onLoad(option) {
			
			that.handwriting = new Handwriting({			
			  lineColor: that.lineColor,
			  slideValue: that.slideValue, // 0, 25, 50, 75, 100
			  canvasName: 'handWriting',
			})
		},
		methods:{
			uploadScaleStart(event){
				that.handwriting.uploadScaleStart(event)
				
			},
			uploadScaleMove(event){
				that.handwriting.uploadScaleMove(event)
			},
			uploadScaleEnd(event){
				that.handwriting.uploadScaleEnd(event)
			},
			
			showSign(){
				that.showPop = true
			},
			retDraw() {
				this.handwriting.retDraw()
			},
			subCanvas(){
				this.showPop=false
				this.handwriting.saveCanvas().then(res=>{
					this.showimg = res;
					console.log('subCanvas res',res);
				}).catch(err=>{
					console.log('subCanvas err',err)
				});		  	  
					  
			},
			
			reservation(){
				
				if(this.showimg.length==0){
					uni.showToast({
						icon:'none',
						title:'请签字'
					})
					return
				}
				
				
				let count = 0
				if(that.intentData.model.imageFile.length >0){
					that.uploadImage(count)
				}else{
					that.uploadSign()
				}
			},
			
			uploadSign(){
				console.log('签名上传',this.showimg)
				
			}
			
		},
		
	}
</script>

<style>
	.user-content{
		margin: 20rpx;
	}
	.tip-color{
		color: #000000;
		font-weight: bold;
	}
	.title{
		color: #000000;
		font-weight: bold;
	}
	
	
	.item-tip{
		color: #999999;
		align-self: flex-end;
		align-items: flex-end;
	}
	
	.tip-sign{
		height: 260rpx;
		text-align: center;
		line-height: 260rpx;
		color: #999999;
	}
	.tip-agreement{
		display: flex;
		flex-direction: row;
		margin-left: 20rpx;
		padding-bottom: 130rpx;
	}
	
	
	.u-row{
		display: flex;
		flex-direction: row;
	}
	
	.pop{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 600rpx;
	}
	.pop-sign{
		width: 600rpx;
		height: 400rpx;
		margin-top: 50rpx;
	}
	.sign-btn-box{
		width: 100%;
		justify-content: space-between;
	}
	.delBtn{
		background-color: #fff1e3;
		width: 50%;
		height: 50rpx;
		margin: 20rpx;
		color: #FA800A;
		font-size: 25rpx;
		line-height:50rpx;
	}
	.subBtn{
		background-color: #FA800A;
		width: 50%;
		height: 50rpx;
		margin: 20rpx;
		color: #FFFFFF;
		font-size: 25rpx;
		line-height:50rpx;
	}
	
	
</style>
