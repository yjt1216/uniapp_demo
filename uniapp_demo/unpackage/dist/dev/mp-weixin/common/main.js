(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{0:function(t,e,n){"use strict";(function(t,e,o){var a=n(4),u=a(n(26)),r=a(n(11)),i=a(n(28));n(29);var c=a(n(25)),l=a(n(30)),s=a(n(53)),f=n(58),d=a(n(60)),p=a(n(61)),h=a(n(183)),g=n(186);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}t.__webpack_require_UNI_MP_PLUGIN__=n;var b=function(){n.e("js_sdk/uni-simple-router/link").then(function(){return resolve(n(806))}.bind(null,n)).catch(n.oe)};c.default.prototype.$toast=f.toast,c.default.prototype.$Cache=d.default,c.default.config.productionTip=!1,c.default.component("RouterLink",b),c.default.use(g.router),c.default.mixin(h.default),c.default.use(p.default),l.default.mpType="app",c.default.prototype.$compressImage=(0,i.default)(u.default.mark((function t(){var n,o,a=arguments;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1024,o=a.length>1&&void 0!==a[1]?a[1]:.8,t.abrupt("return",new Promise((function(t,a){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(u){var r=u.tempFilePaths[0];e.getImageInfo({src:r,success:function(u){var r=u.width,i=u.height;e.canvasToTempFilePath({canvasId:"myCanvas",x:0,y:0,width:Math.min(r,n),height:i*(Math.min(r,n)/r),destWidth:Math.min(r,n),destHeight:i*(Math.min(r,n)/r),fileType:"jpg",quality:o,success:function(e){t(e.tempFilePath)},fail:function(t){a(t)}})},fail:function(t){a(t)}})},fail:function(t){a(t)}})})));case 3:case"end":return t.stop()}}),t)})));var w=new c.default(v(v({},l.default),{},{store:s.default}));o(w).$mount()}).call(this,n(1)["default"],n(2)["default"],n(2)["createApp"])},30:function(t,e,n){"use strict";n.r(e);var o=n(31);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(50);var u,r,i,c,l=n(52),s=Object(l["default"])(o["default"],u,r,!1,null,null,null,!1,i,c);s.options.__file="App.vue",e["default"]=s.exports},31:function(t,e,n){"use strict";n.r(e);var o=n(32),a=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=a.a},32:function(t,e,n){"use strict";(function(t,o){var a=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n(33)),r={globalData:{statusBarB:0,customBarH:0},onLaunch:function(){var e=this;console.log("App Launch");t.getWindowInfo();t.getSystemInfo({success:function(t){var n=t.statusBarHeight,a=0;a=n+("android"==t.platform?50:45);var u=o.getMenuButtonBoundingClientRect();a=u.bottom+u.top-n,e.globalData.statusBarH=n,e.globalData.customBarH=a}})},onShow:function(){console.log("App Show 微信静默授权")},onHide:function(){console.log("App Hide")},methods:{getWeiXinJsOpenId:function(){var t=this,e={hospital_id:1e4,back_url:"pages/index/index"};u.default.wechatAuthLogin(e).then((function(e){console.log("H5端时静默授权登录resData",e.data.url),1==e.success&&t.skipLink(e.data.url)})).catch((function(t){console.log("H5端时静默授权登录err",t)}))},skipLink:function(e){t.navigateTo({url:"/pages/webview/webview?link="+e})}}};e.default=r}).call(this,n(2)["default"],n(1)["default"])},50:function(t,e,n){"use strict";n.r(e);var o=n(51),a=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=a.a},51:function(t,e,n){}},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map