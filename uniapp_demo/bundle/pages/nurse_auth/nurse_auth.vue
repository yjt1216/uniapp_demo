<template>
	<view>
		<nav-bar title="资质认证" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<!-- 身份证正反面 -->
		<Rboy-upload-sfz 
			:obverse-url="formData.obverseUrl" 
			:reverse-url="formData.reverseUrl" 
			@selectChange="sfz_chagne" 
			@del="del_btn">
		</Rboy-upload-sfz>
		<!-- 地区选择 -->
		<view>
			<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
				<view>选择地区:{{regionName}}</view>
			</pick-regions>
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
				},
				/* 地区 */
				region:[],
				defaultRegion: ['广东省','广州市','番禺区'],
				defaultRegionCode:'440113'
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
				console.log('用户选择区域address',address)
				
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
</style>