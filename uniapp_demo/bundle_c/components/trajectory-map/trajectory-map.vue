<template>
	<view>
		<map  
		:longitude="longitude"
		:latitude="latitude"
		:markers="markers" 
		:scale="scale"
		:polyline="polyline"
		:style="{height: height,width:width}"
		></map>
	</view>
</template>


<script>
export default {
	props: {
		height: {
			type: String,
			default: '100vh'
		},
		width: {
			type: String,
			default: '100%'
		},
		points: {
			type: Array,
			default() {
				return []
			}
		},
	},
	data() {
		return {
			maxSpeed: null, // 最快速度的点
			scale: 18, // 地图缩放比例
			markers: [], // 标记点集合
			polyline: [{  
				points:[],
			},], // 坐标点集合
			
			latitude: 39.806466,
			longitude: 98.226473,
			// 31.266634,120.737635
			centerPoint: {
				latitude: 31.266634,
				longitude: 120.737635
			}, // 中间点
		}
	},
	watch: {
		points(e) {
			let that = this;
			if (that.points.length > 0) {
				that.setDateByPoints(that.points);
			}

		},
	},
	created: function () {
		let that = this;
		if (that.points.length > 0) {
			that.setDateByPoints(that.points);
		}
	},
	methods: {
		// 根据速度计算路线颜色
		computePointsSpeed(points) {
			let lineColor = '#ffd500'
			let list = []

			if (!points || !points.length) {
				return list
			}

			let lastArr = []
			let lastSpeed = 0
			for (let i = 0; i < points.length; i++) {
				let speed = this.covertSpeed(points[i].speed)
				if (!this.maxSpeed) {
					this.maxSpeed = points[i]
				} else {
					if (points[i].speed > this.maxSpeed.speed) {
						this.maxSpeed = points[i]
					}
				}
				if (i === points.length - 1 || !speed) {
					// 还剩最后一个不计入
					continue
				}
				let nextPoint = points[i + 1]
				let nextSpeed = this.covertSpeed(points[i + 1].speed)
				if (!nextSpeed) {
					continue
				}
				lastSpeed = speed
				if (!lastArr.length) {
					lastArr.push(points[i], nextPoint)
				} else {
					lastArr.push(nextPoint)
				}
				if (speed <= 20) {
					lineColor = '#ffd500'
					if (nextSpeed > 20) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}
				}
				if (speed > 20 && speed <= 40) {
					lineColor = '#ff8800'
					if (nextSpeed <= 20 || nextSpeed > 40) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}
				}
				if (speed > 40 && speed <= 60) {
					lineColor = '#ff5d00'
					if (nextSpeed <= 40 || nextSpeed > 60) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}

				}
				if (speed > 60 && speed <= 80) {
					lineColor = '#ff4d00'
					if (nextSpeed <= 60 || nextSpeed > 80) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}
				}
				if (speed > 80 && speed <= 100) {
					lineColor = '#ff3d00'
					if (nextSpeed <= 80 || nextSpeed > 100) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}
				}
				if (speed > 100 && speed <= 120) {
					lineColor = '#ff2d00'
					if (nextSpeed <= 100 || nextSpeed > 120) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}
				}
				if (speed > 120) {
					lineColor = '#ff1d00'
					if (nextSpeed <= 120) {
						// 清空
						list.push({
							points: lastArr,
							color: lineColor,
							arrowLine: true, //带箭头的线
							width: 8,
						})
						lastArr = []
					}
				}
			}
			this.centerPoint = points[Math.round(points.length / 2)]
			console.log("centerPoint", this.centerPoint)
			if (!list.length && lastArr.length) {
				list.push({
					points: lastArr,
					color: lineColor,
					arrowLine: true, //带箭头的线
					width: 8,
				})
			}
			return list
		},
		// 设置路线和点
		setDateByPoints(points) {
			let that = this;
			let color = "#ffd500"
			// 标记点集合
			that.polyline = this.computePointsSpeed(points)
			if (!that.polyline.length) {
				that.polyline = [{
					points: points,
					color: color,
					arrowLine: true, //带箭头的线
					width: 8,
				}]
			}
			if (that.maxSpeed) {
				that.maxSpeed.iconPath = '../../static/icon/map/flash.png'
				that.maxSpeed.width = 24
				that.maxSpeed.height = 24
				that.maxSpeed.id = 2
				that.maxSpeed.callout = {
					color: '#5d5d5d',
					fontSize: 14,
					borderRadius: 6,
					padding: 8,
					bgColor: '#fff',
					content: `极速 ${this.covertSpeed(this.maxSpeed.speed)} km/h`
				}
				that.markers.push(this.maxSpeed)
			}
			let start = points[0]
			let end = points[points.length - 1]
			start.id = 1
			start.width = 35
			start.height = 35
			start.iconPath = '../../static/start.png'
			end.id = 3
			end.width = 35
			end.height = 35
			end.iconPath = '../../static/end.png'
			that.markers.push(start, end);
			this.setCenterPoint(start, end)
		},
		// 地图中心点 （计算3个点的中心点）
		setCenterPoint(start, end) {
			this.longitude = (start.longitude + this.centerPoint.longitude + end.longitude) / 3
			this.latitude = (start.latitude + this.centerPoint.latitude + end.latitude) / 3
			let distance1 = this.getDistance(start.latitude, start.longitude, this.centerPoint.latitude, this.centerPoint.longitude)
			let distance2 = this.getDistance(this.centerPoint.latitude, this.centerPoint.longitude, end.latitude, end.longitude)
			const distance = Number(distance1) + Number(distance2)
			console.log('计算两点之间的距离', distance1, distance2, distance)
			if (distance < 200) {
				this.scale = 17
			}
			if (distance >= 200 && distance < 1000) {
				this.scale = 15
			}
			if (distance >= 1000 && distance < 5000) {
				this.scale = 13
			}
			if (distance >= 5000 && distance < 10000) {
				this.scale = 12
			}
			if (distance >= 10000 && distance < 15000) {
				this.scale = 11
			}
			if (distance >= 15000 && distance < 50000) {
				this.scale = 10
			}
			if (distance >= 50000 && distance < 200000) {
				this.scale = 8
			}
			if (distance > 200000) {
				this.scale = 5
			}
		},
		// 速度转换 m/s -> km/h
		covertSpeed(ms) {
			if (ms <= 0) {
				return 0.00
			}
			const kmh = ms * (60 * 60)
			return parseFloat(String(kmh / 1000)).toFixed(2)
		},
		// 计算两坐标点之间的距离
		getDistance: function (lat1, lng1, lat2, lng2) {
			let rad1 = lat1 * Math.PI / 180.0;
			let rad2 = lat2 * Math.PI / 180.0;
			let a = rad1 - rad2;
			let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
			let r = 6378137;
			return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math
				.sin(b / 2), 2)))).toFixed(0)

		},

	},
}
</script>



<style>
</style>