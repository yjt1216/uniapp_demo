require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle_b/pages/pay/pay_page"],{"21a6":function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}));var a={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,"26eb"))}},c=function(){var n=this.$createElement;this._self._c},i=[]},"72fe":function(n,e,t){"use strict";(function(n){var a=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(t("e0cc")),i={data:function(){return{checkIcon:"/static/images/login/disagree.png",selectCheckIcon:"/static/images/login/agree.png",payWay:0}},created:function(){},onLoad:function(){},methods:{wechatLoginJM:function(){var n=this;c.default.wechatAuthLogin({hospital_id:1e4,back_url:"pages/index/index"}).then((function(e){console.log("H5端时静默授权登录resData",e.data.url),1==e.success&&n.skipLink(e.data.url)})).catch((function(n){console.log("H5端时静默授权登录err",n)}))},skipLink:function(n){c.default.getOpenId({app_id:2,app_name:"depin_public_mp",back_url:"pages/index/index"}).then((function(n){console.log("H5端时静默授权登录res",n.data)})).catch((function(n){console.log("H5端时静默授权登录err",n)}))},selectPayClick:function(){0==this.payWay?this.payWay=1:this.payWay=0},payClick:function(){n.showToast({title:0==this.payWay?"微信支付":"支付宝支付",icon:"none"})}},computed:{h5Env:function(){},isIosAppCom:function(){var e=n.getSystemInfoSync();return"app"===e.uniPlatform&&"ios"===e.osName},isPcCom:function(){return!1}}};e.default=i}).call(this,t("543d")["default"])},"78fb":function(n,e,t){"use strict";var a=t("ba1e"),c=t.n(a);c.a},"8d4b":function(n,e,t){"use strict";(function(n,e){var a=t("4ea4");t("d108");a(t("66fd"));var c=a(t("96ab"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(c.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"96ab":function(n,e,t){"use strict";t.r(e);var a=t("21a6"),c=t("a3d6");for(var i in c)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return c[n]}))}(i);t("78fb");var o=t("f0c5"),u=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},a3d6:function(n,e,t){"use strict";t.r(e);var a=t("72fe"),c=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e["default"]=c.a},ba1e:function(n,e,t){}},[["8d4b","common/runtime","common/vendor"]]]);