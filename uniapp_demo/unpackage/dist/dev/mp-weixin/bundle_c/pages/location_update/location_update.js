require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_c/pages/location_update/location_update"],{831:function(n,o,e){"use strict";(function(n,o){var t=e(4);e(29);t(e(25));var c=t(e(832));n.__webpack_require_UNI_MP_PLUGIN__=e,o(c.default)}).call(this,e(1)["default"],e(2)["createPage"])},832:function(n,o,e){"use strict";e.r(o);var t=e(833),c=e(835);for(var i in c)["default"].indexOf(i)<0&&function(n){e.d(o,n,(function(){return c[n]}))}(i);var a,u=e(57),r=Object(u["default"])(c["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],a);r.options.__file="bundle_c/pages/location_update/location_update.vue",o["default"]=r.exports},833:function(n,o,e){"use strict";e.r(o);var t=e(834);e.d(o,"render",(function(){return t["render"]})),e.d(o,"staticRenderFns",(function(){return t["staticRenderFns"]})),e.d(o,"recyclableRender",(function(){return t["recyclableRender"]})),e.d(o,"components",(function(){return t["components"]}))},834:function(n,o,e){"use strict";var t;e.r(o),e.d(o,"render",(function(){return c})),e.d(o,"staticRenderFns",(function(){return a})),e.d(o,"recyclableRender",(function(){return i})),e.d(o,"components",(function(){return t}));try{t={uNavbar:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(e.bind(null,1056))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var c=function(){var n=this,o=n.$createElement;n._self._c},i=!1,a=[];c._withStripped=!0},835:function(n,o,e){"use strict";e.r(o);var t=e(836),c=e.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){e.d(o,n,(function(){return t[n]}))}(i);o["default"]=c.a},836:function(n,o,e){"use strict";(function(n,t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=e(1602),i=null,a=function(){e.e("bundle_c/components/privacy-popup/privacy-popup").then(function(){return resolve(e(1304))}.bind(null,e)).catch(e.oe)},u={components:{PrivacyPopup:a},data:function(){return{showPrivacy:!1,lastKnownLocation:{},uploadTimer:null,points:[{latitude:22,longitude:98,speed:6.4352341234},{latitude:22,longitude:98,speed:6.4352341234},{latitude:22,longitude:98,speed:6.4352341234}]}},onLoad:function(){i=this},methods:{handleAgreePrivacyAuthorization:function(){},confirmPrivacy:function(){this.showPrivacy=!1,getApp().globalData.showPrivacy=!0,this.clickOpenLocationUpdate()},getPrivacyFun:function(){var o=this;n.getPrivacySetting({success:function(n){console.log(n),n.needAuthorization?o.$refs.privacyPopup.$refs.popup.open():o.clickOpenLocationUpdate()},fail:function(n){console.log(n)},complete:function(){}})},stopLocationFun:function(){t.stopLocationUpdate(),clearInterval(this.uploadTimer),this.uploadTimer=null},clickOpenLocationUpdate:function(){t.authorize({scope:"scope.userLocationBackground",success:function(o){console.log("用户授权定位res1",o),n.startLocationUpdateBackground({success:function(o){console.log("成功开启后台定位res2",o),n.onLocationChange(function(n){var o=n.latitude,e=n.longitude;i.lastKnownLocation={latitude:o,longitude:e},i.uploadTimer||(i.uploadTimer=setInterval((function(){i.uploadLocationFun(i.lastKnownLocation)}),6e4))}.bind(i))},fail:function(n){console.error("开启后台定位失败",n)}})},fail:function(n){console.error("获取定位权限失败",n),t.hideLoading(),this.showPrivacy?this.$refs.privacyPopup.$refs.popup.open():t.showModal({title:"提示！",confirmText:"去设置",showCancel:!0,content:"您已拒绝授权小程序获取定位信息，如需重新授权 可在设置中重新授权",success:function(n){n.confirm&&i.gotoSettingFun()}})}})},uploadLocationFun:function(n){var o=new Date,e=(0,c.timeFormat)(o,"yyyy年mm月dd日 hh时MM分ss秒");console.log("上传定位信息",n,e)},gotoSettingFun:function(){var n="scope.userLocationBackground";t.openSetting({success:function(o){console.log("原生设置页回调->",o);var e=o||{},t=e.authSetting;t.hasOwnProperty(n)&&t[n]&&(console.log("已成功开启位置服务->But这里没有返回任何位置信息相关信息"),i.clickOpenLocationUpdate())},fail:function(){t.hideLoading(),toast("获取位置信息失败，按“右上菜单 - 关于\n - 右上菜单 - 设置 - 位置信息”授权")}})}}};o.default=u}).call(this,e(1)["default"],e(2)["default"])}},[[831,"common/runtime","common/vendor","bundle_c/common/vendor"]]]);