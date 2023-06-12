(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 117:
/*!************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// mescroll-body 和 mescroll-uni 通用
var MescrollMixin = {
  data: function data() {
    return {
      mescroll: null //mescroll实例对象
    };
  },
  // 注册系统自带的下拉刷新 (配置down.native为true时生效, 还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  onPullDownRefresh: function onPullDownRefresh() {
    this.mescroll && this.mescroll.onPullDownRefresh();
  },
  // 注册列表滚动事件,用于判定在顶部可下拉刷新,在指定位置可显示隐藏回到顶部按钮 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onPageScroll: function onPageScroll(e) {
    this.mescroll && this.mescroll.onPageScroll(e);
  },
  // 注册滚动到底部的事件,用于上拉加载 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onReachBottom: function onReachBottom() {
    this.mescroll && this.mescroll.onReachBottom();
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 下拉刷新的回调 (mixin默认resetUpScroll)
    downCallback: function downCallback() {
      var _this = this;
      if (this.mescroll.optUp.use) {
        this.mescroll.resetUpScroll();
      } else {
        setTimeout(function () {
          _this.mescroll.endSuccess();
        }, 500);
      }
    },
    // 上拉加载的回调
    upCallback: function upCallback() {
      var _this2 = this;
      // mixin默认延时500自动结束加载
      setTimeout(function () {
        _this2.mescroll.endErr();
      }, 500);
    }
  }
};
var _default = MescrollMixin;
exports.default = _default;

/***/ }),

/***/ 118:
/*!****************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/api/mock.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiAssessFromData = apiAssessFromData;
exports.apiGetTabs = apiGetTabs;
exports.apiGoods = apiGoods;
exports.apiMsgList = apiMsgList;
exports.apiNewList = apiNewList;
exports.apiOrders = apiOrders;
exports.apiWeiboList = apiWeiboList;
var _goods = _interopRequireDefault(__webpack_require__(/*! ./goods.js */ 119));
var _orders = _interopRequireDefault(__webpack_require__(/*! ./orders.js */ 120));
var _assess_form = _interopRequireDefault(__webpack_require__(/*! ./assess_form.js */ 121));
/*
本地模拟接口请求, 仅demo演示用.
实际项目以您服务器接口返回的数据为准,无需本地处理分页.
请参考官方写法: https://www.mescroll.com/uni.html?v=20200210#tagUpCallback
* */

// 模拟数据

// 获取新闻列表
function apiNewList(pageNum, pageSize) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var list = [];
        if (!pageNum) {
          //模拟下拉刷新返回的数据
          var id = new Date().getTime();
          var newObj = {
            id: id,
            title: "【新增新闻" + id + "】 标题",
            content: "新增新闻的内容"
          };
          list.push(newObj);
        } else {
          //模拟上拉加载返回的数据
          for (var i = 0; i < pageSize; i++) {
            var upIndex = (pageNum - 1) * pageSize + i + 1;
            var _newObj = {
              id: upIndex,
              title: "【新闻" + upIndex + "】 标题标题标题标题标题",
              content: "内容内容内容内容内容内容内容内容内容"
            };
            list.push(_newObj);
          }
          console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
        }
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

// 搜索商品
function apiGoods(pageNum, pageSize, keyword) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var data = {
          list: [],
          // 数据列表
          totalCount: 0,
          // 总数量
          totalPage: 0,
          // 总页数
          hasNext: false // 是否有下一页
        };

        // 符合关键词的记录
        var keywordList = [];
        if (!keyword || keyword == "全部") {
          // 搜索全部商品
          keywordList = _goods.default;
        } else {
          // 关键词搜索
          if (keyword == "母婴") keyword = "婴"; // 为这个关键词展示多几条数据
          for (var i = 0; i < _goods.default.length; i++) {
            var good = _goods.default[i];
            if (good.goodName.indexOf(keyword) !== -1) {
              keywordList.push(good);
            }
          }
        }

        // 分页
        for (var _i = (pageNum - 1) * pageSize; _i < pageNum * pageSize; _i++) {
          if (_i >= keywordList.length) break;
          data.list.push(keywordList[_i]);
        }

        // 汇总数据
        data.totalCount = keywordList.length;
        data.totalPage = Math.ceil(data.totalCount / pageSize);
        data.hasNext = pageNum < data.totalPage;

        //模拟接口请求成功
        console.log("pageNum=" + pageNum + ", pageSize=" + pageSize + ", data.list.length=" + data.list.length + ", totalCount=" + data.totalCount + ", totalPage=" + data.totalPage + ", hasNext=" + data.hasNext + (keyword ? ", keyword=" + keyword : ""));
        resolute(data);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

// 获取微博列表
function apiWeiboList(pageNum, pageSize) {
  return new Promise(function (resolute, reject) {
    //延时2秒,模拟联网
    setTimeout(function () {
      try {
        var list = [];
        if (!pageNum) {
          //此处模拟下拉刷新返回的数据
          var id = new Date().getTime();
          var newObj = {
            id: id,
            title: "【新增微博" + id + "】 新增微博",
            content: "新增微博的内容,新增微博的内容"
          };
          list.push(newObj);
        } else {
          //此处模拟上拉加载返回的数据
          for (var i = 0; i < pageSize; i++) {
            var upIndex = (pageNum - 1) * pageSize + i + 1;
            var _newObj2 = {
              id: upIndex,
              title: "【微博" + upIndex + "】 标题标题标题标题标题标题",
              content: "内容内容内容内容内容内容内容内容内容内容"
            };
            list.push(_newObj2);
          }
          console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
        }
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 2000);
  });
}

// 获取消息列表(共5页消息)
function apiMsgList(pageNum, pageSize) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var list = [];
        //模拟下拉加载更多记录
        for (var i = 0; i < pageSize; i++) {
          var msgId = (pageNum - 1) * pageSize + i + 1;
          var newObj = {
            id: msgId,
            title: "【消息" + msgId + "】",
            content: "内容: 下拉获取聊天记录"
          };
          // 此处模拟只有5页的消息 (第5页只有3条)
          if (pageNum >= 5 && i >= 3) {} else {
            list.unshift(newObj);
          }
        }
        console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

// 获取tabs类目
function apiGetTabs() {
  return new Promise(function (resolute, reject) {
    //延时,模拟联网
    setTimeout(function () {
      try {
        var tabs = ['全部', '奶粉', '面膜', '图书', '果汁', '奶瓶', '美素', '花王', '韩蜜', '口红', '毛巾', '玩具', '衣服'];
        //模拟接口请求成功
        resolute(tabs);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 10);
  });
}

/* 订单list */
function apiOrders(pageNum, pageSize, keyword) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var data = {
          list: [],
          // 数据列表
          totalCount: 0,
          // 总数量
          totalPage: 0,
          // 总页数
          hasNext: false // 是否有下一页
        };

        // 符合关键词的记录
        var keywordList = [];
        for (var i = 0; i < _orders.default.length; i++) {
          var order = _orders.default[i];
          if (order.type == keyword) {
            keywordList.push(order);
          }
        }

        // 分页
        for (var _i2 = (pageNum - 1) * pageSize; _i2 < pageNum * pageSize; _i2++) {
          if (_i2 >= keywordList.length) break;
          data.list.push(keywordList[_i2]);
        }

        // 汇总数据
        data.totalCount = keywordList.length;
        data.totalPage = Math.ceil(data.totalCount / pageSize);
        data.hasNext = pageNum < data.totalPage;

        //模拟接口请求成功
        console.log("pageNum=" + pageNum + ", pageSize=" + pageSize + ", data.list.length=" + data.list.length + ", totalCount=" + data.totalCount + ", totalPage=" + data.totalPage + ", hasNext=" + data.hasNext + (keyword ? ", keyword=" + keyword : ""));
        resolute(data);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

/* 评估表单数据 */
function apiAssessFromData() {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var data = _assess_form.default;
        resolute(data);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

/***/ }),

/***/ 119:
/*!*****************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/api/goods.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var goods = [{
  "id": "1",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd1.jpg",
  "goodName": "【1】  六罐装荷兰美素佳儿金装2段900g",
  "goodPrice": 1149.00,
  "goodSold": 648
}, {
  "id": "2",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd2.jpg",
  "goodName": "【2】  韩国Amore爱茉莉红吕洗发水套装修复受损发质",
  "goodPrice": 89.00,
  "goodSold": 128
}, {
  "id": "3",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd3.jpg",
  "goodName": "【3】  Friso美素佳儿 金装婴儿配方奶粉3段900g",
  "goodPrice": 195.00,
  "goodSold": 968
}, {
  "id": "4",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd4.jpg",
  "goodName": "【4】  Fisher goodPrice费雪 费雪三轮儿童滑行车",
  "goodPrice": 299.00,
  "goodSold": 85
}, {
  "id": "5",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd5.jpg",
  "goodName": "【5】  Babylee巴布力 实木婴儿床 雷卡拉130*70cm",
  "goodPrice": 1889.00,
  "goodSold": 18
}, {
  "id": "6",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd6.jpg",
  "goodName": "【6】  Pigeon贝亲 独立三层奶粉盒 送小罐奶粉1段200g",
  "goodPrice": 70.00,
  "goodSold": 658
}, {
  "id": "7",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd7.jpg",
  "goodName": "【7】 TTBOO兔兔小布 肩纽扣套装",
  "goodPrice": 268.00,
  "goodSold": 128
}, {
  "id": "8",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd8.jpg",
  "goodName": "【8】  Nuna璐拉 婴儿布里奇果精纯嫩肤沐浴露婴儿精纯芦荟胶",
  "goodPrice": 140.00,
  "goodSold": 366
}, {
  "id": "9",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd9.jpg",
  "goodName": "【9】  illuma启赋 奶粉3段900g",
  "goodPrice": 252.00,
  "goodSold": 98
}, {
  "id": "10",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd10.jpg",
  "goodName": "【10】  Abbott雅培乳蛋白部分水解婴儿配方奶粉3段820g",
  "goodPrice": 89.00,
  "goodSold": 128
}, {
  "id": "11",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd11.jpg",
  "goodName": "【11】  韩蜜 酷炫唇蜜（礼盒套装）2.8g*4",
  "goodPrice": 179.00,
  "goodSold": 35
}, {
  "id": "12",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd12.jpg",
  "goodName": "【12】  保税区直发【3包装】日本Merries花王纸尿裤NB90",
  "goodPrice": 289.00,
  "goodSold": 1928
}, {
  "id": "13",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd13.jpg",
  "goodName": "【13】  Comotomo可么多么 硅胶奶瓶（0-3月奶嘴）150ml绿色",
  "goodPrice": 203.00,
  "goodSold": 87
}, {
  "id": "14",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd14.jpg",
  "goodName": "【14】  香港直邮德国瑞德露Rival de Loop芦荟精华安瓶",
  "goodPrice": 152.00,
  "goodSold": 61
}, {
  "id": "15",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd15.jpg",
  "goodName": "【15】  保税区直发药师堂尊马油香草味温和保湿无刺激面霜",
  "goodPrice": 269.00,
  "goodSold": 73
}, {
  "id": "16",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd16.jpg",
  "goodName": "【16】  香港直邮日本Spatreatment眼膜保湿去细纹法令纹",
  "goodPrice": 219.00,
  "goodSold": 13
}, {
  "id": "17",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd17.jpg",
  "goodName": "【17】  韩国MEDIHEALNMF可莱丝针剂睡眠面膜",
  "goodPrice": 81.00,
  "goodSold": 128
}, {
  "id": "18",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd18.jpg",
  "goodName": "【18】  DHC蝶翠诗橄榄蜂蜜滋养洗脸手工皂90g",
  "goodPrice": 123.00,
  "goodSold": 77
}, {
  "id": "19",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd19.jpg",
  "goodName": "【19】  日本资生堂CPB肌肤之钥新版隔离霜 清爽型 30ml",
  "goodPrice": 429.00,
  "goodSold": 36
}, {
  "id": "20",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd20.jpg",
  "goodName": "【20】 Heinz亨氏 婴儿面条优加面条全素套餐组合3口味3盒",
  "goodPrice": 39.00,
  "goodSold": 61
}, {
  "id": "21",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd21.jpg",
  "goodName": "【21】  Heinz亨氏 乐维滋果汁泥组合5口味15袋",
  "goodPrice": 69.00,
  "goodSold": 55
}, {
  "id": "22",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd22.jpg",
  "goodName": "【22】  保税区直发澳大利亚Swisse高浓度蔓越莓胶囊30粒",
  "goodPrice": 271.00,
  "goodSold": 19
}, {
  "id": "23",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd23.jpg",
  "goodName": "【23】  挪威Nordic Naturals小鱼婴幼儿鱼油DHA滴剂",
  "goodPrice": 102.00,
  "goodSold": 125
}, {
  "id": "24",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd24.jpg",
  "goodName": "【24】  澳大利亚Bio island DHA for Pregnancy海藻油DHA",
  "goodPrice": 289.00,
  "goodSold": 28
}, {
  "id": "25",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd25.jpg",
  "goodName": "【25】  澳大利亚Fatblaster Coconut Detox椰子水",
  "goodPrice": 152.00,
  "goodSold": 17
}, {
  "id": "26",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd26.jpg",
  "goodName": "【26】  Suitsky舒比奇 高护极薄舒爽纸尿片尿不湿XL60",
  "goodPrice": 99.00,
  "goodSold": 181
}, {
  "id": "27",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd27.jpg",
  "goodName": "【27】  英国JUST SOAP手工皂 玫瑰天竺葵蛋糕皂",
  "goodPrice": 72.00,
  "goodSold": 66
}, {
  "id": "28",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd28.jpg",
  "goodName": "【28】  德国NUK 多色婴幼儿带盖学饮杯",
  "goodPrice": 92.00,
  "goodSold": 138
}];
var _default = goods;
exports.default = _default;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 120:
/*!******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/api/orders.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var orders = [{
  "order_id": "1",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 1男
  "person_sex": 1,
  "garbage_record": null
}, {
  "order_id": "2",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张倩",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "3",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "王菲茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "4",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张芳",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "5",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张丽",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "6",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张雪",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "7",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张丹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "8",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "赵丹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "9",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "10",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "11",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "12",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "13",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 13:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "14",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李京跃",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "15",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": "等记录答放过",
  "person_sex": 1
}, {
  "order_id": "16",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待评估',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "17",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待评估',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "18",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "19",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 4,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 0
}, {
  "order_id": "20",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "21",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 1
}, {
  "order_id": "22",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 3,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 0
}, {
  "order_id": "23",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 5,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  "person_sex": 0
}, {
  "order_id": "24",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '已完成',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-23 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 1
}, {
  "order_id": "25",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '待执行',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 1
}, {
  "order_id": "26",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张茹",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": "待评估",
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 0
}, {
  "order_id": "27",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "张静如",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": "已完成",
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 1
}, {
  "order_id": "28",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "程逸飞",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": "已完成",
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 0
}, {
  "order_id": "29",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "程逸飞",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": "已完成",
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 1
}, {
  "order_id": "30",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "程逸飞",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 0
}, {
  "order_id": "31",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "程逸飞",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 1
}, {
  "order_id": "32",
  "item_name": "个人标本采集",
  "intro": "根据个人需求采集血液标本，进行血常规检测",
  "person_name": "程逸飞",
  "area_name": "江苏省苏州市吴中区",
  "address": "邻里中心三期A栋105",
  "type": '执行中',
  "person_mobile": "15370068170",
  // 照料人
  "caregiver_name": "李涛",
  "caregiver_mobile": "18862233952",
  "care_level": 1,
  // 服务时间
  "plan_at": "2020-08-22 17:10",
  // 医废登记
  "garbage_record": null,
  // 1男
  "person_sex": 0
}];
var _default = orders;
exports.default = _default;

/***/ }),

/***/ 121:
/*!***********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/api/assess_form.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* 评估表单内容 */
var assessFormData = {
  "success": 1,
  "msg": "成功",
  "code": 0,
  "data": {
    "title": "通用护理评估表单",
    "version": 17,
    "questions": [{
      "qid": "1611797524333",
      "title": "体温(℃)3",
      "qTypeId": "q_text",
      "timestamp": "1611797524333",
      "options": [{
        "title": "体温(℃)3",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "1",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797577265",
      "title": "脉搏(次/分)",
      "qTypeId": "q_text",
      "timestamp": "1611797577265",
      "options": [{
        "title": "脉搏(次/分)",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "2",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797616728",
      "title": "呼吸(次/分)",
      "qTypeId": "q_text",
      "timestamp": "1611797616728",
      "options": [{
        "title": "呼吸(次/分)",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "3",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797702625",
      "title": "血压(mmHg)",
      "qTypeId": "q_text",
      "timestamp": "1611797702625",
      "options": [{
        "title": "血压(mmHg)",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "4",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797707290",
      "title": "体重(KG)",
      "qTypeId": "q_text",
      "timestamp": "1611797707290",
      "options": [{
        "title": "体重(KG)",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "5",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797712307",
      "title": "身高(cm)",
      "qTypeId": "q_text",
      "timestamp": "1611797712307",
      "options": [{
        "title": "身高(cm)",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "6",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797723340",
      "title": "病史",
      "qTypeId": "q_text",
      "timestamp": "1611797723340",
      "options": [{
        "title": "病史",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "7",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797747672",
      "title": "意识",
      "qTypeId": "q_radio",
      "timestamp": "1611797747672",
      "options": [{
        "title": "清楚",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "欠清",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "模糊",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "嗜睡",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "烦躁",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "昏迷",
        "no": "6",
        "action": "",
        "data": ""
      }],
      "no": "8",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797818218",
      "title": "记忆力",
      "qTypeId": "q_radio",
      "timestamp": "1611797818218",
      "options": [{
        "title": "良好",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "减退",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "9",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797816736",
      "title": "理解能力",
      "qTypeId": "q_radio",
      "timestamp": "1611797816736",
      "options": [{
        "title": "完全理解",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "欠缺",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "部分理解",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "无法理解",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "5",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "10",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797814985",
      "title": "表达能力",
      "qTypeId": "q_radio",
      "timestamp": "1611797814985",
      "options": [{
        "title": "清晰表达",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "欠清",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "含糊表达",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "不能表达",
        "no": "4",
        "action": "",
        "data": ""
      }],
      "no": "11",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797754605",
      "title": "视力",
      "qTypeId": "q_radio",
      "timestamp": "1611797754605",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "近视",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "远视",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "老花",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "失明",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "6",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "12",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797813719",
      "title": "睡眠",
      "qTypeId": "q_radio",
      "timestamp": "1611797813719",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "入睡困难",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "易醒",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "多梦",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "失眠",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "药物副猪睡眠",
        "no": "6",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "7",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "13",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797812518",
      "title": "喝酒",
      "qTypeId": "q_radio",
      "timestamp": "1611797812518",
      "options": [{
        "title": "无",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "有",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "14",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797811169",
      "title": "吸烟",
      "qTypeId": "q_radio",
      "timestamp": "1611797811169",
      "options": [{
        "title": "无",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "有",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "15",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797772304",
      "title": "饮食习惯",
      "qTypeId": "q_radio",
      "timestamp": "1611797772304",
      "options": [{
        "title": "合理",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "高蛋白",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "高脂肪",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "高碳水化合物",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "素食",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "偏食",
        "no": "6",
        "action": "",
        "data": ""
      }, {
        "title": "忌食",
        "no": "7",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "8",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "16",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797809186",
      "title": "咀嚼困难",
      "qTypeId": "q_radio",
      "timestamp": "1611797809186",
      "options": [{
        "title": "无",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "有",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "17",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797832668",
      "title": "吞咽困难",
      "qTypeId": "q_radio",
      "timestamp": "1611797832668",
      "options": [{
        "title": "无",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "有",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "18",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797828602",
      "title": "大便",
      "qTypeId": "q_radio",
      "timestamp": "1611797828602",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "便秘",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "腹泻",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "失禁",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "5",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "19",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797777770",
      "title": "小便",
      "qTypeId": "q_radio",
      "timestamp": "1611797777770",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "色",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "尿路中断",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "尿频",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "尿急",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "尿痛",
        "no": "6",
        "action": "",
        "data": ""
      }, {
        "title": "留置导尿",
        "no": "7",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "8",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "20",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797806603",
      "title": "食欲",
      "qTypeId": "q_radio",
      "timestamp": "1611797806603",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "亢进",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "下降",
        "no": "3",
        "action": "",
        "data": ""
      }],
      "no": "21",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797826718",
      "title": "自主能力",
      "qTypeId": "q_radio",
      "timestamp": "1611797826718",
      "options": [{
        "title": "完全自理",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "大部分自理",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "小部分自理",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "完全不能自理",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "5",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "22",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797827701",
      "title": "活动能力",
      "qTypeId": "q_radio",
      "timestamp": "1611797827701",
      "options": [{
        "title": "自主活动",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "轮椅",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "卧床自行翻身",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "辅助翻身",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "床椅辅助转移",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "床椅自行转移",
        "no": "6",
        "action": "",
        "data": ""
      }, {
        "title": "室内活动",
        "no": "7",
        "action": "",
        "data": ""
      }, {
        "title": "室外活动",
        "no": "8",
        "action": "",
        "data": ""
      }],
      "no": "23",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797829518",
      "title": "肌力左上",
      "qTypeId": "q_radio",
      "timestamp": "1611797829518",
      "options": [{
        "title": "V级",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "IV级",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "III级",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "II级",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "I级",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "0级",
        "no": "6",
        "action": "",
        "data": ""
      }],
      "no": "24",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797830285",
      "title": "肌力左下",
      "qTypeId": "q_radio",
      "timestamp": "1611797830285",
      "options": [{
        "title": "V级",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "IV级",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "III级",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "II级",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "I级",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "0级",
        "no": "6",
        "action": "",
        "data": ""
      }],
      "no": "25",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797831086",
      "title": "肌力右上",
      "qTypeId": "q_radio",
      "timestamp": "1611797831086",
      "options": [{
        "title": "V级",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "IV级",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "III级",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "II级",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "I级",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "0级",
        "no": "6",
        "action": "",
        "data": ""
      }],
      "no": "26",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797831851",
      "title": "肌力右下",
      "qTypeId": "q_radio",
      "timestamp": "1611797831851",
      "options": [{
        "title": "V级",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "IV级",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "III级",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "II级",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "I级",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "0级",
        "no": "6",
        "action": "",
        "data": ""
      }],
      "no": "27",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797833434",
      "title": "全身营养状况",
      "qTypeId": "q_radio",
      "timestamp": "1611797833434",
      "options": [{
        "title": "良好",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "中等",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "不良",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "肥胖",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "消瘦",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "6",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "28",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797834351",
      "title": "皮肤黏膜",
      "qTypeId": "q_radio",
      "timestamp": "1611797834351",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "黄染",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "发绀",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "水肿",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "潮红",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "苍白",
        "no": "6",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "7",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "29",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797835134",
      "title": "口腔",
      "qTypeId": "q_radio",
      "timestamp": "1611797835134",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "溃疡",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "假膜",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "4",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "30",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797835901",
      "title": "牙龈",
      "qTypeId": "q_radio",
      "timestamp": "1611797835901",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "红肿",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "出血",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "溃疡",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "5",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "31",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797836667",
      "title": "牙齿",
      "qTypeId": "q_radio",
      "timestamp": "1611797836667",
      "options": [{
        "title": "正常",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "义齿",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "缺齿",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "4",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "32",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797849568",
      "title": "压疮",
      "qTypeId": "q_text",
      "timestamp": "1611797849568",
      "options": [{
        "title": "压疮",
        "no": "1",
        "action": "",
        "data": ""
      }],
      "no": "33",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797851201",
      "title": "导管情况",
      "qTypeId": "q_radio",
      "timestamp": "1611797851201",
      "options": [{
        "title": "无",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "鼻导管",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "胃管",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "导尿管",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "5",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "34",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797852084",
      "title": "造口情况",
      "qTypeId": "q_radio",
      "timestamp": "1611797852084",
      "options": [{
        "title": "无",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "红肿",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "出血",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "溃烂",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "膨出",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "6",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "35",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1615958275652",
      "title": "近期（7天内）是否在服用抗凝药物？",
      "qTypeId": "q_radio",
      "timestamp": "1615958275652",
      "options": [{
        "title": "是",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "否",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "36",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "",
      "title": "心理状态",
      "qTypeId": "q_radio",
      "timestamp": "1611797852817",
      "options": [{
        "title": "镇静",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "易激动",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "焦虑",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "恐惧",
        "no": "4",
        "action": "",
        "data": ""
      }, {
        "title": "沮丧",
        "no": "5",
        "action": "",
        "data": ""
      }, {
        "title": "无反应",
        "no": "6",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "7",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "37",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797854501",
      "title": "社交能力",
      "qTypeId": "q_radio",
      "timestamp": "1611797854501",
      "options": [{
        "title": "愿意与人交往",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "不愿与人交往",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "3",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "38",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "1611797859133",
      "title": "家属关心",
      "qTypeId": "q_radio",
      "timestamp": "1611797859133",
      "options": [{
        "title": "关心",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "一般",
        "no": "2",
        "action": "",
        "data": ""
      }, {
        "title": "冷漠",
        "no": "3",
        "action": "",
        "data": ""
      }, {
        "title": "其他",
        "no": "4",
        "action": "",
        "data": "",
        "textbox": 1
      }],
      "no": "39",
      "required": true,
      "data": "",
      "action": ""
    }, {
      "qid": "0",
      "title": "本次服务项目所需的耗材是否齐全（缺少耗材需要在下面勾选出来，单独购买或由平台提供，费用自理）",
      "qTypeId": "q_check",
      "timestamp": "0",
      "options": [{
        "title": "创可贴",
        "no": "1",
        "action": "",
        "data": ""
      }, {
        "title": "导尿管",
        "no": "2",
        "action": "",
        "data": ""
      }],
      "no": "40",
      "required": false,
      "data": "",
      "action": ""
    }],
    "id": 19
  }
};
var _default = assessFormData;
exports.default = _default;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 162:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/common/qqmap-wx-jssdk.min.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx) {var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var URL_DIRECTION = BASE_URL + 'direction/v1/';
var MODE = {
  driving: 'driving',
  transit: 'transit'
};
var EARTH_RADIUS = 6378136.49;
var Utils = {
  safeAdd: function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  },
  bitRotateLeft: function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  },
  md5cmn: function md5cmn(q, a, b, x, s, t) {
    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
  },
  md5ff: function md5ff(a, b, c, d, x, s, t) {
    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
  },
  md5gg: function md5gg(a, b, c, d, x, s, t) {
    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
  },
  md5hh: function md5hh(a, b, c, d, x, s, t) {
    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5ii: function md5ii(a, b, c, d, x, s, t) {
    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
  },
  binlMD5: function binlMD5(x, len) {
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safeAdd(a, olda);
      b = this.safeAdd(b, oldb);
      c = this.safeAdd(c, oldc);
      d = this.safeAdd(d, oldd);
    }
    return [a, b, c, d];
  },
  binl2rstr: function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }
    return output;
  },
  rstr2binl: function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  },
  rstrMD5: function rstrMD5(s) {
    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
  },
  rstrHMACMD5: function rstrHMACMD5(key, data) {
    var i;
    var bkey = this.rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = this.binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
  },
  rstr2hex: function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  },
  str2rstrUTF8: function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  },
  rawMD5: function rawMD5(s) {
    return this.rstrMD5(this.str2rstrUTF8(s));
  },
  hexMD5: function hexMD5(s) {
    return this.rstr2hex(this.rawMD5(s));
  },
  rawHMACMD5: function rawHMACMD5(k, d) {
    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
  },
  hexHMACMD5: function hexHMACMD5(k, d) {
    return this.rstr2hex(this.rawHMACMD5(k, d));
  },
  md5: function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hexMD5(string);
      }
      return this.rawMD5(string);
    }
    if (!raw) {
      return this.hexHMACMD5(key, string);
    }
    return this.rawHMACMD5(key, string);
  },
  getSig: function getSig(requestParam, sk, feature, mode) {
    var sig = null;
    var requestArr = [];
    Object.keys(requestParam).sort().forEach(function (key) {
      requestArr.push(key + '=' + requestParam[key]);
    });
    if (feature == 'search') {
      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
    }
    if (feature == 'suggest') {
      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
    }
    if (feature == 'reverseGeocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'geocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'getCityList') {
      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
    }
    if (feature == 'getDistrictByCityId') {
      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
    }
    if (feature == 'calculateDistance') {
      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'direction') {
      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
    }
    sig = this.md5(sig);
    return sig;
  },
  location2query: function location2query(data) {
    if (typeof data == 'string') {
      return data;
    }
    var query = '';
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (!!query) {
        query += ';';
      }
      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }
      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }
    return query;
  },
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },
  getEndLocation: function getEndLocation(location) {
    var to = location.split(';');
    var endLocation = [];
    for (var i = 0; i < to.length; i++) {
      endLocation.push({
        lat: parseFloat(to[i].split(',')[0]),
        lng: parseFloat(to[i].split(',')[1])
      });
    }
    return endLocation;
  },
  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {
    var radLatFrom = this.rad(latFrom);
    var radLatTo = this.rad(latTo);
    var a = radLatFrom - radLatTo;
    var b = this.rad(lngFrom) - this.rad(lngTo);
    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
    distance = distance * EARTH_RADIUS;
    distance = Math.round(distance * 10000) / 10000;
    return parseFloat(distance.toFixed(0));
  },
  getWXLocation: function getWXLocation(success, fail, complete) {
    wx.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },
  getLocationParam: function getLocationParam(location) {
    if (typeof location == 'string') {
      var locationArr = location.split(',');
      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }
    return location;
  },
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};
    param.fail = param.fail || function () {};
    param.complete = param.complete || function () {};
  },
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }
    return false;
  },
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);
    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }
    return true;
  },
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },
  handleData: function handleData(param, data, feature) {
    if (feature == 'search') {
      var searchResult = data.data;
      var searchSimplify = [];
      for (var i = 0; i < searchResult.length; i++) {
        searchSimplify.push({
          id: searchResult[i].id || null,
          title: searchResult[i].title || null,
          latitude: searchResult[i].location && searchResult[i].location.lat || null,
          longitude: searchResult[i].location && searchResult[i].location.lng || null,
          address: searchResult[i].address || null,
          category: searchResult[i].category || null,
          tel: searchResult[i].tel || null,
          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
        });
      }
      param.success(data, {
        searchResult: searchResult,
        searchSimplify: searchSimplify
      });
    } else if (feature == 'suggest') {
      var suggestResult = data.data;
      var suggestSimplify = [];
      for (var i = 0; i < suggestResult.length; i++) {
        suggestSimplify.push({
          adcode: suggestResult[i].adcode || null,
          address: suggestResult[i].address || null,
          category: suggestResult[i].category || null,
          city: suggestResult[i].city || null,
          district: suggestResult[i].district || null,
          id: suggestResult[i].id || null,
          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
          province: suggestResult[i].province || null,
          title: suggestResult[i].title || null,
          type: suggestResult[i].type || null
        });
      }
      param.success(data, {
        suggestResult: suggestResult,
        suggestSimplify: suggestSimplify
      });
    } else if (feature == 'reverseGeocoder') {
      var reverseGeocoderResult = data.result;
      var reverseGeocoderSimplify = {
        address: reverseGeocoderResult.address || null,
        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
      };
      if (reverseGeocoderResult.pois) {
        var pois = reverseGeocoderResult.pois;
        var poisSimplify = [];
        for (var i = 0; i < pois.length; i++) {
          poisSimplify.push({
            id: pois[i].id || null,
            title: pois[i].title || null,
            latitude: pois[i].location && pois[i].location.lat || null,
            longitude: pois[i].location && pois[i].location.lng || null,
            address: pois[i].address || null,
            category: pois[i].category || null,
            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
            city: pois[i].ad_info && pois[i].ad_info.city || null,
            district: pois[i].ad_info && pois[i].ad_info.district || null,
            province: pois[i].ad_info && pois[i].ad_info.province || null
          });
        }
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify,
          pois: pois,
          poisSimplify: poisSimplify
        });
      } else {
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify
        });
      }
    } else if (feature == 'geocoder') {
      var geocoderResult = data.result;
      var geocoderSimplify = {
        title: geocoderResult.title || null,
        latitude: geocoderResult.location && geocoderResult.location.lat || null,
        longitude: geocoderResult.location && geocoderResult.location.lng || null,
        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
        province: geocoderResult.address_components && geocoderResult.address_components.province || null,
        city: geocoderResult.address_components && geocoderResult.address_components.city || null,
        district: geocoderResult.address_components && geocoderResult.address_components.district || null,
        street: geocoderResult.address_components && geocoderResult.address_components.street || null,
        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
        level: geocoderResult.level || null
      };
      param.success(data, {
        geocoderResult: geocoderResult,
        geocoderSimplify: geocoderSimplify
      });
    } else if (feature == 'getCityList') {
      var provinceResult = data.result[0];
      var cityResult = data.result[1];
      var districtResult = data.result[2];
      param.success(data, {
        provinceResult: provinceResult,
        cityResult: cityResult,
        districtResult: districtResult
      });
    } else if (feature == 'getDistrictByCityId') {
      var districtByCity = data.result[0];
      param.success(data, districtByCity);
    } else if (feature == 'calculateDistance') {
      var calculateDistanceResult = data.result.elements;
      var distance = [];
      for (var i = 0; i < calculateDistanceResult.length; i++) {
        distance.push(calculateDistanceResult[i].distance);
      }
      param.success(data, {
        calculateDistanceResult: calculateDistanceResult,
        distance: distance
      });
    } else if (feature == 'direction') {
      var direction = data.result.routes;
      param.success(data, direction);
    } else {
      param.success(data);
    }
  },
  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {
    var that = this;
    options.header = {
      "content-type": "application/json"
    };
    options.method = 'GET';
    options.success = function (res) {
      var data = res.data;
      if (data.status === 0) {
        that.handleData(param, data, feature);
      } else {
        param.fail(data);
      }
    };
    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    options.complete = function (res) {
      var statusCode = +res.statusCode;
      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }
        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;
            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }
            break;
          }
        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };
    return options;
  },
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;
    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };
    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};
var QQMapWX = /*#__PURE__*/function () {
  "use strict";

  function QQMapWX(options) {
    _classCallCheck(this, QQMapWX);
    if (!options.key) {
      throw Error('key值不能为空');
    }
    this.key = options.key;
  }
  _createClass(QQMapWX, [{
    key: "search",
    value: function search(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (!Utils.checkKeyword(options)) {
        return;
      }
      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };
      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }
      if (options.filter) {
        requestParam.filter = options.filter;
      }
      var distance = options.distance || "1000";
      var auto_extend = options.auto_extend || 1;
      var region = null;
      var rectangle = null;
      if (options.region) {
        region = options.region;
      }
      if (options.rectangle) {
        rectangle = options.rectangle;
      }
      var locationsuccess = function locationsuccess(result) {
        if (region && !rectangle) {
          requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else if (rectangle && !region) {
          requestParam.boundary = "rectangle(" + rectangle + ")";
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else {
          requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }, 'search'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "getSuggestion",
    value: function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (!Utils.checkKeyword(options)) {
        return;
      }
      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        get_subpois: options.get_subpois || 0,
        output: 'json',
        key: that.key
      };
      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }
      if (options.filter) {
        requestParam.filter = options.filter;
      }
      if (options.location) {
        var locationsuccess = function locationsuccess(result) {
          requestParam.location = result.latitude + ',' + result.longitude;
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
          }
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, "suggest"));
        };
        Utils.locationProcess(options, locationsuccess);
      } else {
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SUGGESTION,
          data: requestParam
        }, "suggest"));
      }
    }
  }, {
    key: "reverseGeocoder",
    value: function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };
      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }
      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }, 'reverseGeocoder'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "geocoder",
    value: function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }
      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      };
      if (options.region) {
        requestParam.region = options.region;
      }
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }, 'geocoder'));
    }
  }, {
    key: "getCityList",
    value: function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }, 'getCityList'));
    }
  }, {
    key: "getDistrictByCityId",
    value: function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }
      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }, 'getDistrictByCityId'));
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }
      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };
      if (options.from) {
        options.location = options.from;
      }
      if (requestParam.mode == 'straight') {
        var locationsuccess = function locationsuccess(result) {
          var locationTo = Utils.getEndLocation(requestParam.to);
          var data = {
            message: "query ok",
            result: {
              elements: []
            },
            status: 0
          };
          for (var i = 0; i < locationTo.length; i++) {
            data.result.elements.push({
              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
              duration: 0,
              from: {
                lat: result.latitude,
                lng: result.longitude
              },
              to: {
                lat: locationTo[i].lat,
                lng: locationTo[i].lng
              }
            });
          }
          var calculateResult = data.result.elements;
          var distanceResult = [];
          for (var i = 0; i < calculateResult.length; i++) {
            distanceResult.push(calculateResult[i].distance);
          }
          return options.success(data, {
            calculateResult: calculateResult,
            distanceResult: distanceResult
          });
        };
        Utils.locationProcess(options, locationsuccess);
      } else {
        var locationsuccess = function locationsuccess(result) {
          requestParam.from = result.latitude + ',' + result.longitude;
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
          }
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_DISTANCE,
            data: requestParam
          }, 'calculateDistance'));
        };
        Utils.locationProcess(options, locationsuccess);
      }
    }
  }, {
    key: "direction",
    value: function direction(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }
      var requestParam = {
        output: 'json',
        key: that.key
      };
      if (typeof options.to == 'string') {
        requestParam.to = options.to;
      } else {
        requestParam.to = options.to.latitude + ',' + options.to.longitude;
      }
      var SET_URL_DIRECTION = null;
      options.mode = options.mode || MODE.driving;
      SET_URL_DIRECTION = URL_DIRECTION + options.mode;
      if (options.from) {
        options.location = options.from;
      }
      if (options.mode == MODE.driving) {
        if (options.from_poi) {
          requestParam.from_poi = options.from_poi;
        }
        if (options.heading) {
          requestParam.heading = options.heading;
        }
        if (options.speed) {
          requestParam.speed = options.speed;
        }
        if (options.accuracy) {
          requestParam.accuracy = options.accuracy;
        }
        if (options.road_type) {
          requestParam.road_type = options.road_type;
        }
        if (options.to_poi) {
          requestParam.to_poi = options.to_poi;
        }
        if (options.from_track) {
          requestParam.from_track = options.from_track;
        }
        if (options.waypoints) {
          requestParam.waypoints = options.waypoints;
        }
        if (options.policy) {
          requestParam.policy = options.policy;
        }
        if (options.plate_number) {
          requestParam.plate_number = options.plate_number;
        }
      }
      if (options.mode == MODE.transit) {
        if (options.departure_time) {
          requestParam.departure_time = options.departure_time;
        }
        if (options.policy) {
          requestParam.policy = options.policy;
        }
      }
      var locationsuccess = function locationsuccess(result) {
        requestParam.from = result.latitude + ',' + result.longitude;
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: SET_URL_DIRECTION,
          data: requestParam
        }, 'direction'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }]);
  return QQMapWX;
}();
;
module.exports = QQMapWX;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__10D4FDE",
    appName: "uniapp_demo",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.8.4",
    uniRuntimeVersion: "3.8.4",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__10D4FDE",
      appName: "uniapp_demo",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapp_demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
var eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapp_demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapp_demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapp_demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapp_demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!***************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages.json ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 33:
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 34));
var _modules = _interopRequireDefault(__webpack_require__(/*! ./modules */ 35));
var _getters = _interopRequireDefault(__webpack_require__(/*! ./getters */ 39));
_vue.default.use(_vuex.default);
var debug = "development" !== "production";
var _default = new _vuex.default.Store({
  modules: _modules.default,
  getters: _getters.default,
  strict: debug
});
exports.default = _default;

/***/ }),

/***/ 34:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 35:
/*!***************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/modules/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _app = _interopRequireDefault(__webpack_require__(/*! ./app.js */ 36));
var _default = {
  app: _app.default
};
exports.default = _default;

/***/ }),

/***/ 353:
/*!********************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages.json?{"type":"origin-pages-json"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/text_auto/text_auto",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/message/message",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/user/user",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/server_explan/server_explan",
    "style": {
      "navigationBarTitleText": "服务协议"
    }
  }, {
    "path": "pages/login/login",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/register/register",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/location/location",
    "style": {
      "navigationBarTitleText": "QQ地图定位"
    }
  }],
  "subPackages": [{
    "root": "bundle",
    "pages": [{
      "path": "pages/user_intro/user_intro",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/mescroll_swiper/mescroll_swiper",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/nurse_order/nurse_order",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/service_order/service_order",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/form_page/form_page",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/upload_img/upload_img",
      "style": {
        "navigationBarTitleText": "上传证件"
      }
    }, {
      "path": "pages/list_input/list_input",
      "style": {
        "navigationBarTitleText": "多个input"
      }
    }, {
      "path": "pages/appraise_form/appraise_form",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTitleText": "评估表单"
      }
    }, {
      "path": "pages/header_footer/header_footer",
      "style": {
        "navigationBarTitleText": "header footer"
      }
    }, {
      "path": "pages/take_photo/take_photo",
      "style": {
        "navigationBarTitleText": "拍照"
      }
    }, {
      "path": "pages/take_photo/take_images",
      "style": {
        "navigationBarTitleText": "image"
      }
    }, {
      "path": "pages/tag_page/tag-page",
      "style": {
        "navigationBarTitleText": "tag"
      }
    }, {
      "path": "pages/files_upload/files_upload",
      "style": {
        "navigationStyle": "custom",
        "navigationBarTitleText": "upload files"
      }
    }, {
      "path": "pages/pop_box/pop_box",
      "style": {
        "navigationBarTitleText": "pop box"
      }
    }, {
      "path": "pages/card_list/card_list",
      "style": {
        "navigationBarTitleText": "卡片"
      }
    }, {
      "path": "pages/video_player/video_player",
      "style": {
        "navigationBarTitleText": "video"
      }
    }, {
      "path": "pages/native_video/native_video",
      "style": {
        "navigationBarTitleText": "native video"
      }
    }, {
      "path": "pages/video_live/video_live",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/action_sheet/action_sheet",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/nurse_auth/nurse_auth",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/sign_page/landscape_sign",
      "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/sign_page/vertical_sign",
      "style": {
        "navigationStyle": "custom"
      }
    }]
  }],
  "tabBar": {
    "color": "#666",
    "selectedColor": "#FF2C3C",
    "borderStyle": "black",
    "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "/static/images/tab_home.png",
      "selectedIconPath": "/static/images/tab_home_s.png",
      "text": "首页"
    }, {
      "pagePath": "pages/text_auto/text_auto",
      "iconPath": "/static/images/tab_home.png",
      "selectedIconPath": "/static/images/tab_home_s.png",
      "text": "文本"
    }, {
      "pagePath": "pages/message/message",
      "iconPath": "/static/images/tab_home.png",
      "selectedIconPath": "/static/images/tab_home_s.png",
      "text": "消息"
    }, {
      "pagePath": "pages/user/user",
      "iconPath": "/static/images/tab_user.png",
      "selectedIconPath": "/static/images/tab_user_s.png",
      "text": "我的"
    }],
    "midButton": {
      "iconPath": "static/images/icon_wechat.png",
      "text": "维修上报",
      "height": "70px",
      "iconWidth": "44px"
    }
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "uniIdRouter": {},
  "easycom": {
    "autoscan": true,
    "^u-(.*)": "@/uni_modules/vk-uview-ui/components/u-$1/u-$1.vue"
  }
};
exports.default = _default;

/***/ }),

/***/ 36:
/*!*************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/modules/app.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cachekey = __webpack_require__(/*! @/config/cachekey.js */ 37);
var _cache = _interopRequireDefault(__webpack_require__(/*! @/utils/cache.js */ 38));
// app 状态管理
var state = {
  token: _cache.default.get(_cachekey.TOKEN) || null
};
var actions = {};
var _default = {
  state: state
};
exports.default = _default;

/***/ }),

/***/ 368:
/*!*********************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeScroll;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/* mescroll
 * version 1.3.7
 * 2021-04-12 wenju
 * https://www.mescroll.com
 */

