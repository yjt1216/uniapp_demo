(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/SignaturePad/SignaturePad"],{5550:function(t,n,e){},"6b11":function(t,n,e){"use strict";var i=e("5550"),a=e.n(i);a.a},"874a8":function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("b94a")),o="__signature__canvas",c={data:function(){return{canvasId:o,show:!1,width:"100%",height:"500rpx"}},computed:{getStyle:function(){return"width:".concat(this.width,";height:").concat(this.height,";")}},watch:{show:function(t){console.log("watch val",t),t||this.reject&&this.reject({type:"close"})}},methods:{sign:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.width,c=void 0===i?"660rpx":i,r=e.height,u=void 0===r?"500rpx":r,l=e.color,s=void 0===l?"#000":l;return new Promise((function(e,i){n.width=c,n.height=u,n.show=!0,n.resolve=e,n.reject=i,n.$nextTick((function(){var e=t.createSelectorQuery().in(n),i=t.createCanvasContext(o,n);n.handwriting=new a.default({lineColor:s,slideValue:50,canvasName:o,ctx:i}),e.select(".handCenter").boundingClientRect((function(t){n.handwriting.setSize(t)})).exec()}))}))},close:function(){this.show=!1},rewrite:function(){this.handwriting.clear()},submit:function(){var n=this;this.handwriting.isEmpty()?t.showToast({title:"请在框内签字",icon:"error"}):t.canvasToTempFilePath({canvasId:o,quality:1,fileType:"png",success:function(t){var e=t.tempFilePath;n.reject=null,n.resolve(e)},fail:function(t){var e=n.reject;n.reject=null,e({type:"err",err:t})},complete:function(){n.show=!1}},this)},uploadScaleStart:function(t){this.handwriting.uploadScaleStart(t)},uploadScaleMove:function(t){this.handwriting.uploadScaleMove(t)},uploadScaleEnd:function(t){this.handwriting.uploadScaleEnd(t)},toJSON:function(t){return t}}};n.default=c}).call(this,e("543d")["default"])},"8e5a":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uPopup:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(e.bind(null,"e355"))}},a=function(){var t=this.$createElement;this._self._c},o=[]},a99b:function(t,n,e){"use strict";e.r(n);var i=e("874a8"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},b7af:function(t,n,e){"use strict";e.r(n);var i=e("8e5a"),a=e("a99b");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("6b11");var c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4c6cce04",null,!1,i["a"],void 0);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/SignaturePad/SignaturePad-create-component',
    {
        'components/SignaturePad/SignaturePad-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b7af"))
        })
    },
    [['components/SignaturePad/SignaturePad-create-component']]
]);
