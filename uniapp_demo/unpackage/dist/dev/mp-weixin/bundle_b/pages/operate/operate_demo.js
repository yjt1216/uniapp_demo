require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_b/pages/operate/operate_demo"],{655:function(e,t,a){"use strict";(function(e,t){var r=a(4);a(29);r(a(25));var n=r(a(656));e.__webpack_require_UNI_MP_PLUGIN__=a,t(n.default)}).call(this,a(1)["default"],a(2)["createPage"])},656:function(e,t,a){"use strict";a.r(t);var r=a(657),n=a(659);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a(665);var o,i=a(52),l=Object(i["default"])(n["default"],r["render"],r["staticRenderFns"],!1,null,"38a2bb20",null,!1,r["components"],o);l.options.__file="bundle_b/pages/operate/operate_demo.vue",t["default"]=l.exports},657:function(e,t,a){"use strict";a.r(t);var r=a(658);a.d(t,"render",(function(){return r["render"]})),a.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),a.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),a.d(t,"components",(function(){return r["components"]}))},658:function(e,t,a){"use strict";var r;a.r(t),a.d(t,"render",(function(){return n})),a.d(t,"staticRenderFns",(function(){return o})),a.d(t,"recyclableRender",(function(){return s})),a.d(t,"components",(function(){return r}));try{r={uNavbar:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(a.bind(null,1025))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var e=this,t=e.$createElement;e._self._c},s=!1,o=[];n._withStripped=!0},659:function(e,t,a){"use strict";a.r(t);var r=a(660),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t["default"]=n.a},660:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(26)),s=r(a(11)),o=r(a(28)),i=r(a(661)),l=(r(a(662)),r(a(652))),u=r(a(663)),c=r(a(196)),d=a(189),f=a(58),p=r(a(513));r(a(664));function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,s.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(){Promise.all([a.e("bundle_b/common/vendor"),a.e("bundle_b/components/organ-sales/organ-sales")]).then(function(){return resolve(a(1212))}.bind(null,a)).catch(a.oe)},g=function(){Promise.all([a.e("bundle_b/common/vendor"),a.e("bundle_b/components/organ-order/organ-order")]).then(function(){return resolve(a(1219))}.bind(null,a)).catch(a.oe)},v=function(){Promise.all([a.e("bundle_b/common/vendor"),a.e("bundle_b/components/nurse-register/nurse-register")]).then(function(){return resolve(a(1226))}.bind(null,a)).catch(a.oe)},b=function(){Promise.all([a.e("bundle_b/common/vendor"),a.e("bundle_b/components/map-chart/map-chart")]).then(function(){return resolve(a(1233))}.bind(null,a)).catch(a.oe)},O=function(){a.e("bundle_b/components/service-cate/service-cate").then(function(){return resolve(a(1240))}.bind(null,a)).catch(a.oe)},y={components:{organSales:_,organOrder:g,serviceCate:O,nurseRegister:v,chartMap:b},data:function(){return{hospital_amount_list:[],hospitalAmountData:{},totalAmount:"0",hospital_order_list:[],hospitalOrderData:{},totalOrder:"0",chartsDataPie2:{},isSalesChart:!0,salesOrderLeftImg:"../../static/chart/organ_order_n.png",salesOrderRightImg:"../../static/chart/organ_sold_s.png",serviceCateList:[],nurseRingDate:{},totalNurse:"0",userRingDate:{},totalUser:"0",hospital_nurse_list:[],patientAgeList:[],chartsDataMap:{},city_order_list:[],filterObject:{date_type:1,date_value:1},gradeList:[{label:"周数据",date_type:1},{label:"月数据",date_type:2},{label:"季度数据",date_type:3},{label:"年数据",date_type:4}],weekFilter:[{name:"上周",date_value:1,date_type:1},{name:"本周",date_value:2,date_type:1}],monthFilter:[],quarterFilter:[{name:"第一季度",firstMonth:1,date_type:3,date_value:1},{name:"第二季度",firstMonth:4,date_type:3,date_value:2},{name:"第三季度",firstMonth:7,date_type:3,date_value:3},{name:"第四季度",firstMonth:10,date_type:3,date_value:4}],yearFilter:[],maxDate:[],minDate:[],selectYear:null,selectMonth:null,add_order_amount:{},add_order_num:{},add_hospital:{},add_user:{},add_nurse:{},evaluate:{}}},onLoad:function(){var e=(0,o.default)(n.default.mark((function e(){var t;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.default.get(d.DEFAULT_FILTER);case 2:t=e.sent,t?this.filterObject=t:this.filterObject.date_type=1,this.getData(1),this.initDate();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onReady:function(){var e=this;setTimeout((function(){e.add_order_amount=JSON.parse(JSON.stringify(l.default.add_order_amount)),e.add_order_num=JSON.parse(JSON.stringify(l.default.add_order_num)),e.add_hospital=JSON.parse(JSON.stringify(l.default.add_hospital));var t=JSON.parse(JSON.stringify(l.default.nurse)),a=JSON.parse(JSON.stringify(l.default.user));e.add_nurse=t,e.add_user=a,e.evaluate=JSON.parse(JSON.stringify(l.default.evaluate));var r={hospital_name:"name",num:"value"},n={hospital_name:"name",amount:"value"},s={city_name:"storeName",num:"storeSym"},o=JSON.parse(JSON.stringify(l.default.hospital_order_amount_list)),i=JSON.parse(JSON.stringify(l.default.hospital_order_num_list)),c=JSON.parse(JSON.stringify(l.default.city_order_list));e.city_order_list=c,e.hospital_amount_list=o,e.hospital_order_list=i,o=o.map((function(e){return m(m({},e),{},{amount:parseFloat(e.amount)})}));var d=(0,f.sumValues)(o,"amount"),p=(0,f.sumValues)(i,"num");e.totalAmount="".concat(d),e.totalOrder="".concat(p),e.hospitalAmountData=(0,f.transformListWithRename)(o,n),e.hospitalOrderData=(0,f.transformListWithRename)(i,r);var h=(0,f.renameAndAddLabelShow)(c,s);e.serviceCateList=JSON.parse(JSON.stringify(l.default.service_item_cate_order_num_list)),e.hospital_nurse_list=JSON.parse(JSON.stringify(l.default.hospital_nurse_list));var _=JSON.parse(JSON.stringify(l.default.person)),g={series:[{data:[{name:"新增护士",value:parseFloat(t.add_num)},{name:"原有护士",value:parseFloat(t.old_num)}]}]},v={series:[{data:[{name:"新增用户",value:parseFloat(a.add_num)},{name:"原有用户",value:parseFloat(a.old_num)}]}]};console.log("页面即将销毁userRes",g.series[0].data),console.log("页面即将销毁userRes",v.series[0].data);var b=(0,f.sumValues)(g.series[0].data,"value"),O=(0,f.sumValues)(v.series[0].data,"value");e.totalNurse="".concat(b),e.totalUser="".concat(O),e.nurseRingDate=g,e.userRingDate=v,e.patientAgeList=_.age;var y=u.default.features.map((function(t){var a=h.find((function(e){return e.storeName==t.properties.name+"市"}))||{storeSym:0,companyNumber:0,storeName:t.properties.name};return t.data=a,t.color=e.addColor((null===a||void 0===a?void 0:a.storeSym)||0),t}));e.chartsDataMap.series=y}),300)},beforeDestroy:function(){var e=(0,o.default)(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.default.set(d.DEFAULT_FILTER,this.filterObject);case 2:console.log("页面即将销毁");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{addColor:function(e){return e>800?"#bc3e10":e>700?"#fc5902":e>500?"#fc9c02":e>400?"#fbdb0f":e>200?"#93ce05":"#62ae02"},salesOrderClick:function(){this.isSalesChart=!this.isSalesChart,this.totalAmount="1000.99",this.totalOrder="100",console.log("ring订单",this.totalAmount,this.totalOrder),this.isSalesChart?(this.salesOrderLeftImg="../../static/chart/organ_order_n.png",this.salesOrderRightImg="../../static/chart/organ_sold_s.png"):(this.salesOrderLeftImg="/bundle_b/static/chart/organ_order_s.png",this.salesOrderRightImg="../../static/chart/organ_sold_n.png")},getData:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.loading=!0,this.pageCurrent=e,this.request({pageSize:this.pageSize,pageCurrent:e,value:a,success:function(e){t.tableDataList=e.data,t.total=e.total,t.loading=!1}})},request:function(e){var t=e.pageSize,a=e.pageCurrent,r=e.success,n=e.value,s=i.default.length,o=i.default.filter((function(e,r){var n=r-(a-1)*t;return n<t&&n>=0}));n&&(o=[],i.default.forEach((function(e){-1!==e.name.indexOf(n)&&o.push(e)})),s=o.length),setTimeout((function(){"function"===typeof r&&r({data:o,total:s})}),500)},clickTagFun:function(e){if(console.log("用户点击item",e),this.filterObject.date_type!==e.date_type&&(this.filterObject.date_type=e.date_type),4===this.filterObject.date_type){var t=new Date;this.filterObject.date_value=t.getFullYear()}else 2===this.filterObject.date_type?this.getMonths():this.filterObject.date_value=1;console.log("用户切换类型filterObject",this.filterObject)},itemClick:function(e){this.filterObject.date_value=e.date_value,4===this.filterObject.date_type&&(this.selectYear=e.date_value,console.log("用户选择年份 = ",this.selectYear),this.getPastQuartersInYear(this.selectYear)),2===this.filterObject.date_type&&(this.selectMonth=e.date_value),console.log("用户点击filterObject",this.filterObject)},dateToArr:function(e){return e||(e=new Date),(0,p.default)(e).format("YYYY-MM").split("-").map((function(e){return Number(e)}))},initDate:function(){var e=this;return(0,o.default)(n.default.mark((function t(){var a,r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=new Date,e.selectYear=a.getFullYear(),e.selectMonth=a.getMonth()+1,r=e.dateToArr(),e.minDate=[r[0]-5,1],e.maxDate=[r[0],12],e.getYears(),e.getMonths(),e.getPastQuartersInYear(e.selectYear);case 9:case"end":return t.stop()}}),t)})))()},getYears:function(){for(var e=2019,t=new Date,a=t.getFullYear(),r=[],n=e;n<=a;n++)r.push({name:"".concat(n,"年"),date_value:n,date_type:3});this.yearFilter=r},getPastQuartersInYear:function(e){for(var t=[{name:"第一季度",firstMonth:1,date_type:3,date_value:1},{name:"第二季度",firstMonth:4,date_type:3,date_value:2},{name:"第三季度",firstMonth:7,date_type:3,date_value:3},{name:"第四季度",firstMonth:10,date_type:3,date_value:4}],a=[],r=(new Date).getMonth()+1,n=0;n<4;n++){var s=3*n+1,o=s+2;e===(new Date).getFullYear()?s<=r&&o>=r&&a.push(t[n]):a.push(t[n])}return this.quarterFilter=a,a},getMonths:function(){var e=Array.from({length:12},(function(e,t){return t+1})),t=new Date,a=t.getFullYear(),r=1,n=this.selectYear==a?t.getMonth()+1:12,s=e.slice(r-1,n-r+1),o=[];s.forEach((function(e){var t={date_type:2};t.name=e+"月",t.date_value=e,o.push(t)})),this.monthFilter=o,console.log("获取月份 list = ",this.monthFilter)}}};t.default=y},665:function(e,t,a){"use strict";a.r(t);var r=a(666),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t["default"]=n.a},666:function(e,t,a){}},[[655,"common/runtime","common/vendor","bundle_b/common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle_b/pages/operate/operate_demo.js.map