function MeScroll(options, isScrollBody) {
  var me = this;
  me.version = '1.3.7'; // mescroll版本号
  me.options = options || {}; // 配置
  me.isScrollBody = isScrollBody || false; // 滚动区域是否为原生页面滚动; 默认为scroll-view

  me.isDownScrolling = false; // 是否在执行下拉刷新的回调
  me.isUpScrolling = false; // 是否在执行上拉加载的回调
  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback

  // 初始化下拉刷新
  me.initDownScroll();
  // 初始化上拉加载,则初始化
  me.initUpScroll();

  // 自动加载
  setTimeout(function () {
    // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)
    if ((me.optDown.use || me.optDown.native) && me.optDown.auto && hasDownCallback) {
      if (me.optDown.autoShowLoading) {
        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调
      } else {
        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调
      }
    }
    // 自动触发上拉加载
    if (!me.isUpAutoLoad) {
      // 部分小程序(头条小程序)emit是异步, 会导致isUpAutoLoad判断有误, 先延时确保先执行down的callback,再执行up的callback
      setTimeout(function () {
        me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();
      }, 100);
    }
  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行
}

/* 配置参数:下拉刷新 */
MeScroll.prototype.extendDownScroll = function (optDown) {
  // 下拉刷新的配置
  MeScroll.extend(optDown, {
    use: true,
    // 是否启用下拉刷新; 默认true
    auto: true,
    // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
    native: false,
    // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
    autoShowLoading: false,
    // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
    isLock: false,
    // 是否锁定下拉刷新,默认false;
    offset: 80,
    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    startTop: 100,
    // scroll-view快速滚动到顶部时,此时的scroll-top可能大于0, 此值用于控制最大的误差
    inOffsetRate: 1,
    // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    outOffsetRate: 0.2,
    // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    bottomOffset: 20,
    // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
    minAngle: 45,
    // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
    textInOffset: '下拉刷新',
    // 下拉的距离在offset范围内的提示文本
    textOutOffset: '释放更新',
    // 下拉的距离大于offset范围的提示文本
    textLoading: '加载中 ...',
    // 加载中的提示文本
    textSuccess: '加载成功',
    // 加载成功的文本
    textErr: '加载失败',
    // 加载失败的文本
    beforeEndDelay: 0,
    // 延时结束的时长 (显示加载成功/失败的时长, android小程序设置此项结束下拉会卡顿, 配置后请注意测试)
    bgColor: "transparent",
    // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
    textColor: "gray",
    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null,
    // 下拉刷新初始化完毕的回调
    inOffset: null,
    // 下拉的距离进入offset范围内那一刻的回调
    outOffset: null,
    // 下拉的距离大于offset那一刻的回调
    onMoving: null,
    // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
    beforeLoading: null,
    // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】
    showLoading: null,
    // 显示下拉刷新进度的回调
    afterLoading: null,
    // 显示下拉刷新进度的回调之后,马上要执行的代码 (如: 在wxs中使用)
    beforeEndDownScroll: null,
    // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】
    endDownScroll: null,
    // 结束下拉刷新的回调
    afterEndDownScroll: null,
    // 结束下拉刷新的回调,马上要执行的代码 (如: 在wxs中使用)
    callback: function callback(mescroll) {
      // 下拉刷新的回调;默认重置上拉加载列表为第一页
      mescroll.resetUpScroll();
    }
  });
};

/* 配置参数:上拉加载 */
MeScroll.prototype.extendUpScroll = function (optUp) {
  // 上拉加载的配置
  MeScroll.extend(optUp, {
    use: true,
    // 是否启用上拉加载; 默认true
    auto: true,
    // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
    isLock: false,
    // 是否锁定上拉加载,默认false;
    isBoth: true,
    // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
    callback: null,
    // 上拉加载的回调;function(page,mescroll){ }
    page: {
      num: 0,
      // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
      size: 10,
      // 每页数据的数量
      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
    },

    noMoreSize: 5,
    // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
    offset: 150,
    // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
    textLoading: '加载中 ...',
    // 加载中的提示文本
    textNoMore: '-- END --',
    // 没有更多数据的提示文本
    bgColor: "transparent",
    // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)
    textColor: "gray",
    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null,
    // 初始化完毕的回调
    showLoading: null,
    // 显示加载中的回调
    showNoMore: null,
    // 显示无更多数据的回调
    hideUpScroll: null,
    // 隐藏上拉加载的回调
    errDistance: 60,
    // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: null,
      // 图片路径,默认null (绝对路径或网络图)
      offset: 1000,
      // 列表滚动多少距离才显示回到顶部按钮,默认1000
      duration: 300,
      // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
      btnClick: null,
      // 点击按钮的回调
      onShow: null,
      // 是否显示的回调
      zIndex: 9990,
      // fixed定位z-index值
      left: null,
      // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      right: 20,
      // 到右边的距离, 默认20 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      bottom: 120,
      // 到底部的距离, 默认120 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      safearea: false,
      // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)
      width: 72,
      // 回到顶部图标的宽度, 默认72 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      radius: "50%" // 圆角, 默认"50%" (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
    },

    empty: {
      use: true,
      // 是否显示空布局
      icon: null,
      // 图标路径
      tip: '~ 暂无相关数据 ~',
      // 提示
      btnText: '',
      // 按钮
      btnClick: null,
      // 点击按钮的回调
      onShow: null,
      // 是否显示的回调
      fixed: false,
      // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
      top: "100rpx",
      // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
      zIndex: 99 // fixed定位z-index值
    },

    onScroll: false // 是否监听滚动事件
  });
};

/* 配置参数 */
MeScroll.extend = function (userOption, defaultOption) {
  if (!userOption) return defaultOption;
  for (var key in defaultOption) {
    if (userOption[key] == null) {
      var def = defaultOption[key];
      if (def != null && (0, _typeof2.default)(def) === 'object') {
        userOption[key] = MeScroll.extend({}, def); // 深度匹配
      } else {
        userOption[key] = def;
      }
    } else if ((0, _typeof2.default)(userOption[key]) === 'object') {
      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配
    }
  }

  return userOption;
};

/* 简单判断是否配置了颜色 (非透明,非白色) */
MeScroll.prototype.hasColor = function (color) {
  if (!color) return false;
  var c = color.toLowerCase();
  return c != "#fff" && c != "#ffffff" && c != "transparent" && c != "white";
};

/* -------初始化下拉刷新------- */
MeScroll.prototype.initDownScroll = function () {
  var me = this;
  // 配置参数
  me.optDown = me.options.down || {};
  if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor)) me.optDown.textColor = "#fff"; // 当bgColor有值且textColor未设置,则textColor默认白色
  me.extendDownScroll(me.optDown);

  // 如果是mescroll-body且配置了native,则禁止自定义的下拉刷新
  if (me.isScrollBody && me.optDown.native) {
    me.optDown.use = false;
  } else {
    me.optDown.native = false; // 仅mescroll-body支持,mescroll-uni不支持
  }

  me.downHight = 0; // 下拉区域的高度

  // 在页面中加入下拉布局
  if (me.optDown.use && me.optDown.inited) {
    // 初始化完毕的回调
    setTimeout(function () {
      // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optDown.inited(me);
    }, 0);
  }
};

/* 列表touchstart事件 */
MeScroll.prototype.touchstartEvent = function (e) {
  if (!this.optDown.use) return;
  this.startPoint = this.getPoint(e); // 记录起点
  this.startTop = this.getScrollTop(); // 记录此时的滚动条位置
  this.startAngle = 0; // 初始角度
  this.lastPoint = this.startPoint; // 重置上次move的点
  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)
  this.inTouchend = false; // 标记不是touchend
};

/* 列表touchmove事件 */
MeScroll.prototype.touchmoveEvent = function (e) {
  if (!this.optDown.use) return;
  var me = this;
  var scrollTop = me.getScrollTop(); // 当前滚动条的距离
  var curPoint = me.getPoint(e); // 当前点

  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉

  // 向下拉 && 在顶部
  // mescroll-body,直接判定在顶部即可
  // scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove
  // scroll-view滚动到顶部时,scrollTop不一定为0,也有可能大于0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等
  if (moveY > 0 && (me.isScrollBody && scrollTop <= 0 || !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop))) {
    // 可下拉的条件
    if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling && me.optUp.isBoth)) {
      // 下拉的初始角度是否在配置的范围内
      if (!me.startAngle) me.startAngle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]
      if (me.startAngle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新

      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发
      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {
        me.inTouchend = true; // 标记执行touchend
        me.touchendEvent(); // 提前触发touchend
        return;
      }
      me.preventDefault(e); // 阻止默认事件

      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)

      // 下拉距离  < 指定距离
      if (me.downHight < me.optDown.offset) {
        if (me.movetype !== 1) {
          me.movetype = 1; // 加入标记,保证只执行一次
          me.isDownEndSuccess = null; // 重置是否加载成功的状态 (wxs执行的是wxs.wxs)
          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }

        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小

        // 指定距离  <= 下拉距离
      } else {
        if (me.movetype !== 2) {
          me.movetype = 2; // 加入标记,保证只执行一次
          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }

        if (diff > 0) {
          // 向下拉
          me.downHight += diff * me.optDown.outOffsetRate; // 越往下,高度变化越小
        } else {
          // 向上收
          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度
        }
      }

      me.downHight = Math.round(me.downHight); // 取整
      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值
      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行
    }
  }

  me.lastPoint = curPoint; // 记录本次移动的点
};

/* 列表touchend事件 */
MeScroll.prototype.touchendEvent = function (e) {
  if (!this.optDown.use) return;
  // 如果下拉区域高度已改变,则需重置回来
  if (this.isMoveDown) {
    if (this.downHight >= this.optDown.offset) {
      // 符合触发刷新的条件
      this.triggerDownScroll();
    } else {
      // 不符合的话 则重置
      this.downHight = 0;
      this.endDownScrollCall(this);
    }
    this.movetype = 0;
    this.isMoveDown = false;
  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {
    // scroll-view到顶/左/右/底的滑动事件
    var isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉
    // 上滑
    if (isScrollUp) {
      // 需检查滑动的角度
      var angle = this.getAngle(this.getPoint(e), this.startPoint); // 两点之间的角度,区间 [0,90]
      if (angle > 80) {
        // 检查并触发上拉
        this.triggerUpScroll(true);
      }
    }
  }
};

/* 根据点击滑动事件获取第一个手指的坐标 */
MeScroll.prototype.getPoint = function (e) {
  if (!e) {
    return {
      x: 0,
      y: 0
    };
  }
  if (e.touches && e.touches[0]) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  } else if (e.changedTouches && e.changedTouches[0]) {
    return {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    };
  } else {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
};

/* 计算两点之间的角度: 区间 [0,90]*/
MeScroll.prototype.getAngle = function (p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  var z = Math.sqrt(x * x + y * y);
  var angle = 0;
  if (z !== 0) {
    angle = Math.asin(y / z) / Math.PI * 180;
  }
  return angle;
};

/* 触发下拉刷新 */
MeScroll.prototype.triggerDownScroll = function () {
  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {
    //return true则处于完全自定义状态
  } else {
    this.showDownScroll(); // 下拉刷新中...
    !this.optDown.native && this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示下拉进度布局 */
MeScroll.prototype.showDownScroll = function () {
  this.isDownScrolling = true; // 标记下拉中
  if (this.optDown.native) {
    uni.startPullDownRefresh(); // 系统自带的下拉刷新
    this.showDownLoadingCall(0); // 仍触发showLoading,因为上拉加载用到
  } else {
    this.downHight = this.optDown.offset; // 更新下拉区域高度
    this.showDownLoadingCall(this.downHight); // 下拉刷新中...
  }
};

MeScroll.prototype.showDownLoadingCall = function (downHight) {
  this.optDown.showLoading && this.optDown.showLoading(this, downHight); // 下拉刷新中...
  this.optDown.afterLoading && this.optDown.afterLoading(this, downHight); // 下拉刷新中...触发之后马上要执行的代码
};

/* 显示系统自带的下拉刷新时需要处理的业务 */
MeScroll.prototype.onPullDownRefresh = function () {
  this.isDownScrolling = true; // 标记下拉中
  this.showDownLoadingCall(0); // 仍触发showLoading,因为上拉加载用到
  this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
};

/* 结束下拉刷新 */
MeScroll.prototype.endDownScroll = function () {
  if (this.optDown.native) {
    // 结束原生下拉刷新
    this.isDownScrolling = false;
    this.endDownScrollCall(this);
    uni.stopPullDownRefresh();
    return;
  }
  var me = this;
  // 结束下拉刷新的方法
  var endScroll = function endScroll() {
    me.downHight = 0;
    me.isDownScrolling = false;
    me.endDownScrollCall(me);
    if (!me.isScrollBody) {
      me.setScrollHeight(0); // scroll-view重置滚动区域,使数据不满屏时仍可检查触发翻页
      me.scrollTo(0, 0); // scroll-view需重置滚动条到顶部,避免startTop大于0时,对下拉刷新的影响
    }
  };
  // 结束下拉刷新时的回调
  var delay = 0;
  if (me.optDown.beforeEndDownScroll) {
    delay = me.optDown.beforeEndDownScroll(me); // 结束下拉刷新的延时,单位ms
    if (me.isDownEndSuccess == null) delay = 0; // 没有执行加载中,则不延时
  }

  if (typeof delay === 'number' && delay > 0) {
    setTimeout(endScroll, delay);
  } else {
    endScroll();
  }
};
MeScroll.prototype.endDownScrollCall = function () {
  this.optDown.endDownScroll && this.optDown.endDownScroll(this);
  this.optDown.afterEndDownScroll && this.optDown.afterEndDownScroll(this);
};

/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockDownScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optDown.isLock = isLock;
};

/* 锁定上拉加载:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockUpScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optUp.isLock = isLock;
};

/* -------初始化上拉加载------- */
MeScroll.prototype.initUpScroll = function () {
  var me = this;
  // 配置参数
  me.optUp = me.options.up || {
    use: false
  };
  if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor)) me.optUp.textColor = "#fff"; // 当bgColor有值且textColor未设置,则textColor默认白色
  me.extendUpScroll(me.optUp);
  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局
  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页
  me.startNum = me.optUp.page.num + 1; // 记录page开始的页码

  // 初始化完毕的回调
  if (me.optUp.inited) {
    setTimeout(function () {
      // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optUp.inited(me);
    }, 0);
  }
};

/*滚动到底部的事件 (仅mescroll-body生效)*/
MeScroll.prototype.onReachBottom = function () {
  if (this.isScrollBody && !this.isUpScrolling) {
    // 只能支持下拉刷新的时候同时可以触发上拉加载,否则滚动到底部就需要上滑一点才能触发onReachBottom
    if (!this.optUp.isLock && this.optUp.hasNext) {
      this.triggerUpScroll();
    }
  }
};

/*列表滚动事件 (仅mescroll-body生效)*/
MeScroll.prototype.onPageScroll = function (e) {
  if (!this.isScrollBody) return;

  // 更新滚动条的位置 (主要用于判断下拉刷新时,滚动条是否在顶部)
  this.setScrollTop(e.scrollTop);

  // 顶部按钮的显示隐藏
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }
};

/*列表滚动事件*/
MeScroll.prototype.scroll = function (e, onScroll) {
  // 更新滚动条的位置
  this.setScrollTop(e.scrollTop);
  // 更新滚动内容高度
  this.setScrollHeight(e.scrollHeight);

  // 向上滑还是向下滑动
  if (this.preScrollY == null) this.preScrollY = 0;
  this.isScrollUp = e.scrollTop - this.preScrollY > 0;
  this.preScrollY = e.scrollTop;

  // 上滑 && 检查并触发上拉
  this.isScrollUp && this.triggerUpScroll(true);

  // 顶部按钮的显示隐藏
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }

  // 滑动监听
  this.optUp.onScroll && onScroll && onScroll();
};

/* 触发上拉加载 */
MeScroll.prototype.triggerUpScroll = function (isCheck) {
  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {
    // 是否校验在底部; 默认不校验
    if (isCheck === true) {
      var canUp = false;
      // 还有下一页 && 没有锁定 && 不在下拉中
      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {
        if (this.getScrollBottom() <= this.optUp.offset) {
          // 到底部
          canUp = true; // 标记可上拉
        }
      }

      if (canUp === false) return;
    }
    this.showUpScroll(); // 上拉加载中...
    this.optUp.page.num++; // 预先加一页,如果失败则减回
    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示上拉加载中 */
MeScroll.prototype.showUpScroll = function () {
  this.isUpScrolling = true; // 标记上拉加载中
  this.optUp.showLoading && this.optUp.showLoading(this); // 回调
};

/* 显示上拉无更多数据 */
MeScroll.prototype.showNoMore = function () {
  this.optUp.hasNext = false; // 标记无更多数据
  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调
};

/* 隐藏上拉区域**/
MeScroll.prototype.hideUpScroll = function () {
  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调
};

/* 结束上拉加载 */
MeScroll.prototype.endUpScroll = function (isShowNoMore) {
  if (isShowNoMore != null) {
    // isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用
    if (isShowNoMore) {
      this.showNoMore(); // isShowNoMore=true,显示无更多数据
    } else {
      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载
    }
  }

  this.isUpScrolling = false; // 标记结束上拉加载
};

/* 重置上拉加载列表为第一页
 *isShowLoading 是否显示进度布局;
 * 1.默认null,不传参,则显示上拉加载的进度布局
 * 2.传参true, 则显示下拉刷新的进度布局
 * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
 */
MeScroll.prototype.resetUpScroll = function (isShowLoading) {
  if (this.optUp && this.optUp.use) {
    var page = this.optUp.page;
    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回
    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回
    page.num = this.startNum; // 重置为第一页
    page.time = null; // 重置时间为空
    if (!this.isDownScrolling && isShowLoading !== false) {
      // 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;
      if (isShowLoading == null) {
        this.removeEmpty(); // 移除空布局
        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局
      } else {
        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表
      }
    }

    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调
  }
};

/* 设置page.num的值 */
MeScroll.prototype.setPageNum = function (num) {
  this.optUp.page.num = num - 1;
};

/* 设置page.size的值 */
MeScroll.prototype.setPageSize = function (size) {
  this.optUp.page.size = size;
};

/* 联网回调成功,结束下拉刷新和上拉加载
 * dataSize: 当前页的数据量(必传)
 * totalPage: 总页数(必传)
 * systime: 服务器时间 (可空)
 */
MeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {
  var hasNext;
  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页
  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
 * dataSize: 当前页的数据量(必传)
 * totalSize: 列表所有数据总数量(必传)
 * systime: 服务器时间 (可空)
 */
MeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {
  var hasNext;
  if (this.optUp.use && totalSize != null) {
    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数
    hasNext = loadSize < totalSize; // 是否还有下一页
  }

  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
 * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页
 * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
 * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录
 */
MeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {
  var me = this;
  // 结束下拉刷新
  if (me.isDownScrolling) {
    me.isDownEndSuccess = true;
    me.endDownScroll();
  }

  // 结束上拉加载
  if (me.optUp.use) {
    var isShowNoMore; // 是否已无更多数据
    if (dataSize != null) {
      var pageNum = me.optUp.page.num; // 当前页码
      var pageSize = me.optUp.page.size; // 每页长度
      // 如果是第一页
      if (pageNum === 1) {
        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间
      }

      if (dataSize < pageSize || hasNext === false) {
        // 返回的数据不满一页时,则说明已无更多数据
        me.optUp.hasNext = false;
        if (dataSize === 0 && pageNum === 1) {
          // 如果第一页无任何数据且配置了空布局
          isShowNoMore = false;
          me.showEmpty();
        } else {
          // 总列表数少于配置的数量,则不显示无更多数据
          var allDataSize = (pageNum - 1) * pageSize + dataSize;
          if (allDataSize < me.optUp.noMoreSize) {
            isShowNoMore = false;
          } else {
            isShowNoMore = true;
          }
          me.removeEmpty(); // 移除空布局
        }
      } else {
        // 还有下一页
        isShowNoMore = false;
        me.optUp.hasNext = true;
        me.removeEmpty(); // 移除空布局
      }
    }

    // 隐藏上拉
    me.endUpScroll(isShowNoMore);
  }
};

/* 回调失败,结束下拉刷新和上拉加载 */
MeScroll.prototype.endErr = function (errDistance) {
  // 结束下拉,回调失败重置回原来的页码和时间
  if (this.isDownScrolling) {
    this.isDownEndSuccess = false;
    var page = this.optUp.page;
    if (page && this.prePageNum) {
      page.num = this.prePageNum;
      page.time = this.prePageTime;
    }
    this.endDownScroll();
  }
  // 结束上拉,回调失败重置回原来的页码
  if (this.isUpScrolling) {
    this.optUp.page.num--;
    this.endUpScroll(false);
    // 如果是mescroll-body,则需往回滚一定距离
    if (this.isScrollBody && errDistance !== 0) {
      // 不处理0
      if (!errDistance) errDistance = this.optUp.errDistance; // 不传,则取默认
      this.scrollTo(this.getScrollTop() - errDistance, 0); // 往上回滚的距离
    }
  }
};

/* 显示空布局 */
MeScroll.prototype.showEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);
};

/* 移除空布局 */
MeScroll.prototype.removeEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);
};

/* 显示回到顶部的按钮 */
MeScroll.prototype.showTopBtn = function () {
  if (!this.topBtnShow) {
    this.topBtnShow = true;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);
  }
};

/* 隐藏回到顶部的按钮 */
MeScroll.prototype.hideTopBtn = function () {
  if (this.topBtnShow) {
    this.topBtnShow = false;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);
  }
};

/* 获取滚动条的位置 */
MeScroll.prototype.getScrollTop = function () {
  return this.scrollTop || 0;
};

/* 记录滚动条的位置 */
MeScroll.prototype.setScrollTop = function (y) {
  this.scrollTop = y;
};

/* 滚动到指定位置 */
MeScroll.prototype.scrollTo = function (y, t) {
  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法
};

/* 自定义scrollTo */
MeScroll.prototype.resetScrollTo = function (myScrollTo) {
  this.myScrollTo = myScrollTo;
};

/* 滚动条到底部的距离 */
MeScroll.prototype.getScrollBottom = function () {
  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();
};

/* 计步器
 star: 开始值
 end: 结束值
 callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;
 t: 计步时长,传0则直接回调end值;不传则默认300ms
 rate: 周期;不传则默认30ms计步一次
 * */
MeScroll.prototype.getStep = function (star, end, callback, t, rate) {
  var diff = end - star; // 差值
  if (t === 0 || diff === 0) {
    callback && callback(end);
    return;
  }
  t = t || 300; // 时长 300ms
  rate = rate || 30; // 周期 30ms
  var count = t / rate; // 次数
  var step = diff / count; // 步长
  var i = 0; // 计数
  var timer = setInterval(function () {
    if (i < count - 1) {
      star += step;
      callback && callback(star, timer);
      i++;
    } else {
      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差
      clearInterval(timer);
    }
  }, rate);
};

/* 滚动容器的高度 */
MeScroll.prototype.getClientHeight = function (isReal) {
  var h = this.clientHeight || 0;
  if (h === 0 && isReal !== true) {
    // 未获取到容器的高度,可临时取body的高度 (可能会有误差)
    h = this.getBodyHeight();
  }
  return h;
};
MeScroll.prototype.setClientHeight = function (h) {
  this.clientHeight = h;
};

/* 滚动内容的高度 */
MeScroll.prototype.getScrollHeight = function () {
  return this.scrollHeight || 0;
};
MeScroll.prototype.setScrollHeight = function (h) {
  this.scrollHeight = h;
};

/* body的高度 */
MeScroll.prototype.getBodyHeight = function () {
  return this.bodyHeight || 0;
};
MeScroll.prototype.setBodyHeight = function (h) {
  this.bodyHeight = h;
};

/* 阻止浏览器默认滚动事件 */
MeScroll.prototype.preventDefault = function (e) {
  // 小程序不支持e.preventDefault, 已在wxs中禁止
  // app的bounce只能通过配置pages.json的style.app-plus.bounce为"none"来禁止, 或使用renderjs禁止
  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 369:
/*!****************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni-option.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 全局配置
// mescroll-body 和 mescroll-uni 通用
var GlobalOption = {
  down: {
    // 其他down的配置参数也可以写,这里只展示了常用的配置:
    offset: 80,
    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    native: false // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  },

  up: {
    // 其他up的配置参数也可以写,这里只展示了常用的配置:
    offset: 150,
    // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: "https://www.mescroll.com/img/mescroll-totop.png",
      // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
      offset: 1000,
      // 列表滚动多少距离才显示回到顶部按钮,默认1000px
      right: 20,
      // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      bottom: 120,
      // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      width: 72 // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
    },

    empty: {
      use: true,
      // 是否显示空布局
      icon: "https://www.mescroll.com/img/mescroll-empty.png" // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
    }
  },

  // 国际化配置
  i18n: {
    // 中文
    zh: {
      down: {
        textInOffset: '下拉刷新',
        // 下拉的距离在offset范围内的提示文本
        textOutOffset: '释放更新',
        // 下拉的距离大于offset范围的提示文本
        textLoading: '加载中 ...',
        // 加载中的提示文本
        textSuccess: '加载成功',
        // 加载成功的文本
        textErr: '加载失败' // 加载失败的文本
      },

      up: {
        textLoading: '加载中 ...',
        // 加载中的提示文本
        textNoMore: '-- END --',
        // 没有更多数据的提示文本
        empty: {
          tip: '~ 空空如也 ~' // 空提示
        }
      }
    },

    // 英文
    en: {
      down: {
        textInOffset: 'drop down refresh',
        textOutOffset: 'release updates',
        textLoading: 'loading ...',
        textSuccess: 'loaded successfully',
        textErr: 'loading failed'
      },
      up: {
        textLoading: 'loading ...',
        textNoMore: '-- END --',
        empty: {
          tip: '~ absolutely empty ~'
        }
      }
    }
  }
};
var _default = GlobalOption;
exports.default = _default;

/***/ }),

