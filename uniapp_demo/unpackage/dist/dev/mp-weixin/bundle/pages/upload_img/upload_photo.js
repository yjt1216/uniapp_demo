require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/upload_img/upload_photo"],{323:function(e,n,o){"use strict";(function(e,n){var t=o(4);o(29);t(o(25));var i=t(o(324));e.__webpack_require_UNI_MP_PLUGIN__=o,n(i.default)}).call(this,o(1)["default"],o(2)["createPage"])},324:function(e,n,o){"use strict";o.r(n);var t=o(325),i=o(327);for(var s in i)["default"].indexOf(s)<0&&function(e){o.d(n,e,(function(){return i[e]}))}(s);o(329);var c,u=o(52),a=Object(u["default"])(i["default"],t["render"],t["staticRenderFns"],!1,null,"46968198",null,!1,t["components"],c);a.options.__file="bundle/pages/upload_img/upload_photo.vue",n["default"]=a.exports},325:function(e,n,o){"use strict";o.r(n);var t=o(326);o.d(n,"render",(function(){return t["render"]})),o.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(n,"components",(function(){return t["components"]}))},326:function(e,n,o){"use strict";var t;o.r(n),o.d(n,"render",(function(){return i})),o.d(n,"staticRenderFns",(function(){return c})),o.d(n,"recyclableRender",(function(){return s})),o.d(n,"components",(function(){return t}));try{t={uUpload:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-upload/u-upload")]).then(o.bind(null,947))},uPopup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(o.bind(null,957))},uDivider:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-divider/u-divider")]).then(o.bind(null,965))},uniRate:function(){return o.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(o.bind(null,973))},helangCompress:function(){return o.e("components/helang-compress/helang-compress").then(o.bind(null,980))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c},s=!1,c=[];i._withStripped=!0},327:function(e,n,o){"use strict";o.r(n);var t=o(328),i=o.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(s);n["default"]=i.a},328:function(e,n,o){"use strict";(function(e){var t=o(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(o(26)),s=t(o(28)),c=null,u=function(){o.e("components/helang-compress/helang-compress").then(function(){return resolve(o(980))}.bind(null,o)).catch(o.oe)},a={components:{helangCompress:u},data:function(){return{currentIndex:"0",feedbackTypeList:[{code:"0",name:"BUG反馈"},{code:"1",name:"功能建议"},{code:"2",name:"其他问题"}],feedbackValue:"",conLength:0,tempFileList:[],tempFileObject:[],maxChooseImages:5,cooperate:0,fileList1:[]}},onLoad:function(){c=this},watch:{feedbackValue:function(e,n){console.log("计算属性",e),this.conLength=e.length}},methods:{beforeReadImages:function(n){var o=this;return(0,s.default)(i.default.mark((function t(){var s,u,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("u-upload beforeRead event",n),n.file[0].size/1024/1024,s=n.file[0].url.indexOf("."),u=n.file[0].url.substring(s+1),"png"===u||"jpg"===u||"jpeg"===u){t.next=10;break}return console.log("上",o.fileList1.length),o.$u.toast("文件格式不正确, 请上传png/jpg/jpeg图片格式文件"),t.abrupt("return",!1);case 10:a=n.file.map((function(e){return e.url})),c.$refs.helangCompress.compress({src:a,maxSize:800,fileType:"jpg",quality:.75,minSize:640}).then((function(e){console.log("压缩成功res",e);var n=e.map((function(e){return{url:e}}));o.fileList1=n})).catch((function(n){e.hideLoading(),e.showToast({title:"文件大小超出限制",icon:"none"})}));case 12:case"end":return t.stop()}}),t)})))()},afterRead:function(e){return(0,s.default)(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("u-upload afterRead event",e);case 1:case"end":return n.stop()}}),n)})))()},deletePic:function(e){this.fileList1.splice(e.index,1)},clickPreview:function(e){console.log("u-upload clickPreview event",e)},cancelEvaluateFun:function(){this.$refs.popup.close(),console.log(" 评价患者 取消评价")},submitEvaluateFun:function(){this.$refs.popup.close(),console.log(" 评价患者 提交评价")},cooperateChange:function(e){console.log(" 评价患者星",e,this.cooperate)},feedbackTypeHandle:function(e){console.log("[反馈类型]",e),this.currentIndex=e},getFeedbackMessageHandle:function(e){console.log("[反馈内容]",e),this.feedbackValue=e.detail.value},chooseImageHandle:function(){console.log("[上传图片]"),c.tempFileList.length<c.maxChooseImages?e.chooseMedia({count:c.maxChooseImages,mediaType:["image"],sizeType:["original","compressed"],sourceType:["album"],camera:"back",success:function(n){var o=n.tempFiles;o.forEach((function(n,o){c.tempFileList.length<c.maxChooseImages?(console.log("for in ",n),e.compressImage({src:n.tempFilePath,quality:60,success:function(e){console.log("压缩图片compressI",e),c.tempFileList.push({path:e.tempFilePath})}})):console.log("图片数已达到5张")}))}}):e.showToast({title:"最大5张",icon:"none"})},chooseImageHandleH5:function(){console.log("[选择图片]"),c.tempFileList.length<c.maxChooseImages?e.chooseMedia({count:c.maxChooseImages,mediaType:["image"],sizeType:["original","compressed"],sourceType:["album"],camera:"back",success:function(n){var o=n.tempFiles;o.forEach((function(n,o){c.tempFileList.length<c.maxChooseImages?(console.log("for in ",n),c.translate(n.tempFilePath,.5,(function(n){e.getFileInfo({filePath:imgUrl,success:function(e){console.log("压缩后",e.size)}}),c.tempFileList.push({path:n})}))):console.log("图片数已达到5张")}))}}):e.showToast({title:"最大5张",icon:"none"})},deleteImgHandle:function(e){console.log("[删除图片]"),this.tempFileList.splice(e,1),console.log(this.tempFileList)},submitHandle:function(){console.log("[反馈意见]"),console.log(this.tempFileList),this.savaImageFun()},savaImageFun:function(){c.tempFileList.forEach((function(n,o){console.log("保存图片item",n),e.saveImageToPhotosAlbum({filePath:n.path,success:function(n){e.showToast({title:"保存成功",icon:"none"})},fail:function(n){e.showToast({title:"保存失败",icon:"none"})}})}))},chooseCompressImageFun:function(){c.tempFileList.forEach((function(n,o){console.log("保存图片item",n),e.saveImageToPhotosAlbum({filePath:n.path,success:function(n){e.showToast({title:"保存成功",icon:"none"})},fail:function(n){e.showToast({title:"保存失败",icon:"none"})}})}))}}};n.default=a}).call(this,o(2)["default"])},329:function(e,n,o){"use strict";o.r(n);var t=o(330),i=o.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(s);n["default"]=i.a},330:function(e,n,o){}},[[323,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/bundle/pages/upload_img/upload_photo.js.map