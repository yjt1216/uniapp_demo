require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_b/pages/chart_demo/chart_map"],{730:function(e,t,r){"use strict";(function(e,t){var o=r(4);r(29);o(r(25));var n=o(r(731));e.__webpack_require_UNI_MP_PLUGIN__=r,t(n.default)}).call(this,r(1)["default"],r(2)["createPage"])},731:function(e,t,r){"use strict";r.r(t);var o=r(732),n=r(734);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r(737);var c,i=r(57),u=Object(i["default"])(n["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);u.options.__file="bundle_b/pages/chart_demo/chart_map.vue",t["default"]=u.exports},732:function(e,t,r){"use strict";r.r(t);var o=r(733);r.d(t,"render",(function(){return o["render"]})),r.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),r.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),r.d(t,"components",(function(){return o["components"]}))},733:function(e,t,r){"use strict";var o;r.r(t),r.d(t,"render",(function(){return n})),r.d(t,"staticRenderFns",(function(){return c})),r.d(t,"recyclableRender",(function(){return a})),r.d(t,"components",(function(){return o}));try{o={uNavbar:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(r.bind(null,1143))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var e=this,t=e.$createElement;e._self._c},a=!1,c=[];n._withStripped=!0},734:function(e,t,r){"use strict";r.r(t);var o=r(735),n=r.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},735:function(e,t,r){"use strict";var o=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(11)),a=o(r(667)),c=o(r(736)),i={data:function(){return{chartsDataMap:{series:[]},config:{extra:{map:{mercator:!0}}}}},created:function(){var e;c.default.map=(e={type:"map",canvasId:"",canvas2d:!1,background:"none",animation:!0,timing:"easeOut",duration:1e3,color:["#ff4455"],padding:[0,0,0,0],fontSize:8,rotate:!1,errorReload:!0},(0,n.default)(e,"fontSize",8),(0,n.default)(e,"fontColor","#666666"),(0,n.default)(e,"enableScroll",!1),(0,n.default)(e,"touchMoveLimit",60),(0,n.default)(e,"enableMarkLine",!1),(0,n.default)(e,"dataLabel",!0),(0,n.default)(e,"dataPointShape",!0),(0,n.default)(e,"dataPointShapeType","solid"),(0,n.default)(e,"tapLegend",!0),(0,n.default)(e,"extra",{map:{border:!0,mercator:!1,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#55aa00",activeFillColor:"#FF0033",activeFillOpacity:1},tooltip:{showBox:!0,showArrow:!0,showCategory:!1,borderWidth:0,borderRadius:0,borderColor:"#000000",borderOpacity:.7,bgColor:"#000000",bgOpacity:.7,gridType:"solid",dashLength:4,gridColor:"#CCCCCC",fontColor:"#FFFFFF",splitLine:!0,horizentalLine:!1,xAxisLabel:!1,yAxisLabel:!1,labelBgColor:"#FFFFFF",labelBgOpacity:.7,labelFontColor:"#666666"}}),e),this.getServerData(),c.default.formatter.tooltipFun=function(e,t,r,o){return e.data.storeSym?"".concat(e.name,"：").concat(e.data.storeSym):"暂无门面"}},methods:{getServerData:function(){var e=this,t=[{storeSym:823,companyNumber:0,storeName:"北京"},{storeSym:753,companyNumber:0,storeName:"天津"},{storeSym:653,companyNumber:0,storeName:"上海"},{storeSym:553,companyNumber:0,storeName:"新疆"},{storeSym:832,companyNumber:0,storeName:"西藏"}],r=a.default.features.map((function(r){var o=t.find((function(e){return e.storeName==r.properties.name}))||{storeSym:0,companyNumber:0,storeName:r.properties.name};return r.data=o,r.color=e.addColor((null===o||void 0===o?void 0:o.storeSym)||0),r}));console.log("统计地图mapseries",r),this.chartsDataMap.series=r},addColor:function(e){return e>800?"#bc3e10":e>700?"#fc5902":e>500?"#fc9c02":e>400?"#fbdb0f":e>200?"#93ce05":"#62ae02"},getIndex:function(e){console.log(e,"===uCharts====")}}};t.default=i},737:function(e,t,r){"use strict";r.r(t);var o=r(738),n=r.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},738:function(e,t,r){}},[[730,"common/runtime","common/vendor","bundle_b/common/vendor"]]]);