/***/ 37:
/*!***********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/config/cachekey.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  USER_INFO: 'USER_INFO',
  TOKEN: 'TOKEN',
  BACK_URL: 'BACK_URL',
  CONFIG: 'CONFIG',
  INVITE_CODE: 'INVITE_CODE',
  TEMP_TOKEN: 'TEMP_TOKEN'
};

/***/ }),

/***/ 370:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-i18n.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 国际化工具类
var mescrollI18n = {
  // 默认语言
  def: "zh",
  // 获取当前语言类型
  getType: function getType() {
    return uni.getStorageSync("mescroll-i18n") || this.def;
  },
  // 设置当前语言类型
  setType: function setType(type) {
    uni.setStorageSync("mescroll-i18n", type);
  }
};
var _default = mescrollI18n;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 371:
/*!*******************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/mescroll-uni/components/mescroll-uni/wxs/mixins.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 定义在wxs (含renderjs) 逻辑层的数据和方法, 与视图层相互通信
var WxsMixin = {
  data: function data() {
    return {
      // 传入wxs视图层的数据 (响应式)
      wxsProp: {
        optDown: {},
        // 下拉刷新的配置
        scrollTop: 0,
        // 滚动条的距离
        bodyHeight: 0,
        // body的高度
        isDownScrolling: false,
        // 是否正在下拉刷新中
        isUpScrolling: false,
        // 是否正在上拉加载中
        isScrollBody: true,
        // 是否为mescroll-body滚动
        isUpBoth: true,
        // 上拉加载时,是否同时可以下拉刷新
        t: 0 // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
      },

      // 标记调用wxs视图层的方法
      callProp: {
        callType: '',
        // 方法名
        t: 0 // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
      },

      // 不用wxs的平台使用此处的wxsBiz对象,抹平wxs的写法 (微信小程序和APP使用的wxsBiz对象是./wxs/wxs.wxs)

      // 不用renderjs的平台使用此处的renderBiz对象,抹平renderjs的写法 (app 和 h5 使用的renderBiz对象是./wxs/renderjs.js)

      renderBiz: {
        propObserver: function propObserver() {} // 抹平renderjs的写法
      }
    };
  },
  methods: {
    // wxs视图层调用逻辑层的回调
    wxsCall: function wxsCall(msg) {
      if (msg.type === 'setWxsProp') {
        // 更新wxsProp数据 (值改变才触发更新)
        this.wxsProp = {
          optDown: this.mescroll.optDown,
          scrollTop: this.mescroll.getScrollTop(),
          bodyHeight: this.mescroll.getBodyHeight(),
          isDownScrolling: this.mescroll.isDownScrolling,
          isUpScrolling: this.mescroll.isUpScrolling,
          isUpBoth: this.mescroll.optUp.isBoth,
          isScrollBody: this.mescroll.isScrollBody,
          t: Date.now()
        };
      } else if (msg.type === 'setLoadType') {
        // 设置inOffset,outOffset的状态
        this.downLoadType = msg.downLoadType;
        // 状态挂载到mescroll对象, 以便在其他组件中使用, 比如<me-video>中
        this.$set(this.mescroll, 'downLoadType', this.downLoadType);
        // 重置是否加载成功的状态
        this.$set(this.mescroll, 'isDownEndSuccess', null);
      } else if (msg.type === 'triggerDownScroll') {
        // 主动触发下拉刷新
        this.mescroll.triggerDownScroll();
      } else if (msg.type === 'endDownScroll') {
        // 结束下拉刷新
        this.mescroll.endDownScroll();
      } else if (msg.type === 'triggerUpScroll') {
        // 主动触发上拉加载
        this.mescroll.triggerUpScroll(true);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    // 配置主动触发wxs显示加载进度的回调
    this.mescroll.optDown.afterLoading = function () {
      _this.callProp = {
        callType: "showLoading",
        t: Date.now()
      }; // 触发wxs的方法 (值改变才触发更新)
    };
    // 配置主动触发wxs隐藏加载进度的回调
    this.mescroll.optDown.afterEndDownScroll = function () {
      _this.callProp = {
        callType: "endDownScroll",
        t: Date.now()
      }; // 触发wxs的方法 (值改变才触发更新)
      var delay = 300 + (_this.mescroll.optDown.beforeEndDelay || 0);
      setTimeout(function () {
        if (_this.downLoadType === 4 || _this.downLoadType === 0) {
          _this.callProp = {
            callType: "clearTransform",
            t: Date.now()
          }; // 触发wxs的方法 (值改变才触发更新)
        }
        // 状态挂载到mescroll对象, 以便在其他组件中使用, 比如<me-video>中
        _this.$set(_this.mescroll, 'downLoadType', _this.downLoadType);
      }, delay);
    };
    // 初始化wxs的数据
    this.wxsCall({
      type: 'setWxsProp'
    });
  }
};
var _default = WxsMixin;
exports.default = _default;

/***/ }),

/***/ 38:
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/utils/cache.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/*
* app 本地缓存
*/

var Cache = {
  //设置缓存(expire为缓存时效)
  set: function set(key, value, expire) {
    var data = {
      expire: expire ? this.time() + expire : "",
      value: value
    };
    if ((0, _typeof2.default)(data) === 'object') data = JSON.stringify(data);
    try {
      uni.setStorageSync(key, data);
    } catch (e) {
      return false;
    }
  },
  get: function get(key) {
    try {
      var data = uni.getStorageSync(key);
      var _JSON$parse = JSON.parse(data),
        value = _JSON$parse.value,
        expire = _JSON$parse.expire;
      if (expire && expire < this.time()) {
        uni.removeStorageSync(key);
        return false;
      } else {
        return value;
      }
    } catch (e) {
      return false;
    }
  },
  //获取当前时间
  time: function time() {
    return Math.round(new Date() / 1000);
  },
  remove: function remove(key) {
    if (key) uni.removeStorageSync(key);
  }
};
var _default = Cache;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 39:
/*!*********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/getters.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  token: function token(state) {
    return state.app.token;
  },
  isLogin: function isLogin(state) {
    return !!state.app.token;
  }
};
exports.default = _default;

/***/ }),

/***/ 395:
/*!*************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/util/emitter.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  var $children;
  $children = this.$children;
  $children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 (向上查找) (一个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 (向下查找) (广播多个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/utils/tools.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatAdd = FloatAdd;
exports.FloatMul = FloatMul;
exports.arrSum = exports.arrRemove = exports.arrMin = exports.arrMax = exports.arrContains = void 0;
exports.arraySliceFive = arraySliceFive;
exports.formatDate = exports.colorToRGB = exports.checkStr = exports.checkPwd = exports.changeToChinese = exports.changeCase = void 0;
exports.getLocationAuth = getLocationAuth;
exports.insertStr = void 0;
exports.isAndroid = isAndroid;
exports.isObj = exports.isNumber = exports.isNull = exports.isMobile = exports.isFunction = exports.isError = exports.isEmail = exports.isDate = exports.isCardID = exports.isBoolean = exports.isArray = void 0;
exports.isObject = isObject;
exports.isUndefined = exports.isURL = exports.isSymbol = exports.isString = exports.isSet = exports.isRegExp = exports.isPromise = exports.isPhone = void 0;
exports.isWeixinClient = isWeixinClient;
exports.numberToChinese = void 0;
exports.paramsToStr = paramsToStr;
exports.shuffle = exports.random = void 0;
exports.strOut = strOut;
exports.strToParams = strToParams;
exports.strTrim = void 0;
exports.toast = toast;
exports.unique = void 0;
exports.uniqueId = uniqueId;
exports.urlencode = urlencode;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _arguments = typeof arguments === "undefined" ? void 0 : arguments;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// 提示message
/*

import {toast} from './tools'

	this.$toast({
		title: '这是示例'
	})
*/
function toast() {
  var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var navigateOpt = arguments.length > 1 ? arguments[1] : undefined;
  var title = info.title || '';
  var icon = info.icon || 'none';
  var endtime = info.endtime || 2000;
  if (title) uni.showToast({
    title: title,
    icon: icon,
    duration: endtime
  });
  if (navigateOpt != undefined) {
    if ((0, _typeof2.default)(navigateOpt) == 'object') {
      var tab = navigateOpt.tab || 1,
        url = navigateOpt.url || '';
      switch (tab) {
        case 1:
          //跳转至 table
          setTimeout(function () {
            uni.switchTab({
              url: url
            });
          }, endtime);
          break;
        case 2:
          //跳转至非table页面
          setTimeout(function () {
            uni.navigateTo({
              url: url
            });
          }, endtime);
          break;
        case 3:
          //返回上页面
          setTimeout(function () {
            uni.navigateBack({
              delta: parseInt(url)
            });
          }, endtime);
          break;
        case 4:
          //关闭当前所有页面跳转至非table页面
          setTimeout(function () {
            uni.reLaunch({
              url: url
            });
          }, endtime);
          break;
        case 5:
          //关闭当前页面跳转至非table页面
          setTimeout(function () {
            uni.redirectTo({
              url: url
            });
          }, endtime);
          break;
      }
    } else if (typeof navigateOpt == 'function') {
      setTimeout(function () {
        navigateOpt && navigateOpt();
      }, endtime);
    }
  }
}

/**
 * 获取是否授权了定位权限
 * @param { Boolean } launchAuth: 是否发起授权请求, 初次有效
 * @return { Boolean }
 */
function getLocationAuth(launchAuth) {
  return new Promise(function (resolve) {
    uni.getSetting({
      success: function success(res) {
        if (launchAuth && res.authSetting['scope.userLocation'] === undefined) {
          return uni.authorize({
            scope: 'scope.userLocation',
            success: function success() {
              resolve(true);
            },
            fail: function fail() {
              resolve(false);
            }
          });
        }
        resolve(res.authSetting['scope.userLocation']);
      },
      fail: function fail(err) {
        console.err(err);
      }
    });
  });
}

//判断是否为微信环境
function isWeixinClient() {
  return false;
}

//判断是否为安卓环境
function isAndroid() {
  var u = navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}

//获取url后的参数  以对象返回
function strToParams(str) {
  var newparams = {};
  var _iterator = _createForOfIteratorHelper(str.split('&')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      newparams[item.split('=')[0]] = item.split('=')[1];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return newparams;
}

//重写encodeURL函数
function urlencode(str) {
  str = (str + '').toString();
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

/* 
 * 一维数组截取为二维数组
 * 5个一组
**/
function arraySliceFive(data) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var optNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  data = JSON.parse(JSON.stringify(data));
  if (data.length <= optNum) {
    data.length > 0 && array.push(data);
    return array;
  }
  array.push(data.splice(0, optNum));
  return arraySliceFive(data, array, optNum);
}

/* 对象参数转为以？&拼接的字符 */
function paramsToStr(params) {
  var p = '';
  if ((0, _typeof2.default)(params) == 'object') {
    p = '?';
    for (var props in params) {
      p += "".concat(props, "=").concat(params[props], "&");
    }
    p = p.slice(0, -1);
  }
  return p;
}

// 判断类型集合
var checkStr = function checkStr(str, type) {
  switch (type) {
    case 'phone':
      //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel':
      //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card':
      //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd':
      //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case 'postal':
      //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ':
      //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email':
      //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money':
      //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL':
      //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
    case 'IP':
      //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date':
      //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);
    case 'number':
      //数字
      return /^[0-9]$/.test(str);
    case 'english':
      //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese':
      //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case 'lower':
      //小写
      return /^[a-z]+$/.test(str);
    case 'upper':
      //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML':
      //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};

// 格式化时间-小于10补0
exports.checkStr = checkStr;
function formatDigit(n) {
  return n.toString().replace(/^(\d)$/, '0$1');
}
// 格式化时间，通用
var formatDate = function formatDate(timestamp, formats) {
  /* formats格式包括:
      1. Y-M-D
      2. Y-M-D h:m:s
      3. Y年M月D日
      4. Y年M月D日 h时m分
      5. Y年M月D日 h时m分s秒
      示例：console.log(formatDate(1500305226034, 'Y年M月D日 h:m:s')) ==> 2017年07月17日 23:27:06
  */
  formats = formats || 'Y-M-D';
  var myDate = undefined;
  if (timestamp) {
    if (typeof timestamp != 'string') {
      myDate = timestamp;
    } else {
      myDate = new Date(timestamp);
    }
  } else {
    myDate = new Date();
  }
  var year = myDate.getFullYear();
  var month = formatDigit(myDate.getMonth() + 1);
  var day = formatDigit(myDate.getDate());
  var hour = formatDigit(myDate.getHours());
  var minute = formatDigit(myDate.getMinutes());
  var second = formatDigit(myDate.getSeconds());
  return formats.replace(/Y|M|D|h|m|s/g, function (matches) {
    return {
      Y: year,
      M: month,
      D: day,
      h: hour,
      m: minute,
      s: second
    }[matches];
  });
};

// 验证邮箱
exports.formatDate = formatDate;
var isEmail = function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
};
// 验证手机号码
exports.isEmail = isEmail;
var isMobile = function isMobile(s) {
  return /^1[0-9]{10}$/.test(s);
};
// 验证电话号码
exports.isMobile = isMobile;
var isPhone = function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};
// 验证是否url地址
exports.isPhone = isPhone;
var isURL = function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
};
// 验证是否字符串
exports.isURL = isURL;
var isString = function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
};
// 验证是否是否数字
exports.isString = isString;
var isNumber = function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
};
// 验证是否是Boolean
exports.isNumber = isNumber;
var isBoolean = function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
};
// 验证是否是函数
exports.isBoolean = isBoolean;
var isFunction = function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
};
//是否为null
exports.isFunction = isFunction;
var isNull = function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
};
//是否undefined
exports.isNull = isNull;
var isUndefined = function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
};
//是否对象
exports.isUndefined = isUndefined;
var isObj = function isObj(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};
//是否数组
exports.isObj = isObj;
var isArray = function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
};
// 是否时间对象
exports.isArray = isArray;
var isDate = function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
};
//是否正则
exports.isDate = isDate;
var isRegExp = function isRegExp(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
};
// 是否错误对象
exports.isRegExp = isRegExp;
var isError = function isError(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
};
//是否Symbol函数
exports.isError = isError;
var isSymbol = function isSymbol(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
};
// 是否Promise对象
exports.isSymbol = isSymbol;
var isPromise = function isPromise(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
};
// 是否Set对象
exports.isPromise = isPromise;
var isSet = function isSet(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};
//判断数据是不是引用类型的数据
exports.isSet = isSet;
function isObject(value) {
  var type = (0, _typeof2.default)(value);
  return value != null && (type == 'object' || type == 'function');
}

// 字符串超出多少字显示省略号
function strOut(str) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var type = arguments.length > 2 ? arguments[2] : undefined;
  type = type || 'star';
  var restr = '';
  if (str) {
    if (str.length >= len) {
      restr = str.substring(0, len) + (type == 'star' ? '***' : '...');
    } else {
      restr = str;
    }
  }
  return restr;
}
//浮点数加法运算--解决精度丢失（传入Number，返回Number）
function FloatAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

//浮点数乘法运算--解决精度丢失（传入Number，返回Number）
function FloatMul(arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}
//随机数时间戳 （返回数字符串）
function uniqueId() {
  var a = Math.random,
    b = parseInt;
  return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}

// 数组随机洗牌算法
var shuffle = function shuffle(arr) {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};
// 严格的身份证号码校验
exports.shuffle = shuffle;
var isCardID = function isCardID(sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  }
  //身份证城市
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log('你的身份证地区非法');
    return false;
  }

  // 出生日期验证
  var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
    d = new Date(sBirthday);
  if (sBirthday != d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) {
    console.log('身份证上的出生日期非法');
    return false;
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = "10X98765432";
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log('你输入的身份证号非法');
    return false;
  }
  return true;
};
// 随机整数范围
exports.isCardID = isCardID;
var random = function random(min, max) {
  if (_arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
};
// 将阿拉伯数字翻译成中文的大写数字
exports.random = random;
var numberToChinese = function numberToChinese(num) {
  var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
    k = 0,
    re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }
  if (a.length > 1)
    // 加上小数部分(如果有小数部分)
    {
      re += BB[6];
      for (var i = 0; i < a[1].length; i++) {
        re += AA[a[1].charAt(i)];
      }
    }
  if (re == '一十') re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
};
// 将数字转换为大写金额
exports.numberToChinese = numberToChinese;
var changeToChinese = function changeToChinese(Num) {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = new String(Num);
  }
  ;
  Num = Num.replace(/,/g, ""); //替换tomoney()中的“,”
  Num = Num.replace(/ /g, ""); //替换tomoney()中的空格
  Num = Num.replace(/￥/g, ""); //替换掉可能出现的￥字符
  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return "";
  }
  ;
  //字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(Num).split(".");
  var newchar = "";
  //小数点前进行转化
  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return "";
      //若数量超过拾亿单位，提示
    }

    var tmpnewchar = "";
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;
      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;
      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;
      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;
      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;
      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;
      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;
      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;
      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;
      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;
      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;
      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;
      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;
      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;
      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;
      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }
    var newchar = tmpnewchar + newchar;
  }
  //小数点之后进行转化
  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = "";
      perchar = part[1].charAt(i);
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  }
  //替换所有无用汉字
  while (newchar.search("零零") != -1) {
    newchar = newchar.replace("零零", "零");
  }
  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");
  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整";
  }
  return newchar;
};
// 判断一个元素是否在数组中
exports.changeToChinese = changeToChinese;
var arrContains = function arrContains(arr, val) {
  return arr.indexOf(val) != -1 ? true : false;
};
// 数组去重
exports.arrContains = arrContains;
var unique = function unique(arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
};

// 数组删除其中一个元素
exports.unique = unique;
var arrRemove = function arrRemove(arr, ele) {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

// 求数组中的最大值
exports.arrRemove = arrRemove;
var arrMax = function arrMax(arr) {
  return Math.max.apply(null, arr);
};
// 求数组中的最小值
exports.arrMax = arrMax;
var arrMin = function arrMin(arr) {
  return Math.min.apply(null, arr);
};
// 数组中的值求和
exports.arrMin = arrMin;
var arrSum = function arrSum(arr) {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
};
// 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
exports.arrSum = arrSum;
var strTrim = function strTrim(str, type) {
  type = type || 2;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
};
// 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
exports.strTrim = strTrim;
var changeCase = function changeCase(str, type) {
  type = type || 4;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase();
        }
      }).join('');
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};
// 检测密码强度 等级1-5
exports.changeCase = changeCase;
var checkPwd = function checkPwd(str) {
  var Lv = 1;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
};
// 在字符串中插入新字符串
exports.checkPwd = checkPwd;
var insertStr = function insertStr(soure, index, newStr) {
  var str = soure.slice(0, index) + newStr + soure.slice(index);
  return str;
};
// 16进制颜色值转RGBA字符串
exports.insertStr = insertStr;
var colorToRGB = function colorToRGB(val, opa) {
  var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
  var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

  if (!pattern.test(val)) {
    //如果值不符合规则返回空字符
    return '';
  }
  var v = val.replace(/#/, ''); //如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = '';
  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }
  rgbStr = rgbArr.join();
  rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
  return rgbStr;
};
exports.colorToRGB = colorToRGB;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 41:
/*!*************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 42));
var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 43));
var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 47));
var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 48));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 52));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 53));
var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 54));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 55));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 56));
var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 57));
var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 58));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 45));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 44));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 59));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 46));
var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 60));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 61));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 62));
var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 63));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 64));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 65);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 66));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 67));
var _addStyle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addStyle.js */ 68));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 69));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 70));
// 引入全局mixin

// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件

function wranning(str) {
  // 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {
    console.warn(str);
  }
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数

var $u = {
  queryParams: _queryParams.default,
  route: _route.default,
  timeFormat: _timeFormat.default,
  date: _timeFormat.default,
  // 另名date
  timeFrom: _timeFrom.default,
  colorGradient: _colorGradient.default.colorGradient,
  colorToRgba: _colorGradient.default.colorToRgba,
  guid: _guid.default,
  color: _color.default,
  sys: _sys.sys,
  os: _sys.os,
  type2icon: _type2icon.default,
  randomArray: _randomArray.default,
  wranning: wranning,
  get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default,
  // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  addStyle: _addStyle.default
};

