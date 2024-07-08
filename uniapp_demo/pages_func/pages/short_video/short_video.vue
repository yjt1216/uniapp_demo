<template>
	<view>
		<video-swiper
		  ref="swiper"
		  @setVideoList="addData($event,true)"
		  @tapHead="tapHead"
		  @tapFollow="tapFollow"
		  @tapShare="tapShare" 
		  @tapDetail="tapDetail" 
		  @tapLove="tapLove" 
		  @tapComment="tapComment"
		  @tapCommentLove="tapCommentLove" 
		  @setCommentList="setCommentList" 
		  @send="send" 
		  @change="change"
		  @tapActive='tapActive' 
		  @tapLive='tapLive' 
		  @tapSearch='tapSearch' 
		  @refresh='refresh' 
		  cover
		  timingFunction='ease' 
		  preview 
		  :progressTime='10'
		  >
		</video-swiper>
	</view>
</template>
<script>
	// import kaiVideoSwiper from '@/pages_func/components/kai-video-swiper/kai-video-swiper.nvue'
	import videoSwiper from '@/pages_func/components/video-swiper/video-swiper.vue';
	import videoData from '@/sheep/mock/videoList.js';
	export default {
		components: {
			// kaiVideoSwiper,
			videoSwiper
		},
		data() {
			return {
				/* 地区视频索引 */
				placeIndex: 0,
				/* 地区视频数据 */
				placeData: [],
				/* 关注视频索引 */
				followIndex: 0,
				/* 关注视频数据 */
				followData: [],
				/* 推荐视频索引 */
				recommendIndex: 0,
				/* 推荐视频数据 */
				recommendData: [],
				/* 视图 */
				viewNum: 2
			}
		},
		created() {
			let arr = [{
				src: '/pages_func/static/video-images/s1.png',
				name: '莱莱'
			}]
			this.$nextTick(() => {
				this.addData()
				/* 设置分享朋友列表 */
				// this.$refs.swiper.setShareFriend(arr)

				/* 是否展示头部信息 推荐，关注，同城 默认false */
				this.$refs.swiper.topShow(true) //
				/* 设置顶部信息 */
				this.$refs.swiper.setPlace('浦东')
				this.$refs.swiper.setFollowNum(1)
				this.$refs.swiper.setPlaceNum(1)
				/* 设置tabBar高度，用于评论弹出输入框与键盘顶部无缝衔接，如果没有tabBar就不用设置 */
				this.$refs.swiper.setTabBarHeight(30)
			})
		},
		onHide() {
			this.$refs.swiper.stop() //暂停播放
		},
		methods: {
			tapActive(num) {
				if (this.viewNum == num) return
				this.$refs.swiper.stop()
				this.viewNum = num
				switch (num) {
					case 0:
						this.$refs.swiper.setRecommendNum(1)
						this.$refs.swiper.setFollowNum(1)
						this.$refs.swiper.setPlaceNum(0)
						this.$refs.swiper.showLive(false)

						this.$refs.swiper.previewVideo(this.placeIndex, this.placeData)
						break;
					case 1:
						this.$refs.swiper.setRecommendNum(1)
						this.$refs.swiper.setFollowNum(0)
						this.$refs.swiper.setPlaceNum(1)
						this.$refs.swiper.showLive(false)

						this.$refs.swiper.previewVideo(this.followIndex, this.followData)
						break;
					case 2:
						this.$refs.swiper.setRecommendNum(0)
						this.$refs.swiper.setFollowNum(1)
						this.$refs.swiper.setPlaceNum(1)
						this.$refs.swiper.showLive(true)
						
						this.$refs.swiper.previewVideo(this.recommendIndex, this.recommendData)
						break;
				}
			},
			tapLive(item) {
				this.toast('直播')
			},
			tapSearch() {
				this.toast('搜索')
			},
			refresh() {
				const _this = this
				this.$refs.swiper.stop()
				let videoArr = _this.randomVideo()
				switch (this.viewNum) {
					case 0:
						this.placeIndex = 0
						this.placeData = [...videoArr]
						this.$refs.swiper.previewVideo(this.placeIndex, this.placeData)
						break;
					case 1:
						this.followIndex = 0
						this.followData = [...videoArr]
						this.$refs.swiper.previewVideo(this.followIndex, this.followData)
						break;
					case 2:
						this.recommendIndex = 0
						this.recommendData = [...videoArr]
						this.$refs.swiper.previewVideo(this.recommendIndex, this.recommendData)
						break;
				}
			},
			//深度克隆 + 打乱视频顺序
			randomVideo() {
				let videoArr = JSON.parse(JSON.stringify(videoData.data))
				videoArr.sort(() => Math.random() - 0.5)
				return videoArr
			},
			//深度克隆
			cloneVideo() {
				let videoArr = JSON.parse(JSON.stringify(videoData.data))
				return videoArr
			},
			//获取短视频列表 如果是追加数据addDataStatus为true
			addData(item, addDataStatus) {
				const _this = this
				let random = _this.randomVideo()
				let clone = _this.cloneVideo()
				if (addDataStatus) {
					switch (this.viewNum) {
						case 0:
							this.placeData = [...this.placeData, ...random]
							this.$refs.swiper.setVideoData(random)
							break;
						case 1:
							this.followData = [...this.followData, ...random]
							this.$refs.swiper.setVideoData(random)
							break;
						case 2:
							this.recommendData = [...this.recommendData, ...clone]
							this.$refs.swiper.setVideoData(clone)

							break;
					}
					return
				}
				// 初始化数据
				this.placeData = this.randomVideo()
				this.followData = this.randomVideo()
				this.recommendData = this.cloneVideo()
				// 初始化播放推荐中的视频
				this.$refs.swiper.previewVideo(this.recommendIndex, this.recommendData)
			},

			//切换视频
			change(data) {
				let text
				switch (this.viewNum) {
					case 0:
						text = '地区'
						this.placeIndex = data.index
						break;
					case 1:
						text = '关注'
						this.followIndex = data.index
						break;
					case 2:
						text = '推荐'
						this.recommendIndex = data.index
						break;
				}
				if (data.index % 5 === 0 && data.index != 0) {
					data.video.advert = true
				} else {
					data.video.advert = false
				}
				data.video.description = text + '-视频-这是第' + data.index + '个视频'
			},
			//视频点赞
			tapLove(item) {
				this.$refs.swiper.changeLove()
			},
			//点击头像
			tapHead(item) {
				this.toast('点击头像')
			},

			//点击关注
			tapFollow(item) {
				this.$refs.swiper.changeFollow()
			},

			//点击分享
			tapShare(item) {
				this.toast(item.type.name)
			},

			//点击商品详情
			tapDetail(item) {
				this.toast('商品详情')
			},
			//获取视频评论列表
			tapComment(e) {
				let obj = {
					id: '123456789',
					userInfo: {
						nickName: '绝世高手',
						faceUrl: '/pages_func/static/video-images/s2.png',
					},
					isLove: true,
					num: 15,
					time: '2021-04-27 12:12',
					text: '一曲肝肠断，天涯何处觅知音'
				}
				let data = []
				for (let i = 0; i <= 20; i++) {
					let o = JSON.parse(JSON.stringify(obj))
					o.id = o.id + i
					o.num = o.num + i
					o.userInfo.nickName = o.userInfo.nickName + i
					o.isLove = i % 2 == 0 ? true : false
					data.push(o)
				}
				this.$refs.swiper.commentInit(data, false)

			},

			// 评论列表点赞
			tapCommentLove(item) {
				this.$refs.swiper.changeCommentLove()
			},
			// 追加评论列表数据
			setCommentList(text) {
				let commentList = [{
					userInfo: {
						faceUrl: '/pages_func/static/logo.png',
						nickName: '测试'
					},
					id: 123,
					num: 0,
					text: "追加评论数据",
					isLove: false,
				}];
				// 如果参数为true，说明没有数据了
				this.$refs.swiper.setCommentData(commentList, true)
			},
			//发送评论
			send(data) {
				let commentList = {
					userInfo: {
						faceUrl: '/pages_func/static/logo.png',
						nickName: '靓仔'
					},
					id: 0,
					num: 0,
					text: data.text,
					isLove: false,
				}
				this.$refs.swiper.frontAddData(commentList)
				this.$refs.swiper.sendOver()
			},
			toast(text) {
				uni.showToast({
					title: text,
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
</style>
