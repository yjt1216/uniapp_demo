(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle/common/vendor"],{

/***/ 300:
/*!*************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/mmmm-image-tools/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToPath = base64ToPath;
exports.pathToBase64 = pathToBase64;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function getLocalFilePath(path) {
  if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
    return path;
  }
  if (path.indexOf('file://') === 0) {
    return path;
  }
  if (path.indexOf('/storage/emulated/0/') === 0) {
    return path;
  }
  if (path.indexOf('/') === 0) {
    var localFilePath = plus.io.convertAbsoluteFileSystem(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substr(1);
    }
  }
  return '_www/' + path;
}
function dataUrlToBase64(str) {
  var array = str.split(',');
  return array[array.length - 1];
}
var index = 0;
function getNewFileId() {
  return Date.now() + String(index++);
}
function biggerThan(v1, v2) {
  var v1Array = v1.split('.');
  var v2Array = v2.split('.');
  var update = false;
  for (var index = 0; index < v2Array.length; index++) {
    var diff = v1Array[index] - v2Array[index];
    if (diff !== 0) {
      update = diff > 0;
      break;
    }
  }
  return update;
}
function pathToBase64(path) {
  return new Promise(function (resolve, reject) {
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement('canvas');
      var c2x = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }
    if ((typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) === 'object') {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function (data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function (error) {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function (error) {
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
      return;
    }
    if ((typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error('not support'));
  });
}
function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' && 'document' in window) {
      base64 = base64.split(',');
      var type = base64[0].match(/:(.*?);/)[1];
      var str = atob(base64[1]);
      var n = str.length;
      var array = new Uint8Array(n);
      while (n--) {
        array[n] = str.charCodeAt(n);
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
        type: type
      })));
    }
    var extName = base64.split(',')[0].match(/data\:\S+\/(\S+);/);
    if (extName) {
      extName = extName[1];
    } else {
      reject(new Error('base64 error'));
    }
    var fileName = getNewFileId() + '.' + extName;
    if ((typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) === 'object') {
      var basePath = '_doc';
      var dirPath = 'uniapp_temp';
      var filePath = basePath + '/' + dirPath + '/' + fileName;
      if (!biggerThan(plus.os.name === 'Android' ? '1.9.9.80627' : '1.9.9.80472', plus.runtime.innerVersion)) {
        plus.io.resolveLocalFileSystemURL(basePath, function (entry) {
          entry.getDirectory(dirPath, {
            create: true,
            exclusive: false
          }, function (entry) {
            entry.getFile(fileName, {
              create: true,
              exclusive: false
            }, function (entry) {
              entry.createWriter(function (writer) {
                writer.onwrite = function () {
                  resolve(filePath);
                };
                writer.onerror = reject;
                writer.seek(0);
                writer.writeAsBinary(dataUrlToBase64(base64));
              }, reject);
            }, reject);
          }, reject);
        }, reject);
        return;
      }
      var bitmap = new plus.nativeObj.Bitmap(fileName);
      bitmap.loadBase64Data(base64, function () {
        bitmap.save(filePath, {}, function () {
          bitmap.clear();
          resolve(filePath);
        }, function (error) {
          bitmap.clear();
          reject(error);
        });
      }, function (error) {
        bitmap.clear();
        reject(error);
      });
      return;
    }
    if ((typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: dataUrlToBase64(base64),
        encoding: 'base64',
        success: function success() {
          resolve(filePath);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error('not support'));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 333:
/*!************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/common/signature.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var Handwriting = /*#__PURE__*/function () {
  // 内置数据

  //划线轨迹 ; 生成线条的实际点

  // 透明度
  // 默认压力
  //顺滑度，用60的距离来计算速度
  // 笔记倍数
  // 最小笔画半径
  // 最大笔画半径

  // 第一次触发
  //画圆的半径

  //裁剪区域

  //笔迹

  function Handwriting(opts) {
    (0, _classCallCheck2.default)(this, Handwriting);
    (0, _defineProperty2.default)(this, "ctx", '');
    (0, _defineProperty2.default)(this, "canvasWidth", 300);
    (0, _defineProperty2.default)(this, "canvasHeight", 900);
    (0, _defineProperty2.default)(this, "linePrack", []);
    (0, _defineProperty2.default)(this, "currentLine", []);
    (0, _defineProperty2.default)(this, "transparent", 1);
    (0, _defineProperty2.default)(this, "pressure", 0.5);
    (0, _defineProperty2.default)(this, "smoothness", 100);
    (0, _defineProperty2.default)(this, "lineSize", 1.5);
    (0, _defineProperty2.default)(this, "lineMin", 0.5);
    (0, _defineProperty2.default)(this, "lineMax", 2);
    (0, _defineProperty2.default)(this, "currentPoint", {});
    (0, _defineProperty2.default)(this, "firstTouch", true);
    (0, _defineProperty2.default)(this, "radius", 1);
    (0, _defineProperty2.default)(this, "cutArea", {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    });
    (0, _defineProperty2.default)(this, "lastPoint", 0);
    (0, _defineProperty2.default)(this, "chirography", []);
    (0, _defineProperty2.default)(this, "startY", 0);
    (0, _defineProperty2.default)(this, "deltaY", 0);
    (0, _defineProperty2.default)(this, "startValue", 0);
    console.log(opts);
    this.lineColor = opts.lineColor || '#1A1A1A'; // 颜色
    this.slideValue = opts.slideValue || 50;
    this.canvasName = opts.canvasName || 'handWriting';
    this.init();
  }
  (0, _createClass2.default)(Handwriting, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.ctx = uni.createCanvasContext(this.canvasName);
      var query = uni.createSelectorQuery().in(this);
      query.select('.handCenter').boundingClientRect(function (rect) {
        console.log('SelectorQuery位置布局信息', rect);
        _this.canvasWidth = rect.width;
        _this.canvasHeight = rect.height;
      }).exec();
      this.selectSlideValue(this.slideValue);
    }

    // 笔迹开始
  }, {
    key: "uploadScaleStart",
    value: function uploadScaleStart(event) {
      console.log('start');
      var e = event.mp;
      console.log(e.touches[0]);
      if (e.type != 'touchstart') return false;
      this.ctx.setFillStyle(this.lineColor); // 初始线条设置颜色
      this.ctx.setGlobalAlpha(this.transparent); // 设置半透明
      this.currentPoint = {
        x: e.touches[0].x,
        y: e.touches[0].y
      };
      this.currentLine.unshift({
        time: new Date().getTime(),
        dis: 0,
        x: this.currentPoint.x,
        y: this.currentPoint.y
      });
      if (this.firstTouch) {
        this.cutArea = {
          top: this.currentPoint.y,
          right: this.currentPoint.x,
          bottom: this.currentPoint.y,
          left: this.currentPoint.x
        };
        this.firstTouch = false;
      }
      this.pointToLine(this.currentLine);
    }
    // 笔迹移动
  }, {
    key: "uploadScaleMove",
    value: function uploadScaleMove(event) {
      console.log('move');
      var e = event.mp;
      if (e.type != 'touchmove') return false;
      if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
          e.preventDefault();
        }
      }
      var point = {
        x: e.touches[0].x,
        y: e.touches[0].y
      };
      //测试裁剪
      if (point.y < this.cutArea.top) {
        this.cutArea.top = point.y;
      }
      if (point.y < 0) this.cutArea.top = 0;
      if (point.x > this.cutArea.right) {
        this.cutArea.right = point.x;
      }
      if (this.canvasWidth - point.x <= 0) {
        this.cutArea.right = this.canvasWidth;
      }
      if (point.y > this.cutArea.bottom) {
        this.cutArea.bottom = point.y;
      }
      if (this.canvasHeight - point.y <= 0) {
        this.cutArea.bottom = this.canvasHeight;
      }
      if (point.x < this.cutArea.left) {
        this.cutArea.left = point.x;
      }
      if (point.x < 0) this.cutArea.left = 0;
      this.lastPoint = this.currentPoint;
      this.currentPoint = point;
      this.currentLine.unshift({
        time: new Date().getTime(),
        dis: this.distance(this.currentPoint, this.lastPoint, 'move'),
        x: point.x,
        y: point.y
      });
      this.pointToLine(this.currentLine);
    }
    // 笔迹结束
  }, {
    key: "uploadScaleEnd",
    value: function uploadScaleEnd(event) {
      var e = event.mp;
      if (e.type != 'touchend') return 0;
      console.log(e);
      var point = {
        x: e.changedTouches[0].x,
        y: e.changedTouches[0].y
      };
      this.lastPoint = this.currentPoint;
      this.currentPoint = point;
      this.currentLine.unshift({
        time: new Date().getTime(),
        dis: this.distance(this.currentPoint, this.lastPoint, 'end'),
        x: point.x,
        y: point.y
      });
      if (this.currentLine.length > 2) {
        var info = (this.currentLine[0].time - this.currentLine[this.currentLine.length - 1].time) / this.currentLine.length;
        //$("#info").text(info.toFixed(2));
      }
      //一笔结束，保存笔迹的坐标点，清空，当前笔迹
      //增加判断是否在手写区域；
      this.pointToLine(this.currentLine);
      var currentChirography = {
        lineSize: this.lineSize,
        lineColor: this.lineColor
      };
      this.chirography.unshift(currentChirography);
      this.linePrack.unshift(this.currentLine);
      this.currentLine = [];
    }
  }, {
    key: "retDraw",
    value: function retDraw() {
      this.ctx.clearRect(0, 0, 700, 730);
      this.ctx.draw();
    }

    //画两点之间的线条；参数为:line，会绘制最近的开始的两个点；
  }, {
    key: "pointToLine",
    value: function pointToLine(line) {
      this.calcBethelLine(line);
      // this.calcBethelLine1(line);
      return;
    }
    //计算插值的方式；
  }, {
    key: "calcBethelLine",
    value: function calcBethelLine(line) {
      if (line.length <= 1) {
        line[0].r = this.radius;
        return;
      }
      var x0,
        x1,
        x2,
        y0,
        y1,
        y2,
        r0,
        r1,
        r2,
        len,
        lastRadius,
        dis = 0,
        time = 0,
        curveValue = 0.5;
      if (line.length <= 2) {
        x0 = line[1].x;
        y0 = line[1].y;
        x2 = line[1].x + (line[0].x - line[1].x) * curveValue;
        y2 = line[1].y + (line[0].y - line[1].y) * curveValue;
        //x2 = line[1].x;
        //y2 = line[1].y;
        x1 = x0 + (x2 - x0) * curveValue;
        y1 = y0 + (y2 - y0) * curveValue;
        ;
      } else {
        x0 = line[2].x + (line[1].x - line[2].x) * curveValue;
        y0 = line[2].y + (line[1].y - line[2].y) * curveValue;
        x1 = line[1].x;
        y1 = line[1].y;
        x2 = x1 + (line[0].x - x1) * curveValue;
        y2 = y1 + (line[0].y - y1) * curveValue;
      }
      //从计算公式看，三个点分别是(x0,y0),(x1,y1),(x2,y2) ；(x1,y1)这个是控制点，控制点不会落在曲线上；实际上，这个点还会手写获取的实际点，却落在曲线上
      len = this.distance({
        x: x2,
        y: y2
      }, {
        x: x0,
        y: y0
      }, 'calc');
      lastRadius = this.radius;
      for (var _n = 0; _n < line.length - 1; _n++) {
        dis += line[_n].dis;
        time += line[_n].time - line[_n + 1].time;
        if (dis > this.smoothness) break;
      }
      this.radius = Math.min(time / len * this.pressure + this.lineMin, this.lineMax) * this.lineSize;
      line[0].r = this.radius;
      //计算笔迹半径；
      if (line.length <= 2) {
        r0 = (lastRadius + this.radius) / 2;
        r1 = r0;
        r2 = r1;
        //return;
      } else {
        r0 = (line[2].r + line[1].r) / 2;
        r1 = line[1].r;
        r2 = (line[1].r + line[0].r) / 2;
      }
      var n = 5;
      var point = [];
      for (var i = 0; i < n; i++) {
        var t = i / (n - 1);
        var x = (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * x1 + t * t * x2;
        var y = (1 - t) * (1 - t) * y0 + 2 * t * (1 - t) * y1 + t * t * y2;
        var r = lastRadius + (this.radius - lastRadius) / n * i;
        point.push({
          x: x,
          y: y,
          r: r
        });
        if (point.length == 3) {
          var a = this.ctaCalc(point[0].x, point[0].y, point[0].r, point[1].x, point[1].y, point[1].r, point[2].x, point[2].y, point[2].r);
          a[0].color = this.lineColor;
          this.bethelDraw(a, 1);
          point = [{
            x: x,
            y: y,
            r: r
          }];
        }
      }
    }
    //求两点之间距离
  }, {
    key: "distance",
    value: function distance(a, b, type) {
      var x = b.x - a.x;
      var y = b.y - a.y;
      return Math.sqrt(x * x + y * y) * 5;
    }
  }, {
    key: "ctaCalc",
    value: function ctaCalc(x0, y0, r0, x1, y1, r1, x2, y2, r2) {
      var a = [],
        vx01,
        vy01,
        norm,
        n_x0,
        n_y0,
        vx21,
        vy21,
        n_x2,
        n_y2;
      vx01 = x1 - x0;
      vy01 = y1 - y0;
      norm = Math.sqrt(vx01 * vx01 + vy01 * vy01 + 0.0001) * 2;
      vx01 = vx01 / norm * r0;
      vy01 = vy01 / norm * r0;
      n_x0 = vy01;
      n_y0 = -vx01;
      vx21 = x1 - x2;
      vy21 = y1 - y2;
      norm = Math.sqrt(vx21 * vx21 + vy21 * vy21 + 0.0001) * 2;
      vx21 = vx21 / norm * r2;
      vy21 = vy21 / norm * r2;
      n_x2 = -vy21;
      n_y2 = vx21;
      a.push({
        mx: x0 + n_x0,
        my: y0 + n_y0,
        color: "#1A1A1A"
      });
      a.push({
        c1x: x1 + n_x0,
        c1y: y1 + n_y0,
        c2x: x1 + n_x2,
        c2y: y1 + n_y2,
        ex: x2 + n_x2,
        ey: y2 + n_y2
      });
      a.push({
        c1x: x2 + n_x2 - vx21,
        c1y: y2 + n_y2 - vy21,
        c2x: x2 - n_x2 - vx21,
        c2y: y2 - n_y2 - vy21,
        ex: x2 - n_x2,
        ey: y2 - n_y2
      });
      a.push({
        c1x: x1 - n_x2,
        c1y: y1 - n_y2,
        c2x: x1 - n_x0,
        c2y: y1 - n_y0,
        ex: x0 - n_x0,
        ey: y0 - n_y0
      });
      a.push({
        c1x: x0 - n_x0 - vx01,
        c1y: y0 - n_y0 - vy01,
        c2x: x0 + n_x0 - vx01,
        c2y: y0 + n_y0 - vy01,
        ex: x0 + n_x0,
        ey: y0 + n_y0
      });
      a[0].mx = a[0].mx.toFixed(1);
      a[0].mx = parseFloat(a[0].mx);
      a[0].my = a[0].my.toFixed(1);
      a[0].my = parseFloat(a[0].my);
      for (var i = 1; i < a.length; i++) {
        a[i].c1x = a[i].c1x.toFixed(1);
        a[i].c1x = parseFloat(a[i].c1x);
        a[i].c1y = a[i].c1y.toFixed(1);
        a[i].c1y = parseFloat(a[i].c1y);
        a[i].c2x = a[i].c2x.toFixed(1);
        a[i].c2x = parseFloat(a[i].c2x);
        a[i].c2y = a[i].c2y.toFixed(1);
        a[i].c2y = parseFloat(a[i].c2y);
        a[i].ex = a[i].ex.toFixed(1);
        a[i].ex = parseFloat(a[i].ex);
        a[i].ey = a[i].ey.toFixed(1);
        a[i].ey = parseFloat(a[i].ey);
      }
      return a;
    }
  }, {
    key: "bethelDraw",
    value: function bethelDraw(point, is_fill, color) {
      this.ctx.beginPath();
      this.ctx.moveTo(point[0].mx, point[0].my);
      if (undefined != color) {
        this.ctx.setFillStyle(color);
        this.ctx.setStrokeStyle(color);
      } else {
        this.ctx.setFillStyle(point[0].color);
        this.ctx.setStrokeStyle(point[0].color);
      }
      for (var i = 1; i < point.length; i++) {
        this.ctx.bezierCurveTo(point[i].c1x, point[i].c1y, point[i].c2x, point[i].c2y, point[i].ex, point[i].ey);
      }
      this.ctx.stroke();
      if (undefined != is_fill) {
        this.ctx.fill(); //填充图形 ( 后绘制的图形会覆盖前面的图形, 绘制时注意先后顺序 )
      }

      this.ctx.draw(true);
    }
  }, {
    key: "selectColorEvent",
    value: function selectColorEvent(lineColor) {
      this.lineColor = lineColor;
    }
  }, {
    key: "selectSlideValue",
    value: function selectSlideValue(slideValue) {
      switch (slideValue) {
        case 0:
          this.lineSize = 0.1;
          this.lineMin = 0.1;
          this.lineMax = 0.1;
          break;
        case 25:
          this.lineSize = 1;
          this.lineMin = 0.5;
          this.lineMax = 2;
          break;
        case 50:
          this.lineSize = 1.5;
          this.lineMin = 1;
          this.lineMax = 3;
          break;
        case 75:
          this.lineSize = 1.5;
          this.lineMin = 2;
          this.lineMax = 3.5;
          break;
        case 100:
          this.lineSize = 3;
          this.lineMin = 2;
          this.lineMax = 3.5;
          break;
      }
    }
  }, {
    key: "saveCanvas",
    value: function saveCanvas() {
      var _this2 = this;
      return new Promise(function (resolve, rej) {
        uni.canvasToTempFilePath({
          canvasId: _this2.canvasName,
          success: function success(res) {
            console.log(res.tempFilePath);
            resolve(res.tempFilePath);
          },
          fail: function fail(err) {
            console.log('图片生成失败：' + err);
            rej(err);
          }
        });
      });
    }
  }]);
  return Handwriting;
}();
var _default = Handwriting;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 358:
/*!**********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/bundle/static/icon_delete.png ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 367:
/*!************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/utils/dp_request.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/luch-request/luch-request/index.js */ 172));
var BASE_API = 'https://api.depin.tech/api/';
var http = new _index.default({
  baseURL: BASE_API,
  //设置请求的base url
  timeout: 300000,
  //超时时长5分钟,
  header: {
    'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
  }
});
//请求拦截器
http.interceptors.request.use(function (config) {
  // 可使用async await 做异步操作
  var token = uni.getStorageSync('token');
  if (token) {
    config.header = {
      "Authorization": 'Bearer ' + token
    };
  }
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data);
  }
  return config;
}, function (error) {
  return Promise.resolve(error);
});