// $u挂载到uni对象上
uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 417:
/*!********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/ljs-top/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default2 = {
  data: function data() {
    return {
      statusBarHeight: 0,
      // 状态按钮高度
      myback: {
        // 是否显示返回按钮
        show: true,
        // 是否显示返回按钮
        imgUrl: __webpack_require__(/*! ../../static/images/ico_back.png */ 418)
      },
      // top样式
      topStyle: {}
    };
  },
  props: {
    // 标题内容
    title: String,
    // 标题颜色
    titleColor: {
      type: String,
      default: '#FFFFFF'
    },
    // 返回按钮相关配置
    back: {
      type: Object,
      default: function _default() {
        return {
          // 是否显示返回按钮，默认显示
          show: true,
          // 返回按钮的图片地址
          imgUrl: __webpack_require__(/*! ../../static/images/ico_back.png */ 418)
        };
      }
    },
    // 开启背景图片，未开启，使用背景颜色，开启backgroundImage为必填项
    backgroundImageShow: {
      type: Boolean,
      default: false
    },
    // 背景颜色，支持渐变色，如：linear-gradient(to top right, #CDDC39, #8BC34A, #FFEB3B);
    backgroundColor: {
      type: String,
      default: '#004799'
    },
    // 背景图片地址，使用前需配置backgroundImageShow为true。
    backgroundImage: String,
    // 高度（除状态栏）
    topHeight: {
      type: Number,
      default: 108
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    goBack: function goBack() {
      uni.navigateBack();
    },
    init: function init() {
      this.statusBarHeight = this.getSysInfo().statusBarHeight;
      for (var key in this.back) {
        this.myback[key] = this.back[key];
      }
    },
    getSysInfo: function getSysInfo() {
      return uni.getSystemInfoSync();
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 418:
/*!*******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/static/images/ico_back.png ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmZjZDFmMS04MzM2LWE5NDMtODY4MC01NTM5NmZhODQzMmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjNDRUQ2RjJCNDQ4MTFFREE5REU4MzAzOUM0NzJGOTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjNDRUQ2RjFCNDQ4MTFFREE5REU4MzAzOUM0NzJGOTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmZmY2QxZjEtODMzNi1hOTQzLTg2ODAtNTUzOTZmYTg0MzJlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZmZmNkMWYxLTgzMzYtYTk0My04NjgwLTU1Mzk2ZmE4NDMyZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq6FkCUAAAErSURBVHja7NpBDsIgEAXQjvEc3sC1W28GHsUruPEIXsLEjZ4DIWmiaWxty0iZ75+EkLCgvJSGASohhAY5Vg14EEgggQQSSOA/A9daHYlIdh8xq9rFahPLJZa7ysBSqqZRFMbhwytOauOqAdjBpbhpjWvxbzDhYuU6zUfNByz2Bj+8udCCG/NTdAhnHvgNZxo4BmcWOBZnEjgFZw44FWcK2INzxZavXwLn4kwAc3DVA3NxVQM1cNUCtXBVAucsBSWA8EcWJaaoh5iiOVkLyjLhYYAaSMupmocB5iARtksOBjgHiXRk4WCAU5CIx4YOBjgGCXH5MoSEuV3qWyfRr88eUPtBEUmZzeGt6azWt9bPeEpX2PtYbVvgtSog/7IgkEACCSSQQAKLx1OAAQC3zNidKkNOVAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 42:
/*!************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/mixin/mixin.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {
      var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this2 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 43:
/*!**************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/request/index.js ***!
  \**************************************************************************************************************************/
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
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 44));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 46));
var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0, _classCallCheck2.default)(this, Request);
    this.config = {
      baseUrl: '',
      // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true,
      // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800,
      // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null,
      // 定时器
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null
    };

    // get请求
    this.get = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        method: 'GET',
        url: url,
        header: header,
        data: data
      });
    };

    // post请求
    this.post = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'POST',
        header: header,
        data: data
      });
    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data
      });
    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data
      });
    };
  }
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value:
    // 设置全局默认配置
    function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, {
    key: "request",
    value: function request() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this2.config.timer);
          _this2.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this2.config.originalData) {
            // 判断是否存在拦截器
            if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
              var resInterceptors = _this2.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
                var _resInterceptors = _this2.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this2.config.baseUrl + (options.url.indexOf('/') == 0 ? options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this2.config.showLoading && !_this2.config.timer) {
          _this2.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this2.config.loadingText,
              mask: _this2.config.loadingMask
            });
            _this2.config.timer = null;
          }, _this2.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    }
  }]);
  return Request;
}();
var _default = new Request();
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 433:
/*!********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [{
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087
  }, {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057
  }, {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086
  }, {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084
  }, {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085
  }, {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083
  }, {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078
  }, {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079
  }, {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080
  }, {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081
  }, {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082
  }, {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072
  }, {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073
  }, {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074
  }, {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075
  }, {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076
  }, {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077
  }, {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071
  }, {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055
  }, {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037
  }, {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032
  }, {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065
  }, {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961
  }, {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986
  }, {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059
  }, {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060
  }, {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953
  }, {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058
  }, {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056
  }, {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052
  }, {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053
  }, {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054
  }, {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011
  }, {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016
  }, {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023
  }, {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040
  }, {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041
  }, {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042
  }, {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043
  }, {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044
  }, {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045
  }, {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046
  }, {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047
  }, {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048
  }, {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049
  }, {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050
  }, {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051
  }, {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033
  }, {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034
  }, {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035
  }, {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036
  }, {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038
  }, {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039
  }, {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026
  }, {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027
  }, {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028
  }, {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029
  }, {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030
  }, {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031
  }, {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022
  }, {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024
  }, {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025
  }, {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007
  }, {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008
  }, {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009
  }, {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010
  }, {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012
  }, {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013
  }, {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014
  }, {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015
  }, {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017
  }, {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018
  }, {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019
  }, {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020
  }, {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021
  }, {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001
  }, {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002
  }, {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003
  }, {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004
  }, {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005
  }, {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006
  }, {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988
  }, {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989
  }, {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990
  }, {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991
  }, {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992
  }, {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993
  }, {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994
  }, {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995
  }, {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996
  }, {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997
  }, {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998
  }, {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999
  }, {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000
  }, {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984
  }, {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985
  }, {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987
  }, {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968
  }, {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969
  }, {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970
  }, {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971
  }, {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972
  }, {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973
  }, {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974
  }, {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975
  }, {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976
  }, {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977
  }, {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978
  }, {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979
  }, {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980
  }, {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981
  }, {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982
  }, {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983
  }, {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966
  }, {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967
  }, {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949
  }, {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950
  }, {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951
  }, {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952
  }, {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954
  }, {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955
  }, {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956
  }, {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957
  }, {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958
  }, {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959
  }, {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960
  }, {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962
  }, {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963
  }, {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964
  }, {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965
  }, {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948
  }, {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938
  }, {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940
  }, {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941
  }, {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942
  }, {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943
  }, {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945
  }, {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947
  }, {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937
  }, {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931
  }, {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930
  }, {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922
  }, {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919
  }, {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921
  }, {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923
  }, {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924
  }, {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927
  }, {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928
  }, {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929
  }]
};
exports.default = _default;

/***/ }),

/***/ 44:
/*!*******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/deepMerge.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 45));
// JS对象深度合并
function deepMerge() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if ((0, _typeof2.default)(target) !== 'object' || (0, _typeof2.default)(source) !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if ((0, _typeof2.default)(target[prop]) !== 'object') {
        target[prop] = source[prop];
      } else {
        if ((0, _typeof2.default)(source[prop]) !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
var _default = deepMerge;
exports.default = _default;

/***/ }),

/***/ 441:
/*!***********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/components/u-textarea/props.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    // 输入框的内容
    value: {
      type: [String, Number],
      default: uni.$u.props.textarea.value
    },
    // 输入框为空时占位符
    placeholder: {
      type: [String, Number],
      default: uni.$u.props.textarea.placeholder
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: uni.$u.props.input.placeholderClass
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: uni.$u.props.input.placeholderStyle
    },
    // 输入框高度
    height: {
      type: [String, Number],
      default: uni.$u.props.textarea.height
    },
    // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
    confirmType: {
      type: String,
      default: uni.$u.props.textarea.confirmType
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: uni.$u.props.textarea.disabled
    },
    // 是否显示统计字数
    count: {
      type: Boolean,
      default: uni.$u.props.textarea.count
    },
    // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
    focus: {
      type: Boolean,
      default: uni.$u.props.textarea.focus
    },
    // 是否自动增加高度
    autoHeight: {
      type: Boolean,
      default: uni.$u.props.textarea.autoHeight
    },
    // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
    fixed: {
      type: Boolean,
      default: uni.$u.props.textarea.fixed
    },
    // 指定光标与键盘的距离
    cursorSpacing: {
      type: Number,
      default: uni.$u.props.textarea.cursorSpacing
    },
    // 指定focus时的光标位置
    cursor: {
      type: [String, Number],
      default: uni.$u.props.textarea.cursor
    },
    // 是否显示键盘上方带有”完成“按钮那一栏，
    showConfirmBar: {
      type: Boolean,
      default: uni.$u.props.textarea.showConfirmBar
    },
    // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
    selectionStart: {
      type: Number,
      default: uni.$u.props.textarea.selectionStart
    },
    // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
    selectionEnd: {
      type: Number,
      default: uni.$u.props.textarea.selectionEnd
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: uni.$u.props.textarea.adjustPosition
    },
    // 是否去掉 iOS 下的默认内边距，只微信小程序有效
    disableDefaultPadding: {
      type: Boolean,
      default: uni.$u.props.textarea.disableDefaultPadding
    },
    // focus时，点击页面的时候不收起键盘，只微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: uni.$u.props.textarea.holdKeyboard
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: uni.$u.props.textarea.maxlength
    },
    // 边框类型，surround-四周边框，bottom-底部边框
    border: {
      type: String,
      default: uni.$u.props.textarea.border
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: uni.$u.props.textarea.formatter
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 45:
/*!*******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/deepClone.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 46:
/*!**************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/test.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
 * 是否函数方法
 * @param {Object} value
 */
function func(value) {
  return typeof value === 'function';
}

/**
 * 是否promise对象
 * @param {Object} value
 */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
 * @param {Object} value
 */
function image(value) {
  var newValue = value.split('?')[0];
  return new RegExp(/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)$/).test(newValue);
}

/**
 * 是否视频格式
 * @param {Object} value
 */
function video(value) {
  var newValue = value.split('?')[0];
  return new RegExp(/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|3gp)$/).test(newValue);
}

/**
 * 是否为正则对象
 * @param {Object}
 * @return {Boolean}
 */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}

/**
 * 验证字符串
 */
function string(value) {
  return typeof value === 'string';
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code,
  func: func,
  promise: promise,
  video: video,
  image: image,
  regExp: regExp,
  string: string
};
exports.default = _default;

/***/ }),

/***/ 47:
/*!*********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/queryParams.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
      }
    } else {
      _result.push(key + '=' + value);
    }
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}
var _default = queryParams;
exports.default = _default;

/***/ }),

/***/ 48:
/*!***************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/route.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 49));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 51));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: 'pop-in',
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  (0, _createClass2.default)(Router, [{
    key: "addRootPath",
    value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, {
    key: "mixinParam",
    value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, {
    key: "route",
    value: function () {
      var _route = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var options,
          params,
          mergeConfig,
          isNext,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};
                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }
                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {
                  _context.next = 14;
                  break;
                }
                _context.next = 10;
                return new Promise(function (resolve, reject) {
                  uni.$u.routeIntercept(mergeConfig, resolve);
                });
              case 10:
                isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);
                _context.next = 15;
                break;
              case 14:
                this.openPage(mergeConfig);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function route() {
        return _route.apply(this, arguments);
      }
      return route;
    }() // 执行路由跳转
  }, {
    key: "openPage",
    value: function openPage(config) {
      // 解构参数
      var url = config.url,
        type = config.type,
        delta = config.delta,
        animationType = config.animationType,
        animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration
        });
      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url
        });
      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url
        });
      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url
        });
      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta
        });
      }
    }
  }]);
  return Router;
}();
var _default = new Router().route;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 481:
/*!*********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/util/async-validator.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapp_demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}) && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }
    return str;
  }
  return f;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((0, _typeof2.default)(value) === 'object' && (0, _typeof2.default)(target[s]) === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && (0, _typeof2.default)(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject;
      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : (0, _typeof2.default)(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((0, _typeof2.default)(rules) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc() {};
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof2.default)(rule.fields) === 'object' || (0, _typeof2.default)(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
var _default = Schema;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 482)))

/***/ }),

/***/ 482:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 483);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 483:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 482)))

/***/ }),

/***/ 49:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 50)();
module.exports = runtime;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 51:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 52:
/*!********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/timeFormat.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length,
      times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var _default = timeFormat;
exports.default = _default;

/***/ }),

/***/ 53:
/*!******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/timeFrom.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 52));
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));
  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }
  }
  return tips;
}
var _default = timeFrom;
exports.default = _default;

/***/ }),

/***/ 54:
/*!***********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/colorGradient.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];
  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB * i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {
      return Number(val);
    });
  } else {
    return sColor;
  }
}
;

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else {
    return sColor;
  }
}
var _default = {
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba
};
exports.default = _default;

/***/ }),

/***/ 55:
/*!**************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/guid.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = guid;
exports.default = _default;

/***/ }),

/***/ 56:
/*!***************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/color.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",
  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",
  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var _default = color;
exports.default = _default;

/***/ }),

/***/ 57:
/*!*******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/type2icon.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
  var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';
  }
  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}
var _default = type2icon;
exports.default = _default;

/***/ }),

/***/ 575:
/*!************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/hic-video-player/utils/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareVersion = compareVersion;
exports.debounce = debounce;
exports.getExt = getExt;
exports.getSystemInfo = getSystemInfo;
exports.getSystemInfoSync = getSystemInfoSync;
var systemInfo = null; // 系统信息

/**
 * @description 封装 uni.getSystemInfo 异步获取系统信息
 */
function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    if (systemInfo) {
      return resolve(systemInfo);
    }
    uni.getSystemInfo({
      success: function success(res) {
        systemInfo = res;
        resolve(res);
      },
      fail: reject
    });
  });
}

/**
 * @description 封装 uni.getSystemInfoSync 同步获取系统信息
 */
function getSystemInfoSync() {
  var res = uni.getSystemInfoSync();
  systemInfo = res;
  return res;
}

/**
 * @description 版本号比较
 * @param {String} v1
 * @param {String} v2
 * @return {Boolean} v2 大于 v1 返回true, 否则返回false
 * compareVersion('1.9.9', '1.11.0'); // true
 */
function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);
    if (num1 < num2) {
      return true;
    } else if (num1 > num2) {
      return false;
    }
  }
  return false;
}

/**
 * 防抖 debounce
 * 栗子：实时搜索，拖拽
 */
function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timer;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
}

/**
 * 获取扩展名
 * @param {String} url 视频播放地址
 */
function getExt(url) {
  var index = url.indexOf('?');
  if (index != -1) {
    url = url.substring(0, index);
  }
  var ext = '';
  var reg = /.+\./;
  ext = url.replace(reg, '').toLowerCase();
  return ext;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 58:
/*!*********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/randomArray.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 打乱数组
function randomArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}
var _default = randomArray;
exports.default = _default;

/***/ }),

/***/ 59:
/*!*****************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/addUnit.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUnit;
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 46));
// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!****************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/random.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var _default = random;
exports.default = _default;

/***/ }),

/***/ 604:
/*!*****************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/SignaturePad/signature.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    // console.log(opts);
    this.lineColor = opts.lineColor || '#1A1A1A'; // 颜色
    this.slideValue = opts.slideValue || 50;
    this.canvasName = opts.canvasName || 'handWriting';
    this.ctx = opts.ctx;
    this.init();
  }
  (0, _createClass2.default)(Handwriting, [{
    key: "init",
    value: function init() {
      this.selectSlideValue(this.slideValue);
    }
  }, {
    key: "setSize",
    value: function setSize(rect) {
      this.canvasWidth = rect.width;
      this.canvasHeight = rect.height;
    }

    // 笔迹开始
  }, {
    key: "uploadScaleStart",
    value: function uploadScaleStart(event) {
      // console.log('start');
      var e = event.mp;
      // console.log(e.touches[0])
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
      // console.log('move');
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
      // console.log(e);
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
  }, {
    key: "clear",
    value: function clear() {
      this.linePrack = [];
      this.currentLine = [];
      this.retDraw();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.linePrack.length === 0;
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
  }]);
  return Handwriting;
}();
var _default = Handwriting;
exports.default = _default;

/***/ }),

/***/ 61:
/*!**************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/trim.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var _default = trim;
exports.default = _default;

/***/ }),

/***/ 62:
/*!***************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/toast.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  });
}
var _default = toast;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 63:
/*!*******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/getParent.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParent;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return {
          v: data
        };
      }();
      if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
    }
  }
  return {};
}

/***/ }),

/***/ 64:
/*!*****************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/$parent.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 649:
/*!*********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/hic-video-player/utils/autoFullScreen.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offDirectionChange = offDirectionChange;
exports.onDirectionChange = onDirectionChange;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 加速度计
 * 监听设备方向 (专业术语是什么啊...? T^T)
 * 
 * 仿...$on $off
 * 记录注册的回调事件
 * 放数组
 */

// 是否在监听
var isListen = false;
// 记录回调函数
var callbackList = [];
var accX, accY, accZ;

// 设备之前的方向
var oldDirection = -1;

/**
 * 监听设备方向变化
 * @param {Function} callback 方向变化的回调函数
 * 	callback 返回参数: 0-正常竖向, 90-屏幕逆时针90度, -90-屏幕顺时针90度
 */
function onDirectionChange(callback) {
  if (!(0, _typeof2.default)(callback) === 'function') {
    // callback.constructor === Function (判断是否函数)
    throw new Error('callback is not a function');
  }
  // 记录回调函数
  var index = callbackList.findIndex(function (cb) {
    return cb === callback;
  });
  if (index === -1) {
    callbackList.push(callback);
  }
  if (isListen) {
    return;
  }
  uni.onAccelerometerChange(function (res) {
    var x = res.x,
      y = res.y,
      z = res.z;
    accX = x, accY = y, accZ = z;
    // console.log('--- 加速度计 --->', { x: x.toFixed(1), y: y.toFixed(1), z: z.toFixed(1) });
    /**
     * 竖屏: y <= -0.9
     * 		requestFullScreen direction = 0
     * 横屏: x 绝对值 >= 0.9
     * 		x <= -0.9 屏幕朝左 -> direction =  90
     * 		x >=  0.9 屏幕朝右 -> direction = -90
     */
    var direction = -1;
    if (y <= -0.6) {
      direction = 0;
    } else if (x <= -0.6) {
      direction = 90;
    } else if (x >= 0.6) {
      direction = -90;
    }
    if (direction !== -1 && oldDirection != direction) {
      // (竖屏 || 横屏) && 方向变化 => 调用 callback 通知出去
      callbackList.forEach(function (cb) {
        cb(direction);
      });
    }
    oldDirection = direction;
  });
  // 开始监听
  startAccelerometer();
}

/**
 * 取消监听设备方向变化
 * @param {Function} callback
 */
function offDirectionChange(callback) {
  var stop = false;
  if (typeof callback === 'function') {
    var index = callbackList.findIndex(function (cb) {
      return cb === callback;
    });
    if (index !== -1) {
      callbackList.splice(index, 1);
    }
  } else {
    stop = true;
  }
  if (callbackList.length === 0) {
    stop = true;
  }
  if (stop && isListen) {
    // 没有传参callback || list数组为空 -> 取消监听
    uni.offAccelerometerChange(function (res) {
      console.log('加速度计取消监听', res);
    });
    // 停止监听
    stopAccelerometer();
  }
}

/**
 * @description 开始监听加速度数据
 * 封装 uni.startAccelerometer(OBJECT)
 */
function startAccelerometer() {
  return new Promise(function (resolve, reject) {
    uni.startAccelerometer({
      interval: 'normal',
      // 'game','normal','ui'
      success: function success(res) {
        console.log(res);
        resolve();
      },
      fail: function fail(err) {
        console.log(err);
        reject();
      }
    });
  });
}

/**
 * @description 停止监听加速度数据
 * 封装 uni.stopAccelerometer(OBJECT)
 */
function stopAccelerometer() {
  return new Promise(function (resolve, reject) {
    uni.stopAccelerometer({
      success: function success(res) {
        console.log(res);
        resolve();
      },
      fail: function fail(err) {
        console.log(err);
        reject();
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 65:
/*!*************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/sys.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
exports.sys = sys;
function os() {
  return uni.getSystemInfoSync().platform;
}
;
function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 66:
/*!******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/debounce.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 67:
/*!******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/throttle.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeoutArr = [];
var flagArr = [];
/**
 * 节流函数
 * 节流原理：在一定时间内，只能触发一次
 * @param {Function} fn 要执行的回调函数 
 * @param {Number} time 延时的时间
 * @param {Boolean} isImmediate 是否立即执行
 * @param {String} timeoutName 定时器ID
 * @return null
 */
function throttle(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var isImmediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timeoutName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "default";
  if (!timeoutArr[timeoutName]) timeoutArr[timeoutName] = null;
  if (isImmediate) {
    if (!flagArr[timeoutName]) {
      flagArr[timeoutName] = true;
      // 如果是立即执行，则在time毫秒内开始时执行
      if (typeof fn === 'function') fn();
      timeoutArr[timeoutName] = setTimeout(function () {
        flagArr[timeoutName] = false;
      }, time);
    }
  } else {
    if (!flagArr[timeoutName]) {
      flagArr[timeoutName] = true;
      // 如果是非立即执行，则在time毫秒内的结束处执行
      timeoutArr[timeoutName] = setTimeout(function () {
        flagArr[timeoutName] = false;
        if (typeof fn === 'function') fn();
      }, time);
    }
  }
}
;
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 671:
/*!****************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 68:
/*!******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/function/addStyle.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 46));
/**
 * @description 样式转换
 * 对象转字符串，或者字符串转对象
 * @param {object | string} customStyle 需要转换的目标
 * @param {String} target 转换的目的，object-转为对象，string-转为字符串
 * @returns {object|string}
 */
function addStyle(customStyle) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if (_test.default.empty(customStyle) || (0, _typeof2.default)(customStyle) === 'object' && target === 'object' || target === 'string' && typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i], ";");
  }
  // 去除两端空格
  return trim(string);
}
var _default = addStyle;
exports.default = _default;

/***/ }),

/***/ 69:
/*!**************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/config/config.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 第一版 1.10.1 版本发布于2021-11-18
var version = '1.10.1';
var _default = {
  v: version,
  version: version,
  // 主题名称
  type: ['primary', 'success', 'info', 'error', 'warning']
};
exports.default = _default;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 70:
/*!**************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/uni_modules/vk-uview-ui/libs/config/zIndex.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */
var _default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};
exports.default = _default;

/***/ }),

/***/ 71:
/*!******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/mixins/app.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 49));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 51));
var _vuex = __webpack_require__(/*! vuex */ 34);
var _wechath = _interopRequireDefault(__webpack_require__(/*! @/utils/wechath5 */ 72));
var _tools = __webpack_require__(/*! @/utils/tools */ 40);
var _cache = _interopRequireDefault(__webpack_require__(/*! @/utils/cache */ 38));
var _color = _interopRequireDefault(__webpack_require__(/*! @/config/color */ 73));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      colorConfig: _color.default
    };
  },
  onLoad: function onLoad(option) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {},
  computed: _objectSpread({}, (0, _vuex.mapGetters)(['isLogin'])),
  // 全局配置分享
  onShareAppMessage: function onShareAppMessage() {
    var _this$appConfig$share = this.appConfig.share,
      h5_share_image = _this$appConfig$share.h5_share_image,
      share_intro = _this$appConfig$share.share_intro,
      share_title = _this$appConfig$share.share_title,
      mnp_share_title = _this$appConfig$share.mnp_share_title,
      mnp_share_image = _this$appConfig$share.mnp_share_image;
    var share = {
      title: mnp_share_title,
      path: "/pages/index/index?invite_code=".concat(this.inviteCode),
      imageUrl: mnp_share_image
    };
    return share;
  },
  onShareTimeline: function onShareTimeline() {
    var _this$appConfig$share2 = this.appConfig.share,
      h5_share_image = _this$appConfig$share2.h5_share_image,
      share_intro = _this$appConfig$share2.share_intro,
      share_title = _this$appConfig$share2.share_title;
    var share = {
      title: mnp_share_title,
      imageUrl: mnp_share_image
    };
    return share;
  }
};
exports.default = _default;

/***/ }),

/***/ 72:
/*!**********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/utils/wechath5.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 73:
/*!********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/config/color.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var color = {
  //主题色
  primary: '#FF2C3C',
  //主要边框颜色
  border: '#E5E5E5',
  //黑色
  black: '#101010',
  //字体主色
  normal: '#333333',
  //白色
  white: '#ffffff',
  //字体浅色
  lighter: '#666666',
  //字体更浅色
  muted: '#999999',
  //背景色
  body: '#F6F6F6'
};
var _default = color;
exports.default = _default;

/***/ }),

