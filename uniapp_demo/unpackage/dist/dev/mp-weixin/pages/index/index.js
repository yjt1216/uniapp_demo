(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{193:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(29);o(t(25));var r=o(t(194));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},194:function(n,e,t){"use strict";t.r(e);var o=t(195),r=t(197);for(var c in r)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(c);t(201);var i,a=t(57),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);u.options.__file="pages/index/index.vue",e["default"]=u.exports},195:function(n,e,t){"use strict";t.r(e);var o=t(196);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},196:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));try{o={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,929))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},c=!1,i=[];r._withStripped=!0},197:function(n,e,t){"use strict";t.r(e);var o=t(198),r=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},198:function(n,e,t){"use strict";(function(n){var o=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(26)),c=o(t(28)),i=o(t(199)),a=(o(t(200)),{data:function(){return{bannerList:[{image:"https://didi.depin.tech/storage/file/2019/09/29/5d904d42e3222.jpg"},{image:"https://didi.depin.tech/storage/file/2019/09/29/5d90512bccb32.jpg"}],bannerImages:[],code:"",state:"",latitude:null,longitude:null}},mounted:function(n){},onLoad:function(e){n.setNavigationBarTitle({title:"mescroll ("+n.getSystemInfoSync().platform+")"})},onReady:function(){},methods:{getUserInfo:function(){return(0,c.default)(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.default.get("user_info");case 2:e=n.sent,console.log("首页getUserInfo--userInfo",e);case 4:case"end":return n.stop()}}),n)})))()},getUserLocation:function(){var n=this;n.$location.getlocation().then((function(n){console.log("首页getLocation",n)})).catch((function(n){console.log("首页getLocation-err",n)}))},shareClick:function(){this.$share.share({title:"分享标题",content:"分享内容",imageUrl:"分享图片链接",url:"分享链接",success:function(){console.log("分享成功")},fail:function(n){console.log("分享失败",n)}})}}});e.default=a}).call(this,t(2)["default"])},201:function(n,e,t){"use strict";t.r(e);var o=t(202),r=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},202:function(n,e,t){}},[[193,"common/runtime","common/vendor"]]]);