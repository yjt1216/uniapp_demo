require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/sign_page/vertical_sign"],{451:function(n,e,t){"use strict";(function(n,e){var r=t(4);t(29);r(t(25));var o=r(t(452));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},452:function(n,e,t){"use strict";t.r(e);var r=t(453),o=t(455);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t(457);var i,c=t(57),a=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);a.options.__file="bundle/pages/sign_page/vertical_sign.vue",e["default"]=a.exports},453:function(n,e,t){"use strict";t.r(e);var r=t(454);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},454:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return r}));try{r={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,851))},uImage:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-image/u-image")]).then(t.bind(null,1162))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,e=n.$createElement;n._self._c},u=!1,i=[];o._withStripped=!0},455:function(n,e,t){"use strict";t.r(e);var r=t(456),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=o.a},456:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){Promise.all([t.e("bundle/common/vendor"),t.e("bundle/components/SignaturePad/SignaturePad")]).then(function(){return resolve(t(1170))}.bind(null,t)).catch(t.oe)},o={components:{SignaturePad:r},data:function(){return{signFilePath:null,isEnd:!1}},onLoad:function(){},methods:{moveHandle:function(){},signatureAction:function(){var n=this;console.log("点击签名pop"),this.$refs.signature.sign({width:"700rpx",height:"500rpx",color:"#000"}).then((function(e){n.signFilePath=e})).catch((function(n){console.log("取消签名error",n)}))}}};e.default=o},457:function(n,e,t){"use strict";t.r(e);var r=t(458),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=o.a},458:function(n,e,t){}},[[451,"common/runtime","common/vendor"]]]);