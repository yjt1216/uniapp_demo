require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/files_upload/files_upload"],{392:function(e,o,t){"use strict";(function(e,o){var n=t(4);t(29);n(t(25));var s=n(t(393));e.__webpack_require_UNI_MP_PLUGIN__=t,o(s.default)}).call(this,t(1)["default"],t(2)["createPage"])},393:function(e,o,t){"use strict";t.r(o);var n=t(394),s=t(396);for(var i in s)["default"].indexOf(i)<0&&function(e){t.d(o,e,(function(){return s[e]}))}(i);t(399);var c,r=t(57),a=Object(r["default"])(s["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],c);a.options.__file="bundle/pages/files_upload/files_upload.vue",o["default"]=a.exports},394:function(e,o,t){"use strict";t.r(o);var n=t(395);t.d(o,"render",(function(){return n["render"]})),t.d(o,"staticRenderFns",(function(){return n["staticRenderFns"]})),t.d(o,"recyclableRender",(function(){return n["recyclableRender"]})),t.d(o,"components",(function(){return n["components"]}))},395:function(e,o,t){"use strict";var n;t.r(o),t.d(o,"render",(function(){return s})),t.d(o,"staticRenderFns",(function(){return c})),t.d(o,"recyclableRender",(function(){return i})),t.d(o,"components",(function(){return n}));try{n={navBar:function(){return t.e("components/nav-bar/nav-bar").then(t.bind(null,851))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,910))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,o=e.$createElement,t=(e._self._c,e.maxSelect>e.recordPhotoes.length||-1==e.maxSelect);e.$mp.data=Object.assign({},{$root:{g0:t}})},i=!1,c=[];s._withStripped=!0},396:function(e,o,t){"use strict";t.r(o);var n=t(397),s=t.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(i);o["default"]=s.a},397:function(e,o,t){"use strict";(function(e){var n=t(4);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=t(190),i=n(t(65)),c=(t(340),function(){t.e("bundle/components/zy-tag/zy-tag").then(function(){return resolve(t(1066))}.bind(null,t)).catch(t.oe)}),r=function(){t.e("bundle/components/sign-canvas/sign-canvas").then(function(){return resolve(t(1051))}.bind(null,t)).catch(t.oe)},a=(t(398),{components:{zyTag:c,catSignature:r},data:function(){return{appraisePerson:{},itemSn:"",order_id:"",step_id:"",mapInstance:null,recordPhotoes:[],maxCount:4,imageUrl:[],attach:"",isAuth:-1,nurserLocation:{latitude:"",longitude:"",address:""},isShowSign:!1,signImage:"",wasteSortList:[{checked:!1,name:"感染性废物"},{checked:!1,name:"损伤性废物"},{checked:!1,name:"化学性废物"},{checked:!1,name:"药物性废物"},{checked:!1,name:"病理性废物"},{checked:!1,name:"其他"}],wasteCountValue:"",saveBaseDataList:[]}},onLoad:function(e){this.$set(this,"recordPhotoes",this.recordPhotoes.splice(1,1)),this.$emit("changeRecordPhotoes",this.recordPhotoes);var o=e.item_sn,t=e.order_id;console.log("护理记录订单itemSn ",o),this.itemSn=o,this.order_id=t;var n=i.default.get("sendPersonInfo");this.appraisePerson=n,console.log("护理记录订单options ",this.appraisePerson),this.step_id=n.step_id,console.log("护理记录订单step_id ",this.step_id)},methods:{inputData:function(e,o){console.log("医疗废物重量或数量event ",e,o),this.wasteCountValue=e},submitNursingRecordFun:function(){if(""!=this.wasteCountValue)if(0!=this.recordPhotoes.length){var o=0;this.uploadImagesFun(o)}else e.showToast({title:"请选择照片",icon:"none"});else e.showToast({title:"请填写医废废物重量",icon:"none"})},uploadImagesFun:function(o){var t=this;console.log("医废照片files",this.recordPhotoes);var n="3252348cc6324c00a2b585ca2ec1cc87";e.uploadFile({url:"https://api.depin.tech/file/upload",filePath:this.recordPhotoes[o],name:"file",formData:{token:n,cate:"医废照片"},success:function(n){console.log("医废照片uploadRes",n);var s=JSON.parse(n.data);if(console.log("医废照片resData",s),0===s.code)if(t.imageUrl.push(s.data.url),o++,o==t.recordPhotoes.length){for(var i=0;i<t.imageUrl.length;i++)t.attach+=t.imageUrl[i]+",";t.attach=t.attach.substring(0,t.attach.length-1)}else t.uploadImagesFun(o);else console.log(s),e.hideLoading(),e.showToast({icon:"none",title:"图片上传失败"})},fail:function(e){console.log("医废照片error",e)}})},uploadSignInfoFun:function(){""==this.signImage&&e.showToast({title:"请签名",icon:"none"});var o={token:i.default.get(s.TOKEN),cate:"签退签字"};e.uploadFile({url:"https://api.depin.tech/file/upload",filePath:this.signImage,name:"file",formData:o,success:function(e){console.log("上传签名res",e);e.url,e.uid},fail:function(e){console.log("上传签名error",e)}})},addImage:function(){var o=this;this.recordPhotoes.length>=this.maxCount?e.showToast({title:"最多上传四张图片",icon:"none",complete:function(e){o.$emit("changeRecordPhotoes",o.recordPhotoes)}}):e.chooseImage({count:4,success:function(t){var n=t.tempFiles,s=[];n.forEach((function(t,n){e.compressImage({src:t.path,quality:60,success:function(e){console.log("压缩图片res",e);for(var t=0;t<o.recordPhotoes.length;t++)s.push(o.recordPhotoes[t]);if(o.maxSelect>0)for(t=0;t<Math.min(o.maxSelect-o.recordPhotoes.length,e.tempFilePaths.length);t++)s.push(e.tempFilePaths[t]);else for(t=0;t<e.tempFilePaths.length;t++)s.push(e.tempFilePaths[t])}})}))},fail:function(e){console.log("选取图片err",e)}})},imageMenu:function(o){var t=this;e.showActionSheet({itemList:["向前移动","向后移动","替换图片","删除图片"],success:function(n){if(console.log(n.tapIndex),0==n.tapIndex)if(o>0){var s=t.recordPhotoes,i=s[o];s[o]=s[o-1],s[o-1]=i;for(var c=[],r=0;r<s.length;r++)c.push(s[r]);t.$set(t,"recordPhotoes",c),t.$emit("changeRecordPhotoes",t.recordPhotoes)}else e.showToast({title:"无可替换",icon:"none",complete:function(e){t.$emit("changeRecordPhotoes",t.recordPhotoes)}});else if(1==n.tapIndex)if(o<t.recordPhotoes.length-1){s=t.recordPhotoes,i=s[o];s[o]=s[o+1],s[o+1]=i;for(c=[],r=0;r<s.length;r++)c.push(s[r]);t.$set(t,"recordPhotoes",c),t.$emit("changeRecordPhotoes",t.recordPhotoes)}else e.showToast({title:"无可替换",icon:"none",complete:function(e){t.$emit("changeRecordPhotoes",t.recordPhotoes)}});else 2==n.tapIndex?e.chooseImage({count:4,success:function(e){for(var n=t.recordPhotoes,s=[],i=0;i<n.length;i++)o!=i?s.push(n[i]):s.push(e.tempFilePaths[0]);t.$set(t,"recordPhotoes",s),t.$emit("changeRecordPhotoes",t.recordPhotoes)},fail:function(e){t.$emit("changeRecordPhotoes",t.recordPhotoes)}}):3==n.tapIndex&&e.showModal({title:"消息",content:"您确认删除该图片吗？",success:function(e){if(e.confirm){for(var n=t.recordPhotoes,s=[],i=0;i<n.length;i++)o!=i&&s.push(n[i]);t.$set(t,"recordPhotoes",s),t.$emit("changeRecordPhotoes",t.recordPhotoes)}else t.$emit("changeRecordPhotoes",t.recordPhotoes)},fail:function(e){t.$emit("changeRecordPhotoes",t.recordPhotoes)}})}})},viewImage:function(o){e.previewImage({urls:this.result,current:o})},doss:function(){this.isShowSign=!0},closeSign:function(){this.isShowSign=!1},saveSign:function(e){this.isShowSign=!1,this.signImage=this.$refs.catSign.signImage,console.log("执行中签名signImage",this.signImage)},multiHandle:function(e,o){this.wasteSortList[o].checked=!this.wasteSortList[o].checked}},props:{type:{type:String,default:"image"},maxSelect:{type:Number,default:-1}}});o.default=a}).call(this,t(2)["default"])},399:function(e,o,t){"use strict";t.r(o);var n=t(400),s=t.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(i);o["default"]=s.a},400:function(e,o,t){}},[[392,"common/runtime","common/vendor","bundle/common/vendor"]]]);