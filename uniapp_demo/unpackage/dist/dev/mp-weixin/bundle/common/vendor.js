(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle/common/vendor"],{

/***/ 277:
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

/***/ 405:
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