require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_b/pages/weixin_openid/weixin_openid"],{695:function(e,n,t){"use strict";(function(e,n){var i=t(4);t(29);i(t(25));var r=i(t(696));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},696:function(e,n,t){"use strict";t.r(n);var i=t(697),r=t(699);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);var c,a=t(52),u=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"e9e887e4",null,!1,i["components"],c);u.options.__file="bundle_b/pages/weixin_openid/weixin_openid.vue",n["default"]=u.exports},697:function(e,n,t){"use strict";t.r(n);var i=t(698);t.d(n,"render",(function(){return i["render"]})),t.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(n,"components",(function(){return i["components"]}))},698:function(e,n,t){"use strict";var i;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return i}));var r=function(){var e=this,n=e.$createElement;e._self._c},o=!1,c=[];r._withStripped=!0},699:function(e,n,t){"use strict";t.r(n);var i=t(700),r=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},700:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{testLink:"http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex"}},onLoad:function(){this.testing()},methods:{testing:function(){var e=this.getUrlParam("code");e&&this.getUserInfo(e)},login:function(){var e={appid:"wx11683108c5129eab",redirect_uri:encodeURIComponent(window.location.href),response_type:"code",scope:"snsapi_userinfo",state:""};this.weixin(e)},weixin:function(e){var n="http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex";window.location.href="".concat(n)},getUserInfo:function(n){console.log("当前code",n),e.request({url:"xx",data:{code:n},success:function(n){console.log(n.data),e.setStorageSync("login",n.data)}})},getUrlParam:function(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(n);return null!=t?unescape(t[2]):null}}};n.default=t}).call(this,t(2)["default"])}},[[695,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle_b/pages/weixin_openid/weixin_openid.js.map