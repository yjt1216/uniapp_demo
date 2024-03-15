require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_c/pages/qqmap_location/track_location"],{815:function(t,e,n){"use strict";(function(t,e){var i=n(4);n(29);i(n(25));var o=i(n(816));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n(1)["default"],n(2)["createPage"])},816:function(t,e,n){"use strict";n.r(e);var i=n(817),o=n(819);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(821);var r,u=n(57),d=Object(u["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"1665d39a",null,!1,i["components"],r);d.options.__file="bundle_c/pages/qqmap_location/track_location.vue",e["default"]=d.exports},817:function(t,e,n){"use strict";n.r(e);var i=n(818);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},818:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return r})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return i}));try{i={uNavbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(n.bind(null,1056))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement;t._self._c},a=!1,r=[];o._withStripped=!0},819:function(t,e,n){"use strict";n.r(e);var i=n(820),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},820:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{endMarker:{latitude:40.002884,longitude:116.488778},showpickerStart:!1,showpickerEnd:!1,pickerValue:Number(new Date),mapContext:null,nextPointIndex:1,durationTime:1e3,polyline:[{width:8,points:[],arrowLine:!0,color:"#3591FC"}],polygons:[],markers:[{id:1,width:40,height:40,latitude:0,longitude:0,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png",anchor:{x:.5,y:1}}],isDtail:!1,isQuery:!0,isStart:!1,latitude:39.909,longitude:116.39742,covers:[{id:110,latitude:39.909,longitude:116.39742,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png",width:"20",height:"20"}]}},onReady:function(){this.mapContext=t.createMapContext("myMap",this)},onLoad:function(t){this.getTrack()},methods:{getTrack:function(){this.polyline[0].points=[{latitude:39.997761,longitude:116.478935},{latitude:39.997825,longitude:116.478939},{latitude:39.998549,longitude:116.478912},{latitude:39.998555,longitude:116.478998},{latitude:39.998566,longitude:116.479282},{latitude:39.998528,longitude:116.479658},{latitude:39.998453,longitude:116.480151},{latitude:39.998302,longitude:116.480784},{latitude:39.998184,longitude:116.481149},{latitude:39.997997,longitude:116.481573},{latitude:39.997846,longitude:116.481863},{latitude:39.997718,longitude:116.482072},{latitude:39.997718,longitude:116.482362},{latitude:39.998935,longitude:116.483633},{latitude:39.998968,longitude:116.48367},{latitude:39.999861,longitude:116.484648}],this.initMarkers()},initMarkers:function(){this.markers[0].latitude=this.polyline[0].points[0].latitude,this.markers[0].longitude=this.polyline[0].points[0].longitude;var t=this.polyline[0].points.length-1,e=this.polyline[0].points[t].latitude,n=this.polyline[0].points[t].longitude;this.markers.push({id:0,latitude:this.polyline[0].points[0].latitude,longitude:this.polyline[0].points[0].longitude,width:24,height:32,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png"}),this.markers.push({id:1,latitude:this.endMarker.latitude,longitude:this.endMarker.longitude,width:24,height:32,iconPath:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png"}),this.endMarker.latitude!==e&&this.endMarker.longitude!==n&&this.markers.push({id:2,latitude:e,longitude:n,width:24,height:32,callout:{content:"当前",color:"#ff0000",fontSize:12,borderRadius:4,bgColor:"#ffffff",padding:2,display:"ALWAYS",textAlign:"center"}})},handleStartMove:function(){this.isStart=!0,this.movePoint()},handleStopMove:function(){this.isStart=!1},movePoint:function(){var t=this;this.mapContext.translateMarker({duration:800,markerId:this.markers[0].id,autoRotate:!0,rotate:15,moveWithRotate:!1,destination:{latitude:this.polyline[0].points[this.nextPointIndex].latitude,longitude:this.polyline[0].points[this.nextPointIndex].longitude},animationEnd:function(e){t.nextPointIndex<t.polyline[0].points.length-1?(t.nextPointIndex++,t.isStart&&t.movePoint()):(t.nextPointIndex=1,t.isStart=!1)}})}}};e.default=n}).call(this,n(2)["default"])},821:function(t,e,n){"use strict";n.r(e);var i=n(822),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},822:function(t,e,n){}},[[815,"common/runtime","common/vendor"]]]);