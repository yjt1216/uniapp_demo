(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{200:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var r=o(t(201));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},201:function(e,n,t){"use strict";t.r(n);var o=t(202),r=t(204);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(206);var c,u=t(32),a=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"80842834",null,!1,o["components"],c);a.options.__file="pages/user/user.vue",n["default"]=a.exports},202:function(e,n,t){"use strict";t.r(n);var o=t(203);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},203:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));try{o={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,525))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.__get_style([e.headBackground]));e.$mp.data=Object.assign({},{$root:{s0:t}})},i=!1,c=[];r._withStripped=!0},204:function(e,n,t){"use strict";t.r(n);var o=t(205),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},205:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{topH:e.getSystemInfoSync().statusBarHeight,storageSize:"0M"}},onLoad:function(){console.log("on load"),console.log("user isLogin",this.isLogin),this.getStorageSize()},methods:{goLogin:function(){this.$Router.push({path:"/pages/login/login"})},goRegister:function(){this.$Router.push({path:"/pages/register/register"})},serviceObject:function(){},getStorageSize:function(){var n=this;e.getStorageInfo({success:function(e){var t=e.currentSize;t<1024?n.storageSize=t+" B":t/1024>=1&&t/1024/1024<1?n.storageSize=Math.floor(t/1024*100)/100+" KB":t/1024/1024>=1&&(n.storageSize=Math.floor(t/1024/1024*100)/100+" M")}})},clearStorage:function(){var n=this;e.showModal({title:"提示",content:"确定清除缓存吗?",confirmText:"立即清除",success:function(t){t.confirm&&(e.clearStorageSync(),n.getStorageSize(),e.showToast({title:"清除成功",icon:"none"}),setTimeout((function(){e.redirectTo({url:"/pages/login/login",animationType:"pop-in",animationDuration:200})}),1300))}})}},computed:{headBackground:function(){return{"background-image":"linear-gradient(to right, #39C9BC,#6DE8CC)"}}}};n.default=t}).call(this,t(2)["default"])},206:function(e,n,t){"use strict";t.r(n);var o=t(207),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},207:function(e,n,t){}},[[200,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map