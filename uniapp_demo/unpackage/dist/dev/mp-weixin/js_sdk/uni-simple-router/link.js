(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["js_sdk/uni-simple-router/link"],{814:function(e,t,n){"use strict";n.r(t);var r=n(815),u=n(817);for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);var o,c=n(52),i=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);i.options.__file="js_sdk/uni-simple-router/link.vue",t["default"]=i.exports},815:function(e,t,n){"use strict";n.r(t);var r=n(816);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},816:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return u})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},a=!1,o=[];u._withStripped=!0},817:function(e,t,n){"use strict";n.r(t);var r=n(818),u=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={push:"push",replace:"replace",replaceAll:"replaceAll",pushTab:"pushTab",back:"back"},u={props:{to:{type:[String,Object],required:!0},stopNavto:{type:Boolean,default:!1},navType:{type:String,default:"push"},level:{type:Number,default:1},append:{type:Boolean,default:!1}},methods:{formatNav:function(e){if(null!=e&&e.constructor===String){e=e.replace(/\'/g,""),e=e.replace(/(\w+)(?=:)/g,(function(e){return'"'.concat(e,'"')})),e=e.replace(/:\s*([^,{}\s"]+)/g,(function(e){var t=e.split(":");return':"'.concat(t[1].trim(),'"')}));try{e=JSON.parse(e)}catch(n){}}if(this.append){var t=this.$Route.path.split("/");t.splice(t.length-this.level,this.level),t=t.join("/"),e.constructor===Object?e.path&&(e.path=t+e.path):e=t+e}return e},gotoPage:function(){if(this.stopNavto)return!0;var e=r[this.navType];if(null==e)return console.error(' "navType" unknown type \n\n value：'.concat(Object.values(r).join("、")));var t=this.formatNav(this.to);this.$Router[e](t)}}};t.default=u}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/js_sdk/uni-simple-router/link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'js_sdk/uni-simple-router/link-create-component',
    {
        'js_sdk/uni-simple-router/link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(814))
        })
    },
    [['js_sdk/uni-simple-router/link-create-component']]
]);
