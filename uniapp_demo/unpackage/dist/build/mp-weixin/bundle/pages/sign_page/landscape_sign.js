require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/sign_page/landscape_sign"],{"2f5d":function(n,e,t){},"4a12":function(n,e,t){"use strict";(function(n){var a=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=a(t("2eee")),u=a(t("c973")),o=(t("2a15"),{components:{Signature:function(){Promise.all([t.e("bundle/common/vendor"),t.e("bundle/components/sign-signature/sign-signature")]).then(function(){return resolve(t("0c0c"))}.bind(null,t)).catch(t.oe)}},data:function(){return{formData:{},questionList:[],signValue:""}},onBackPress:function(n){console.log("导航栏返回 拦截event",n)},onLoad:function(){},methods:{naviLeftClick:function(){console.log("导航栏返回 拦截");var e=getCurrentPages();console.log("导航栏pages",e),n.navigateBack()},submitAppraiseFun:function(){console.log("提交评估单 --- ",this.signValue)},startSign:function(){var n=this;return(0,u.default)(c.default.mark((function e(){var t;return c.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$refs.sign.getSyncSignature();case 2:t=e.sent,console.log("组件版本",n.$refs.sign.VERSION),console.log("签名数据",t);case 5:case"end":return e.stop()}}),e)})))()}}});e.default=o}).call(this,t("543d")["default"])},"65dd":function(n,e,t){"use strict";var a=t("2f5d"),c=t.n(a);c.a},a5ce:function(n,e,t){"use strict";(function(n,e){var a=t("4ea4");t("aecd");a(t("66fd"));var c=a(t("f935"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(c.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},b822:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return a}));var a={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,"38cb"))}},c=function(){var n=this.$createElement;this._self._c},u=[]},cbca:function(n,e,t){"use strict";t.r(e);var a=t("4a12"),c=t.n(a);for(var u in a)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(u);e["default"]=c.a},f935:function(n,e,t){"use strict";t.r(e);var a=t("b822"),c=t("cbca");for(var u in c)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return c[n]}))}(u);t("65dd");var o=t("f0c5"),r=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports}},[["a5ce","common/runtime","common/vendor"]]]);