<template>
	<view>
		<u-navbar title="全国地图" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="charts-box">
			<qiun-data-charts 
				type="map"
				canvas2d=""
				:chartData="chartData"
				:opts="opts"
				:pageScrollTop="100"
				tooltipFormat="mapFormat"
				@complete="complete"
				@getIndex="getIndex"
			/>
			<!-- 这里是图例，根据需求自行修改 -->
			<!-- <view class="charts-legend" v-if="chartData.series.length>0">
				<view><view class="legend-item" style="opacity: 1;"></view>1000</view>
				<view><view class="legend-item" style="opacity: 0.8;"></view>800</view>
				<view><view class="legend-item" style="opacity: 0.6;"></view>600</view>
				<view><view class="legend-item" style="opacity: 0.4;"></view>400</view>
				<view><view class="legend-item" style="opacity: 0.2;"></view>200</view>
				<view><view class="legend-item" style="opacity: 0.01;"></view>0</view>
			</view> -->
			<!-- 这里是标记点，如果需要其他图片背景，请修改points-box这个css的样式 -->
			<!-- <block v-for="(item, index) in markPoints" :key="index">
				<view class="points-box" :style="{top:(item.y - 50 ) + 'px',left:(item.x - 25) +'px'}" @click="clickPoint(item)">
				  <view style="padding-top: 12px;">{{item.value}}</view>
				</view>
			</block> -->
		</view>
	</view>
</template>