/***/ 74:
/*!**************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/router.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RouterMount", {
  enumerable: true,
  get: function get() {
    return _uniSimpleRouter.RouterMount;
  }
});
exports.router = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _uniSimpleRouter = __webpack_require__(/*! ./js_sdk/uni-simple-router */ 75);
var _cachekey = __webpack_require__(/*! ./config/cachekey */ 37);
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 33));
var _cache = _interopRequireDefault(__webpack_require__(/*! ./utils/cache */ 38));
var _wechath = _interopRequireDefault(__webpack_require__(/*! ./utils/wechath5 */ 72));
var _tools = __webpack_require__(/*! ./utils/tools */ 40);
var scrollInfo = {};
var first = null;
var whiteList = ['register', 'login', 'forget_pwd'];
var router = (0, _uniSimpleRouter.createRouter)({
  platform: "mp-weixin",
  APP: {
    animation: {}
  },
  h5: {
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
      var XY = scrollInfo[to.name];
      if (XY) return XY;
      return {
        x: 0,
        y: 0
      };
    }
  },
  routerErrorEach: function routerErrorEach(_ref) {
    var type = _ref.type,
      msg = _ref.msg;
    router.$lockStatus = false;
  },
  debugger: false,
  routes: [].concat((0, _toConsumableArray2.default)([{"path":"/pages/index/index","aliasPath":"/"},{"path":"/pages/text_auto/text_auto"},{"path":"/pages/message/message"},{"path":"/pages/user/user"},{"path":"/pages/server_explan/server_explan"},{"path":"/pages/login/login"},{"path":"/pages/register/register"},{"path":"/pages/location/location"},{"path":"/bundle/pages/user_intro/user_intro"},{"path":"/bundle/pages/mescroll_swiper/mescroll_swiper"},{"path":"/bundle/pages/nurse_order/nurse_order"},{"path":"/bundle/pages/service_order/service_order"},{"path":"/bundle/pages/form_page/form_page"},{"path":"/bundle/pages/upload_img/upload_img"},{"path":"/bundle/pages/list_input/list_input"},{"path":"/bundle/pages/appraise_form/appraise_form"},{"path":"/bundle/pages/header_footer/header_footer"},{"path":"/bundle/pages/take_photo/take_photo"},{"path":"/bundle/pages/take_photo/take_images"},{"path":"/bundle/pages/tag_page/tag-page"},{"path":"/bundle/pages/files_upload/files_upload"},{"path":"/bundle/pages/pop_box/pop_box"},{"path":"/bundle/pages/card_list/card_list"},{"path":"/bundle/pages/video_player/video_player"},{"path":"/bundle/pages/native_video/native_video"},{"path":"/bundle/pages/video_live/video_live"},{"path":"/bundle/pages/action_sheet/action_sheet"},{"path":"/bundle/pages/nurse_auth/nurse_auth"},{"path":"/bundle/pages/sign_page/landscape_sign"},{"path":"/bundle/pages/sign_page/vertical_sign"}]), [{
    path: '*',
    redirect: function redirect(to) {
      return {
        name: '404'
      };
    }
  }])
});
exports.router = router;
console.log(router);
var count = 0;
router.beforeEach(function (to, from, next) {
  console.log(to, from, 'beforeEach---开始跳转');
  var index = whiteList.findIndex(function (item) {
    return from.path.includes(item);
  });
  if (index == -1 && !_store.default.getters.token) {
    _cache.default.set(_cachekey.BACK_URL, from.fullPath);
  }
  if (to.meta.auth && !_store.default.getters.token) {
    next('/pages/login/login');
    return;
  } else {
    next();
  }
});
router.afterEach(function (to, from, next) {});

/***/ }),

