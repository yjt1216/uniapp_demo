(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-form/u-form"],{741:function(e,n,t){"use strict";t.r(n);var r=t(742),i=t(744);for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);var o,l=t(32),a=Object(l["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"786a592e",null,!1,r["components"],o);a.options.__file="uni_modules/uview-ui/components/u-form/u-form.vue",n["default"]=a.exports},742:function(e,n,t){"use strict";t.r(n);var r=t(743);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},743:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},u=!1,o=[];i._withStripped=!0},744:function(e,n,t){"use strict";t.r(n);var r=t(745),i=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=i.a},745:function(e,n,t){"use strict";(function(e){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(39)),u=r(t(18)),o=r(t(11)),l=r(t(41)),a=r(t(746)),c=r(t(747));c.default.warning=function(){};var d={name:"u-form",mixins:[e.$u.mpMixin,e.$u.mixin,a.default],provide:function(){return{uForm:this}},data:function(){return{formRules:{},validator:{},originalModel:null}},watch:{rules:{immediate:!0,handler:function(e){this.setRules(e)}},propsChange:function(e){var n;null!==(n=this.children)&&void 0!==n&&n.length&&this.children.map((function(e){"function"==typeof e.updateParentData&&e.updateParentData()}))},model:{immediate:!0,handler:function(n){this.originalModel||(this.originalModel=e.$u.deepClone(n))}}},computed:{propsChange:function(){return[this.errorType,this.borderBottom,this.labelPosition,this.labelWidth,this.labelAlign,this.labelStyle]}},created:function(){this.children=[]},methods:{setRules:function(n){0!==Object.keys(n).length&&(0!==Object.keys(this.model).length?(this.formRules=n,this.validator=new c.default(n)):e.$u.error("设置rules，model必须设置！如果已经设置，请刷新页面。"))},resetFields:function(){this.resetModel()},resetModel:function(n){var t=this;this.children.map((function(n){var r=null===n||void 0===n?void 0:n.prop,i=e.$u.getProperty(t.originalModel,r);e.$u.setProperty(t.model,r,i)}))},clearValidate:function(e){e=[].concat(e),this.children.map((function(n){(void 0===e[0]||e.includes(n.prop))&&(n.message=null)}))},validateField:function(n,t){var r=arguments,a=this;return(0,l.default)(i.default.mark((function l(){var d;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:d=r.length>2&&void 0!==r[2]?r[2]:null,a.$nextTick((function(){var r=[];n=[].concat(n),a.children.map((function(t){var i=[];if(n.includes(t.prop)){var l=e.$u.getProperty(a.model,t.prop),s=t.prop.split("."),f=s[s.length-1],p=a.formRules[t.prop];if(!p)return;for(var h=[].concat(p),v=0;v<h.length;v++){var m=h[v],g=[].concat(null===m||void 0===m?void 0:m.trigger);if(!d||g.includes(d)){var y=new c.default((0,o.default)({},f,m));y.validate((0,o.default)({},f,l),(function(n,o){var l,a;e.$u.test.array(n)&&(r.push.apply(r,(0,u.default)(n)),i.push.apply(i,(0,u.default)(n))),t.message=null!==(l=null===(a=i[0])||void 0===a?void 0:a.message)&&void 0!==l?l:null}))}}}})),"function"===typeof t&&t(r)}));case 2:case"end":return i.stop()}}),l)})))()},validate:function(n){var t=this;if(0!==Object.keys(this.formRules).length)return new Promise((function(n,r){t.$nextTick((function(){var i=t.children.map((function(e){return e.prop}));t.validateField(i,(function(i){i.length?("toast"===t.errorType&&e.$u.toast(i[0].message),r(i)):n(!0)}))}))}));e.$u.error("未设置rules，请看文档说明！如果已经设置，请刷新页面。")}}};n.default=d}).call(this,t(2)["default"])}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-form/u-form.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-form/u-form-create-component',
    {
        'uni_modules/uview-ui/components/u-form/u-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(741))
        })
    },
    [['uni_modules/uview-ui/components/u-form/u-form-create-component']]
]);
