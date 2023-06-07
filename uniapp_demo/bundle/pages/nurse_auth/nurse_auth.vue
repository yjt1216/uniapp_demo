<template>
	<view class="nurse-auth">
		<nav-bar title="资质认证" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<!-- 身份证正反面 -->
		<Rboy-upload-sfz 
			:obverse-url="formData.obverseUrl" 
			:reverse-url="formData.reverseUrl" 
			@selectChange="sfz_chagne" 
			@del="del_btn">
		</Rboy-upload-sfz>
		<!-- 地区选择 -->
		
		<view class="form-info">
			<u-form labelPosition="left"  :model="formData" ref="form" label-align="left">
				<u-form-item label="所在地区" :label-style="{'font-size':'20rpx'}" labelWidth="80">
					<view class="uni-list-cell-db">
						<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
							<view>{{formData.address}}</view>
						</pick-regions>
					</view>
					<u-icon
						slot="right"
						name="arrow-right"
						color="#39C9BC"
					></u-icon>
				</u-form-item>
			</u-form>
		</view>
		
		
	</view>
</template>

<script>
	import RboyUploadSfz from '@/components/Rboy-upload-sfz/Rboy-upload-sfz.vue'
	import pickRegions from '@/components/pick-regions/pick-regions.vue'
	export default {
		components:{
			RboyUploadSfz,
			pickRegions
		},
		data(){
			return {
				// 表单
				formData: {
					// 正面
					obverseUrl: "",
					// 反面
					reverseUrl: "",
					address:'请选择地址',
				},
				/* 地区 */
				region:[],
				// defaultRegion: ['广东省','广州市','番禺区'],
				defaultRegionCode:'320505'
			}
		},
		onLoad() {
			
		},
		methods:{
			// 上传
			sfz_chagne(e) {
				if (e.name == "obverse") {
					this.formData.obverseUrl = e.tempFilePath
				} else if (e.name == "reverse") {
					this.formData.reverseUrl = e.tempFilePath
				}
				console.log('身份证formData',this.formData)
			},
			// 删除
			del_btn(e) {
				if (e.name == "obverse") {
					this.formData.obverseUrl = ""
				} else if (e.name == "reverse") {
					this.formData.reverseUrl = ""
				}
			},
			handleGetRegion(region){
			    this.region = region
				console.log('用户选择区域region',this.region)
				const address =  this.region.map(item=>item.name).join('')
				this.formData.address = address
				console.log('用户选择区域address',address)
				
				const {code,name} = this.region[2]
				console.log('用户选择区域code',code)
				
			}
		},
		computed:{
		    regionName(){
		        // 转为字符串
		        return this.region.map(item=>item.name).join(' ')
		    }
		},
	}
</script>

<style lang="scss">
	.nurse-auth{
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28rpx;
		
		.form-info{
			padding: 10rpx 20rpx;
			width: 98%;
			font-size: 26rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}
	
</style>