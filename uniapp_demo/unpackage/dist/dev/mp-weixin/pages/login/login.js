(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{226:function(n,e,o){"use strict";(function(n,e){var t=o(4);o(26);t(o(25));var i=t(o(227));n.__webpack_require_UNI_MP_PLUGIN__=o,e(i.default)}).call(this,o(1)["default"],o(2)["createPage"])},227:function(n,e,o){"use strict";o.r(e);var t=o(228),i=o(230);for(var r in i)["default"].indexOf(r)<0&&function(n){o.d(e,n,(function(){return i[n]}))}(r);o(232);var u,c=o(54),s=Object(c["default"])(i["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],u);s.options.__file="pages/login/login.vue",e["default"]=s.exports},228:function(n,e,o){"use strict";o.r(e);var t=o(229);o.d(e,"render",(function(){return t["render"]})),o.d(e,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(e,"components",(function(){return t["components"]}))},229:function(n,e,o){"use strict";var t;o.r(e),o.d(e,"render",(function(){return i})),o.d(e,"staticRenderFns",(function(){return u})),o.d(e,"recyclableRender",(function(){return r})),o.d(e,"components",(function(){return t}));try{t={navBar:function(){return o.e("components/nav-bar/nav-bar").then(o.bind(null,570))},uInput:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-input/u-input")]).then(o.bind(null,620))},uCheckboxGroup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(o.bind(null,628))},uCheckbox:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-checkbox/u-checkbox")]).then(o.bind(null,636))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,e=n.$createElement;n._self._c},r=!1,u=[];i._withStripped=!0},230:function(n,e,o){"use strict";o.r(e);var t=o(231),i=o.n(t);for(var r in t)["default"].indexOf(r)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(r);e["default"]=i.a},231:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{form:{name:""},value:"",loginWay:"短信验证登录",seconds:60,tips:"",Qztime:"",QzyzmStare:!1,Qztext:"获取验证码"}},methods:{formSubmit:function(){console.log("页面跳转")},QzyzmFun:function(){var e=this;console.log("获取验证码");if(0==this.QzyzmStare){this.rquestSendCodeFun(),console.log("获取验证码 if",this.Qztime),this.Qztime="60",this.Qztext="s后获取",this.QzyzmStare=!0;var o=setInterval((function(){--e.Qztime}),1e3);setTimeout((function(){clearInterval(o),e.Qztext="获取验证码",e.Qztime="",e.QzyzmStare=!1}),6e4)}else console.log("获取验证码 期间 else",this.Qztime),n.showToast({title:"正在获取验证码...",icon:"none"})},rquestSendCodeFun:function(){console.log("请求发送验证码")},wechatLoginFun:function(){var e=this;n.getSetting({success:function(o){console.log("授权：",o),o.authSetting["scope.userInfo"]?(console.log("当前已授权"),n.getProvider({service:"oauth",success:function(o){console.log(o.provider),~o.provider.indexOf("weixin")?n.login({provider:"weixin",success:function(o){n.getUserInfo({provider:"weixin",success:function(t){console.log("登录返回信息",o),console.log("获取用户信息",t),e.$store.commit("login",t.userInfo),n.redirectTo({url:"../index/index"})},fail:function(){n.showToast({title:"微信登录授权失败",icon:"none"})}})},fail:function(){n.showToast({title:"微信登录授权失败",icon:"none"})}}):n.showToast({title:"请先安装微信或升级版本",icon:"none"})}})):console.log("当前未授权")}})},changeLoginWay:function(){"短信验证登录"==this.loginWay?(this.loginWay="账号密码登录",console.log("222")):"账号密码登录"==this.loginWay&&(console.log("111111"),this.loginWay="短信验证登录")}}};e.default=o}).call(this,o(2)["default"])},232:function(n,e,o){"use strict";o.r(e);var t=o(233),i=o.n(t);for(var r in t)["default"].indexOf(r)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(r);e["default"]=i.a},233:function(n,e,o){}},[[226,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map