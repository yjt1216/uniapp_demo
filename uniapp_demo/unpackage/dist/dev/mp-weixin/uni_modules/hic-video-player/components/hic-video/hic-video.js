(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/hic-video-player/components/hic-video/hic-video"],{1286:function(e,t,n){"use strict";n.r(t);var i=n(1287),o=n(1289);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(1292);var c,a=n(54),l=Object(a["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"e6274b18",null,!1,i["components"],c);l.options.__file="uni_modules/hic-video-player/components/hic-video/hic-video.vue",t["default"]=l.exports},1287:function(e,t,n){"use strict";n.r(t);var i=n(1288);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},1288:function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return i}));try{i={hicControls:function(){return n.e("uni_modules/hic-video-player/components/hic-controls/hic-controls").then(n.bind(null,1366))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},r=!1,c=[];o._withStripped=!0},1289:function(e,t,n){"use strict";n.r(t);var i=n(1290),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},1290:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(1291),o=function(){n.e("uni_modules/hic-video-player/components/hic-controls/hic-controls").then(function(){return resolve(n(1366))}.bind(null,n)).catch(n.oe)},r={name:"HicVideo",components:{HicControls:o},emits:["changeUrl","error","timeupdate","ended"],props:{src:{type:String,default:""},poster:{type:String,default:""},autoplay:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},initialTime:{type:Number},title:{type:String,default:""},controlsToggleTitle:{type:Boolean,default:!1},upperRightText:{type:String,default:""},definition:{type:Array,default:function(){return[]}},defaultDefinition:{type:String,default:"sd"},controls:{type:Boolean,default:!0},showMuteBtn:{type:Boolean,default:!1},playbackrate:{type:Boolean,default:!1},autoFullScreen:{type:Boolean,default:!1},style_:{type:String,default:""},custom:{type:Boolean,default:!1},customName:{type:String,default:""},onlyShowCustomInFullscreen:{type:Boolean,default:!1}},data:function(){return{videoUrl:"",curDefinition:this.defaultDefinition,curRate:"1.0",videoLoadText:"正在加载请稍等",coverViewVis:!1,ctx:null,fullscreen:!1}},watch:{src:{handler:function(e){this.init()}},definition:{handler:function(e){this.init()}}},computed:{hasDefinition:function(){return Array.isArray(this.definition)&&this.definition.length}},mounted:function(){this.init(),this.autoFullScreen&&(0,i.onDirectionChange)(this.directionChange)},beforeDestroy:function(){this.autoFullScreen&&(0,i.offDirectionChange)(this.directionChange)},methods:{init:function(){var e=this;if(this.hasDefinition){this.curDefinition||(this.curDefinition=this.defaultDefinition||this.definition[0].key);var t=this.definition.findIndex((function(t){return t.key==e.curDefinition}));-1==t&&(t=0),this.videoUrl=this.definition[t].src}else this.videoUrl=this.src;this.$emit("changeUrl",this.videoUrl)},changeDefinition:function(e){this.curDefinition=e,this.init(),this.$emit("changeDefinition",e)},changeRate:function(e){this.createContext();var t=Number(e);this.ctx.playbackRate(t),this.curRate=e},createContext:function(){this.ctx||(this.ctx=e.createVideoContext("hic-video",this))},play:function(e){console.log("play")},pause:function(e){console.log("pause")},pauseVideo:function(){this.createContext(),this.ctx.pause()},loadedmetadata:function(e){console.log("loadedmetadata 视频元数据加载完成",e.detail),this.videoLoadText=""},error:function(e){console.log("error 视频播放出错",e),this.videoLoadText="视频播放出错",this.$emit("error",e)},waiting:function(e){console.log("waiting",e.detail),this.videoLoadText="缓存中请稍等"},timeupdate:function(e){this.videoLoadText="",this.$emit("timeupdate",e)},controlstoggle:function(e){var t=e.detail.show;this.coverViewVis=Boolean(t),this.$refs["hicControls"].controlstoggle(t)},fullscreenchange:function(e){console.log("fullscreenchange:",e.detail),this.fullscreen=e.detail.fullScreen&&"horizontal"==e.detail.direction},directionChange:function(e){console.log("--- directionChange ---\x3e",e),this.createContext(),0===e?this.ctx.exitFullScreen():this.ctx.requestFullScreen({direction:e})},ended:function(e){this.$emit("ended",e)}}};t.default=r}).call(this,n(2)["default"])},1292:function(e,t,n){"use strict";n.r(t);var i=n(1293),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},1293:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/hic-video-player/components/hic-video/hic-video.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/hic-video-player/components/hic-video/hic-video-create-component',
    {
        'uni_modules/hic-video-player/components/hic-video/hic-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1286))
        })
    },
    [['uni_modules/hic-video-player/components/hic-video/hic-video-create-component']]
]);
