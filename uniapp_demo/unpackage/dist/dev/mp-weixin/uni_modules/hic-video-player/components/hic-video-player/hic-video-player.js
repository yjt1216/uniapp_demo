(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/hic-video-player/components/hic-video-player/hic-video-player"],{733:function(e,t,i){"use strict";i.r(t);var n=i(734),o=i(736);for(var r in o)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(r);i(739);var a,u=i(32),l=Object(u["default"])(o["default"],n["render"],n["staticRenderFns"],!1,null,"760c7892",null,!1,n["components"],a);l.options.__file="uni_modules/hic-video-player/components/hic-video-player/hic-video-player.vue",t["default"]=l.exports},734:function(e,t,i){"use strict";i.r(t);var n=i(735);i.d(t,"render",(function(){return n["render"]})),i.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(t,"components",(function(){return n["components"]}))},735:function(e,t,i){"use strict";var n;i.r(t),i.d(t,"render",(function(){return o})),i.d(t,"staticRenderFns",(function(){return a})),i.d(t,"recyclableRender",(function(){return r})),i.d(t,"components",(function(){return n}));try{n={hicVideo:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/hic-video-player/components/hic-video/hic-video")]).then(i.bind(null,929))},hicLivePlayer:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/hic-video-player/components/hic-live-player/hic-live-player")]).then(i.bind(null,937))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},r=!1,a=[];o._withStripped=!0},736:function(e,t,i){"use strict";i.r(t);var n=i(737),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},737:function(e,t,i){"use strict";(function(e){var n=i(4),o=i(13);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(39)),a=n(i(41)),u=c(i(738));function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(l=function(e){return e?i:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var i=l(t);if(i&&i.has(e))return i.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,i&&i.set(e,n),n}var s=function(){Promise.all([i.e("common/vendor"),i.e("uni_modules/hic-video-player/components/hic-video/hic-video")]).then(function(){return resolve(i(929))}.bind(null,i)).catch(i.oe)},d=function(){Promise.all([i.e("common/vendor"),i.e("uni_modules/hic-video-player/components/hic-live-player/hic-live-player")]).then(function(){return resolve(i(937))}.bind(null,i)).catch(i.oe)},f={name:"HicVideoPlayer",components:{HicVideo:s,HicLivePlayer:d},emits:["trafficPlayVideo","error","changeDefinition","ended","timeupdate"],props:{src:{type:String,default:""},poster:{type:String,default:""},autoplay:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},initialTime:{type:Number},title:{type:String,default:""},controlsToggleTitle:{type:Boolean,default:!1},upperRightText:{type:String,default:""},definition:{type:Array,default:function(){return[]}},defaultDefinition:{type:String,default:"sd"},width:{type:String,default:""},height:{type:String,default:""},hideVideo:{type:Boolean,default:!1},delay:{type:Number,default:500},tipNotWifi:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},showMuteBtn:{type:Boolean,default:!1},playbackrate:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoFullScreen:{type:Boolean,default:!1},useLivePlayer:{type:Boolean,default:!1},autoSwitchComp:{type:Boolean,default:!1},mode:{type:String,default:"live",validator:function(e){return-1!==["live","RTC"].indexOf(e)}},orientation:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},showPlayBtn:{type:Boolean,default:!1},showFullScreenBtn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},customName:{type:String,default:""},onlyShowCustomInFullscreen:{type:Boolean,default:!1}},data:function(){return{videoVis:!0,isWifi:!1,tipVis:!1,SDKVersion:"",videoUrl:""}},watch:{hideVideo:{handler:function(e,t){var i=this;if("video"===this.showComp){if(this.SDKVersion&&u.compareVersion("2.4.0",this.SDKVersion))return void(this.videoVis=!0)}else if("live-player"===this.showComp&&this.SDKVersion&&u.compareVersion("2.9.1",this.SDKVersion))return void(this.videoVis=!0);e?this.videoVis=!1:!e&&t?setTimeout((function(){i.videoVis=!0}),this.delay):this.videoVis=!0},immediate:!0}},computed:{style:function(){return this.width&&this.height?"width: ".concat(this.width,"; height: ").concat(this.height,";"):"width: 100%; height: 100%;"},showComp:function(){if(!this.useLivePlayer)return"video";var e=u.getExt(this.videoUrl);if(this.SDKVersion&&u.compareVersion("1.7.0",this.SDKVersion)){if(this.autoSwitchComp){var t=["flv","rtmp"];return-1!==t.indexOf(e)?"live-player":"video"}return"live-player"}return"video"},isAutoFullScreen:function(){return!!this.autoFullScreen&&!(!this.SDKVersion||!u.compareVersion("2.9.3",this.SDKVersion))}},created:function(){var e=this;return(0,a.default)(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.networkTypeIsWifi();case 2:e.isWifi=t.sent,e.tipNotWifi&&!e.isWifi&&(e.tipVis=!0),i=u.getSystemInfoSync(),i.SDKVersion&&(e.SDKVersion=i.SDKVersion);case 6:case"end":return t.stop()}}),t)})))()},methods:{networkTypeIsWifi:function(){return new Promise((function(t,i){e.getNetworkType({success:function(e){t("wifi"===e.networkType)},fail:function(e){console.log(e),i()}})}))},trafficPlayVideo:function(){this.tipVis=!1,e.showToast({title:"您当前正在使用移动数据, 记得注意流量变化",icon:"none"}),this.$emit("trafficPlayVideo")},pauseVideo:function(){"video"===this.showComp?this.$refs["hicVideo"].pauseVideo():"live-player"===this.showComp&&this.$refs["hicLivePlayer"].pause()},error:function(e){this.$emit("error",e)},ended:function(e){this.$emit("ended",e)},timeupdate:function(e){this.$emit("timeupdate",e)},changeUrl:function(e){this.videoUrl=e},changeDefinition:function(e){this.$emit("changeDefinition",e)}}};t.default=f}).call(this,i(2)["default"])},739:function(e,t,i){"use strict";i.r(t);var n=i(740),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},740:function(e,t,i){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/hic-video-player/components/hic-video-player/hic-video-player.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/hic-video-player/components/hic-video-player/hic-video-player-create-component',
    {
        'uni_modules/hic-video-player/components/hic-video-player/hic-video-player-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(733))
        })
    },
    [['uni_modules/hic-video-player/components/hic-video-player/hic-video-player-create-component']]
]);
