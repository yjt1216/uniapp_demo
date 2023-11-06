<template>
	<view class="message">
		<nav-bar title="消息" :back="false" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<view class="top-warp">
			<me-tabs v-model="tabIndex" :tabs="tabs" @change="tabChange"></me-tabs>
		</view>
		
		 <mescroll-body @init="mescrollInit" top="90" @down="downCallback" @up="upCallback">
			<good-list :list="goods"></good-list>
		</mescroll-body>
		
		<!-- <y-tabbar ref="tabbar" native></y-tabbar> -->
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import {apiGoods} from "@/api/mock.js"
	
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				tabs: [{name:'全部',type:'xx'}, {name:'奶粉',type:'xx'}, {name:'面膜',type:'xx'}, {name:'图书',type:'xx'}],
				goods: [] ,// 数据列表
				tabIndex: 0
			}
		},
		methods: {
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				let curTab = this.tabs[this.tabIndex]
				let keyword = curTab.name // 具体项目中,您可能取的是tab中的type,status等字段
				console.log('请求数据-',keyword)
				//联网加载数据
				apiGoods(page.num, page.size,keyword).then(res=>{
					this.mescroll.endSuccess(res.list.length);

					//设置列表数据
					if(page.num == 1) this.goods = []; //如果是第一页需手动制空列表
					this.goods=this.goods.concat(res.list); //追加新数据
				}).catch(()=>{
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},
			// 切换菜单
			tabChange() {
				this.goods = []// 先置空列表,显示加载进度
				this.mescroll.resetUpScroll() // 再刷新列表数据
			}
		}
	}
</script>

<style>
	
	.top-warp{
		z-index: 9990;
		position: fixed;
		top: --window-top; /* css变量 */
		left: 0;
		width: 100%;
		height: 90rpx;
		background-color: white;
	}
	
</style>
