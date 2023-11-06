<!-- 顶部导航栏 -->
<template>
    <view class="ua__navbar" :style="!transparent ? navH : ''">
        <view class="ua__navbar-wrap flexbox flex-alignc" 
			:class="{'custom': custom, 'fixed': fixed || transparent}" 
			:style="{'height': customBarH + 'px', 'padding-top': (custom ? statusBarH : 44) + 'px', 'background': bgcolor, 'color': color, 'z-index': zIndex}">
                <!-- //返回 -->
            <view class="action navbar-action__left" v-if="back && back!='false'" @click="onBack">
				<template v-if="$slots.back"><slot name="back" /></template>
				<template v-else><text class="iconfont nvuefont" :style="{'color': color}">{{'\ue84c'}}</text></template>
				<slot name="backText" />
			</view>
			<slot name="left" />
				
            <!-- //标题 -->
            <view class="navbar-title" :class="{'center': center}">
                <template v-if="$slots.title">
					<slot name="title" />
				</template>
                <template v-else><text :style="{'color': color}">{{title}}</text></template>
            </view>
            
            <!-- //右侧 -->
            <view class="action navbar-action__right">
                  <slot name="right" />
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		props: {
			// 是否是自定义导航
			custom: { type: [Boolean, String], default: false },
			// 是否返回
			back: { type: [Boolean, String], default: true },
			// 标题
			title: { type: String, default: '' },
			// 标题颜色
			color: { type: String, default: '#fff' },
			// 背景色
			bgcolor: { type: String, default: '#22d59c' },
			// 标题是否居中
			center: { type: [Boolean, String], default: false },
			// 是否固定
			fixed: { type: [Boolean, String], default: false },
			// 是否背景透明
			transparent: { type: [Boolean, String], default: false },
			// 设置层级
			zIndex: { type: [Number, String], default: '2021' },
		},
		data() {
			return {
				statusBarH: 0,
				customBarH: 0,
			}
		},
		
		created() {
			const app = getApp()
			// 获取状态栏和导航条高度
			this.statusBarH = app.globalData.statusBarH
			this.customBarH = this.custom ? app.globalData.customBarH : app.globalData.customBarH - this.statusBarH
		},
		computed: {
			navH() {
				let h = `height: ${this.customBarH}px;`
				return h
			}
		},
		methods: {
			onBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
	.nvuefont {font-family: nvueIcon;}
	.ua__navbar {
		/* #ifndef APP-NVUE */
		display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;
		/* #endif */
		flex-direction: row;
	}
	.ua__navbar-wrap {
		flex: 1; flex-direction: row; align-items: center; background-color: #fff; color: #333; justify-content: space-between; min-height: 90rpx; position: relative; z-index: 2021;
	}
	.ua__navbar-wrap.custom {
		/* #ifdef MP-WEIXIN */
		padding-right: 200rpx;
		/* #endif */
		/* #ifdef MP-ALIPAY */
		padding-right: 150rpx;
		/* #endif */
	}
	.ua__navbar-wrap.fixed {
		/* #ifdef APP-NVUE */
		left: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		max-width: 750px; position: fixed; top: 0;
	}
	.ua__navbar-wrap .action {
		/* #ifndef APP-NVUE */
		display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox; height: 100%; max-width: 100%;
		/* #endif */
		flex-direction: row; align-items: center; justify-content: center;
	}
	/*左侧*/
	.navbar-action__left {font-size: 32rpx; padding: 0 24rpx;}
	.navbar-action__left .iconfont {font-size: 42rpx;}
	/*标题*/
	.ua__navbar-wrap .navbar-title {flex: 1; font-size: 32rpx;}
	.ua__navbar-wrap .navbar-title:first-child {font-size: 36rpx; margin-left: 24rpx;}
	.ua__navbar-wrap .navbar-title.center {
		/* #ifdef APP-NVUE */
		left: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 100%; z-index: -1;
		/* #endif */
	    align-items: center; text-align: center; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
	    position: absolute;
	}
	.ua__navbar-wrap.custom .navbar-title.center {
		/* #ifdef MP */
		width: auto; align-items: auto; text-align: left; position: static;
		/* #endif */
	}
	
	.navbar-action__right {font-size: 32rpx; padding-right: 24rpx;}
	.navbar-action__right .iconfont {font-size: 42rpx;}
</style>
