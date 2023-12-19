require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/appraise_form/appraise_form"],{364:function(n,e,o){"use strict";(function(n,e){var t=o(4);o(26);t(o(25));var r=t(o(365));n.__webpack_require_UNI_MP_PLUGIN__=o,e(r.default)}).call(this,o(1)["default"],o(2)["createPage"])},365:function(n,e,o){"use strict";o.r(e);var t=o(366),r=o(368);for(var i in r)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return r[n]}))}(i);o(370);var u,c=o(54),a=Object(c["default"])(r["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],u);a.options.__file="bundle/pages/appraise_form/appraise_form.vue",e["default"]=a.exports},366:function(n,e,o){"use strict";o.r(e);var t=o(367);o.d(e,"render",(function(){return t["render"]})),o.d(e,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(e,"components",(function(){return t["components"]}))},367:function(n,e,o){"use strict";var t;o.r(e),o.d(e,"render",(function(){return r})),o.d(e,"staticRenderFns",(function(){return u})),o.d(e,"recyclableRender",(function(){return i})),o.d(e,"components",(function(){return t}));try{t={navBar:function(){return o.e("components/nav-bar/nav-bar").then(o.bind(null,628))},uRadioGroup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(o.bind(null,849))},uRadio:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(o.bind(null,857))},uInput:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-input/u-input")]).then(o.bind(null,687))},uCheckboxGroup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(o.bind(null,695))},uCheckbox:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-checkbox/u-checkbox")]).then(o.bind(null,703))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,u=[];r._withStripped=!0},368:function(n,e,o){"use strict";o.r(e);var t=o(369),r=o.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=r.a},369:function(n,e,o){"use strict";(function(n){var t=o(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(o(61)),i=t(o(63)),u={data:function(){return{formData:{},questionList:[],signValue:"",settings:{width:"750",height:"500",lineWidth:3,textColor:"#007AFF"},imgUrl:""}},onBackPress:function(n){console.log("导航栏返回 拦截event",n)},onLoad:function(){},methods:{naviLeftClick:function(){console.log("导航栏返回 拦截");var e=getCurrentPages();console.log("导航栏pages",e),n.navigateBack()},signatureChange:function(n){this.imgUrl=n},radioChangeFun:function(n){console.log("评估表单radioChangeFun",n)},select:function(n){console.log(n)},getFormData:function(){var n=this;apiAssessFromData().then((function(e){console.log("评估表单res",e);var o=e.data.questions;console.log("评估表单questions",o.length);var t=[];t=o,t.forEach((function(n){var e=n.options;e.forEach((function(n){n["isSelect"]=!1}))})),console.log("表单添加select属性",t),n.questionList=t})).catch((function(n){console.log("评估表单err",n)}))},nextStep:function(){this.$emit("personData",this.formData),console.log("input list 中数据list",this.formData)},inputData:function(n,e){console.log("填空题event ",n,e),this.formData[e]=n},radioChange:function(n,e,o){console.log("单选题event ",n,e),this.formData[e.title]=n,e.options.forEach((function(n){"其他"==n.title&&(n.isSelect=!n.isSelect,console.log("单选题item ",n))})),this.questionList[o]=e,this.$forceUpdate()},checkboxChange:function(n,e){console.log("多选题 ",n,e),this.formData[e]=n},submitAppraiseFun:function(){console.log("提交评估单 --- ",this.signValue)},startSign:function(){var n=this;return(0,i.default)(r.default.mark((function e(){var o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$refs.sign.getSyncSignature();case 2:o=e.sent,console.log("组件版本",n.$refs.sign.VERSION),console.log("签名数据",o);case 5:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,o(2)["default"])},370:function(n,e,o){"use strict";o.r(e);var t=o(371),r=o.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=r.a},371:function(n,e,o){}},[[364,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/pages/appraise_form/appraise_form.js.map