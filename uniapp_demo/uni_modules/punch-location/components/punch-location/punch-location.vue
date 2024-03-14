<template>
	<view>
		<map id="map" :style="{ 'height': Height + 'px','width':100 +'%'}" :show-location='true' :latitude="latitude"
			:polyline="pattern=='轨迹模式'? polyline:polylinenone" :longitude="longitude" :markers="markers"
			:enable-rotate="rotate" :enable-traffic="traffic" :enable-indoorMap="indoorMap" :enable-poi="poi"
			:enable-3D="threeD" :show-compass="compass" :enable-overlooking="overlooking" :enable-satellite="satellite"
			:enable-scroll="scroll">
			<cover-view class="model" v-show="!set">
				<cover-view class="modelleft" @click="changePattern">
					<!-- 轨迹模式 -->
					<cover-view class="la">当前模式</cover-view>
					<cover-view class="lb">{{pattern}}</cover-view>
				</cover-view>
				<cover-view class="modelcenter">
					<cover-view class="center" v-show="isstart" @click="timer">
						<cover-image class="centerimg" src="../../static/locationa.png"></cover-image>
						<cover-view class="centertxt">开始</cover-view>
						<cover-view class="centertxt" v-show="!isstart">结束</cover-view>
					</cover-view>
					<cover-view class="center" v-show="!isstart" @click="stopTimer">
						<cover-image class="centerimg" src="../../static/locationa.png"></cover-image>
						<cover-view class="centertxt">结束</cover-view>
					</cover-view>
				</cover-view>
				<cover-view class="modelright" @click="changeNumber">
					<cover-view class="ra">定位频率</cover-view>
					<cover-view class="rb">{{number}}分钟</cover-view>
				</cover-view>
			</cover-view>
			<!-- 底部 -->
			<cover-view class="card" v-show="isshow==true">
				<cover-image @click="isshow=!isshow" class="cardimg" src="../../static/down.png"></cover-image>
				<cover-view class="one">
					<cover-image class="oneimg" src="../../static/address.png"></cover-image>
					<cover-view class="onea">地点:{{addRess}}</cover-view>
				</cover-view>
				<cover-view class="two">
					<cover-image class="twoimg" src="../../static/time.png"></cover-image>
					<cover-view class="twoa">时间:{{nowTime}}</cover-view>
				</cover-view>
			</cover-view>
			<!-- 设置 -->
			<cover-image @click="setstart" class="set" src="../../static/set.png"></cover-image>
			<cover-view @touchend="ce" class="setaa" @click="setstart"></cover-view>
			<cover-view v-show="set" class="setdetail" :style="{ 'height': setHeight + 'px'}">
				<cover-view class="setcard">
					<cover-view class="settxt">3D楼块:</cover-view>
					<cover-view class="setresult" @click="threeD=!threeD">{{threeD? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">指南针:</cover-view>
					<cover-view class="setresult" @click="compass = !compass">{{compass? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">拖动:</cover-view>
					<cover-view class="setresult" @click="scroll = !scroll">{{scroll? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">旋转:</cover-view>
					<cover-view class="setresult" @click="rotate = !rotate">{{rotate? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">俯视:</cover-view>
					<cover-view class="setresult"
						@click="overlooking = !overlooking">{{overlooking? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">实时路况:</cover-view>
					<cover-view class="setresult" @click="traffic = !traffic">{{traffic? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">POI点:</cover-view>
					<cover-view class="setresult" @click="poi = !poi">{{poi? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">建筑物:</cover-view>
					<cover-view class="setresult" @click="building = !building">{{building? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">室内地图:</cover-view>
					<cover-view class="setresult" @click="indoorMap = !indoorMap">{{indoorMap? '开启':'关闭'}}</cover-view>
				</cover-view>
				<cover-view class="setcard">
					<cover-view class="settxt">卫星图:</cover-view>
					<cover-view class="setresult" @click="satellite = !satellite">{{satellite? '开启':'关闭'}}</cover-view>
				</cover-view>
			</cover-view>
		</map>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: 0,
				isshow: true,
				addRess: '', //地址
				nowTime: '', //时间
				sort: 0, //序号
				animacolor: 'modelcenter', //class
				pattern: '定位模式', //模式
				num: 1,
				number: 1, //定位频率
				numbertime: 60000, //定位频率时间
				isstart: true, //开始
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				markers: [],
				polyline: [{ //指定一系列坐标点，从数组第一项连线至最后一项 轨迹1
					points: [],
					color: "#00aa00", //线的颜色
					width: 6, //线的宽度

				}], //线的坐标点
				polylinenone: [], //不显示轨迹
				setHeight: 0, //设置栏高度
				set: false,
				threeD: true, //是否显示3D楼块
				compass: false, //是否显示指南针
				scroll: true, //是否支持拖动
				rotate: true, //是否支持旋转
				overlooking: true, //是否开启俯视
				satellite: false, //是否开启卫星图
				traffic: true, //是否开启实时路况
				poi: true, //是否展示 POI 点
				building: true, //是否展示建筑物
				indoorMap: false, //是否展示室内地图
			}
		},
		mounted() {
			// 注意，这里要用个变量存this，不然进到getSystemInfo后this指向会变化，找不到data变量
			var _this = this
			uni.getSystemInfo({
				success: function(res) {
					_this.Height = res.windowHeight;
					_this.setHeight = res.windowHeight - 90;
				}
			});
			//先获取当前定位
			uni.getLocation({
				type: 'gcj02', //gcj02 wgs84
				geocode: true, //设置该参数为true可直接获取经纬度及城市信息
				success: function(res) {
					console.log(res)
					_this.latitude = res.latitude
					_this.longitude = res.longitude
				},
				fail: function(err) {
					console.log(err)
					uni.showToast({
						title: '获取地址失败',
						icon: 'none'
					});
				}
			});

		},
		methods: {
			timer() { //定时循环执行 每N/时/分/秒执行一次
				var that = this
				that.getLocation() //获取定位
				that.sort++
				that.timerout = setInterval(function() {
					// 放入你自己的业务逻辑代码
					that.getLocation() //获取定位
					that.sort++
					console.log('时间到 第', that.sort)

				}, that.numbertime); //1分钟60000 2分钟120000 5分钟300000 10分钟600000 30分钟1800000 60分钟3600000
			},
			stopTimer() { //取消定时器
				var that = this
				that.isstart = true
				clearInterval(that.timerout); //清除定时器
				console.log('结束定位')
			},
			changePattern(pa) { //定位模式 轨迹模式
				if (this.pattern == '定位模式') {
					this.pattern = '轨迹模式'
				} else if (this.pattern == '轨迹模式') {
					this.pattern = '定位模式'
				}
			},
			changeNumber() { //定位频率
				if (this.number >= 120) {
					uni.showToast({
						title: '不能超过120分钟',
						icon: "none"
					})
					return
				}
				this.number = this.num * 5
				this.num++
				this.numbertime = this.number * 60000
				//console.log(this.numbertime)
			},
			setstart() { //设置
				this.set = !this.set
			},
			getLocation() { //获取位置
				var that = this
				that.isstart = false

				uni.getLocation({
					type: 'gcj02', //gcj02 wgs84
					geocode: true, //设置该参数为true可直接获取经纬度及城市信息
					success: function(res) {
						console.log(res)
						that.latitude = res.latitude
						that.longitude = res.longitude


						uni.request({ // 调用逆地理编码接口获取详细位置信息
							url: 'https://apis.map.qq.com/ws/geocoder/v1/',
							data: {
								location: `${res.latitude},${res.longitude}`,
								key: '33CBZ-NPPW6-CF6SH-MJ2GJ-N62JO-ZFB4L', //腾讯地图申请的密钥key
							},
							success: function(res) {
								console.log(res.data.result) //根据需要自行选择数据
								that.getTime() //当前时间
								console.log('详细位置信息：', res.data.result.address);

								//that.latitude = res.data.result.address_reference.location.lat
								//that.longitude = res.data.result.address_reference.location.lng
								that.addRess = res.data.result.formatted_addresses.recommend
								//res.data.result.address //不带地点名称的详细地址
								//that.latitude=res.data.result.ad_info.location.lat //纬度
								//that.longitude=res.data.result.ad_info.location.lng//经度
								//res.data.result.ad_info.city + res.data.result.ad_info.district //简化地点 市区
								//res.data.result.formatted_addresses.recommend //地点名称详细地址
								//res.data.result.address_reference.location.lat //名称详细地址的纬度
								//res.data.result.address_reference.location.lng //名称详细地址的经度


								//将经纬度添加到marker数组中
								that.markers.push({
									id: that.sort,
									latitude: that.latitude, //纬度
									longitude: that.longitude, //经度
									iconPath: '../../static/address.png', //这里不加图片默认红色定位图标
									rotate: 0, // 旋转度数
									width: 25, //宽
									height: 25, //高
									alpha: 0.9, //透明度
									nowTime: that.nowTime, //定位的时间
									callout: { //自定义标记点上方的气泡窗口 点击有效
										content: that.sort + ' ' + that.addRess + '\n' +
											that.nowTime, //文本
										color: '#ffffff', //文字颜色
										fontSize: 12, //文本大小
										borderRadius: 10, //边框圆角
										borderWidth: '1',
										bgColor: '#00aaff', //背景颜色
										padding: 10,
										display: 'ALWAYS', //常显
									}
								})

								// 将经纬度添加到	polyline数组中
								that.polyline[0].points.push({
									latitude: that.latitude,
									longitude: that.longitude
								});
								//console.log(that.polyline, '======')							

							},
							fail: function(res) {
								console.log('获取位置信息失败');
							}
						});
					},
					fail: function(err) {
						console.log(err)
						uni.showToast({
							title: '获取地址失败',
							icon: 'none'
						});
					}
				});
			},
			changeLocation() { //监听位置变化
				var that = this
				uni.onLocationChange(function(res) {
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
					that.latitude = res.latitude
					that.longitude = res.longitude
				});
			},
			// 获取当天是周几
			getWeekday() {
				const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
				const d = new Date();
				const weekday = weekdays[d.getDay()];
				return weekday;
			},
			getTime: function() { //获取当前时间
				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day;
				var timers = hour + ':' + minute + ':' + second;

				// 调用方法获取当天是周几
				const todayWeekday = this.getWeekday();
				console.log('今天是周' + todayWeekday);

				this.nowTime = timer + ' ' + '星期' + todayWeekday + ' ' + timers;
			},
		}
	}
</script>

<style>
	.model {
		width: 100%;
		height: 150upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 260upx;
	}

	.modelleft {
		width: 200upx;
		height: 100upx;
		text-align: center;
		position: relative;
		left: 30upx;
		z-index: 100;
		background-color: #ffffff;
	}

	.la {
		width: 200upx;
		height: 40upx;
		line-height: 40upx;
		font-size: 24upx;
		color: #dddddd;
		margin-top: 5upx;
		margin-bottom: 5upx;
	}

	.lb {
		width: 200upx;
		height: 50upx;
		font-size: 28upx;
	}

	.modelcenter {
		width: 140upx;
		height: 140upx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
		z-index: 200;
	}


	@keyframes shakeX {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: 400% 0;
		}
	}

	.center {
		width: 120upx;
		height: 120upx;
		background-color: #00aaff;
		border-radius: 50%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

	}

	.centerimg {
		width: 50upx;
		height: 50upx;
		margin-top: 10upx;
	}

	.centertxt {
		width: 200upx;
		height: 50upx;
		color: #ffffff;
		font-size: 28upx;
	}

	.modelright {
		width: 200upx;
		height: 100upx;
		text-align: center;
		z-index: 100;
		position: relative;
		right: 30upx;
		background-color: #ffffff;
		/* border-top-right-radius: 50upx;
		border-bottom-right-radius: 50upx; */
	}

	.ra {
		width: 200upx;
		height: 40upx;
		line-height: 40upx;
		font-size: 24upx;
		color: #dddddd;
		margin-top: 5upx;
		margin-bottom: 5upx;
	}

	.rb {
		width: 200upx;
		height: 50upx;
		font-size: 28upx;
	}

	/* 底部 */
	.card {
		width: 750upx;
		height: 200upx;
		background-color: #ffffff;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.cardimg {
		width: 60upx;
		height: 30upx;
		margin-bottom: 20upx;
	}

	.one {
		width: 690upx;
		height: 60upx;
		line-height: 60upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.oneimg {
		width: 40upx;
		height: 40upx;
		margin-right: 10upx;
	}

	.onea {
		width: 640upx;
		height: 60upx;
		line-height: 60upx;
	}

	.two {
		width: 690upx;
		height: 60upx;
		line-height: 60upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.twoimg {
		width: 40upx;
		height: 40upx;
		margin-right: 10upx;
	}

	.twoa {
		width: 640upx;
		height: 60upx;
		line-height: 60upx;
	}

	/* 设置 */
	.set {
		width: 70upx;
		height: 70upx;
		position: fixed;
		top: 180upx;
		right: 30upx;
	}



	.setdetail {
		width: 300upx;
		background-color: #27351E;
		filter: opacity(0.5);


	}

	.setcard {
		width: 300upx;
		height: 100upx;
		display: flex;
		background-color: #ffffff;
		color: black;
		font-weight: 600;
	}

	.settxt {
		width: 160upx;
		height: 100upx;
		line-height: 100upx;
		font-size: 28upx;
		margin-left: 30upx;
	}

	.setresult {
		width: 100upx;
		height: 100upx;
		line-height: 100upx;
		font-size: 28upx;
	}
</style>