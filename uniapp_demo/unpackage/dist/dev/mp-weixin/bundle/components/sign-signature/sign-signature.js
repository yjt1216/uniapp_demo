require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/components/sign-signature/sign-signature"],{877:function(t,n,e){"use strict";e.r(n);var i=e(878),r=e(880);for(var s in r)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(s);e(882);var o,a=e(54),c=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],o);c.options.__file="bundle/components/sign-signature/sign-signature.vue",n["default"]=c.exports},878:function(t,n,e){"use strict";e.r(n);var i=e(879);e.d(n,"render",(function(){return i["render"]})),e.d(n,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(n,"components",(function(){return i["components"]}))},879:function(t,n,e){"use strict";var i;e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return o})),e.d(n,"recyclableRender",(function(){return s})),e.d(n,"components",(function(){return i}));var r=function(){var t=this,n=t.$createElement;t._self._c},s=!1,o=[];r._withStripped=!0},880:function(t,n,e){"use strict";e.r(n);var i=e(881),r=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=r.a},881:function(t,n,e){"use strict";(function(t){var i=e(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e(61)),s=i(e(63)),o=(e(335),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),a=function(t){t=t.replace(/\r\n/g,"\n");for(var n="",e=0;e<t.length;e++){var i=t.charCodeAt(e);i<128?n+=String.fromCharCode(i):i>127&&i<2048?(n+=String.fromCharCode(i>>6|192),n+=String.fromCharCode(63&i|128)):(n+=String.fromCharCode(i>>12|224),n+=String.fromCharCode(i>>6&63|128),n+=String.fromCharCode(63&i|128))}return n},c=function(t){var n,e,i,r,s,c,u,h="",l=0;t=a(t);while(l<t.length)n=t.charCodeAt(l++),e=t.charCodeAt(l++),i=t.charCodeAt(l++),r=n>>2,s=(3&n)<<4|e>>4,c=(15&e)<<2|i>>6,u=63&i,isNaN(e)?c=u=64:isNaN(i)&&(u=64),h=h+o.charAt(r)+o.charAt(s)+o.charAt(c)+o.charAt(u);return h},u={cxt:null,data:function(){return{VERSION:"1.0.0",cid:"cvs",show:!1,ctrl:null,listeners:[],prevView:"",draws:[],lines:[],line:null}},props:{value:{default:""},title:{type:String,default:"请签字"},disabled:{type:Boolean,default:!1}},watch:{value:function(){this.prevView=this.value}},computed:{titles:function(){return this.title.split("")},absPrevView:function(){var t=this.prevView;return t}},mounted:function(){this.prevView=this.value,console.log("dx",this.prevView)},methods:{onOK:function(){var t=this.ctrl.getValue();this.$emit("input",t),this.prevView=t,this.hideSignature();var n=this.listeners.shift();n&&n(t)},saveSign:function(){var n=this,e=this;this.hasDh?(t.showLoading({title:"生成中...",mask:!0}),setTimeout((function(){t.canvasToTempFilePath({canvasId:n.cid,success:function(n){console.log("签名路径filePath",n),e.$emit("input",n.tempFilePath),t.hideLoading(),e.hasDh=!1,e.show=!1},fail:function(n){console.log(n),t.hideLoading()}},n)}),100)):t.showToast({title:"请先签字",icon:"none"})},touchSignature:function(){var t=this.prevView;t&&t.length||this.showSignature()},showSignature:function(){this.disabled||(this.ctrl?this.show||(this.clearSignature(),this.show=!0):this.initCtrl())},getSyncSignature:function(){var t=this;return(0,s.default)(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showSignature(),n.next=3,new Promise(function(){var n=(0,s.default)(r.default.mark((function n(e,i){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.listeners.push((function(t){e(t)}));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}());case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},cancelSignature:function(){this.listeners.map((function(t){t(null)})),this.hideSignature()},hideSignature:function(){this.ctrl&&this.ctrl.clear(),this.show=!1},clearSignature:function(){this.ctrl&&this.ctrl.clear()},initCtrl:function(){var n=this;return(0,s.default)(r.default.mark((function e(){var i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.show=!0,i=t.createCanvasContext(n.cid,n),n.cxt=i,n.ctrl={width:0,height:0,clear:function(){n.lines=[];var e=t.createSelectorQuery().in(n).select("."+n.cid);e.boundingClientRect((function(t){t&&(i.clearRect(0,0,t.width,t.height),t.width&&t.height&&(n.ctrl.width=t.width,n.ctrl.height=t.height))})).exec(),n.redraw()},getValue:function(){if(!n.lines.length)return"";var t=n._get_svg(),e=c(t),i="data:image/svg+xml;base64,"+e;return i}},n.$nextTick((function(){this.ctrl.clear()}));case 5:case"end":return e.stop()}}),e)})))()},_get_svg:function(){var t=-90,n=[],e=this.ctrl.width,i=this.ctrl.height,r=90!=Math.abs(t)?e:i,s=90==Math.abs(t)?e:i,o=e/2,a=i/2,c=Math.PI,u=(t||0)%360,h=Math.cos(u*c/180),l=Math.sin(u*c/180),d=(r-e)/2,f=(s-i)/2,g=function(t){if(u){var n=(t.x-o)*h-(t.y-a)*l+o,e=(t.x-o)*l+(t.y-a)*h+a;return{x:n+d,y:e+f}}return t};this.lines.map((function(t){if(!(t.points.length<2)){var e=g(t.start),i=["M ".concat(e.x," ").concat(Number(e.y))];t.points.map((function(t){var n=g(t);i.push("L ".concat(n.x," ").concat(Number(n.y)))})),n.push('<path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="rgb(0,0,0)" fill="none" d="'.concat(i.join(" "),'"/>'))}}));var p='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'.concat(r,'" height="').concat(s,'">').concat(n.join("\n"),"</svg>");return p},_get_svg_raw:function(){var t=[];this.lines.map((function(n){if(!(n.points.length<2)){var e=["M ".concat(n.start.x," ").concat(Number(n.start.y))];n.points.map((function(t){e.push("L ".concat(t.x," ").concat(Number(t.y)))})),t.push('<path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="rgb(0,0,0)" fill="none" d="'.concat(e.join(" "),'"/>'))}}));var n=this.ctrl.width,e=this.ctrl.height,i='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'.concat(n,'" height="').concat(e,'" transform="rotate(-90)">').concat(t.join("\n"),"</svg>");return i},_get_point:function(t){return{x:t.changedTouches[0].x.toFixed(1),y:t.changedTouches[0].y.toFixed(1)}},touchstart:function(t){this.hasDh=!0;var n=this._get_point(t);this.line={start:n,points:[n]},this.lines.push(this.line)},touchmove:function(t){var n=this,e=this._get_point(t);this.line.points.push(e),this.tm||(this.tm=setTimeout((function(){n.redraw(),n.tm=0}),10))},touchend:function(t){var n=this._get_point(t);this.line.points.push(n),this.line.end=n,this.redraw()},redraw:function(){var t=this.cxt;t.setStrokeStyle("#000"),t.setLineWidth(3);this.lines.map((function(n){t.beginPath(),n.points.length<2||(t.moveTo(n.start.x,n.start.y),n.points.map((function(n){t.lineTo(n.x,n.y)})),t.stroke())})),t.draw()},canvasIdErrorCallback:function(t){console.error(t.detail.errMsg)}}};n.default=u}).call(this,e(2)["default"])},882:function(t,n,e){"use strict";e.r(n);var i=e(883),r=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=r.a},883:function(t,n,e){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/components/sign-signature/sign-signature.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'bundle/components/sign-signature/sign-signature-create-component',
    {
        'bundle/components/sign-signature/sign-signature-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(877))
        })
    },
    [['bundle/components/sign-signature/sign-signature-create-component']]
]);
