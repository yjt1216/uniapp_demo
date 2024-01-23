<template>
  <view class="charts-box">
    <!-- <qiun-data-charts 
      type="map"
      :opts="config"
      :chartData="chartsDataMap"
    /> -->
	<qiun-data-charts type="map" :canvas2d="true" :opts="config" canvasId="mapma" :chartData="chartsDataMap"
		tooltipFormat="tooltipFun" @getIndex="getIndex" />
  </view>
</template>

<script>
	import mapdata from '@/sheep/mock/mapdata.json' //自己的存放路径 我这是在ucharts 实例拷下来的 下面有我的这个文件
	import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js' //在uniapp 插件库下载下来就是这个路径 可以自己改
	
	export default {
		name:'chart-map',
		props: {
			chartsDataMap: {
				type: Object,
				default(){
					return {}
				}
			},
			// cityOrderList:{
			// 	type: Object,
			// 	default(){
			// 		return {}
			// 	}
			// }
		},
		data() {
			return {
				
				// 覆盖的是 option
				config: {
					extra: {
						map: {
							mercator: true
						}
					}
				}				
			};
		},
		created() {
		
			//@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js 更详细配置的查看此处
			// 文档可看 https://ext.dcloud.net.cn/plugin?id=271
		
			//https://demo.ucharts.cn/#/  在线生成工具 配置代码config-ucharts.js内容
			uCharts.map = {
				"type": "map",
				"canvasId": "",
				"canvas2d": false,
				"background": "none",
				"animation": true,
				"timing": "easeOut",
				"duration": 1000,
				"color": ['#ff4455'],
				"padding": [
					0,
					0,
					0,
					0
				],
				"fontSize": 8,
				"rotate": false,
				"errorReload": true,
				"fontSize": 8,
				"fontColor": "#666666",
				"enableScroll": false,
				"touchMoveLimit": 60,
				"enableMarkLine": false,
				"dataLabel": true,
				"dataPointShape": true,
				"dataPointShapeType": "solid",
				"tapLegend": true,
				"extra": {
					"map": {
						"border": true,
						"mercator": false,
						"borderWidth": 1,
						"borderColor": "#666666",
						"fillOpacity": 0.6,
						"activeBorderColor": "#55aa00",
						"activeFillColor": "#FF0033", //设置 鼠标 悬停 地图展示的背景颜色
						"activeFillOpacity": 1
					},
					"tooltip": {
						"showBox": true,
						"showArrow": true,
						"showCategory": false,
						"borderWidth": 0,
						"borderRadius": 0,
						"borderColor": "#000000",
						"borderOpacity": 0.7,
						"bgColor": "#000000",
						"bgOpacity": 0.7,
						"gridType": "solid",
						"dashLength": 4,
						"gridColor": "#CCCCCC",
						"fontColor": "#FFFFFF",
						"splitLine": true,
						"horizentalLine": false,
						"xAxisLabel": false,
						"yAxisLabel": false,
						"labelBgColor": "#FFFFFF",
						"labelBgOpacity": 0.7,
						"labelFontColor": "#666666"
					}
				}
			}
		
			//模拟从服务器获取数据
			// this.getServerData()
		
			//自定义格式化Tooltip显示内容   弹款
			uCharts.formatter.tooltipFun = (item, category, index, opts) => {
				// console.log(item, index, "=item, category, index, opts=");
				// return item.data.storeSym ? `${item.name}地区门店数量：${item.data.storeSym}` : '暂无门面'
				return item.properties.childrenNum ? `${item.name}地区门店数量：${item.properties.childrenNum}` : '暂无门面'
			}
		
		},
		mounted() {
			// this.getServerData();
		},
		methods: {
			
			// 根据条件添加颜色
			addColor(count) {
				if (count > 800) {
					return '#bc3e10';
				} else if (count > 700) {
					return '#fc5902';
				} else if (count > 500) {
					return '#fc9c02';
				} else if (count > 400) {
					return '#fbdb0f';
				} else if (count > 200) {
					return '#93ce05';
				} else {
					return '#62ae02';
				}
			},
			//鼠标点击地图 会触发该事件
			getIndex(e) { // 点击地图进行操作
				console.log(e, "===uCharts====")
			}
		 }
	};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box {
    width: 100%;
    height: 400px;
  }
</style>