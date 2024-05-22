
<template>
	<view class="content">
		<u-navbar title="map" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		<view class="charts-box" style="height: 400px;">
			<qiun-data-charts type="map" :canvas2d="true" :opts="config" canvasId="mapma" :chartData="chartsDataMap"
				tooltipFormat="tooltipFun" @getIndex="getIndex" />
		</view>
	</view>
</template>

<script>
	//下面是演示地图数据 更希望是从服务器获取
	// http://datav.aliyun.com/portal/school/atlas/area_selector 中国地图的json资源，阿里云的资源地址
	//建议把json下载到本地 
	import mapdata from '@/sheep/mock/mapdata.json' //自己的存放路径 我这是在ucharts 实例拷下来的 下面有我的这个文件
	//引用配置文件 用于改写样式覆盖使用
	import uCharts from '@/pages_ucharts/components/qiun-data-charts/js_sdk/u-charts/config-ucharts.js' 
	import qiunDataCharts from "@/pages_ucharts/components/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue";
	export default {
		components:{
			qiunDataCharts
		},
		data() {
			return {
				//地图数据
				chartsDataMap: {
					series: []
				},
				// 覆盖的是 option
				config: {
					extra: {
						map: {
							mercator: true
						}
					}
				},
				cityOrderList:[
					{
						city_id: 3205,
						city_name: "苏州市",
						num: 203,
						province_name: "江苏省",
						ratio: 98.07,
					},
					{
						city_id: 3201,
						city_name: "南京市",
						num: 4,
						province_name: "江苏省",
						ratio: 1.93,
					},
					{
						city_id: 3203,
						city_name: "无锡市",
						num: 50,
						ratio: 40.55,
						province_name: "江苏省"
					},
					{
						city_id: 3204,
						city_name: "昆山市",
						num: 45,
						ratio: 20.55,
						province_name: "江苏省"
					},
					{
						city_id: 3204,
						city_name: "杭州市",
						num: 55,
						ratio: 21.55,
						province_name: "浙江省"
					}
				]

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
				"color": ['#FAFBFC'],
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
			this.getServerData()

			//自定义格式化Tooltip显示内容  
			uCharts.formatter.tooltipFun = (item, category, index, opts) => {
				// console.log(item, index, "=item, category, index, opts=")
				return item.data.storeSym ? `${item.name}：${item.data.storeSym}` : '暂无门面'
			}

		},
		
		methods: {
			//模拟从服务器获取数据
			getServerData() {
				
				
				// let data = [
				// 	{
				// 		storeSym: 823, //门店数量
				// 		companyNumber: 0, //缺编人数
				// 		storeName: '北京', //地区
				// 	},
				// 	{
				// 		storeSym: 753, //门店数量
				// 		companyNumber: 0, //缺编人数
				// 		storeName: '天津', //地区
				// 	},
				// 	{
				// 		storeSym: 653, //门店数量
				// 		companyNumber: 0, //缺编人数
				// 		storeName: '上海', //地区
				// 	},
				// 	{
				// 		storeSym: 553, //门店数量
				// 		companyNumber: 0, //缺编人数
				// 		storeName: '新疆', //地区
				// 	},
				// 	{
				// 		storeSym: 832, //门店数量
				// 		companyNumber: 0, //缺编人数
				// 		storeName: '西藏', //地区
				// 	},
				// 	{
						
				// 	}
				// ]
				
				let cityList = this.cityOrderList;
				
				// 使用Map来存储省份及对应的num累加值，同时处理省份名称
				const provinceSums = new Map();
				
				cityList.forEach(city => {
					let { province_name, num } = city;
					
					// 如果省份名称中包含"省"字，则去除
					if (province_name.endsWith("省")) {
						province_name = province_name.slice(0, -1);
					}
				
				  // 累加num值
					if (provinceSums.hasOwnProperty(province_name)) {
						provinceSums[province_name] += num;
					} else {
						provinceSums[province_name] = num;
					}
				});
				
				// 将累加结果转换为新的数组
				let newArray = Object.entries(provinceSums).map(([province_name, num]) => ({
					province_name: province_name,
					num: num,
					companyNumber:0
				}));
				
				console.log('统计地图newArray',newArray);

				let mapseries = mapdata.features.map((item) => {
					//根据接口数据查找到当前匹配的数据
					let dataItem = newArray.find((city) => city.province_name == item.properties.name ) || {
						num: 0, //门店数量
						companyNumber: 0, //缺编人数
						province_name: item.properties.name, //地区
					}
					//添加到 json data中
					item.data = dataItem
					//设置颜色
					// item.color = this.addColor(dataItem?.storeSym || 0);
					return item
				})
				console.log('统计地图mapseries',mapseries);
				this.chartsDataMap.series = mapseries
			},
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.charts-box {
		width: 100%;
		height: 360px;
	}
</style>

	
