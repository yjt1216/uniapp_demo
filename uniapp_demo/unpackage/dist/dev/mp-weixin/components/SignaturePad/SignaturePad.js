(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/SignaturePad/SignaturePad"],{889:function(n,e,t){"use strict";t.r(e);var r=t(890),o=t(892);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t(895);var c,a=t(53),u=Object(a["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"2fa2d964",null,!1,r["components"],c);u.options.__file="components/SignaturePad/SignaturePad.vue",e["default"]=u.exports},890:function(n,e,t){"use strict";t.r(e);var r=t(891);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},891:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return c})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));try{r={uPopup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(t.bind(null,1078))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,e=n.$createElement;n._self._c},i=!1,c=[];o._withStripped=!0},892:function(n,e,t){"use strict";t.r(e);var r=t(893),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},893:function(n,e,t){"use strict";(function(n){var r=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t(894)),i="__signature__canvas",c={data:function(){return{canvasId:i,show:!1,width:"100%",height:"500rpx"}},computed:{getStyle:function(){return"width:".concat(this.width,";height:").concat(this.height,";")}},watch:{show:function(n){console.log("watch val",n),n||this.reject&&this.reject({type:"close"})}},methods:{sign:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.width,c=void 0===r?"660rpx":r,a=t.height,u=void 0===a?"500rpx":a,s=t.color,d=void 0===s?"#000":s;return new Promise((function(t,r){e.width=c,e.height=u,e.show=!0,e.resolve=t,e.reject=r,e.$nextTick((function(){var t=n.createSelectorQuery().in(e),r=n.createCanvasContext(i,e);e.handwriting=new o.default({lineColor:d,slideValue:50,canvasName:i,ctx:r}),t.select(".handCenter").boundingClientRect((function(n){e.handwriting.setSize(n)})).exec()}))}))},close:function(){this.show=!1},rewrite:function(){this.handwriting.clear()},submit:function(){var e=this;this.handwriting.isEmpty()?n.showToast({title:"请在框内签字",icon:"error"}):n.canvasToTempFilePath({canvasId:i,quality:1,fileType:"png",success:function(n){var t=n.tempFilePath;e.reject=null,e.resolve(t)},fail:function(n){var t=e.reject;e.reject=null,t({type:"err",err:n})},complete:function(){e.show=!1}},this)},uploadScaleStart:function(n){this.handwriting.uploadScaleStart(n)},uploadScaleMove:function(n){this.handwriting.uploadScaleMove(n)},uploadScaleEnd:function(n){this.handwriting.uploadScaleEnd(n)},toJSON:function(n){return n}}};e.default=c}).call(this,t(2)["default"])},895:function(n,e,t){"use strict";t.r(e);var r=t(896),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},896:function(n,e,t){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/SignaturePad/SignaturePad.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/SignaturePad/SignaturePad-create-component',
    {
        'components/SignaturePad/SignaturePad-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(889))
        })
    },
    [['components/SignaturePad/SignaturePad-create-component']]
]);
