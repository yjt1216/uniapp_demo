require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/components/su-sticky/su-sticky"],{1187:function(t,e,n){"use strict";n.r(e);var i=n(1188),s=n(1190);for(var c in s)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(c);n(1193);var o,r=n(52),u=Object(r["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,"d0a3eaa2",null,!1,i["components"],o);u.options.__file="bundle/components/su-sticky/su-sticky.vue",e["default"]=u.exports},1188:function(t,e,n){"use strict";n.r(e);var i=n(1189);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},1189:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return s})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return c})),n.d(e,"components",(function(){return i}));var s=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.style])),i=t.__get_style([t.stickyContent]);t.$mp.data=Object.assign({},{$root:{s0:n,s1:i}})},c=!1,o=[];s._withStripped=!0},1190:function(t,e,n){"use strict";n.r(e);var i=n(1191),s=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=s.a},1191:function(t,e,n){"use strict";(function(t){var i=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n(26)),c=i(n(28)),o=n(1192),r={name:"su-sticky",props:{offsetTop:{type:[String,Number],default:0},customNavHeight:{type:[String,Number]},stickyToTop:{type:Boolean,default:!1},bgColor:{type:String,default:"transparent"},zIndex:{type:[String,Number],default:""},index:{type:[String,Number],default:""},customStyle:{type:[Object,String],default:function(){return{}}}},data:function(){return{cssSticky:!1,stickyTop:0,elId:(0,o.guid)(),left:0,width:"auto",height:"auto",fixed:!1}},computed:{style:function(){var t={};return this.stickyToTop?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=(0,o.addUnit)(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,(0,o.deepMerge)((0,o.addStyle)(this.customStyle),t)},stickyContent:function(){var t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex:function(){return this.zIndex?this.zIndex:970}},mounted:function(){this.init()},methods:{init:function(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.stickyToTop&&this.initObserveContent()},$uGetRect:function(e,n){var i=this;return new Promise((function(s){t.createSelectorQuery().in(i)[n?"selectAll":"select"](e).boundingClientRect((function(t){n&&Array.isArray(t)&&t.length&&s(t),!n&&t&&s(t)})).exec()}))},initObserveContent:function(){var t=this;this.$uGetRect("#"+this.elId).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))}))},observeContent:function(){var e=this;this.disconnectObserver("contentObserver");var n=t.createIntersectionObserver({thresholds:[.95,.98,1]});n.relativeToViewport({top:-this.stickyTop}),n.observe("#".concat(this.elId),(function(t){e.setFixed(t.boundingClientRect.top)})),this.contentObserver=n},setFixed:function(t){var e=t<=this.stickyTop;this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()},getStickyTop:function(){this.stickyTop=(0,o.getPx)(this.offsetTop)+(0,o.getPx)(this.customNavHeight)},checkSupportCssSticky:function(){var t=this;return(0,c.default)(s.default.mark((function e(){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"android"===(0,o.os)()&&Number((0,o.sys)().system)>8&&(t.cssSticky=!0),e.next=3,t.checkComputedStyle();case 3:t.cssSticky=e.sent,"ios"===(0,o.os)()&&(t.cssSticky=!0);case 5:case"end":return e.stop()}}),e)})))()},checkComputedStyle:function(){var e=this;return new Promise((function(n){t.createSelectorQuery().in(e).select(".u-sticky").fields({computedStyle:["position"]}).exec((function(t){n("sticky"===t[0].position)}))}))},checkCssStickyForH5:function(){}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=r}).call(this,n(2)["default"])},1193:function(t,e,n){"use strict";n.r(e);var i=n(1194),s=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=s.a},1194:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/components/su-sticky/su-sticky.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'bundle/components/su-sticky/su-sticky-create-component',
    {
        'bundle/components/su-sticky/su-sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1187))
        })
    },
    [['bundle/components/su-sticky/su-sticky-create-component']]
]);
