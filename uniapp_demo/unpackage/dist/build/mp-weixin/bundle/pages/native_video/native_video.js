require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/native_video/native_video"],{"106b":function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("d108");o(e("66fd"));var a=o(e("f0a5"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},3332:function(t,n,e){"use strict";e.r(n);var o=e("39a8"),a=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=a.a},"39a8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:""}},onReady:function(n){this.videoContext=t.createVideoContext("myVideo")},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(n){t.showModal({content:n.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,t.push(e)}return"#"+t.join("")}}};n.default=e}).call(this,e("543d")["default"])},f0a5:function(t,n,e){"use strict";e.r(n);var o=e("f534"),a=e("3332");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r=e("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=i.exports},f534:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},a=[]}},[["106b","common/runtime","common/vendor"]]]);