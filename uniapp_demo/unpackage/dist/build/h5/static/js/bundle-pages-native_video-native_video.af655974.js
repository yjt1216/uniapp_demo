(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bundle-pages-native_video-native_video"],{"193c":function(n,t,i){"use strict";i.r(t);var e=i("1c33"),a=i.n(e);for(var u in e)["default"].indexOf(u)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(u);t["default"]=a.a},"1c33":function(n,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d401"),i("d3b7"),i("25f0"),i("14d9");var e={data:function(){return{src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:""}},onReady:function(n){this.videoContext=uni.createVideoContext("myVideo")},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(n){uni.showModal({content:n.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var n=[],t=0;t<3;++t){var i=Math.floor(256*Math.random()).toString(16);i=1==i.length?"0"+i:i,n.push(i)}return"#"+n.join("")}}};t.default=e},"7d4d":function(n,t,i){"use strict";i.r(t);var e=i("cab2"),a=i("193c");for(var u in a)["default"].indexOf(u)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(u);var o=i("f0c5"),d=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"5277698e",null,!1,e["a"],void 0);t["default"]=d.exports},cab2:function(n,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",[i("v-uni-video",{attrs:{id:"myVideo",src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4","danmu-list":n.danmuList,"enable-danmu":!0,"danmu-btn":!0,controls:!0},on:{error:function(t){arguments[0]=t=n.$handleEvent(t),n.videoErrorCallback.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-list uni-common-mt"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",[i("v-uni-view",{staticClass:"uni-label"},[n._v("弹幕内容")])],1),i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"在此处输入弹幕内容"},model:{value:n.danmuValue,callback:function(t){n.danmuValue=t},expression:"danmuValue"}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"page-body-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.sendDanmu.apply(void 0,arguments)}}},[n._v("发送弹幕")])],1)],1)],1)},a=[]}}]);