(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"2b9e":function(e,t,n){"use strict";n.r(t);var o=n("2ee2"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},"2ee2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{topH:e.getSystemInfoSync().statusBarHeight,storageSize:"0M"}},onLoad:function(){console.log("on load"),console.log("user isLogin",this.isLogin),this.getStorageSize()},methods:{goLogin:function(){this.$Router.push({path:"/pages/login/login"})},goRegister:function(){this.$Router.push({path:"/pages/register/register"})},serviceObject:function(){},getStorageSize:function(){var t=this;e.getStorageInfo({success:function(e){var n=e.currentSize;n<1024?t.storageSize=n+" B":n/1024>=1&&n/1024/1024<1?t.storageSize=Math.floor(n/1024*100)/100+" KB":n/1024/1024>=1&&(t.storageSize=Math.floor(n/1024/1024*100)/100+" M")}})},clearStorage:function(){var t=this;e.showModal({title:"提示",content:"确定清除缓存吗?",confirmText:"立即清除",success:function(n){n.confirm&&(e.clearStorageSync(),t.getStorageSize(),e.showToast({title:"清除成功",icon:"none"}),setTimeout((function(){e.redirectTo({url:"/pages/login/login",animationType:"pop-in",animationDuration:200})}),1300))}})}},computed:{headBackground:function(){return{"background-image":"linear-gradient(to right, #39C9BC,#6DE8CC)"}}}};t.default=n}).call(this,n("543d")["default"])},"436b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"bef1"))},yTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("components/y-tabbar/y-tabbar")]).then(n.bind(null,"87424"))}},i=function(){var e=this.$createElement,t=(this._self._c,this.__get_style([this.headBackground]));this.$mp.data=Object.assign({},{$root:{s0:t}})},r=[]},"845d":function(e,t,n){},"9c83":function(e,t,n){"use strict";var o=n("845d"),i=n.n(o);i.a},c605:function(e,t,n){"use strict";n.r(t);var o=n("436b"),i=n("2b9e");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("9c83");var a=n("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"7ebe3193",null,!1,o["a"],void 0);t["default"]=u.exports},d6ea:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("aecd");o(n("66fd"));var i=o(n("c605"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["d6ea","common/runtime","common/vendor"]]]);