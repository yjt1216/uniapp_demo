(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{242:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var r=o(t(243));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},243:function(n,e,t){"use strict";t.r(e);var o=t(244),r=t(246);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(248);var c,a=t(54),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);u.options.__file="pages/register/register.vue",e["default"]=u.exports},244:function(n,e,t){"use strict";t.r(e);var o=t(245);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},245:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={ljsTop:function(){return Promise.all([t.e("common/vendor"),t.e("components/ljs-top/ljs-top")]).then(t.bind(null,711))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,c=[];r._withStripped=!0},246:function(n,e,t){"use strict";t.r(e);var o=t(247),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},247:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{gouxSta:!1,Qztime:"",QzyzmStare:!1,Qztext:"获取验证码"}},onLoad:function(){},methods:{moutcl:function(){0==this.gouxSta?this.gouxSta=!0:this.gouxSta=!1},denglu:function(){0==this.gouxSta?n.showToast({title:"请阅读并勾选用户协议",icon:"none"}):n.showToast({title:"账号不存在",icon:"none"})},Qzyzm:function(){var n=this;if(0==this.QzyzmStare){this.Qztime="60",this.Qztext="s后获取",this.QzyzmStare=!0;var e=setInterval((function(){--n.Qztime}),1e3);setTimeout((function(){clearInterval(e),n.Qztext="获取验证码",n.Qztime="",n.QzyzmStare=!1}),6e4)}},handleTap:function(n){this.$refs[n].show()},handleChange:function(n){console.log("change::",n)},handleConfirm:function(n){if(console.log("confirm::",n),n){var e=n.dataset.name,t=n.item.map((function(n){return n.label})).join("-");e&&t&&(this[e]=t)}},handleCancel:function(n){console.log("cancel::",n)}}};e.default=t}).call(this,t(2)["default"])},248:function(n,e,t){"use strict";t.r(e);var o=t(249),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},249:function(n,e,t){}},[[242,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/register/register.js.map