<script>
  import china from '@/sheep/mock/china.json';
  // 下面是北京的地图数据，实际应用过程中，请从网络获取
  import p110000 from '@/sheep/mock/110000.json';
  
	// 经纬度转画布坐标
	function coordinateToPoint(longitude, latitude, bounds, scale, xoffset, yoffset, mercator) {
		var x = longitude;
		var y = latitude;
		if(mercator == true){
		  x = longitude * 20037508.34 / 180;
		  y = Math.log(Math.tan((90 + latitude) * Math.PI / 360)) / (Math.PI / 180);
		  y = y * 20037508.34 / 180;
		}
		return {
		  x: (x - bounds.xMin) * scale + xoffset,
		  y: (bounds.yMax - y) * scale + yoffset
		};
	}
  
	export default {
		data() {
			return {
				opts:{
					update:true,
					fontSize:10,
					extra:{
						map:{
							mercator:true,
						},
					},
				},
				chartData: {
					series:[]
				},
				markPoints:[],
				layout:'china'
			}
		},
		onLoad() {
			this.drawChina();
		},
		methods: {
			drawChina(){
				uni.setNavigationBarTitle({
					title: '地图外部自定义标记点'
				});
				setTimeout(() => {
					let series = china.features;
				  // 这里循环一下series，把需要的数据增加到serie的属性中，fillOpacity是根据数据来显示的颜色层级透明度
					for (var i = 0; i < series.length; i++) {
						series[i].value = Math.floor(Math.random() * 1000)
						series[i].fillOpacity = series[i].value / 1000
						series[i].color = "#0D9FD8"
					}
					this.chartData = {
						series: series
					};
				},100);
			},
			complete(e){
				// 这里拿到了渲染完成事件
				console.log('complete',e);
					// 这里判断了是中国地图还是各省份的地图，根据需求自行修改
				if(this.layout !== 'china'){
					return;
				}
					// 模拟的标记点数据
				const markPoints = [
					{
						latitude:44.315561,
						longitude:114.059024,
						value: e.opts.series[4].value,
						name:'内蒙古'
					},
					{
						latitude:35.726402,
						longitude:96.043531,
						value: e.opts.series[28].value,
						name:'青海'
					}
				];
					// 获取到uCharts中的地图参数
					const mapData = e.opts.chartData.mapData;
					// 用uCharts中的地图参数换取相对画布的坐标点
					for (var i = 0; i < markPoints.length; i++) {
					  const points = coordinateToPoint(markPoints[i].longitude, markPoints[i].latitude, mapData.bounds, mapData.scale, mapData.xoffset, mapData.yoffset, mapData.mercator)
					  markPoints[i].x = points.x;
					  markPoints[i].y = points.y;
					}
					console.log('markPoints',markPoints);
					this.markPoints = markPoints;
					// 以山东为例默认显示的tooltip方法，演示如何通过地图坐标换取tooltip坐标。（不需要请删除此段，因为动态修改了opts，所以会导致出现两次渲染完成事件）
					// 注：如果不是APP，也可以通过引入config-ucharts.js来用uCharts实例的showToolTip方法来实现，APP只能通过opts.tooltip这种方式来调用默认显示的tooltip
					const index = 14;
					const centroid = china.features[index].properties.centroid;
					const points = coordinateToPoint(centroid[0], centroid[1], mapData.bounds, mapData.scale, mapData.xoffset, mapData.yoffset, mapData.mercator)
					// let tmpOpts = this.opts;
					// const textList = [
					//   {text:"山东省详细信息",color:null},
					//   { text: '目标值：888万元', color: '#facc14' },
					//   { text: '完成量：666万元', color: '#2fc25b' },
					// ];
					// tmpOpts.tooltip={
					// 	index: index,
					// 	offset: points,
					// 	textList:textList
					// };
					// this.opts = JSON.parse(JSON.stringify(tmpOpts));
				  },
				  // 点击标记点图片的事件
				clickPoint(e){
					console.log('clickPoint',e);
					uni.showModal({
						title: e.name,
						content: '销售金额：'+e.value+'万元',
						success: function (res) {
						}
					});
				},
				  // 点击地图获取点击的索引
				getIndex(e){
					console.log(this.layout);
					console.log('getIndex',e.currentIndex,china.features[25]);
					console.log(this.layout);
					if(this.layout == 'china'){
						if(e.currentIndex > -1){
							this.layout = 'province';
							this.drawProvince(china.features[e.currentIndex].properties)
						}
					}else{
					  if(e.currentIndex == -1){
						this.layout = 'china';
						this.drawChina()
					  }else{
						uni.showModal({
							title: this.chartData.series[e.currentIndex].properties.name,
							content: '销售金额：'+this.chartData.series[e.currentIndex].value+'万元',
							success: function (res) {
							}
						});
					  }
					}
				},
				drawProvince(properties){
					uni.setNavigationBarTitle({
						// title: properties.name
					  title: '点空白返回中国地图'
					});
					// 复位一下配置
					this.chartData = {
					  series:[]
					};
					// 这里复位opts是因为上面给opts赋值了tooltip，用以演示默认显示的tooltip，如果不需要默认显示tooltip，请删除本段，否则会导致出现两次渲染完成事件
					this.opts = {
						fontSize:10,
						extra:{
							map:{
								mercator:true,
							},
						},
					};
					this.markPoints = [];
				
					// 模拟获取网络地图数据
					uni.request({
					  url: 'localhost?adcode='+properties.adcode,//请更换为您的服务器地址
					  complete: (res)=> {
						// 根据adcode请求到对应的地图数据，这里仅用北京的数据模拟对应的省份
						let series = p110000.features;
						for (var i = 0; i < series.length; i++) {
						  series[i].value = Math.floor(Math.random() * 1000)
						  series[i].fillOpacity = series[i].value / 1000
						  series[i].color = "#0D9FD8"
						}
						this.chartData = {
						  series: series
						};
					  }
					})
				}
			}
	}
</script>

<style>
	.charts-box {
	  width: 100vw;
	  height: 100vw;
    position: relative;
	}
  .charts-legend {
    position: absolute;
    bottom: 0px;
    left: 10px;
    font-size: 10px;
  }
  .legend-item {
    display: inline-block;
    width: 15px;
    height: 10px;
    margin-right: 5px;
    background-color: #0D9FD8;
  }
  .points-box {
    position: absolute;
    width: 50px;
    height: 50px;
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
    background: url('/bundle_b/static/chart/point.png');
    cursor: pointer;
    background-size:100% auto;
    background-position: center;
    background-repeat: no-repeat;
    background-origin:content-box;
  }
</style>
