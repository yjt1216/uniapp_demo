require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_b/pages/pay/pay_page"],{525:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var a=o(t(526));n.__webpack_require_UNI_MP_PLUGIN__=t,e(a.default)}).call(this,t(1)["default"],t(2)["createPage"])},526:function(n,e,t){"use strict";t.r(e);var o=t(527),a=t(529);for(var r in a)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t(531);var c,i=t(53),u=Object(i["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);u.options.__file="bundle_b/pages/pay/pay_page.vue",e["default"]=u.exports},527:function(n,e,t){"use strict";t.r(e);var o=t(528);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},528:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return a})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return r})),t.d(e,"components",(function(){return o}));try{o={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,567))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var n=this,e=n.$createElement;n._self._c},r=!1,c=[];a._withStripped=!0},529:function(n,e,t){"use strict";t.r(e);var o=t(530),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(r);e["default"]=a.a},530:function(n,e,t){"use strict";(function(n){var o=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t(30)),r={data:function(){return{checkIcon:"/static/images/login/disagree.png",selectCheckIcon:"/static/images/login/agree.png",payWay:0}},created:function(){},onLoad:function(){},methods:{wechatLoginJM:function(){var n=this,e={hospital_id:1e4,back_url:"pages/index/index"};a.default.wechatAuthLogin(e).then((function(e){console.log("H5端时静默授权登录resData",e.data.url),1==e.success&&n.skipLink(e.data.url)})).catch((function(n){console.log("H5端时静默授权登录err",n)}))},skipLink:function(n){var e={app_id:2,app_name:"depin_public_mp",back_url:"pages/index/index"};a.default.getOpenId(e).then((function(n){console.log("H5端时静默授权登录res",n.data)})).catch((function(n){console.log("H5端时静默授权登录err",n)}))},selectPayClick:function(){0==this.payWay?this.payWay=1:this.payWay=0},payClick:function(){n.showToast({title:0==this.payWay?"微信支付":"支付宝支付",icon:"none"})}},computed:{h5Env:function(){},isIosAppCom:function(){var e=n.getSystemInfoSync();return"app"===e.uniPlatform&&"ios"===e.osName},isPcCom:function(){return!1}}};e.default=r}).call(this,t(2)["default"])},531:function(n,e,t){"use strict";t.r(e);var o=t(532),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(r);e["default"]=a.a},532:function(n,e,t){}},[[525,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle_b/pages/pay/pay_page.js.map