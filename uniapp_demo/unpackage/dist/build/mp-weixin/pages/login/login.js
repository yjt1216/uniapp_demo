(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{3122:function(n,o,e){"use strict";(function(n,o){var t=e("4ea4");e("aecd");t(e("66fd"));var i=t(e("5ed3"));n.__webpack_require_UNI_MP_PLUGIN__=e,o(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"3f78":function(n,o,e){"use strict";var t=e("c483"),i=e.n(t);i.a},"4f08":function(n,o,e){"use strict";e.r(o);var t=e("c2fa"),i=e.n(t);for(var u in t)["default"].indexOf(u)<0&&function(n){e.d(o,n,(function(){return t[n]}))}(u);o["default"]=i.a},"5ed3":function(n,o,e){"use strict";e.r(o);var t=e("83ef"),i=e("4f08");for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(o,n,(function(){return i[n]}))}(u);e("3f78");var c=e("f0c5"),s=Object(c["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);o["default"]=s.exports},"83ef":function(n,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return u})),e.d(o,"a",(function(){return t}));var t={navBar:function(){return e.e("components/nav-bar/nav-bar").then(e.bind(null,"38cb"))},uInput:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-input/u-input")]).then(e.bind(null,"4df1"))},uCheckboxGroup:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(e.bind(null,"dcac"))},uCheckbox:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-checkbox/u-checkbox")]).then(e.bind(null,"b284"))}},i=function(){var n=this.$createElement;this._self._c},u=[]},c2fa:function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={data:function(){return{form:{name:""},value:"",loginWay:"短信验证登录",seconds:60,tips:""}},methods:{formSubmit:function(){console.log("页面跳转")},wechatLogin:function(){var o=this;n.getSetting({success:function(e){console.log("授权：",e),e.authSetting["scope.userInfo"]?(console.log("当前已授权"),n.getProvider({service:"oauth",success:function(e){console.log(e.provider),~e.provider.indexOf("weixin")?n.login({provider:"weixin",success:function(e){n.getUserInfo({provider:"weixin",success:function(t){console.log("登录返回信息",e),console.log("获取用户信息",t),o.$store.commit("login",t.userInfo),n.redirectTo({url:"../index/index"})},fail:function(){n.showToast({title:"微信登录授权失败",icon:"none"})}})},fail:function(){n.showToast({title:"微信登录授权失败",icon:"none"})}}):n.showToast({title:"请先安装微信或升级版本",icon:"none"})}})):console.log("当前未授权")}})},changeLoginWay:function(){"短信验证登录"==this.loginWay?(this.loginWay="账号密码登录",console.log("222")):"账号密码登录"==this.loginWay&&(console.log("111111"),this.loginWay="短信验证登录")},codeChange:function(n){this.tips=n},getCode:function(){var o=this;console.log("aa"),this.$refs.uCode.canGetCode?(n.showLoading({title:"正在获取验证码"}),setTimeout((function(){n.hideLoading(),o.$u.toast("验证码已发送"),o.$refs.uCode.start()}),2e3)):this.$u.toast("倒计时结束后再发送")},end:function(){this.$u.toast("倒计时结束")},start:function(){console.log("aa1111111"),this.$u.toast("倒计时开始")}}};o.default=e}).call(this,e("543d")["default"])},c483:function(n,o,e){}},[["3122","common/runtime","common/vendor"]]]);