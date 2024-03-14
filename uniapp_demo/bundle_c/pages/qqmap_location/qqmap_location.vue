<!-- 路线轨迹回放 -->
<template>
	<view class="wrap">
		<!-- 缩放视野以包含所有给定的坐标点  :include-points="polygons[0].points" -->
		<map
			id="myMap"
			style="height: 100vh; width:100%;"
			:latitude="map.latitude"
			:longitude="map.longitude"
			
			:polyline="polyline"
			:show-location="true"
			:polygons="polygons"
			:markers="markers">
		</map>
		
	</view>
</template>

<script>
import {wgs84togcj02} from "@/sheep/utils/tools.js"

export default {
	name: '',
	data() {
		return {		
			nextPointIndex: 1,
			// 120.737732,31.2666
			map: {//地图对象
				latitude: '31.2666',
				longitude: '120.737732',
			},
			polyline: [{
				points: [],
				color: '#0000FF',
				width: 10,
				borderWidth: 2
			}],
			polygons:[],
			markers:[],
		}
	},
	created() {
		this.mapContext = uni.createMapContext('myMap', this);
	},
	onLoad() {
       
	},
	onShow() {
        this.getTrack();
	},
	methods: {
		//获取轨迹记录
		getTrack(e){
			const that = this;
			
			//120.737732,31.2666
			//120.74142,31.267052
			//120.745336,31.266823
			//120.748544,31.269629
			
			let geometry=[
                {"time":"2022-08-14 22:55:37","lng":120.737732,"lat":31.2666},
				{"time":"2022-08-14 22:55:41", "lng":120.74142,"lat":31.267052},
				{"time":"2022-08-14 22:55:41", "lng":120.745336,"lat":31.266823},
				{"time":"2022-08-14 22:55:47", "lng":120.748544,"lat":31.269629}
			]
			let arr = [];
            let arr2 = [];
			// that.map.latitude = wgs84togcj02(geometry[0].lng, geometry[0].lat)[1];
			// that.map.longitude = wgs84togcj02(geometry[0].lng, geometry[0].lat)[0];
			
			that.map.latitude = 31.2666;
			that.map.longitude = 120.737732;
			
				that.markers.push({
					id: 0,
					latitude: that.map.latitude,
					longitude: that.map.longitude,
					width:24,
					height:32,
					// iconPath: require('../../static/images/touxiang.png'),
					callout:{
						content: '开始：',
						color:"#dc8f21",
						fontSize:12,
						borderRadius:4,
						bgColor:"#ffffff",
						padding:2,
						display:"ALWAYS",
						textAlign:"center",
					}
				})
			
			JSON.parse(JSON.stringify(geometry)).forEach((item,index) => {
				let obj = {};
				// obj['latitude'] = wgs84togcj02(item.lng, item.lat)[1];
				// obj['longitude'] = wgs84togcj02(item.lng, item.lat)[0];
				obj['latitude'] = item.lat;
				obj['longitude'] = item.lng;
				arr.push(obj);
				arr2.push([item.lng,item.lat]);
				if(index==geometry.length-1 ){
					that.markers.push({
						id: 1,
						latitude: obj.latitude,
						longitude: obj.longitude,
						width:24,
						height:32,
						// iconPath: require('../../static/images/touxiang.png'),
						callout:{
							content: '结束：',
							color:"#ffffff",//字体颜色
							fontSize:12,
							borderRadius:4,
							bgColor:"#FF0000",
							padding:2,
							display:"ALWAYS",
							textAlign:"center",
						}
					})
				}
			});
			that.polyline = [{
				points: arr,//经纬度数组
				color: '#dc8f21',//线的颜色
				width: 10,//线的宽度
				borderWidth: 2, //线的厚度
				arrowLine: true, //带箭头的线
                //colorList:[],//彩虹线
                borderColor:'#dc8f21',//线的边框颜色
                //arrowIconPath:'',//更换箭头图标,在arrowLine为true时生效
                //dottedLine:'',//是否虚线,默认false
			}];
            
			//动态轨迹 方法二
			// this.movePoint();
		},
		//实时轨迹
		movePoint(){
			let durationTime = Math.ceil(30000 / this.polyline[0].points.length)	//默认播放全程使用30秒，计算相连两点动画时长
			this.mapContext.translateMarker({
				duration: durationTime,
				markerId: 1,
				destination: {
					latitude: this.polyline[0].points[this.nextPointIndex].latitude,
					longitude: this.polyline[0].points[this.nextPointIndex].longitude
				},
				animationEnd: res => {
					//播放结束，继续移动到下一个点，最后一个点时结束移动
					if (this.nextPointIndex < this.polyline[0].points.length - 1) {
						this.nextPointIndex++
							this.movePoint()
					} else {
						this.nextPointIndex = 1
						
					}
				}
			})
		},
	}
}
</script>