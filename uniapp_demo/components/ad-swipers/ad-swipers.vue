<!-- <ad-swipers height="340rpx" :lists="list"></ad-swipers> -->
<template>
	<view class="swiper-wrap" :style="{height, padding}" v-if="lists.length">
		<view class="swiper-con" :style="{borderRadius: radius}">
			<!-- 用于轮播图 -->
			<template v-if="lists.length == 0">
				<swiper class="swiper" :autoplay="autoplay" :circular="circular" @change="swiperChange"
					:previous-margin="previousMargin" display-multiple-items="1">
					<swiper-item v-for="(item, index) in lists" :key="index">
						<view class="swiper-item-view" :data-item="item" style="width:100%;height:100%;"  @click="goPage(item)">
							<u-image mode="aspectFill" :width="'calc(100% - ' + previousMargin + ')'" height="100%"
								:border-radius="radius" :src="item.image"></u-image>
						</view>
						
					</swiper-item>
				</swiper>
				<view class="dots" v-if="lists.length > 1">
					<view v-for="(item, index) in lists" :key="index"
						:class="'dot ' + (index == currentSwiper ? 'active' : '')"></view>
				</view>
			</template>
			<!-- 用于 占位 -->
			<template v-else >
				<view  style="width:100%;height:100%;" >
					<u-image mode="aspectFill" :width="'calc(100% - ' + previousMargin + ')'" height="100%"
						:border-radius="radius" :src="'https://didi.depin.tech/storage/file/2019/09/29/5d904d42e3222.jpg'"></u-image>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	
	import {
		paramsToStr
	} from '@/utils/tools'

	export default {
		data() {
			return {
				currentSwiper: 0
			};
		},
		props: {
			lists: {
				type: Array,
				default(){
					return []
				}
			},
			circular: {
				type: Boolean,
				default: true
			},
			autoplay: {
				type: Boolean,
				default: true
			},
			height: {
				type: String
			},
			radius: {
				type: String,
				default: '0'
			},
			padding: {
				type: String,
				default: '0rpx'
			},
			previousMargin: {
				type: String,
				default: "0rpx"
			},
			isSwiper: {
				type: Boolean,
				default: true
			}
		},
		
		methods: {
			
			swiperChange(e) {
				this.currentSwiper = e.detail.current
			}
			
		}
	};
</script>
<style lang="scss">
	.swiper-wrap {
		overflow: hidden;
		box-sizing: content-box;

		.swiper-con {
			position: relative;
			height: 90%;
			overflow: hidden;
			transform: translateY(0);
			border-radius: 10rpx;
			box-shadow: 0rpx 5rpx 5rpx rgb(240, 240, 255);
			margin: 10rpx;
		}

		.swiper {
			width: 100%;
			height: 100%;
			position: relative;
			
			
			.slide-image {
				height: 100%;
			}
			
		}

		.dots {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 20rpx;
			display: flex;

			.dot {
				width: 8rpx;
				height: 8rpx;
				border-radius: 50%;
				margin-right: 10rpx;
				background-color: #fff;

				&.active {
					width: 16rpx;
					border-radius: 8rpx;
					background-color: $-color-primary;
				}
			}
		}
	}
</style>
