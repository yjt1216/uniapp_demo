(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle/common/vendor"],{

/***/ 346:
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