(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{213:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var r=o(t(214));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},214:function(n,e,t){"use strict";t.r(e);var o=t(215),r=t(217);for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s);t(224);var c,a=t(54),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);u.options.__file="pages/message/message.vue",e["default"]=u.exports},215:function(n,e,t){"use strict";t.r(e);var o=t(216);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},216:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return s})),t.d(e,"components",(function(){return o}));try{o={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,628))},meTabs:function(){return t.e("components/me-tabs/me-tabs").then(t.bind(null,642))},mescrollBody:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/mescroll-uni/components/mescroll-body/mescroll-body")]).then(t.bind(null,649))},goodList:function(){return t.e("components/good-list/good-list").then(t.bind(null,662))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},s=!1,c=[];r._withStripped=!0},217:function(n,e,t){"use strict";t.r(e);var o=t(218),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=r.a},218:function(n,e,t){"use strict";var o=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(219)),s=t(220),c={mixins:[r.default],data:function(){return{tabs:[{name:"全部",type:"xx"},{name:"奶粉",type:"xx"},{name:"面膜",type:"xx"},{name:"图书",type:"xx"}],goods:[],tabIndex:0}},methods:{upCallback:function(n){var e=this,t=this.tabs[this.tabIndex],o=t.name;console.log("请求数据-",o),(0,s.apiGoods)(n.num,n.size,o).then((function(t){e.mescroll.endSuccess(t.list.length),1==n.num&&(e.goods=[]),e.goods=e.goods.concat(t.list)})).catch((function(){e.mescroll.endErr()}))},tabChange:function(){this.goods=[],this.mescroll.resetUpScroll()}}};e.default=c},224:function(n,e,t){"use strict";t.r(e);var o=t(225),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=r.a},225:function(n,e,t){}},[[213,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map