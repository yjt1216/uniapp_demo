require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/sign_page/landscape_sign"],{440:function(n,e,t){"use strict";(function(n,e){var r=t(4);t(29);r(t(25));var o=r(t(441));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},441:function(n,e,t){"use strict";t.r(e);var r=t(442),o=t(444);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);t(446);var c,u=t(52),i=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);i.options.__file="bundle/pages/sign_page/landscape_sign.vue",e["default"]=i.exports},442:function(n,e,t){"use strict";t.r(e);var r=t(443);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},443:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return a})),t.d(e,"components",(function(){return r}));try{r={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,819))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,e=n.$createElement;n._self._c},a=!1,c=[];o._withStripped=!0},444:function(n,e,t){"use strict";t.r(e);var r=t(445),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=o.a},445:function(n,e,t){"use strict";(function(n){var r=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t(26)),a=r(t(28)),c=(t(213),function(){Promise.all([t.e("bundle/common/vendor"),t.e("bundle/components/sign-signature/sign-signature")]).then(function(){return resolve(t(1123))}.bind(null,t)).catch(t.oe)}),u={components:{Signature:c},data:function(){return{formData:{},questionList:[],signValue:""}},onBackPress:function(n){console.log("导航栏返回 拦截event",n)},onLoad:function(){},methods:{naviLeftClick:function(){console.log("导航栏返回 拦截");var e=getCurrentPages();console.log("导航栏pages",e),n.navigateBack()},submitAppraiseFun:function(){console.log("提交评估单 --- ",this.signValue)},startSign:function(){var n=this;return(0,a.default)(o.default.mark((function e(){var t;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$refs.sign.getSyncSignature();case 2:t=e.sent,console.log("组件版本",n.$refs.sign.VERSION),console.log("签名数据",t);case 5:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,t(2)["default"])},446:function(n,e,t){"use strict";t.r(e);var r=t(447),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=o.a},447:function(n,e,t){}},[[440,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/pages/sign_page/landscape_sign.js.map