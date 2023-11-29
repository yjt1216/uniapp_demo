require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/components/sign-canvas/sign-canvas"],{798:function(n,t,e){"use strict";e.r(t);var i=e(799),s=e(801);for(var o in s)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return s[n]}))}(o);e(803);var a,c=e(54),r=Object(c["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],a);r.options.__file="bundle/components/sign-canvas/sign-canvas.vue",t["default"]=r.exports},799:function(n,t,e){"use strict";e.r(t);var i=e(800);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},800:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return s})),e.d(t,"staticRenderFns",(function(){return a})),e.d(t,"recyclableRender",(function(){return o})),e.d(t,"components",(function(){return i}));var s=function(){var n=this,t=n.$createElement;n._self._c},o=!1,a=[];s._withStripped=!0},801:function(n,t,e){"use strict";e.r(t);var i=e(802),s=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=s.a},802:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=null,i=[],s=0,o=0;n.getSystemInfo({success:function(n){s=n.windowWidth,o=9*s/16}});var a={name:"cat-signature",props:{visible:{type:Boolean,default:!1},canvasId:{type:String,default:"firstCanvas"}},data:function(){return{show:!1,visibleSync:!1,signImage:"",hasDh:!1}},watch:{visible:function(n){this.visibleSync=n,this.show=n,this.getInfo()}},created:function(n){var t=this;this.visibleSync=this.visible,this.getInfo(),setTimeout((function(){t.show=t.visible}),100)},methods:{getInfo:function(){e=n.createCanvasContext(this.canvasId,this),e.setStrokeStyle("#000"),e.setLineWidth(5),e.setLineCap("round"),e.setLineJoin("round")},closeSign:function(){var n=this;n.show=!1,n.hasDh=!1,n.$emit("closeSign")},moveHandle:function(){},start:function(n){var t={x:n.touches[0].x,y:n.touches[0].y};i.push(t),this.hasDh=!0},move:function(n){var t={x:n.touches[0].x,y:n.touches[0].y};i.push(t),i.length>=2&&this.draw(i)},end:function(n){for(var t=0;t<i.length;t++)i.pop()},cancel:function(n){console.log("触摸取消"+n)},tap:function(n){},error:function(n){},draw:function(n){var t=n[0],i=n[1];e.moveTo(t.x,t.y),e.lineTo(i.x,i.y),e.stroke(),e.draw(!0),n.shift()},clear:function(){e.clearRect(0,0,s,o),e.draw(!0),this.hasDh=!1,this.$emit("clear")},saveSign:function(){var t=this,e=this;this.hasDh?(n.showLoading({title:"生成中...",mask:!0}),setTimeout((function(){n.canvasToTempFilePath({canvasId:t.canvasId,success:function(t){e.signImage=t.tempFilePath,e.$emit("saveSign",t.tempFilePath),console.log("签名路径filePath",t),n.hideLoading(),e.hasDh=!1,e.show=!1},fail:function(t){console.log(t),n.hideLoading()}},t)}),100)):n.showToast({title:"请先签字",icon:"none"})}}};t.default=a}).call(this,e(2)["default"])},803:function(n,t,e){"use strict";e.r(t);var i=e(804),s=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=s.a},804:function(n,t,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/components/sign-canvas/sign-canvas.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'bundle/components/sign-canvas/sign-canvas-create-component',
    {
        'bundle/components/sign-canvas/sign-canvas-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(798))
        })
    },
    [['bundle/components/sign-canvas/sign-canvas-create-component']]
]);
