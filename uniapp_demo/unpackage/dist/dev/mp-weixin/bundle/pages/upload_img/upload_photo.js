require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/upload_img/upload_photo"],{319:function(e,n,o){"use strict";(function(e,n){var t=o(4);o(26);t(o(25));var i=t(o(320));e.__webpack_require_UNI_MP_PLUGIN__=o,n(i.default)}).call(this,o(1)["default"],o(2)["createPage"])},320:function(e,n,o){"use strict";o.r(n);var t=o(321),i=o(323);for(var c in i)["default"].indexOf(c)<0&&function(e){o.d(n,e,(function(){return i[e]}))}(c);o(325);var u,s=o(53),a=Object(s["default"])(i["default"],t["render"],t["staticRenderFns"],!1,null,"46968198",null,!1,t["components"],u);a.options.__file="bundle/pages/upload_img/upload_photo.vue",n["default"]=a.exports},321:function(e,n,o){"use strict";o.r(n);var t=o(322);o.d(n,"render",(function(){return t["render"]})),o.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(n,"components",(function(){return t["components"]}))},322:function(e,n,o){"use strict";var t;o.r(n),o.d(n,"render",(function(){return i})),o.d(n,"staticRenderFns",(function(){return u})),o.d(n,"recyclableRender",(function(){return c})),o.d(n,"components",(function(){return t}));try{t={uniPopup:function(){return o.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(o.bind(null,749))},uDivider:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-divider/u-divider")]).then(o.bind(null,756))},uniRate:function(){return o.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(o.bind(null,764))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},c=!1,u=[];i._withStripped=!0},323:function(e,n,o){"use strict";o.r(n);var t=o(324),i=o.n(t);for(var c in t)["default"].indexOf(c)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(c);n["default"]=i.a},324:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=null,t={data:function(){return{currentIndex:"0",feedbackTypeList:[{code:"0",name:"BUG反馈"},{code:"1",name:"功能建议"},{code:"2",name:"其他问题"}],feedbackValue:"",conLength:0,tempFileList:[],tempFileObject:[],maxChooseImages:5,cooperate:0}},onLoad:function(){o=this},watch:{feedbackValue:function(e,n){console.log("计算属性",e),this.conLength=e.length}},methods:{cancelEvaluateFun:function(){this.$refs.popup.close(),console.log(" 评价患者 取消评价")},submitEvaluateFun:function(){this.$refs.popup.close(),console.log(" 评价患者 提交评价")},cooperateChange:function(e){console.log(" 评价患者星",e,this.cooperate)},feedbackTypeHandle:function(e){console.log("[反馈类型]",e),this.currentIndex=e},getFeedbackMessageHandle:function(e){console.log("[反馈内容]",e),this.feedbackValue=e.detail.value},chooseImageHandle:function(){console.log("[上传图片]"),o.tempFileList.length<o.maxChooseImages?e.chooseMedia({count:o.maxChooseImages,mediaType:["image"],sizeType:["original","compressed"],sourceType:["album"],camera:"back",success:function(n){var t=n.tempFiles;t.forEach((function(n,t){o.tempFileList.length<o.maxChooseImages?(console.log("for in ",n),e.compressImage({src:n.tempFilePath,quality:60,success:function(e){console.log("压缩图片compressI",e),o.tempFileList.push({path:e.tempFilePath})}})):console.log("图片数已达到5张")}))}}):e.showToast({title:"最大5张",icon:"none"})},deleteImgHandle:function(e){console.log("[删除图片]"),this.tempFileList.splice(e,1),console.log(this.tempFileList)},submitHandle:function(){console.log("[反馈意见]"),console.log(this.tempFileList),this.savaImageFun()},savaImageFun:function(){o.tempFileList.forEach((function(n,o){console.log("保存图片item",n),e.saveImageToPhotosAlbum({filePath:n.path,success:function(n){e.showToast({title:"保存成功",icon:"none"})},fail:function(n){e.showToast({title:"保存失败",icon:"none"})}})}))}}};n.default=t}).call(this,o(2)["default"])},325:function(e,n,o){"use strict";o.r(n);var t=o(326),i=o.n(t);for(var c in t)["default"].indexOf(c)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(c);n["default"]=i.a},326:function(e,n,o){}},[[319,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/pages/upload_img/upload_photo.js.map