/***/ 75:
/*!**************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/uni-simple-router/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(self, function () {
  return e = {
    779: function _(e, t, r) {
      var o = r(173);
      e.exports = function e(t, r, n) {
        return o(r) || (n = r || n, r = []), n = n || {}, t instanceof RegExp ? function (e, t) {
          var r = e.source.match(/\((?!\?)/g);
          if (r) for (var o = 0; o < r.length; o++) {
            t.push({
              name: o,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null
            });
          }
          return c(e, t);
        }(t, r) : o(t) ? function (t, r, o) {
          for (var n = [], a = 0; a < t.length; a++) {
            n.push(e(t[a], r, o).source);
          }
          return c(new RegExp("(?:" + n.join("|") + ")", s(o)), r);
        }(t, r, n) : function (e, t, r) {
          return f(a(e, r), t, r);
        }(t, r, n);
      }, e.exports.parse = a, e.exports.compile = function (e, t) {
        return u(a(e, t), t);
      }, e.exports.tokensToFunction = u, e.exports.tokensToRegExp = f;
      var n = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
      function a(e, t) {
        for (var r, o = [], a = 0, i = 0, u = "", c = t && t.delimiter || "/"; null != (r = n.exec(e));) {
          var s = r[0],
            f = r[1],
            h = r.index;
          if (u += e.slice(i, h), i = h + s.length, f) u += f[1];else {
            var v = e[i],
              y = r[2],
              g = r[3],
              d = r[4],
              m = r[5],
              b = r[6],
              O = r[7];
            u && (o.push(u), u = "");
            var P = null != y && null != v && v !== y,
              k = "+" === b || "*" === b,
              j = "?" === b || "*" === b,
              w = r[2] || c,
              R = d || m;
            o.push({
              name: g || a++,
              prefix: y || "",
              delimiter: w,
              optional: j,
              repeat: k,
              partial: P,
              asterisk: !!O,
              pattern: R ? p(R) : O ? ".*" : "[^" + l(w) + "]+?"
            });
          }
        }
        return i < e.length && (u += e.substr(i)), u && o.push(u), o;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function u(e, t) {
        for (var r = new Array(e.length), n = 0; n < e.length; n++) {
          "object" == _typeof(e[n]) && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", s(t)));
        }
        return function (t, n) {
          for (var a = "", u = t || {}, l = (n || {}).pretty ? i : encodeURIComponent, p = 0; p < e.length; p++) {
            var c = e[p];
            if ("string" != typeof c) {
              var s,
                f = u[c.name];
              if (null == f) {
                if (c.optional) {
                  c.partial && (a += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (o(f)) {
                if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                if (0 === f.length) {
                  if (c.optional) continue;
                  throw new TypeError('Expected "' + c.name + '" to not be empty');
                }
                for (var h = 0; h < f.length; h++) {
                  if (s = l(f[h]), !r[p].test(s)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(s) + "`");
                  a += (0 === h ? c.prefix : c.delimiter) + s;
                }
              } else {
                if (s = c.asterisk ? encodeURI(f).replace(/[?#]/g, function (e) {
                  return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                }) : l(f), !r[p].test(s)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + s + '"');
                a += c.prefix + s;
              }
            } else a += c;
          }
          return a;
        };
      }
      function l(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function p(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return e.keys = t, e;
      }
      function s(e) {
        return e && e.sensitive ? "" : "i";
      }
      function f(e, t, r) {
        o(t) || (r = t || r, t = []);
        for (var n = (r = r || {}).strict, a = !1 !== r.end, i = "", u = 0; u < e.length; u++) {
          var p = e[u];
          if ("string" == typeof p) i += l(p);else {
            var f = l(p.prefix),
              h = "(?:" + p.pattern + ")";
            t.push(p), p.repeat && (h += "(?:" + f + h + ")*"), i += h = p.optional ? p.partial ? f + "(" + h + ")?" : "(?:" + f + "(" + h + "))?" : f + "(" + h + ")";
          }
        }
        var v = l(r.delimiter || "/"),
          y = i.slice(-v.length) === v;
        return n || (i = (y ? i.slice(0, -v.length) : i) + "(?:" + v + "(?=$))?"), i += a ? "$" : n && y ? "" : "(?=" + v + "|$)", c(new RegExp("^" + i, s(r)), t);
      }
    },
    173: function _(e) {
      e.exports = Array.isArray || function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
    },
    844: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.buildVueRouter = t.buildVueRoutes = void 0;
      var n = r(366),
        a = r(883),
        i = r(789),
        u = r(169);
      t.buildVueRoutes = function (e, t) {
        for (var r = e.routesMap, o = r.pathMap, l = r.finallyPathList, p = Object.keys(t), c = 0; c < p.length; c++) {
          var s = p[c],
            f = o[s],
            h = t[s];
          if (f) {
            var v = i.getRoutePath(f, e).finallyPath;
            if (v instanceof Array) throw new Error("非 vueRouterDev 模式下，alias、aliasPath、path 无法提供数组类型！ " + JSON.stringify(f));
            null != f.name && (h.name = f.name);
            var y = h.path,
              g = h.alias;
            delete h.alias, h.path = v, "/" === y && null != g && (h.alias = g, h.path = y), f.beforeEnter && (h.beforeEnter = function (t, r, o) {
              u.onTriggerEachHook(t, r, e, n.hookToggle.enterHooks, o);
            });
          } else a.warn(s + " 路由地址在路由表中未找到，确定是否传递漏啦", e, !0);
        }
        return l.includes("*") && (t["*"] = o["*"]), t;
      }, t.buildVueRouter = function (e, t, r) {
        var n;
        n = "[object Array]" === i.getDataType(r) ? r : Object.values(r);
        var a = e.options.h5,
          u = a.scrollBehavior,
          l = a.fallback,
          p = t.options.scrollBehavior;
        t.options.scrollBehavior = function (e, t, r) {
          return p && p(e, t, r), u(e, t, r);
        }, t.fallback = l;
        var c = new t.constructor(o(o({}, e.options.h5), {
          base: t.options.base,
          mode: t.options.mode,
          routes: n
        }));
        t.matcher = c.matcher;
      };
    },
    147: function _(e, t) {
      "use strict";

      var _r,
        o = this && this.__extends || (_r = function r(e, t) {
          return (_r = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (e, t) {
            e.__proto__ = t;
          } || function (e, t) {
            for (var r in t) {
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
          })(e, t);
        }, function (e, t) {
          function o() {
            this.constructor = e;
          }
          _r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
        });
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.proxyH5Mount = t.proxyEachHook = t.MyArray = void 0;
      var n = function (e) {
        function t(r, o, n, a) {
          var i = e.call(this) || this;
          return i.router = r, i.vueEachArray = o, i.myEachHook = n, i.hookName = a, Object.setPrototypeOf(i, t.prototype), i;
        }
        return o(t, e), t.prototype.push = function (e) {
          var t = this;
          this.vueEachArray.push(e);
          var r = this.length;
          this[this.length] = function (e, o, n) {
            r > 0 ? t.vueEachArray[r](e, o, function () {
              n && n();
            }) : t.myEachHook(e, o, function (a) {
              !1 === a ? n(!1) : t.vueEachArray[r](e, o, function (e) {
                n(a);
              });
            }, t.router, !0);
          };
        }, t;
      }(Array);
      t.MyArray = n, t.proxyEachHook = function (e, t) {
        for (var r = ["beforeHooks", "afterHooks"], o = 0; o < r.length; o++) {
          var a = r[o],
            i = e.lifeCycle[a][0];
          if (i) {
            var u = t[a];
            t[a] = new n(e, u, i, a);
          }
        }
      }, t.proxyH5Mount = function (e) {
        var t;
        if (0 === e.mount.length) {
          if (null === (t = e.options.h5) || void 0 === t ? void 0 : t.vueRouterDev) return;
          navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && setTimeout(function () {
            if (document.getElementsByTagName("uni-page").length > 0) return !1;
            window.location.reload();
          }, 0);
        } else e.mount[0].app.$mount(), e.mount = [];
      };
    },
    814: function _(e, t) {
      "use strict";

      var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.runtimeQuit = t.registerLoddingPage = void 0;
      var o = null;
      t.registerLoddingPage = function (e) {
        if (e.options.registerLoadingPage) {
          var t = e.options.APP,
            o = t.loadingPageHook,
            n = t.loadingPageStyle;
          o(new plus.nativeObj.View("router-loadding", r({
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%"
          }, n())));
        }
      }, t.runtimeQuit = function (e) {
        void 0 === e && (e = "再按一次退出应用");
        var t = +new Date();
        o ? t - o < 1e3 && plus.runtime.quit() : (o = t, uni.showToast({
          title: e,
          icon: "none",
          position: "bottom",
          duration: 1e3
        }), setTimeout(function () {
          o = null;
        }, 1e3));
      };
    },
    334: function _(e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getEnterPath = void 0, t.getEnterPath = function (e, t) {
        switch (t.options.platform) {
          case "mp-alipay":
          case "mp-weixin":
          case "mp-toutiao":
          case "mp-qq":
            return e.$options.mpInstance.route;
          case "mp-baidu":
            return e.$options.mpInstance.is || e.$options.mpInstance.pageinstance.route;
        }
        return e.$options.mpInstance.route;
      };
    },
    282: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
          return (o = Object.assign || function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++) {
              for (var n in t = arguments[r]) {
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
            }
            return e;
          }).apply(this, arguments);
        },
        n = this && this.__rest || function (e, t) {
          var r = {};
          for (var o in e) {
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
          }
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
              t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
            }
          }
          return r;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.notCallProxyHook = t.proxyVueSortHookName = t.indexProxyHook = t.appProxyHook = t.lifeCycle = t.baseConfig = t.mpPlatformReg = t.keyword = void 0;
      var a = r(883),
        i = r(789);
      t.keyword = ["query"], t.mpPlatformReg = "(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)", t.baseConfig = {
        h5: {
          paramsToQuery: !1,
          vueRouterDev: !1,
          vueNext: !1,
          mode: "hash",
          base: "/",
          linkActiveClass: "router-link-active",
          linkExactActiveClass: "router-link-exact-active",
          scrollBehavior: function scrollBehavior(e, t, r) {
            return {
              x: 0,
              y: 0
            };
          },
          fallback: !0
        },
        APP: {
          registerLoadingPage: !0,
          loadingPageStyle: function loadingPageStyle() {
            return JSON.parse('{"backgroundColor":"#FFF"}');
          },
          loadingPageHook: function loadingPageHook(e) {
            e.show();
          },
          launchedHook: function launchedHook() {
            plus.navigator.closeSplashscreen();
          },
          animation: {}
        },
        applet: {
          animationDuration: 300
        },
        platform: "h5",
        keepUniOriginNav: !1,
        debugger: !1,
        routerBeforeEach: function routerBeforeEach(e, t, r) {
          r();
        },
        routerAfterEach: function routerAfterEach(e, t) {},
        routerErrorEach: function routerErrorEach(e, t) {
          t.$lockStatus = !1, a.err(e, t, !0);
        },
        detectBeforeLock: function detectBeforeLock(e, t, r) {},
        routes: [{
          path: "/choose-location"
        }, {
          path: "/open-location"
        }, {
          path: "/preview-image"
        }]
      }, t.lifeCycle = {
        beforeHooks: [],
        afterHooks: [],
        routerBeforeHooks: [],
        routerAfterHooks: [],
        routerErrorHooks: []
      }, t.appProxyHook = {
        app: {
          created: [],
          beforeMount: [],
          mounted: [],
          onLaunch: [],
          onShow: [],
          onHide: [],
          beforeDestroy: [],
          destroyed: []
        }
      }, t.indexProxyHook = {
        app: t.appProxyHook.app,
        page: function (e) {
          e.onLaunch;
          var t = n(e, ["onLaunch"]);
          return o(o({}, t), {
            onLoad: [],
            onReady: [],
            onUnload: [],
            onResize: []
          });
        }(i.copyData(t.appProxyHook.app)),
        component: []
      }, t.proxyVueSortHookName = {
        app: ["created", "beforeMount", "mounted", "onLaunch", "onShow", "onHide", "beforeDestroy", "destroyed"],
        page: ["created", "beforeMount", "mounted", "onLoad", "onReady", "onShow", "onResize", "onHide", "beforeDestroy", "destroyed", "onUnload"],
        component: ["created", "beforeMount", "mounted", "beforeDestroy", "destroyed"]
      }, t.notCallProxyHook = ["onHide", "beforeDestroy", "destroyed", "destroyed", "onUnload", "onResize"];
    },
    801: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRouteMap = void 0;
      var o = r(883),
        n = r(789);
      t.createRouteMap = function (e, t) {
        var r = {
          finallyPathList: [],
          finallyPathMap: Object.create(null),
          aliasPathMap: Object.create(null),
          pathMap: Object.create(null),
          vueRouteMap: Object.create(null),
          nameMap: Object.create(null)
        };
        return t.forEach(function (t) {
          var a = n.getRoutePath(t, e),
            i = a.finallyPath,
            u = a.aliasPath,
            l = a.path;
          if (null == l) throw new Error("请提供一个完整的路由对象，包括以绝对路径开始的 ‘path’ 字符串 " + JSON.stringify(t));
          if (i instanceof Array && !e.options.h5.vueRouterDev && "h5" === e.options.platform) throw new Error("非 vueRouterDev 模式下，route.alias 目前无法提供数组类型！ " + JSON.stringify(t));
          var p = i,
            c = u;
          "h5" !== e.options.platform && 0 !== p.indexOf("/") && "*" !== l && o.warn("当前路由对象下，route：" + JSON.stringify(t) + " 是否缺少了前缀 ‘/’", e, !0), r.finallyPathMap[p] || (r.finallyPathMap[p] = t, r.aliasPathMap[c] = t, r.pathMap[l] = t, r.finallyPathList.push(p), null != t.name && (r.nameMap[t.name] = t));
        }), r;
      };
    },
    662: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.registerEachHooks = t.registerRouterHooks = t.registerHook = void 0;
      var o = r(366),
        n = r(169);
      function a(e, t) {
        e[0] = t;
      }
      t.registerHook = a, t.registerRouterHooks = function (e, t) {
        return a(e.routerBeforeHooks, function (e, r, o) {
          t.routerBeforeEach(e, r, o);
        }), a(e.routerAfterHooks, function (e, r) {
          t.routerAfterEach(e, r);
        }), a(e.routerErrorHooks, function (e, r) {
          t.routerErrorEach(e, r);
        }), e;
      }, t.registerEachHooks = function (e, t, r) {
        a(e.lifeCycle[t], function (e, a, i, u, l) {
          l ? n.onTriggerEachHook(e, a, u, o.hookToggle[t], i) : r(e, a, i);
        });
      };
    },
    460: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initMixins = t.getMixins = void 0;
      var n = r(801),
        a = r(844),
        i = r(147),
        u = r(814),
        l = r(845),
        p = r(890),
        c = r(789),
        s = r(334),
        f = r(282),
        h = !1,
        v = !1,
        y = {
          app: !1,
          page: ""
        };
      function g(e, t) {
        var r = t.options.platform;
        return new RegExp(f.mpPlatformReg, "g").test(r) && (r = "app-lets"), {
          h5: {
            beforeCreate: function beforeCreate() {
              var e;
              if (this.$options.router) {
                t.$route = this.$options.router;
                var r = [];
                (null === (e = t.options.h5) || void 0 === e ? void 0 : e.vueRouterDev) ? r = t.options.routes : (r = n.createRouteMap(t, this.$options.router.options.routes).finallyPathMap, t.routesMap.vueRouteMap = r, a.buildVueRoutes(t, r)), a.buildVueRouter(t, this.$options.router, r), i.proxyEachHook(t, this.$options.router);
              }
            }
          },
          "app-plus": {
            beforeCreate: function beforeCreate() {
              h || (h = !0, l.proxyPageHook(this, t, "appProxyHook", "app"), u.registerLoddingPage(t));
            }
          },
          "app-lets": {
            beforeCreate: function beforeCreate() {
              var e = this.$options.mpType;
              "component" !== e || v ? "component" !== e && (y[e] || ("page" === e ? (y[e] = s.getEnterPath(this, t), t.enterPath = y[e]) : y[e] = !0, l.proxyPageHook(this, t, "appletsProxyHook", e))) : c.assertParentChild(y.page, this) && l.proxyPageHook(this, t, "appletsProxyHook", e);
            },
            onLoad: function onLoad() {
              !v && c.assertParentChild(y.page, this) && (v = !0, p.forceGuardEach(t));
            }
          }
        }[r];
      }
      t.getMixins = g, t.initMixins = function (e, t) {
        var r = n.createRouteMap(t, t.options.routes);
        t.routesMap = r, e.mixin(o({}, g(0, t)));
      };
    },
    789: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
          return (o = Object.assign || function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++) {
              for (var n in t = arguments[r]) {
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
            }
            return e;
          }).apply(this, arguments);
        },
        n = this && this.__rest || function (e, t) {
          var r = {};
          for (var o in e) {
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
          }
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
              t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
            }
          }
          return r;
        },
        a = this && this.__spreadArrays || function () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) {
            e += arguments[t].length;
          }
          var o = Array(e),
            n = 0;
          for (t = 0; t < r; t++) {
            for (var a = arguments[t], i = 0, u = a.length; i < u; i++, n++) {
              o[n] = a[i];
            }
          }
          return o;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.resolveAbsolutePath = t.assertParentChild = t.reservedWord = t.resetPageHook = t.callHook = t.replaceHook = t.lockDetectWarn = t.deepClone = t.baseClone = t.assertDeepObject = t.paramsToQuery = t.forMatNextToFrom = t.urlToJson = t.getUniCachePage = t.copyData = t.getDataType = t.routesForMapRoute = t.notRouteTo404 = t.getWildcardRule = t.assertNewOptions = t.getRoutePath = t.notDeepClearNull = t.mergeConfig = t.timeOut = t.def = t.voidFun = void 0;
      var i = r(282),
        u = r(169),
        l = r(883),
        p = r(890),
        c = r(779);
      function s(e, t) {
        for (var r = Object.create(null), n = Object.keys(e).concat(["resolveQuery", "parseQuery"]), i = 0; i < n.length; i += 1) {
          var u = n[i];
          null != t[u] ? t[u].constructor === Object ? r[u] = o(o({}, e[u]), t[u]) : r[u] = "routes" === u ? a(e[u], t[u]) : t[u] : r[u] = e[u];
        }
        return r;
      }
      function f(e, t) {
        var r = e.aliasPath || e.alias || e.path;
        return "h5" !== t.options.platform && (r = e.path), {
          finallyPath: r,
          aliasPath: e.aliasPath || e.path,
          path: e.path,
          alias: e.alias
        };
      }
      function h(e, t) {
        var r = e.routesMap.finallyPathMap["*"];
        if (r) return r;
        throw t && u.ERRORHOOK[0](t, e), new Error("当前路由表匹配规则已全部匹配完成，未找到满足的匹配规则。你可以使用 '*' 通配符捕捉最后的异常");
      }
      function v(e) {
        return Object.prototype.toString.call(e);
      }
      function y(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function g(e, t) {
        for (var r = 0, o = Object.keys(e); r < o.length; r++) {
          var n = o[r],
            a = n;
          e[n] !== e && ("object" == _typeof(e[n]) ? (t[a] = "[object Array]" === v(e[n]) ? [] : {}, g(e[n], t[a])) : t[a] = e[n]);
        }
      }
      function d(e) {
        var t = "[object Array]" === v(e) ? [] : {};
        return g(e, t), t;
      }
      function m(e, t) {
        for (var r = [], o = 0, n = Object.entries(e); o < n.length; o++) {
          var a = n[o][1][0];
          a && a.hook && r.push(a.hook(t));
        }
        return r;
      }
      t.voidFun = function () {}, t.def = function (e, t, r) {
        Object.defineProperty(e, t, {
          get: function get() {
            return r();
          }
        });
      }, t.timeOut = function (e) {
        return new Promise(function (t) {
          setTimeout(function () {
            t();
          }, e);
        });
      }, t.mergeConfig = s, t.notDeepClearNull = function (e) {
        for (var t in e) {
          null == e[t] && delete e[t];
        }
        return e;
      }, t.getRoutePath = f, t.assertNewOptions = function (e) {
        var t,
          r = e.platform,
          o = e.routes;
        if (null == r) throw new Error("你在实例化路由时必须传递 'platform'");
        if (null == o || 0 === o.length) throw new Error("你在实例化路由时必须传递 routes 为空，这是无意义的。");
        return "h5" === e.platform && (null === (t = e.h5) || void 0 === t ? void 0 : t.vueRouterDev) && (i.baseConfig.routes = []), s(i.baseConfig, e);
      }, t.getWildcardRule = h, t.notRouteTo404 = function (e, t, r, o) {
        if ("*" !== t.path) return t;
        var n = t.redirect;
        if (void 0 === n) throw new Error(" *  通配符必须配合 redirect 使用。redirect: string | Location | Function");
        var a = n;
        return "function" == typeof a && (a = a(r)), p.navjump(a, e, o, void 0, void 0, void 0, !1);
      }, t.routesForMapRoute = function (e, t, r) {
        var o;
        if (null === (o = e.options.h5) || void 0 === o ? void 0 : o.vueRouterDev) return {
          path: t
        };
        for (var n = t.split("?")[0], a = "", i = e.routesMap, u = 0; u < r.length; u++) {
          for (var l = i[r[u]], p = 0, s = Object.entries(l); p < s.length; p++) {
            var f = s[p],
              y = f[0],
              g = f[1];
            if ("*" !== y) {
              var d = g,
                m = y;
              if ("[object Array]" === v(l) && (m = d), null != c(m).exec(n)) return "[object String]" === v(d) ? i.finallyPathMap[d] : d;
            } else "" === a && (a = "*");
          }
        }
        if ("" !== a) return h(e);
        throw new Error(t + " 路径无法在路由表中找到！检查跳转路径及路由表");
      }, t.getDataType = v, t.copyData = y, t.getUniCachePage = function (e) {
        var t = getCurrentPages();
        if (null == e) return t;
        if (0 === t.length) return t;
        var r = t.reverse()[e];
        return null == r ? [] : r;
      }, t.urlToJson = function (e) {
        var t = {},
          r = e.split("?"),
          o = r[0],
          n = r[1];
        if (null != n) for (var a = 0, i = n.split("&"); a < i.length; a++) {
          var u = i[a].split("=");
          t[u[0]] = u[1];
        }
        return {
          path: o,
          query: t
        };
      }, t.forMatNextToFrom = function (e, t, r) {
        var o = [t, r],
          n = o[0],
          a = o[1];
        if ("h5" === e.options.platform) {
          var i = e.options.h5,
            u = i.vueNext,
            l = i.vueRouterDev;
          u || l || (n = p.createRoute(e, void 0, n), a = p.createRoute(e, void 0, a));
        } else n = p.createRoute(e, void 0, d(n)), a = p.createRoute(e, void 0, d(a));
        return {
          matTo: n,
          matFrom: a
        };
      }, t.paramsToQuery = function (e, t) {
        var r;
        if ("h5" === e.options.platform && !(null === (r = e.options.h5) || void 0 === r ? void 0 : r.paramsToQuery)) return t;
        if ("[object Object]" === v(t)) {
          var a = t,
            i = a.name,
            l = a.params,
            p = n(a, ["name", "params"]),
            c = l;
          if ("h5" !== e.options.platform && null == c && (c = {}), null != i && null != c) {
            var s = e.routesMap.nameMap[i];
            null == s && (s = h(e, {
              type: 2,
              msg: "命名路由为：" + i + " 的路由，无法在路由表中找到！",
              toRule: t
            }));
            var y = f(s, e).finallyPath;
            if (!y.includes(":")) return o(o({}, p), {
              path: y,
              query: c
            });
            u.ERRORHOOK[0]({
              type: 2,
              msg: "动态路由：" + y + " 无法使用 paramsToQuery！",
              toRule: t
            }, e);
          }
        }
        return t;
      }, t.assertDeepObject = function (e) {
        var t = null;
        try {
          t = JSON.stringify(e).match(/\{|\[|\}|\]/g);
        } catch (e) {
          l.warnLock("传递的参数解析对象失败。" + e);
        }
        return null != t && t.length > 3;
      }, t.baseClone = g, t.deepClone = d, t.lockDetectWarn = function (e, t, r, o, n) {
        if ("afterHooks" === n) o();else {
          var a = e.options.detectBeforeLock;
          a && a(e, t, r), e.$lockStatus ? e.options.routerErrorEach({
            type: 2,
            msg: "当前页面正在处于跳转状态，请稍后再进行跳转...."
          }, e) : o();
        }
      }, t.replaceHook = function (e, t, r, o) {
        var n = t.$options,
          a = e[r][o],
          u = {};
        if ("[object Array]" === v(a) && (u = {
          beforeCreate: [],
          created: [],
          beforeMount: [],
          mounted: [],
          beforeDestroy: [],
          destroyed: []
        }), null != a) {
          for (var l = i.proxyVueSortHookName[o], p = function p(r) {
              var p = l[r],
                c = n[p];
              if ("[object Array]" === v(c)) {
                var s = {
                    options: [],
                    hook: Function
                  },
                  f = c.splice(c.length - 1, 1, function () {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                      e[t] = arguments[t];
                    }
                    return s.options = e;
                  })[0];
                s.hook = function (r) {
                  return e.enterPath.replace(/^\//, "") !== r.replace(/^\//, "") && "app" !== o ? function () {} : (i.notCallProxyHook.includes(p) || f.apply(t, s.options), function () {
                    c.splice(c.length - 1, 1, f);
                  });
                }, Object.keys(u).length > 0 ? u[p] = [s] : a[p] = [s];
              }
            }, c = 0; c < l.length; c++) {
            p(c);
          }
          Object.keys(u).length > 0 && a.push(u);
        }
      }, t.callHook = m, t.resetPageHook = function (e, t) {
        var r = t.trim().match(/^(\/?[^\?\s]+)(\?[\s\S]*$)?$/);
        if (null == r) throw new Error("还原hook失败。请检查 【" + t + "】 路径是否正确。");
        t = r[1];
        var o = "appletsProxyHook";
        "app-plus" === e.options.platform && (o = "appProxyHook");
        for (var n = [], a = 0, i = Object.entries(e[o]); a < i.length; a++) {
          var u = i[a][1];
          if ("[object Array]" === v(u)) for (var l = 0; l < u.length; l++) {
            n = n.concat(m(u[l], t));
          } else n = n.concat(m(u, t));
        }
        setTimeout(function () {
          for (var e = 0; e < n.length; e++) {
            n[e]();
          }
        }, 500);
      }, t.reservedWord = function (e) {
        if ("string" == typeof e) return e;
        for (var t = o(o({}, y(e.params || {})), y(e.query || {})), r = 0; r < i.keyword.length; r++) {
          var n = i.keyword[r];
          Reflect.has(t, n) && ("[object Object]" === v(e.query) && delete e.query[n], "[object Object]" === v(e.params) && delete e.params[n], l.warnLock(JSON.stringify(i.keyword) + " 作为插件的保留字，在参数传递中不允许使用。已自动被过滤掉！换个参数名试试吧！ "));
        }
        return e;
      }, t.assertParentChild = function (e, t) {
        for (; null != t.$parent;) {
          var r = t.$parent.$mp;
          if (r.page && r.page.is === e) return !0;
          t = t.$parent;
        }
        try {
          if (t.$mp.page.is === e || t.$mp.page.route === e) return !0;
        } catch (e) {
          return !1;
        }
        return !1;
      }, t.resolveAbsolutePath = function (e, t) {
        var r = /^\/?([^\?\s]+)(\?.+)?$/,
          o = e.trim();
        if (!r.test(o)) throw new Error("【" + e + "】 路径错误，请提供完整的路径(10001)。");
        var n = o.match(r);
        if (null == n) throw new Error("【" + e + "】 路径错误，请提供完整的路径(10002)。");
        var a = n[2] || "";
        if (/^\.\/[^\.]+/.test(o)) return (t.currentRoute.path + e).replace(/[^\/]+\.\//, "");
        var i = n[1].replace(/\//g, "\\/").replace(/\.\./g, "[^\\/]+").replace(/\./g, "\\."),
          u = new RegExp("^\\/" + i + "$"),
          l = t.options.routes.filter(function (e) {
            return u.test(e.path);
          });
        if (1 !== l.length) throw new Error("【" + e + "】 路径错误，尝试转成绝对路径失败，请手动转成绝对路径(10003)。");
        return l[0].path + a;
      };
    },
    883: function _(e, t) {
      "use strict";

      function r(e, t, r, o) {
        if (void 0 === o && (o = !1), !o) {
          var n = "[object Object]" === t.toString();
          if (!1 === t) return !1;
          if (n && !1 === t[e]) return !1;
        }
        return console[e](r), !0;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.warnLock = t.log = t.warn = t.err = t.isLog = void 0, t.isLog = r, t.err = function (e, t, o) {
        r("error", t.options.debugger, e, o);
      }, t.warn = function (e, t, o) {
        r("warn", t.options.debugger, e, o);
      }, t.log = function (e, t, o) {
        r("log", t.options.debugger, e, o);
      }, t.warnLock = function (e) {
        console.warn(e);
      };
    },
    607: function _(e, t, r) {
      "use strict";

      var o = this && this.__createBinding || (Object.create ? function (e, t, r, o) {
          void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function get() {
              return t[r];
            }
          });
        } : function (e, t, r, o) {
          void 0 === o && (o = r), e[o] = t[r];
        }),
        n = this && this.__exportStar || function (e, t) {
          for (var r in e) {
            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          }
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRouter = t.RouterMount = t.runtimeQuit = void 0, n(r(366), t), n(r(309), t);
      var a = r(814);
      Object.defineProperty(t, "runtimeQuit", {
        enumerable: !0,
        get: function get() {
          return a.runtimeQuit;
        }
      });
      var i = r(963);
      Object.defineProperty(t, "RouterMount", {
        enumerable: !0,
        get: function get() {
          return i.RouterMount;
        }
      }), Object.defineProperty(t, "createRouter", {
        enumerable: !0,
        get: function get() {
          return i.createRouter;
        }
      });
    },
    366: function _(e, t) {
      "use strict";

      var r, o, n;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.rewriteMethodToggle = t.navtypeToggle = t.hookToggle = void 0, (n = t.hookToggle || (t.hookToggle = {})).beforeHooks = "beforeEach", n.afterHooks = "afterEach", n.enterHooks = "beforeEnter", (o = t.navtypeToggle || (t.navtypeToggle = {})).push = "navigateTo", o.replace = "redirectTo", o.replaceAll = "reLaunch", o.pushTab = "switchTab", o.back = "navigateBack", (r = t.rewriteMethodToggle || (t.rewriteMethodToggle = {})).navigateTo = "push", r.navigate = "push", r.redirectTo = "replace", r.reLaunch = "replaceAll", r.switchTab = "pushTab", r.navigateBack = "back";
    },
    309: function _(e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    169: function _(e, t, r) {
      "use strict";

      var o = this && this.__rest || function (e, t) {
        var r = {};
        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        }
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
            t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
          }
        }
        return r;
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.loopCallHook = t.transitionTo = t.onTriggerEachHook = t.callHook = t.callBeforeRouteLeave = t.HOOKLIST = t.ERRORHOOK = void 0;
      var n = r(789),
        a = r(890),
        i = r(147);
      function u(e, t, r, o) {
        var a,
          i = n.getUniCachePage(0);
        if (Object.keys(i).length > 0) {
          var u = void 0;
          switch ("h5" === e.options.platform ? u = i.$options.beforeRouteLeave : null != i.$vm && (u = i.$vm.$options.beforeRouteLeave), n.getDataType(u)) {
            case "[object Array]":
              a = (a = u[0]).bind(i);
              break;
            case "[object Function]":
              a = u.bind(i.$vm);
          }
        }
        return l(a, t, r, e, o);
      }
      function l(e, t, r, o, n, a) {
        void 0 === a && (a = !0), null != e && e instanceof Function ? !0 === a ? e(t, r, n, o, !1) : (e(t, r, function () {}, o, !1), n()) : n();
      }
      function p(e, t, r, o, a, i) {
        var u = n.forMatNextToFrom(e, t, r),
          l = u.matTo,
          p = u.matFrom;
        "h5" === e.options.platform ? c(a, 0, i, e, l, p, o) : c(a.slice(0, 4), 0, function () {
          i(function () {
            c(a.slice(4), 0, n.voidFun, e, l, p, o);
          });
        }, e, l, p, o);
      }
      function c(e, r, i, u, l, p, s) {
        var f = n.routesForMapRoute(u, l.path, ["finallyPathMap", "pathMap"]);
        if (e.length - 1 < r) return i();
        var h = e[r],
          v = t.ERRORHOOK[0];
        h(u, l, p, f, function (t) {
          if (!1 === t) "h5" === u.options.platform && i(!1), v({
            type: 0,
            msg: "管道函数传递 false 导航被终止!",
            matTo: l,
            matFrom: p,
            nextTo: t
          }, u);else if ("string" == typeof t || "object" == _typeof(t)) {
            var n = s,
              f = t;
            if ("object" == _typeof(t)) {
              var h = t.NAVTYPE;
              f = o(t, ["NAVTYPE"]), null != h && (n = h);
            }
            a.navjump(f, u, n, {
              from: p,
              next: i
            });
          } else null == t ? (r++, c(e, r, i, u, l, p, s)) : v({
            type: 1,
            msg: "管道函数传递未知类型，无法被识别。导航被终止！",
            matTo: l,
            matFrom: p,
            nextTo: t
          }, u);
        });
      }
      t.ERRORHOOK = [function (e, t) {
        return t.lifeCycle.routerErrorHooks[0](e, t);
      }], t.HOOKLIST = [function (e, t, r, o, n) {
        return l(e.lifeCycle.routerBeforeHooks[0], t, r, e, n);
      }, function (e, t, r, o, n) {
        return u(e, t, r, n);
      }, function (e, t, r, o, n) {
        return l(e.lifeCycle.beforeHooks[0], t, r, e, n);
      }, function (e, t, r, o, n) {
        return l(o.beforeEnter, t, r, e, n);
      }, function (e, t, r, o, n) {
        return l(e.lifeCycle.afterHooks[0], t, r, e, n, !1);
      }, function (e, t, r, o, n) {
        return e.$lockStatus = !1, "h5" === e.options.platform && i.proxyH5Mount(e), l(e.lifeCycle.routerAfterHooks[0], t, r, e, n, !1);
      }], t.callBeforeRouteLeave = u, t.callHook = l, t.onTriggerEachHook = function (e, r, o, n, a) {
        var i = [];
        switch (n) {
          case "beforeEach":
            i = t.HOOKLIST.slice(0, 3);
            break;
          case "afterEach":
            i = t.HOOKLIST.slice(4);
            break;
          case "beforeEnter":
            i = t.HOOKLIST.slice(3, 4);
        }
        p(o, e, r, "push", i, a);
      }, t.transitionTo = p, t.loopCallHook = c;
    },
    890: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRoute = t.forceGuardEach = t.backOptionsBuild = t.navjump = t.lockNavjump = void 0;
      var n = r(366),
        a = r(99),
        i = r(789),
        u = r(169),
        l = r(845),
        p = r(169);
      function c(e, t, r, o, n) {
        i.lockDetectWarn(t, e, r, function () {
          "h5" !== t.options.platform && (t.$lockStatus = !0), s(e, t, r, void 0, o, n);
        });
      }
      function s(e, t, r, c, s, h, v) {
        if (void 0 === v && (v = !0), "back" === r) {
          var y;
          if (y = "string" == typeof e ? +e : e.delta || 1, "h5" === t.options.platform) {
            t.$route.go(-y);
            var g = (h || {
                success: i.voidFun
              }).success || i.voidFun,
              d = (h || {
                complete: i.voidFun
              }).complete || i.voidFun;
            return g({
              errMsg: "navigateBack:ok"
            }), void d({
              errMsg: "navigateBack:ok"
            });
          }
          e = f(t, y, h);
        }
        e = i.reservedWord(e);
        var m = a.queryPageToMap(e, t).rule;
        m.type = n.navtypeToggle[r];
        var b = i.paramsToQuery(t, m),
          O = a.resolveQuery(b, t);
        if ("h5" === t.options.platform) {
          if ("push" !== r && (r = "replace"), null != c) c.next(o({
            replace: "push" !== r
          }, O));else if ("push" === r && Reflect.has(O, "events")) {
            if (Reflect.has(O, "name")) throw new Error("在h5端上使用 'push'、'navigateTo' 跳转时，如果包含 events 不允许使用 name 跳转，因为 name 实现了动态路由。请更换为 path 或者 url 跳转！");
            uni.navigateTo(O, !0, i.voidFun, s);
          } else t.$route[r](O, O.success || i.voidFun, O.fail || i.voidFun);
        } else {
          var P = {
            path: ""
          };
          if (null == c) {
            var k = i.routesForMapRoute(t, O.path, ["finallyPathMap", "pathMap"]);
            k = i.notRouteTo404(t, k, O, r), O = o(o(o(o({}, k), {
              params: {}
            }), O), {
              path: k.path
            }), P = l.createToFrom(O, t);
          } else P = c.from;
          if (l.createFullPath(O, P), !1 === v) return O;
          u.transitionTo(t, O, P, r, p.HOOKLIST, function (e) {
            uni[n.navtypeToggle[r]](O, !0, e, s);
          });
        }
      }
      function f(e, t, r) {
        var n = h(e, t),
          a = o(o({}, r || {}), {
            path: n.path,
            query: n.query,
            delta: t
          });
        if ("[object Object]" === i.getDataType(r)) {
          var u = r,
            l = u.animationDuration,
            p = u.animationType;
          null != l && (a.animationDuration = l), null != p && (a.animationType = p);
          var c = r.from;
          null != c && (a.BACKTYPE = c);
        }
        return a;
      }
      function h(e, t, r) {
        void 0 === t && (t = 0);
        var u = {
          name: "",
          meta: {},
          path: "",
          fullPath: "",
          NAVTYPE: "",
          query: {},
          params: {},
          BACKTYPE: (r || {
            BACKTYPE: ""
          }).BACKTYPE || ""
        };
        if (19970806 === t) return u;
        if ("h5" === e.options.platform) {
          var l = {
            path: ""
          };
          l = null != r ? r : e.$route.currentRoute;
          var p = i.copyData(l.params);
          delete p.__id__;
          var c = a.parseQuery(o(o({}, p), i.copyData(l.query)), e);
          l = o(o({}, l), {
            query: c
          }), u.path = l.path, u.fullPath = l.fullPath || "", u.query = l.query || {}, u.NAVTYPE = n.rewriteMethodToggle[l.type || "reLaunch"];
        } else {
          var s = {};
          if (null != r) s = o(o({}, r), {
            openType: r.type
          });else {
            var f = i.getUniCachePage(t);
            if (0 === Object.keys(f).length) throw e.options.routerErrorEach({
              type: 3,
              msg: "不存在的页面栈，请确保有足够的页面可用，当前 level:" + t
            }, e), new Error("不存在的页面栈，请确保有足够的页面可用，当前 level:" + t);
            var h = f.options || {},
              v = h.query;
            null != v && 1 === Object.keys(h).length && (h = JSON.parse(decodeURIComponent(v)));
            var y = JSON.parse(decodeURIComponent(JSON.stringify(h)));
            s = o(o({}, f.$page || {}), {
              query: y,
              fullPath: decodeURIComponent((f.$page || {}).fullPath || "/" + f.route)
            }), "app-plus" !== e.options.platform && (s.path = "/" + f.route);
          }
          var g = s.openType;
          u.query = s.query, u.path = s.path, u.fullPath = s.fullPath, u.NAVTYPE = n.rewriteMethodToggle[g || "reLaunch"];
        }
        var d = i.routesForMapRoute(e, u.path, ["finallyPathMap", "pathMap"]),
          m = o(o({}, u), d);
        return m.query = a.parseQuery(m.query, e), m;
      }
      t.lockNavjump = c, t.navjump = s, t.backOptionsBuild = f, t.forceGuardEach = function (e, t, r) {
        if (void 0 === t && (t = "replaceAll"), void 0 === r && (r = !1), "h5" === e.options.platform) throw new Error("在h5端上使用：forceGuardEach 是无意义的，目前 forceGuardEach 仅支持在非h5端上使用");
        var o = i.getUniCachePage(0);
        0 === Object.keys(o).length && e.options.routerErrorEach({
          type: 3,
          msg: "不存在的页面栈，请确保有足够的页面可用，当前 level:0"
        }, e);
        var n = o;
        c({
          path: "/" + n.route,
          query: n.options
        }, e, t, r);
      }, t.createRoute = h;
    },
    845: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.proxyPageHook = t.createFullPath = t.createToFrom = void 0;
      var o = r(789),
        n = r(890),
        a = r(99);
      t.createToFrom = function (e, t) {
        var r = o.getUniCachePage(0);
        return "[object Array]" === o.getDataType(r) ? o.deepClone(e) : n.createRoute(t);
      }, t.createFullPath = function (e, t) {
        if (null == e.fullPath) {
          var r = a.stringifyQuery(e.query);
          e.fullPath = e.path + r;
        }
        null == t.fullPath && (r = a.stringifyQuery(t.query), t.fullPath = t.path + r);
      }, t.proxyPageHook = function (e, t, r, n) {
        o.replaceHook(t, e, r, n);
      };
    },
    99: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.stringifyQuery = t.parseQuery = t.resolveQuery = t.queryPageToMap = void 0;
      var n = r(789),
        a = r(169),
        i = r(883),
        u = /[!'()*]/g,
        l = function l(e) {
          return "%" + e.charCodeAt(0).toString(16);
        },
        p = /%2C/g,
        c = function c(e) {
          return encodeURIComponent(e).replace(u, l).replace(p, ",");
        };
      t.queryPageToMap = function (e, t) {
        var r = {},
          i = "",
          u = e.success,
          l = e.fail;
        if ("[object Object]" === n.getDataType(e)) {
          var p = e;
          if (null != p.path) {
            var c = n.urlToJson(p.path),
              s = c.path,
              f = c.query;
            i = n.routesForMapRoute(t, s, ["finallyPathList", "pathMap"]), r = o(o({}, f), e.query || {}), p.path = s, p.query = r, delete e.params;
          } else null != p.name ? null == (i = t.routesMap.nameMap[p.name]) ? i = n.getWildcardRule(t, {
            type: 2,
            msg: "命名路由为：" + p.name + " 的路由，无法在路由表中找到！",
            toRule: e
          }) : (r = e.params || {}, delete e.query) : i = n.getWildcardRule(t, {
            type: 2,
            msg: e + " 解析失败，请检测当前路由表下是否有包含。",
            toRule: e
          });
        } else e = n.urlToJson(e), i = n.routesForMapRoute(t, e.path, ["finallyPathList", "pathMap"]), r = e.query;
        if ("h5" === t.options.platform) {
          n.getRoutePath(i, t).finallyPath.includes(":") && null == e.name && a.ERRORHOOK[0]({
            type: 2,
            msg: "当有设置 alias或者aliasPath 为动态路由时，不允许使用 path 跳转。请使用 name 跳转！",
            route: i
          }, t);
          var h = e.complete,
            v = e.success,
            y = e.fail;
          if ("[object Function]" === n.getDataType(h)) {
            var g = function g(e, t) {
              "[object Function]" === n.getDataType(t) && t.apply(this, e), h.apply(this, e);
            };
            u = function u() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }
              g.call(this, e, v);
            }, l = function l() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }
              g.call(this, e, y);
            };
          }
        }
        var d = e;
        return "[object Function]" === n.getDataType(d.success) && (d.success = u), "[object Function]" === n.getDataType(d.fail) && (d.fail = l), {
          rule: d,
          route: i,
          query: r
        };
      }, t.resolveQuery = function (e, t) {
        var r = "query";
        null != e.params && (r = "params"), null != e.query && (r = "query");
        var o = n.copyData(e[r] || {}),
          a = t.options.resolveQuery;
        if (a) {
          var u = a(o);
          "[object Object]" !== n.getDataType(u) ? i.warn("请按格式返回参数： resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t) : e[r] = u;
        } else {
          if (!n.assertDeepObject(o)) return e;
          var l = JSON.stringify(o);
          e[r] = {
            query: l
          };
        }
        return e;
      }, t.parseQuery = function (e, t) {
        var r = t.options.parseQuery;
        if (r) e = r(n.copyData(e)), "[object Object]" !== n.getDataType(e) && i.warn("请按格式返回参数： parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t);else if (Reflect.get(e, "query")) {
          var o = Reflect.get(e, "query"),
            a = {
              query: decodeURIComponent(o)
            };
          try {
            if ("object" == _typeof(a = JSON.parse(a.query))) return a;
          } catch (e) {
            i.warn("尝试解析深度对象失败，按原样输出。" + e, t);
          }
        }
        return e;
      }, t.stringifyQuery = function (e) {
        var t = e ? Object.keys(e).map(function (t) {
          var r = e[t];
          if (void 0 === r) return "";
          if (null === r) return c(t);
          if (Array.isArray(r)) {
            var o = [];
            return r.forEach(function (e) {
              void 0 !== e && (null === e ? o.push(c(t)) : o.push(c(t) + "=" + c(e)));
            }), o.join("&");
          }
          return c(t) + "=" + c(r);
        }).filter(function (e) {
          return e.length > 0;
        }).join("&") : null;
        return t ? "?" + t : "";
      };
    },
    314: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.rewriteMethod = void 0;
      var o = r(366),
        n = r(789),
        a = r(883),
        i = r(809),
        u = ["navigateTo", "redirectTo", "reLaunch", "switchTab", "navigateBack"];
      t.rewriteMethod = function (e) {
        !1 === e.options.keepUniOriginNav && u.forEach(function (t) {
          var r = uni[t];
          uni[t] = function (u, l, p, c) {
            void 0 === l && (l = !1), l ? i.uniOriginJump(e, r, t, u, p, c) : ("app-plus" === e.options.platform && 0 === Object.keys(e.appMain).length && (e.appMain = {
              NAVTYPE: t,
              path: u.url
            }), function (e, t, r) {
              if ("app-plus" === r.options.platform) {
                var i = null;
                e && (i = e.openType), null != i && "appLaunch" === i && (t = "reLaunch");
              }
              if ("reLaunch" === t && '{"url":"/"}' === JSON.stringify(e) && (a.warn("uni-app 原生方法：reLaunch({url:'/'}) 默认被重写啦！你可以使用 this.$Router.replaceAll() 或者 uni.reLaunch({url:'/?xxx=xxx'})", r, !0), t = "navigateBack", e = {
                from: "backbutton"
              }), "navigateBack" === t) {
                var u = 1;
                null == e && (e = {
                  delta: 1
                }), "[object Number]" === n.getDataType(e.delta) && (u = e.delta), r.back(u, e);
              } else {
                var l = o.rewriteMethodToggle[t],
                  p = e.url;
                if (!p.startsWith("/")) {
                  var c = n.resolveAbsolutePath(p, r);
                  p = c, e.url = c;
                }
                if ("switchTab" === t) {
                  var s = n.routesForMapRoute(r, p, ["pathMap", "finallyPathList"]),
                    f = n.getRoutePath(s, r).finallyPath;
                  if ("[object Array]" === n.getDataType(f) && a.warn("uni-app 原生方法跳转路径为：" + p + "。此路为是tab页面时，不允许设置 alias 为数组的情况，并且不能为动态路由！当然你可以通过通配符*解决！", r, !0), "*" === f && a.warn("uni-app 原生方法跳转路径为：" + p + "。在路由表中找不到相关路由表！当然你可以通过通配符*解决！", r, !0), "h5" === r.options.platform) {
                    var h = e.success;
                    e.success = function () {
                      for (var t = [], r = 0; r < arguments.length; r++) {
                        t[r] = arguments[r];
                      }
                      null == h || h.apply(null, t), n.timeOut(150).then(function () {
                        var t = e.detail || {};
                        if (Object.keys(t).length > 0 && Reflect.has(t, "index")) {
                          var r = n.getUniCachePage(0);
                          if (0 === Object.keys(r).length) return !1;
                          var o = r,
                            a = o.$options.onTabItemTap;
                          if (a) for (var i = 0; i < a.length; i++) {
                            a[i].call(o, t);
                          }
                        }
                      });
                    };
                  }
                  p = f;
                }
                var v = e,
                  y = v.events,
                  g = v.success,
                  d = v.fail,
                  m = v.complete,
                  b = v.animationType,
                  O = {
                    path: p,
                    events: y,
                    success: g,
                    fail: d,
                    complete: m,
                    animationDuration: v.animationDuration,
                    animationType: b
                  };
                r[l](n.notDeepClearNull(O));
              }
            }(u, t, e));
          };
        });
      };
    },
    963: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRouter = t.RouterMount = void 0;
      var n = r(282),
        a = r(789),
        i = r(662),
        u = r(460),
        l = r(890),
        p = r(314),
        c = function c() {},
        s = new Promise(function (e) {
          return c = e;
        });
      t.createRouter = function (e) {
        var t = a.assertNewOptions(e),
          r = {
            options: t,
            mount: [],
            Vue: null,
            appProxyHook: n.appProxyHook,
            appletsProxyHook: n.indexProxyHook,
            appMain: {},
            enterPath: "",
            $route: null,
            $lockStatus: !1,
            routesMap: {},
            lifeCycle: i.registerRouterHooks(n.lifeCycle, t),
            push: function push(e) {
              l.lockNavjump(e, r, "push");
            },
            replace: function replace(e) {
              l.lockNavjump(e, r, "replace");
            },
            replaceAll: function replaceAll(e) {
              l.lockNavjump(e, r, "replaceAll");
            },
            pushTab: function pushTab(e) {
              l.lockNavjump(e, r, "pushTab");
            },
            back: function back(e, t) {
              void 0 === e && (e = 1), "[object Object]" !== a.getDataType(t) ? t = {
                from: "navigateBack"
              } : Reflect.has(t, "from") || (t = o(o({}, t), {
                from: "navigateBack"
              })), l.lockNavjump(e + "", r, "back", void 0, t);
            },
            forceGuardEach: function forceGuardEach(e, t) {
              l.forceGuardEach(r, e, t);
            },
            beforeEach: function beforeEach(e) {
              i.registerEachHooks(r, "beforeHooks", e);
            },
            afterEach: function afterEach(e) {
              i.registerEachHooks(r, "afterHooks", e);
            },
            install: function install(e) {
              r.Vue = e, p.rewriteMethod(this), u.initMixins(e, this), Object.defineProperty(e.prototype, "$Router", {
                get: function get() {
                  return r;
                }
              }), Object.defineProperty(e.prototype, "$Route", {
                get: function get() {
                  return l.createRoute(r);
                }
              }), Object.defineProperty(e.prototype, "$AppReady", {
                get: function get() {
                  return "h5" === r.options.platform ? Promise.resolve() : s;
                },
                set: function set(e) {
                  !0 === e && c();
                }
              });
            }
          };
        return a.def(r, "keyword", function () {
          return n.keyword;
        }), a.def(r, "currentRoute", function () {
          return l.createRoute(r);
        }), r.beforeEach(function (e, t, r) {
          return r();
        }), r.afterEach(function () {}), r;
      }, t.RouterMount = function (e, t, r) {
        if (void 0 === r && (r = "#app"), "[object Array]" !== a.getDataType(t.mount)) throw new Error("挂载路由失败，router.app 应该为数组类型。当前类型：" + _typeof(t.mount));
        if (t.mount.push({
          app: e,
          el: r
        }), "h5" === t.options.platform) {
          var o = t.$route;
          o.replace({
            path: o.currentRoute.fullPath
          });
        }
      };
    },
    809: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
          return (o = Object.assign || function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++) {
              for (var n in t = arguments[r]) {
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
            }
            return e;
          }).apply(this, arguments);
        },
        n = this && this.__awaiter || function (e, t, r, o) {
          return new (r || (r = Promise))(function (n, a) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
                e(t);
              })).then(i, u);
            }
            l((o = o.apply(e, t || [])).next());
          });
        },
        a = this && this.__generator || function (e, t) {
          var r,
            o,
            n,
            a,
            i = {
              label: 0,
              sent: function sent() {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: []
            };
          return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
          }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
            return this;
          }), a;
          function u(a) {
            return function (u) {
              return function (a) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; i;) {
                  try {
                    if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                    switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                      case 0:
                      case 1:
                        n = a;
                        break;
                      case 4:
                        return i.label++, {
                          value: a[1],
                          done: !1
                        };
                      case 5:
                        i.label++, o = a[1], a = [0];
                        continue;
                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = i.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                          i = 0;
                          continue;
                        }
                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < n[1]) {
                          i.label = n[1], n = a;
                          break;
                        }
                        if (n && i.label < n[2]) {
                          i.label = n[2], i.ops.push(a);
                          break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    a = [6, e], o = 0;
                  } finally {
                    r = n = 0;
                  }
                }
                if (5 & a[0]) throw a[1];
                return {
                  value: a[0] ? a[1] : void 0,
                  done: !0
                };
              }([a, u]);
            };
          }
        },
        i = this && this.__rest || function (e, t) {
          var r = {};
          for (var o in e) {
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
          }
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
              t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
            }
          }
          return r;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.formatOriginURLQuery = t.uniOriginJump = void 0;
      var u = r(99),
        l = r(789),
        p = r(282),
        c = 0,
        s = "reLaunch";
      function f(e, t, r) {
        var n,
          a = t.url,
          i = t.path,
          p = t.query,
          c = t.animationType,
          s = t.animationDuration,
          f = t.events,
          h = t.success,
          v = t.fail,
          y = t.complete,
          g = t.delta,
          d = t.animation,
          m = u.stringifyQuery(p || {}),
          b = "" === m ? i || a : (i || a) + m,
          O = {};
        return "app-plus" === e.options.platform && "navigateBack" !== r && (O = (null === (n = e.options.APP) || void 0 === n ? void 0 : n.animation) || {}, O = o(o({}, O), d || {})), l.notDeepClearNull({
          delta: g,
          url: b,
          animationType: c || O.animationType,
          animationDuration: s || O.animationDuration,
          events: f,
          success: h,
          fail: v,
          complete: y
        });
      }
      t.uniOriginJump = function (e, t, r, u, h, v) {
        var y = f(e, u, r),
          g = y.complete,
          d = i(y, ["complete"]),
          m = e.options.platform.trim();
        0 === c && "h5" !== m && l.resetPageHook(e, d.url), null != v && !1 === v ? (0 === c && (c++, "h5" !== m && (e.Vue.prototype.$AppReady = !0)), g && g.apply(null, {
          msg: "forceGuardEach强制触发并且不执行跳转"
        }), h && h.apply(null, {
          msg: "forceGuardEach强制触发并且不执行跳转"
        })) : t(o(o({}, d), {
          from: u.BACKTYPE,
          complete: function complete() {
            for (var t, o, i, u, f = [], v = 0; v < arguments.length; v++) {
              f[v] = arguments[v];
            }
            return n(this, void 0, void 0, function () {
              var n, v, y;
              return a(this, function (a) {
                switch (a.label) {
                  case 0:
                    return 0 === c && (c++, "h5" !== m && (e.Vue.prototype.$AppReady = !0), "app-plus" === m && ((n = plus.nativeObj.View.getViewById("router-loadding")) && n.close(), (v = null === (t = e.options.APP) || void 0 === t ? void 0 : t.launchedHook) && v())), y = 0, new RegExp(p.mpPlatformReg, "g").test(m) ? y = null === (o = e.options.applet) || void 0 === o ? void 0 : o.animationDuration : "app-plus" === m && "navigateBack" === r && "navigateTo" === s && (y = null === (u = null === (i = e.options.APP) || void 0 === i ? void 0 : i.animation) || void 0 === u ? void 0 : u.animationDuration), "navigateTo" !== r && "navigateBack" !== r || 0 === y ? [3, 2] : [4, l.timeOut(y)];
                  case 1:
                    a.sent(), a.label = 2;
                  case 2:
                    return s = r, g && g.apply(null, f), h && h.apply(null, f), [2];
                }
              });
            });
          }
        }));
      }, t.formatOriginURLQuery = f;
    }
  }, t = {}, function r(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, r), n.exports;
  }(607);
  var e, t;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 76)(module)))

/***/ }),

