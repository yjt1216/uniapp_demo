(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/common/vendor"],{"02cb":function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("970b")),s=n(i("5bc3")),a=n(i("9523")),o=function(){function t(e){(0,r.default)(this,t),(0,a.default)(this,"ctx",""),(0,a.default)(this,"canvasWidth",300),(0,a.default)(this,"canvasHeight",900),(0,a.default)(this,"linePrack",[]),(0,a.default)(this,"currentLine",[]),(0,a.default)(this,"transparent",1),(0,a.default)(this,"pressure",.5),(0,a.default)(this,"smoothness",100),(0,a.default)(this,"lineSize",1.5),(0,a.default)(this,"lineMin",.5),(0,a.default)(this,"lineMax",2),(0,a.default)(this,"currentPoint",{}),(0,a.default)(this,"firstTouch",!0),(0,a.default)(this,"radius",1),(0,a.default)(this,"cutArea",{top:0,right:0,bottom:0,left:0}),(0,a.default)(this,"lastPoint",0),(0,a.default)(this,"chirography",[]),(0,a.default)(this,"startY",0),(0,a.default)(this,"deltaY",0),(0,a.default)(this,"startValue",0),console.log(e),this.lineColor=e.lineColor||"#1A1A1A",this.slideValue=e.slideValue||50,this.canvasName=e.canvasName||"handWriting",this.init()}return(0,s.default)(t,[{key:"init",value:function(){var t=this;this.ctx=e.createCanvasContext(this.canvasName);var i=e.createSelectorQuery().in(this);i.select(".handCenter").boundingClientRect((function(e){console.log("SelectorQuery位置布局信息",e),t.canvasWidth=e.width,t.canvasHeight=e.height})).exec(),this.selectSlideValue(this.slideValue)}},{key:"uploadScaleStart",value:function(e){console.log("start");var t=e.mp;if(console.log(t.touches[0]),"touchstart"!=t.type)return!1;this.ctx.setFillStyle(this.lineColor),this.ctx.setGlobalAlpha(this.transparent),this.currentPoint={x:t.touches[0].x,y:t.touches[0].y},this.currentLine.unshift({time:(new Date).getTime(),dis:0,x:this.currentPoint.x,y:this.currentPoint.y}),this.firstTouch&&(this.cutArea={top:this.currentPoint.y,right:this.currentPoint.x,bottom:this.currentPoint.y,left:this.currentPoint.x},this.firstTouch=!1),this.pointToLine(this.currentLine)}},{key:"uploadScaleMove",value:function(e){console.log("move");var t=e.mp;if("touchmove"!=t.type)return!1;t.cancelable&&(t.defaultPrevented||t.preventDefault());var i={x:t.touches[0].x,y:t.touches[0].y};i.y<this.cutArea.top&&(this.cutArea.top=i.y),i.y<0&&(this.cutArea.top=0),i.x>this.cutArea.right&&(this.cutArea.right=i.x),this.canvasWidth-i.x<=0&&(this.cutArea.right=this.canvasWidth),i.y>this.cutArea.bottom&&(this.cutArea.bottom=i.y),this.canvasHeight-i.y<=0&&(this.cutArea.bottom=this.canvasHeight),i.x<this.cutArea.left&&(this.cutArea.left=i.x),i.x<0&&(this.cutArea.left=0),this.lastPoint=this.currentPoint,this.currentPoint=i,this.currentLine.unshift({time:(new Date).getTime(),dis:this.distance(this.currentPoint,this.lastPoint,"move"),x:i.x,y:i.y}),this.pointToLine(this.currentLine)}},{key:"uploadScaleEnd",value:function(e){var t=e.mp;if("touchend"!=t.type)return 0;console.log(t);var i={x:t.changedTouches[0].x,y:t.changedTouches[0].y};if(this.lastPoint=this.currentPoint,this.currentPoint=i,this.currentLine.unshift({time:(new Date).getTime(),dis:this.distance(this.currentPoint,this.lastPoint,"end"),x:i.x,y:i.y}),this.currentLine.length>2)this.currentLine[0].time,this.currentLine[this.currentLine.length-1].time,this.currentLine.length;this.pointToLine(this.currentLine);var n={lineSize:this.lineSize,lineColor:this.lineColor};this.chirography.unshift(n),this.linePrack.unshift(this.currentLine),this.currentLine=[]}},{key:"retDraw",value:function(){this.ctx.clearRect(0,0,700,730),this.ctx.draw()}},{key:"pointToLine",value:function(e){this.calcBethelLine(e)}},{key:"calcBethelLine",value:function(e){if(e.length<=1)e[0].r=this.radius;else{var t,i,n,r,s,a,o,c,l,u,h=0,d=0;e.length<=2?(t=e[1].x,r=e[1].y,n=e[1].x+.5*(e[0].x-e[1].x),a=e[1].y+.5*(e[0].y-e[1].y),i=t+.5*(n-t),s=r+.5*(a-r)):(t=e[2].x+.5*(e[1].x-e[2].x),r=e[2].y+.5*(e[1].y-e[2].y),i=e[1].x,s=e[1].y,n=i+.5*(e[0].x-i),a=s+.5*(e[0].y-s)),l=this.distance({x:n,y:a},{x:t,y:r},"calc"),u=this.radius;for(var f=0;f<e.length-1;f++)if(h+=e[f].dis,d+=e[f].time-e[f+1].time,h>this.smoothness)break;this.radius=Math.min(d/l*this.pressure+this.lineMin,this.lineMax)*this.lineSize,e[0].r=this.radius,e.length<=2?(o=(u+this.radius)/2,c=o,c):(o=(e[2].r+e[1].r)/2,c=e[1].r,(e[1].r+e[0].r)/2);for(var y=[],p=0;p<5;p++){var x=p/4,v=(1-x)*(1-x)*t+2*x*(1-x)*i+x*x*n,g=(1-x)*(1-x)*r+2*x*(1-x)*s+x*x*a,m=u+(this.radius-u)/5*p;if(y.push({x:v,y:g,r:m}),3==y.length){var A=this.ctaCalc(y[0].x,y[0].y,y[0].r,y[1].x,y[1].y,y[1].r,y[2].x,y[2].y,y[2].r);A[0].color=this.lineColor,this.bethelDraw(A,1),y=[{x:v,y:g,r:m}]}}}}},{key:"distance",value:function(e,t,i){var n=t.x-e.x,r=t.y-e.y;return 5*Math.sqrt(n*n+r*r)}},{key:"ctaCalc",value:function(e,t,i,n,r,s,a,o,c){var l,u,h,d,f,y,p,x,v,g=[];l=n-e,u=r-t,h=2*Math.sqrt(l*l+u*u+1e-4),l=l/h*i,u=u/h*i,d=u,f=-l,y=n-a,p=r-o,h=2*Math.sqrt(y*y+p*p+1e-4),y=y/h*c,p=p/h*c,x=-p,v=y,g.push({mx:e+d,my:t+f,color:"#1A1A1A"}),g.push({c1x:n+d,c1y:r+f,c2x:n+x,c2y:r+v,ex:a+x,ey:o+v}),g.push({c1x:a+x-y,c1y:o+v-p,c2x:a-x-y,c2y:o-v-p,ex:a-x,ey:o-v}),g.push({c1x:n-x,c1y:r-v,c2x:n-d,c2y:r-f,ex:e-d,ey:t-f}),g.push({c1x:e-d-l,c1y:t-f-u,c2x:e+d-l,c2y:t+f-u,ex:e+d,ey:t+f}),g[0].mx=g[0].mx.toFixed(1),g[0].mx=parseFloat(g[0].mx),g[0].my=g[0].my.toFixed(1),g[0].my=parseFloat(g[0].my);for(var m=1;m<g.length;m++)g[m].c1x=g[m].c1x.toFixed(1),g[m].c1x=parseFloat(g[m].c1x),g[m].c1y=g[m].c1y.toFixed(1),g[m].c1y=parseFloat(g[m].c1y),g[m].c2x=g[m].c2x.toFixed(1),g[m].c2x=parseFloat(g[m].c2x),g[m].c2y=g[m].c2y.toFixed(1),g[m].c2y=parseFloat(g[m].c2y),g[m].ex=g[m].ex.toFixed(1),g[m].ex=parseFloat(g[m].ex),g[m].ey=g[m].ey.toFixed(1),g[m].ey=parseFloat(g[m].ey);return g}},{key:"bethelDraw",value:function(e,t,i){this.ctx.beginPath(),this.ctx.moveTo(e[0].mx,e[0].my),void 0!=i?(this.ctx.setFillStyle(i),this.ctx.setStrokeStyle(i)):(this.ctx.setFillStyle(e[0].color),this.ctx.setStrokeStyle(e[0].color));for(var n=1;n<e.length;n++)this.ctx.bezierCurveTo(e[n].c1x,e[n].c1y,e[n].c2x,e[n].c2y,e[n].ex,e[n].ey);this.ctx.stroke(),void 0!=t&&this.ctx.fill(),this.ctx.draw(!0)}},{key:"selectColorEvent",value:function(e){this.lineColor=e}},{key:"selectSlideValue",value:function(e){switch(e){case 0:this.lineSize=.1,this.lineMin=.1,this.lineMax=.1;break;case 25:this.lineSize=1,this.lineMin=.5,this.lineMax=2;break;case 50:this.lineSize=1.5,this.lineMin=1,this.lineMax=3;break;case 75:this.lineSize=1.5,this.lineMin=2,this.lineMax=3.5;break;case 100:this.lineSize=3,this.lineMin=2,this.lineMax=3.5;break}}},{key:"saveCanvas",value:function(){var t=this;return new Promise((function(i,n){e.canvasToTempFilePath({canvasId:t.canvasName,success:function(e){console.log(e.tempFilePath),i(e.tempFilePath)},fail:function(e){console.log("图片生成失败："+e),n(e)}})}))}}]),t}(),c=o;t.default=c}).call(this,i("543d")["default"])},"52bc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{i:Number,index:{type:Number,default:function(){return 0}}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1},isInit:!1}},watch:{index:function(e){this.i!==e||this.isInit||this.mescrollTrigger()}},methods:{mescrollInit:function(e){this.mescroll=e,this.i===this.index&&this.mescrollTrigger()},mescrollTrigger:function(){this.isInit=!0,this.mescroll&&(this.mescroll.optDown.use?this.mescroll.triggerDownScroll():this.mescroll.triggerUpScroll())}}},r=n;t.default=r},"74a3":function(e,t){e.exports="data:image/png;base64,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"},"826d":function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("6685")),s=new r.default({baseURL:"https://api.depin.tech/api/",timeout:3e5,header:{"Content-Type":"multipart/form-data;application/json;charset=UTF-8;"}});s.interceptors.request.use((function(t){var i=e.getStorageSync("token");return i&&(t.header={Authorization:"Bearer "+i}),"POST"===t.method&&(t.data=JSON.stringify(t.data)),t}),(function(e){return Promise.resolve(e)})),s.interceptors.response.use((function(e){return console.log(e),e}),(function(t){return 401==t.statusCode&&(e.clearStorageSync(),e.switchTab({url:"/pages/index/index.vue"})),Promise.resolve(t)}));var a=s;t.default=a}).call(this,i("543d")["default"])},ea09:function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.base64ToPath=function(t){return new Promise((function(i,n){if("object"===("undefined"===typeof window?"undefined":(0,r.default)(window))&&"document"in window){t=t.split(",");var o=t[0].match(/:(.*?);/)[1],c=atob(t[1]),l=c.length,u=new Uint8Array(l);while(l--)u[l]=c.charCodeAt(l);return i((window.URL||window.webkitURL).createObjectURL(new Blob([u],{type:o})))}var h=t.split(",")[0].match(/data\:\S+\/(\S+);/);h?h=h[1]:n(new Error("base64 error"));var d=function(){return Date.now()+String(a++)}()+"."+h;if("object"!==("undefined"===typeof plus?"undefined":(0,r.default)(plus)))if("object"===("undefined"===typeof e?"undefined":(0,r.default)(e))&&e.canIUse("getFileSystemManager")){f=e.env.USER_DATA_PATH+"/"+d;e.getFileSystemManager().writeFile({filePath:f,data:s(t),encoding:"base64",success:function(){i(f)},fail:function(e){n(e)}})}else n(new Error("not support"));else{var f="_doc/uniapp_temp/"+d;if(!function(e,t){for(var i=e.split("."),n=t.split("."),r=!1,s=0;s<n.length;s++){var a=i[s]-n[s];if(0!==a){r=a>0;break}}return r}("Android"===plus.os.name?"1.9.9.80627":"1.9.9.80472",plus.runtime.innerVersion))return void plus.io.resolveLocalFileSystemURL("_doc",(function(e){e.getDirectory("uniapp_temp",{create:!0,exclusive:!1},(function(e){e.getFile(d,{create:!0,exclusive:!1},(function(e){e.createWriter((function(e){e.onwrite=function(){i(f)},e.onerror=n,e.seek(0),e.writeAsBinary(s(t))}),n)}),n)}),n)}),n);var y=new plus.nativeObj.Bitmap(d);y.loadBase64Data(t,(function(){y.save(f,{},(function(){y.clear(),i(f)}),(function(e){y.clear(),n(e)}))}),(function(e){y.clear(),n(e)}))}}))},t.pathToBase64=function(t){return new Promise((function(i,n){if("object"===("undefined"===typeof window?"undefined":(0,r.default)(window))&&"document"in window){if("function"===typeof FileReader){var s=new XMLHttpRequest;return s.open("GET",t,!0),s.responseType="blob",s.onload=function(){if(200===this.status){var e=new FileReader;e.onload=function(e){i(e.target.result)},e.onerror=n,e.readAsDataURL(this.response)}},s.onerror=n,void s.send()}var a=document.createElement("canvas"),o=a.getContext("2d"),c=new Image;return c.onload=function(){a.width=c.width,a.height=c.height,o.drawImage(c,0,0),i(a.toDataURL()),a.height=a.width=0},c.onerror=n,void(c.src=t)}"object"!==("undefined"===typeof plus?"undefined":(0,r.default)(plus))?"object"===("undefined"===typeof e?"undefined":(0,r.default)(e))&&e.canIUse("getFileSystemManager")?e.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(e){i("data:image/png;base64,"+e.data)},fail:function(e){n(e)}}):n(new Error("not support")):plus.io.resolveLocalFileSystemURL(function(e){if(0===e.indexOf("_www")||0===e.indexOf("_doc")||0===e.indexOf("_documents")||0===e.indexOf("_downloads"))return e;if(0===e.indexOf("file://"))return e;if(0===e.indexOf("/storage/emulated/0/"))return e;if(0===e.indexOf("/")){var t=plus.io.convertAbsoluteFileSystem(e);if(t!==e)return t;e=e.substr(1)}return"_www/"+e}(t),(function(e){e.file((function(e){var t=new plus.io.FileReader;t.onload=function(e){i(e.target.result)},t.onerror=function(e){n(e)},t.readAsDataURL(e)}),(function(e){n(e)}))}),(function(e){n(e)}))}))};var r=n(i("7037"));function s(e){var t=e.split(",");return t[t.length-1]}var a=0}).call(this,i("bc2e")["default"])}}]);