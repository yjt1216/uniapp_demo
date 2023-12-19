require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/list_input/list_input"],{355:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var u=o(t(356));e.__webpack_require_UNI_MP_PLUGIN__=t,n(u.default)}).call(this,t(1)["default"],t(2)["createPage"])},356:function(e,n,t){"use strict";t.r(n);var o=t(357),u=t(359);for(var a in u)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t(362);var c,i=t(54),s=Object(i["default"])(u["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);s.options.__file="bundle/pages/list_input/list_input.vue",n["default"]=s.exports},357:function(e,n,t){"use strict";t.r(n);var o=t(358);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},358:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return o}));try{o={uTag:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(t.bind(null,841))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,687))},uRadioGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(t.bind(null,849))},uRadio:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(t.bind(null,857))},uCheckboxGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(t.bind(null,695))},uCheckbox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-checkbox/u-checkbox")]).then(t.bind(null,703))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement;e._self._c},a=!1,c=[];u._withStripped=!0},359:function(e,n,t){"use strict";t.r(n);var o=t(360),u=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=u.a},360:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(220),u=t(361),a=function(){t.e("bundle/components/sign-canvas/sign-canvas").then(function(){return resolve(t(865))}.bind(null,t)).catch(t.oe)},c={components:{catSignature:a},data:function(){return{formData:{},isShow:!1,signImage:"",personMsg:[{name:"姓名",icon:"none",type:"input",dataValue:"nameValue",placeValue:"请输入姓名"},{name:"性别",icon:"none",type:"input",dataValue:"sexValue",placeValue:"请输入性别"},{name:"年龄",icon:"none",type:"input",dataValue:"ageValue",placeValue:"请输入年龄"},{name:"电话",icon:"none",type:"input",dataValue:"telValue",placeValue:"请输入电话"},{name:"身份证号",icon:"none",type:"input",dataValue:"idValue",placeValue:"请输入身份证号码"}],redioList:[{name:"更喜欢哪一种水果？",value:0,redios:[{name:"苹果"},{name:"大白梨"},{name:"香蕉"}]},{name:"喜欢哪一个文具？",value:1,redios:[{name:"橡皮擦"},{name:"铅笔"},{name:"文具盒"},{name:"其他"}]},{name:"喜欢哪一位诗人？",value:2,redios:[{name:"李白"},{name:"杜甫"},{name:"白居易"},{name:"李清照"}]}],checkboxs:[{checked:!0,name:"感染性废物"},{checked:!1,name:"损伤性废物"},{checked:!1,name:"化学性废物"},{checked:!1,name:"药物性废物"},{checked:!1,name:"病理性废物"},{checked:!1,name:"其他"}],checkList:[{name:"更喜欢哪一种水果？",value:0,list:[{name:"苹果"},{name:"大白梨"},{name:"香蕉"}]},{name:"喜欢哪一个文具？",value:1,list:[{name:"橡皮擦"},{name:"铅笔"},{name:"文具盒"}]},{name:"喜欢哪一位诗人？",value:2,list:[{name:"李白"},{name:"杜甫"},{name:"白居易"},{name:"李清照"}]}],testDataList:[{customerCount:0,contactsCount:0,businessCount:0,businessMoney:0,contractCount:0,contractMoney:0,receivablesMoney:0,recordCount:0,type:"2021"},{customerCount:0,contactsCount:0,businessCount:0,businessMoney:0,contractCount:0,contractMoney:0,receivablesMoney:0,recordCount:0,type:"2022"},{customerCount:36,contactsCount:18,businessCount:1,businessMoney:1e4,contractCount:7,contractMoney:490008.98,receivablesMoney:6e4,recordCount:71,type:"2023"}]}},onLoad:function(){this.getValueFromObject()},methods:{getValueFromObject:function(){var e=this.testDataList.slice(-1);console.log("测试object数据取值testObj",e);var n=e[0];console.log("测试object数据取值soldData",n)},getFormData:function(){(0,o.apiAssessFromData)().then((function(e){console.log("评估表单res",e)})).catch((function(e){console.log("评估表单err",e)}))},nextStep:function(){this.$emit("personData",this.formData),console.log("input list 中数据list",this.formData)},inputData:function(e,n){console.log("event ",e,n),this.formData[n]=e},doss:function(){this.isShow=!0},closeSign:function(){this.isShow=!1},saveSign:function(e){this.isShow=!1,this.signImage=this.$refs.catSign.signImage,console.log("signImage",this.signImage),this.loadBase64Url(this.signImage)},loadBase64Url:function(){var e=this.signImage;(0,u.base64ToPath)(e).then((function(e){console.log("signImage path",e)})).catch((function(e){console.log("临时路径 err",e)}))},checkboxClick:function(e){this.checkboxs[e].checked=!this.checkboxs[e].checked}}};n.default=c},362:function(e,n,t){"use strict";t.r(n);var o=t(363),u=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=u.a},363:function(e,n,t){}},[[355,"common/runtime","common/vendor","bundle/common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/pages/list_input/list_input.js.map