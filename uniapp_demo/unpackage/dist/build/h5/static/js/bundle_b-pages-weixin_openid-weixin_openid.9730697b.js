(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle_b-pages-weixin_openid-weixin_openid"],{99197:function(n,e,t){"use strict";t.r(e);var i=t("fd0e"),c=t("f4e8");for(var o in c)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return c[n]}))}(o);var a=t("f0c5"),u=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,"42bdc791",null,!1,i["a"],void 0);e["default"]=u.exports},c59c:function(n,e,t){"use strict";t("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("4d63"),t("c607"),t("ac1f"),t("2c3e"),t("25f0"),t("466d"),t("841c");var i={data:function(){return{testLink:"http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex"}},onLoad:function(){this.testing()},methods:{testing:function(){var n=this.getUrlParam("code");n&&this.getUserInfo(n)},login:function(){var n={appid:"wx11683108c5129eab",redirect_uri:encodeURIComponent(window.location.href),response_type:"code",scope:"snsapi_userinfo",state:""};this.weixin(n)},weixin:function(n){window.location.href="".concat("http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex")},getUserInfo:function(n){console.log("当前code",n),uni.request({url:"xx",data:{code:n},success:function(n){console.log(n.data),uni.setStorageSync("login",n.data)}})},getUrlParam:function(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(e);return null!=t?unescape(t[2]):null}}};e.default=i},f4e8:function(n,e,t){"use strict";t.r(e);var i=t("c59c"),c=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=c.a},fd0e:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){}));var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("v-uni-button",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.login()}}},[n._v("点击登录")])],1)},c=[]}}]);