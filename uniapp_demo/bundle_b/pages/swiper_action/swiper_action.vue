<template>
	<view class="u-page">
		<nav-bar title="左滑按钮"></nav-bar>
		<view class="u-demo-block">
			<text class="u-demo-block__title">演示案例</text>
			<view class="u-page__swipe-action-item">
				<u-swipe-action :autoClose="false">
					<u-swipe-action-item
						:show="show1"
						:options="options1"
						@click="click"
					>
						<view class="swipe-action u-border-top u-border-bottom">
							<view class="swipe-action__content">
								<text class="swipe-action__content__text">基础使用</text>
							</view>
						</view>
					</u-swipe-action-item>
				</u-swipe-action>
			</view>
		</view>
		
		<view class="space-fill"></view>
		
		<uni-swipe-action>
			<!-- 基础用法 -->
			<uni-swipe-action-item :right-options="options4" :left-options="options4" @click="onClick" 
				@change="swipeChange($event, index)">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action__content">
						<text class="swipe-action__content__text">基础使用</text>
					</view>
				</view>
			</uni-swipe-action-item>
			
		</uni-swipe-action>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show1: true,
				moveX: 0,
				showText: '当前状态：关',
				showStatus: false,
				options1: [{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}],
				options2: [{
					text: '收藏',
					style: {
						backgroundColor: '#3c9cff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}],
				options3: [{
					text: '收藏',
					icon: 'star-fill',
					iconSize: '20',
					style: {
						backgroundColor: '#f9ae3d'
					}
				}],
				
				options5: [{
					icon: 'trash-fill',
					style: {
						backgroundColor: '#f56c6c',
						width: '40px',
						height: '40px',
						borderRadius: '100px',
						margin: '0 6px'
					}
				}, {
					icon: 'heart-fill',
					style: {
						backgroundColor: '#5ac725',
						width: '40px',
						height: '40px',
						borderRadius: '100px',
						margin: '0 6px'
					}
				}],
				options4:[
				        {
				            text: '取消',
				            style: {
				                backgroundColor: '#007aff'
				            }
				        }, {
				            text: '确认',
				            style: {
				                backgroundColor: '#dd524d'
				            }
				        }
				      ]
			}
		},
		methods: {
			click(index) {
				console.log('click', index);
				uni.showModal({
					title: '温馨提示',
					content: '确定要删除吗？',
					success: res => {
						if (res.confirm) {
							this.show1 = false
						}
					}
				})
			},
			leftBtnClick(index){
				console.log('leftBtnClick index - ', index);
			},
			onClick(e){
			    console.log('点击了'+(e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e,index){
			    console.log('当前状态：'+ e +'，下标：' + index)
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-demo-block__title {
		padding: 10px 0 2px 15px;
		margin-top: 30rpx;
	}

	.swipe-action {
		&__content {
			padding: 25rpx 0;

			&__text {
				font-size: 15px;
				color: $u-main-color;
				padding-left: 30rpx;
			}
		}
	}
	.space-fill{
		height: 60rpx;
	}
</style>