// 响应拦截器
http.interceptors.response.use(function (response) {
  console.log(response);
  return response;
}, function (error) {
  //未登录时清空缓存跳转
  if (error.statusCode == 401) {
    uni.clearStorageSync();
    uni.switchTab({
      url: "/pages/index/index.vue"
    });
  }
  return Promise.resolve(error);
});
var _default = http;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 492:
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * mescroll-more-item的mixins, 仅在多个 mescroll-body 写在子组件时使用 (参考 mescroll-more 案例)
 */
var MescrollMoreItemMixin = {
  // 支付宝小程序不支持props的mixin,需写在具体的页面中

  props: {
    i: Number,
    // 每个tab页的专属下标
    index: {
      // 当前tab的下标
      type: Number,
      default: function _default() {
        return 0;
      }
    }
  },
  data: function data() {
    return {
      downOption: {
        auto: false // 不自动加载
      },

      upOption: {
        auto: false // 不自动加载
      },

      isInit: false // 当前tab是否已初始化
    };
  },

  watch: {
    // 监听下标的变化
    index: function index(val) {
      if (this.i === val && !this.isInit) this.mescrollTrigger();
    }
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象 (覆盖mescroll-mixins.js的mescrollInit, 为了标记isInit)
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
      // 自动加载当前tab的数据
      if (this.i === this.index) {
        this.mescrollTrigger();
      }
    },
    // 主动触发加载
    mescrollTrigger: function mescrollTrigger() {
      this.isInit = true; // 标记为true
      if (this.mescroll) {
        if (this.mescroll.optDown.use) {
          this.mescroll.triggerDownScroll();
        } else {
          this.mescroll.triggerUpScroll();
        }
      }
    }
  }
};
var _default2 = MescrollMoreItemMixin;
exports.default = _default2;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/bundle/common/vendor.js.map