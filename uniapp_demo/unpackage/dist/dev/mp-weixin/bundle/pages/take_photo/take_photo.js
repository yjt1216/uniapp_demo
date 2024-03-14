require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/take_photo/take_photo"],{359:function(e,o,t){"use strict";(function(e,o){var n=t(4);t(29);n(t(25));var s=n(t(360));e.__webpack_require_UNI_MP_PLUGIN__=t,o(s.default)}).call(this,t(1)["default"],t(2)["createPage"])},360:function(e,o,t){"use strict";t.r(o);var n=t(361),s=t(363);for(var h in s)["default"].indexOf(h)<0&&function(e){t.d(o,e,(function(){return s[e]}))}(h);t(365);var c,i=t(57),a=Object(i["default"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"ac57a0b6",null,!1,n["components"],c);a.options.__file="bundle/pages/take_photo/take_photo.vue",o["default"]=a.exports},361:function(e,o,t){"use strict";t.r(o);var n=t(362);t.d(o,"render",(function(){return n["render"]})),t.d(o,"staticRenderFns",(function(){return n["staticRenderFns"]})),t.d(o,"recyclableRender",(function(){return n["recyclableRender"]})),t.d(o,"components",(function(){return n["components"]}))},362:function(e,o,t){"use strict";var n;t.r(o),t.d(o,"render",(function(){return s})),t.d(o,"staticRenderFns",(function(){return c})),t.d(o,"recyclableRender",(function(){return h})),t.d(o,"components",(function(){return n}));var s=function(){var e=this,o=e.$createElement,t=(e._self._c,e.maxSelect>e.choosePhotoes.length||-1==e.maxSelect);e.$mp.data=Object.assign({},{$root:{g0:t}})},h=!1,c=[];s._withStripped=!0},363:function(e,o,t){"use strict";t.r(o);var n=t(364),s=t.n(n);for(var h in n)["default"].indexOf(h)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(h);o["default"]=s.a},364:function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={data:function(){return{choosePhotoes:[""],maxCount:4}},mounted:function(){"image"==this.type&&this.$set(this,"choosePhotoes",this.choosePhotoes.splice(1,1)),this.$emit("changePhotoes",this.choosePhotoes)},methods:{addImage:function(){var o=this;this.choosePhotoes.length>=this.maxCount?e.showToast({title:"最多上传四张图片",icon:"none",complete:function(e){o.$emit("changePhotoes",o.choosePhotoes)}}):e.chooseImage({count:4,success:function(e){for(var t=[],n=0;n<o.choosePhotoes.length;n++)t.push(o.choosePhotoes[n]);if(o.maxSelect>0)for(n=0;n<Math.min(o.maxSelect-o.choosePhotoes.length,e.tempFilePaths.length);n++)t.push(e.tempFilePaths[n]);else for(n=0;n<e.tempFilePaths.length;n++)t.push(e.tempFilePaths[n]);o.$set(o,"choosePhotoes",t),o.$emit("changePhotoes",o.choosePhotoes)},fail:function(e){console.log("选取图片err",e),o.$emit("changePhotoes",o.choosePhotoes)}})},imageMenu:function(o){var t=this;e.showActionSheet({itemList:["向前移动","向后移动","替换图片","删除图片"],success:function(n){if(console.log(n.tapIndex),0==n.tapIndex)if(o>0){var s=t.choosePhotoes,h=s[o];s[o]=s[o-1],s[o-1]=h;for(var c=[],i=0;i<s.length;i++)c.push(s[i]);t.$set(t,"choosePhotoes",c),t.$emit("changePhotoes",t.choosePhotoes)}else e.showToast({title:"无可替换",icon:"none",complete:function(e){t.$emit("changePhotoes",t.choosePhotoes)}});else if(1==n.tapIndex)if(o<t.choosePhotoes.length-1){s=t.choosePhotoes,h=s[o];s[o]=s[o+1],s[o+1]=h;for(c=[],i=0;i<s.length;i++)c.push(s[i]);t.$set(t,"choosePhotoes",c),t.$emit("changePhotoes",t.choosePhotoes)}else e.showToast({title:"无可替换",icon:"none",complete:function(e){t.$emit("changePhotoes",t.choosePhotoes)}});else 2==n.tapIndex?e.chooseImage({count:4,success:function(e){for(var n=t.choosePhotoes,s=[],h=0;h<n.length;h++)o!=h?s.push(n[h]):s.push(e.tempFilePaths[0]);t.$set(t,"choosePhotoes",s),t.$emit("changePhotoes",t.choosePhotoes)},fail:function(e){t.$emit("changePhotoes",t.choosePhotoes)}}):3==n.tapIndex&&e.showModal({title:"消息",content:"您确认删除该图片吗？",success:function(e){if(e.confirm){for(var n=t.choosePhotoes,s=[],h=0;h<n.length;h++)o!=h&&s.push(n[h]);t.$set(t,"choosePhotoes",s),t.$emit("changePhotoes",t.choosePhotoes)}else t.$emit("changePhotoes",t.choosePhotoes)},fail:function(e){t.$emit("changePhotoes",t.choosePhotoes)}})}})},viewImage:function(o){e.previewImage({urls:this.choosePhotoes,current:o})},removeImage:function(){e.showModal({title:"消息",content:"您确认删除该图片吗？",success:function(e){if(e.confirm){for(var o=that.choosePhotoes,t=[],n=0;n<o.length;n++)i!=n&&t.push(o[n]);that.$set(that,"choosePhotoes",t),that.$emit("changePhotoes",that.choosePhotoes)}else that.$emit("changePhotoes",that.choosePhotoes)},fail:function(e){that.$emit("changePhotoes",that.choosePhotoes)}})}},props:{type:{type:String,default:"image"},maxSelect:{type:Number,default:-1}}};o.default=t}).call(this,t(2)["default"])},365:function(e,o,t){"use strict";t.r(o);var n=t(366),s=t.n(n);for(var h in n)["default"].indexOf(h)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(h);o["default"]=s.a},366:function(e,o,t){}},[[359,"common/runtime","common/vendor"]]]);