/***/ 76:
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 77:
/*!**********************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Request = _interopRequireDefault(__webpack_require__(/*! ./core/Request */ 78));
var _default = _Request.default;
exports.default = _default;

/***/ }),

/***/ 78:
/*!*****************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/Request.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 79));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 87));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig */ 88));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ 89));
var _utils = __webpack_require__(/*! ../utils */ 82);
var _clone = _interopRequireDefault(__webpack_require__(/*! ../utils/clone */ 90));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Request = /*#__PURE__*/function () {
  /**
   * @param {Object} arg - 全局配置
   * @param {String} arg.baseURL - 全局根路径
   * @param {Object} arg.header - 全局header
   * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
   * @param {String} arg.dataType = [json] - 全局默认的dataType
   * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
   * @param {Object} arg.custom - 全局默认的自定义参数
   * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
   * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
   * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
   * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
   * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
   */
  function Request() {
    var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Request);
    if (!(0, _utils.isPlainObject)(arg)) {
      arg = {};
      console.warn('设置全局参数必须接收一个Object');
    }
    this.config = (0, _clone.default)(_objectSpread(_objectSpread({}, _defaults.default), arg));
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default()
    };
  }

  /**
   * @Function
   * @param {Request~setConfigCallback} f - 设置全局默认配置
   */
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value: function setConfig(f) {
      this.config = f(this.config);
    }
  }, {
    key: "middleware",
    value: function middleware(config) {
      config = (0, _mergeConfig.default)(this.config, config);
      var chain = [_dispatchRequest.default, undefined];
      var promise = Promise.resolve(config);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }

    /**
     * @Function
     * @param {Object} config - 请求配置项
     * @prop {String} options.url - 请求路径
     * @prop {Object} options.data - 请求参数
     * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
     * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
     * @prop {Object} [options.header = config.header] - 请求header
     * @prop {Object} [options.method = config.method] - 请求方法
     * @returns {Promise<unknown>}
     */
  }, {
    key: "request",
    value: function request() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.middleware(config);
    }
  }, {
    key: "get",
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.middleware(_objectSpread({
        url: url,
        method: 'GET'
      }, options));
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'POST'
      }, options));
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'PUT'
      }, options));
    }
  }, {
    key: "delete",
    value: function _delete(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE'
      }, options));
    }
  }, {
    key: "connect",
    value: function connect(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'CONNECT'
      }, options));
    }
  }, {
    key: "head",
    value: function head(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'HEAD'
      }, options));
    }
  }, {
    key: "options",
    value: function options(url, data) {
      var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS'
      }, _options));
    }
  }, {
    key: "trace",
    value: function trace(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'TRACE'
      }, options));
    }
  }, {
    key: "upload",
    value: function upload(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'UPLOAD';
      return this.middleware(config);
    }
  }, {
    key: "download",
    value: function download(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'DOWNLOAD';
      return this.middleware(config);
    }
  }]);
  return Request;
}();
/**
 * setConfig回调
 * @return {Object} - 返回操作后的config
 * @callback Request~setConfigCallback
 * @param {Object} config - 全局默认config
 */
exports.default = Request;

/***/ }),

/***/ 79:
/*!*************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/dispatchRequest.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! ../adapters/index */ 80));
var _default = function _default(config) {
  return (0, _index.default)(config);
};
exports.default = _default;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 80:
/*!*******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/adapters/index.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 81));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath */ 83));
var _settle = _interopRequireDefault(__webpack_require__(/*! ../core/settle */ 86));
var _utils = __webpack_require__(/*! ../utils */ 82);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 返回可选值存在的配置
 * @param {Array} keys - 可选值数组
 * @param {Object} config2 - 配置
 * @return {{}} - 存在的配置项
 */
var mergeKeys = function mergeKeys(keys, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};
var _default = function _default(config) {
  return new Promise(function (resolve, reject) {
    var fullPath = (0, _buildURL.default)((0, _buildFullPath.default)(config.baseURL, config.url), config.params, config.paramsSerializer);
    var _config = {
      url: fullPath,
      header: config.header,
      complete: function complete(response) {
        config.fullPath = fullPath;
        response.config = config;
        response.rawData = response.data;
        try {
          // 对可能字符串不是json 的情况容错
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
          // eslint-disable-next-line no-empty
        } catch (e) {}
        (0, _settle.default)(resolve, reject, response);
      }
    };
    var requestTask;
    if (config.method === 'UPLOAD') {
      delete _config.header['content-type'];
      delete _config.header['Content-Type'];
      var otherConfig = {
        filePath: config.filePath,
        name: config.name
      };
      var optionalKeys = ['formData'];
      requestTask = uni.uploadFile(_objectSpread(_objectSpread(_objectSpread({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === 'DOWNLOAD') {
      requestTask = uni.downloadFile(_config);
    } else {
      var _optionalKeys = ['data', 'method', 'timeout', 'dataType', 'responseType'];
      requestTask = uni.request(_objectSpread(_objectSpread({}, _config), mergeKeys(_optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 81:
/*!*********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/helpers/buildURL.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildURL;
var utils = _interopRequireWildcard(__webpack_require__(/*! ./../utils */ 82));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }
      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }
      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

/***/ }),

/***/ 82:
/*!**********************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/utils.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utils is a library of generic helper functions non-specific to axios
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepMerge = deepMerge;
exports.forEach = forEach;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isURLSearchParams = isURLSearchParams;
exports.isUndefined = isUndefined;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((0, _typeof2.default)(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * 是否为boolean 值
 * @param val
 * @returns {boolean}
 */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
 * 是否为真正的对象{} new Object
 * @param {any} obj - 检测的对象
 * @returns {boolean}
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge( /* obj1, obj2, obj3, ... */
) {
  var result = {};
  function assignValue(val, key) {
    if ((0, _typeof2.default)(result[key]) === 'object' && (0, _typeof2.default)(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if ((0, _typeof2.default)(val) === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function isUndefined(val) {
  return typeof val === 'undefined';
}

/***/ }),

/***/ 83:
/*!***********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/buildFullPath.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFullPath;
var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL */ 84));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs */ 85));
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),

/***/ 84:
/*!**************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/helpers/isAbsoluteURL.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),

/***/ 85:
/*!************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/helpers/combineURLs.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),

/***/ 86:
/*!****************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/settle.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settle;
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  var status = response.statusCode;
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

/***/ }),

/***/ 87:
/*!****************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/InterceptorManager.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  this.handlers.forEach(function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var _default = InterceptorManager;
exports.default = _default;

/***/ }),

/***/ 88:
/*!*********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/mergeConfig.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _utils = __webpack_require__(/*! ../utils */ 82);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 合并局部配置优先的配置，如果局部有该配置项则用局部，如果全局有该配置项则用全局
 * @param {Array} keys - 配置项
 * @param {Object} globalsConfig - 当前的全局配置
 * @param {Object} config2 - 局部配置
 * @return {{}}
 */
var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!(0, _utils.isUndefined)(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
/**
 *
 * @param globalsConfig - 当前实例的全局配置
 * @param config2 - 当前的局部配置
 * @return - 合并后的配置
 */
var _default = function _default(globalsConfig) {
  var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = config2.method || globalsConfig.method || 'GET';
  var config = {
    baseURL: config2.baseURL || globalsConfig.baseURL || '',
    method: method,
    url: config2.url || '',
    params: config2.params || {},
    custom: _objectSpread(_objectSpread({}, globalsConfig.custom || {}), config2.custom || {}),
    header: (0, _utils.deepMerge)(globalsConfig.header || {}, config2.header || {})
  };
  var defaultToConfig2Keys = ['getTask', 'validateStatus', 'paramsSerializer'];
  config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));

  // eslint-disable-next-line no-empty
  if (method === 'DOWNLOAD') {} else if (method === 'UPLOAD') {
    delete config.header['content-type'];
    delete config.header['Content-Type'];
    var uploadKeys = ['filePath', 'name', 'formData'];
    uploadKeys.forEach(function (prop) {
      if (!(0, _utils.isUndefined)(config2[prop])) {
        config[prop] = config2[prop];
      }
    });
  } else {
    var defaultsKeys = ['data', 'timeout', 'dataType', 'responseType'];
    config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }
  return config;
};
exports.default = _default;

/***/ }),

/***/ 89:
/*!******************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/core/defaults.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 默认的全局配置
 */
var _default = {
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',
  paramsSerializer: null,
  responseType: 'text',
  custom: {},
  timeout: 60000,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
exports.default = _default;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 90:
/*!****************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/js_sdk/luch-request/luch-request/utils/clone.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/* eslint-disable */
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }
  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }
  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }
  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

  /**
   * Clones (copies) an Object using deep copying.
   *
   * This function supports circular references by default, but if you are certain
   * there are no circular references in your object, you can save some CPU time
   * by calling clone(obj, false).
   *
   * Caution: if `circular` is false and `parent` contains circular references,
   * your program may enter an infinite loop and crash.
   *
   * @param `parent` - the object to be cloned
   * @param `circular` - set to true if the object to be cloned may contain
   *    circular references. (optional - true by default)
   * @param `depth` - set to a number if the object is only to be cloned to
   *    a particular depth. (optional - defaults to Infinity)
   * @param `prototype` - sets the prototype to be used when cloning an object.
   *    (optional - defaults to parent prototype).
   * @param `includeNonEnumerable` - set to true if the non-enumerable properties
   *    should be cloned as well. Non-enumerable properties on the prototype
   *    chain will be ignored. (optional - false by default)
   */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if ((0, _typeof2.default)(circular) === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != 'undefined';
    if (typeof circular == 'undefined') circular = true;
    if (typeof depth == 'undefined') depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null) return null;
      if (depth === 0) return parent;
      var child;
      var proto;
      if ((0, _typeof2.default)(parent) != 'object') {
        return parent;
      }
      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.from) {
          // Node.js >= 5.10.0
          child = Buffer.from(parent);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
          parent.copy(child);
        }
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }
      if (circular) {
        var index = allParents.indexOf(parent);
        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }
      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }
      for (var i in parent) {
        var attrs = Object.getOwnPropertyDescriptor(parent, i);
        if (attrs) {
          child[i] = _clone(parent[i], depth - 1);
        }
        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent, i);
          if (objProperty.set === 'undefined') {
            // no setter defined. Skip cloning this property
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            // when in strict mode, TypeError will be thrown if child[i] property only has a getter
            // we can't do anything about this, other than inform the user that this property cannot be set.
            continue;
          } else if (e instanceof ReferenceError) {
            //this may happen in non strict mode
            continue;
          }
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }
      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }
      return child;
    }
    return _clone(parent, depth);
  }

  /**
   * Simple flat clone using prototype, accepts only objects, usefull for property
   * override on FLAT configuration object (no nested props).
   *
   * USE WITH CAUTION! This may not behave as you wish if you do not know how this
   * works.
   */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null) return null;
    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  // private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone.__objToStr = __objToStr;
  function __isDate(o) {
    return (0, _typeof2.default)(o) === 'object' && __objToStr(o) === '[object Date]';
  }
  clone.__isDate = __isDate;
  function __isArray(o) {
    return (0, _typeof2.default)(o) === 'object' && __objToStr(o) === '[object Array]';
  }
  clone.__isArray = __isArray;
  function __isRegExp(o) {
    return (0, _typeof2.default)(o) === 'object' && __objToStr(o) === '[object RegExp]';
  }
  clone.__isRegExp = __isRegExp;
  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }
  clone.__getRegExpFlags = __getRegExpFlags;
  return clone;
}();
var _default = clone;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 91).Buffer))

/***/ }),

/***/ 91:
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 92)
var ieee754 = __webpack_require__(/*! ieee754 */ 93)
var isArray = __webpack_require__(/*! isarray */ 94)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 92:
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 93:
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 94:
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map