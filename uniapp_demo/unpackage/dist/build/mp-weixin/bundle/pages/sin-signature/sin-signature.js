require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/sin-signature/sin-signature"],{"1b16":function(t,n,e){"use strict";e.r(n);var i=e("cb7d"),r=e("ca9b");for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("f847");var s=e("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=o.exports},"7d00":function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("2eee")),a=i(e("c973")),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=function(t){var n,e,i,r,a,o,c,u="",h=0;t=function(t){t=t.replace(/\r\n/g,"\n");for(var n="",e=0;e<t.length;e++){var i=t.charCodeAt(e);i<128?n+=String.fromCharCode(i):i>127&&i<2048?(n+=String.fromCharCode(i>>6|192),n+=String.fromCharCode(63&i|128)):(n+=String.fromCharCode(i>>12|224),n+=String.fromCharCode(i>>6&63|128),n+=String.fromCharCode(63&i|128))}return n}(t);while(h<t.length)n=t.charCodeAt(h++),e=t.charCodeAt(h++),i=t.charCodeAt(h++),r=n>>2,a=(3&n)<<4|e>>4,o=(15&e)<<2|i>>6,c=63&i,isNaN(e)?o=c=64:isNaN(i)&&(c=64),u=u+s.charAt(r)+s.charAt(a)+s.charAt(o)+s.charAt(c);return u},c={cxt:null,data:function(){return{VERSION:"1.0.0",cid:"cvs",show:!1,ctrl:null,listeners:[],prevView:"",draws:[],lines:[],line:null}},props:{value:{default:""},title:{type:String,default:"请签字"},disabled:{type:Boolean,default:!1}},watch:{value:function(){this.prevView=this.value}},computed:{titles:function(){return this.title.split("")},absPrevView:function(){var t=this.prevView;return t}},mounted:function(){this.prevView=this.value,console.log("dx",this.prevView)},methods:{onOK:function(){var t=this.ctrl.getValue();this.$emit("input",t),this.prevView=t,this.hideSignature();var n=this.listeners.shift();n&&n(t)},touchSignature:function(){var t=this.prevView;t&&t.length||this.showSignature()},showSignature:function(){this.disabled||(this.ctrl?this.show||(this.clearSignature(),this.show=!0):this.initCtrl())},getSyncSignature:function(){var t=this;return(0,a.default)(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showSignature(),n.next=3,new Promise(function(){var n=(0,a.default)(r.default.mark((function n(e,i){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.listeners.push((function(t){e(t)}));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}());case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},cancelSignature:function(){this.listeners.map((function(t){t(null)})),this.hideSignature()},hideSignature:function(){this.ctrl&&this.ctrl.clear(),this.show=!1},clearSignature:function(){this.ctrl&&this.ctrl.clear()},initCtrl:function(){var n=this;return(0,a.default)(r.default.mark((function e(){var i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.show=!0,i=t.createCanvasContext(n.cid,n),n.cxt=i,n.ctrl={width:0,height:0,clear:function(){n.lines=[];var e=t.createSelectorQuery().in(n).select("."+n.cid);e.boundingClientRect((function(t){t&&(i.clearRect(0,0,t.width,t.height),t.width&&t.height&&(n.ctrl.width=t.width,n.ctrl.height=t.height))})).exec(),n.redraw()},getValue:function(){if(!n.lines.length)return"";var t=n._get_svg(),e=o(t),i="data:image/svg+xml;base64,"+e;return i}},n.$nextTick((function(){this.ctrl.clear()}));case 5:case"end":return e.stop()}}),e)})))()},_get_svg:function(){var t=[],n=this.ctrl.width,e=this.ctrl.height,i=90!=Math.abs(-90)?n:e,r=90==Math.abs(-90)?n:e,a=n/2,s=e/2,o=Math.PI,c=Math.cos(-90*o/180),u=Math.sin(-90*o/180),h=(i-n)/2,l=(r-e)/2,d=function(t){var n=(t.x-a)*c-(t.y-s)*u+a,e=(t.x-a)*u+(t.y-s)*c+s;return{x:n+h,y:e+l}};this.lines.map((function(n){if(!(n.points.length<2)){var e=d(n.start),i=["M ".concat(e.x," ").concat(Number(e.y))];n.points.map((function(t){var n=d(t);i.push("L ".concat(n.x," ").concat(Number(n.y)))})),t.push('<path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="rgb(0,0,0)" fill="none" d="'.concat(i.join(" "),'"/>'))}}));var f='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'.concat(i,'" height="').concat(r,'">').concat(t.join("\n"),"</svg>");return f},_get_svg_raw:function(){var t=[];this.lines.map((function(n){if(!(n.points.length<2)){var e=["M ".concat(n.start.x," ").concat(Number(n.start.y))];n.points.map((function(t){e.push("L ".concat(t.x," ").concat(Number(t.y)))})),t.push('<path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="rgb(0,0,0)" fill="none" d="'.concat(e.join(" "),'"/>'))}}));var n=this.ctrl.width,e=this.ctrl.height,i='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'.concat(n,'" height="').concat(e,'" transform="rotate(-90)">').concat(t.join("\n"),"</svg>");return i},_get_point:function(t){return{x:t.changedTouches[0].x.toFixed(1),y:t.changedTouches[0].y.toFixed(1)}},touchstart:function(t){var n=this._get_point(t);this.line={start:n,points:[n]},this.lines.push(this.line)},touchmove:function(t){var n=this,e=this._get_point(t);this.line.points.push(e),this.tm||(this.tm=setTimeout((function(){n.redraw(),n.tm=0}),10))},touchend:function(t){var n=this._get_point(t);this.line.points.push(n),this.line.end=n,this.redraw()},redraw:function(){var t=this.cxt;t.setStrokeStyle("#000"),t.setLineWidth(3);this.lines.map((function(n){t.beginPath(),n.points.length<2||(t.moveTo(n.start.x,n.start.y),n.points.map((function(n){t.lineTo(n.x,n.y)})),t.stroke())})),t.draw()},canvasIdErrorCallback:function(t){console.error(t.detail.errMsg)}}};n.default=c}).call(this,e("543d")["default"])},aab8:function(t,n,e){},ca9b:function(t,n,e){"use strict";e.r(n);var i=e("7d00"),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},cb7d:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},r=[]},f847:function(t,n,e){"use strict";var i=e("aab8"),r=e.n(i);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'bundle/pages/sin-signature/sin-signature-create-component',
    {
        'bundle/pages/sin-signature/sin-signature-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1b16"))
        })
    },
    [['bundle/pages/sin-signature/sin-signature-create-component']]
]);
