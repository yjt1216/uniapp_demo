<template>
	<view class="y-tabbar-box" :style="tabbarBoxStyle" v-if="isShowTabBar">
		<view class="y-tabbar__fill" v-if="fill || native" :class="{'y-tabbar__safe': (safeBottom || native)}" :style="tabbarFillStyle"></view>
		<view id="y-tabbar" class="y-tabbar"
			:class="{'fixed': (fixed || native), 'y-tabbar__safe': (safeBottom || native)}" :style="tabbarStyle">
			<view class="y-tabbar__border" v-if="borderStyle === 'black' "></view>
			<view class="y-tabbar__flex">
				<view @click="tabChange(index)" v-for="(item, index) in tabbarList" :key="index" class="y-tabbar__item"
					:class="{
						'y-tabbar__item__active': index === currentIndex,
					}">
					<slot :name="`tabbar_index_${index}`">
						<view class="y-tabbar__icon">
							<view class="y-tabbar__badge" v-if="item.dot">{{item.dot}}</view>
							<image :src="currentIndex === index ? item.selectedIconPath : item.iconPath"
								class="y-tabbar__icon_img" />
						</view>
						<view class="y-tabbar__label"
							:style="{'color': index === currentIndex ? tabbarConfig.selectedColor : tabbarConfig.color }">
							{{ item.text }}
						</view>
					</slot>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			
			
			<view class="intercept-call">
				<view class="call-title">提示信息</view>
				<view class="call-sub-title">
					一键报警为紧急时刻使用，请勿随意拨打，影响正常工作，或拨打电话：0512-65568029
				</view>
				<u-divider :hairline="true" lineColor="#666"></u-divider>
				<view class="call-actions">
					<view @tap="callPoliceFun">
						<image class="call-image" :src="'/static/images/home_110.png'"></image>
					</view>
					<view class="space-line"></view>
					<view @tap="contactCustomerFun">
						<image class="call-image" :src="'/static/images/home_pingtai.png'"></image>
					</view>
				</view>
				<u-divider :hairline="false" :dashed="true"  line-color="#999"></u-divider>
				<button class="call-cancel" @click="closeCall">取消</button>
			</view>
			
			
		</uni-popup>
	</view>
</template>

