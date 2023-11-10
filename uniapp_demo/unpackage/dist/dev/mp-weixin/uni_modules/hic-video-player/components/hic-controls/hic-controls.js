(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/hic-video-player/components/hic-controls/hic-controls"],{1039:function(t,e,n){"use strict";n.r(e);var i=n(1040),r=n(1042);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n(1044);var a,s=n(32),u=Object(s["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"49e9ae1c",null,!1,i["components"],a);u.options.__file="uni_modules/hic-video-player/components/hic-controls/hic-controls.vue",e["default"]=u.exports},1040:function(t,e,n){"use strict";n.r(e);var i=n(1041);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},1041:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=!1,a=[];r._withStripped=!0},1042:function(t,e,n){"use strict";n.r(e);var i=n(1043),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},1043:function(t,e,n){"use strict";var i=n(13);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(762));function o(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(o=function(t){return t?n:e})(t)}function a(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!==typeof t)return{default:t};var n=o(e);if(n&&n.has(t))return n.get(t);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t,s)){var u=a?Object.getOwnPropertyDescriptor(t,s):null;u&&(u.get||u.set)?Object.defineProperty(r,s,u):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}var s={name:"HicControls",emits:["changeDefinition","changeRate"],props:{definition:{type:Array,default:function(){return[]}},curDefinition:{type:String,default:""},curRate:{type:String,default:"1.0"},upperRightText:{type:String,default:""},playbackrate:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},customName:{type:String,default:""},onlyShowCustomInFullscreen:{type:Boolean,default:!1}},data:function(){return{coverViewVis:!1,definitionVis:!1,rateVis:!1,customVis:!1,SDKVersion:""}},watch:{fullscreen:{handler:function(t,e){!t&&e&&(this.hideDefinition(),this.hideRate(),this.hideCustom())}}},computed:{hasDefinition:function(){return Array.isArray(this.definition)&&this.definition.length},definitionName:function(){var t=this;if(this.hasDefinition&&this.curDefinition){var e=this.definition.findIndex((function(e){return e.key==t.curDefinition}));if(-1!=e)return this.definition[e].name}return""},rateList:function(){if(this.SDKVersion&&!r.compareVersion("1.4.0",this.SDKVersion))return[];var t=[{key:"0.5",name:"0.5X"},{key:"0.8",name:"0.8X"},{key:"1.0",name:"1.0X"},{key:"1.25",name:"1.25X"},{key:"1.5",name:"1.5X"}];return this.SDKVersion&&r.compareVersion("2.6.3",this.SDKVersion)&&t.push({key:"2.0",name:"2.0X"}),t},hasRate:function(){return this.playbackrate&&Array.isArray(this.rateList)&&this.rateList.length},rateName:function(){var t=this;if(!this.hasRate)return"";if("1.0"==this.curRate)return"倍速";var e=this.rateList.findIndex((function(e){return e.key==t.curRate}));return-1!=e?this.rateList[e].name:(console.warn("没有对应的播放速度"),"倍速")},hasCoverView:function(){return this.hasDefinition||this.hasRate}},created:function(){var t=r.getSystemInfoSync();t.SDKVersion&&(this.SDKVersion=t.SDKVersion)},methods:{controlstoggle:function(t){this.hasCoverView&&(this.coverViewVis=Boolean(t))},showDefinition:function(){this.hasDefinition&&(this.definitionVis=!0)},hideDefinition:function(){this.definitionVis=!1},changeDefinition:function(t){this.hideDefinition(),this.$emit("changeDefinition",t)},showRate:function(){this.hasRate&&(this.rateVis=!0)},hideRate:function(){this.rateVis=!1},changeRate:function(t){this.hideRate(),this.$emit("changeRate",t)},showCustom:function(){this.custom&&(this.customVis=!0)},hideCustom:function(){this.customVis=!1}}};e.default=s},1044:function(t,e,n){"use strict";n.r(e);var i=n(1045),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},1045:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/hic-video-player/components/hic-controls/hic-controls.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/hic-video-player/components/hic-controls/hic-controls-create-component',
    {
        'uni_modules/hic-video-player/components/hic-controls/hic-controls-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1039))
        })
    },
    [['uni_modules/hic-video-player/components/hic-controls/hic-controls-create-component']]
]);
