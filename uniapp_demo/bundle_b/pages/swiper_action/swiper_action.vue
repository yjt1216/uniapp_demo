<template>
	<view class="u-page">
		<nav-bar title="左滑按钮"></nav-bar>
		
		
		<view class="space-fill"></view>
		
		<!-- 基础用法 -->
		<!-- <uni-swipe-action>
			<uni-swipe-action-item :right-options="options4" :left-options="options4" @click="onClick" 
				@change="swipeChange($event, index)">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action__content">
						<text class="swipe-action__content__text">基础使用</text>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action> -->
		<!-- 基础用法 组合list-->
		<uni-swipe-action>
			<uni-swipe-action-item :right-options="options5"  @click="onClick" @change="swipeChange">
				<view>SwipeAction 基础使用场景</view>
			</uni-swipe-action-item>
			
			<uni-swipe-action-item v-for="(item,index) in actionList" 
				:right-options="options4" 
				@click="swipeListChange($event, index)" :key="index">
				<view class="swipe-action u-border-top u-border-bottom">
					<view class="swipe-action__content"  >
						<text class="swipe-action__content__text">{{item}}</text>
					</view>
				</view>
			</uni-swipe-action-item>
			
		</uni-swipe-action>
		
		
	</view>
</template>

<script>
	let that = null;
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
				        text: '编辑',
				        style: {
				            backgroundColor: '#007aff'
				        }
				    }, 
					{
				        text: '删除',
				        style: {
				            backgroundColor: '#dd524d'
				        }
				    }
				],
				actionList:[],
			}
		},
		onLoad(){
			that = this;
			this.actionList = ['组合1','组合2','组合3','足额4'];
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
			},
			onListClick(e){
				console.log(e);
			},
			swipeListChange(e,index){
			    console.log('组合 当前状态：'+ e +'，下标：' + index)
				let {content} = e;
				if(content.text === '删除'){
					uni.showModal({
						title:'提示',
						content:'是否删除当前对象',
						success(res) {
							if(res.confirm){
								that.actionList.splice(index, 1);
								
							}else{
								console.log('用户取消删除',index);
							}
						}
					})
				}else if(content.text === '编辑'){
					console.log('用户点击编辑',index);
				}else{
					uni.showToast({
						title: `点击了${e.content.text}按钮`,
						icon: 'none'
					});

				}
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