<script>
	const obj2strStyle = (obj) => {
		let style = ''
		for (let key in obj) {
			style += `${key}:${obj[key]};`
		}
		return style
	}

	const padFirstSymbol = (str, smb) => {
		if (str.startsWith(smb) || str.startsWith('http')) {
			return str
		}
		return `/${str}`
	}

	const replaceTabbarList = (list) => {
		if (!list.length > 0) {
			return []
		}
		return list.map(item => {
			if (item.iconPath) {
				item.iconPath = padFirstSymbol(item.iconPath, '/')
			}
			if (item.pagePath) {
				item.pagePath = padFirstSymbol(item.pagePath, '/')
			}
			if (item.selectedIconPath) {
				item.selectedIconPath = padFirstSymbol(item.selectedIconPath, '/')
			}
			return item
		})
	}

	import PageConfig from '@/pages.json'
	export default {
		emits: ['change', 'click'],
		props: {
			current: {
				type: [Number, String],
				default: 0
			},
			tabbar: {
				type: Object,
				default () {
					return {}
				}
			},
			fixed: {
				type: Boolean,
				default: false
			},
			fill: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: [Number, String],
				default: 9999
			},
			native: {
				type: Boolean,
				default: false
			},
			safeBottom: {
				type: Boolean,
				default: true
			},
			beforeChange: {
				type: Function,
				default: null
			},
			tabbarHeight: {
				type: [Number, String],
				default: 100
			}
		},
		data() {
			return {
				isShowTabBar: false,
				currentIndex: 0,
				beforeData: {},
				reload: false
			}
		},
		watch: {
			current(val) {
				this.currentIndex = val * 1
			}
		},
		computed: {
			tabbarConfig() {
				const {
					native,
					reload
				} = this
				if (reload) {}
				if (native) {
					const {
						tabBar
					} = PageConfig
					if (!tabBar) {
						console.error('Native mode, Pages.json no tabbar config')
						return {
							borderStyle: 'black',
							list: []
						}
					}
					return tabBar
				}
				return this.tabbar
			},
			tabbarList() {
				const {
					reload
				} = this
				const {
					list
				} = this.tabbarConfig
				if (reload) {}
				if (list) {
					return replaceTabbarList(list)
				}
				console.error('No tabbar config')
				return []
			},
			borderStyle() {
				const {
					reload
				} = this
				const {
					borderStyle
				} = this.tabbarConfig
				if (reload) {}
				return borderStyle
			},
			tabbarBoxStyle() {
				const {
					zIndex,
					reload
				} = this
				if (reload) {}
				return obj2strStyle({
					'z-index': zIndex,
				})
			},
			tabbarFillStyle() {
				const {
					tabbarHeight,
					safeBottom,
					reload
				} = this
				if (reload) {}
				return obj2strStyle({
					'height': `${tabbarHeight}rpx`
				})
			},
			tabbarStyle() {
				const {
					tabbarHeight,
					reload
				} = this
				const {
					backgroundColor
				} = this.tabbarConfig
				if (reload) {}
				return obj2strStyle({
					'height': `${tabbarHeight}rpx`,
					'background-color': backgroundColor || '#fff',
				})
			},
			tabbarItemStyle() {
				const {
					currentIndex,
					reload
				} = this
				const {
					color,
					selectedColor
				} = this.tabbarConfig
				if (reload) {}
				return obj2strStyle({
					'color': currentIndex ? selectedColor : color
				})
			}
		},
		mounted() {
			this.initTabbar()
		},
		methods: {
			initTabbar() {
				const {
					current,
					fill,
					native,
					tabbarList
				} = this
				this.currentIndex = current * 1
				if (native) {
					const currentPage = `/${getCurrentPages()[0].route}`
					const currentIndex = tabbarList.findIndex(item => item.pagePath === currentPage)
					this.currentIndex = currentIndex
					if (tabbarList.length > 0) {
						uni.hideTabBar()
					}
				}
				setTimeout(() => {
					this.isShowTabBar = true
				})
			},
			reLoad() {
				this.reload = true
				setTimeout(() => {
					this.reload = false
				})
			},
			checkMaxIndex(index) {
				if (!this.tabbarConfig.list[index]) {
					console.error('Max tabbar index')
					return false
				}
				return true
			},
			setTabBarBadge(obj) {
				const {
					index,
					text
				} = obj
				if (this.checkMaxIndex(index)) {
					this.tabbarConfig.list[index].dot = text
					this.reLoad()
				}
			},
			setTabBarItem(obj) {
				const {
					index,
					text,
					pagePath: newPagePath,
					iconPath,
					selectedIconPath
				} = obj
				const {
					pagePath: oldPagePath
				} = this.tabbarConfig.list[index]
				if (this.checkMaxIndex(index)) {
					this.tabbarConfig.list[index] = {
						pagePath: newPagePath ? newPagePath : oldPagePath,
						text,
						iconPath,
						selectedIconPath
					}
					this.reLoad()
				}
			},
			showTabBar() {
				this.isShowTabBar = true
			},
			hideTabBar() {
				this.isShowTabBar = false
			},
			tabChange(index) {
				
				const {
					currentIndex
				} = this
				this.$emit('click', index)
				if (index === currentIndex) {
					return
				}
				
				if(index === 2){
					console.log('呼叫客服',index)
					this.$refs.popup.open()
					return
				}
				
				this.beforeData = {
					newIndex: index,
					oldIndex: currentIndex,
					next: this.jumpPage
				}
				if (this.beforeChange) {
					this.beforeChange(this.jumpPage)
				} else {
					this.jumpPage()
				}
			},
			jumpPage() {
				const {
					native,
					beforeData,
					tabbarList: list
				} = this
				const {
					newIndex: index
				} = beforeData
				const {
					pagePath: url,
					openType
				} = list[index]
				if (url) {
					if (native) {
						uni.switchTab({
							url
						})
					} else {
						this.currentIndex = index
						switch (openType) {
							case 'navigate':
								uni.navigateTo({
									url
								})
								break;
							case 'redirect':
								uni.redirectTo({
									url
								})
								break;
							case 'reLaunch':
								uni.reLaunch({
									url
								})
								break;
							case 'switchTab':
								uni.switchTab({
									url
								})
								break;
							case 'navigateBack':
								uni.navigateBack({
									delta: 1
								})
								break;
							default:
								uni.reLaunch({
									url
								})
						}
					}
				}
				this.$emit('change', index)
			},
			/* 拦截 弹框 */
			closeCall(){
				this.$refs.popup.close()
			},
			callPoliceFun(){
				console.log('报警call')
				this.$refs.popup.close()
				uni.makePhoneCall({
					phoneNumber: '15995454800' //仅为示例
				});

			},
			contactCustomerFun(){
				console.log('联系客服call')
				this.$refs.popup.close()
				uni.makePhoneCall({
					phoneNumber: '0512-66568029' //仅为示例
				});

			}
			
		}
	};
</script>

<style lang="scss" scoped>
	.y-tabbar-box {
		position: relative;
		z-index: 9999;
	}

	.y-tabbar {
		position: relative;

		&.fixed {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100vw;
		}

		&__safe {
			padding-bottom: env(safe-area-inset-bottom);
		}
	}
	
	.y-tabbar__fill{
		pointer-events: none;
		opacity: 0;
	}

	.y-tabbar__flex {
		display: flex;
		flex-direction: row;
	}

	.y-tabbar__border {
		background-color: rgba(0, 0, 0, 0.33);
		width: 100%;
		height: 1rpx;
		transform: scaleY(0.5);
	}

	.y-tabbar__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		padding: 4px 0 2px;
	}

	.y-tabbar__icon {
		width: 48rpx;
		height: 48rpx;
		margin-bottom: 6rpx;
		position: relative;

		&_img {
			display: block;
			width: 100%;
			height: 100%;
		}

		.y-tabbar__badge {
			color: #fff;
			background-color: #f00;
			border-radius: 20rpx;
			font-size: 22rpx;
			position: absolute;
			right: -25rpx;
			left: 40rpx;
			padding: 2rpx 0;
			width: 100%;
			text-align: center;
			white-space: nowrap;
		}
	}

	.y-tabbar__label {
		font-size: 24rpx;
	}
	
	/* 拦截 弹框 */
	.intercept-call{
		text-align: center;
		width: 80%;
		margin-left: 10%;
		background-color: #fff;
		border: 4rpx #ccc solid;
		box-sizing: border-box; 
		border-radius: 6rpx; 
		display: flex;
		flex-direction: column;
		align-items: center;
		.call-title{
			margin-top: 20rpx;
			color: #39C9BC;
		}
		.call-sub-title{
			margin: 10rpx 20rpx;
			font-size: 20rpx;
		}
		.call-actions{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
		.call-image {
			width: 120rpx;
			height: 120rpx;
		}
		.space-line{
			width: 2rpx;
			height: 70rpx;
			background-color: black;
		}
		.call-cancel{
			margin: 20rpx;
			width: 60%;
			font-size: 28rpx;
			background-color: #39C9BC;
			color: white;
		}
	}
	
</style>
