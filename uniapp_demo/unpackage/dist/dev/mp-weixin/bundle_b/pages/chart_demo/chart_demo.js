require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_b/pages/chart_demo/chart_demo"],{600:function(e,t,a){"use strict";(function(e,t){var n=a(4);a(26);n(a(25));var r=n(a(601));e.__webpack_require_UNI_MP_PLUGIN__=a,t(r.default)}).call(this,a(1)["default"],a(2)["createPage"])},601:function(e,t,a){"use strict";a.r(t);var n=a(602),r=a(604);for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a(607);var s,i=a(54),c=Object(i["default"])(r["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],s);c.options.__file="bundle_b/pages/chart_demo/chart_demo.vue",t["default"]=c.exports},602:function(e,t,a){"use strict";a.r(t);var n=a(603);a.d(t,"render",(function(){return n["render"]})),a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),a.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),a.d(t,"components",(function(){return n["components"]}))},603:function(e,t,a){"use strict";var n;a.r(t),a.d(t,"render",(function(){return r})),a.d(t,"staticRenderFns",(function(){return s})),a.d(t,"recyclableRender",(function(){return o})),a.d(t,"components",(function(){return n}));try{n={navBar:function(){return a.e("components/nav-bar/nav-bar").then(a.bind(null,628))},qiunDataCharts:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(a.bind(null,1075))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,a=(e._self._c,{extra:{column:{type:"stack"}}}),n={xAxis:{axisLabel:{color:"#FF0000"}}},r={seriesTemplate:{itemStyle:{normal:{barBorderRadius:[30,30,0,0]}}}},o={extra:{line:{type:"curve"}}},s={seriesTemplate:{smooth:!0}},i={seriesTemplate:{areaStyle:{opacity:.2}}},c={yAxis:{data:[{min:0}]},extra:{area:{type:"curve",addLine:!0,gradient:!0}}},u={legend:{position:"bottom"}},l={legend:{position:"bottom"}};e.$mp.data=Object.assign({},{$root:{a0:a,a1:n,a2:r,a3:o,a4:s,a5:i,a6:c,a7:u,a8:l}})},o=!1,s=[];r._withStripped=!0},604:function(e,t,a){"use strict";a.r(t);var n=a(605),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},605:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(606)),o={data:function(){return{chartsDataColumn1:{},chartsDataColumn2:{},chartsDataColumn3:{},chartsDataColumn4:{},chartsDataColumn5:{},chartsDataPie1:{},chartsDataPie2:{},chartsDataPie3:{},chartsDataPie4:{},chartsDataLine1:{},chartsDataLine2:{},chartsDataLine3:{},ringOpts:{},columneopts:{grid:{left:"3%",right:"4%",bottom:30,top:10,containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",data:[]},seriesTemplate:{label:{show:!0,color:"#666666",position:"right"}}}}},onReady:function(){var e=this;setTimeout((function(){e.getServerData()}),1e3),setTimeout((function(){e.chartsDataColumn1.series=[]}),4e3),setTimeout((function(){e.chartsDataColumn1=JSON.parse(JSON.stringify(r.default.Line)),e.ringOpts={color:["#FF00FF","#AAFF11"],legend:{show:!1}}}),5e3)},methods:{getServerData:function(){this.chartsDataColumn1=JSON.parse(JSON.stringify(r.default.Column));var e=JSON.parse(JSON.stringify(r.default.Column));e.series[0].linearGradient=[0,0,0,1,[{offset:0,color:"#0EE2F8"},{offset:1,color:"#1890FF"}]],e.series[1].linearGradient=[0,0,0,1,[{offset:0,color:"#2BDCA8"},{offset:1,color:"#91CB74"}]],this.chartsDataColumn3=e,this.chartsDataColumn4=JSON.parse(JSON.stringify(r.default.Column)),this.chartsDataColumn5=JSON.parse(JSON.stringify(r.default.Column)),this.chartsDataPie1=JSON.parse(JSON.stringify(r.default.PieA)),this.chartsDataPie2=JSON.parse(JSON.stringify(r.default.PieA)),this.chartsDataPie3=JSON.parse(JSON.stringify(r.default.PieA)),this.chartsDataPie4=JSON.parse(JSON.stringify(r.default.PieA)),this.chartsDataLine1=JSON.parse(JSON.stringify(r.default.Line));for(var t=JSON.parse(JSON.stringify(r.default.Column)),a=0;a<t.series.length;a++)t.series[a].stack="one",t.series[a].barWidth="50%",t.series[a].label={position:"inside",color:"#FFFFFF"};this.chartsDataColumn2=t;var n=JSON.parse(JSON.stringify(r.default.Line));n.series=n.series.reverse(),this.chartsDataLine2=n;var o={categories:["2016","2017","2018","2019","2020","2021"],series:[{name:"成交量A",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#1890FF"},{offset:1,color:"#FFFFFF"}],global:!1}},data:[100,80,95,150,112,132]}]};this.chartsDataLine3=o},complete:function(e){console.log("渲染完成事件",e)},getIndex:function(e){console.log("获取点击索引事件",e)}}};t.default=o},607:function(e,t,a){"use strict";a.r(t);var n=a(608),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},608:function(e,t,a){}},[[600,"common/runtime","common/vendor","bundle_b/common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle_b/pages/chart_demo/chart_demo.js.map