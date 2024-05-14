<template>
  <view class="charts-box">
	  
    <qiun-data-charts 
      type="arcbar"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="qvRScqBGyiDtdgOjnYsKhphqhszjNtmE"
      :animation="false"
      :tooltipShow="false"
      :tapLegend="false"
      :ontap="false"
      :onmouse="false">
	</qiun-data-charts>
    
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {},
      //这里的 opts 是图表类型 type="arcbar" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['arcbar'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        timing: "easeOut",
        duration: 1000,
        rotate: false,
        rotateLock: false,
        color: [ "#81E21A",],
        padding: undefined,
        fontSize: 13,
        fontColor: "#666666",
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: "solid",
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        title: {
          name: "百分比",
          fontSize: 16,
          color: "#505D6F",
          offsetX: 0,
          offsetY: 0
        },
        subtitle: {
          name: "新增注册",
          fontSize: 12,
          color: "#00FF00",
          offsetX: 0,
          offsetY: 10
        },
        extra: {
          arcbar: {
            type: "circle",
            width: 20,
            backgroundColor: "#E9E9E9",
            startAngle: 0.75,
            endAngle: 0.25,
            gap: 2,
            direction: "cw",
            lineCap: "round",
            centerX: 0,
            centerY: 0,
            linearType: "custom",
            customColor: [
				"#73FF80"
            ]
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            series: [
              {
                name: "正确率",
                data: 0.8
              }
            ]
          };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box{
  	/* margin: 10rpx; */
  	width: 300rpx;
  	height: 300rpx;
  	/* background-color: palevioletred; */
  }
</style>