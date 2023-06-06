(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/nav-bar/nav-bar"],{"0343":function(t,n,e){"use strict";e.r(n);var a=e("5294"),u=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},"0f14":function(t,n,e){"use strict";var a=e("e042"),u=e.n(a);u.a},"38cb":function(t,n,e){"use strict";e.r(n);var a=e("c42a"),u=e("0343");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("0f14");var o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"45f49878",null,!1,a["a"],void 0);n["default"]=r.exports},5294:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{statusBarHeight:0,topStyle:{}}},props:{title:String,titleColor:{type:String,default:"#FFFFFF"},back:{type:Boolean,default:!0},backgroundImageShow:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#004799"},backgroundImage:String,topHeight:{type:Number,default:108}},mounted:function(){this.init()},methods:{goBack:function(){this.$emit("goBack"),this.back&&t.navigateBack()},init:function(){this.statusBarHeight=this.getSysInfo().statusBarHeight},getSysInfo:function(){return t.getSystemInfoSync()}}};n.default=e}).call(this,e("543d")["default"])},c42a:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},e042:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/nav-bar/nav-bar-create-component',
    {
        'components/nav-bar/nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("38cb"))
        })
    },
    [['components/nav-bar/nav-bar-create-component']]
]);
