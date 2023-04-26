<template>
	<view>
		<nav-bar title="登录" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<view class="top-wrap">
			<me-tabs v-model="tabIndex" :tabs="tabs" @change="tabChange"></me-tabs>
		</view>
		<mescroll-body @init="mescrollInit" top="100" @down="downCallback"
		 :up="upOption" @up="upCallback">
			<good-list :list="goods"></good-list>
		 </mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import { apiGoods } from '@/api/mock.js'
	
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				upOption: {
					noMoreSize:4,
					empty: {
						tip: '暂无数据'
					}
				},
				goods: [],
				// tabs:[
				// 	{name:'待评估'},
				// 	{name:'待执行'},
				// 	{name:'执行中'},
				// 	{name:'已完成'}
				// ],
				tabs: [{name:'全部',type:'xx'}, {name:'奶粉',type:'xx'}, {name:'面膜',type:'xx'}, {name:'图书',type:'xx'}],
				tabIndex: 0
			}
		},
		methods: {
			upCallback(page) {
				
				// console.log('mescroll.optUp.toTop ',this.mescroll.optUp.toTop)
				
				let curTab = this.tabs[this.tabIndex]
				let keyword = curTab.name
				apiGoods(page.num, page.size, keyword).then(res=>{
					this.mescroll.endSuccess(res.list.lenght)
					if(page.num == 1) this.goods = []
					this.goods = this.goods.concat(res.list)
				}).catch(()=>{
					this.mescroll.endErr()
				})
			},
			tabChange() {
				this.goods = []
				this.mescroll.resetUpScroll()
			}
		}
		
	}
</script>

<style lang="scss">
	.top-wrap{
		z-index: 9990;
		position: fixed;
		top: --window-top;
		/* left: 0; */
		width: 100%;
		height: 100rpx;
		background-color: white;
	}
</style>