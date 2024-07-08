<template>
  <view>
    <canvas canvas-id="PjnCNHAfIuSuqvLxbJEMjWOVlHCSrOFV" id="PjnCNHAfIuSuqvLxbJEMjWOVlHCSrOFV" type="2d" class="charts" @touchend="tap"/>
  </view>
</template>

<script>
import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js';
var uChartsInstance = {};
export default {
  data() {
    return {
      cWidth: 750,
      cHeight: 500,
      pixelRatio: 2,
    };
  },
  onReady() {
    //这里的 750 对应 css .charts 的 width
    this.cWidth = uni.upx2px(750);
    //这里的 500 对应 css .charts 的 height
    this.cHeight = uni.upx2px(500);
    this.pixelRatio = uni.getSystemInfoSync().pixelRatio;
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
                data: [{"name":"一班","value":50},{"name":"二班","value":30},{"name":"三班","value":20},{"name":"四班","value":18},{"name":"五班","value":8}]
              }
            ]
          };
        this.drawCharts('PjnCNHAfIuSuqvLxbJEMjWOVlHCSrOFV', res);
      }, 500);
    },
    drawCharts(id,data){
      const query = uni.createSelectorQuery().in(this);
      query.select('#' + id).fields({ node: true, size: true }).exec(res => {
        if (res[0]) {
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
          canvas.width = res[0].width * this.pixelRatio;
          canvas.height = res[0].height * this.pixelRatio;
          uChartsInstance[id] = new uCharts({
            type: "rose",
            context: ctx,
            width: this.cWidth * this.pixelRatio,
            height: this.cHeight * this.pixelRatio,
            series: data.series,
            pixelRatio: this.pixelRatio,
            animation: true,
            timing: "easeOut",
            duration: 1000,
            rotate: false,
            rotateLock: false,
            background: "#FFFFFF",
            color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
            padding: [5,5,5,5],
            fontSize: 13,
            fontColor: "#666666",
            dataLabel: true,
            dataPointShape: true,
            dataPointShapeType: "solid",
            touchMoveLimit: 60,
            enableScroll: false,
            enableMarkLine: false,
            legend: {
              show: true,
              position: "left",
              lineHeight: 25,
              float: "center",
              padding: 5,
              margin: 5,
              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "rgba(0,0,0,0)",
              borderWidth: 0,
              fontSize: 13,
              fontColor: "#666666",
              hiddenColor: "#CECECE",
              itemGap: 10
            },
            extra: {
              rose: {
                type: "area",
                minRadius: 50,
                activeOpacity: 0.5,
                activeRadius: 10,
                offsetAngle: 0,
                labelWidth: 15,
                border: false,
                borderWidth: 2,
                borderColor: "#FFFFFF",
                linearType: "none"
              },
              tooltip: {
                showBox: true,
                showArrow: true,
                showCategory: false,
                borderWidth: 0,
                borderRadius: 0,
                borderColor: "#000000",
                borderOpacity: 0.7,
                bgColor: "#000000",
                bgOpacity: 0.7,
                gridType: "solid",
                dashLength: 4,
                gridColor: "#CCCCCC",
                boxPadding: 3,
                fontSize: 13,
                lineHeight: 20,
                fontColor: "#FFFFFF",
                legendShow: true,
                legendShape: "auto",
                splitLine: true,
                horizentalLine: false,
                xAxisLabel: false,
                yAxisLabel: false,
                labelBgColor: "#FFFFFF",
                labelBgOpacity: 0.7,
                labelFontColor: "#666666"
              }
            }
          });
        }else{
          console.error("[uCharts]: 未获取到 context");
        }
      });
    },
    tap(e){
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    }
  }
};
</script>

<style scoped>
  .charts{
    width: 750rpx;
    height: 500rpx;
  }
</style>