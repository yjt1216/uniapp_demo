(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle_b/common/vendor"],{

/***/ 1501:
/*!*********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/sheep/mock/tableData.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "date": "苏州第一附属医院",
  "name": "33%",
  "address": "11111"
}, {
  "date": "苏州大学第一附属医院",
  "name": "33%",
  "address": "2222"
}, {
  "date": "苏州大学第一附属医院",
  "name": "33%",
  "address": "3333"
}, {
  "date": "苏州大学第一附属医院",
  "name": "33%",
  "address": "44444"
}, {
  "date": "苏州大学第一附属医院",
  "name": "33%",
  "address": "55555"
}, {
  "date": "苏州大学第一附属医院",
  "name": "36%",
  "address": "786"
}, {
  "date": "苏州大学第一附属医院",
  "name": "13%",
  "address": "777"
}, {
  "date": "江苏省人民医院",
  "name": "10%",
  "address": "88"
}, {
  "date": "苏州大学第一附属医院",
  "name": "33%",
  "address": "994"
}, {
  "date": "苏州大学第一附属医院",
  "name": "33%",
  "address": "890"
}];
exports.default = _default;

/***/ }),

/***/ 538:
/*!***************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/moment.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }
  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }
  function map(arr, fn) {
    var res = [],
      i,
      arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function some(fun) {
      var t = Object(this),
        len = t.length >>> 0,
        i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m),
        parsedParts = some.call(flags.parsedDateParts, function (i) {
          return i != null;
        }),
        isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [],
    updateInProgress = false;
  function copyConfig(to, from) {
    var i,
      prop,
      val,
      momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }
    return to;
  }

  // Moment prototype object
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [],
          arg,
          i,
          key,
          argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = '';
          if (_typeof(arguments[i]) === 'object') {
            arg += '\n[' + i + '] ';
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }
            }
            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
      prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function keys(obj) {
      var i,
        res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };
  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function func() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
      i,
      length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function (mom) {
      var output = '',
        i;
      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }

  // format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
      if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
        return tok.slice(1);
      }
      return tok;
    }).join('');
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = 'Invalid date';
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }
  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
      normalizedProp,
      prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {};
  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }
  function getPrioritizedUnits(unitsObj) {
    var units = [],
      u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({
          unit: u,
          priority: priorities[u]
        });
      }
    }
    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
      value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }
  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        value = toInt(value);
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  }

  // MOMENTS

  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (_typeof(units) === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units),
        i,
        prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  var match1 = /\d/,
    //       0 - 9
    match2 = /\d\d/,
    //      00 - 99
    match3 = /\d{3}/,
    //     000 - 999
    match4 = /\d{4}/,
    //    0000 - 9999
    match6 = /[+-]?\d{6}/,
    // -999999 - 999999
    match1to2 = /\d\d?/,
    //       0 - 99
    match3to4 = /\d\d\d\d?/,
    //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/,
    //   99999 - 999999
    match1to3 = /\d{1,3}/,
    //       0 - 999
    match1to4 = /\d{1,4}/,
    //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/,
    // -999999 - 999999
    matchUnsigned = /\d+/,
    //       0 - inf
    matchSigned = /[+-]?\d+/,
    //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi,
    // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
    // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
    // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;
  regexes = {};
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }
    return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
      func = callback,
      tokenLen;
    if (typeof token === 'string') {
      token = [token];
    }
    if (isNumber(callback)) {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }
    tokenLen = token.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token[i]] = func;
    }
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }
  var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function indexOf(o) {
      // I know
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });

  // LOCALES

  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = matchWord,
    defaultMonthsRegex = matchWord;
  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }
  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  function handleStrictParse(monthName, format, strict) {
    var i,
      ii,
      mom,
      llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      // No op
      return mom;
    }
    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        // TODO: Another silent failure?
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom;
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  var getSetYear = makeGetSet('FullYear', true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }
    return date;
  }
  function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      // preserve leap years using a full 400 year cycle, then reset
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
    var
      // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
      // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
      weekOffset = firstWeekOffset(year, dow, doy),
      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
      resYear,
      resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
      resWeek,
      resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });

  // HELPERS

  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 6th is the first week of the year.
  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }

  // MOMENTS

  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }

  // LOCALES
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = matchWord,
    defaultWeekdaysShortRegex = matchWord,
    defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format, strict) {
    var i,
      ii,
      mom,
      llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [],
      shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom,
      minp,
      shortp,
      longp;
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ''));
      shortp = regexEscape(this.weekdaysShort(mom, ''));
      longp = regexEscape(this.weekdays(mom, ''));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
      pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
      pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };

  // internal storage for locale config files
  var locales = {},
    localeFamilies = {},
    globalLocale;
  function commonPrefix(arr1, arr2) {
    var i,
      minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    var i = 0,
      j,
      next,
      locale,
      split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    // Prevent names that look like filesystem paths, i.e contain '/' or '\'
    return name.match('^[^/\\\\]*$') != null;
  }
  function loadLocale(name) {
    var oldLocale = null,
      aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (locales[name] === undefined && typeof module !== 'undefined' && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        __webpack_require__(539)("./" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        // mark as not found to avoid repeating expensive file require call causing high CPU
        // when trying to find en-US, en_US, en-us for every format call
        locales[name] = null; // null means not found
      }
    }

    return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale,
        parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);
          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name: name,
              config: config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale,
        tmpLocale,
        parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        // Update existing child locale in-place to avoid memory-leaks
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          // updateLocale is called for creating a new locale
          // Set abbr so it will have a name (getters return
          // undefined otherwise).
          config.abbr = name;
        }
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
      }

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }

  // returns locale data
  function getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow,
      a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
    // iso time formats and regexes
    isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };

  // date from iso format
  function configFromISO(config) {
    var i,
      l,
      string = config._i,
      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
      allowTime,
      dateFormat,
      timeFormat,
      tzFormat,
      isoDatesLen = isoDates.length,
      isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^()]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
        weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10),
        m = hm % 100,
        h = (hm - m) / 100;
      return h * 60 + m;
    }
  }

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
      parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }

  // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });

  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray(config) {
    var i,
      date,
      input = [],
      currentDate,
      expectedWeekday,
      yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
      i,
      parsedInput,
      tokens,
      token,
      skipped,
      stringLength = string.length,
      totalParsedInputLength = 0,
      era,
      tokenLen;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens.length;
    for (i = 0; i < tokenLen; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    // handle era
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
    var tempConfig,
      bestMoment,
      scoreToBeat,
      i,
      currentScore,
      validFormatFound,
      bestFormatIsValid = false,
      configfLen = config._f.length;
    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      //or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i),
      dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
      format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format === undefined && input === '') {
      return createInvalid({
        nullInput: true
      });
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (format === true || format === false) {
      strict = format;
      format = undefined;
    }
    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }
    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }),
    prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    });

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }

  // TODO: Use [].sort instead?
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }
  var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };
  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
  function isDurationValid(m) {
    var key,
      unitHasDecimal = false,
      i,
      orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }

        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds + seconds * 1e3 +
    // 1000
    minutes * 6e4 +
    // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  // FORMATTING

  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset(),
        sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
    });
  }
  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
      chunk,
      parts,
      minutes;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + toInt(parts[2]);
    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
      localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {},
      other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input,
      // matching against regexp is expensive, do it on demand
      match = null,
      sign,
      ret,
      diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input)) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (_typeof(duration) === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, '_isValid')) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, 'M');
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
      days = absRound(duration._days),
      months = absRound(duration._months);
    if (!mom.isValid()) {
      // No op
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }
  var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');
  function isString(input) {
    return typeof input === 'string' || input instanceof String;
  }

  // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
      propertyTest = false,
      properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
      i,
      property,
      propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input),
      dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function (item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
      propertyTest = false,
      properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
      i,
      property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
  }
  function calendar$1(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = undefined;
        formats = undefined;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = undefined;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = undefined;
      }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
      sod = cloneWithOffset(now, this).startOf('day'),
      format = hooks.calendarFormat(this, sod) || 'sameElse',
      output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from, to, units, inclusivity) {
    var localFrom = isMoment(from) ? from : createLocal(from),
      localTo = isMoment(to) ? to : createLocal(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
      inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;
      case 'month':
        output = monthDiff(this, that);
        break;
      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;
      case 'second':
        output = (this - that) / 1e3;
        break;
      // 1000
      case 'minute':
        output = (this - that) / 6e4;
        break;
      // 1000 * 60
      case 'hour':
        output = (this - that) / 36e5;
        break;
      // 1000 * 60 * 60
      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst
      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      // end-of-month calculations work correct when the start month has more
      // days than the end month.
      return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2,
      adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true,
      m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
      }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }

  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */
  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
      zone = '',
      prefix,
      year,
      datetime,
      suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

  // actual modulo - handles negative numbers (for dates before 1970):
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case 'year':
        time = startOfDate(this.year(), 0, 1);
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
        break;
      case 'month':
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case 'week':
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
        break;
      case 'isoWeek':
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case 'hour':
        time = this._d.valueOf();
        time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
        break;
      case 'minute':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case 'second':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case 'year':
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case 'month':
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case 'week':
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case 'isoWeek':
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case 'hour':
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
        break;
      case 'minute':
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case 'second':
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken('N', 0, 0, 'eraAbbr');
  addFormatToken('NN', 0, 0, 'eraAbbr');
  addFormatToken('NNN', 0, 0, 'eraAbbr');
  addFormatToken('NNNN', 0, 0, 'eraName');
  addFormatToken('NNNNN', 0, 0, 'eraNarrow');
  addFormatToken('y', ['y', 1], 'yo', 'eraYear');
  addFormatToken('y', ['yy', 2], 0, 'eraYear');
  addFormatToken('y', ['yyy', 3], 0, 'eraYear');
  addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
  addRegexToken('N', matchEraAbbr);
  addRegexToken('NN', matchEraAbbr);
  addRegexToken('NNN', matchEraAbbr);
  addRegexToken('NNNN', matchEraName);
  addRegexToken('NNNNN', matchEraNarrow);
  addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  });
  addRegexToken('y', matchUnsigned);
  addRegexToken('yy', matchUnsigned);
  addRegexToken('yyy', matchUnsigned);
  addRegexToken('yyyy', matchUnsigned);
  addRegexToken('yo', matchEraYearOrdinal);
  addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
  addParseToken(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format) {
    var i,
      l,
      date,
      eras = this._eras || getLocale('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (_typeof(eras[i].since)) {
        case 'string':
          // truncate time
          date = hooks(eras[i].since).startOf('day');
          eras[i].since = date.valueOf();
          break;
      }
      switch (_typeof(eras[i].until)) {
        case 'undefined':
          eras[i].until = +Infinity;
          break;
        case 'string':
          // truncate time
          date = hooks(eras[i].until).startOf('day').valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format, strict) {
    var i,
      l,
      eras = this.eras(),
      name,
      abbr,
      narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format) {
          case 'N':
          case 'NN':
          case 'NNN':
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case 'NNNN':
            if (name === eraName) {
              return eras[i];
            }
            break;
          case 'NNNNN':
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i,
      l,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return '';
  }
  function getEraNarrow() {
    var i,
      l,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return '';
  }
  function getEraAbbr() {
    var i,
      l,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return '';
  }
  function getEraYear() {
    var i,
      l,
      dir,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? +1 : -1;

      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNameRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, '_erasAbbrRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNarrowRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [],
      namePieces = [],
      narrowPieces = [],
      mixedPieces = [],
      i,
      l,
      eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      namePieces.push(regexEscape(eras[i].name));
      abbrPieces.push(regexEscape(eras[i].abbr));
      narrowPieces.push(regexEscape(eras[i].narrow));
      mixedPieces.push(regexEscape(eras[i].name));
      mixedPieces.push(regexEscape(eras[i].abbr));
      mixedPieces.push(regexEscape(eras[i].narrow));
    }
    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);

  // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIORITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  });

  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token, getSetMillisecond;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }
  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }
  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
      return 'Moment<' + this.format() + '>';
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
  function createUnix(input) {
    return createLocal(input * 1000);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string) {
    return string;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format, index, field, setter) {
    var locale = getLocale(),
      utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }
    format = format || '';
    if (index != null) {
      return get$1(format, index, field, 'month');
    }
    var i,
      out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }
    return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }
      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }
      format = format || '';
    }
    var locale = getLocale(),
      shift = localeSorted ? locale._week.dow : 0,
      i,
      out = [];
    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }
  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }
  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }
  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }
  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }
  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }
  getSetGlobalLocale('en', {
    eras: [{
      since: '0001-01-01',
      until: +Infinity,
      offset: 1,
      name: 'Anno Domini',
      narrow: 'AD',
      abbr: 'AD'
    }, {
      since: '0000-12-31',
      until: -Infinity,
      offset: 1,
      name: 'Before Christ',
      narrow: 'BC',
      abbr: 'BC'
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  });

  // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds = this._milliseconds,
      days = this._days,
      months = this._months,
      data = this._data,
      seconds,
      minutes,
      hours,
      years,
      monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }
  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days,
      months,
      milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === 'month' || units === 'quarter' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      switch (units) {
        case 'month':
          return months;
        case 'quarter':
          return months / 3;
        case 'year':
          return months / 12;
      }
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }
  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round,
    thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11 // months to year
    };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = createDuration(posNegDuration).abs(),
      seconds = round(duration.as('s')),
      minutes = round(duration.as('m')),
      hours = round(duration.as('h')),
      days = round(duration.as('d')),
      months = round(duration.as('M')),
      weeks = round(duration.as('w')),
      years = round(duration.as('y')),
      a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];
    if (thresholds.w != null) {
      a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
    }
    a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }
    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }
    return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false,
      th = thresholds,
      locale,
      output;
    if (_typeof(argWithSuffix) === 'object') {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
      withSuffix = argWithSuffix;
    }
    if (_typeof(argThresholds) === 'object') {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds = abs$1(this._milliseconds) / 1000,
      days = abs$1(this._days),
      months = abs$1(this._months),
      minutes,
      hours,
      years,
      s,
      total = this.asSeconds(),
      totalSign,
      ymSign,
      daysSign,
      hmsSign;
    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
    return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang;

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  });

  //! moment.js

  hooks.version = '2.29.4';
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;

  // currently HTML5 input type only supports 24-hour formats
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
    // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',
    // <input type="date" />
    TIME: 'HH:mm',
    // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',
    // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',
    // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW',
    // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />
  };

  return hooks;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 189)(module)))

/***/ }),

/***/ 539:
/*!**************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 540,
	"./af.js": 540,
	"./ar": 541,
	"./ar-dz": 542,
	"./ar-dz.js": 542,
	"./ar-kw": 543,
	"./ar-kw.js": 543,
	"./ar-ly": 544,
	"./ar-ly.js": 544,
	"./ar-ma": 545,
	"./ar-ma.js": 545,
	"./ar-sa": 546,
	"./ar-sa.js": 546,
	"./ar-tn": 547,
	"./ar-tn.js": 547,
	"./ar.js": 541,
	"./az": 548,
	"./az.js": 548,
	"./be": 549,
	"./be.js": 549,
	"./bg": 550,
	"./bg.js": 550,
	"./bm": 551,
	"./bm.js": 551,
	"./bn": 552,
	"./bn-bd": 553,
	"./bn-bd.js": 553,
	"./bn.js": 552,
	"./bo": 554,
	"./bo.js": 554,
	"./br": 555,
	"./br.js": 555,
	"./bs": 556,
	"./bs.js": 556,
	"./ca": 557,
	"./ca.js": 557,
	"./cs": 558,
	"./cs.js": 558,
	"./cv": 559,
	"./cv.js": 559,
	"./cy": 560,
	"./cy.js": 560,
	"./da": 561,
	"./da.js": 561,
	"./de": 562,
	"./de-at": 563,
	"./de-at.js": 563,
	"./de-ch": 564,
	"./de-ch.js": 564,
	"./de.js": 562,
	"./dv": 565,
	"./dv.js": 565,
	"./el": 566,
	"./el.js": 566,
	"./en-au": 567,
	"./en-au.js": 567,
	"./en-ca": 568,
	"./en-ca.js": 568,
	"./en-gb": 569,
	"./en-gb.js": 569,
	"./en-ie": 570,
	"./en-ie.js": 570,
	"./en-il": 571,
	"./en-il.js": 571,
	"./en-in": 572,
	"./en-in.js": 572,
	"./en-nz": 573,
	"./en-nz.js": 573,
	"./en-sg": 574,
	"./en-sg.js": 574,
	"./eo": 575,
	"./eo.js": 575,
	"./es": 576,
	"./es-do": 577,
	"./es-do.js": 577,
	"./es-mx": 578,
	"./es-mx.js": 578,
	"./es-us": 579,
	"./es-us.js": 579,
	"./es.js": 576,
	"./et": 580,
	"./et.js": 580,
	"./eu": 581,
	"./eu.js": 581,
	"./fa": 582,
	"./fa.js": 582,
	"./fi": 583,
	"./fi.js": 583,
	"./fil": 584,
	"./fil.js": 584,
	"./fo": 585,
	"./fo.js": 585,
	"./fr": 586,
	"./fr-ca": 587,
	"./fr-ca.js": 587,
	"./fr-ch": 588,
	"./fr-ch.js": 588,
	"./fr.js": 586,
	"./fy": 589,
	"./fy.js": 589,
	"./ga": 590,
	"./ga.js": 590,
	"./gd": 591,
	"./gd.js": 591,
	"./gl": 592,
	"./gl.js": 592,
	"./gom-deva": 593,
	"./gom-deva.js": 593,
	"./gom-latn": 594,
	"./gom-latn.js": 594,
	"./gu": 595,
	"./gu.js": 595,
	"./he": 596,
	"./he.js": 596,
	"./hi": 597,
	"./hi.js": 597,
	"./hr": 598,
	"./hr.js": 598,
	"./hu": 599,
	"./hu.js": 599,
	"./hy-am": 600,
	"./hy-am.js": 600,
	"./id": 601,
	"./id.js": 601,
	"./is": 602,
	"./is.js": 602,
	"./it": 603,
	"./it-ch": 604,
	"./it-ch.js": 604,
	"./it.js": 603,
	"./ja": 605,
	"./ja.js": 605,
	"./jv": 606,
	"./jv.js": 606,
	"./ka": 607,
	"./ka.js": 607,
	"./kk": 608,
	"./kk.js": 608,
	"./km": 609,
	"./km.js": 609,
	"./kn": 610,
	"./kn.js": 610,
	"./ko": 611,
	"./ko.js": 611,
	"./ku": 612,
	"./ku.js": 612,
	"./ky": 613,
	"./ky.js": 613,
	"./lb": 614,
	"./lb.js": 614,
	"./lo": 615,
	"./lo.js": 615,
	"./lt": 616,
	"./lt.js": 616,
	"./lv": 617,
	"./lv.js": 617,
	"./me": 618,
	"./me.js": 618,
	"./mi": 619,
	"./mi.js": 619,
	"./mk": 620,
	"./mk.js": 620,
	"./ml": 621,
	"./ml.js": 621,
	"./mn": 622,
	"./mn.js": 622,
	"./mr": 623,
	"./mr.js": 623,
	"./ms": 624,
	"./ms-my": 625,
	"./ms-my.js": 625,
	"./ms.js": 624,
	"./mt": 626,
	"./mt.js": 626,
	"./my": 627,
	"./my.js": 627,
	"./nb": 628,
	"./nb.js": 628,
	"./ne": 629,
	"./ne.js": 629,
	"./nl": 630,
	"./nl-be": 631,
	"./nl-be.js": 631,
	"./nl.js": 630,
	"./nn": 632,
	"./nn.js": 632,
	"./oc-lnc": 633,
	"./oc-lnc.js": 633,
	"./pa-in": 634,
	"./pa-in.js": 634,
	"./pl": 635,
	"./pl.js": 635,
	"./pt": 636,
	"./pt-br": 637,
	"./pt-br.js": 637,
	"./pt.js": 636,
	"./ro": 638,
	"./ro.js": 638,
	"./ru": 639,
	"./ru.js": 639,
	"./sd": 640,
	"./sd.js": 640,
	"./se": 641,
	"./se.js": 641,
	"./si": 642,
	"./si.js": 642,
	"./sk": 643,
	"./sk.js": 643,
	"./sl": 644,
	"./sl.js": 644,
	"./sq": 645,
	"./sq.js": 645,
	"./sr": 646,
	"./sr-cyrl": 647,
	"./sr-cyrl.js": 647,
	"./sr.js": 646,
	"./ss": 648,
	"./ss.js": 648,
	"./sv": 649,
	"./sv.js": 649,
	"./sw": 650,
	"./sw.js": 650,
	"./ta": 651,
	"./ta.js": 651,
	"./te": 652,
	"./te.js": 652,
	"./tet": 653,
	"./tet.js": 653,
	"./tg": 654,
	"./tg.js": 654,
	"./th": 655,
	"./th.js": 655,
	"./tk": 656,
	"./tk.js": 656,
	"./tl-ph": 657,
	"./tl-ph.js": 657,
	"./tlh": 658,
	"./tlh.js": 658,
	"./tr": 659,
	"./tr.js": 659,
	"./tzl": 660,
	"./tzl.js": 660,
	"./tzm": 661,
	"./tzm-latn": 662,
	"./tzm-latn.js": 662,
	"./tzm.js": 661,
	"./ug-cn": 663,
	"./ug-cn.js": 663,
	"./uk": 664,
	"./uk.js": 664,
	"./ur": 665,
	"./ur.js": 665,
	"./uz": 666,
	"./uz-latn": 667,
	"./uz-latn.js": 667,
	"./uz.js": 666,
	"./vi": 668,
	"./vi.js": 668,
	"./x-pseudo": 669,
	"./x-pseudo.js": 669,
	"./yo": 670,
	"./yo.js": 670,
	"./zh-cn": 671,
	"./zh-cn.js": 671,
	"./zh-hk": 672,
	"./zh-hk.js": 672,
	"./zh-mo": 673,
	"./zh-mo.js": 673,
	"./zh-tw": 674,
	"./zh-tw.js": 674
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 539;

/***/ }),

/***/ 540:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/af.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var af = moment.defineLocale('af', {
    months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
    weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM: function isPM(input) {
      return /^nm$/i.test(input);
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'vm' : 'VM';
      } else {
        return isLower ? 'nm' : 'NM';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Vandag om] LT',
      nextDay: '[Môre om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[Gister om] LT',
      lastWeek: '[Laas] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'oor %s',
      past: '%s gelede',
      s: "'n paar sekondes",
      ss: '%d sekondes',
      m: "'n minuut",
      mm: '%d minute',
      h: "'n uur",
      hh: '%d ure',
      d: "'n dag",
      dd: '%d dae',
      M: "'n maand",
      MM: '%d maande',
      y: "'n jaar",
      yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
    },

    week: {
      dow: 1,
      // Maandag is die eerste dag van die week.
      doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    }
  });

  return af;
});

/***/ }),

/***/ 541:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '١',
      2: '٢',
      3: '٣',
      4: '٤',
      5: '٥',
      6: '٦',
      7: '٧',
      8: '٨',
      9: '٩',
      0: '٠'
    },
    numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
    },
    pluralForm = function pluralForm(n) {
      return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    },
    plurals = {
      s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
      m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
      h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
      d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
      M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
      y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    },
    pluralize = function pluralize(u) {
      return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
          str = plurals[u][pluralForm(number)];
        if (f === 2) {
          str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
      };
    },
    months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  var ar = moment.defineLocale('ar', {
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y')
    },
    preparse: function preparse(string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return ar;
});

/***/ }),

/***/ 542:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar-dz.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Arabic (Algeria) [ar-dz]
//! author : Amine Roukh: https://github.com/Amine27
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
//! author : Noureddine LOUAHEDJ : https://github.com/noureddinem

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var pluralForm = function pluralForm(n) {
      return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    },
    plurals = {
      s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
      m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
      h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
      d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
      M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
      y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    },
    pluralize = function pluralize(u) {
      return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
          str = plurals[u][pluralForm(number)];
        if (f === 2) {
          str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
      };
    },
    months = ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  var arDz = moment.defineLocale('ar-dz', {
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y')
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return arDz;
});

/***/ }),

/***/ 543:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar-kw.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Arabic (Kuwait) [ar-kw]
//! author : Nusret Parlak: https://github.com/nusretparlak

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var arKw = moment.defineLocale('ar-kw', {
    months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return arKw;
});

/***/ }),

/***/ 544:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar-ly.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Arabic (Libya) [ar-ly]
//! author : Ali Hmer: https://github.com/kikoanis

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      0: '0'
    },
    pluralForm = function pluralForm(n) {
      return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    },
    plurals = {
      s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
      m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
      h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
      d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
      M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
      y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    },
    pluralize = function pluralize(u) {
      return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
          str = plurals[u][pluralForm(number)];
        if (f === 2) {
          str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
      };
    },
    months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  var arLy = moment.defineLocale('ar-ly', {
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: "D/\u200FM/\u200FYYYY",
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y')
    },
    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return arLy;
});

/***/ }),

/***/ 545:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar-ma.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Arabic (Morocco) [ar-ma]
//! author : ElFadili Yassine : https://github.com/ElFadiliY
//! author : Abdel Said : https://github.com/abdelsaid

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var arMa = moment.defineLocale('ar-ma', {
    months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return arMa;
});

/***/ }),

/***/ 546:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar-sa.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Arabic (Saudi Arabia) [ar-sa]
//! author : Suhail Alkowaileet : https://github.com/xsoh

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '١',
      2: '٢',
      3: '٣',
      4: '٤',
      5: '٥',
      6: '٦',
      7: '٧',
      8: '٨',
      9: '٩',
      0: '٠'
    },
    numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
    };
  var arSa = moment.defineLocale('ar-sa', {
    months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function isPM(input) {
      return 'م' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    preparse: function preparse(string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return arSa;
});

/***/ }),

/***/ 547:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ar-tn.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var arTn = moment.defineLocale('ar-tn', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      ss: '%d ثانية',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return arTn;
});

/***/ }),

/***/ 548:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/az.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-üncü',
    4: '-üncü',
    100: '-üncü',
    6: '-ncı',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-ıncı',
    90: '-ıncı'
  };
  var az = moment.defineLocale('az', {
    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[sabah saat] LT',
      nextWeek: '[gələn həftə] dddd [saat] LT',
      lastDay: '[dünən] LT',
      lastWeek: '[keçən həftə] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s sonra',
      past: '%s əvvəl',
      s: 'bir neçə saniyə',
      ss: '%d saniyə',
      m: 'bir dəqiqə',
      mm: '%d dəqiqə',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir il',
      yy: '%d il'
    },
    meridiemParse: /gecə|səhər|gündüz|axşam/,
    isPM: function isPM(input) {
      return /^(gündüz|axşam)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'gecə';
      } else if (hour < 12) {
        return 'səhər';
      } else if (hour < 17) {
        return 'gündüz';
      } else {
        return 'axşam';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
    ordinal: function ordinal(number) {
      if (number === 0) {
        // special case for zero
        return number + '-ıncı';
      }
      var a = number % 10,
        b = number % 100 - a,
        c = number >= 100 ? 100 : null;
      return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return az;
});

/***/ }),

/***/ 549:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/be.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elensúle : https://github.com/Oire

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
      mm: withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
      hh: withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
      dd: 'дзень_дні_дзён',
      MM: 'месяц_месяцы_месяцаў',
      yy: 'год_гады_гадоў'
    };
    if (key === 'm') {
      return withoutSuffix ? 'хвіліна' : 'хвіліну';
    } else if (key === 'h') {
      return withoutSuffix ? 'гадзіна' : 'гадзіну';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  var be = moment.defineLocale('be', {
    months: {
      format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
      standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
    },
    monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays: {
      format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
      standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
      isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., HH:mm',
      LLLL: 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar: {
      sameDay: '[Сёння ў] LT',
      nextDay: '[Заўтра ў] LT',
      lastDay: '[Учора ў] LT',
      nextWeek: function nextWeek() {
        return '[У] dddd [ў] LT';
      },
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return '[У мінулую] dddd [ў] LT';
          case 1:
          case 2:
          case 4:
            return '[У мінулы] dddd [ў] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'праз %s',
      past: '%s таму',
      s: 'некалькі секунд',
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithPlural,
      hh: relativeTimeWithPlural,
      d: 'дзень',
      dd: relativeTimeWithPlural,
      M: 'месяц',
      MM: relativeTimeWithPlural,
      y: 'год',
      yy: relativeTimeWithPlural
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM: function isPM(input) {
      return /^(дня|вечара)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ночы';
      } else if (hour < 12) {
        return 'раніцы';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечара';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';
        case 'D':
          return number + '-га';
        default:
          return number;
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return be;
});

/***/ }),

/***/ 550:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/bg.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var bg = moment.defineLocale('bg', {
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Днес в] LT',
      nextDay: '[Утре в] LT',
      nextWeek: 'dddd [в] LT',
      lastDay: '[Вчера в] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[Миналата] dddd [в] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[Миналия] dddd [в] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'след %s',
      past: 'преди %s',
      s: 'няколко секунди',
      ss: '%d секунди',
      m: 'минута',
      mm: '%d минути',
      h: 'час',
      hh: '%d часа',
      d: 'ден',
      dd: '%d дена',
      w: 'седмица',
      ww: '%d седмици',
      M: 'месец',
      MM: '%d месеца',
      y: 'година',
      yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function ordinal(number) {
      var lastDigit = number % 10,
        last2Digits = number % 100;
      if (number === 0) {
        return number + '-ев';
      } else if (last2Digits === 0) {
        return number + '-ен';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-ти';
      } else if (lastDigit === 1) {
        return number + '-ви';
      } else if (lastDigit === 2) {
        return number + '-ри';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-ми';
      } else {
        return number + '-ти';
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return bg;
});

/***/ }),

/***/ 551:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/bm.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Bambara [bm]
//! author : Estelle Comment : https://github.com/estellecomment

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var bm = moment.defineLocale('bm', {
    months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
    monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
    weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
    weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
    weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'MMMM [tile] D [san] YYYY',
      LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
      LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
    },
    calendar: {
      sameDay: '[Bi lɛrɛ] LT',
      nextDay: '[Sini lɛrɛ] LT',
      nextWeek: 'dddd [don lɛrɛ] LT',
      lastDay: '[Kunu lɛrɛ] LT',
      lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s kɔnɔ',
      past: 'a bɛ %s bɔ',
      s: 'sanga dama dama',
      ss: 'sekondi %d',
      m: 'miniti kelen',
      mm: 'miniti %d',
      h: 'lɛrɛ kelen',
      hh: 'lɛrɛ %d',
      d: 'tile kelen',
      dd: 'tile %d',
      M: 'kalo kelen',
      MM: 'kalo %d',
      y: 'san kelen',
      yy: 'san %d'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return bm;
});

/***/ }),

/***/ 552:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/bn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '১',
      2: '২',
      3: '৩',
      4: '৪',
      5: '৫',
      6: '৬',
      7: '৭',
      8: '৮',
      9: '৯',
      0: '০'
    },
    numberMap = {
      '১': '1',
      '২': '2',
      '৩': '3',
      '৪': '4',
      '৫': '5',
      '৬': '6',
      '৭': '7',
      '৮': '8',
      '৯': '9',
      '০': '0'
    };
  var bn = moment.defineLocale('bn', {
    months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
    weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
    weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
    longDateFormat: {
      LT: 'A h:mm সময়',
      LTS: 'A h:mm:ss সময়',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm সময়',
      LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
    },
    calendar: {
      sameDay: '[আজ] LT',
      nextDay: '[আগামীকাল] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[গতকাল] LT',
      lastWeek: '[গত] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s পরে',
      past: '%s আগে',
      s: 'কয়েক সেকেন্ড',
      ss: '%d সেকেন্ড',
      m: 'এক মিনিট',
      mm: '%d মিনিট',
      h: 'এক ঘন্টা',
      hh: '%d ঘন্টা',
      d: 'এক দিন',
      dd: '%d দিন',
      M: 'এক মাস',
      MM: '%d মাস',
      y: 'এক বছর',
      yy: '%d বছর'
    },
    preparse: function preparse(string) {
      return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'রাত' && hour >= 4 || meridiem === 'দুপুর' && hour < 5 || meridiem === 'বিকাল') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'রাত';
      } else if (hour < 10) {
        return 'সকাল';
      } else if (hour < 17) {
        return 'দুপুর';
      } else if (hour < 20) {
        return 'বিকাল';
      } else {
        return 'রাত';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return bn;
});

/***/ }),

/***/ 553:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/bn-bd.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Bengali (Bangladesh) [bn-bd]
//! author : Asraf Hossain Patoary : https://github.com/ashwoolford

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '১',
      2: '২',
      3: '৩',
      4: '৪',
      5: '৫',
      6: '৬',
      7: '৭',
      8: '৮',
      9: '৯',
      0: '০'
    },
    numberMap = {
      '১': '1',
      '২': '2',
      '৩': '3',
      '৪': '4',
      '৫': '5',
      '৬': '6',
      '৭': '7',
      '৮': '8',
      '৯': '9',
      '০': '0'
    };
  var bnBd = moment.defineLocale('bn-bd', {
    months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
    weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
    weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
    longDateFormat: {
      LT: 'A h:mm সময়',
      LTS: 'A h:mm:ss সময়',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm সময়',
      LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
    },
    calendar: {
      sameDay: '[আজ] LT',
      nextDay: '[আগামীকাল] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[গতকাল] LT',
      lastWeek: '[গত] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s পরে',
      past: '%s আগে',
      s: 'কয়েক সেকেন্ড',
      ss: '%d সেকেন্ড',
      m: 'এক মিনিট',
      mm: '%d মিনিট',
      h: 'এক ঘন্টা',
      hh: '%d ঘন্টা',
      d: 'এক দিন',
      dd: '%d দিন',
      M: 'এক মাস',
      MM: '%d মাস',
      y: 'এক বছর',
      yy: '%d বছর'
    },
    preparse: function preparse(string) {
      return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'রাত') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ভোর') {
        return hour;
      } else if (meridiem === 'সকাল') {
        return hour;
      } else if (meridiem === 'দুপুর') {
        return hour >= 3 ? hour : hour + 12;
      } else if (meridiem === 'বিকাল') {
        return hour + 12;
      } else if (meridiem === 'সন্ধ্যা') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'রাত';
      } else if (hour < 6) {
        return 'ভোর';
      } else if (hour < 12) {
        return 'সকাল';
      } else if (hour < 15) {
        return 'দুপুর';
      } else if (hour < 18) {
        return 'বিকাল';
      } else if (hour < 20) {
        return 'সন্ধ্যা';
      } else {
        return 'রাত';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return bnBd;
});

/***/ }),

/***/ 554:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/bo.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '༡',
      2: '༢',
      3: '༣',
      4: '༤',
      5: '༥',
      6: '༦',
      7: '༧',
      8: '༨',
      9: '༩',
      0: '༠'
    },
    numberMap = {
      '༡': '1',
      '༢': '2',
      '༣': '3',
      '༤': '4',
      '༥': '5',
      '༦': '6',
      '༧': '7',
      '༨': '8',
      '༩': '9',
      '༠': '0'
    };
  var bo = moment.defineLocale('bo', {
    months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    monthsShort: 'ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12'.split('_'),
    monthsShortRegex: /^(ཟླ་\d{1,2})/,
    monthsParseExact: true,
    weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
    weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    weekdaysMin: 'ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
      sameDay: '[དི་རིང] LT',
      nextDay: '[སང་ཉིན] LT',
      nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
      lastDay: '[ཁ་སང] LT',
      lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ལ་',
      past: '%s སྔན་ལ',
      s: 'ལམ་སང',
      ss: '%d སྐར་ཆ།',
      m: 'སྐར་མ་གཅིག',
      mm: '%d སྐར་མ',
      h: 'ཆུ་ཚོད་གཅིག',
      hh: '%d ཆུ་ཚོད',
      d: 'ཉིན་གཅིག',
      dd: '%d ཉིན་',
      M: 'ཟླ་བ་གཅིག',
      MM: '%d ཟླ་བ',
      y: 'ལོ་གཅིག',
      yy: '%d ལོ'
    },
    preparse: function preparse(string) {
      return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'མཚན་མོ' && hour >= 4 || meridiem === 'ཉིན་གུང' && hour < 5 || meridiem === 'དགོང་དག') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'མཚན་མོ';
      } else if (hour < 10) {
        return 'ཞོགས་ཀས';
      } else if (hour < 17) {
        return 'ཉིན་གུང';
      } else if (hour < 20) {
        return 'དགོང་དག';
      } else {
        return 'མཚན་མོ';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return bo;
});

/***/ }),

/***/ 555:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/br.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Breton [br]
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function relativeTimeWithMutation(number, withoutSuffix, key) {
    var format = {
      mm: 'munutenn',
      MM: 'miz',
      dd: 'devezh'
    };
    return number + ' ' + mutation(format[key], number);
  }
  function specialMutationForYears(number) {
    switch (lastNumber(number)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 9:
        return number + ' bloaz';
      default:
        return number + ' vloaz';
    }
  }
  function lastNumber(number) {
    if (number > 9) {
      return lastNumber(number % 10);
    }
    return number;
  }
  function mutation(text, number) {
    if (number === 2) {
      return softMutation(text);
    }
    return text;
  }
  function softMutation(text) {
    var mutationTable = {
      m: 'v',
      b: 'v',
      d: 'z'
    };
    if (mutationTable[text.charAt(0)] === undefined) {
      return text;
    }
    return mutationTable[text.charAt(0)] + text.substring(1);
  }
  var monthsParse = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
    monthsRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
    monthsStrictRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
    monthsShortStrictRegex = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
    fullWeekdaysParse = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
    shortWeekdaysParse = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
    minWeekdaysParse = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
  var br = moment.defineLocale('br', {
    months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
    monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    weekdaysParse: minWeekdaysParse,
    fullWeekdaysParse: fullWeekdaysParse,
    shortWeekdaysParse: shortWeekdaysParse,
    minWeekdaysParse: minWeekdaysParse,
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: monthsStrictRegex,
    monthsShortStrictRegex: monthsShortStrictRegex,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [a viz] MMMM YYYY',
      LLL: 'D [a viz] MMMM YYYY HH:mm',
      LLLL: 'dddd, D [a viz] MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hiziv da] LT',
      nextDay: '[Warcʼhoazh da] LT',
      nextWeek: 'dddd [da] LT',
      lastDay: '[Decʼh da] LT',
      lastWeek: 'dddd [paset da] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'a-benn %s',
      past: '%s ʼzo',
      s: 'un nebeud segondennoù',
      ss: '%d eilenn',
      m: 'ur vunutenn',
      mm: relativeTimeWithMutation,
      h: 'un eur',
      hh: '%d eur',
      d: 'un devezh',
      dd: relativeTimeWithMutation,
      M: 'ur miz',
      MM: relativeTimeWithMutation,
      y: 'ur bloaz',
      yy: specialMutationForYears
    },
    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'añ' : 'vet';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },

    meridiemParse: /a.m.|g.m./,
    // goude merenn | a-raok merenn
    isPM: function isPM(token) {
      return token === 'g.m.';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      return hour < 12 ? 'a.m.' : 'g.m.';
    }
  });
  return br;
});

/***/ }),

/***/ 556:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/bs.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Bosnian [bs]
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Marković

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        if (number === 1) {
          result += 'sekunda';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sekunde';
        } else {
          result += 'sekundi';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        if (number === 1) {
          result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'minute';
        } else {
          result += 'minuta';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
        if (number === 1) {
          result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sata';
        } else {
          result += 'sati';
        }
        return result;
      case 'dd':
        if (number === 1) {
          result += 'dan';
        } else {
          result += 'dana';
        }
        return result;
      case 'MM':
        if (number === 1) {
          result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'mjeseca';
        } else {
          result += 'mjeseci';
        }
        return result;
      case 'yy':
        if (number === 1) {
          result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'godine';
        } else {
          result += 'godina';
        }
        return result;
    }
  }
  var bs = moment.defineLocale('bs', {
    months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';
        }
      },
      lastDay: '[jučer u] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
            return '[prošlu] dddd [u] LT';
          case 6:
            return '[prošle] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prošli] dddd [u] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: 'dan',
      dd: translate,
      M: 'mjesec',
      MM: translate,
      y: 'godinu',
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return bs;
});

/***/ }),

/***/ 557:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ca.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ca = moment.defineLocale('ca', {
    months: {
      standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
      format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split('_'),
      isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [de] YYYY',
      ll: 'D MMM YYYY',
      LLL: 'D MMMM [de] YYYY [a les] H:mm',
      lll: 'D MMM YYYY, H:mm',
      LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
      llll: 'ddd D MMM YYYY, H:mm'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      nextDay: function nextDay() {
        return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: "d'aquí %s",
      past: 'fa %s',
      s: 'uns segons',
      ss: '%d segons',
      m: 'un minut',
      mm: '%d minuts',
      h: 'una hora',
      hh: '%d hores',
      d: 'un dia',
      dd: '%d dies',
      M: 'un mes',
      MM: '%d mesos',
      y: 'un any',
      yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal: function ordinal(number, period) {
      var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
      if (period === 'w' || period === 'W') {
        output = 'a';
      }
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return ca;
});

/***/ }),

/***/ 558:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/cs.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = {
      format: 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
      standalone: 'ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince'.split('_')
    },
    monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
    monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
    // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
    // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
    monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
  function plural(n) {
    return n > 1 && n < 5 && ~~(n / 10) !== 1;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';
      case 'ss':
        // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sekund');
        } else {
          return result + 'sekundami';
        }
      case 'm':
        // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
      case 'mm':
        // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'minuty' : 'minut');
        } else {
          return result + 'minutami';
        }
      case 'h':
        // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh':
        // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hodin');
        } else {
          return result + 'hodinami';
        }
      case 'd':
        // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'den' : 'dnem';
      case 'dd':
        // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dny' : 'dní');
        } else {
          return result + 'dny';
        }
      case 'M':
        // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';
      case 'MM':
        // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'měsíce' : 'měsíců');
        } else {
          return result + 'měsíci';
        }
      case 'y':
        // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokem';
      case 'yy':
        // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'let');
        } else {
          return result + 'lety';
        }
    }
  }
  var cs = moment.defineLocale('cs', {
    months: months,
    monthsShort: monthsShort,
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
    // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm',
      l: 'D. M. YYYY'
    },
    calendar: {
      sameDay: '[dnes v] LT',
      nextDay: '[zítra v] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v neděli v] LT';
          case 1:
          case 2:
            return '[v] dddd [v] LT';
          case 3:
            return '[ve středu v] LT';
          case 4:
            return '[ve čtvrtek v] LT';
          case 5:
            return '[v pátek v] LT';
          case 6:
            return '[v sobotu v] LT';
        }
      },
      lastDay: '[včera v] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[minulou neděli v] LT';
          case 1:
          case 2:
            return '[minulé] dddd [v] LT';
          case 3:
            return '[minulou středu v] LT';
          case 4:
          case 5:
            return '[minulý] dddd [v] LT';
          case 6:
            return '[minulou sobotu v] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'před %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return cs;
});

/***/ }),

/***/ 559:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/cv.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var cv = moment.defineLocale('cv', {
    months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
    monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
    weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
    weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
    weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
      LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
      LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
    },
    calendar: {
      sameDay: '[Паян] LT [сехетре]',
      nextDay: '[Ыран] LT [сехетре]',
      lastDay: '[Ӗнер] LT [сехетре]',
      nextWeek: '[Ҫитес] dddd LT [сехетре]',
      lastWeek: '[Иртнӗ] dddd LT [сехетре]',
      sameElse: 'L'
    },
    relativeTime: {
      future: function future(output) {
        var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
        return output + affix;
      },
      past: '%s каялла',
      s: 'пӗр-ик ҫеккунт',
      ss: '%d ҫеккунт',
      m: 'пӗр минут',
      mm: '%d минут',
      h: 'пӗр сехет',
      hh: '%d сехет',
      d: 'пӗр кун',
      dd: '%d кун',
      M: 'пӗр уйӑх',
      MM: '%d уйӑх',
      y: 'пӗр ҫул',
      yy: '%d ҫул'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
    ordinal: '%d-мӗш',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return cv;
});

/***/ }),

/***/ 560:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/cy.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Welsh [cy]
//! author : Robert Allen : https://github.com/robgallen
//! author : https://github.com/ryangreaves

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var cy = moment.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    weekdaysParseExact: true,
    // time formats are the same as en-gb
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Heddiw am] LT',
      nextDay: '[Yfory am] LT',
      nextWeek: 'dddd [am] LT',
      lastDay: '[Ddoe am] LT',
      lastWeek: 'dddd [diwethaf am] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'mewn %s',
      past: '%s yn ôl',
      s: 'ychydig eiliadau',
      ss: '%d eiliad',
      m: 'munud',
      mm: '%d munud',
      h: 'awr',
      hh: '%d awr',
      d: 'diwrnod',
      dd: '%d diwrnod',
      M: 'mis',
      MM: '%d mis',
      y: 'blwyddyn',
      yy: '%d flynedd'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
    ordinal: function ordinal(number) {
      var b = number,
        output = '',
        lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed',
        // 1af to 10fed
        'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
        ];

      if (b > 20) {
        if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
          output = 'fed'; // not 30ain, 70ain or 90ain
        } else {
          output = 'ain';
        }
      } else if (b > 0) {
        output = lookup[b];
      }
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return cy;
});

/***/ }),

/***/ 561:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/da.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var da = moment.defineLocale('da', {
    months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'på dddd [kl.] LT',
      lastDay: '[i går kl.] LT',
      lastWeek: '[i] dddd[s kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'få sekunder',
      ss: '%d sekunder',
      m: 'et minut',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dage',
      M: 'en måned',
      MM: '%d måneder',
      y: 'et år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return da;
});

/***/ }),

/***/ 562:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/de.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eine Minute', 'einer Minute'],
      h: ['eine Stunde', 'einer Stunde'],
      d: ['ein Tag', 'einem Tag'],
      dd: [number + ' Tage', number + ' Tagen'],
      w: ['eine Woche', 'einer Woche'],
      M: ['ein Monat', 'einem Monat'],
      MM: [number + ' Monate', number + ' Monaten'],
      y: ['ein Jahr', 'einem Jahr'],
      yy: [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
  }
  var de = moment.defineLocale('de', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: '%d Wochen',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return de;
});

/***/ }),

/***/ 563:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/de-at.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : German (Austria) [de-at]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
//! author : Mikolaj Dadela : https://github.com/mik01aj

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eine Minute', 'einer Minute'],
      h: ['eine Stunde', 'einer Stunde'],
      d: ['ein Tag', 'einem Tag'],
      dd: [number + ' Tage', number + ' Tagen'],
      w: ['eine Woche', 'einer Woche'],
      M: ['ein Monat', 'einem Monat'],
      MM: [number + ' Monate', number + ' Monaten'],
      y: ['ein Jahr', 'einem Jahr'],
      yy: [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
  }
  var deAt = moment.defineLocale('de-at', {
    months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: '%d Wochen',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return deAt;
});

/***/ }),

/***/ 564:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/de-ch.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : German (Switzerland) [de-ch]
//! author : sschueller : https://github.com/sschueller

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eine Minute', 'einer Minute'],
      h: ['eine Stunde', 'einer Stunde'],
      d: ['ein Tag', 'einem Tag'],
      dd: [number + ' Tage', number + ' Tagen'],
      w: ['eine Woche', 'einer Woche'],
      M: ['ein Monat', 'einem Monat'],
      MM: [number + ' Monate', number + ' Monaten'],
      y: ['ein Jahr', 'einem Jahr'],
      yy: [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
  }
  var deCh = moment.defineLocale('de-ch', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      ss: '%d Sekunden',
      m: processRelativeTime,
      mm: '%d Minuten',
      h: processRelativeTime,
      hh: '%d Stunden',
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: '%d Wochen',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return deCh;
});

/***/ }),

/***/ 565:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/dv.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
    weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
  var dv = moment.defineLocale('dv', {
    months: months,
    monthsShort: months,
    weekdays: weekdays,
    weekdaysShort: weekdays,
    weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'D/M/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /މކ|މފ/,
    isPM: function isPM(input) {
      return 'މފ' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'މކ';
      } else {
        return 'މފ';
      }
    },
    calendar: {
      sameDay: '[މިއަދު] LT',
      nextDay: '[މާދަމާ] LT',
      nextWeek: 'dddd LT',
      lastDay: '[އިއްޔެ] LT',
      lastWeek: '[ފާއިތުވި] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ތެރޭގައި %s',
      past: 'ކުރިން %s',
      s: 'ސިކުންތުކޮޅެއް',
      ss: 'd% ސިކުންތު',
      m: 'މިނިޓެއް',
      mm: 'މިނިޓު %d',
      h: 'ގަޑިއިރެއް',
      hh: 'ގަޑިއިރު %d',
      d: 'ދުވަހެއް',
      dd: 'ދުވަސް %d',
      M: 'މަހެއް',
      MM: 'މަސް %d',
      y: 'އަހަރެއް',
      yy: 'އަހަރު %d'
    },
    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 7,
      // Sunday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return dv;
});

/***/ }),

/***/ 566:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/el.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function isFunction(input) {
    return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  var el = moment.defineLocale('el', {
    monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
    months: function months(momentToFormat, format) {
      if (!momentToFormat) {
        return this._monthsNominativeEl;
      } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) {
        // if there is a day number before 'MMMM'
        return this._monthsGenitiveEl[momentToFormat.month()];
      } else {
        return this._monthsNominativeEl[momentToFormat.month()];
      }
    },
    monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'μμ' : 'ΜΜ';
      } else {
        return isLower ? 'πμ' : 'ΠΜ';
      }
    },
    isPM: function isPM(input) {
      return (input + '').toLowerCase()[0] === 'μ';
    },
    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendarEl: {
      sameDay: '[Σήμερα {}] LT',
      nextDay: '[Αύριο {}] LT',
      nextWeek: 'dddd [{}] LT',
      lastDay: '[Χθες {}] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 6:
            return '[το προηγούμενο] dddd [{}] LT';
          default:
            return '[την προηγούμενη] dddd [{}] LT';
        }
      },
      sameElse: 'L'
    },
    calendar: function calendar(key, mom) {
      var output = this._calendarEl[key],
        hours = mom && mom.hours();
      if (isFunction(output)) {
        output = output.apply(mom);
      }
      return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
    },
    relativeTime: {
      future: 'σε %s',
      past: '%s πριν',
      s: 'λίγα δευτερόλεπτα',
      ss: '%d δευτερόλεπτα',
      m: 'ένα λεπτό',
      mm: '%d λεπτά',
      h: 'μία ώρα',
      hh: '%d ώρες',
      d: 'μία μέρα',
      dd: '%d μέρες',
      M: 'ένας μήνας',
      MM: '%d μήνες',
      y: 'ένας χρόνος',
      yy: '%d χρόνια'
    },
    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4st is the first week of the year.
    }
  });

  return el;
});

/***/ }),

/***/ 567:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-au.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enAu = moment.defineLocale('en-au', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return enAu;
});

/***/ }),

/***/ 568:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-ca.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enCa = moment.defineLocale('en-ca', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'YYYY-MM-DD',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  });
  return enCa;
});

/***/ }),

/***/ 569:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-gb.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enGb = moment.defineLocale('en-gb', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return enGb;
});

/***/ }),

/***/ 570:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-ie.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enIe = moment.defineLocale('en-ie', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return enIe;
});

/***/ }),

/***/ 571:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-il.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (Israel) [en-il]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enIl = moment.defineLocale('en-il', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  });
  return enIl;
});

/***/ }),

/***/ 572:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-in.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (India) [en-in]
//! author : Jatin Agrawal : https://github.com/jatinag22

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enIn = moment.defineLocale('en-in', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
  });

  return enIn;
});

/***/ }),

/***/ 573:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-nz.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enNz = moment.defineLocale('en-nz', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return enNz;
});

/***/ }),

/***/ 574:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/en-sg.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : English (Singapore) [en-sg]
//! author : Matthew Castrillon-Madrigal : https://github.com/techdimension

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var enSg = moment.defineLocale('en-sg', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return enSg;
});

/***/ }),

/***/ 575:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/eo.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Esperanto [eo]
//! author : Colin Dean : https://github.com/colindean
//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
//! comment : miestasmia corrected the translation by colindean
//! comment : Vivakvo corrected the translation by colindean and miestasmia

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var eo = moment.defineLocale('eo', {
    months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
    monthsShort: 'jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec'.split('_'),
    weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
    weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
    weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: '[la] D[-an de] MMMM, YYYY',
      LLL: '[la] D[-an de] MMMM, YYYY HH:mm',
      LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',
      llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm'
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function isPM(input) {
      return input.charAt(0).toLowerCase() === 'p';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'p.t.m.' : 'P.T.M.';
      } else {
        return isLower ? 'a.t.m.' : 'A.T.M.';
      }
    },
    calendar: {
      sameDay: '[Hodiaŭ je] LT',
      nextDay: '[Morgaŭ je] LT',
      nextWeek: 'dddd[n je] LT',
      lastDay: '[Hieraŭ je] LT',
      lastWeek: '[pasintan] dddd[n je] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'post %s',
      past: 'antaŭ %s',
      s: 'kelkaj sekundoj',
      ss: '%d sekundoj',
      m: 'unu minuto',
      mm: '%d minutoj',
      h: 'unu horo',
      hh: '%d horoj',
      d: 'unu tago',
      //ne 'diurno', ĉar estas uzita por proksimumo
      dd: '%d tagoj',
      M: 'unu monato',
      MM: '%d monatoj',
      y: 'unu jaro',
      yy: '%d jaroj'
    },
    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal: '%da',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return eo;
});

/***/ }),

/***/ 576:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/es.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
    _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  var es = moment.defineLocale('es', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },

    invalidDate: 'Fecha inválida'
  });
  return es;
});

/***/ }),

/***/ 577:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/es-do.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
    _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  var esDo = moment.defineLocale('es-do', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY h:mm A',
      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return esDo;
});

/***/ }),

/***/ 578:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/es-mx.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Spanish (Mexico) [es-mx]
//! author : JC Franco : https://github.com/jcfranco

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
    _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  var esMx = moment.defineLocale('es-mx', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },

    invalidDate: 'Fecha inválida'
  });
  return esMx;
});

/***/ }),

/***/ 579:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/es-us.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
//! author : chrisrodz : https://github.com/chrisrodz

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
    _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  var esUs = moment.defineLocale('es-us', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return _monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'MM/DD/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY h:mm A',
      LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function lastDay() {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return esUs;
});

/***/ }),

/***/ 580:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/et.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
      ss: [number + 'sekundi', number + 'sekundit'],
      m: ['ühe minuti', 'üks minut'],
      mm: [number + ' minuti', number + ' minutit'],
      h: ['ühe tunni', 'tund aega', 'üks tund'],
      hh: [number + ' tunni', number + ' tundi'],
      d: ['ühe päeva', 'üks päev'],
      M: ['kuu aja', 'kuu aega', 'üks kuu'],
      MM: [number + ' kuu', number + ' kuud'],
      y: ['ühe aasta', 'aasta', 'üks aasta'],
      yy: [number + ' aasta', number + ' aastat']
    };
    if (withoutSuffix) {
      return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
  }
  var et = moment.defineLocale('et', {
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Täna,] LT',
      nextDay: '[Homme,] LT',
      nextWeek: '[Järgmine] dddd LT',
      lastDay: '[Eile,] LT',
      lastWeek: '[Eelmine] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s pärast',
      past: '%s tagasi',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: '%d päeva',
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return et;
});

/***/ }),

/***/ 581:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/eu.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Basque [eu]
//! author : Eneko Illarramendi : https://github.com/eillarra

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var eu = moment.defineLocale('eu', {
    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    monthsParseExact: true,
    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY[ko] MMMM[ren] D[a]',
      LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
      LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
      l: 'YYYY-M-D',
      ll: 'YYYY[ko] MMM D[a]',
      lll: 'YYYY[ko] MMM D[a] HH:mm',
      llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
    },
    calendar: {
      sameDay: '[gaur] LT[etan]',
      nextDay: '[bihar] LT[etan]',
      nextWeek: 'dddd LT[etan]',
      lastDay: '[atzo] LT[etan]',
      lastWeek: '[aurreko] dddd LT[etan]',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s barru',
      past: 'duela %s',
      s: 'segundo batzuk',
      ss: '%d segundo',
      m: 'minutu bat',
      mm: '%d minutu',
      h: 'ordu bat',
      hh: '%d ordu',
      d: 'egun bat',
      dd: '%d egun',
      M: 'hilabete bat',
      MM: '%d hilabete',
      y: 'urte bat',
      yy: '%d urte'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return eu;
});

/***/ }),

/***/ 582:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fa.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '۱',
      2: '۲',
      3: '۳',
      4: '۴',
      5: '۵',
      6: '۶',
      7: '۷',
      8: '۸',
      9: '۹',
      0: '۰'
    },
    numberMap = {
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
      '۰': '0'
    };
  var fa = moment.defineLocale('fa', {
    months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
    weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /قبل از ظهر|بعد از ظهر/,
    isPM: function isPM(input) {
      return /بعد از ظهر/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'قبل از ظهر';
      } else {
        return 'بعد از ظهر';
      }
    },
    calendar: {
      sameDay: '[امروز ساعت] LT',
      nextDay: '[فردا ساعت] LT',
      nextWeek: 'dddd [ساعت] LT',
      lastDay: '[دیروز ساعت] LT',
      lastWeek: 'dddd [پیش] [ساعت] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'در %s',
      past: '%s پیش',
      s: 'چند ثانیه',
      ss: '%d ثانیه',
      m: 'یک دقیقه',
      mm: '%d دقیقه',
      h: 'یک ساعت',
      hh: '%d ساعت',
      d: 'یک روز',
      dd: '%d روز',
      M: 'یک ماه',
      MM: '%d ماه',
      y: 'یک سال',
      yy: '%d سال'
    },
    preparse: function preparse(string) {
      return string.replace(/[۰-۹]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    dayOfMonthOrdinalParse: /\d{1,2}م/,
    ordinal: '%dم',
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return fa;
});

/***/ }),

/***/ 583:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fi.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
    numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];
  function translate(number, withoutSuffix, key, isFuture) {
    var result = '';
    switch (key) {
      case 's':
        return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
      case 'ss':
        result = isFuture ? 'sekunnin' : 'sekuntia';
        break;
      case 'm':
        return isFuture ? 'minuutin' : 'minuutti';
      case 'mm':
        result = isFuture ? 'minuutin' : 'minuuttia';
        break;
      case 'h':
        return isFuture ? 'tunnin' : 'tunti';
      case 'hh':
        result = isFuture ? 'tunnin' : 'tuntia';
        break;
      case 'd':
        return isFuture ? 'päivän' : 'päivä';
      case 'dd':
        result = isFuture ? 'päivän' : 'päivää';
        break;
      case 'M':
        return isFuture ? 'kuukauden' : 'kuukausi';
      case 'MM':
        result = isFuture ? 'kuukauden' : 'kuukautta';
        break;
      case 'y':
        return isFuture ? 'vuoden' : 'vuosi';
      case 'yy':
        result = isFuture ? 'vuoden' : 'vuotta';
        break;
    }
    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
  }
  function verbalNumber(number, isFuture) {
    return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
  }
  var fi = moment.defineLocale('fi', {
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM[ta] YYYY',
      LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
      LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
      l: 'D.M.YYYY',
      ll: 'Do MMM YYYY',
      lll: 'Do MMM YYYY, [klo] HH.mm',
      llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
      sameDay: '[tänään] [klo] LT',
      nextDay: '[huomenna] [klo] LT',
      nextWeek: 'dddd [klo] LT',
      lastDay: '[eilen] [klo] LT',
      lastWeek: '[viime] dddd[na] [klo] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s päästä',
      past: '%s sitten',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return fi;
});

/***/ }),

/***/ 584:
/*!*******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fil.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Filipino [fil]
//! author : Dan Hagman : https://github.com/hagmandan
//! author : Matthew Co : https://github.com/matthewdeeco

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var fil = moment.defineLocale('fil', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar: {
      sameDay: 'LT [ngayong araw]',
      nextDay: '[Bukas ng] LT',
      nextWeek: 'LT [sa susunod na] dddd',
      lastDay: 'LT [kahapon]',
      lastWeek: 'LT [noong nakaraang] dddd',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      ss: '%d segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return fil;
});

/***/ }),

/***/ 585:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fo.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123
//! author : Kristian Sakarisson : https://github.com/sakarisson

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var fo = moment.defineLocale('fo', {
    months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
    weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
    weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Í dag kl.] LT',
      nextDay: '[Í morgin kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[Í gjár kl.] LT',
      lastWeek: '[síðstu] dddd [kl] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'um %s',
      past: '%s síðani',
      s: 'fá sekund',
      ss: '%d sekundir',
      m: 'ein minuttur',
      mm: '%d minuttir',
      h: 'ein tími',
      hh: '%d tímar',
      d: 'ein dagur',
      dd: '%d dagar',
      M: 'ein mánaður',
      MM: '%d mánaðir',
      y: 'eitt ár',
      yy: '%d ár'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return fo;
});

/***/ }),

/***/ 586:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fr.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsStrictRegex = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
    monthsShortStrictRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
    monthsRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
    monthsParse = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
  var fr = moment.defineLocale('fr', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: monthsStrictRegex,
    monthsShortStrictRegex: monthsShortStrictRegex,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      w: 'une semaine',
      ww: '%d semaines',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // TODO: Return 'e' when day of month > 1. Move this case inside
        // block for masculine words below.
        // See https://github.com/moment/moment/issues/3375
        case 'D':
          return number + (number === 1 ? 'er' : '');

        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return fr;
});

/***/ }),

/***/ 587:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fr-ca.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var frCa = moment.defineLocale('fr-ca', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');
      }
    }
  });
  return frCa;
});

/***/ }),

/***/ 588:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fr-ch.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var frCh = moment.defineLocale('fr-ch', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      ss: '%d secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // Words with masculine grammatical gender: mois, trimestre, jour
        default:
        case 'M':
        case 'Q':
        case 'D':
        case 'DDD':
        case 'd':
          return number + (number === 1 ? 'er' : 'e');

        // Words with feminine grammatical gender: semaine
        case 'w':
        case 'W':
          return number + (number === 1 ? 're' : 'e');
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return frCh;
});

/***/ }),

/***/ 589:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/fy.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Frisian [fy]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
    monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
  var fy = moment.defineLocale('fy', {
    months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsParseExact: true,
    weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
    weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[hjoed om] LT',
      nextDay: '[moarn om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[juster om] LT',
      lastWeek: '[ôfrûne] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'oer %s',
      past: '%s lyn',
      s: 'in pear sekonden',
      ss: '%d sekonden',
      m: 'ien minút',
      mm: '%d minuten',
      h: 'ien oere',
      hh: '%d oeren',
      d: 'ien dei',
      dd: '%d dagen',
      M: 'ien moanne',
      MM: '%d moannen',
      y: 'ien jier',
      yy: '%d jierren'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return fy;
});

/***/ }),

/***/ 590:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ga.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Irish or Irish Gaelic [ga]
//! author : André Silva : https://github.com/askpt

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig'],
    monthsShort = ['Ean', 'Feabh', 'Márt', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'M.F.', 'D.F.', 'Samh', 'Noll'],
    weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'],
    weekdaysShort = ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
    weekdaysMin = ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'A', 'Sa'];
  var ga = moment.defineLocale('ga', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Inniu ag] LT',
      nextDay: '[Amárach ag] LT',
      nextWeek: 'dddd [ag] LT',
      lastDay: '[Inné ag] LT',
      lastWeek: 'dddd [seo caite] [ag] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'i %s',
      past: '%s ó shin',
      s: 'cúpla soicind',
      ss: '%d soicind',
      m: 'nóiméad',
      mm: '%d nóiméad',
      h: 'uair an chloig',
      hh: '%d uair an chloig',
      d: 'lá',
      dd: '%d lá',
      M: 'mí',
      MM: '%d míonna',
      y: 'bliain',
      yy: '%d bliain'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return ga;
});

/***/ }),

/***/ 591:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/gd.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'],
    monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
    weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'],
    weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
    weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
  var gd = moment.defineLocale('gd', {
    months: months,
    monthsShort: monthsShort,
    monthsParseExact: true,
    weekdays: weekdays,
    weekdaysShort: weekdaysShort,
    weekdaysMin: weekdaysMin,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[An-diugh aig] LT',
      nextDay: '[A-màireach aig] LT',
      nextWeek: 'dddd [aig] LT',
      lastDay: '[An-dè aig] LT',
      lastWeek: 'dddd [seo chaidh] [aig] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ann an %s',
      past: 'bho chionn %s',
      s: 'beagan diogan',
      ss: '%d diogan',
      m: 'mionaid',
      mm: '%d mionaidean',
      h: 'uair',
      hh: '%d uairean',
      d: 'latha',
      dd: '%d latha',
      M: 'mìos',
      MM: '%d mìosan',
      y: 'bliadhna',
      yy: '%d bliadhna'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
    ordinal: function ordinal(number) {
      var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return gd;
});

/***/ }),

/***/ 592:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/gl.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var gl = moment.defineLocale('gl', {
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
      },
      nextDay: function nextDay() {
        return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
      },
      lastDay: function lastDay() {
        return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
      },
      lastWeek: function lastWeek() {
        return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: function future(str) {
        if (str.indexOf('un') === 0) {
          return 'n' + str;
        }
        return 'en ' + str;
      },
      past: 'hai %s',
      s: 'uns segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'unha hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return gl;
});

/***/ }),

/***/ 593:
/*!************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/gom-deva.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Konkani Devanagari script [gom-deva]
//! author : The Discoverer : https://github.com/WikiDiscoverer

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['थोडया सॅकंडांनी', 'थोडे सॅकंड'],
      ss: [number + ' सॅकंडांनी', number + ' सॅकंड'],
      m: ['एका मिणटान', 'एक मिनूट'],
      mm: [number + ' मिणटांनी', number + ' मिणटां'],
      h: ['एका वरान', 'एक वर'],
      hh: [number + ' वरांनी', number + ' वरां'],
      d: ['एका दिसान', 'एक दीस'],
      dd: [number + ' दिसांनी', number + ' दीस'],
      M: ['एका म्हयन्यान', 'एक म्हयनो'],
      MM: [number + ' म्हयन्यानी', number + ' म्हयने'],
      y: ['एका वर्सान', 'एक वर्स'],
      yy: [number + ' वर्सांनी', number + ' वर्सां']
    };
    return isFuture ? format[key][0] : format[key][1];
  }
  var gomDeva = moment.defineLocale('gom-deva', {
    months: {
      standalone: 'जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
      format: 'जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या'.split('_'),
      isFormat: /MMMM(\s)+D[oD]?/
    },
    monthsShort: 'जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    monthsParseExact: true,
    weekdays: 'आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार'.split('_'),
    weekdaysShort: 'आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.'.split('_'),
    weekdaysMin: 'आ_सो_मं_बु_ब्रे_सु_शे'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'A h:mm [वाजतां]',
      LTS: 'A h:mm:ss [वाजतां]',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY A h:mm [वाजतां]',
      LLLL: 'dddd, MMMM Do, YYYY, A h:mm [वाजतां]',
      llll: 'ddd, D MMM YYYY, A h:mm [वाजतां]'
    },
    calendar: {
      sameDay: '[आयज] LT',
      nextDay: '[फाल्यां] LT',
      nextWeek: '[फुडलो] dddd[,] LT',
      lastDay: '[काल] LT',
      lastWeek: '[फाटलो] dddd[,] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s',
      past: '%s आदीं',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // the ordinal 'वेर' only applies to day of the month
        case 'D':
          return number + 'वेर';
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
        case 'w':
        case 'W':
          return number;
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week
      doy: 3 // The week that contains Jan 4th is the first week of the year (7 + 0 - 4)
    },

    meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'राती') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'सकाळीं') {
        return hour;
      } else if (meridiem === 'दनपारां') {
        return hour > 12 ? hour : hour + 12;
      } else if (meridiem === 'सांजे') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'राती';
      } else if (hour < 12) {
        return 'सकाळीं';
      } else if (hour < 16) {
        return 'दनपारां';
      } else if (hour < 20) {
        return 'सांजे';
      } else {
        return 'राती';
      }
    }
  });
  return gomDeva;
});

/***/ }),

/***/ 594:
/*!************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/gom-latn.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Konkani Latin script [gom-latn]
//! author : The Discoverer : https://github.com/WikiDiscoverer

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['thoddea sekondamni', 'thodde sekond'],
      ss: [number + ' sekondamni', number + ' sekond'],
      m: ['eka mintan', 'ek minut'],
      mm: [number + ' mintamni', number + ' mintam'],
      h: ['eka voran', 'ek vor'],
      hh: [number + ' voramni', number + ' voram'],
      d: ['eka disan', 'ek dis'],
      dd: [number + ' disamni', number + ' dis'],
      M: ['eka mhoinean', 'ek mhoino'],
      MM: [number + ' mhoineamni', number + ' mhoine'],
      y: ['eka vorsan', 'ek voros'],
      yy: [number + ' vorsamni', number + ' vorsam']
    };
    return isFuture ? format[key][0] : format[key][1];
  }
  var gomLatn = moment.defineLocale('gom-latn', {
    months: {
      standalone: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
      format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split('_'),
      isFormat: /MMMM(\s)+D[oD]?/
    },
    monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split('_'),
    weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
    weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'A h:mm [vazta]',
      LTS: 'A h:mm:ss [vazta]',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY A h:mm [vazta]',
      LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
      llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
    },
    calendar: {
      sameDay: '[Aiz] LT',
      nextDay: '[Faleam] LT',
      nextWeek: '[Fuddlo] dddd[,] LT',
      lastDay: '[Kal] LT',
      lastWeek: '[Fattlo] dddd[,] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s',
      past: '%s adim',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        // the ordinal 'er' only applies to day of the month
        case 'D':
          return number + 'er';
        default:
        case 'M':
        case 'Q':
        case 'DDD':
        case 'd':
        case 'w':
        case 'W':
          return number;
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week
      doy: 3 // The week that contains Jan 4th is the first week of the year (7 + 0 - 4)
    },

    meridiemParse: /rati|sokallim|donparam|sanje/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'rati') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'sokallim') {
        return hour;
      } else if (meridiem === 'donparam') {
        return hour > 12 ? hour : hour + 12;
      } else if (meridiem === 'sanje') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'rati';
      } else if (hour < 12) {
        return 'sokallim';
      } else if (hour < 16) {
        return 'donparam';
      } else if (hour < 20) {
        return 'sanje';
      } else {
        return 'rati';
      }
    }
  });
  return gomLatn;
});

/***/ }),

/***/ 595:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/gu.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Gujarati [gu]
//! author : Kaushik Thanki : https://github.com/Kaushik1987

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '૧',
      2: '૨',
      3: '૩',
      4: '૪',
      5: '૫',
      6: '૬',
      7: '૭',
      8: '૮',
      9: '૯',
      0: '૦'
    },
    numberMap = {
      '૧': '1',
      '૨': '2',
      '૩': '3',
      '૪': '4',
      '૫': '5',
      '૬': '6',
      '૭': '7',
      '૮': '8',
      '૯': '9',
      '૦': '0'
    };
  var gu = moment.defineLocale('gu', {
    months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
    monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
    monthsParseExact: true,
    weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
    weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
    weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm વાગ્યે',
      LTS: 'A h:mm:ss વાગ્યે',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
      LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
    },
    calendar: {
      sameDay: '[આજ] LT',
      nextDay: '[કાલે] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ગઇકાલે] LT',
      lastWeek: '[પાછલા] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s મા',
      past: '%s પહેલા',
      s: 'અમુક પળો',
      ss: '%d સેકંડ',
      m: 'એક મિનિટ',
      mm: '%d મિનિટ',
      h: 'એક કલાક',
      hh: '%d કલાક',
      d: 'એક દિવસ',
      dd: '%d દિવસ',
      M: 'એક મહિનો',
      MM: '%d મહિનો',
      y: 'એક વર્ષ',
      yy: '%d વર્ષ'
    },
    preparse: function preparse(string) {
      return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
    meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'રાત') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'સવાર') {
        return hour;
      } else if (meridiem === 'બપોર') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'સાંજ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'રાત';
      } else if (hour < 10) {
        return 'સવાર';
      } else if (hour < 17) {
        return 'બપોર';
      } else if (hour < 20) {
        return 'સાંજ';
      } else {
        return 'રાત';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return gu;
});

/***/ }),

/***/ 596:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/he.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var he = moment.defineLocale('he', {
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [ב]MMMM YYYY',
      LLL: 'D [ב]MMMM YYYY HH:mm',
      LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
      l: 'D/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[היום ב־]LT',
      nextDay: '[מחר ב־]LT',
      nextWeek: 'dddd [בשעה] LT',
      lastDay: '[אתמול ב־]LT',
      lastWeek: '[ביום] dddd [האחרון בשעה] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'בעוד %s',
      past: 'לפני %s',
      s: 'מספר שניות',
      ss: '%d שניות',
      m: 'דקה',
      mm: '%d דקות',
      h: 'שעה',
      hh: function hh(number) {
        if (number === 2) {
          return 'שעתיים';
        }
        return number + ' שעות';
      },
      d: 'יום',
      dd: function dd(number) {
        if (number === 2) {
          return 'יומיים';
        }
        return number + ' ימים';
      },
      M: 'חודש',
      MM: function MM(number) {
        if (number === 2) {
          return 'חודשיים';
        }
        return number + ' חודשים';
      },
      y: 'שנה',
      yy: function yy(number) {
        if (number === 2) {
          return 'שנתיים';
        } else if (number % 10 === 0 && number !== 10) {
          return number + ' שנה';
        }
        return number + ' שנים';
      }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: function isPM(input) {
      return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 5) {
        return 'לפנות בוקר';
      } else if (hour < 10) {
        return 'בבוקר';
      } else if (hour < 12) {
        return isLower ? 'לפנה"צ' : 'לפני הצהריים';
      } else if (hour < 18) {
        return isLower ? 'אחה"צ' : 'אחרי הצהריים';
      } else {
        return 'בערב';
      }
    }
  });
  return he;
});

/***/ }),

/***/ 597:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/hi.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
      0: '०'
    },
    numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
    },
    monthsParse = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i],
    shortMonthsParse = [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i];
  var hi = moment.defineLocale('hi', {
    months: {
      format: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
      standalone: 'जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर'.split('_')
    },
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm बजे',
      LTS: 'A h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: shortMonthsParse,
    monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
    monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
    monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
    monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[कल] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[कल] LT',
      lastWeek: '[पिछले] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s में',
      past: '%s पहले',
      s: 'कुछ ही क्षण',
      ss: '%d सेकंड',
      m: 'एक मिनट',
      mm: '%d मिनट',
      h: 'एक घंटा',
      hh: '%d घंटे',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महीने',
      MM: '%d महीने',
      y: 'एक वर्ष',
      yy: '%d वर्ष'
    },
    preparse: function preparse(string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'रात') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'सुबह') {
        return hour;
      } else if (meridiem === 'दोपहर') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'शाम') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'रात';
      } else if (hour < 10) {
        return 'सुबह';
      } else if (hour < 17) {
        return 'दोपहर';
      } else if (hour < 20) {
        return 'शाम';
      } else {
        return 'रात';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return hi;
});

/***/ }),

/***/ 598:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/hr.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Bojan Marković : https://github.com/bmarkovic

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        if (number === 1) {
          result += 'sekunda';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sekunde';
        } else {
          result += 'sekundi';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        if (number === 1) {
          result += 'minuta';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'minute';
        } else {
          result += 'minuta';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'jedan sat' : 'jednog sata';
      case 'hh':
        if (number === 1) {
          result += 'sat';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'sata';
        } else {
          result += 'sati';
        }
        return result;
      case 'dd':
        if (number === 1) {
          result += 'dan';
        } else {
          result += 'dana';
        }
        return result;
      case 'MM':
        if (number === 1) {
          result += 'mjesec';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'mjeseca';
        } else {
          result += 'mjeseci';
        }
        return result;
      case 'yy':
        if (number === 1) {
          result += 'godina';
        } else if (number === 2 || number === 3 || number === 4) {
          result += 'godine';
        } else {
          result += 'godina';
        }
        return result;
    }
  }
  var hr = moment.defineLocale('hr', {
    months: {
      format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
      standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
    },
    monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM YYYY',
      LLL: 'Do MMMM YYYY H:mm',
      LLLL: 'dddd, Do MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';
        }
      },
      lastDay: '[jučer u] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[prošlu] [nedjelju] [u] LT';
          case 3:
            return '[prošlu] [srijedu] [u] LT';
          case 6:
            return '[prošle] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prošli] dddd [u] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: 'dan',
      dd: translate,
      M: 'mjesec',
      MM: translate,
      y: 'godinu',
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return hr;
});

/***/ }),

/***/ 599:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/hu.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
//! author : Peter Viszt  : https://github.com/passatgt

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
  function translate(number, withoutSuffix, key, isFuture) {
    var num = number;
    switch (key) {
      case 's':
        return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';
      case 'ss':
        return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
      case 'm':
        return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'mm':
        return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
      case 'h':
        return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'hh':
        return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
      case 'd':
        return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'dd':
        return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
      case 'M':
        return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'MM':
        return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
      case 'y':
        return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
      case 'yy':
        return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
  }
  function week(isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
  }
  var hu = moment.defineLocale('hu', {
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY. MMMM D.',
      LLL: 'YYYY. MMMM D. H:mm',
      LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function isPM(input) {
      return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower === true ? 'de' : 'DE';
      } else {
        return isLower === true ? 'du' : 'DU';
      }
    },
    calendar: {
      sameDay: '[ma] LT[-kor]',
      nextDay: '[holnap] LT[-kor]',
      nextWeek: function nextWeek() {
        return week.call(this, true);
      },
      lastDay: '[tegnap] LT[-kor]',
      lastWeek: function lastWeek() {
        return week.call(this, false);
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s múlva',
      past: '%s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return hu;
});

/***/ }),

/***/ 600:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/hy-am.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var hyAm = moment.defineLocale('hy-am', {
    months: {
      format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
      standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
    },
    monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
    weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
    weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY թ.',
      LLL: 'D MMMM YYYY թ., HH:mm',
      LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
    },
    calendar: {
      sameDay: '[այսօր] LT',
      nextDay: '[վաղը] LT',
      lastDay: '[երեկ] LT',
      nextWeek: function nextWeek() {
        return 'dddd [օրը ժամը] LT';
      },
      lastWeek: function lastWeek() {
        return '[անցած] dddd [օրը ժամը] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s հետո',
      past: '%s առաջ',
      s: 'մի քանի վայրկյան',
      ss: '%d վայրկյան',
      m: 'րոպե',
      mm: '%d րոպե',
      h: 'ժամ',
      hh: '%d ժամ',
      d: 'օր',
      dd: '%d օր',
      M: 'ամիս',
      MM: '%d ամիս',
      y: 'տարի',
      yy: '%d տարի'
    },
    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function isPM(input) {
      return /^(ցերեկվա|երեկոյան)$/.test(input);
    },
    meridiem: function meridiem(hour) {
      if (hour < 4) {
        return 'գիշերվա';
      } else if (hour < 12) {
        return 'առավոտվա';
      } else if (hour < 17) {
        return 'ցերեկվա';
      } else {
        return 'երեկոյան';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'DDD':
        case 'w':
        case 'W':
        case 'DDDo':
          if (number === 1) {
            return number + '-ին';
          }
          return number + '-րդ';
        default:
          return number;
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return hyAm;
});

/***/ }),

/***/ 601:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/id.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var id = moment.defineLocale('id', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'siang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sore' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'siang';
      } else if (hours < 19) {
        return 'sore';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Besok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kemarin pukul] LT',
      lastWeek: 'dddd [lalu pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lalu',
      s: 'beberapa detik',
      ss: '%d detik',
      m: 'semenit',
      mm: '%d menit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return id;
});

/***/ }),

/***/ 602:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/is.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(n) {
    if (n % 100 === 11) {
      return true;
    } else if (n % 10 === 1) {
      return false;
    }
    return true;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
      case 'ss':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
        }
        return result + 'sekúnda';
      case 'm':
        return withoutSuffix ? 'mínúta' : 'mínútu';
      case 'mm':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
        } else if (withoutSuffix) {
          return result + 'mínúta';
        }
        return result + 'mínútu';
      case 'hh':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
        }
        return result + 'klukkustund';
      case 'd':
        if (withoutSuffix) {
          return 'dagur';
        }
        return isFuture ? 'dag' : 'degi';
      case 'dd':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'dagar';
          }
          return result + (isFuture ? 'daga' : 'dögum');
        } else if (withoutSuffix) {
          return result + 'dagur';
        }
        return result + (isFuture ? 'dag' : 'degi');
      case 'M':
        if (withoutSuffix) {
          return 'mánuður';
        }
        return isFuture ? 'mánuð' : 'mánuði';
      case 'MM':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'mánuðir';
          }
          return result + (isFuture ? 'mánuði' : 'mánuðum');
        } else if (withoutSuffix) {
          return result + 'mánuður';
        }
        return result + (isFuture ? 'mánuð' : 'mánuði');
      case 'y':
        return withoutSuffix || isFuture ? 'ár' : 'ári';
      case 'yy':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
        }
        return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
    }
  }
  var is = moment.defineLocale('is', {
    months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar: {
      sameDay: '[í dag kl.] LT',
      nextDay: '[á morgun kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[í gær kl.] LT',
      lastWeek: '[síðasta] dddd [kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'eftir %s',
      past: 'fyrir %s síðan',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: 'klukkustund',
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return is;
});

/***/ }),

/***/ 603:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/it.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
//! author: Marco : https://github.com/Manfre98

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var it = moment.defineLocale('it', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: function sameDay() {
        return '[Oggi a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      nextDay: function nextDay() {
        return '[Domani a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      nextWeek: function nextWeek() {
        return 'dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      lastDay: function lastDay() {
        return '[Ieri a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[La scorsa] dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
          default:
            return '[Lo scorso] dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'tra %s',
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: "un'ora",
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      w: 'una settimana',
      ww: '%d settimane',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return it;
});

/***/ }),

/***/ 604:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/it-ch.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Italian (Switzerland) [it-ch]
//! author : xfh : https://github.com/xfh

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var itCh = moment.defineLocale('it-ch', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[la scorsa] dddd [alle] LT';
          default:
            return '[lo scorso] dddd [alle] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: function future(s) {
        return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
      },
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: "un'ora",
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return itCh;
});

/***/ }),

/***/ 605:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ja.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ja = moment.defineLocale('ja', {
    eras: [{
      since: '2019-05-01',
      offset: 1,
      name: '令和',
      narrow: '㋿',
      abbr: 'R'
    }, {
      since: '1989-01-08',
      until: '2019-04-30',
      offset: 1,
      name: '平成',
      narrow: '㍻',
      abbr: 'H'
    }, {
      since: '1926-12-25',
      until: '1989-01-07',
      offset: 1,
      name: '昭和',
      narrow: '㍼',
      abbr: 'S'
    }, {
      since: '1912-07-30',
      until: '1926-12-24',
      offset: 1,
      name: '大正',
      narrow: '㍽',
      abbr: 'T'
    }, {
      since: '1873-01-01',
      until: '1912-07-29',
      offset: 6,
      name: '明治',
      narrow: '㍾',
      abbr: 'M'
    }, {
      since: '0001-01-01',
      until: '1873-12-31',
      offset: 1,
      name: '西暦',
      narrow: 'AD',
      abbr: 'AD'
    }, {
      since: '0000-12-31',
      until: -Infinity,
      offset: 1,
      name: '紀元前',
      narrow: 'BC',
      abbr: 'BC'
    }],
    eraYearOrdinalRegex: /(元|\d+)年/,
    eraYearOrdinalParse: function eraYearOrdinalParse(input, match) {
      return match[1] === '元' ? 1 : parseInt(match[1] || input, 10);
    },
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日 dddd HH:mm',
      l: 'YYYY/MM/DD',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日(ddd) HH:mm'
    },
    meridiemParse: /午前|午後/i,
    isPM: function isPM(input) {
      return input === '午後';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return '午前';
      } else {
        return '午後';
      }
    },
    calendar: {
      sameDay: '[今日] LT',
      nextDay: '[明日] LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          return '[来週]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      lastDay: '[昨日] LT',
      lastWeek: function lastWeek(now) {
        if (this.week() !== now.week()) {
          return '[先週]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'y':
          return number === 1 ? '元年' : number + '年';
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '数秒',
      ss: '%d秒',
      m: '1分',
      mm: '%d分',
      h: '1時間',
      hh: '%d時間',
      d: '1日',
      dd: '%d日',
      M: '1ヶ月',
      MM: '%dヶ月',
      y: '1年',
      yy: '%d年'
    }
  });
  return ja;
});

/***/ }),

/***/ 606:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/jv.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var jv = moment.defineLocale('jv', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'enjing') {
        return hour;
      } else if (meridiem === 'siyang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'enjing';
      } else if (hours < 15) {
        return 'siyang';
      } else if (hours < 19) {
        return 'sonten';
      } else {
        return 'ndalu';
      }
    },
    calendar: {
      sameDay: '[Dinten puniko pukul] LT',
      nextDay: '[Mbenjang pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kala wingi pukul] LT',
      lastWeek: 'dddd [kepengker pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'wonten ing %s',
      past: '%s ingkang kepengker',
      s: 'sawetawis detik',
      ss: '%d detik',
      m: 'setunggal menit',
      mm: '%d menit',
      h: 'setunggal jam',
      hh: '%d jam',
      d: 'sedinten',
      dd: '%d dinten',
      M: 'sewulan',
      MM: '%d wulan',
      y: 'setaun',
      yy: '%d taun'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return jv;
});

/***/ }),

/***/ 607:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ka.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/IrakliJani

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ka = moment.defineLocale('ka', {
    months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
    monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays: {
      standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
      format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
      isFormat: /(წინა|შემდეგ)/
    },
    weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[დღეს] LT[-ზე]',
      nextDay: '[ხვალ] LT[-ზე]',
      lastDay: '[გუშინ] LT[-ზე]',
      nextWeek: '[შემდეგ] dddd LT[-ზე]',
      lastWeek: '[წინა] dddd LT-ზე',
      sameElse: 'L'
    },
    relativeTime: {
      future: function future(s) {
        return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function ($0, $1, $2) {
          return $2 === 'ი' ? $1 + 'ში' : $1 + $2 + 'ში';
        });
      },
      past: function past(s) {
        if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
          return s.replace(/(ი|ე)$/, 'ის წინ');
        }
        if (/წელი/.test(s)) {
          return s.replace(/წელი$/, 'წლის წინ');
        }
        return s;
      },
      s: 'რამდენიმე წამი',
      ss: '%d წამი',
      m: 'წუთი',
      mm: '%d წუთი',
      h: 'საათი',
      hh: '%d საათი',
      d: 'დღე',
      dd: '%d დღე',
      M: 'თვე',
      MM: '%d თვე',
      y: 'წელი',
      yy: '%d წელი'
    },
    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal: function ordinal(number) {
      if (number === 0) {
        return number;
      }
      if (number === 1) {
        return number + '-ლი';
      }
      if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
        return 'მე-' + number;
      }
      return number + '-ე';
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  return ka;
});

/***/ }),

/***/ 608:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/kk.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші'
  };
  var kk = moment.defineLocale('kk', {
    months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Бүгін сағат] LT',
      nextDay: '[Ертең сағат] LT',
      nextWeek: 'dddd [сағат] LT',
      lastDay: '[Кеше сағат] LT',
      lastWeek: '[Өткен аптаның] dddd [сағат] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ішінде',
      past: '%s бұрын',
      s: 'бірнеше секунд',
      ss: '%d секунд',
      m: 'бір минут',
      mm: '%d минут',
      h: 'бір сағат',
      hh: '%d сағат',
      d: 'бір күн',
      dd: '%d күн',
      M: 'бір ай',
      MM: '%d ай',
      y: 'бір жыл',
      yy: '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
        b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return kk;
});

/***/ }),

/***/ 609:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/km.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '១',
      2: '២',
      3: '៣',
      4: '៤',
      5: '៥',
      6: '៦',
      7: '៧',
      8: '៨',
      9: '៩',
      0: '០'
    },
    numberMap = {
      '១': '1',
      '២': '2',
      '៣': '3',
      '៤': '4',
      '៥': '5',
      '៦': '6',
      '៧': '7',
      '៨': '8',
      '៩': '9',
      '០': '0'
    };
  var km = moment.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
    weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /ព្រឹក|ល្ងាច/,
    isPM: function isPM(input) {
      return input === 'ល្ងាច';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ព្រឹក';
      } else {
        return 'ល្ងាច';
      }
    },
    calendar: {
      sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
      nextDay: '[ស្អែក ម៉ោង] LT',
      nextWeek: 'dddd [ម៉ោង] LT',
      lastDay: '[ម្សិលមិញ ម៉ោង] LT',
      lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sទៀត',
      past: '%sមុន',
      s: 'ប៉ុន្មានវិនាទី',
      ss: '%d វិនាទី',
      m: 'មួយនាទី',
      mm: '%d នាទី',
      h: 'មួយម៉ោង',
      hh: '%d ម៉ោង',
      d: 'មួយថ្ងៃ',
      dd: '%d ថ្ងៃ',
      M: 'មួយខែ',
      MM: '%d ខែ',
      y: 'មួយឆ្នាំ',
      yy: '%d ឆ្នាំ'
    },
    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
    ordinal: 'ទី%d',
    preparse: function preparse(string) {
      return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return km;
});

/***/ }),

/***/ 610:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/kn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '೧',
      2: '೨',
      3: '೩',
      4: '೪',
      5: '೫',
      6: '೬',
      7: '೭',
      8: '೮',
      9: '೯',
      0: '೦'
    },
    numberMap = {
      '೧': '1',
      '೨': '2',
      '೩': '3',
      '೪': '4',
      '೫': '5',
      '೬': '6',
      '೭': '7',
      '೮': '8',
      '೯': '9',
      '೦': '0'
    };
  var kn = moment.defineLocale('kn', {
    months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
    monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
    monthsParseExact: true,
    weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
    weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
    weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
      sameDay: '[ಇಂದು] LT',
      nextDay: '[ನಾಳೆ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ನಿನ್ನೆ] LT',
      lastWeek: '[ಕೊನೆಯ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ನಂತರ',
      past: '%s ಹಿಂದೆ',
      s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
      ss: '%d ಸೆಕೆಂಡುಗಳು',
      m: 'ಒಂದು ನಿಮಿಷ',
      mm: '%d ನಿಮಿಷ',
      h: 'ಒಂದು ಗಂಟೆ',
      hh: '%d ಗಂಟೆ',
      d: 'ಒಂದು ದಿನ',
      dd: '%d ದಿನ',
      M: 'ಒಂದು ತಿಂಗಳು',
      MM: '%d ತಿಂಗಳು',
      y: 'ಒಂದು ವರ್ಷ',
      yy: '%d ವರ್ಷ'
    },
    preparse: function preparse(string) {
      return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ರಾತ್ರಿ') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
        return hour;
      } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'ಸಂಜೆ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ರಾತ್ರಿ';
      } else if (hour < 10) {
        return 'ಬೆಳಿಗ್ಗೆ';
      } else if (hour < 17) {
        return 'ಮಧ್ಯಾಹ್ನ';
      } else if (hour < 20) {
        return 'ಸಂಜೆ';
      } else {
        return 'ರಾತ್ರಿ';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
    ordinal: function ordinal(number) {
      return number + 'ನೇ';
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return kn;
});

/***/ }),

/***/ 611:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ko.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ko = moment.defineLocale('ko', {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY년 MMMM D일',
      LLL: 'YYYY년 MMMM D일 A h:mm',
      LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
      l: 'YYYY.MM.DD.',
      ll: 'YYYY년 MMMM D일',
      lll: 'YYYY년 MMMM D일 A h:mm',
      llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
      sameDay: '오늘 LT',
      nextDay: '내일 LT',
      nextWeek: 'dddd LT',
      lastDay: '어제 LT',
      lastWeek: '지난주 dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s 후',
      past: '%s 전',
      s: '몇 초',
      ss: '%d초',
      m: '1분',
      mm: '%d분',
      h: '한 시간',
      hh: '%d시간',
      d: '하루',
      dd: '%d일',
      M: '한 달',
      MM: '%d달',
      y: '일 년',
      yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '일';
        case 'M':
          return number + '월';
        case 'w':
        case 'W':
          return number + '주';
        default:
          return number;
      }
    },
    meridiemParse: /오전|오후/,
    isPM: function isPM(token) {
      return token === '오후';
    },
    meridiem: function meridiem(hour, minute, isUpper) {
      return hour < 12 ? '오전' : '오후';
    }
  });
  return ko;
});

/***/ }),

/***/ 612:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ku.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Kurdish [ku]
//! author : Shahram Mebashar : https://github.com/ShahramMebashar

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '١',
      2: '٢',
      3: '٣',
      4: '٤',
      5: '٥',
      6: '٦',
      7: '٧',
      8: '٨',
      9: '٩',
      0: '٠'
    },
    numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
    },
    months = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];
  var ku = moment.defineLocale('ku', {
    months: months,
    monthsShort: months,
    weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
    weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /ئێواره‌|به‌یانی/,
    isPM: function isPM(input) {
      return /ئێواره‌/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'به‌یانی';
      } else {
        return 'ئێواره‌';
      }
    },
    calendar: {
      sameDay: '[ئه‌مرۆ كاتژمێر] LT',
      nextDay: '[به‌یانی كاتژمێر] LT',
      nextWeek: 'dddd [كاتژمێر] LT',
      lastDay: '[دوێنێ كاتژمێر] LT',
      lastWeek: 'dddd [كاتژمێر] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'له‌ %s',
      past: '%s',
      s: 'چه‌ند چركه‌یه‌ك',
      ss: 'چركه‌ %d',
      m: 'یه‌ك خوله‌ك',
      mm: '%d خوله‌ك',
      h: 'یه‌ك كاتژمێر',
      hh: '%d كاتژمێر',
      d: 'یه‌ك ڕۆژ',
      dd: '%d ڕۆژ',
      M: 'یه‌ك مانگ',
      MM: '%d مانگ',
      y: 'یه‌ك ساڵ',
      yy: '%d ساڵ'
    },
    preparse: function preparse(string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return ku;
});

/***/ }),

/***/ 613:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ky.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    0: '-чү',
    1: '-чи',
    2: '-чи',
    3: '-чү',
    4: '-чү',
    5: '-чи',
    6: '-чы',
    7: '-чи',
    8: '-чи',
    9: '-чу',
    10: '-чу',
    20: '-чы',
    30: '-чу',
    40: '-чы',
    50: '-чү',
    60: '-чы',
    70: '-чи',
    80: '-чи',
    90: '-чу',
    100: '-чү'
  };
  var ky = moment.defineLocale('ky', {
    months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
    weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
    weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Бүгүн саат] LT',
      nextDay: '[Эртең саат] LT',
      nextWeek: 'dddd [саат] LT',
      lastDay: '[Кечээ саат] LT',
      lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ичинде',
      past: '%s мурун',
      s: 'бирнече секунд',
      ss: '%d секунд',
      m: 'бир мүнөт',
      mm: '%d мүнөт',
      h: 'бир саат',
      hh: '%d саат',
      d: 'бир күн',
      dd: '%d күн',
      M: 'бир ай',
      MM: '%d ай',
      y: 'бир жыл',
      yy: '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
        b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return ky;
});

/***/ }),

/***/ 614:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/lb.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eng Minutt', 'enger Minutt'],
      h: ['eng Stonn', 'enger Stonn'],
      d: ['een Dag', 'engem Dag'],
      M: ['ee Mount', 'engem Mount'],
      y: ['ee Joer', 'engem Joer']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
  }
  function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'a ' + string;
    }
    return 'an ' + string;
  }
  function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'viru ' + string;
    }
    return 'virun ' + string;
  }
  /**
   * Returns true if the word before the given number loses the '-n' ending.
   * e.g. 'an 10 Deeg' but 'a 5 Deeg'
   *
   * @param number {integer}
   * @returns {boolean}
   */
  function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
      return false;
    }
    if (number < 0) {
      // Negative Number --> always true
      return true;
    } else if (number < 10) {
      // Only 1 digit
      if (4 <= number && number <= 7) {
        return true;
      }
      return false;
    } else if (number < 100) {
      // 2 digits
      var lastDigit = number % 10,
        firstDigit = number / 10;
      if (lastDigit === 0) {
        return eifelerRegelAppliesToNumber(firstDigit);
      }
      return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
      // 3 or 4 digits --> recursively check first digit
      while (number >= 10) {
        number = number / 10;
      }
      return eifelerRegelAppliesToNumber(number);
    } else {
      // Anything larger than 4 digits: recursively check first n-3 digits
      number = number / 1000;
      return eifelerRegelAppliesToNumber(number);
    }
  }
  var lb = moment.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm [Auer]',
      LTS: 'H:mm:ss [Auer]',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm [Auer]',
      LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
      sameDay: '[Haut um] LT',
      sameElse: 'L',
      nextDay: '[Muer um] LT',
      nextWeek: 'dddd [um] LT',
      lastDay: '[Gëschter um] LT',
      lastWeek: function lastWeek() {
        // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
        switch (this.day()) {
          case 2:
          case 4:
            return '[Leschten] dddd [um] LT';
          default:
            return '[Leschte] dddd [um] LT';
        }
      }
    },
    relativeTime: {
      future: processFutureTime,
      past: processPastTime,
      s: 'e puer Sekonnen',
      ss: '%d Sekonnen',
      m: processRelativeTime,
      mm: '%d Minutten',
      h: processRelativeTime,
      hh: '%d Stonnen',
      d: processRelativeTime,
      dd: '%d Deeg',
      M: processRelativeTime,
      MM: '%d Méint',
      y: processRelativeTime,
      yy: '%d Joer'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return lb;
});

/***/ }),

/***/ 615:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/lo.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var lo = moment.defineLocale('lo', {
    months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM: function isPM(input) {
      return input === 'ຕອນແລງ';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ຕອນເຊົ້າ';
      } else {
        return 'ຕອນແລງ';
      }
    },
    calendar: {
      sameDay: '[ມື້ນີ້ເວລາ] LT',
      nextDay: '[ມື້ອື່ນເວລາ] LT',
      nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
      lastDay: '[ມື້ວານນີ້ເວລາ] LT',
      lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ອີກ %s',
      past: '%sຜ່ານມາ',
      s: 'ບໍ່ເທົ່າໃດວິນາທີ',
      ss: '%d ວິນາທີ',
      m: '1 ນາທີ',
      mm: '%d ນາທີ',
      h: '1 ຊົ່ວໂມງ',
      hh: '%d ຊົ່ວໂມງ',
      d: '1 ມື້',
      dd: '%d ມື້',
      M: '1 ເດືອນ',
      MM: '%d ເດືອນ',
      y: '1 ປີ',
      yy: '%d ປີ'
    },
    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
    ordinal: function ordinal(number) {
      return 'ທີ່' + number;
    }
  });
  return lo;
});

/***/ }),

/***/ 616:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/lt.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Mozūras : https://github.com/mmozuras

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
  };
  function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
      return 'kelios sekundės';
    } else {
      return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
  }
  function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
  }
  function special(number) {
    return number % 10 === 0 || number > 10 && number < 20;
  }
  function forms(key) {
    return units[key].split('_');
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
      return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
      return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
      if (isFuture) {
        return result + forms(key)[1];
      } else {
        return result + (special(number) ? forms(key)[1] : forms(key)[2]);
      }
    }
  }
  var lt = moment.defineLocale('lt', {
    months: {
      format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
      standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
      isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
      format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
      standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
      isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY [m.] MMMM D [d.]',
      LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
      l: 'YYYY-MM-DD',
      ll: 'YYYY [m.] MMMM D [d.]',
      lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
      sameDay: '[Šiandien] LT',
      nextDay: '[Rytoj] LT',
      nextWeek: 'dddd LT',
      lastDay: '[Vakar] LT',
      lastWeek: '[Praėjusį] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'po %s',
      past: 'prieš %s',
      s: translateSeconds,
      ss: translate,
      m: translateSingular,
      mm: translate,
      h: translateSingular,
      hh: translate,
      d: translateSingular,
      dd: translate,
      M: translateSingular,
      MM: translate,
      y: translateSingular,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: function ordinal(number) {
      return number + '-oji';
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return lt;
});

/***/ }),

/***/ 617:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/lv.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var units = {
    ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
    m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    h: 'stundas_stundām_stunda_stundas'.split('_'),
    hh: 'stundas_stundām_stunda_stundas'.split('_'),
    d: 'dienas_dienām_diena_dienas'.split('_'),
    dd: 'dienas_dienām_diena_dienas'.split('_'),
    M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    y: 'gada_gadiem_gads_gadi'.split('_'),
    yy: 'gada_gadiem_gads_gadi'.split('_')
  };
  /**
   * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
   */
  function format(forms, number, withoutSuffix) {
    if (withoutSuffix) {
      // E.g. "21 minūte", "3 minūtes".
      return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
      // E.g. "21 minūtes" as in "pēc 21 minūtes".
      // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
      return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
  }
  function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format(units[key], number, withoutSuffix);
  }
  function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
  }
  var lv = moment.defineLocale('lv', {
    months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY.',
      LL: 'YYYY. [gada] D. MMMM',
      LLL: 'YYYY. [gada] D. MMMM, HH:mm',
      LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
    },
    calendar: {
      sameDay: '[Šodien pulksten] LT',
      nextDay: '[Rīt pulksten] LT',
      nextWeek: 'dddd [pulksten] LT',
      lastDay: '[Vakar pulksten] LT',
      lastWeek: '[Pagājušā] dddd [pulksten] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'pēc %s',
      past: 'pirms %s',
      s: relativeSeconds,
      ss: relativeTimeWithPlural,
      m: relativeTimeWithSingular,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithSingular,
      hh: relativeTimeWithPlural,
      d: relativeTimeWithSingular,
      dd: relativeTimeWithPlural,
      M: relativeTimeWithSingular,
      MM: relativeTimeWithPlural,
      y: relativeTimeWithSingular,
      yy: relativeTimeWithPlural
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return lv;
});

/***/ }),

/***/ 618:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/me.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var translator = {
    words: {
      //Different grammatical cases
      ss: ['sekund', 'sekunda', 'sekundi'],
      m: ['jedan minut', 'jednog minuta'],
      mm: ['minut', 'minuta', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      dd: ['dan', 'dana', 'dana'],
      MM: ['mjesec', 'mjeseca', 'mjeseci'],
      yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
      }
    }
  };
  var me = moment.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sjutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';
        }
      },
      lastDay: '[juče u] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
        return lastWeekDays[this.day()];
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'dan',
      dd: translator.translate,
      M: 'mjesec',
      MM: translator.translate,
      y: 'godinu',
      yy: translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return me;
});

/***/ }),

/***/ 619:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/mi.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var mi = moment.defineLocale('mi', {
    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [i] HH:mm',
      LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
    },
    calendar: {
      sameDay: '[i teie mahana, i] LT',
      nextDay: '[apopo i] LT',
      nextWeek: 'dddd [i] LT',
      lastDay: '[inanahi i] LT',
      lastWeek: 'dddd [whakamutunga i] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'i roto i %s',
      past: '%s i mua',
      s: 'te hēkona ruarua',
      ss: '%d hēkona',
      m: 'he meneti',
      mm: '%d meneti',
      h: 'te haora',
      hh: '%d haora',
      d: 'he ra',
      dd: '%d ra',
      M: 'he marama',
      MM: '%d marama',
      y: 'he tau',
      yy: '%d tau'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return mi;
});

/***/ }),

/***/ 620:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/mk.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0
//! author : Sashko Todorov : https://github.com/bkyceh

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var mk = moment.defineLocale('mk', {
    months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Денес во] LT',
      nextDay: '[Утре во] LT',
      nextWeek: '[Во] dddd [во] LT',
      lastDay: '[Вчера во] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[Изминатата] dddd [во] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[Изминатиот] dddd [во] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: 'пред %s',
      s: 'неколку секунди',
      ss: '%d секунди',
      m: 'една минута',
      mm: '%d минути',
      h: 'еден час',
      hh: '%d часа',
      d: 'еден ден',
      dd: '%d дена',
      M: 'еден месец',
      MM: '%d месеци',
      y: 'една година',
      yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function ordinal(number) {
      var lastDigit = number % 10,
        last2Digits = number % 100;
      if (number === 0) {
        return number + '-ев';
      } else if (last2Digits === 0) {
        return number + '-ен';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-ти';
      } else if (lastDigit === 1) {
        return number + '-ви';
      } else if (lastDigit === 2) {
        return number + '-ри';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-ми';
      } else {
        return number + '-ти';
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return mk;
});

/***/ }),

/***/ 621:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ml.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ml = moment.defineLocale('ml', {
    months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    monthsParseExact: true,
    weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm -നു',
      LTS: 'A h:mm:ss -നു',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm -നു',
      LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
    },
    calendar: {
      sameDay: '[ഇന്ന്] LT',
      nextDay: '[നാളെ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ഇന്നലെ] LT',
      lastWeek: '[കഴിഞ്ഞ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s കഴിഞ്ഞ്',
      past: '%s മുൻപ്',
      s: 'അൽപ നിമിഷങ്ങൾ',
      ss: '%d സെക്കൻഡ്',
      m: 'ഒരു മിനിറ്റ്',
      mm: '%d മിനിറ്റ്',
      h: 'ഒരു മണിക്കൂർ',
      hh: '%d മണിക്കൂർ',
      d: 'ഒരു ദിവസം',
      dd: '%d ദിവസം',
      M: 'ഒരു മാസം',
      MM: '%d മാസം',
      y: 'ഒരു വർഷം',
      yy: '%d വർഷം'
    },
    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'രാത്രി' && hour >= 4 || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'രാത്രി';
      } else if (hour < 12) {
        return 'രാവിലെ';
      } else if (hour < 17) {
        return 'ഉച്ച കഴിഞ്ഞ്';
      } else if (hour < 20) {
        return 'വൈകുന്നേരം';
      } else {
        return 'രാത്രി';
      }
    }
  });
  return ml;
});

/***/ }),

/***/ 622:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/mn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function translate(number, withoutSuffix, key, isFuture) {
    switch (key) {
      case 's':
        return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
      case 'ss':
        return number + (withoutSuffix ? ' секунд' : ' секундын');
      case 'm':
      case 'mm':
        return number + (withoutSuffix ? ' минут' : ' минутын');
      case 'h':
      case 'hh':
        return number + (withoutSuffix ? ' цаг' : ' цагийн');
      case 'd':
      case 'dd':
        return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
      case 'M':
      case 'MM':
        return number + (withoutSuffix ? ' сар' : ' сарын');
      case 'y':
      case 'yy':
        return number + (withoutSuffix ? ' жил' : ' жилийн');
      default:
        return number;
    }
  }
  var mn = moment.defineLocale('mn', {
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY оны MMMMын D',
      LLL: 'YYYY оны MMMMын D HH:mm',
      LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function isPM(input) {
      return input === 'ҮХ';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ҮӨ';
      } else {
        return 'ҮХ';
      }
    },
    calendar: {
      sameDay: '[Өнөөдөр] LT',
      nextDay: '[Маргааш] LT',
      nextWeek: '[Ирэх] dddd LT',
      lastDay: '[Өчигдөр] LT',
      lastWeek: '[Өнгөрсөн] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s дараа',
      past: '%s өмнө',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + ' өдөр';
        default:
          return number;
      }
    }
  });
  return mn;
});

/***/ }),

/***/ 623:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/mr.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Marathi [mr]
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
      0: '०'
    },
    numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
    };
  function relativeTimeMr(number, withoutSuffix, string, isFuture) {
    var output = '';
    if (withoutSuffix) {
      switch (string) {
        case 's':
          output = 'काही सेकंद';
          break;
        case 'ss':
          output = '%d सेकंद';
          break;
        case 'm':
          output = 'एक मिनिट';
          break;
        case 'mm':
          output = '%d मिनिटे';
          break;
        case 'h':
          output = 'एक तास';
          break;
        case 'hh':
          output = '%d तास';
          break;
        case 'd':
          output = 'एक दिवस';
          break;
        case 'dd':
          output = '%d दिवस';
          break;
        case 'M':
          output = 'एक महिना';
          break;
        case 'MM':
          output = '%d महिने';
          break;
        case 'y':
          output = 'एक वर्ष';
          break;
        case 'yy':
          output = '%d वर्षे';
          break;
      }
    } else {
      switch (string) {
        case 's':
          output = 'काही सेकंदां';
          break;
        case 'ss':
          output = '%d सेकंदां';
          break;
        case 'm':
          output = 'एका मिनिटा';
          break;
        case 'mm':
          output = '%d मिनिटां';
          break;
        case 'h':
          output = 'एका तासा';
          break;
        case 'hh':
          output = '%d तासां';
          break;
        case 'd':
          output = 'एका दिवसा';
          break;
        case 'dd':
          output = '%d दिवसां';
          break;
        case 'M':
          output = 'एका महिन्या';
          break;
        case 'MM':
          output = '%d महिन्यां';
          break;
        case 'y':
          output = 'एका वर्षा';
          break;
        case 'yy':
          output = '%d वर्षां';
          break;
      }
    }
    return output.replace(/%d/i, number);
  }
  var mr = moment.defineLocale('mr', {
    months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm वाजता',
      LTS: 'A h:mm:ss वाजता',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm वाजता',
      LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[उद्या] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[काल] LT',
      lastWeek: '[मागील] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sमध्ये',
      past: '%sपूर्वी',
      s: relativeTimeMr,
      ss: relativeTimeMr,
      m: relativeTimeMr,
      mm: relativeTimeMr,
      h: relativeTimeMr,
      hh: relativeTimeMr,
      d: relativeTimeMr,
      dd: relativeTimeMr,
      M: relativeTimeMr,
      MM: relativeTimeMr,
      y: relativeTimeMr,
      yy: relativeTimeMr
    },
    preparse: function preparse(string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'पहाटे' || meridiem === 'सकाळी') {
        return hour;
      } else if (meridiem === 'दुपारी' || meridiem === 'सायंकाळी' || meridiem === 'रात्री') {
        return hour >= 12 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour >= 0 && hour < 6) {
        return 'पहाटे';
      } else if (hour < 12) {
        return 'सकाळी';
      } else if (hour < 17) {
        return 'दुपारी';
      } else if (hour < 20) {
        return 'सायंकाळी';
      } else {
        return 'रात्री';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return mr;
});

/***/ }),

/***/ 624:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ms.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ms = moment.defineLocale('ms', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return ms;
});

/***/ }),

/***/ 625:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ms-my.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var msMy = moment.defineLocale('ms-my', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return msMy;
});

/***/ }),

/***/ 626:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/mt.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Maltese (Malta) [mt]
//! author : Alessandro Maruccia : https://github.com/alesma

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var mt = moment.defineLocale('mt', {
    months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
    monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
    weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
    weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
    weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Illum fil-]LT',
      nextDay: '[Għada fil-]LT',
      nextWeek: 'dddd [fil-]LT',
      lastDay: '[Il-bieraħ fil-]LT',
      lastWeek: 'dddd [li għadda] [fil-]LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'f’ %s',
      past: '%s ilu',
      s: 'ftit sekondi',
      ss: '%d sekondi',
      m: 'minuta',
      mm: '%d minuti',
      h: 'siegħa',
      hh: '%d siegħat',
      d: 'ġurnata',
      dd: '%d ġranet',
      M: 'xahar',
      MM: '%d xhur',
      y: 'sena',
      yy: '%d sni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return mt;
});

/***/ }),

/***/ 627:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/my.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '၁',
      2: '၂',
      3: '၃',
      4: '၄',
      5: '၅',
      6: '၆',
      7: '၇',
      8: '၈',
      9: '၉',
      0: '၀'
    },
    numberMap = {
      '၁': '1',
      '၂': '2',
      '၃': '3',
      '၄': '4',
      '၅': '5',
      '၆': '6',
      '၇': '7',
      '၈': '8',
      '၉': '9',
      '၀': '0'
    };
  var my = moment.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ယနေ.] LT [မှာ]',
      nextDay: '[မနက်ဖြန်] LT [မှာ]',
      nextWeek: 'dddd LT [မှာ]',
      lastDay: '[မနေ.က] LT [မှာ]',
      lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'လာမည့် %s မှာ',
      past: 'လွန်ခဲ့သော %s က',
      s: 'စက္ကန်.အနည်းငယ်',
      ss: '%d စက္ကန့်',
      m: 'တစ်မိနစ်',
      mm: '%d မိနစ်',
      h: 'တစ်နာရီ',
      hh: '%d နာရီ',
      d: 'တစ်ရက်',
      dd: '%d ရက်',
      M: 'တစ်လ',
      MM: '%d လ',
      y: 'တစ်နှစ်',
      yy: '%d နှစ်'
    },
    preparse: function preparse(string) {
      return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return my;
});

/***/ }),

/***/ 628:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/nb.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
//!           Stephen Ramthun : https://github.com/stephenramthun

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var nb = moment.defineLocale('nb', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[i går kl.] LT',
      lastWeek: '[forrige] dddd [kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'noen sekunder',
      ss: '%d sekunder',
      m: 'ett minutt',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dager',
      w: 'en uke',
      ww: '%d uker',
      M: 'en måned',
      MM: '%d måneder',
      y: 'ett år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return nb;
});

/***/ }),

/***/ 629:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ne.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
      0: '०'
    },
    numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
    };
  var ne = moment.defineLocale('ne', {
    months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    monthsParseExact: true,
    weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'Aको h:mm बजे',
      LTS: 'Aको h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, Aको h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
    },
    preparse: function preparse(string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'राति') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'बिहान') {
        return hour;
      } else if (meridiem === 'दिउँसो') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'साँझ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 3) {
        return 'राति';
      } else if (hour < 12) {
        return 'बिहान';
      } else if (hour < 16) {
        return 'दिउँसो';
      } else if (hour < 20) {
        return 'साँझ';
      } else {
        return 'राति';
      }
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[भोलि] LT',
      nextWeek: '[आउँदो] dddd[,] LT',
      lastDay: '[हिजो] LT',
      lastWeek: '[गएको] dddd[,] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sमा',
      past: '%s अगाडि',
      s: 'केही क्षण',
      ss: '%d सेकेण्ड',
      m: 'एक मिनेट',
      mm: '%d मिनेट',
      h: 'एक घण्टा',
      hh: '%d घण्टा',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महिना',
      MM: '%d महिना',
      y: 'एक बर्ष',
      yy: '%d बर्ष'
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return ne;
});

/***/ }),

/***/ 630:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/nl.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
    monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  var nl = moment.defineLocale('nl', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      w: 'één week',
      ww: '%d weken',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return nl;
});

/***/ }),

/***/ 631:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/nl-be.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
    monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  var nlBe = moment.defineLocale('nl-be', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function monthsShort(m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function ordinal(number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return nlBe;
});

/***/ }),

/***/ 632:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/nn.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! authors : https://github.com/mechuwind
//!           Stephen Ramthun : https://github.com/stephenramthun

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var nn = moment.defineLocale('nn', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
    weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
      sameDay: '[I dag klokka] LT',
      nextDay: '[I morgon klokka] LT',
      nextWeek: 'dddd [klokka] LT',
      lastDay: '[I går klokka] LT',
      lastWeek: '[Føregåande] dddd [klokka] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: '%s sidan',
      s: 'nokre sekund',
      ss: '%d sekund',
      m: 'eit minutt',
      mm: '%d minutt',
      h: 'ein time',
      hh: '%d timar',
      d: 'ein dag',
      dd: '%d dagar',
      w: 'ei veke',
      ww: '%d veker',
      M: 'ein månad',
      MM: '%d månader',
      y: 'eit år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return nn;
});

/***/ }),

/***/ 633:
/*!**********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/oc-lnc.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Occitan, lengadocian dialecte [oc-lnc]
//! author : Quentin PAGÈS : https://github.com/Quenty31

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ocLnc = moment.defineLocale('oc-lnc', {
    months: {
      standalone: 'genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split('_'),
      format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split('_'),
      isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort: 'gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split('_'),
    weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [de] YYYY',
      ll: 'D MMM YYYY',
      LLL: 'D MMMM [de] YYYY [a] H:mm',
      lll: 'D MMM YYYY, H:mm',
      LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
      llll: 'ddd D MMM YYYY, H:mm'
    },
    calendar: {
      sameDay: '[uèi a] LT',
      nextDay: '[deman a] LT',
      nextWeek: 'dddd [a] LT',
      lastDay: '[ièr a] LT',
      lastWeek: 'dddd [passat a] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: "d'aquí %s",
      past: 'fa %s',
      s: 'unas segondas',
      ss: '%d segondas',
      m: 'una minuta',
      mm: '%d minutas',
      h: 'una ora',
      hh: '%d oras',
      d: 'un jorn',
      dd: '%d jorns',
      M: 'un mes',
      MM: '%d meses',
      y: 'un an',
      yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal: function ordinal(number, period) {
      var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
      if (period === 'w' || period === 'W') {
        output = 'a';
      }
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4
    }
  });
  return ocLnc;
});

/***/ }),

/***/ 634:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/pa-in.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '੧',
      2: '੨',
      3: '੩',
      4: '੪',
      5: '੫',
      6: '੬',
      7: '੭',
      8: '੮',
      9: '੯',
      0: '੦'
    },
    numberMap = {
      '੧': '1',
      '੨': '2',
      '੩': '3',
      '੪': '4',
      '੫': '5',
      '੬': '6',
      '੭': '7',
      '੮': '8',
      '੯': '9',
      '੦': '0'
    };
  var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
    months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
    weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ਵਜੇ',
      LTS: 'A h:mm:ss ਵਜੇ',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
    },
    calendar: {
      sameDay: '[ਅਜ] LT',
      nextDay: '[ਕਲ] LT',
      nextWeek: '[ਅਗਲਾ] dddd, LT',
      lastDay: '[ਕਲ] LT',
      lastWeek: '[ਪਿਛਲੇ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ਵਿੱਚ',
      past: '%s ਪਿਛਲੇ',
      s: 'ਕੁਝ ਸਕਿੰਟ',
      ss: '%d ਸਕਿੰਟ',
      m: 'ਇਕ ਮਿੰਟ',
      mm: '%d ਮਿੰਟ',
      h: 'ਇੱਕ ਘੰਟਾ',
      hh: '%d ਘੰਟੇ',
      d: 'ਇੱਕ ਦਿਨ',
      dd: '%d ਦਿਨ',
      M: 'ਇੱਕ ਮਹੀਨਾ',
      MM: '%d ਮਹੀਨੇ',
      y: 'ਇੱਕ ਸਾਲ',
      yy: '%d ਸਾਲ'
    },
    preparse: function preparse(string) {
      return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ਰਾਤ') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ਸਵੇਰ') {
        return hour;
      } else if (meridiem === 'ਦੁਪਹਿਰ') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'ਸ਼ਾਮ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ਰਾਤ';
      } else if (hour < 10) {
        return 'ਸਵੇਰ';
      } else if (hour < 17) {
        return 'ਦੁਪਹਿਰ';
      } else if (hour < 20) {
        return 'ਸ਼ਾਮ';
      } else {
        return 'ਰਾਤ';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return paIn;
});

/***/ }),

/***/ 635:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/pl.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
    monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_'),
    monthsParse = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
  function plural(n) {
    return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
  }
  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        return result + (plural(number) ? 'sekundy' : 'sekund');
      case 'm':
        return withoutSuffix ? 'minuta' : 'minutę';
      case 'mm':
        return result + (plural(number) ? 'minuty' : 'minut');
      case 'h':
        return withoutSuffix ? 'godzina' : 'godzinę';
      case 'hh':
        return result + (plural(number) ? 'godziny' : 'godzin');
      case 'ww':
        return result + (plural(number) ? 'tygodnie' : 'tygodni');
      case 'MM':
        return result + (plural(number) ? 'miesiące' : 'miesięcy');
      case 'yy':
        return result + (plural(number) ? 'lata' : 'lat');
    }
  }
  var pl = moment.defineLocale('pl', {
    months: function months(momentToFormat, format) {
      if (!momentToFormat) {
        return monthsNominative;
      } else if (/D MMMM/.test(format)) {
        return monthsSubjective[momentToFormat.month()];
      } else {
        return monthsNominative[momentToFormat.month()];
      }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Dziś o] LT',
      nextDay: '[Jutro o] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[W niedzielę o] LT';
          case 2:
            return '[We wtorek o] LT';
          case 3:
            return '[W środę o] LT';
          case 6:
            return '[W sobotę o] LT';
          default:
            return '[W] dddd [o] LT';
        }
      },
      lastDay: '[Wczoraj o] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[W zeszłą niedzielę o] LT';
          case 3:
            return '[W zeszłą środę o] LT';
          case 6:
            return '[W zeszłą sobotę o] LT';
          default:
            return '[W zeszły] dddd [o] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: '%s temu',
      s: 'kilka sekund',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: '1 dzień',
      dd: '%d dni',
      w: 'tydzień',
      ww: translate,
      M: 'miesiąc',
      MM: translate,
      y: 'rok',
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return pl;
});

/***/ }),

/***/ 636:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/pt.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Portuguese [pt]
//! author : Jefferson : https://github.com/jalex79

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var pt = moment.defineLocale('pt', {
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function lastWeek() {
        return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
        : '[Última] dddd [às] LT'; // Monday - Friday
      },

      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      w: 'uma semana',
      ww: '%d semanas',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return pt;
});

/***/ }),

/***/ 637:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/pt-br.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ptBr = moment.defineLocale('pt-br', {
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
    weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function lastWeek() {
        return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
        : '[Última] dddd [às] LT'; // Monday - Friday
      },

      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'poucos segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    invalidDate: 'Data inválida'
  });
  return ptBr;
});

/***/ }),

/***/ 638:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ro.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
//! author : Emanuel Cepoi : https://github.com/cepem

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        ww: 'săptămâni',
        MM: 'luni',
        yy: 'ani'
      },
      separator = ' ';
    if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
      separator = ' de ';
    }
    return number + separator + format[key];
  }
  var ro = moment.defineLocale('ro', {
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[azi la] LT',
      nextDay: '[mâine la] LT',
      nextWeek: 'dddd [la] LT',
      lastDay: '[ieri la] LT',
      lastWeek: '[fosta] dddd [la] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'peste %s',
      past: '%s în urmă',
      s: 'câteva secunde',
      ss: relativeTimeWithPlural,
      m: 'un minut',
      mm: relativeTimeWithPlural,
      h: 'o oră',
      hh: relativeTimeWithPlural,
      d: 'o zi',
      dd: relativeTimeWithPlural,
      w: 'o săptămână',
      ww: relativeTimeWithPlural,
      M: 'o lună',
      MM: relativeTimeWithPlural,
      y: 'un an',
      yy: relativeTimeWithPlural
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return ro;
});

/***/ }),

/***/ 639:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ru.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
      mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
      hh: 'час_часа_часов',
      dd: 'день_дня_дней',
      ww: 'неделя_недели_недель',
      MM: 'месяц_месяца_месяцев',
      yy: 'год_года_лет'
    };
    if (key === 'm') {
      return withoutSuffix ? 'минута' : 'минуту';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

  // http://new.gramota.ru/spravka/rules/139-prop : § 103
  // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
  // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
  var ru = moment.defineLocale('ru', {
    months: {
      format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
      standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
      // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
      format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
      standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
      standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
      format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
      isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соответствует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., H:mm',
      LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
      sameDay: '[Сегодня, в] LT',
      nextDay: '[Завтра, в] LT',
      lastDay: '[Вчера, в] LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[В следующее] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В следующий] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В следующую] dddd, [в] LT';
          }
        } else {
          if (this.day() === 2) {
            return '[Во] dddd, [в] LT';
          } else {
            return '[В] dddd, [в] LT';
          }
        }
      },
      lastWeek: function lastWeek(now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[В прошлое] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В прошлый] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В прошлую] dddd, [в] LT';
          }
        } else {
          if (this.day() === 2) {
            return '[Во] dddd, [в] LT';
          } else {
            return '[В] dddd, [в] LT';
          }
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'через %s',
      past: '%s назад',
      s: 'несколько секунд',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'час',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      w: 'неделя',
      ww: relativeTimeWithPlural,
      M: 'месяц',
      MM: relativeTimeWithPlural,
      y: 'год',
      yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function isPM(input) {
      return /^(дня|вечера)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ночи';
      } else if (hour < 12) {
        return 'утра';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечера';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
          return number + '-й';
        case 'D':
          return number + '-го';
        case 'w':
        case 'W':
          return number + '-я';
        default:
          return number;
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return ru;
});

/***/ }),

/***/ 640:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sd.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'],
    days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
  var sd = moment.defineLocale('sd', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM: function isPM(input) {
      return 'شام' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'صبح';
      }
      return 'شام';
    },
    calendar: {
      sameDay: '[اڄ] LT',
      nextDay: '[سڀاڻي] LT',
      nextWeek: 'dddd [اڳين هفتي تي] LT',
      lastDay: '[ڪالهه] LT',
      lastWeek: '[گزريل هفتي] dddd [تي] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s پوء',
      past: '%s اڳ',
      s: 'چند سيڪنڊ',
      ss: '%d سيڪنڊ',
      m: 'هڪ منٽ',
      mm: '%d منٽ',
      h: 'هڪ ڪلاڪ',
      hh: '%d ڪلاڪ',
      d: 'هڪ ڏينهن',
      dd: '%d ڏينهن',
      M: 'هڪ مهينو',
      MM: '%d مهينا',
      y: 'هڪ سال',
      yy: '%d سال'
    },
    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return sd;
});

/***/ }),

/***/ 641:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/se.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : Bård Rolstad Henriksen : https://github.com/karamell

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var se = moment.defineLocale('se', {
    months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
    monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
    weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
    weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
    weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'MMMM D. [b.] YYYY',
      LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
      LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
    },
    calendar: {
      sameDay: '[otne ti] LT',
      nextDay: '[ihttin ti] LT',
      nextWeek: 'dddd [ti] LT',
      lastDay: '[ikte ti] LT',
      lastWeek: '[ovddit] dddd [ti] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s geažes',
      past: 'maŋit %s',
      s: 'moadde sekunddat',
      ss: '%d sekunddat',
      m: 'okta minuhta',
      mm: '%d minuhtat',
      h: 'okta diimmu',
      hh: '%d diimmut',
      d: 'okta beaivi',
      dd: '%d beaivvit',
      M: 'okta mánnu',
      MM: '%d mánut',
      y: 'okta jahki',
      yy: '%d jagit'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return se;
});

/***/ }),

/***/ 642:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/si.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration

  /*jshint -W100*/
  var si = moment.defineLocale('si', {
    months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
    weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'a h:mm',
      LTS: 'a h:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY MMMM D',
      LLL: 'YYYY MMMM D, a h:mm',
      LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
    },
    calendar: {
      sameDay: '[අද] LT[ට]',
      nextDay: '[හෙට] LT[ට]',
      nextWeek: 'dddd LT[ට]',
      lastDay: '[ඊයේ] LT[ට]',
      lastWeek: '[පසුගිය] dddd LT[ට]',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sකින්',
      past: '%sකට පෙර',
      s: 'තත්පර කිහිපය',
      ss: 'තත්පර %d',
      m: 'මිනිත්තුව',
      mm: 'මිනිත්තු %d',
      h: 'පැය',
      hh: 'පැය %d',
      d: 'දිනය',
      dd: 'දින %d',
      M: 'මාසය',
      MM: 'මාස %d',
      y: 'වසර',
      yy: 'වසර %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
    ordinal: function ordinal(number) {
      return number + ' වැනි';
    },
    meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM: function isPM(input) {
      return input === 'ප.ව.' || input === 'පස් වරු';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'ප.ව.' : 'පස් වරු';
      } else {
        return isLower ? 'පෙ.ව.' : 'පෙර වරු';
      }
    }
  });
  return si;
});

/***/ }),

/***/ 643:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sk.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
    monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
  function plural(n) {
    return n > 1 && n < 5;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
      case 'ss':
        // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sekúnd');
        } else {
          return result + 'sekundami';
        }
      case 'm':
        // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
      case 'mm':
        // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'minúty' : 'minút');
        } else {
          return result + 'minútami';
        }
      case 'h':
        // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh':
        // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hodín');
        } else {
          return result + 'hodinami';
        }
      case 'd':
        // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'deň' : 'dňom';
      case 'dd':
        // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dni' : 'dní');
        } else {
          return result + 'dňami';
        }
      case 'M':
        // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
      case 'MM':
        // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'mesiace' : 'mesiacov');
        } else {
          return result + 'mesiacmi';
        }
      case 'y':
        // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokom';
      case 'yy':
        // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'rokov');
        } else {
          return result + 'rokmi';
        }
    }
  }
  var sk = moment.defineLocale('sk', {
    months: months,
    monthsShort: monthsShort,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[dnes o] LT',
      nextDay: '[zajtra o] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v nedeľu o] LT';
          case 1:
          case 2:
            return '[v] dddd [o] LT';
          case 3:
            return '[v stredu o] LT';
          case 4:
            return '[vo štvrtok o] LT';
          case 5:
            return '[v piatok o] LT';
          case 6:
            return '[v sobotu o] LT';
        }
      },
      lastDay: '[včera o] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[minulú nedeľu o] LT';
          case 1:
          case 2:
            return '[minulý] dddd [o] LT';
          case 3:
            return '[minulú stredu o] LT';
          case 4:
          case 5:
            return '[minulý] dddd [o] LT';
          case 6:
            return '[minulú sobotu o] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'pred %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return sk;
});

/***/ }),

/***/ 644:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sl.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : Robert Sedovšek : https://github.com/sedovsek

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
      case 'ss':
        if (number === 1) {
          result += withoutSuffix ? 'sekundo' : 'sekundi';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
        } else {
          result += 'sekund';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'ena minuta' : 'eno minuto';
      case 'mm':
        if (number === 1) {
          result += withoutSuffix ? 'minuta' : 'minuto';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'minute' : 'minutami';
        } else {
          result += withoutSuffix || isFuture ? 'minut' : 'minutami';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'ena ura' : 'eno uro';
      case 'hh':
        if (number === 1) {
          result += withoutSuffix ? 'ura' : 'uro';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'uri' : 'urama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'ure' : 'urami';
        } else {
          result += withoutSuffix || isFuture ? 'ur' : 'urami';
        }
        return result;
      case 'd':
        return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
      case 'dd':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'dan' : 'dnem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
        } else {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
        }
        return result;
      case 'M':
        return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
      case 'MM':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
        } else {
          result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
        }
        return result;
      case 'y':
        return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
      case 'yy':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'leto' : 'letom';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'leti' : 'letoma';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'leta' : 'leti';
        } else {
          result += withoutSuffix || isFuture ? 'let' : 'leti';
        }
        return result;
    }
  }
  var sl = moment.defineLocale('sl', {
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danes ob] LT',
      nextDay: '[jutri ob] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[v] [nedeljo] [ob] LT';
          case 3:
            return '[v] [sredo] [ob] LT';
          case 6:
            return '[v] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[v] dddd [ob] LT';
        }
      },
      lastDay: '[včeraj ob] LT',
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
            return '[prejšnjo] [nedeljo] [ob] LT';
          case 3:
            return '[prejšnjo] [sredo] [ob] LT';
          case 6:
            return '[prejšnjo] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prejšnji] dddd [ob] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'čez %s',
      past: 'pred %s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return sl;
});

/***/ }),

/***/ 645:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sq.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flakërim Ismani : https://github.com/flakerimi
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var sq = moment.defineLocale('sq', {
    months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /PD|MD/,
    isPM: function isPM(input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Sot në] LT',
      nextDay: '[Nesër në] LT',
      nextWeek: 'dddd [në] LT',
      lastDay: '[Dje në] LT',
      lastWeek: 'dddd [e kaluar në] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'në %s',
      past: '%s më parë',
      s: 'disa sekonda',
      ss: '%d sekonda',
      m: 'një minutë',
      mm: '%d minuta',
      h: 'një orë',
      hh: '%d orë',
      d: 'një ditë',
      dd: '%d ditë',
      M: 'një muaj',
      MM: '%d muaj',
      y: 'një vit',
      yy: '%d vite'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return sq;
});

/***/ }),

/***/ 646:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sr.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
//! author : Stefan Crnjaković <stefan@hotmail.rs> : https://github.com/crnjakovic

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var translator = {
    words: {
      //Different grammatical cases
      ss: ['sekunda', 'sekunde', 'sekundi'],
      m: ['jedan minut', 'jednog minuta'],
      mm: ['minut', 'minuta', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      d: ['jedan dan', 'jednog dana'],
      dd: ['dan', 'dana', 'dana'],
      M: ['jedan mesec', 'jednog meseca'],
      MM: ['mesec', 'meseca', 'meseci'],
      y: ['jednu godinu', 'jedne godine'],
      yy: ['godinu', 'godine', 'godina']
    },
    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return number % 10 === 1 ? wordKey[0] : wordKey[1];
      }
      return wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key, isFuture) {
      var wordKey = translator.words[key],
        word;
      if (key.length === 1) {
        // Nominativ
        if (key === 'y' && withoutSuffix) return 'jedna godina';
        return isFuture || withoutSuffix ? wordKey[0] : wordKey[1];
      }
      word = translator.correctGrammaticalCase(number, wordKey);
      // Nominativ
      if (key === 'yy' && withoutSuffix && word === 'godinu') {
        return number + ' godina';
      }
      return number + ' ' + word;
    }
  };
  var sr = moment.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D. M. YYYY.',
      LL: 'D. MMMM YYYY.',
      LLL: 'D. MMMM YYYY. H:mm',
      LLLL: 'dddd, D. MMMM YYYY. H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[u] [nedelju] [u] LT';
          case 3:
            return '[u] [sredu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';
        }
      },
      lastDay: '[juče u] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
        return lastWeekDays[this.day()];
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'pre %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: translator.translate,
      dd: translator.translate,
      M: translator.translate,
      MM: translator.translate,
      y: translator.translate,
      yy: translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return sr;
});

/***/ }),

/***/ 647:
/*!***********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sr-cyrl.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
//! author : Stefan Crnjaković <stefan@hotmail.rs> : https://github.com/crnjakovic

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var translator = {
    words: {
      //Different grammatical cases
      ss: ['секунда', 'секунде', 'секунди'],
      m: ['један минут', 'једног минута'],
      mm: ['минут', 'минута', 'минута'],
      h: ['један сат', 'једног сата'],
      hh: ['сат', 'сата', 'сати'],
      d: ['један дан', 'једног дана'],
      dd: ['дан', 'дана', 'дана'],
      M: ['један месец', 'једног месеца'],
      MM: ['месец', 'месеца', 'месеци'],
      y: ['једну годину', 'једне године'],
      yy: ['годину', 'године', 'година']
    },
    correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
      if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return number % 10 === 1 ? wordKey[0] : wordKey[1];
      }
      return wordKey[2];
    },
    translate: function translate(number, withoutSuffix, key, isFuture) {
      var wordKey = translator.words[key],
        word;
      if (key.length === 1) {
        // Nominativ
        if (key === 'y' && withoutSuffix) return 'једна година';
        return isFuture || withoutSuffix ? wordKey[0] : wordKey[1];
      }
      word = translator.correctGrammaticalCase(number, wordKey);
      // Nominativ
      if (key === 'yy' && withoutSuffix && word === 'годину') {
        return number + ' година';
      }
      return number + ' ' + word;
    }
  };
  var srCyrl = moment.defineLocale('sr-cyrl', {
    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
    monthsParseExact: true,
    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D. M. YYYY.',
      LL: 'D. MMMM YYYY.',
      LLL: 'D. MMMM YYYY. H:mm',
      LLLL: 'dddd, D. MMMM YYYY. H:mm'
    },
    calendar: {
      sameDay: '[данас у] LT',
      nextDay: '[сутра у] LT',
      nextWeek: function nextWeek() {
        switch (this.day()) {
          case 0:
            return '[у] [недељу] [у] LT';
          case 3:
            return '[у] [среду] [у] LT';
          case 6:
            return '[у] [суботу] [у] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[у] dddd [у] LT';
        }
      },
      lastDay: '[јуче у] LT',
      lastWeek: function lastWeek() {
        var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
        return lastWeekDays[this.day()];
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: 'пре %s',
      s: 'неколико секунди',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: translator.translate,
      dd: translator.translate,
      M: translator.translate,
      MM: translator.translate,
      y: translator.translate,
      yy: translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
  });

  return srCyrl;
});

/***/ }),

/***/ 648:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ss.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ss = moment.defineLocale('ss', {
    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
    monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
    weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Namuhla nga] LT',
      nextDay: '[Kusasa nga] LT',
      nextWeek: 'dddd [nga] LT',
      lastDay: '[Itolo nga] LT',
      lastWeek: 'dddd [leliphelile] [nga] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'nga %s',
      past: 'wenteka nga %s',
      s: 'emizuzwana lomcane',
      ss: '%d mzuzwana',
      m: 'umzuzu',
      mm: '%d emizuzu',
      h: 'lihora',
      hh: '%d emahora',
      d: 'lilanga',
      dd: '%d emalanga',
      M: 'inyanga',
      MM: '%d tinyanga',
      y: 'umnyaka',
      yy: '%d iminyaka'
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 11) {
        return 'ekuseni';
      } else if (hours < 15) {
        return 'emini';
      } else if (hours < 19) {
        return 'entsambama';
      } else {
        return 'ebusuku';
      }
    },
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ekuseni') {
        return hour;
      } else if (meridiem === 'emini') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
        if (hour === 0) {
          return 0;
        }
        return hour + 12;
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: '%d',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return ss;
});

/***/ }),

/***/ 649:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sv.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var sv = moment.defineLocale('sv', {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Idag] LT',
      nextDay: '[Imorgon] LT',
      lastDay: '[Igår] LT',
      nextWeek: '[På] dddd LT',
      lastWeek: '[I] dddd[s] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: 'för %s sedan',
      s: 'några sekunder',
      ss: '%d sekunder',
      m: 'en minut',
      mm: '%d minuter',
      h: 'en timme',
      hh: '%d timmar',
      d: 'en dag',
      dd: '%d dagar',
      M: 'en månad',
      MM: '%d månader',
      y: 'ett år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? ':e' : b === 1 ? ':a' : b === 2 ? ':a' : b === 3 ? ':e' : ':e';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return sv;
});

/***/ }),

/***/ 650:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/sw.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var sw = moment.defineLocale('sw', {
    months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
    weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'hh:mm A',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[leo saa] LT',
      nextDay: '[kesho saa] LT',
      nextWeek: '[wiki ijayo] dddd [saat] LT',
      lastDay: '[jana] LT',
      lastWeek: '[wiki iliyopita] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s baadaye',
      past: 'tokea %s',
      s: 'hivi punde',
      ss: 'sekunde %d',
      m: 'dakika moja',
      mm: 'dakika %d',
      h: 'saa limoja',
      hh: 'masaa %d',
      d: 'siku moja',
      dd: 'siku %d',
      M: 'mwezi mmoja',
      MM: 'miezi %d',
      y: 'mwaka mmoja',
      yy: 'miaka %d'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return sw;
});

/***/ }),

/***/ 651:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ta.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '௧',
      2: '௨',
      3: '௩',
      4: '௪',
      5: '௫',
      6: '௬',
      7: '௭',
      8: '௮',
      9: '௯',
      0: '௦'
    },
    numberMap = {
      '௧': '1',
      '௨': '2',
      '௩': '3',
      '௪': '4',
      '௫': '5',
      '௬': '6',
      '௭': '7',
      '௮': '8',
      '௯': '9',
      '௦': '0'
    };
  var ta = moment.defineLocale('ta', {
    months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, HH:mm',
      LLLL: 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar: {
      sameDay: '[இன்று] LT',
      nextDay: '[நாளை] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[நேற்று] LT',
      lastWeek: '[கடந்த வாரம்] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s இல்',
      past: '%s முன்',
      s: 'ஒரு சில விநாடிகள்',
      ss: '%d விநாடிகள்',
      m: 'ஒரு நிமிடம்',
      mm: '%d நிமிடங்கள்',
      h: 'ஒரு மணி நேரம்',
      hh: '%d மணி நேரம்',
      d: 'ஒரு நாள்',
      dd: '%d நாட்கள்',
      M: 'ஒரு மாதம்',
      MM: '%d மாதங்கள்',
      y: 'ஒரு வருடம்',
      yy: '%d ஆண்டுகள்'
    },
    dayOfMonthOrdinalParse: /\d{1,2}வது/,
    ordinal: function ordinal(number) {
      return number + 'வது';
    },
    preparse: function preparse(string) {
      return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function postformat(string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 2) {
        return ' யாமம்';
      } else if (hour < 6) {
        return ' வைகறை'; // வைகறை
      } else if (hour < 10) {
        return ' காலை'; // காலை
      } else if (hour < 14) {
        return ' நண்பகல்'; // நண்பகல்
      } else if (hour < 18) {
        return ' எற்பாடு'; // எற்பாடு
      } else if (hour < 22) {
        return ' மாலை'; // மாலை
      } else {
        return ' யாமம்';
      }
    },
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'யாமம்') {
        return hour < 2 ? hour : hour + 12;
      } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
        return hour;
      } else if (meridiem === 'நண்பகல்') {
        return hour >= 10 ? hour : hour + 12;
      } else {
        return hour + 12;
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return ta;
});

/***/ }),

/***/ 652:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/te.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var te = moment.defineLocale('te', {
    months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
    monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
    monthsParseExact: true,
    weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
    weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
    weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
      sameDay: '[నేడు] LT',
      nextDay: '[రేపు] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[నిన్న] LT',
      lastWeek: '[గత] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s లో',
      past: '%s క్రితం',
      s: 'కొన్ని క్షణాలు',
      ss: '%d సెకన్లు',
      m: 'ఒక నిమిషం',
      mm: '%d నిమిషాలు',
      h: 'ఒక గంట',
      hh: '%d గంటలు',
      d: 'ఒక రోజు',
      dd: '%d రోజులు',
      M: 'ఒక నెల',
      MM: '%d నెలలు',
      y: 'ఒక సంవత్సరం',
      yy: '%d సంవత్సరాలు'
    },
    dayOfMonthOrdinalParse: /\d{1,2}వ/,
    ordinal: '%dవ',
    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'రాత్రి') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ఉదయం') {
        return hour;
      } else if (meridiem === 'మధ్యాహ్నం') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'సాయంత్రం') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'రాత్రి';
      } else if (hour < 10) {
        return 'ఉదయం';
      } else if (hour < 17) {
        return 'మధ్యాహ్నం';
      } else if (hour < 20) {
        return 'సాయంత్రం';
      } else {
        return 'రాత్రి';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });

  return te;
});

/***/ }),

/***/ 653:
/*!*******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tet.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Tetun Dili (East Timor) [tet]
//! author : Joshua Brooks : https://github.com/joshbrooks
//! author : Onorio De J. Afonso : https://github.com/marobo
//! author : Sonia Simoes : https://github.com/soniasimoes

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tet = moment.defineLocale('tet', {
    months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
    weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
    weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Ohin iha] LT',
      nextDay: '[Aban iha] LT',
      nextWeek: 'dddd [iha] LT',
      lastDay: '[Horiseik iha] LT',
      lastWeek: 'dddd [semana kotuk] [iha] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'iha %s',
      past: '%s liuba',
      s: 'segundu balun',
      ss: 'segundu %d',
      m: 'minutu ida',
      mm: 'minutu %d',
      h: 'oras ida',
      hh: 'oras %d',
      d: 'loron ida',
      dd: 'loron %d',
      M: 'fulan ida',
      MM: 'fulan %d',
      y: 'tinan ida',
      yy: 'tinan %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return tet;
});

/***/ }),

/***/ 654:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tg.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Tajik [tg]
//! author : Orif N. Jr. : https://github.com/orif-jr

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    0: '-ум',
    1: '-ум',
    2: '-юм',
    3: '-юм',
    4: '-ум',
    5: '-ум',
    6: '-ум',
    7: '-ум',
    8: '-ум',
    9: '-ум',
    10: '-ум',
    12: '-ум',
    13: '-ум',
    20: '-ум',
    30: '-юм',
    40: '-ум',
    50: '-ум',
    60: '-ум',
    70: '-ум',
    80: '-ум',
    90: '-ум',
    100: '-ум'
  };
  var tg = moment.defineLocale('tg', {
    months: {
      format: 'январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри'.split('_'),
      standalone: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_')
    },
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
    weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
    weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Имрӯз соати] LT',
      nextDay: '[Фардо соати] LT',
      lastDay: '[Дирӯз соати] LT',
      nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
      lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'баъди %s',
      past: '%s пеш',
      s: 'якчанд сония',
      m: 'як дақиқа',
      mm: '%d дақиқа',
      h: 'як соат',
      hh: '%d соат',
      d: 'як рӯз',
      dd: '%d рӯз',
      M: 'як моҳ',
      MM: '%d моҳ',
      y: 'як сол',
      yy: '%d сол'
    },
    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'шаб') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'субҳ') {
        return hour;
      } else if (meridiem === 'рӯз') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'бегоҳ') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'шаб';
      } else if (hour < 11) {
        return 'субҳ';
      } else if (hour < 16) {
        return 'рӯз';
      } else if (hour < 19) {
        return 'бегоҳ';
      } else {
        return 'шаб';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
    ordinal: function ordinal(number) {
      var a = number % 10,
        b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1th is the first week of the year.
    }
  });

  return tg;
});

/***/ }),

/***/ 655:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/th.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var th = moment.defineLocale('th', {
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY เวลา H:mm',
      LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function isPM(input) {
      return input === 'หลังเที่ยง';
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'ก่อนเที่ยง';
      } else {
        return 'หลังเที่ยง';
      }
    },
    calendar: {
      sameDay: '[วันนี้ เวลา] LT',
      nextDay: '[พรุ่งนี้ เวลา] LT',
      nextWeek: 'dddd[หน้า เวลา] LT',
      lastDay: '[เมื่อวานนี้ เวลา] LT',
      lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'อีก %s',
      past: '%sที่แล้ว',
      s: 'ไม่กี่วินาที',
      ss: '%d วินาที',
      m: '1 นาที',
      mm: '%d นาที',
      h: '1 ชั่วโมง',
      hh: '%d ชั่วโมง',
      d: '1 วัน',
      dd: '%d วัน',
      w: '1 สัปดาห์',
      ww: '%d สัปดาห์',
      M: '1 เดือน',
      MM: '%d เดือน',
      y: '1 ปี',
      yy: '%d ปี'
    }
  });
  return th;
});

/***/ }),

/***/ 656:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tk.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Turkmen [tk]
//! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    1: "'inji",
    5: "'inji",
    8: "'inji",
    70: "'inji",
    80: "'inji",
    2: "'nji",
    7: "'nji",
    20: "'nji",
    50: "'nji",
    3: "'ünji",
    4: "'ünji",
    100: "'ünji",
    6: "'njy",
    9: "'unjy",
    10: "'unjy",
    30: "'unjy",
    60: "'ynjy",
    90: "'ynjy"
  };
  var tk = moment.defineLocale('tk', {
    months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split('_'),
    monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),
    weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split('_'),
    weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),
    weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün sagat] LT',
      nextDay: '[ertir sagat] LT',
      nextWeek: '[indiki] dddd [sagat] LT',
      lastDay: '[düýn] LT',
      lastWeek: '[geçen] dddd [sagat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s soň',
      past: '%s öň',
      s: 'birnäçe sekunt',
      m: 'bir minut',
      mm: '%d minut',
      h: 'bir sagat',
      hh: '%d sagat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir aý',
      MM: '%d aý',
      y: 'bir ýyl',
      yy: '%d ýyl'
    },
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'unjy";
          }
          var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return tk;
});

/***/ }),

/***/ 657:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tl-ph.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tlPh = moment.defineLocale('tl-ph', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar: {
      sameDay: 'LT [ngayong araw]',
      nextDay: '[Bukas ng] LT',
      nextWeek: 'LT [sa susunod na] dddd',
      lastDay: 'LT [kahapon]',
      lastWeek: 'LT [noong nakaraang] dddd',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      ss: '%d segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return tlPh;
});

/***/ }),

/***/ 658:
/*!*******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tlh.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
  function translateFuture(output) {
    var time = output;
    time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'leS' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'waQ' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'nem' : time + ' pIq';
    return time;
  }
  function translatePast(output) {
    var time = output;
    time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'Hu’' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'wen' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'ben' : time + ' ret';
    return time;
  }
  function translate(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
      case 'ss':
        return numberNoun + ' lup';
      case 'mm':
        return numberNoun + ' tup';
      case 'hh':
        return numberNoun + ' rep';
      case 'dd':
        return numberNoun + ' jaj';
      case 'MM':
        return numberNoun + ' jar';
      case 'yy':
        return numberNoun + ' DIS';
    }
  }
  function numberAsNoun(number) {
    var hundred = Math.floor(number % 1000 / 100),
      ten = Math.floor(number % 100 / 10),
      one = number % 10,
      word = '';
    if (hundred > 0) {
      word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[one];
    }
    return word === '' ? 'pagh' : word;
  }
  var tlh = moment.defineLocale('tlh', {
    months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
    monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
    monthsParseExact: true,
    weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[DaHjaj] LT',
      nextDay: '[wa’leS] LT',
      nextWeek: 'LLL',
      lastDay: '[wa’Hu’] LT',
      lastWeek: 'LLL',
      sameElse: 'L'
    },
    relativeTime: {
      future: translateFuture,
      past: translatePast,
      s: 'puS lup',
      ss: translate,
      m: 'wa’ tup',
      mm: translate,
      h: 'wa’ rep',
      hh: translate,
      d: 'wa’ jaj',
      dd: translate,
      M: 'wa’ jar',
      MM: translate,
      y: 'wa’ DIS',
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return tlh;
});

/***/ }),

/***/ 659:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tr.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'üncü",
    4: "'üncü",
    100: "'üncü",
    6: "'ncı",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'ıncı",
    90: "'ıncı"
  };
  var tr = moment.defineLocale('tr', {
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pzt_Sal_Çar_Per_Cum_Cmt'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'öö' : 'ÖÖ';
      } else {
        return isLower ? 'ös' : 'ÖS';
      }
    },
    meridiemParse: /öö|ÖÖ|ös|ÖS/,
    isPM: function isPM(input) {
      return input === 'ös' || input === 'ÖS';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[yarın saat] LT',
      nextWeek: '[gelecek] dddd [saat] LT',
      lastDay: '[dün] LT',
      lastWeek: '[geçen] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s sonra',
      past: '%s önce',
      s: 'birkaç saniye',
      ss: '%d saniye',
      m: 'bir dakika',
      mm: '%d dakika',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      w: 'bir hafta',
      ww: '%d hafta',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir yıl',
      yy: '%d yıl'
    },
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'ıncı";
          }
          var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return tr;
});

/***/ }),

/***/ 660:
/*!*******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tzl.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iustì Canun

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration

  // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
  // This is currently too difficult (maybe even impossible) to add.
  var tzl = moment.defineLocale('tzl', {
    months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM [dallas] YYYY',
      LLL: 'D. MMMM [dallas] YYYY HH.mm',
      LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM: function isPM(input) {
      return "d'o" === input.toLowerCase();
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? "d'o" : "D'O";
      } else {
        return isLower ? "d'a" : "D'A";
      }
    },
    calendar: {
      sameDay: '[oxhi à] LT',
      nextDay: '[demà à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[ieiri à] LT',
      lastWeek: '[sür el] dddd [lasteu à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'osprei %s',
      past: 'ja%s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['viensas secunds', "'iensas secunds"],
      ss: [number + ' secunds', '' + number + ' secunds'],
      m: ["'n míut", "'iens míut"],
      mm: [number + ' míuts', '' + number + ' míuts'],
      h: ["'n þora", "'iensa þora"],
      hh: [number + ' þoras', '' + number + ' þoras'],
      d: ["'n ziua", "'iensa ziua"],
      dd: [number + ' ziuas', '' + number + ' ziuas'],
      M: ["'n mes", "'iens mes"],
      MM: [number + ' mesen', '' + number + ' mesen'],
      y: ["'n ar", "'iens ar"],
      yy: [number + ' ars', '' + number + ' ars']
    };
    return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
  }
  return tzl;
});

/***/ }),

/***/ 661:
/*!*******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tzm.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Central Atlas Tamazight [tzm]
//! author : Abdel Said : https://github.com/abdelsaid

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tzm = moment.defineLocale('tzm', {
    months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
      nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
      nextWeek: 'dddd [ⴴ] LT',
      lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
      lastWeek: 'dddd [ⴴ] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
      past: 'ⵢⴰⵏ %s',
      s: 'ⵉⵎⵉⴽ',
      ss: '%d ⵉⵎⵉⴽ',
      m: 'ⵎⵉⵏⵓⴺ',
      mm: '%d ⵎⵉⵏⵓⴺ',
      h: 'ⵙⴰⵄⴰ',
      hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
      d: 'ⴰⵙⵙ',
      dd: '%d oⵙⵙⴰⵏ',
      M: 'ⴰⵢoⵓⵔ',
      MM: '%d ⵉⵢⵢⵉⵔⵏ',
      y: 'ⴰⵙⴳⴰⵙ',
      yy: '%d ⵉⵙⴳⴰⵙⵏ'
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return tzm;
});

/***/ }),

/***/ 662:
/*!************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/tzm-latn.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tzmLatn = moment.defineLocale('tzm-latn', {
    months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[asdkh g] LT',
      nextDay: '[aska g] LT',
      nextWeek: 'dddd [g] LT',
      lastDay: '[assant g] LT',
      lastWeek: 'dddd [g] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dadkh s yan %s',
      past: 'yan %s',
      s: 'imik',
      ss: '%d imik',
      m: 'minuḍ',
      mm: '%d minuḍ',
      h: 'saɛa',
      hh: '%d tassaɛin',
      d: 'ass',
      dd: '%d ossan',
      M: 'ayowr',
      MM: '%d iyyirn',
      y: 'asgas',
      yy: '%d isgasn'
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });

  return tzmLatn;
});

/***/ }),

/***/ 663:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ug-cn.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Uyghur (China) [ug-cn]
//! author: boyaq : https://github.com/boyaq

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ugCn = moment.defineLocale('ug-cn', {
    months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
    monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
    weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
    weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
    weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
      LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
      LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
    },
    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'يېرىم كېچە' || meridiem === 'سەھەر' || meridiem === 'چۈشتىن بۇرۇن') {
        return hour;
      } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
        return hour + 12;
      } else {
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return 'يېرىم كېچە';
      } else if (hm < 900) {
        return 'سەھەر';
      } else if (hm < 1130) {
        return 'چۈشتىن بۇرۇن';
      } else if (hm < 1230) {
        return 'چۈش';
      } else if (hm < 1800) {
        return 'چۈشتىن كېيىن';
      } else {
        return 'كەچ';
      }
    },
    calendar: {
      sameDay: '[بۈگۈن سائەت] LT',
      nextDay: '[ئەتە سائەت] LT',
      nextWeek: '[كېلەركى] dddd [سائەت] LT',
      lastDay: '[تۆنۈگۈن] LT',
      lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s كېيىن',
      past: '%s بۇرۇن',
      s: 'نەچچە سېكونت',
      ss: '%d سېكونت',
      m: 'بىر مىنۇت',
      mm: '%d مىنۇت',
      h: 'بىر سائەت',
      hh: '%d سائەت',
      d: 'بىر كۈن',
      dd: '%d كۈن',
      M: 'بىر ئاي',
      MM: '%d ئاي',
      y: 'بىر يىل',
      yy: '%d يىل'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '-كۈنى';
        case 'w':
        case 'W':
          return number + '-ھەپتە';
        default:
          return number;
      }
    },
    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
  });

  return ugCn;
});

/***/ }),

/***/ 664:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/uk.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
      mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
      hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
      dd: 'день_дні_днів',
      MM: 'місяць_місяці_місяців',
      yy: 'рік_роки_років'
    };
    if (key === 'm') {
      return withoutSuffix ? 'хвилина' : 'хвилину';
    } else if (key === 'h') {
      return withoutSuffix ? 'година' : 'годину';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  function weekdaysCaseReplace(m, format) {
    var weekdays = {
        nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
      },
      nounCase;
    if (m === true) {
      return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
    }
    if (!m) {
      return weekdays['nominative'];
    }
    nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
    return weekdays[nounCase][m.day()];
  }
  function processHoursFunction(str) {
    return function () {
      return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
  }
  var uk = moment.defineLocale('uk', {
    months: {
      format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
      standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays: weekdaysCaseReplace,
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY р.',
      LLL: 'D MMMM YYYY р., HH:mm',
      LLLL: 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar: {
      sameDay: processHoursFunction('[Сьогодні '),
      nextDay: processHoursFunction('[Завтра '),
      lastDay: processHoursFunction('[Вчора '),
      nextWeek: processHoursFunction('[У] dddd ['),
      lastWeek: function lastWeek() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return processHoursFunction('[Минулої] dddd [').call(this);
          case 1:
          case 2:
          case 4:
            return processHoursFunction('[Минулого] dddd [').call(this);
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: '%s тому',
      s: 'декілька секунд',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'годину',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      M: 'місяць',
      MM: relativeTimeWithPlural,
      y: 'рік',
      yy: relativeTimeWithPlural
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function isPM(input) {
      return /^(дня|вечора)$/.test(input);
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 4) {
        return 'ночі';
      } else if (hour < 12) {
        return 'ранку';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечора';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return number + '-й';
        case 'D':
          return number + '-го';
        default:
          return number;
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return uk;
});

/***/ }),

/***/ 665:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/ur.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
    days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
  var ur = moment.defineLocale('ur', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM: function isPM(input) {
      return 'شام' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
      if (hour < 12) {
        return 'صبح';
      }
      return 'شام';
    },
    calendar: {
      sameDay: '[آج بوقت] LT',
      nextDay: '[کل بوقت] LT',
      nextWeek: 'dddd [بوقت] LT',
      lastDay: '[گذشتہ روز بوقت] LT',
      lastWeek: '[گذشتہ] dddd [بوقت] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s بعد',
      past: '%s قبل',
      s: 'چند سیکنڈ',
      ss: '%d سیکنڈ',
      m: 'ایک منٹ',
      mm: '%d منٹ',
      h: 'ایک گھنٹہ',
      hh: '%d گھنٹے',
      d: 'ایک دن',
      dd: '%d دن',
      M: 'ایک ماہ',
      MM: '%d ماہ',
      y: 'ایک سال',
      yy: '%d سال'
    },
    preparse: function preparse(string) {
      return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return ur;
});

/***/ }),

/***/ 666:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/uz.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var uz = moment.defineLocale('uz', {
    months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
    weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
    weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm'
    },
    calendar: {
      sameDay: '[Бугун соат] LT [да]',
      nextDay: '[Эртага] LT [да]',
      nextWeek: 'dddd [куни соат] LT [да]',
      lastDay: '[Кеча соат] LT [да]',
      lastWeek: '[Утган] dddd [куни соат] LT [да]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'Якин %s ичида',
      past: 'Бир неча %s олдин',
      s: 'фурсат',
      ss: '%d фурсат',
      m: 'бир дакика',
      mm: '%d дакика',
      h: 'бир соат',
      hh: '%d соат',
      d: 'бир кун',
      dd: '%d кун',
      M: 'бир ой',
      MM: '%d ой',
      y: 'бир йил',
      yy: '%d йил'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return uz;
});

/***/ }),

/***/ 667:
/*!***********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/uz-latn.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Uzbek Latin [uz-latn]
//! author : Rasulbek Mirzayev : github.com/Rasulbeeek

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var uzLatn = moment.defineLocale('uz-latn', {
    months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
    monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
    weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
    weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
    weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm'
    },
    calendar: {
      sameDay: '[Bugun soat] LT [da]',
      nextDay: '[Ertaga] LT [da]',
      nextWeek: 'dddd [kuni soat] LT [da]',
      lastDay: '[Kecha soat] LT [da]',
      lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
      sameElse: 'L'
    },
    relativeTime: {
      future: 'Yaqin %s ichida',
      past: 'Bir necha %s oldin',
      s: 'soniya',
      ss: '%d soniya',
      m: 'bir daqiqa',
      mm: '%d daqiqa',
      h: 'bir soat',
      hh: '%d soat',
      d: 'bir kun',
      dd: '%d kun',
      M: 'bir oy',
      MM: '%d oy',
      y: 'bir yil',
      yy: '%d yil'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });

  return uzLatn;
});

/***/ }),

/***/ 668:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/vi.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk
//! author : Chien Kira : https://github.com/chienkira

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var vi = moment.defineLocale('vi', {
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split('_'),
    monthsParseExact: true,
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM: function isPM(input) {
      return /^ch$/i.test(input);
    },
    meridiem: function meridiem(hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'sa' : 'SA';
      } else {
        return isLower ? 'ch' : 'CH';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [năm] YYYY',
      LLL: 'D MMMM [năm] YYYY HH:mm',
      LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
      l: 'DD/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hôm nay lúc] LT',
      nextDay: '[Ngày mai lúc] LT',
      nextWeek: 'dddd [tuần tới lúc] LT',
      lastDay: '[Hôm qua lúc] LT',
      lastWeek: 'dddd [tuần trước lúc] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s tới',
      past: '%s trước',
      s: 'vài giây',
      ss: '%d giây',
      m: 'một phút',
      mm: '%d phút',
      h: 'một giờ',
      hh: '%d giờ',
      d: 'một ngày',
      dd: '%d ngày',
      w: 'một tuần',
      ww: '%d tuần',
      M: 'một tháng',
      MM: '%d tháng',
      y: 'một năm',
      yy: '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function ordinal(number) {
      return number;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return vi;
});

/***/ }),

/***/ 669:
/*!************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/x-pseudo.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var xPseudo = moment.defineLocale('x-pseudo', {
    months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
    monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
    monthsParseExact: true,
    weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
    weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
    weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[T~ódá~ý át] LT',
      nextDay: '[T~ómó~rró~w át] LT',
      nextWeek: 'dddd [át] LT',
      lastDay: '[Ý~ést~érdá~ý át] LT',
      lastWeek: '[L~ást] dddd [át] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'í~ñ %s',
      past: '%s á~gó',
      s: 'á ~féw ~sécó~ñds',
      ss: '%d s~écóñ~ds',
      m: 'á ~míñ~úté',
      mm: '%d m~íñú~tés',
      h: 'á~ñ hó~úr',
      hh: '%d h~óúrs',
      d: 'á ~dáý',
      dd: '%d d~áýs',
      M: 'á ~móñ~th',
      MM: '%d m~óñt~hs',
      y: 'á ~ýéár',
      yy: '%d ý~éárs'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return xPseudo;
});

/***/ }),

/***/ 670:
/*!******************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/yo.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var yo = moment.defineLocale('yo', {
    months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
    monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
    weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
    weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
    weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Ònì ni] LT',
      nextDay: '[Ọ̀la ni] LT',
      nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
      lastDay: '[Àna ni] LT',
      lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ní %s',
      past: '%s kọjá',
      s: 'ìsẹjú aayá die',
      ss: 'aayá %d',
      m: 'ìsẹjú kan',
      mm: 'ìsẹjú %d',
      h: 'wákati kan',
      hh: 'wákati %d',
      d: 'ọjọ́ kan',
      dd: 'ọjọ́ %d',
      M: 'osù kan',
      MM: 'osù %d',
      y: 'ọdún kan',
      yy: 'ọdún %d'
    },
    dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
    ordinal: 'ọjọ́ %d',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return yo;
});

/***/ }),

/***/ 671:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/zh-cn.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
//! author : uu109 : https://github.com/uu109

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhCn = moment.defineLocale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日Ah点mm分',
      LLLL: 'YYYY年M月D日ddddAh点mm分',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      } else {
        // '中午'
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: function nextWeek(now) {
        if (now.week() !== this.week()) {
          return '[下]dddLT';
        } else {
          return '[本]dddLT';
        }
      },
      lastDay: '[昨天]LT',
      lastWeek: function lastWeek(now) {
        if (this.week() !== now.week()) {
          return '[上]dddLT';
        } else {
          return '[本]dddLT';
        }
      },
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '周';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s后',
      past: '%s前',
      s: '几秒',
      ss: '%d 秒',
      m: '1 分钟',
      mm: '%d 分钟',
      h: '1 小时',
      hh: '%d 小时',
      d: '1 天',
      dd: '%d 天',
      w: '1 周',
      ww: '%d 周',
      M: '1 个月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年'
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });

  return zhCn;
});

/***/ }),

/***/ 672:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/zh-hk.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd
//! author : Anthony : https://github.com/anthonylau

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhHk = moment.defineLocale('zh-hk', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1200) {
        return '上午';
      } else if (hm === 1200) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: '[下]ddddLT',
      lastDay: '[昨天]LT',
      lastWeek: '[上]ddddLT',
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年'
    }
  });
  return zhHk;
});

/***/ }),

/***/ 673:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/zh-mo.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Chinese (Macau) [zh-mo]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Tan Yuanhong : https://github.com/le0tan

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhMo = moment.defineLocale('zh-mo', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'D/M/YYYY',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天] LT',
      nextDay: '[明天] LT',
      nextWeek: '[下]dddd LT',
      lastDay: '[昨天] LT',
      lastWeek: '[上]dddd LT',
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s內',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年'
    }
  });
  return zhMo;
});

/***/ }),

/***/ 674:
/*!*********************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/node_modules/moment/locale/zh-tw.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

;
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' && "function" === 'function' ? factory(__webpack_require__(/*! ../moment */ 538)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../moment */ 538)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhTw = moment.defineLocale('zh-tw', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function meridiemHour(hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function meridiem(hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天] LT',
      nextDay: '[明天] LT',
      nextWeek: '[下]dddd LT',
      lastDay: '[昨天] LT',
      lastWeek: '[上]dddd LT',
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function ordinal(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年'
    }
  });
  return zhTw;
});

/***/ }),

/***/ 675:
/*!***************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/sheep/mock/operate_chart.json ***!
  \***************************************************************************************************/
/*! exports provided: add_order_amount, add_order_num, user, add_hospital, nurse, person, hospital_order_num_list, hospital_order_amount_list, hospital_nurse_list, service_item_cate_order_num_list, city_order_list, evaluate, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"add_order_amount\":{\"amount\":\"63135.99\",\"common_ratio\":100},\"add_order_num\":{\"num\":124,\"common_ratio\":100},\"user\":{\"all_num\":10597,\"add_num\":525,\"old_num\":10072,\"add_ratio\":4.95,\"old_ratio\":95.05,\"common_ratio\":100},\"add_hospital\":{\"num\":16,\"common_ratio\":100},\"nurse\":{\"all_num\":13,\"add_num\":11,\"old_num\":2,\"add_ratio\":84.62,\"old_ratio\":15.38,\"common_ratio\":100},\"person\":{\"add_num\":44,\"age\":[{\"name\":\"30岁以下\",\"add_num\":1,\"ratio\":2.27},{\"name\":\"30~39岁\",\"add_num\":5,\"ratio\":11.36},{\"name\":\"40~49岁\",\"add_num\":0,\"ratio\":0},{\"name\":\"50~59岁\",\"add_num\":1,\"ratio\":2.27},{\"name\":\"60~69岁\",\"add_num\":9,\"ratio\":20.45},{\"name\":\"70岁以上\",\"add_num\":28,\"ratio\":63.64}]},\"hospital_order_num_list\":[{\"hospital_id\":10000,\"hospital_name\":\"苏州大学第一附属医院\",\"num\":56,\"ratio\":45.16},{\"hospital_id\":10013,\"hospital_name\":\"南京福寿康鼓楼护理站\",\"num\":39,\"ratio\":31.45},{\"hospital_id\":10002,\"hospital_name\":\"苏州市立医院\",\"num\":8,\"ratio\":6.45},{\"hospital_id\":10012,\"hospital_name\":\"南京市栖霞区医院\",\"num\":7,\"ratio\":5.65},{\"hospital_id\":10007,\"hospital_name\":\"江苏省人民医院\",\"num\":6,\"ratio\":4.84},{\"hospital_id\":0,\"hospital_name\":\"\",\"num\":4,\"ratio\":3.23},{\"hospital_id\":10024,\"hospital_name\":\"八卦洲社区卫生服务中心\",\"num\":2,\"ratio\":1.61},{\"hospital_id\":10001,\"hospital_name\":\"苏州大学第二附属医院\",\"num\":2,\"ratio\":1.61}],\"hospital_order_amount_list\":[{\"hospital_id\":10000,\"hospital_name\":\"苏州大学第一附属医院\",\"amount\":\"44465.75\",\"ratio\":70.43},{\"hospital_id\":10007,\"hospital_name\":\"江苏省人民医院\",\"amount\":\"10333.00\",\"ratio\":16.37},{\"hospital_id\":10013,\"hospital_name\":\"南京福寿康鼓楼护理站\",\"amount\":\"4970.00\",\"ratio\":7.87},{\"hospital_id\":10002,\"hospital_name\":\"苏州市立医院\",\"amount\":\"2073.00\",\"ratio\":3.28},{\"hospital_id\":10012,\"hospital_name\":\"南京市栖霞区医院\",\"amount\":\"765.24\",\"ratio\":1.21},{\"hospital_id\":10001,\"hospital_name\":\"苏州大学第二附属医院\",\"amount\":\"275.00\",\"ratio\":0.44},{\"hospital_id\":10024,\"hospital_name\":\"八卦洲社区卫生服务中心\",\"amount\":\"250.00\",\"ratio\":0.4},{\"hospital_id\":0,\"hospital_name\":\"\",\"amount\":\"4.00\",\"ratio\":0.01}],\"hospital_nurse_list\":[{\"hospital_id\":10000,\"hospital_name\":\"苏州大学第一附属医院\",\"num\":7,\"ratio\":53.85},{\"hospital_id\":10003,\"hospital_name\":\"南京鼓楼医院\",\"num\":3,\"ratio\":23.08},{\"hospital_id\":10007,\"hospital_name\":\"江苏省人民医院\",\"num\":1,\"ratio\":7.69}],\"service_item_cate_order_num_list\":[{\"cate_id\":325,\"cate_name\":\"基础\",\"num\":37,\"ratio\":29.84},{\"cate_id\":330,\"cate_name\":\"标本采集\",\"num\":26,\"ratio\":20.97},{\"cate_id\":0,\"cate_name\":\"\",\"num\":14,\"ratio\":11.29},{\"cate_id\":72,\"cate_name\":\"慢病管理\",\"num\":12,\"ratio\":9.68},{\"cate_id\":71,\"cate_name\":\"安宁疗护\",\"num\":10,\"ratio\":8.06},{\"cate_id\":333,\"cate_name\":\"康复护理\",\"num\":7,\"ratio\":5.65},{\"cate_id\":331,\"cate_name\":\"基础护理\",\"num\":6,\"ratio\":4.84},{\"cate_id\":328,\"cate_name\":\"导管维护\",\"num\":5,\"ratio\":4.03},{\"cate_id\":70,\"cate_name\":\"\",\"num\":3,\"ratio\":2.42},{\"cate_id\":69,\"cate_name\":\"\",\"num\":3,\"ratio\":2.42}],\"city_order_list\":[{\"city_id\":3205,\"city_name\":\"苏州市\",\"num\":66,\"ratio\":53.23},{\"city_id\":3201,\"city_name\":\"南京市\",\"num\":54,\"ratio\":43.55}],\"evaluate\":{\"all_evaluate_times\":19,\"evaluate_rate\":33,\"average_star\":4.2,\"hospital_list\":[{\"hospital_id\":10000,\"name\":\"苏州大学第一附属医院\",\"star\":\"42.2500\",\"attitude\":\"3.9375\",\"skill\":\"3.9375\",\"effect\":\"4.5000\",\"num\":16},{\"hospital_id\":10007,\"name\":\"江苏省人民医院\",\"star\":\"38.0000\",\"attitude\":\"4.0000\",\"skill\":\"4.0000\",\"effect\":\"4.3333\",\"num\":3}],\"nurse_list\":[{\"nurse_id\":null,\"nurse_name\":null,\"hospital_name\":null,\"star\":\"42.3636\",\"attitude\":\"4.1818\",\"skill\":\"4.1818\",\"effect\":\"4.3636\",\"num\":11},{\"nurse_id\":10016,\"nurse_name\":\"王小五\",\"hospital_name\":\"苏州大学第一附属医院\",\"star\":\"42.3333\",\"attitude\":\"3.3333\",\"skill\":\"3.3333\",\"effect\":\"5.0000\",\"num\":3},{\"nurse_id\":10011,\"nurse_name\":\"王小妹\",\"hospital_name\":\"苏州大学第一附属医院\",\"star\":\"41.5000\",\"attitude\":\"3.5000\",\"skill\":\"3.5000\",\"effect\":\"4.5000\",\"num\":2},{\"nurse_id\":10030,\"nurse_name\":\"测试\",\"hospital_name\":\"江苏省人民医院\",\"star\":\"38.0000\",\"attitude\":\"4.0000\",\"skill\":\"4.0000\",\"effect\":\"4.3333\",\"num\":3}]}}");

/***/ }),

/***/ 737:
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/sheep/utils/qrcode.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uqrcode.js
//---------------------------------------------------------------------
// github https://github.com/Sansnn/uQRCode
//---------------------------------------------------------------------

var uQRCode = {};
(function () {
  //---------------------------------------------------------------------
  // QRCode for JavaScript
  //
  // Copyright (c) 2009 Kazuhiko Arase
  //
  // URL: http://www.d-project.com/
  //
  // Licensed under the MIT license:
  //   http://www.opensource.org/licenses/mit-license.php
  //
  // The word "QR Code" is registered trademark of 
  // DENSO WAVE INCORPORATED
  //   http://www.denso-wave.com/qrcode/faqpatent-e.html
  //
  //---------------------------------------------------------------------

  //---------------------------------------------------------------------
  // QR8bitByte
  //---------------------------------------------------------------------

  function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
  }
  QR8bitByte.prototype = {
    getLength: function getLength(buffer) {
      return this.data.length;
    },
    write: function write(buffer) {
      for (var i = 0; i < this.data.length; i++) {
        // not JIS ...
        buffer.put(this.data.charCodeAt(i), 8);
      }
    }
  };

  //---------------------------------------------------------------------
  // QRCode
  //---------------------------------------------------------------------

  function QRCode(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = new Array();
  }
  QRCode.prototype = {
    addData: function addData(data) {
      var newData = new QR8bitByte(data);
      this.dataList.push(newData);
      this.dataCache = null;
    },
    isDark: function isDark(row, col) {
      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
        throw new Error(row + "," + col);
      }
      return this.modules[row][col];
    },
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    make: function make() {
      // Calculate automatically typeNumber if provided is < 1
      if (this.typeNumber < 1) {
        var typeNumber = 1;
        for (typeNumber = 1; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
          var buffer = new QRBitBuffer();
          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }
          for (var i = 0; i < this.dataList.length; i++) {
            var data = this.dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
          }
          if (buffer.getLengthInBits() <= totalDataCount * 8) break;
        }
        this.typeNumber = typeNumber;
      }
      this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(test, maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
        for (var col = 0; col < this.moduleCount; col++) {
          this.modules[row][col] = null; //(col + row) % 3;
        }
      }

      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(test, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(test);
      }
      if (this.dataCache == null) {
        this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    getBestMaskPattern: function getBestMaskPattern() {
      var minLostPoint = 0;
      var pattern = 0;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(true, i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }
      return pattern;
    },
    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
      var cs = 1;
      this.make();
      for (var row = 0; row < this.modules.length; row++) {
        var y = row * cs;
        for (var col = 0; col < this.modules[row].length; col++) {
          var x = col * cs;
          var dark = this.modules[row][col];
          if (dark) {
            qr_mc.beginFill(0, 100);
            qr_mc.moveTo(x, y);
            qr_mc.lineTo(x + cs, y);
            qr_mc.lineTo(x + cs, y + cs);
            qr_mc.lineTo(x, y + cs);
            qr_mc.endFill();
          }
        }
      }
      return qr_mc;
    },
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
      }
      for (var c = 8; c < this.moduleCount - 8; c++) {
        if (this.modules[6][c] != null) {
          continue;
        }
        this.modules[6][c] = c % 2 == 0;
      }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      }
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = this.errorCorrectLevel << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical		
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
  };
  QRCode.PAD0 = 0xEC;
  QRCode.PAD1 = 0x11;
  QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for (var i = 0; i < dataList.length; i++) {
      var data = dataList[i];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    }

    // calc num max data.
    var totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalDataCount += rsBlocks[i].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    }

    // end code
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }

    // padding
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }

    // padding
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCode.PAD0, 8);
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCode.PAD1, 8);
    }
    return QRCode.createBytes(buffer, rsBlocks);
  };
  QRCode.createBytes = function (buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r].dataCount;
      var ecCount = rsBlocks[r].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalCodeCount += rsBlocks[i].totalCount;
    }
    var data = new Array(totalCodeCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    },
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    getLengthInBits: function getLengthInBits(mode, type) {
      if (1 <= type && type < 10) {
        // 1 - 9

        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;
          case QRMode.MODE_ALPHA_NUM:
            return 9;
          case QRMode.MODE_8BIT_BYTE:
            return 8;
          case QRMode.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 27) {
        // 10 - 26

        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;
          case QRMode.MODE_ALPHA_NUM:
            return 11;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 41) {
        // 27 - 40

        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + mode);
        }
      } else {
        throw new Error("type:" + type);
      }
    },
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount();
      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);
          for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }
            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }
              if (r == 0 && c == 0) {
                continue;
              }
              if (dark == qrCode.isDark(row + r, col + c)) {
                sameCount++;
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row++) {
        for (var col = 0; col < moduleCount - 1; col++) {
          var count = 0;
          if (qrCode.isDark(row, col)) count++;
          if (qrCode.isDark(row + 1, col)) count++;
          if (qrCode.isDark(row, col + 1)) count++;
          if (qrCode.isDark(row + 1, col + 1)) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount - 6; col++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount - 6; row++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount; row++) {
          if (qrCode.isDark(row, col)) {
            darkCount++;
          }
        }
      }
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    }
  };

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = {
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  };
  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }

  //---------------------------------------------------------------------
  // QRPolynomial
  //---------------------------------------------------------------------

  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    mod: function mod(e) {
      if (this.getLength() - e.getLength() < 0) {
        return this;
      }
      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
      var num = new Array(this.getLength());
      for (var i = 0; i < this.getLength(); i++) {
        num[i] = this.get(i);
      }
      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }

      // recursive call
      return new QRPolynomial(num, 0).mod(e);
    }
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  QRRSBlock.RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H

  // 1
  [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
  // 2
  [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],
  // 3
  [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],
  // 4		
  [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],
  // 5
  [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],
  // 6
  [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],
  // 7		
  [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],
  // 8
  [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],
  // 9
  [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],
  // 10		
  [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],
  // 11
  [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],
  // 12
  [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],
  // 13
  [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],
  // 14
  [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],
  // 15
  [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],
  // 16
  [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],
  // 17
  [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],
  // 18
  [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],
  // 19
  [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],
  // 20
  [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],
  // 21
  [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],
  // 22
  [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],
  // 23
  [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],
  // 24
  [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],
  // 25
  [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],
  // 26
  [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],
  // 27
  [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],
  // 28
  [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],
  // 29
  [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],
  // 30
  [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],
  // 31
  [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],
  // 32
  [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],
  // 33
  [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],
  // 34
  [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],
  // 35
  [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],
  // 36
  [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],
  // 37
  [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],
  // 38
  [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],
  // 39
  [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],
  // 40
  [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
  QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var list = new Array();
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var totalCount = rsBlock[i * 3 + 1];
      var dataCount = rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }
    return list;
  };
  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return undefined;
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------

  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit((num >>> length - i - 1 & 1) == 1);
      }
    },
    getLengthInBits: function getLengthInBits() {
      return this.length;
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    }
  };

  //---------------------------------------------------------------------
  // Support Chinese
  //---------------------------------------------------------------------
  function utf16To8(text) {
    var result = '';
    var c;
    for (var i = 0; i < text.length; i++) {
      c = text.charCodeAt(i);
      if (c >= 0x0001 && c <= 0x007F) {
        result += text.charAt(i);
      } else if (c > 0x07FF) {
        result += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
        result += String.fromCharCode(0x80 | c >> 6 & 0x3F);
        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      } else {
        result += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      }
    }
    return result;
  }
  uQRCode = {
    errorCorrectLevel: QRErrorCorrectLevel,
    defaults: {
      size: 354,
      margin: 0,
      backgroundColor: '#ffffff',
      foregroundColor: '#000000',
      fileType: 'png',
      // 'jpg', 'png'
      errorCorrectLevel: QRErrorCorrectLevel.H,
      typeNumber: -1
    },
    make: function make(options) {
      var _this = this;
      return new Promise(function (reslove, reject) {
        var defaultOptions = {
          canvasId: options.canvasId,
          componentInstance: options.componentInstance,
          text: options.text,
          size: _this.defaults.size,
          margin: _this.defaults.margin,
          backgroundColor: _this.defaults.backgroundColor,
          foregroundColor: _this.defaults.foregroundColor,
          fileType: _this.defaults.fileType,
          errorCorrectLevel: _this.defaults.errorCorrectLevel,
          typeNumber: _this.defaults.typeNumber
        };
        if (options) {
          for (var i in options) {
            defaultOptions[i] = options[i];
          }
        }
        options = defaultOptions;
        if (!options.canvasId) {
          console.error('uQRCode: Please set canvasId!');
          return;
        }
        function createCanvas() {
          var qrcode = new QRCode(options.typeNumber, options.errorCorrectLevel);
          qrcode.addData(utf16To8(options.text));
          qrcode.make();
          var ctx = uni.createCanvasContext(options.canvasId, options.componentInstance);
          ctx.setFillStyle(options.backgroundColor);
          ctx.fillRect(0, 0, options.size, options.size);
          var tileW = (options.size - options.margin * 2) / qrcode.getModuleCount();
          var tileH = tileW;
          for (var row = 0; row < qrcode.getModuleCount(); row++) {
            for (var col = 0; col < qrcode.getModuleCount(); col++) {
              var style = qrcode.isDark(row, col) ? options.foregroundColor : options.backgroundColor;
              ctx.setFillStyle(style);
              var x = Math.round(col * tileW) + options.margin;
              var y = Math.round(row * tileH) + options.margin;
              var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
              var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
              ctx.fillRect(x, y, w, h);
            }
          }
          setTimeout(function () {
            ctx.draw(false, function () {
              setTimeout(function () {
                uni.canvasToTempFilePath({
                  canvasId: options.canvasId,
                  fileType: options.fileType,
                  width: options.size,
                  height: options.size,
                  destWidth: options.size,
                  destHeight: options.size,
                  success: function success(res) {
                    var resData; // 将统一为base64格式
                    var tempFilePath = res.tempFilePath; // H5为base64，其他为相对路径

                    uni.getFileSystemManager().readFile({
                      filePath: tempFilePath,
                      encoding: 'base64',
                      success: function success(res) {
                        resData = 'data:image/png;base64,' + res.data;
                        options.success && options.success(resData);
                        reslove(resData);
                      }
                    });
                  },
                  fail: function fail(error) {
                    options.fail && options.fail(error);
                    reject(error);
                  },
                  complete: function complete(res) {
                    options.complete && options.complete(res);
                  }
                }, options.componentInstance);
              }, options.text.length + 100);
            }());
          }, 150);
        }
        createCanvas();
      });
    }
  };
})();
var _default = uQRCode;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 746:
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/sheep/mock/chart.json ***!
  \*******************************************************************************************/
/*! exports provided: localdata, localdataB, TLine, Scatter, Bubble, Column, ColumnA, Mix, Line, Pie, PieA, PieB, Mount, Radar, Arcbar1, Arcbar2, Gauge, Candle, CandleColumn, Word, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"localdata\":[{\"value\":35,\"text\":\"2016\",\"group\":\"目标值\"},{\"value\":18,\"text\":\"2016\",\"group\":\"完成量\"},{\"value\":36,\"text\":\"2017\",\"group\":\"目标值\"},{\"value\":27,\"text\":\"2017\",\"group\":\"完成量\"},{\"value\":31,\"text\":\"2018\",\"group\":\"目标值\"},{\"value\":21,\"text\":\"2018\",\"group\":\"完成量\"},{\"value\":33,\"text\":\"2019\",\"group\":\"目标值\"},{\"value\":24,\"text\":\"2019\",\"group\":\"完成量\"},{\"value\":13,\"text\":\"2020\",\"group\":\"目标值\"},{\"value\":6,\"text\":\"2020\",\"group\":\"完成量\"},{\"value\":34,\"text\":\"2021\",\"group\":\"目标值\"},{\"value\":28,\"text\":\"2021\",\"group\":\"完成量\"}],\"localdataB\":[{\"value\":50,\"text\":\"一班\"},{\"value\":30,\"text\":\"二班\"},{\"value\":20,\"text\":\"三班\"},{\"value\":18,\"text\":\"四班\"},{\"value\":8,\"text\":\"五班\"}],\"TLine\":{\"series\":[{\"name\":\"时间轴1\",\"data\":[[10000,55],[30000,25],[50000,55],[70000,25],[90000,55]]},{\"name\":\"时间轴2\",\"data\":[[0,25],[20000,55],[40000,25],[60000,55],[80000,25]]},{\"name\":\"时间轴3\",\"data\":[[0,55],[15000,25],[30000,55],[45000,25],[60000,55]]}]},\"Scatter\":{\"series\":[{\"name\":\"散点一\",\"data\":[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82]]},{\"name\":\"散点二\",\"data\":[[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]]}]},\"Bubble\":{\"series\":[{\"name\":\"气泡一\",\"data\":[[95,95,23,\"标题1\"],[30,55,33,\"标题2\"]]},{\"name\":\"气泡二\",\"data\":[[130,30,30,\"标题3\"],[200,90,40,\"标题4\"]]}]},\"Column\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"目标值\",\"data\":[35,36,31,33,13,34]},{\"name\":\"完成量\",\"data\":[18,27,21,24,6,28]}]},\"ColumnA\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"成交量1\",\"data\":[15,{\"value\":20,\"color\":\"#f04864\"},45,37,43,34]},{\"name\":\"成交量2\",\"data\":[30,{\"value\":40,\"color\":\"#facc14\"},25,14,34,18]}]},\"Mix\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"曲面\",\"data\":[70,50,85,130,64,88],\"type\":\"area\",\"style\":\"curve\"},{\"name\":\"柱1\",\"index\":1,\"data\":[40,{\"value\":30,\"color\":\"#f04864\"},55,110,24,58],\"type\":\"column\"},{\"name\":\"柱2\",\"index\":1,\"data\":[50,20,75,60,34,38],\"type\":\"column\"},{\"name\":\"曲线\",\"data\":[70,50,85,130,64,88],\"type\":\"line\",\"style\":\"curve\",\"color\":\"#1890ff\",\"disableLegend\":true},{\"name\":\"折线\",\"data\":[120,140,105,170,95,160],\"type\":\"line\",\"color\":\"#2fc25b\"},{\"name\":\"点\",\"index\":2,\"data\":[100,80,125,150,112,132],\"type\":\"point\",\"color\":\"#f04864\"}]},\"Line\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"成交量A\",\"data\":[35,8,25,37,4,20]},{\"name\":\"成交量B\",\"data\":[70,40,65,100,44,68]},{\"name\":\"成交量C\",\"data\":[100,80,95,150,112,132]}]},\"Pie\":{\"series\":[{\"name\":\"一班\",\"data\":50},{\"name\":\"二班\",\"data\":30},{\"name\":\"三班\",\"data\":20},{\"name\":\"四班\",\"data\":18},{\"name\":\"五班\",\"data\":8}]},\"PieA\":{\"series\":[{\"data\":[{\"name\":\"一班\",\"value\":50},{\"name\":\"二班\",\"value\":30},{\"name\":\"三班\",\"value\":20},{\"name\":\"四班\",\"value\":18},{\"name\":\"五班\",\"value\":8}]}]},\"PieB\":{\"series\":[{\"labelLine\":{\"show\":false},\"data\":[{\"name\":\"一班\",\"value\":45,\"labelShow\":false},{\"name\":\"二班\",\"value\":12,\"labelShow\":false},{\"name\":\"三班\",\"value\":20,\"labelShow\":false},{\"name\":\"四班\",\"value\":18,\"labelShow\":false},{\"name\":\"五班\",\"value\":5,\"labelShow\":false},{\"name\":\"六班\",\"value\":45,\"labelShow\":false},{\"name\":\"七班\",\"value\":12,\"labelShow\":false},{\"name\":\"八班\",\"value\":20,\"labelShow\":false},{\"name\":\"九班\",\"value\":18,\"labelShow\":false},{\"name\":\"十班\",\"value\":5,\"labelShow\":false}]}]},\"Mount\":{\"series\":[{\"data\":[{\"name\":\"一班\",\"value\":82},{\"name\":\"二班\",\"value\":63},{\"name\":\"三班\",\"value\":86},{\"name\":\"四班\",\"value\":65},{\"name\":\"五班\",\"value\":79},{\"name\":\"六班\",\"value\":80}]}]},\"Radar\":{\"categories\":[\"维度1\",\"维度2\",\"维度3\",\"维度4\",\"维度5\",\"维度6\"],\"series\":[{\"name\":\"成交量1\",\"data\":[90,110,165,195,187,172]},{\"name\":\"成交量2\",\"data\":[190,210,105,35,27,102]}]},\"Arcbar1\":{\"series\":[{\"name\":\"正确率\",\"data\":0.8,\"color\":\"#2fc25b\"}]},\"Arcbar2\":{\"series\":[{\"name\":\"一班\",\"data\":0.8},{\"name\":\"二班\",\"data\":0.6},{\"name\":\"三班\",\"data\":0.45},{\"name\":\"四班\",\"data\":0.3},{\"name\":\"五班\",\"data\":0.15}]},\"Gauge\":{\"categories\":[{\"value\":0.2,\"color\":\"#1890ff\"},{\"value\":0.8,\"color\":\"#2fc25b\"},{\"value\":1,\"color\":\"#f04864\"}],\"series\":[{\"name\":\"完成率\",\"data\":0.66}]},\"Candle\":{\"categories\":[\"2020/1/24\",\"2020/1/25\",\"2020/1/28\",\"2020/1/29\",\"2020/1/30\",\"2020/1/31\",\"2020/2/1\",\"2020/2/4\",\"2020/2/5\",\"2020/2/6\",\"2020/2/7\",\"2020/2/8\",\"2020/2/18\",\"2020/2/19\",\"2020/2/20\",\"2020/2/21\",\"2020/2/22\",\"2020/2/25\",\"2020/2/26\",\"2020/2/27\",\"2020/2/28\",\"2020/3/1\",\"2020/3/4\",\"2020/3/5\",\"2020/3/6\",\"2020/3/7\",\"2020/3/8\",\"2020/3/11\",\"2020/3/12\",\"2020/3/13\",\"2020/3/14\",\"2020/3/15\",\"2020/3/18\",\"2020/3/19\",\"2020/3/20\",\"2020/3/21\",\"2020/3/22\",\"2020/3/25\",\"2020/3/26\",\"2020/3/27\",\"2020/3/28\",\"2020/3/29\",\"2020/4/1\",\"2020/4/2\",\"2020/4/3\",\"2020/4/8\",\"2020/4/9\",\"2020/4/10\",\"2020/4/11\",\"2020/4/12\",\"2020/4/15\",\"2020/4/16\",\"2020/4/17\",\"2020/4/18\",\"2020/4/19\",\"2020/4/22\",\"2020/4/23\",\"2020/4/24\",\"2020/4/25\",\"2020/4/26\",\"2020/5/2\",\"2020/5/3\",\"2020/5/6\",\"2020/5/7\",\"2020/5/8\",\"2020/5/9\",\"2020/5/10\",\"2020/5/13\",\"2020/5/14\",\"2020/5/15\",\"2020/5/16\",\"2020/5/17\",\"2020/5/20\",\"2020/5/21\",\"2020/5/22\",\"2020/5/23\",\"2020/5/24\",\"2020/5/27\",\"2020/5/28\",\"2020/5/29\",\"2020/5/30\",\"2020/5/31\",\"2020/6/3\",\"2020/6/4\",\"2020/6/5\",\"2020/6/6\",\"2020/6/7\",\"2020/6/13\"],\"series\":[{\"name\":\"上证指数\",\"data\":[[2320.26,2302.6,2287.3,2362.94],[2300,2291.3,2288.26,2308.38],[2295.35,2346.5,2295.35,2346.92],[2347.22,2358.98,2337.35,2363.8],[2360.75,2382.48,2347.89,2383.76],[2383.43,2385.42,2371.23,2391.82],[2377.41,2419.02,2369.57,2421.15],[2425.92,2428.15,2417.58,2440.38],[2411,2433.13,2403.3,2437.42],[2432.68,2434.48,2427.7,2441.73],[2430.69,2418.53,2394.22,2433.89],[2416.62,2432.4,2414.4,2443.03],[2441.91,2421.56,2415.43,2444.8],[2420.26,2382.91,2373.53,2427.07],[2383.49,2397.18,2370.61,2397.94],[2378.82,2325.95,2309.17,2378.82],[2322.94,2314.16,2308.76,2330.88],[2320.62,2325.82,2315.01,2338.78],[2313.74,2293.34,2289.89,2340.71],[2297.77,2313.22,2292.03,2324.63],[2322.32,2365.59,2308.92,2366.16],[2364.54,2359.51,2330.86,2369.65],[2332.08,2273.4,2259.25,2333.54],[2274.81,2326.31,2270.1,2328.14],[2333.61,2347.18,2321.6,2351.44],[2340.44,2324.29,2304.27,2352.02],[2326.42,2318.61,2314.59,2333.67],[2314.68,2310.59,2296.58,2320.96],[2309.16,2286.6,2264.83,2333.29],[2282.17,2263.97,2253.25,2286.33],[2255.77,2270.28,2253.31,2276.22],[2269.31,2278.4,2250,2312.08],[2267.29,2240.02,2239.21,2276.05],[2244.26,2257.43,2232.02,2261.31],[2257.74,2317.37,2257.42,2317.86],[2318.21,2324.24,2311.6,2330.81],[2321.4,2328.28,2314.97,2332],[2334.74,2326.72,2319.91,2344.89],[2318.58,2297.67,2281.12,2319.99],[2299.38,2301.26,2289,2323.48],[2273.55,2236.3,2232.91,2273.55],[2238.49,2236.62,2228.81,2246.87],[2229.46,2234.4,2227.31,2243.95],[2234.9,2227.74,2220.44,2253.42],[2232.69,2225.29,2217.25,2241.34],[2196.24,2211.59,2180.67,2212.59],[2215.47,2225.77,2215.47,2234.73],[2224.93,2226.13,2212.56,2233.04],[2236.98,2219.55,2217.26,2242.48],[2218.09,2206.78,2204.44,2226.26],[2199.91,2181.94,2177.39,2204.99],[2169.63,2194.85,2165.78,2196.43],[2195.03,2193.8,2178.47,2197.51],[2181.82,2197.6,2175.44,2206.03],[2201.12,2244.64,2200.58,2250.11],[2236.4,2242.17,2232.26,2245.12],[2242.62,2184.54,2182.81,2242.62],[2187.35,2218.32,2184.11,2226.12],[2213.19,2199.31,2191.85,2224.63],[2203.89,2177.91,2173.86,2210.58],[2170.78,2174.12,2161.14,2179.65],[2179.05,2205.5,2179.05,2222.81],[2212.5,2231.17,2212.5,2236.07],[2227.86,2235.57,2219.44,2240.26],[2242.39,2246.3,2235.42,2255.21],[2246.96,2232.97,2221.38,2247.86],[2228.82,2246.83,2225.81,2247.67],[2247.68,2241.92,2231.36,2250.85],[2238.9,2217.01,2205.87,2239.93],[2217.09,2224.8,2213.58,2225.19],[2221.34,2251.81,2210.77,2252.87],[2249.81,2282.87,2248.41,2288.09],[2286.33,2299.99,2281.9,2309.39],[2297.11,2305.11,2290.12,2305.3],[2303.75,2302.4,2292.43,2314.18],[2293.81,2275.67,2274.1,2304.95],[2281.45,2288.53,2270.25,2292.59],[2286.66,2293.08,2283.94,2301.7],[2293.4,2321.32,2281.47,2322.1],[2323.54,2324.02,2321.17,2334.33],[2316.25,2317.75,2310.49,2325.72],[2320.74,2300.59,2299.37,2325.53],[2300.21,2299.25,2294.11,2313.43],[2297.1,2272.42,2264.76,2297.1],[2270.71,2270.93,2260.87,2276.86],[2264.43,2242.11,2240.07,2266.69],[2242.26,2210.9,2205.07,2250.63],[2190.1,2148.35,2126.22,2190.1]]}]},\"CandleColumn\":{\"categories\":[\"2020/1/24\",\"2020/1/25\",\"2020/1/28\",\"2020/1/29\",\"2020/1/30\",\"2020/1/31\",\"2020/2/1\",\"2020/2/4\",\"2020/2/5\",\"2020/2/6\",\"2020/2/7\",\"2020/2/8\",\"2020/2/18\",\"2020/2/19\",\"2020/2/20\",\"2020/2/21\",\"2020/2/22\",\"2020/2/25\",\"2020/2/26\",\"2020/2/27\",\"2020/2/28\",\"2020/3/1\",\"2020/3/4\",\"2020/3/5\",\"2020/3/6\",\"2020/3/7\",\"2020/3/8\",\"2020/3/11\",\"2020/3/12\",\"2020/3/13\",\"2020/3/14\",\"2020/3/15\",\"2020/3/18\",\"2020/3/19\",\"2020/3/20\",\"2020/3/21\",\"2020/3/22\",\"2020/3/25\",\"2020/3/26\",\"2020/3/27\",\"2020/3/28\",\"2020/3/29\",\"2020/4/1\",\"2020/4/2\",\"2020/4/3\",\"2020/4/8\",\"2020/4/9\",\"2020/4/10\",\"2020/4/11\",\"2020/4/12\",\"2020/4/15\",\"2020/4/16\",\"2020/4/17\",\"2020/4/18\",\"2020/4/19\",\"2020/4/22\",\"2020/4/23\",\"2020/4/24\",\"2020/4/25\",\"2020/4/26\",\"2020/5/2\",\"2020/5/3\",\"2020/5/6\",\"2020/5/7\",\"2020/5/8\",\"2020/5/9\",\"2020/5/10\",\"2020/5/13\",\"2020/5/14\",\"2020/5/15\",\"2020/5/16\",\"2020/5/17\",\"2020/5/20\",\"2020/5/21\",\"2020/5/22\",\"2020/5/23\",\"2020/5/24\",\"2020/5/27\",\"2020/5/28\",\"2020/5/29\",\"2020/5/30\",\"2020/5/31\",\"2020/6/3\",\"2020/6/4\",\"2020/6/5\",\"2020/6/6\",\"2020/6/7\",\"2020/6/13\"],\"series\":[{\"name\":\"成交量1\",\"data\":[15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45]}]},\"Word\":{\"series\":[{\"name\":\"跨全端图表\",\"textSize\":25},{\"name\":\"微信小程序\",\"textSize\":20},{\"name\":\"支付宝小程序\",\"textSize\":20},{\"name\":\"百度小程序\",\"textSize\":20},{\"name\":\"QQ小程序\",\"textSize\":20},{\"name\":\"头条小程序\",\"textSize\":20},{\"name\":\"抖音小程序\",\"textSize\":20},{\"name\":\"360小程序\",\"textSize\":20},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12}]}}");

/***/ }),

/***/ 763:
/*!*********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp_demo/uniapp_demo/sheep/mock/mapdata.json ***!
  \*********************************************************************************************/
/*! exports provided: type, features, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"adcode\":110000,\"name\":\"北京\",\"center\":[116.405285,39.904989],\"centroid\":[116.41989,40.189913],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":0,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[117.210024,40.082262],[117.105315,40.074479],[117.105315,40.074479],[117.102851,40.073563],[117.102235,40.073105],[117.102235,40.073105],[117.102851,40.073563],[116.999989,40.030053],[116.927924,40.054788],[116.783794,40.035093],[116.757925,39.968176],[116.786874,39.886963],[116.926076,39.835524],[116.949482,39.778529],[116.902055,39.763813],[116.90575,39.687883],[116.812128,39.616018],[116.717273,39.603572],[116.717273,39.603572],[116.720969,39.599884],[116.720969,39.599884],[116.726512,39.595274],[116.726512,39.595274],[116.703106,39.588819],[116.703106,39.588819],[116.607636,39.619705],[116.524484,39.596657],[116.440716,39.527466],[116.433325,39.44296],[116.332927,39.457744],[116.245464,39.515466],[116.204196,39.588819],[116.10195,39.576368],[116.10195,39.576368],[115.957204,39.561147],[115.910393,39.600345],[115.910393,39.600345],[115.855574,39.554689],[115.855574,39.554689],[115.846951,39.550999],[115.846951,39.550999],[115.821081,39.517312],[115.821081,39.517312],[115.752712,39.512696],[115.752712,39.512696],[115.738545,39.539464],[115.738545,39.539925],[115.738545,39.539464],[115.738545,39.539925],[115.737314,39.544078],[115.737314,39.544078],[115.723763,39.544539],[115.723763,39.544539],[115.721299,39.543617],[115.721299,39.543617],[115.721299,39.55146],[115.721299,39.55146],[115.716988,39.560225],[115.716988,39.560225],[115.699125,39.577751],[115.698509,39.577751],[115.698509,39.577751],[115.699125,39.577751],[115.698509,39.577751],[115.69543,39.579135],[115.69543,39.579135],[115.586408,39.58928],[115.478619,39.650578],[115.478619,39.650578],[115.498945,39.69617],[115.498945,39.69617],[115.443511,39.785426],[115.443511,39.785426],[115.567314,39.816224],[115.514344,39.837821],[115.522967,39.898898],[115.426264,39.95029],[115.454597,40.029595],[115.599343,40.11979],[115.73485,40.129398],[115.773038,40.176044],[115.85311,40.148609],[115.89869,40.234536],[115.968907,40.264219],[115.9184,40.354103],[115.861733,40.364589],[115.861733,40.364589],[115.779197,40.442501],[115.755792,40.540333],[115.907929,40.617133],[116.005247,40.58397],[116.088399,40.62667],[116.22021,40.744181],[116.247311,40.791762],[116.464738,40.771827],[116.334159,40.90446],[116.473977,40.895867],[116.455499,40.98084],[116.519557,40.981292],[116.519557,40.981292],[116.599013,40.974516],[116.615643,41.053072],[116.688324,41.044499],[116.677853,40.970902],[116.730208,40.897676],[116.858323,40.833423],[116.964881,40.70972],[117.110858,40.70836],[117.286401,40.660719],[117.386799,40.684317],[117.49582,40.674334],[117.389879,40.5617],[117.344299,40.582152],[117.213104,40.512136],[117.225423,40.369148],[117.309191,40.279284],[117.309807,40.279284],[117.309191,40.279284],[117.309807,40.279284],[117.389879,40.228141],[117.367089,40.172387],[117.367089,40.172844],[117.367089,40.173301],[117.367089,40.173301],[117.367089,40.172844],[117.367089,40.172387],[117.344299,40.13443],[117.210024,40.082262]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":120000,\"name\":\"天津\",\"center\":[117.190182,39.125596],\"centroid\":[117.351154,39.28914],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":1,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[117.210024,40.082262],[117.344299,40.13443],[117.367089,40.172387],[117.367089,40.172844],[117.367089,40.173301],[117.367089,40.173301],[117.367089,40.172844],[117.367089,40.172387],[117.389879,40.228141],[117.450857,40.252347],[117.571581,40.21809],[117.652269,40.12345],[117.652269,40.12345],[117.651037,40.122535],[117.651037,40.122535],[117.71879,40.082262],[117.71879,40.082262],[117.75821,40.073563],[117.75821,40.073563],[117.782232,39.968634],[117.614697,39.972303],[117.589443,39.997059],[117.513067,39.910373],[117.513067,39.910373],[117.537704,39.835064],[117.537704,39.835064],[117.540784,39.822658],[117.540784,39.822658],[117.57774,39.727009],[117.644262,39.702155],[117.66274,39.636295],[117.619008,39.603111],[117.736037,39.560686],[117.736037,39.560686],[117.74774,39.58928],[117.866,39.596657],[117.933753,39.574062],[117.870311,39.454972],[117.846906,39.328274],[117.972557,39.312536],[117.972557,39.312536],[117.982412,39.298647],[117.982412,39.298647],[118.021833,39.287071],[118.021833,39.287071],[118.024296,39.289386],[118.024296,39.289386],[118.024912,39.292164],[118.024912,39.292164],[118.037231,39.220353],[117.871543,39.122479],[117.837667,39.056999],[117.855529,38.957502],[117.898029,38.948661],[117.847522,38.855535],[117.778536,38.869046],[117.64611,38.828972],[117.646725,38.788875],[117.740964,38.753888],[117.729261,38.680127],[117.639334,38.62686],[117.47919,38.617043],[117.39419,38.573553],[117.252524,38.556711],[117.213104,38.639947],[117.213104,38.639947],[117.176764,38.617978],[117.176764,38.617978],[117.097924,38.587118],[117.042489,38.706279],[116.95133,38.689468],[116.947634,38.689468],[116.947634,38.689468],[116.950714,38.689468],[116.95133,38.689468],[116.950714,38.689468],[116.877417,38.680594],[116.858939,38.741289],[116.766548,38.742222],[116.737599,38.784677],[116.708034,38.931907],[116.783179,39.050959],[116.783179,39.050959],[116.812744,39.050959],[116.812744,39.050959],[116.912526,39.110873],[116.91191,39.111338],[116.91191,39.111338],[116.912526,39.110873],[116.865714,39.155428],[116.865714,39.155428],[116.892816,39.224061],[116.870642,39.357426],[116.796113,39.446656],[116.812128,39.616018],[116.90575,39.687883],[116.916837,39.703996],[116.916837,39.703996],[116.983975,39.63906],[116.983975,39.63906],[117.126873,39.61694],[117.177996,39.64551],[117.165061,39.718725],[117.165061,39.718725],[117.205713,39.763813],[117.156438,39.817603],[117.229735,39.852981],[117.152126,39.878239],[117.150894,39.944785],[117.198322,39.992933],[117.210024,40.082262]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":130000,\"name\":\"河北\",\"center\":[114.502461,38.045474],\"centroid\":[115.4004,37.9688],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":2,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[117.389879,40.228141],[117.309807,40.279284],[117.309191,40.279284],[117.309807,40.279284],[117.309191,40.279284],[117.225423,40.369148],[117.213104,40.512136],[117.344299,40.582152],[117.389879,40.5617],[117.49582,40.674334],[117.386799,40.684317],[117.286401,40.660719],[117.110858,40.70836],[116.964881,40.70972],[116.858323,40.833423],[116.730208,40.897676],[116.677853,40.970902],[116.688324,41.044499],[116.615643,41.053072],[116.599013,40.974516],[116.519557,40.981292],[116.519557,40.981292],[116.455499,40.98084],[116.473977,40.895867],[116.334159,40.90446],[116.464738,40.771827],[116.247311,40.791762],[116.22021,40.744181],[116.088399,40.62667],[116.005247,40.58397],[115.907929,40.617133],[115.755792,40.540333],[115.779197,40.442501],[115.861733,40.364589],[115.861733,40.364589],[115.9184,40.354103],[115.968907,40.264219],[115.89869,40.234536],[115.85311,40.148609],[115.773038,40.176044],[115.73485,40.129398],[115.599343,40.11979],[115.454597,40.029595],[115.426264,39.95029],[115.522967,39.898898],[115.514344,39.837821],[115.567314,39.816224],[115.443511,39.785426],[115.443511,39.785426],[115.498945,39.69617],[115.498945,39.69617],[115.478619,39.650578],[115.478619,39.650578],[115.586408,39.58928],[115.69543,39.579135],[115.69543,39.579135],[115.698509,39.577751],[115.699125,39.577751],[115.698509,39.577751],[115.698509,39.577751],[115.699125,39.577751],[115.716988,39.560225],[115.716988,39.560225],[115.721299,39.55146],[115.721299,39.55146],[115.721299,39.543617],[115.721299,39.543617],[115.723763,39.544539],[115.723763,39.544539],[115.737314,39.544078],[115.737314,39.544078],[115.738545,39.539925],[115.738545,39.539464],[115.738545,39.539925],[115.738545,39.539464],[115.752712,39.512696],[115.752712,39.512696],[115.821081,39.517312],[115.821081,39.517312],[115.846951,39.550999],[115.846951,39.550999],[115.855574,39.554689],[115.855574,39.554689],[115.910393,39.600345],[115.910393,39.600345],[115.957204,39.561147],[116.10195,39.576368],[116.10195,39.576368],[116.204196,39.588819],[116.245464,39.515466],[116.332927,39.457744],[116.433325,39.44296],[116.440716,39.527466],[116.524484,39.596657],[116.607636,39.619705],[116.703106,39.588819],[116.703106,39.588819],[116.726512,39.595274],[116.726512,39.595274],[116.720969,39.599884],[116.720969,39.599884],[116.717273,39.603572],[116.717273,39.603572],[116.812128,39.616018],[116.796113,39.446656],[116.870642,39.357426],[116.892816,39.224061],[116.865714,39.155428],[116.865714,39.155428],[116.912526,39.110873],[116.91191,39.111338],[116.91191,39.111338],[116.912526,39.110873],[116.812744,39.050959],[116.812744,39.050959],[116.783179,39.050959],[116.783179,39.050959],[116.708034,38.931907],[116.737599,38.784677],[116.766548,38.742222],[116.858939,38.741289],[116.877417,38.680594],[116.950714,38.689468],[116.95133,38.689468],[116.950714,38.689468],[116.947634,38.689468],[116.947634,38.689468],[116.95133,38.689468],[117.042489,38.706279],[117.097924,38.587118],[117.176764,38.617978],[117.176764,38.617978],[117.213104,38.639947],[117.213104,38.639947],[117.252524,38.556711],[117.39419,38.573553],[117.47919,38.617043],[117.639334,38.62686],[117.638102,38.545013],[117.781,38.374004],[117.937449,38.387606],[117.895565,38.30173],[117.808718,38.228445],[117.771761,38.136734],[117.70216,38.075529],[117.5839,38.070819],[117.513067,37.94353],[117.438538,37.853823],[117.34122,37.863271],[117.267923,37.838704],[117.093612,37.849571],[117.023395,37.832561],[116.788106,37.843429],[116.724664,37.744139],[116.433941,37.47349],[116.38097,37.522858],[116.379738,37.521909],[116.38097,37.522858],[116.379738,37.521909],[116.337238,37.580255],[116.291659,37.557966],[116.27626,37.466841],[116.240536,37.489633],[116.240536,37.489633],[116.226369,37.428365],[116.2855,37.404604],[116.236224,37.361816],[116.169087,37.384164],[116.051443,37.367998],[115.984921,37.326616],[115.969523,37.239497],[115.909777,37.206622],[115.868509,37.076414],[115.776734,36.992829],[115.79706,36.968931],[115.71206,36.883313],[115.683727,36.808139],[115.479851,36.76022],[115.365902,36.622043],[115.283366,36.486505],[115.308004,36.461967],[115.308004,36.461967],[115.366518,36.308793],[115.466916,36.259115],[115.466916,36.259115],[115.483547,36.149036],[115.312931,36.088137],[115.201446,36.210371],[115.201446,36.210371],[115.064092,36.178985],[114.996955,36.06831],[114.914419,36.051865],[114.912571,36.140339],[114.591666,36.130192],[114.345291,36.255738],[114.169132,36.243675],[114.169132,36.243675],[114.060727,36.276482],[114.055799,36.330005],[113.982502,36.358921],[113.911054,36.314578],[113.881488,36.354102],[113.819894,36.330969],[113.731199,36.363257],[113.708409,36.423461],[113.554425,36.494682],[113.588301,36.562955],[113.476816,36.655171],[113.499606,36.740564],[113.680692,36.789933],[113.696707,36.882356],[113.773083,36.855072],[113.76138,36.956022],[113.791561,36.987572],[113.758301,37.075459],[113.773083,37.1518],[113.832213,37.167536],[113.90243,37.309962],[114.014531,37.424564],[114.036705,37.49438],[114.123553,37.60159],[114.12848,37.698231],[113.993589,37.706752],[114.044712,37.762116],[113.976959,37.816965],[113.951706,37.917573],[113.872249,37.990228],[113.876561,38.055273],[113.810039,38.112729],[113.825438,38.169199],[113.720728,38.174843],[113.711489,38.213873],[113.570439,38.237375],[113.525475,38.382916],[113.583374,38.459793],[113.561816,38.558115],[113.612939,38.646022],[113.70225,38.65163],[113.720728,38.713283],[113.839605,38.758554],[113.855619,38.828972],[113.776163,38.885814],[113.76754,38.959828],[113.898119,39.067684],[114.050872,39.135939],[114.10877,39.052352],[114.345907,39.075116],[114.388406,39.176767],[114.47587,39.216181],[114.416124,39.243063],[114.480797,39.350023],[114.470942,39.408759],[114.568877,39.574062],[114.408117,39.65196],[114.395182,39.867218],[114.225183,39.857114],[114.17406,39.897521],[114.047176,39.916339],[114.021307,39.992017],[113.910438,40.011725],[113.956017,40.031428],[113.989278,40.112469],[114.044712,40.05662],[114.101995,40.099655],[114.073046,40.168729],[114.073046,40.168729],[114.235654,40.198442],[114.255364,40.236363],[114.46971,40.267872],[114.530688,40.344983],[114.446305,40.372795],[114.31203,40.372795],[114.267066,40.474369],[114.283081,40.590785],[114.209168,40.629848],[114.134639,40.737381],[114.044712,40.83116],[114.073661,40.857412],[113.973263,40.983099],[113.819279,41.097726],[113.920293,41.172081],[113.996669,41.192345],[113.927068,41.326829],[113.94493,41.39105],[113.871017,41.41349],[113.930764,41.485693],[114.100147,41.537218],[114.230726,41.513477],[114.203009,41.793334],[114.34837,41.947049],[114.510978,41.973299],[114.466015,42.038656],[114.510978,42.111047],[114.765361,42.118593],[114.828803,42.147434],[114.9021,42.015544],[114.922426,41.824999],[114.866991,41.803147],[114.899636,41.756299],[114.895325,41.636567],[114.862064,41.603915],[115.0992,41.624045],[115.252569,41.579303],[115.376989,41.602126],[115.319091,41.691546],[115.654162,41.829011],[115.811226,41.912328],[115.916552,41.945269],[116.016334,41.777273],[116.09887,41.776381],[116.122892,41.861995],[116.194341,41.861995],[116.233145,41.941263],[116.310137,41.997316],[116.409303,41.994203],[116.386514,41.952389],[116.510933,41.974189],[116.560209,41.928356],[116.727744,41.951054],[116.879881,42.018211],[116.890352,42.092846],[116.789338,42.200202],[116.907598,42.191337],[116.886656,42.366641],[116.910062,42.394928],[116.910062,42.394928],[116.927308,42.40509],[116.927308,42.40509],[116.929156,42.407741],[116.929156,42.408182],[116.929156,42.407741],[116.929156,42.408182],[116.936547,42.410833],[116.936547,42.410833],[116.944555,42.415251],[116.944555,42.415251],[116.976583,42.427618],[116.976583,42.427618],[116.984591,42.427176],[116.984591,42.427176],[116.993214,42.425851],[116.993214,42.425851],[116.995678,42.426734],[116.995678,42.426734],[117.001837,42.432476],[117.001837,42.432476],[117.004301,42.432476],[117.004301,42.432476],[117.005533,42.4338],[117.005533,42.4338],[117.133648,42.470443],[117.133648,42.470443],[117.147815,42.470443],[117.147815,42.470443],[117.264227,42.476621],[117.264227,42.476621],[117.412669,42.472649],[117.387415,42.517648],[117.387415,42.517648],[117.43669,42.584205],[117.516146,42.599622],[117.516146,42.599622],[117.687377,42.582884],[117.779768,42.618558],[117.874007,42.510151],[118.019369,42.39537],[118.060021,42.298083],[117.977485,42.229892],[118.109296,42.165176],[118.097593,42.105277],[118.155491,42.081301],[118.119767,42.034656],[118.194296,42.031545],[118.212774,42.081301],[118.297157,42.048876],[118.237411,42.023101],[118.313788,41.987977],[118.268824,41.930136],[118.340273,41.872688],[118.29223,41.772811],[118.165962,41.813405],[118.130854,41.74246],[118.214006,41.641933],[118.230636,41.581989],[118.307012,41.569008],[118.271904,41.471349],[118.348896,41.428296],[118.35136,41.337163],[118.519511,41.353783],[118.677192,41.350639],[118.741866,41.324133],[118.843496,41.374439],[118.890923,41.300764],[118.96422,41.309303],[119.197661,41.282781],[119.239545,41.314696],[119.2494,41.279634],[119.126212,41.138744],[119.037516,41.067509],[118.96422,41.079236],[118.951901,41.01832],[119.013495,41.007485],[118.977154,40.959155],[118.977154,40.959155],[118.90201,40.960963],[118.849039,40.800821],[118.911249,40.776811],[119.054147,40.664804],[119.184726,40.680233],[119.162552,40.599872],[119.30237,40.530329],[119.571536,40.540333],[119.598637,40.465266],[119.586934,40.37553],[119.642369,40.291151],[119.625123,40.224029],[119.745847,40.208038],[119.736608,40.10469],[119.779723,40.049293],[119.779723,40.049293],[119.780339,40.047002],[119.780339,40.047002],[119.817296,40.049751],[119.817296,40.049751],[119.848093,40.020432],[119.848093,40.020432],[119.845629,40.000726],[119.845629,40.000726],[119.854252,39.988349],[119.791426,39.952124],[119.540739,39.88834],[119.536427,39.808871],[119.466826,39.810709],[119.357805,39.721946],[119.269726,39.498385],[119.314689,39.412457],[119.190885,39.368528],[119.096031,39.242136],[118.948821,39.138259],[118.955597,39.176303],[118.76096,39.133618],[118.637156,39.157284],[118.533062,39.090907],[118.604511,38.971458],[118.491178,38.909097],[118.377845,38.971923],[118.366143,39.016101],[118.225092,39.034694],[118.120999,39.186043],[118.037231,39.220353],[118.024912,39.292164],[118.024912,39.292164],[118.024296,39.289386],[118.024296,39.289386],[118.021833,39.287071],[118.021833,39.287071],[117.982412,39.298647],[117.982412,39.298647],[117.972557,39.312536],[117.972557,39.312536],[117.846906,39.328274],[117.870311,39.454972],[117.933753,39.574062],[117.866,39.596657],[117.74774,39.58928],[117.736037,39.560686],[117.736037,39.560686],[117.619008,39.603111],[117.66274,39.636295],[117.644262,39.702155],[117.57774,39.727009],[117.540784,39.822658],[117.540784,39.822658],[117.537704,39.835064],[117.537704,39.835064],[117.513067,39.910373],[117.513067,39.910373],[117.589443,39.997059],[117.614697,39.972303],[117.782232,39.968634],[117.75821,40.073563],[117.75821,40.073563],[117.71879,40.082262],[117.71879,40.082262],[117.651037,40.122535],[117.651037,40.122535],[117.652269,40.12345],[117.652269,40.12345],[117.571581,40.21809],[117.450857,40.252347],[117.389879,40.228141]]],[[[116.90575,39.687883],[116.902055,39.763813],[116.949482,39.778529],[116.926076,39.835524],[116.786874,39.886963],[116.757925,39.968176],[116.783794,40.035093],[116.927924,40.054788],[116.999989,40.030053],[117.102851,40.073563],[117.102235,40.073105],[117.102235,40.073105],[117.102851,40.073563],[117.105315,40.074479],[117.105315,40.074479],[117.210024,40.082262],[117.198322,39.992933],[117.150894,39.944785],[117.152126,39.878239],[117.229735,39.852981],[117.156438,39.817603],[117.205713,39.763813],[117.165061,39.718725],[117.165061,39.718725],[117.177996,39.64551],[117.126873,39.61694],[116.983975,39.63906],[116.983975,39.63906],[116.916837,39.703996],[116.916837,39.703996],[116.90575,39.687883]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":140000,\"name\":\"山西\",\"center\":[112.549248,37.857014],\"centroid\":[112.305144,37.619053],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":3,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[113.731199,36.363257],[113.716417,36.262492],[113.651743,36.172224],[113.694859,36.026707],[113.637576,35.98847],[113.656671,35.836792],[113.604316,35.797008],[113.578446,35.63378],[113.485439,35.520879],[113.31236,35.481424],[113.298194,35.427325],[113.189789,35.449261],[113.126347,35.332197],[112.997,35.362455],[112.992072,35.296068],[112.911384,35.24673],[112.818377,35.258457],[112.766022,35.203718],[112.628052,35.263342],[112.637291,35.225716],[112.513487,35.218384],[112.058924,35.279951],[112.078634,35.219362],[112.062004,35.055937],[111.900012,35.079933],[111.66965,34.988319],[111.570484,34.843094],[111.346282,34.831798],[111.232949,34.789551],[111.148566,34.80773],[111.118385,34.756622],[110.966248,34.70499],[110.929907,34.731548],[110.883712,34.642498],[110.749437,34.652342],[110.710017,34.605078],[110.533242,34.583406],[110.474728,34.617389],[110.379257,34.600646],[110.310272,34.608033],[110.241287,34.682361],[110.232664,34.803308],[110.257301,34.93487],[110.325671,35.014785],[110.39404,35.271647],[110.45009,35.327803],[110.477808,35.413672],[110.525851,35.44195],[110.609619,35.632321],[110.57759,35.701346],[110.549257,35.877527],[110.511684,35.879951],[110.447011,36.164495],[110.474112,36.248018],[110.45933,36.330969],[110.503677,36.487948],[110.496902,36.582175],[110.394656,36.676768],[110.447011,36.737687],[110.416214,36.790892],[110.425453,36.960325],[110.382953,37.021975],[110.444547,37.007164],[110.53509,37.137969],[110.690307,37.287115],[110.695234,37.34945],[110.630561,37.373228],[110.644111,37.435017],[110.745125,37.450693],[110.795017,37.566029],[110.796248,37.66319],[110.706321,37.705332],[110.758676,37.744139],[110.663821,37.803256],[110.59422,37.921821],[110.522771,37.954853],[110.501213,38.031713],[110.509221,38.192245],[110.565887,38.215283],[110.57759,38.297035],[110.661358,38.308773],[110.746973,38.366029],[110.77777,38.44105],[110.874473,38.453702],[110.920052,38.581973],[110.880016,38.618446],[111.009363,38.847614],[110.980414,38.970063],[111.138711,39.064897],[111.163348,39.152644],[111.247732,39.302351],[111.125776,39.366678],[111.171971,39.42355],[111.337043,39.420777],[111.418963,39.500232],[111.462079,39.626157],[111.502115,39.663015],[111.646245,39.644128],[111.783599,39.588819],[111.842729,39.620166],[111.93204,39.61233],[111.970229,39.79646],[112.28559,40.197985],[112.310227,40.256457],[112.456205,40.300278],[112.6299,40.235906],[112.72845,40.168272],[112.844863,40.203926],[112.892906,40.326284],[113.251382,40.413352],[113.316056,40.319898],[113.559968,40.348631],[113.794641,40.518049],[113.855619,40.457071],[113.948626,40.514865],[114.061959,40.528964],[114.041633,40.608503],[114.074277,40.723325],[114.134639,40.737381],[114.209168,40.629848],[114.283081,40.590785],[114.267066,40.474369],[114.31203,40.372795],[114.446305,40.372795],[114.530688,40.344983],[114.46971,40.267872],[114.255364,40.236363],[114.235654,40.198442],[114.073046,40.168729],[114.073046,40.168729],[114.101995,40.099655],[114.044712,40.05662],[113.989278,40.112469],[113.956017,40.031428],[113.910438,40.011725],[114.021307,39.992017],[114.047176,39.916339],[114.17406,39.897521],[114.225183,39.857114],[114.395182,39.867218],[114.408117,39.65196],[114.568877,39.574062],[114.470942,39.408759],[114.480797,39.350023],[114.416124,39.243063],[114.47587,39.216181],[114.388406,39.176767],[114.345907,39.075116],[114.10877,39.052352],[114.050872,39.135939],[113.898119,39.067684],[113.76754,38.959828],[113.776163,38.885814],[113.855619,38.828972],[113.839605,38.758554],[113.720728,38.713283],[113.70225,38.65163],[113.612939,38.646022],[113.561816,38.558115],[113.583374,38.459793],[113.525475,38.382916],[113.570439,38.237375],[113.711489,38.213873],[113.720728,38.174843],[113.825438,38.169199],[113.810039,38.112729],[113.876561,38.055273],[113.872249,37.990228],[113.951706,37.917573],[113.976959,37.816965],[114.044712,37.762116],[113.993589,37.706752],[114.12848,37.698231],[114.123553,37.60159],[114.036705,37.49438],[114.014531,37.424564],[113.90243,37.309962],[113.832213,37.167536],[113.773083,37.1518],[113.758301,37.075459],[113.791561,36.987572],[113.76138,36.956022],[113.773083,36.855072],[113.696707,36.882356],[113.680692,36.789933],[113.499606,36.740564],[113.476816,36.655171],[113.588301,36.562955],[113.554425,36.494682],[113.708409,36.423461],[113.731199,36.363257]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":150000,\"name\":\"内蒙古\",\"center\":[111.670801,40.818311],\"centroid\":[114.059024,44.315561],\"childrenNum\":12,\"level\":\"province\",\"subFeatureIndex\":4,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[123.703873,43.370824],[123.664453,43.264606],[123.666916,43.179585],[123.572678,43.0035],[123.515395,43.027561],[123.515395,43.027561],[123.474743,43.04243],[123.259165,42.992997],[123.18402,42.926002],[123.169853,42.859811],[123.227752,42.831735],[123.058368,42.768957],[122.887137,42.770275],[122.831087,42.722381],[122.786123,42.756218],[122.786123,42.756218],[122.732536,42.786524],[122.624747,42.773349],[122.563769,42.826031],[122.436886,42.843142],[122.35127,42.830419],[122.374676,42.774667],[122.457212,42.774227],[122.395002,42.683687],[122.338951,42.670051],[122.203445,42.731171],[122.20406,42.683687],[122.071634,42.711391],[121.940438,42.688525],[121.904714,42.569666],[121.66573,42.437333],[121.604752,42.494271],[121.388557,42.475297],[121.304789,42.435567],[121.304789,42.435567],[121.285079,42.387857],[121.068884,42.252483],[120.933378,42.279493],[120.79048,42.218372],[120.745516,42.223689],[120.624792,42.154532],[120.58414,42.167394],[120.466496,42.105277],[120.456641,42.016433],[120.373489,41.994648],[120.188707,41.848179],[120.096316,41.696907],[120.035954,41.708075],[120.051968,41.775935],[119.989759,41.898969],[119.837622,42.135455],[119.846861,42.21527],[119.744615,42.211725],[119.541971,42.292329],[119.572152,42.359568],[119.502551,42.387857],[119.415703,42.309588],[119.284508,42.265325],[119.237697,42.201088],[119.315921,42.119037],[119.384906,42.089738],[119.324544,41.969296],[119.334399,41.869569],[119.294363,41.775935],[119.307914,41.657581],[119.415703,41.590044],[119.361501,41.56498],[119.405848,41.508548],[119.376283,41.422015],[119.30545,41.402271],[119.326392,41.329525],[119.239545,41.314696],[119.197661,41.282781],[118.96422,41.309303],[118.890923,41.300764],[118.843496,41.374439],[118.741866,41.324133],[118.677192,41.350639],[118.519511,41.353783],[118.35136,41.337163],[118.348896,41.428296],[118.271904,41.471349],[118.307012,41.569008],[118.230636,41.581989],[118.214006,41.641933],[118.130854,41.74246],[118.165962,41.813405],[118.29223,41.772811],[118.340273,41.872688],[118.268824,41.930136],[118.313788,41.987977],[118.237411,42.023101],[118.297157,42.048876],[118.212774,42.081301],[118.194296,42.031545],[118.119767,42.034656],[118.155491,42.081301],[118.097593,42.105277],[118.109296,42.165176],[117.977485,42.229892],[118.060021,42.298083],[118.019369,42.39537],[117.874007,42.510151],[117.779768,42.618558],[117.687377,42.582884],[117.516146,42.599622],[117.516146,42.599622],[117.43669,42.584205],[117.387415,42.517648],[117.387415,42.517648],[117.412669,42.472649],[117.264227,42.476621],[117.264227,42.476621],[117.147815,42.470443],[117.147815,42.470443],[117.133648,42.470443],[117.133648,42.470443],[117.005533,42.4338],[117.005533,42.4338],[117.004301,42.432476],[117.004301,42.432476],[117.001837,42.432476],[117.001837,42.432476],[116.995678,42.426734],[116.995678,42.426734],[116.993214,42.425851],[116.993214,42.425851],[116.984591,42.427176],[116.984591,42.427176],[116.976583,42.427618],[116.976583,42.427618],[116.944555,42.415251],[116.944555,42.415251],[116.936547,42.410833],[116.936547,42.410833],[116.929156,42.408182],[116.929156,42.407741],[116.929156,42.408182],[116.929156,42.407741],[116.927308,42.40509],[116.927308,42.40509],[116.910062,42.394928],[116.910062,42.394928],[116.886656,42.366641],[116.907598,42.191337],[116.789338,42.200202],[116.890352,42.092846],[116.879881,42.018211],[116.727744,41.951054],[116.560209,41.928356],[116.510933,41.974189],[116.386514,41.952389],[116.409303,41.994203],[116.310137,41.997316],[116.233145,41.941263],[116.194341,41.861995],[116.122892,41.861995],[116.09887,41.776381],[116.016334,41.777273],[115.916552,41.945269],[115.811226,41.912328],[115.654162,41.829011],[115.319091,41.691546],[115.376989,41.602126],[115.252569,41.579303],[115.0992,41.624045],[114.862064,41.603915],[114.895325,41.636567],[114.899636,41.756299],[114.866991,41.803147],[114.922426,41.824999],[114.9021,42.015544],[114.828803,42.147434],[114.765361,42.118593],[114.510978,42.111047],[114.466015,42.038656],[114.510978,41.973299],[114.34837,41.947049],[114.203009,41.793334],[114.230726,41.513477],[114.100147,41.537218],[113.930764,41.485693],[113.871017,41.41349],[113.94493,41.39105],[113.927068,41.326829],[113.996669,41.192345],[113.920293,41.172081],[113.819279,41.097726],[113.973263,40.983099],[114.073661,40.857412],[114.044712,40.83116],[114.134639,40.737381],[114.074277,40.723325],[114.041633,40.608503],[114.061959,40.528964],[113.948626,40.514865],[113.855619,40.457071],[113.794641,40.518049],[113.559968,40.348631],[113.316056,40.319898],[113.251382,40.413352],[112.892906,40.326284],[112.844863,40.203926],[112.72845,40.168272],[112.6299,40.235906],[112.456205,40.300278],[112.310227,40.256457],[112.28559,40.197985],[111.970229,39.79646],[111.93204,39.61233],[111.842729,39.620166],[111.783599,39.588819],[111.646245,39.644128],[111.502115,39.663015],[111.462079,39.626157],[111.418963,39.500232],[111.337043,39.420777],[111.171971,39.42355],[111.125776,39.366678],[111.064182,39.400899],[111.148566,39.531619],[111.134399,39.586513],[110.892335,39.509927],[110.740198,39.351874],[110.702626,39.27364],[110.604075,39.277345],[110.528315,39.380091],[110.434692,39.381016],[110.39096,39.31161],[110.243751,39.42355],[110.146432,39.455434],[110.217881,39.28105],[109.961035,39.191608],[109.665384,38.981691],[109.683862,38.935631],[109.624116,38.854603],[109.549587,38.805662],[109.511399,38.833633],[109.404226,38.720752],[109.338936,38.70161],[109.367269,38.627328],[109.276726,38.623121],[109.178792,38.520675],[109.051908,38.432146],[108.938575,38.207291],[108.963829,38.155085],[109.069155,38.091071],[109.017416,37.969949],[108.938575,37.920877],[108.871438,38.027471],[108.797525,38.047735],[108.82709,37.989285],[108.798141,37.93362],[108.799989,37.783871],[108.777815,37.683554],[108.611512,37.65419],[108.532671,37.690656],[108.440896,37.654663],[108.304158,37.638556],[108.219158,37.661295],[108.134159,37.621971],[108.025137,37.649926],[107.982022,37.787181],[107.65003,37.864688],[107.49235,37.944945],[107.419669,37.940699],[107.438147,37.992586],[107.329742,38.087774],[107.19054,38.154144],[107.014997,38.120261],[106.768621,38.174843],[106.546883,38.269794],[106.482825,38.319571],[106.601702,38.392295],[106.647897,38.470569],[106.66268,38.601614],[106.709491,38.718885],[106.954019,38.941215],[106.96757,39.054676],[106.859164,39.107623],[106.795723,39.214327],[106.806809,39.318554],[106.751375,39.381478],[106.683622,39.357426],[106.602318,39.375466],[106.506231,39.269934],[106.402753,39.291701],[106.284493,39.270397],[106.283877,39.14522],[106.145907,39.153108],[106.096631,39.08487],[106.060907,38.968667],[105.97098,38.909097],[106.003625,38.874636],[105.897683,38.788875],[105.90569,38.731488],[105.852719,38.641349],[105.874277,38.593197],[105.821307,38.366967],[105.86627,38.296565],[105.775111,38.186601],[105.780655,38.084949],[105.840401,38.003902],[105.799749,37.940227],[105.80406,37.861854],[105.760944,37.799947],[105.622974,37.778669],[105.598952,37.699178],[105.315004,37.702018],[105.111128,37.633818],[105.024281,37.579781],[104.866601,37.566503],[104.801311,37.538516],[104.419429,37.511943],[104.407726,37.464467],[104.287002,37.42789],[104.183524,37.406981],[103.948235,37.564606],[103.676606,37.783871],[103.401897,37.861854],[103.362477,38.037368],[103.369868,38.089658],[103.53494,38.156497],[103.507838,38.281068],[103.416063,38.404956],[103.85954,38.64462],[104.044322,38.895128],[104.168125,38.940285],[104.207546,39.083941],[104.177364,39.15218],[104.047401,39.297721],[104.091133,39.418466],[103.964865,39.455434],[103.839214,39.460516],[103.595302,39.386565],[103.344615,39.331514],[103.007696,39.09973],[102.601792,39.172129],[102.45335,39.25511],[102.280887,39.190217],[101.830636,39.093229],[101.926106,39.000758],[102.075164,38.891403],[101.941505,38.808926],[101.777049,38.660507],[101.679115,38.690869],[101.601506,38.6549],[101.562702,38.712816],[101.307087,38.802865],[101.334189,38.848545],[101.24303,38.86066],[101.198682,38.943077],[101.228863,39.02075],[101.117378,38.97518],[100.969553,38.9468],[100.961545,39.005873],[100.835278,39.025863],[100.864227,39.106695],[100.842669,39.199955],[100.842053,39.405523],[100.619699,39.38749],[100.498975,39.400437],[100.500823,39.4813],[100.326512,39.509003],[100.314193,39.606799],[100.250135,39.68512],[100.128179,39.702155],[100.040716,39.756913],[99.904593,39.785886],[99.822058,39.85987],[99.672384,39.887881],[99.488218,39.875943],[99.927383,40.063947],[100.002528,40.197528],[100.169447,40.277458],[100.169447,40.541242],[100.242744,40.618495],[100.237201,40.716977],[100.107853,40.875511],[100.057346,40.908077],[99.673,40.932943],[99.565827,40.846551],[99.174705,40.858317],[99.172858,40.747354],[99.102025,40.676603],[99.041662,40.693844],[98.984996,40.782701],[98.790975,40.705185],[98.801446,40.609411],[98.689345,40.691576],[98.668403,40.772734],[98.569853,40.746901],[98.627751,40.677965],[98.344419,40.568518],[98.333332,40.918929],[98.25018,40.939271],[97.971776,41.097726],[97.629314,41.440407],[97.613915,41.477176],[97.84674,41.656687],[97.307177,42.565259],[97.172903,42.795305],[98.195362,42.653331],[98.546447,42.638368],[99.503001,42.568344],[99.969267,42.648051],[100.272309,42.636167],[100.32528,42.689845],[100.826655,42.67533],[101.23995,42.59698],[101.581796,42.525145],[101.803534,42.503534],[102.070236,42.232107],[102.449039,42.143885],[102.540814,42.162072],[102.712045,42.152757],[103.021862,42.02799],[103.418527,41.882489],[103.868779,41.802701],[104.080046,41.804931],[104.530298,41.874916],[104.524138,41.662051],[104.68613,41.64551],[104.923267,41.654005],[105.009498,41.583331],[105.230621,41.750942],[105.291599,41.750049],[105.74185,41.949274],[106.01348,42.03199],[106.619564,42.243625],[106.785867,42.291444],[107.051337,42.319322],[107.269996,42.363547],[107.303872,42.4126],[107.46648,42.458967],[107.57427,42.413042],[107.939522,42.403764],[108.022058,42.433359],[108.238252,42.460291],[108.298614,42.438216],[108.532671,42.443073],[108.845569,42.395811],[109.026039,42.458525],[109.291509,42.435567],[109.544044,42.472208],[109.683862,42.559089],[109.906216,42.635727],[110.108244,42.642769],[110.139657,42.67489],[110.437156,42.781254],[110.469801,42.839194],[110.631177,42.936078],[110.736502,43.089639],[110.769763,43.099251],[111.02045,43.329926],[111.183674,43.396045],[111.354289,43.436029],[111.456535,43.49422],[111.564325,43.490314],[111.79407,43.67192],[111.951135,43.693122],[111.959758,43.8232],[111.870447,43.940071],[111.773128,44.010686],[111.662875,44.061012],[111.559397,44.171408],[111.507042,44.294019],[111.415883,44.357368],[111.478709,44.488982],[111.569868,44.576418],[111.560629,44.647124],[111.624687,44.778509],[111.764505,44.969314],[111.889541,45.045459],[112.002874,45.090675],[112.113743,45.072931],[112.438959,45.071663],[112.540589,45.001054],[112.599719,44.93078],[112.850406,44.840484],[112.937869,44.84006],[113.11526,44.799741],[113.503918,44.77766],[113.631417,44.745372],[113.907358,44.915105],[114.065038,44.931204],[114.19069,45.036581],[114.347139,45.119392],[114.519602,45.283812],[114.551014,45.387699],[114.745035,45.438521],[114.974165,45.377193],[115.153403,45.395682],[115.36467,45.392321],[115.699741,45.459509],[115.936878,45.632987],[116.035428,45.68526],[116.17463,45.688604],[116.286731,45.775056],[116.288579,45.838869],[116.243,45.875956],[116.271949,45.966692],[116.414231,46.13404],[116.439484,46.137771],[116.585462,46.292199],[116.745606,46.327743],[116.826294,46.380602],[117.097308,46.35707],[117.372017,46.360373],[117.392343,46.463093],[117.447777,46.528172],[117.42006,46.582071],[117.49582,46.600574],[117.622704,46.596052],[117.704008,46.516645],[117.870927,46.549985],[117.914659,46.607973],[118.04647,46.631398],[118.124078,46.678216],[118.192448,46.682731],[118.316252,46.739347],[118.446831,46.704482],[118.586033,46.692992],[118.639004,46.721302],[118.788061,46.687246],[118.845343,46.771731],[118.914329,46.775009],[118.912481,46.733196],[119.011647,46.745498],[119.123132,46.642901],[119.26295,46.649062],[119.374435,46.60304],[119.431718,46.638793],[119.656535,46.625645],[119.677477,46.584539],[119.783419,46.626056],[119.8136,46.668363],[119.911534,46.669595],[119.93494,46.712688],[119.928781,46.903933],[119.859795,46.917013],[119.795122,47.01297],[119.806825,47.054973],[119.716282,47.195829],[119.56784,47.24825],[119.559833,47.303053],[119.487152,47.329419],[119.353493,47.43192],[119.365812,47.477232],[119.152081,47.540685],[119.134219,47.664539],[118.773278,47.771213],[118.568171,47.992315],[118.424041,48.014734],[118.299621,48.005127],[118.231252,48.043943],[117.96147,48.011132],[117.813645,48.016335],[117.493357,47.758343],[117.384335,47.641162],[117.094844,47.823865],[116.879265,47.893718],[116.669846,47.890509],[116.453035,47.837522],[116.26579,47.876866],[116.111189,47.811812],[115.939342,47.683071],[115.580249,47.921793],[115.529126,48.155029],[115.822929,48.2595],[115.799523,48.514993],[115.83032,48.560156],[116.077928,48.822412],[116.048363,48.873598],[116.717889,49.847388],[116.736367,49.847388],[117.068974,49.695524],[117.278394,49.636272],[117.485349,49.633172],[117.809333,49.521049],[117.867848,49.592853],[117.980565,49.621158],[118.084658,49.618057],[118.122231,49.669586],[118.205998,49.684686],[118.225708,49.734211],[118.388316,49.786004],[118.395092,49.819601],[118.49549,49.843144],[118.485635,49.86706],[118.574946,49.931423],[118.741866,49.946441],[118.929111,49.989545],[119.092335,49.986082],[119.163168,50.027613],[119.190269,50.087538],[119.243856,50.078324],[119.360269,50.196441],[119.319001,50.220948],[119.358421,50.358949],[119.259871,50.345205],[119.125596,50.389095],[119.250631,50.448568],[119.28266,50.604899],[119.361501,50.632611],[119.383674,50.682301],[119.450196,50.695569],[119.506862,50.764118],[119.491464,50.879026],[119.633746,51.010218],[119.726137,51.050105],[119.788346,51.16656],[119.760629,51.21231],[119.944795,51.366848],[120.002693,51.459396],[119.985447,51.505227],[120.051968,51.553245],[120.035338,51.586343],[120.087077,51.678076],[120.172693,51.679931],[120.363634,51.789982],[120.398742,51.832153],[120.480046,51.855072],[120.481278,51.885735],[120.656821,51.92634],[120.719031,52.014438],[120.68577,52.036896],[120.747364,52.076996],[120.786784,52.157824],[120.7449,52.206984],[120.755371,52.258287],[120.627256,52.324161],[120.62356,52.361081],[120.688234,52.427531],[120.689466,52.516098],[120.727654,52.529568],[120.467728,52.644076],[120.40367,52.617929],[120.287873,52.623378],[120.196714,52.579043],[120.049505,52.598672],[120.035338,52.646255],[120.071063,52.706113],[120.038418,52.780006],[120.222584,52.842934],[120.350699,52.906131],[120.455409,53.011376],[120.549647,53.076125],[120.643886,53.106667],[120.736277,53.204615],[120.840371,53.24724],[120.882871,53.294472],[121.129246,53.277303],[121.285695,53.291253],[121.347289,53.327003],[121.499426,53.337008],[121.612143,53.260484],[121.679896,53.240437],[121.665114,53.170556],[121.754425,53.146519],[121.817867,53.061744],[121.785838,53.018575],[121.715621,52.998054],[121.66265,52.912626],[121.610295,52.892416],[121.591201,52.824499],[121.476636,52.772043],[121.373158,52.683268],[121.182217,52.599399],[121.325731,52.572498],[121.416274,52.499346],[121.519136,52.456709],[121.63986,52.444311],[121.714389,52.317944],[121.841272,52.282818],[121.94783,52.298555],[122.091344,52.427167],[122.168952,52.513549],[122.207756,52.469103],[122.310618,52.475299],[122.342031,52.41403],[122.484313,52.341711],[122.478153,52.29636],[122.585943,52.266344],[122.76087,52.26671],[122.769493,52.179843],[122.629059,52.136529],[122.683877,51.974649],[122.726377,51.978704],[122.706051,51.890166],[122.771957,51.779619],[122.749167,51.746661],[122.85634,51.606786],[122.854492,51.477659],[122.903768,51.415384],[122.965977,51.387015],[122.978296,51.331346],[123.058984,51.321999],[123.294273,51.25427],[123.465504,51.287212],[123.736517,50.974064],[123.825829,50.813669],[124.076516,50.564249],[123.983509,50.510249],[124.005067,50.434469],[123.920067,50.37307],[123.800575,50.455806],[123.777785,50.344441],[123.870792,50.270307],[123.878799,50.208696],[123.953944,50.186865],[124.007531,50.219417],[124.061733,50.199122],[124.103001,50.238555],[124.189233,50.216737],[124.278544,50.231284],[124.32474,50.178436],[124.368471,50.258068],[124.36416,50.360857],[124.43992,50.388713],[124.499666,50.397868],[124.504594,50.342532],[124.578507,50.294777],[124.619774,50.229753],[124.575427,50.179585],[124.508289,50.162723],[124.604992,50.070644],[124.680752,50.031841],[124.650571,49.99493],[124.66597,49.868217],[124.730644,49.817671],[124.74173,49.761274],[124.824266,49.849703],[124.972708,49.834654],[124.935135,49.866675],[124.977635,49.900601],[125.095896,49.795661],[125.177815,49.829637],[125.222779,49.799137],[125.219699,49.669199],[125.132236,49.671909],[125.234482,49.592077],[125.228323,49.486857],[125.264047,49.461585],[125.261583,49.318656],[125.219699,49.188999],[125.117453,49.126],[124.906802,49.183915],[124.807636,49.108769],[124.808252,49.020563],[124.709086,48.920406],[124.697383,48.841711],[124.653651,48.777089],[124.579122,48.596574],[124.520608,48.556196],[124.555717,48.467805],[124.507674,48.445584],[124.51876,48.378068],[124.579738,48.304095],[124.578507,48.251931],[124.463942,48.097518],[124.467637,48.178972],[124.418978,48.181765],[124.404812,48.264679],[124.317964,48.347856],[124.314269,48.503894],[124.25945,48.536391],[124.25945,48.536391],[124.07898,48.436058],[123.873256,48.281006],[123.746373,48.19772],[123.537569,48.021938],[123.300432,47.953861],[123.228983,47.840735],[123.166158,47.783677],[122.855108,47.677432],[122.763333,47.613338],[122.59395,47.547551],[122.543443,47.495427],[122.507103,47.401555],[122.418407,47.350503],[122.556378,47.17265],[122.679566,47.094092],[122.845869,47.046819],[122.778116,47.00277],[122.796594,46.938261],[122.895144,46.960317],[122.906847,46.807372],[123.026339,46.718841],[123.163694,46.740167],[123.221592,46.850355],[123.309056,46.86222],[123.374345,46.837668],[123.404526,46.935401],[123.52833,46.944797],[123.483366,46.845854],[123.562823,46.825797],[123.576989,46.891259],[123.625648,46.84749],[123.631808,46.728685],[123.603475,46.689299],[123.366338,46.677805],[123.276411,46.660972],[123.228368,46.58824],[123.18094,46.614138],[123.04605,46.617426],[123.002318,46.574257],[123.011557,46.43506],[123.178476,46.247944],[123.102716,46.172172],[123.112571,46.129894],[123.04605,46.10003],[122.792898,46.073056],[122.828623,45.912185],[122.752246,45.834701],[122.792283,45.766291],[122.741775,45.70532],[122.671558,45.700723],[122.640761,45.7713],[122.555146,45.821359],[122.504639,45.787157],[122.496016,45.858041],[122.446125,45.916764],[122.362357,45.917597],[122.372828,45.855957],[122.258879,45.794666],[122.200981,45.85679],[122.091344,45.881787],[122.040221,45.95879],[121.84312,46.02447],[121.762432,45.999538],[121.809243,45.96087],[121.817251,45.875539],[121.754425,45.795084],[121.644172,45.752516],[121.713773,45.701977],[121.811091,45.686932],[121.867142,45.719942],[121.949062,45.711169],[122.003264,45.623363],[121.966308,45.596157],[122.02359,45.490137],[122.163408,45.443979],[122.147394,45.295598],[122.239169,45.276234],[122.22993,45.20672],[122.143082,45.183108],[122.109822,45.142186],[122.119677,45.068705],[122.074713,45.006553],[122.079025,44.914258],[122.04946,44.912987],[122.114749,44.776386],[122.161561,44.728371],[122.103046,44.673935],[122.13138,44.577697],[122.196053,44.559794],[122.228082,44.480017],[122.28598,44.477883],[122.291524,44.310291],[122.271198,44.255463],[122.319241,44.232745],[122.483697,44.237032],[122.676486,44.28631],[122.76087,44.369772],[122.85634,44.398422],[123.025108,44.492823],[123.125506,44.509466],[123.128585,44.366778],[123.196955,44.34496],[123.323838,44.179991],[123.386664,44.161966],[123.32815,44.083795],[123.332461,44.028326],[123.400831,43.979264],[123.52525,43.695718],[123.5117,43.59267],[123.439019,43.577501],[123.439019,43.577501],[123.304744,43.551055],[123.315831,43.49205],[123.382968,43.46904],[123.419925,43.409955],[123.486446,43.445587],[123.608402,43.366474],[123.703873,43.370824]]],[[[124.076516,50.564249],[123.825829,50.813669],[123.736517,50.974064],[123.465504,51.287212],[123.661989,51.319008],[123.711264,51.398216],[123.842459,51.367595],[123.926227,51.300681],[124.071588,51.320878],[124.128255,51.347419],[124.239124,51.344429],[124.271769,51.308162],[124.406659,51.271867],[124.43684,51.353772],[124.490427,51.380294],[124.58713,51.363486],[124.62655,51.327608],[124.693687,51.332842],[124.783614,51.392243],[124.864302,51.379547],[124.942527,51.447465],[124.928976,51.498523],[125.047236,51.529801],[125.098975,51.658408],[125.130388,51.635389],[125.35151,51.623876],[125.567089,51.455668],[125.567089,51.455668],[125.595422,51.416877],[125.595422,51.416877],[125.597886,51.414638],[125.597886,51.414638],[125.600966,51.413518],[125.600966,51.413518],[125.623756,51.387762],[125.623756,51.387762],[125.63977,51.372451],[125.63977,51.372451],[125.668103,51.347419],[125.668103,51.347419],[125.670567,51.34555],[125.670567,51.34555],[125.743248,51.275984],[125.743248,51.275984],[125.756798,51.227675],[125.840566,51.220555],[125.878138,51.159431],[126.059225,51.043711],[126.033971,51.010971],[126.073391,50.963514],[125.890457,50.805729],[125.758646,50.746706],[125.825784,50.703906],[125.787595,50.677373],[125.829479,50.561589],[125.740784,50.523184],[125.632379,50.443996],[125.590495,50.452378],[125.519662,50.315795],[125.466075,50.297452],[125.448829,50.216354],[125.334264,50.165023],[125.258504,50.103659],[125.294228,50.029151],[125.231402,49.957606],[125.239409,49.844687],[125.177815,49.829637],[125.095896,49.795661],[124.977635,49.900601],[124.935135,49.866675],[124.972708,49.834654],[124.824266,49.849703],[124.74173,49.761274],[124.730644,49.817671],[124.66597,49.868217],[124.650571,49.99493],[124.680752,50.031841],[124.604992,50.070644],[124.508289,50.162723],[124.575427,50.179585],[124.619774,50.229753],[124.578507,50.294777],[124.504594,50.342532],[124.499666,50.397868],[124.43992,50.388713],[124.43992,50.539919],[124.322892,50.532693],[124.289015,50.553226],[124.076516,50.564249]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":210000,\"name\":\"辽宁\",\"center\":[123.429096,41.796767],\"centroid\":[122.606135,41.300702],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":5,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[119.239545,41.314696],[119.326392,41.329525],[119.30545,41.402271],[119.376283,41.422015],[119.405848,41.508548],[119.361501,41.56498],[119.415703,41.590044],[119.307914,41.657581],[119.294363,41.775935],[119.334399,41.869569],[119.324544,41.969296],[119.384906,42.089738],[119.315921,42.119037],[119.237697,42.201088],[119.284508,42.265325],[119.415703,42.309588],[119.502551,42.387857],[119.572152,42.359568],[119.541971,42.292329],[119.744615,42.211725],[119.846861,42.21527],[119.837622,42.135455],[119.989759,41.898969],[120.051968,41.775935],[120.035954,41.708075],[120.096316,41.696907],[120.188707,41.848179],[120.373489,41.994648],[120.456641,42.016433],[120.466496,42.105277],[120.58414,42.167394],[120.624792,42.154532],[120.745516,42.223689],[120.79048,42.218372],[120.933378,42.279493],[121.068884,42.252483],[121.285079,42.387857],[121.304789,42.435567],[121.304789,42.435567],[121.388557,42.475297],[121.604752,42.494271],[121.66573,42.437333],[121.904714,42.569666],[121.940438,42.688525],[122.071634,42.711391],[122.20406,42.683687],[122.203445,42.731171],[122.338951,42.670051],[122.395002,42.683687],[122.457212,42.774227],[122.374676,42.774667],[122.35127,42.830419],[122.436886,42.843142],[122.563769,42.826031],[122.624747,42.773349],[122.732536,42.786524],[122.786123,42.756218],[122.786123,42.756218],[122.831087,42.722381],[122.887137,42.770275],[123.058368,42.768957],[123.227752,42.831735],[123.169853,42.859811],[123.18402,42.926002],[123.259165,42.992997],[123.474743,43.04243],[123.515395,43.027561],[123.515395,43.027561],[123.572678,43.0035],[123.666916,43.179585],[123.664453,43.264606],[123.703873,43.370824],[123.710032,43.417344],[123.791952,43.491182],[123.87264,43.451234],[123.84985,43.415606],[123.896046,43.361689],[124.032784,43.280724],[124.098074,43.29292],[124.114704,43.247175],[124.226805,43.241945],[124.226805,43.241945],[124.282856,43.230176],[124.284088,43.166058],[124.425754,43.076092],[124.333363,42.997373],[124.422674,42.975927],[124.431913,42.930821],[124.369087,42.882613],[124.435609,42.88086],[124.454703,42.823836],[124.514449,42.873406],[124.514449,42.873406],[124.539086,42.867266],[124.659195,42.972862],[124.686912,43.051176],[124.785462,43.117161],[124.896331,43.129826],[124.840897,43.032372],[124.869846,42.988183],[124.859375,42.822959],[124.897563,42.787841],[124.975171,42.802768],[124.996113,42.745234],[124.996113,42.745234],[124.968396,42.72282],[125.038613,42.615476],[125.097127,42.62252],[125.068794,42.499564],[125.186439,42.428059],[125.175352,42.308261],[125.29854,42.290116],[125.305931,42.146103],[125.353358,42.178923],[125.490097,42.136343],[125.369989,42.003096],[125.291764,41.958618],[125.299156,41.872243],[125.299156,41.872243],[125.297308,41.861995],[125.297308,41.861995],[125.29238,41.83971],[125.29238,41.83971],[125.29238,41.83971],[125.319482,41.777273],[125.319482,41.777273],[125.323793,41.771026],[125.323793,41.771026],[125.325025,41.670097],[125.450677,41.674119],[125.450061,41.598099],[125.534444,41.478073],[125.547995,41.401373],[125.637306,41.34435],[125.646545,41.264344],[125.758646,41.232404],[125.737088,41.179737],[125.791291,41.167577],[125.712451,41.095471],[125.726617,41.055328],[125.674879,40.974516],[125.589263,40.931135],[125.707523,40.866915],[125.544915,40.72922],[125.49564,40.728767],[125.422343,40.635297],[125.279445,40.655273],[125.018287,40.53624],[124.985642,40.475279],[124.897563,40.47892],[124.851368,40.427017],[124.74481,40.375074],[124.718325,40.319441],[124.62039,40.290695],[124.388797,40.113384],[124.38079,40.108808],[124.336442,40.049751],[124.372167,40.021348],[124.239124,39.927352],[124.173218,39.841496],[124.144885,39.745413],[124.103001,39.823577],[124.002603,39.800137],[123.828908,39.831389],[123.697097,39.807032],[123.665684,39.831389],[123.612714,39.77485],[123.536337,39.788644],[123.392823,39.723787],[123.383584,39.766572],[123.274563,39.753693],[123.253005,39.689724],[123.010941,39.655184],[122.972753,39.594813],[122.85634,39.606799],[122.808913,39.559764],[122.581631,39.464211],[122.489856,39.403673],[122.412864,39.411995],[122.274893,39.322257],[122.242865,39.267618],[122.117213,39.213863],[122.167104,39.158676],[122.048228,39.101123],[121.963228,39.030046],[121.864062,39.037018],[121.920728,38.969598],[121.863446,38.942611],[121.790149,39.022609],[121.671273,39.010057],[121.655874,38.9468],[121.719316,38.92027],[121.708845,38.872772],[121.565331,38.875101],[121.509897,38.817784],[121.359608,38.822446],[121.259825,38.786543],[121.198848,38.721686],[121.13479,38.72402],[121.128014,38.958897],[121.204391,38.941215],[121.341129,38.980761],[121.370695,39.060251],[121.508049,39.034229],[121.68236,39.117837],[121.604136,39.166098],[121.598592,39.279198],[121.668193,39.276419],[121.723628,39.367603],[121.621382,39.32596],[121.474788,39.296332],[121.432904,39.357426],[121.246891,39.421702],[121.304173,39.481762],[121.224717,39.51962],[121.297398,39.605877],[121.450151,39.625235],[121.501274,39.706758],[121.45939,39.747713],[121.530223,39.851603],[121.626925,39.882831],[121.699606,39.937445],[121.76428,39.933316],[121.82341,40.036467],[121.884388,40.053415],[122.01004,40.149067],[121.940438,40.2423],[122.02667,40.245041],[122.040221,40.322178],[122.198517,40.382367],[122.245944,40.519868],[122.133843,40.614408],[122.148626,40.671612],[122.06609,40.648464],[121.951525,40.680687],[121.934279,40.798103],[121.852359,40.821199],[121.816019,40.894962],[121.682976,40.829802],[121.526527,40.851529],[121.499426,40.880035],[121.335586,40.900842],[121.23642,40.851077],[121.126167,40.869177],[121.086747,40.798103],[120.991276,40.744181],[121.033776,40.70972],[120.8299,40.671158],[120.822509,40.593966],[120.72827,40.539423],[120.674683,40.471183],[120.616169,40.457071],[120.599539,40.355471],[120.537329,40.325372],[120.523778,40.256914],[120.465264,40.178787],[120.371641,40.174673],[120.273091,40.127111],[119.955882,40.046544],[119.913998,39.988349],[119.854252,39.988349],[119.845629,40.000726],[119.845629,40.000726],[119.848093,40.020432],[119.848093,40.020432],[119.817296,40.049751],[119.817296,40.049751],[119.780339,40.047002],[119.780339,40.047002],[119.779723,40.049293],[119.779723,40.049293],[119.736608,40.10469],[119.745847,40.208038],[119.625123,40.224029],[119.642369,40.291151],[119.586934,40.37553],[119.598637,40.465266],[119.571536,40.540333],[119.30237,40.530329],[119.162552,40.599872],[119.184726,40.680233],[119.054147,40.664804],[118.911249,40.776811],[118.849039,40.800821],[118.90201,40.960963],[118.977154,40.959155],[118.977154,40.959155],[119.013495,41.007485],[118.951901,41.01832],[118.96422,41.079236],[119.037516,41.067509],[119.126212,41.138744],[119.2494,41.279634],[119.239545,41.314696]]],[[[122.969057,39.513158],[122.978912,39.561609],[123.036194,39.533004],[122.969057,39.513158]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":220000,\"name\":\"吉林\",\"center\":[125.3245,43.886841],\"centroid\":[126.171246,43.703944],\"childrenNum\":9,\"level\":\"province\",\"subFeatureIndex\":6,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[125.707523,40.866915],[125.589263,40.931135],[125.674879,40.974516],[125.726617,41.055328],[125.712451,41.095471],[125.791291,41.167577],[125.737088,41.179737],[125.758646,41.232404],[125.646545,41.264344],[125.637306,41.34435],[125.547995,41.401373],[125.534444,41.478073],[125.450061,41.598099],[125.450677,41.674119],[125.325025,41.670097],[125.323793,41.771026],[125.323793,41.771026],[125.319482,41.777273],[125.319482,41.777273],[125.29238,41.83971],[125.29238,41.83971],[125.29238,41.83971],[125.297308,41.861995],[125.297308,41.861995],[125.299156,41.872243],[125.299156,41.872243],[125.291764,41.958618],[125.369989,42.003096],[125.490097,42.136343],[125.353358,42.178923],[125.305931,42.146103],[125.29854,42.290116],[125.175352,42.308261],[125.186439,42.428059],[125.068794,42.499564],[125.097127,42.62252],[125.038613,42.615476],[124.968396,42.72282],[124.996113,42.745234],[124.996113,42.745234],[124.975171,42.802768],[124.897563,42.787841],[124.859375,42.822959],[124.869846,42.988183],[124.840897,43.032372],[124.896331,43.129826],[124.785462,43.117161],[124.686912,43.051176],[124.659195,42.972862],[124.539086,42.867266],[124.514449,42.873406],[124.514449,42.873406],[124.454703,42.823836],[124.435609,42.88086],[124.369087,42.882613],[124.431913,42.930821],[124.422674,42.975927],[124.333363,42.997373],[124.425754,43.076092],[124.284088,43.166058],[124.282856,43.230176],[124.226805,43.241945],[124.226805,43.241945],[124.114704,43.247175],[124.098074,43.29292],[124.032784,43.280724],[123.896046,43.361689],[123.84985,43.415606],[123.87264,43.451234],[123.791952,43.491182],[123.710032,43.417344],[123.703873,43.370824],[123.608402,43.366474],[123.486446,43.445587],[123.419925,43.409955],[123.382968,43.46904],[123.315831,43.49205],[123.304744,43.551055],[123.439019,43.577501],[123.439019,43.577501],[123.5117,43.59267],[123.52525,43.695718],[123.400831,43.979264],[123.332461,44.028326],[123.32815,44.083795],[123.386664,44.161966],[123.323838,44.179991],[123.196955,44.34496],[123.128585,44.366778],[123.125506,44.509466],[123.025108,44.492823],[122.85634,44.398422],[122.76087,44.369772],[122.676486,44.28631],[122.483697,44.237032],[122.319241,44.232745],[122.271198,44.255463],[122.291524,44.310291],[122.28598,44.477883],[122.228082,44.480017],[122.196053,44.559794],[122.13138,44.577697],[122.103046,44.673935],[122.161561,44.728371],[122.114749,44.776386],[122.04946,44.912987],[122.079025,44.914258],[122.074713,45.006553],[122.119677,45.068705],[122.109822,45.142186],[122.143082,45.183108],[122.22993,45.20672],[122.239169,45.276234],[122.147394,45.295598],[122.163408,45.443979],[122.02359,45.490137],[121.966308,45.596157],[122.003264,45.623363],[121.949062,45.711169],[121.867142,45.719942],[121.811091,45.686932],[121.713773,45.701977],[121.644172,45.752516],[121.754425,45.795084],[121.817251,45.875539],[121.809243,45.96087],[121.762432,45.999538],[121.84312,46.02447],[122.040221,45.95879],[122.091344,45.881787],[122.200981,45.85679],[122.258879,45.794666],[122.372828,45.855957],[122.362357,45.917597],[122.446125,45.916764],[122.496016,45.858041],[122.504639,45.787157],[122.555146,45.821359],[122.640761,45.7713],[122.671558,45.700723],[122.741775,45.70532],[122.792283,45.766291],[122.752246,45.834701],[122.828623,45.912185],[122.792898,46.073056],[123.04605,46.10003],[123.112571,46.129894],[123.102716,46.172172],[123.178476,46.247944],[123.248078,46.273178],[123.319527,46.253736],[123.319527,46.253736],[123.373113,46.223112],[123.498765,46.259528],[123.565902,46.22601],[123.610866,46.252909],[123.779633,46.264078],[123.896046,46.303774],[123.982893,46.22601],[123.99398,46.101275],[124.040176,46.019484],[123.970574,45.971267],[123.996444,45.907189],[124.061118,45.886369],[124.064813,45.797586],[124.009379,45.78215],[124.13811,45.68735],[124.129487,45.637589],[124.273001,45.584014],[124.287783,45.539191],[124.354305,45.546734],[124.398652,45.44062],[124.480572,45.456151],[124.544014,45.412066],[124.625318,45.437262],[124.886476,45.442719],[124.923433,45.541286],[124.961005,45.49517],[125.025678,45.493492],[125.06941,45.384757],[125.248649,45.417526],[125.347815,45.395262],[125.398322,45.416686],[125.424807,45.485523],[125.497488,45.469161],[125.628067,45.522006],[125.687813,45.51404],[125.716146,45.421725],[125.697052,45.349447],[125.760494,45.291389],[125.915095,45.196602],[126.166398,45.133323],[126.321615,45.178891],[126.428172,45.2358],[126.567375,45.252651],[126.831613,45.146406],[126.96404,45.132056],[126.968351,45.074621],[127.085995,44.944757],[127.021938,44.899002],[126.984366,44.823936],[127.037336,44.72157],[127.049039,44.567041],[127.094003,44.615189],[127.182082,44.644144],[127.392733,44.632223],[127.557189,44.575566],[127.536247,44.522266],[127.463566,44.484713],[127.50853,44.437312],[127.483892,44.401842],[127.483892,44.401842],[127.623095,44.277743],[127.591066,44.227601],[127.681609,44.167116],[127.724109,44.196723],[127.729036,44.098836],[127.862079,44.063162],[128.059796,44.110007],[128.089977,44.132342],[128.101679,44.290593],[128.049941,44.349239],[128.190375,44.367206],[128.211317,44.431757],[128.373309,44.51416],[128.46262,44.433894],[128.481714,44.375332],[128.450301,44.203157],[128.574721,44.047682],[128.584576,43.990887],[128.644938,43.936193],[128.636315,43.891366],[128.723778,43.894816],[128.760734,43.857724],[128.719467,43.816724],[128.877763,43.540213],[128.949212,43.55409],[129.014501,43.523295],[129.230696,43.59527],[129.211602,43.784336],[129.406855,43.819314],[129.467833,43.874548],[129.742542,43.875841],[129.784426,43.964623],[129.869425,44.005521],[129.869425,44.005521],[129.880512,44.000357],[129.880512,44.000357],[129.98091,44.014128],[130.017251,43.962039],[130.027106,43.851684],[130.079461,43.835285],[130.079461,43.835285],[130.189098,43.940501],[130.260547,43.948256],[130.353554,44.050262],[130.338155,43.949979],[130.338155,43.949979],[130.383119,43.906025],[130.380039,43.783904],[130.423771,43.742853],[130.4133,43.652009],[130.488444,43.655905],[130.823515,43.502901],[130.841378,43.454274],[130.907283,43.434291],[131.026775,43.508542],[131.134565,43.428643],[131.134565,43.428643],[131.294093,43.469909],[131.304564,43.502033],[131.314419,43.392567],[131.275615,43.369084],[131.255289,43.265041],[131.206014,43.23715],[131.218332,43.146853],[131.171521,43.069536],[131.102536,43.021],[131.151195,42.968485],[131.114855,42.915048],[131.034167,42.929069],[131.045869,42.866828],[130.949167,42.876913],[130.890653,42.852793],[130.801957,42.879544],[130.784095,42.842265],[130.666451,42.847968],[130.40714,42.731611],[130.464423,42.688525],[130.586995,42.67621],[130.633806,42.603586],[130.570364,42.557327],[130.558661,42.496035],[130.482285,42.626483],[130.388046,42.603145],[130.242069,42.738643],[130.265474,42.904092],[130.10225,42.922935],[130.144134,42.976365],[129.994461,42.980304],[129.98707,42.977678],[129.939642,43.01225],[129.899606,43.002187],[129.85957,42.966295],[129.858338,42.964544],[129.839244,42.879983],[129.835549,42.866828],[129.821382,42.854109],[129.816454,42.851039],[129.7641,42.716227],[129.764716,42.713149],[129.776418,42.69908],[129.794281,42.684127],[129.741926,42.580681],[129.748701,42.470884],[129.704354,42.427176],[129.612579,42.436892],[129.601492,42.42276],[129.546057,42.361336],[129.452434,42.440866],[129.344029,42.451462],[129.239935,42.36841],[129.231928,42.36001],[129.260261,42.335689],[129.183269,42.262225],[129.215914,42.20818],[129.120443,42.142111],[128.954755,42.083966],[128.930734,42.014211],[128.737945,42.050209],[128.70222,42.020434],[128.60675,42.030212],[128.569177,41.996426],[128.466316,42.020878],[128.090593,42.022656],[128.033926,42.000428],[128.106607,41.950164],[128.112766,41.79378],[128.171897,41.713882],[128.278454,41.658922],[128.317258,41.593177],[128.242114,41.501827],[128.203309,41.411246],[128.113998,41.364561],[127.932296,41.446686],[127.850376,41.422912],[127.636645,41.41349],[127.547334,41.477176],[127.40998,41.463278],[127.294183,41.48659],[127.283096,41.513925],[127.115561,41.540353],[127.179618,41.599888],[127.039184,41.671884],[127.051503,41.744693],[126.943714,41.772365],[126.931395,41.812959],[126.808207,41.748264],[126.798968,41.697354],[126.726903,41.751389],[126.688099,41.674119],[126.608643,41.670543],[126.569838,41.621809],[126.497158,41.406758],[126.539041,41.366806],[126.435564,41.351088],[126.322847,41.231054],[126.293282,41.17073],[126.157775,41.091413],[126.031507,40.927067],[125.959442,40.881845],[125.875059,40.90853],[125.817161,40.866915],[125.785132,40.895867],[125.707523,40.866915]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":230000,\"name\":\"黑龙江\",\"center\":[126.642464,45.756967],\"centroid\":[127.693002,48.040469],\"childrenNum\":13,\"level\":\"province\",\"subFeatureIndex\":7,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[123.319527,46.253736],[123.319527,46.253736],[123.248078,46.273178],[123.178476,46.247944],[123.011557,46.43506],[123.002318,46.574257],[123.04605,46.617426],[123.18094,46.614138],[123.228368,46.58824],[123.276411,46.660972],[123.366338,46.677805],[123.603475,46.689299],[123.631808,46.728685],[123.625648,46.84749],[123.576989,46.891259],[123.562823,46.825797],[123.483366,46.845854],[123.52833,46.944797],[123.404526,46.935401],[123.374345,46.837668],[123.309056,46.86222],[123.221592,46.850355],[123.163694,46.740167],[123.026339,46.718841],[122.906847,46.807372],[122.895144,46.960317],[122.796594,46.938261],[122.778116,47.00277],[122.845869,47.046819],[122.679566,47.094092],[122.556378,47.17265],[122.418407,47.350503],[122.507103,47.401555],[122.543443,47.495427],[122.59395,47.547551],[122.763333,47.613338],[122.855108,47.677432],[123.166158,47.783677],[123.228983,47.840735],[123.300432,47.953861],[123.537569,48.021938],[123.746373,48.19772],[123.873256,48.281006],[124.07898,48.436058],[124.25945,48.536391],[124.25945,48.536391],[124.314269,48.503894],[124.317964,48.347856],[124.404812,48.264679],[124.418978,48.181765],[124.467637,48.178972],[124.463942,48.097518],[124.578507,48.251931],[124.579738,48.304095],[124.51876,48.378068],[124.507674,48.445584],[124.555717,48.467805],[124.520608,48.556196],[124.579122,48.596574],[124.653651,48.777089],[124.697383,48.841711],[124.709086,48.920406],[124.808252,49.020563],[124.807636,49.108769],[124.906802,49.183915],[125.117453,49.126],[125.219699,49.188999],[125.261583,49.318656],[125.264047,49.461585],[125.228323,49.486857],[125.234482,49.592077],[125.132236,49.671909],[125.219699,49.669199],[125.222779,49.799137],[125.177815,49.829637],[125.239409,49.844687],[125.231402,49.957606],[125.294228,50.029151],[125.258504,50.103659],[125.334264,50.165023],[125.448829,50.216354],[125.466075,50.297452],[125.519662,50.315795],[125.590495,50.452378],[125.632379,50.443996],[125.740784,50.523184],[125.829479,50.561589],[125.787595,50.677373],[125.825784,50.703906],[125.758646,50.746706],[125.890457,50.805729],[126.073391,50.963514],[126.033971,51.010971],[126.059225,51.043711],[125.878138,51.159431],[125.840566,51.220555],[125.756798,51.227675],[125.743248,51.275984],[125.743248,51.275984],[125.670567,51.34555],[125.670567,51.34555],[125.668103,51.347419],[125.668103,51.347419],[125.63977,51.372451],[125.63977,51.372451],[125.623756,51.387762],[125.623756,51.387762],[125.600966,51.413518],[125.600966,51.413518],[125.597886,51.414638],[125.597886,51.414638],[125.595422,51.416877],[125.595422,51.416877],[125.567089,51.455668],[125.567089,51.455668],[125.35151,51.623876],[125.130388,51.635389],[125.098975,51.658408],[125.047236,51.529801],[124.928976,51.498523],[124.942527,51.447465],[124.864302,51.379547],[124.783614,51.392243],[124.693687,51.332842],[124.62655,51.327608],[124.58713,51.363486],[124.490427,51.380294],[124.43684,51.353772],[124.406659,51.271867],[124.271769,51.308162],[124.239124,51.344429],[124.128255,51.347419],[124.071588,51.320878],[123.926227,51.300681],[123.842459,51.367595],[123.711264,51.398216],[123.661989,51.319008],[123.465504,51.287212],[123.294273,51.25427],[123.058984,51.321999],[122.978296,51.331346],[122.965977,51.387015],[122.903768,51.415384],[122.854492,51.477659],[122.85634,51.606786],[122.749167,51.746661],[122.771957,51.779619],[122.706051,51.890166],[122.726377,51.978704],[122.683877,51.974649],[122.629059,52.136529],[122.769493,52.179843],[122.76087,52.26671],[122.585943,52.266344],[122.478153,52.29636],[122.484313,52.341711],[122.342031,52.41403],[122.310618,52.475299],[122.207756,52.469103],[122.168952,52.513549],[122.091344,52.427167],[121.94783,52.298555],[121.841272,52.282818],[121.714389,52.317944],[121.63986,52.444311],[121.519136,52.456709],[121.416274,52.499346],[121.325731,52.572498],[121.182217,52.599399],[121.373158,52.683268],[121.476636,52.772043],[121.591201,52.824499],[121.610295,52.892416],[121.66265,52.912626],[121.715621,52.998054],[121.785838,53.018575],[121.817867,53.061744],[121.754425,53.146519],[121.665114,53.170556],[121.679896,53.240437],[121.612143,53.260484],[121.499426,53.337008],[121.596128,53.352368],[121.697758,53.392705],[121.754425,53.389494],[121.875765,53.426587],[122.111054,53.426944],[122.161561,53.468635],[122.227466,53.461868],[122.350038,53.50566],[122.435038,53.444766],[122.608117,53.46543],[122.894528,53.462936],[123.052209,53.506727],[123.137209,53.498186],[123.274563,53.563269],[123.454417,53.536608],[123.510468,53.509218],[123.517243,53.558293],[123.569598,53.505304],[123.58746,53.546919],[123.668764,53.533763],[123.698329,53.498542],[123.865249,53.489644],[124.058038,53.404121],[124.125791,53.348082],[124.239124,53.379501],[124.327819,53.332006],[124.375863,53.259053],[124.435609,53.223962],[124.563108,53.201389],[124.683832,53.206406],[124.734339,53.146519],[124.832889,53.145083],[124.87231,53.099123],[124.887708,53.164458],[124.970244,53.194221],[125.195062,53.198522],[125.315786,53.145083],[125.503647,53.095171],[125.530749,53.050956],[125.613901,53.083313],[125.684118,53.008136],[125.742632,52.993733],[125.737704,52.945087],[125.665023,52.913348],[125.678574,52.860999],[125.772197,52.89783],[125.855349,52.866418],[125.985312,52.758648],[126.058609,52.798098],[126.115275,52.757924],[126.045058,52.738366],[126.061688,52.673473],[125.995783,52.675287],[125.968682,52.630279],[126.030891,52.576135],[126.066616,52.60376],[126.213209,52.5252],[126.205202,52.466187],[126.266796,52.475664],[126.353644,52.389207],[126.327774,52.310628],[126.4331,52.298555],[126.300673,52.220915],[126.34502,52.192315],[126.499005,52.160394],[126.563679,52.119266],[126.514404,52.037264],[126.450962,52.027693],[126.462665,51.948473],[126.510092,51.922281],[126.622809,51.777397],[126.734294,51.711454],[126.741069,51.642073],[126.69549,51.578536],[126.837156,51.536128],[126.784185,51.44821],[126.908605,51.407174],[126.930163,51.359376],[126.837156,51.345177],[126.841468,51.258763],[126.92154,51.259512],[126.887047,51.321999],[126.978822,51.329477],[126.976358,51.291702],[126.899982,51.200689],[126.922772,51.061764],[127.143894,50.91035],[127.236285,50.781524],[127.295415,50.755035],[127.294799,50.663721],[127.370559,50.581349],[127.293567,50.46571],[127.3644,50.43828],[127.332371,50.340623],[127.371791,50.296688],[127.603385,50.23932],[127.58737,50.137802],[127.501755,50.056817],[127.495595,49.994545],[127.543638,49.944131],[127.531936,49.825777],[127.563964,49.793343],[127.660051,49.77905],[127.677913,49.697846],[127.815268,49.594017],[127.897804,49.578889],[128.001281,49.592465],[128.070882,49.55677],[128.185447,49.539301],[128.287077,49.566473],[128.343128,49.545125],[128.389939,49.590138],[128.537764,49.604487],[128.715155,49.56492],[128.744104,49.594792],[128.813089,49.558323],[128.754575,49.506676],[128.792147,49.473251],[128.871604,49.492298],[129.013886,49.457307],[129.055769,49.382188],[129.143849,49.357253],[129.215298,49.398935],[129.320623,49.358422],[129.379138,49.366995],[129.390224,49.432799],[129.448739,49.441359],[129.546057,49.395041],[129.562687,49.299541],[129.604571,49.278858],[129.714209,49.296029],[129.761636,49.257384],[129.753629,49.208547],[129.847867,49.181177],[129.866962,49.114252],[129.913157,49.108377],[129.937179,49.04057],[130.020946,49.020955],[130.059135,48.978954],[130.211272,48.901137],[130.245148,48.866514],[130.471198,48.905464],[130.501995,48.86612],[130.680617,48.881074],[130.689856,48.849586],[130.622103,48.783792],[130.538335,48.612004],[130.605473,48.5942],[130.620871,48.495964],[130.767465,48.507858],[130.740363,48.425339],[130.845073,48.296533],[130.769313,48.23121],[130.765617,48.189344],[130.673842,48.128278],[130.699711,48.044344],[130.891269,47.927006],[130.961486,47.827882],[130.966413,47.732996],[131.029855,47.694752],[131.115471,47.689919],[131.273767,47.739032],[131.456085,47.747079],[131.543548,47.735813],[131.59036,47.660912],[131.695685,47.709248],[131.825649,47.677432],[131.970394,47.671388],[132.000575,47.712066],[132.086191,47.703208],[132.272205,47.718507],[132.371987,47.76518],[132.469305,47.726154],[132.570319,47.720922],[132.599268,47.792521],[132.687348,47.885293],[132.661478,47.944643],[132.723072,47.963076],[132.819159,47.937028],[132.883216,48.002325],[132.992238,48.035142],[133.041513,48.102313],[133.15423,48.137063],[133.302055,48.103112],[133.407997,48.124684],[133.536728,48.117494],[133.59709,48.194928],[133.693177,48.186951],[133.740604,48.25472],[134.0689,48.338311],[134.131109,48.335527],[134.20379,48.38244],[134.350384,48.378466],[134.501905,48.418986],[134.696542,48.407072],[134.820961,48.376081],[134.927519,48.451537],[135.09567,48.437646],[135.082736,48.396346],[134.864077,48.332345],[134.679295,48.256314],[134.67252,48.170593],[134.632484,48.099516],[134.551796,48.032742],[134.607846,47.909362],[134.660201,47.900538],[134.678679,47.819446],[134.772918,47.763572],[134.779694,47.716091],[134.684223,47.631889],[134.685455,47.603253],[134.576434,47.519273],[134.568426,47.478445],[134.493898,47.446894],[134.339297,47.43961],[134.177305,47.32658],[134.156979,47.248656],[134.230276,47.182411],[134.222268,47.105496],[134.142812,47.093277],[134.042414,46.886761],[134.011001,46.637971],[133.919842,46.596052],[133.852089,46.449903],[133.950023,46.394634],[133.876726,46.362438],[133.922922,46.330635],[133.904444,46.25084],[133.83977,46.202825],[133.706111,46.163056],[133.745531,46.075547],[133.676546,45.942982],[133.616184,45.943398],[133.576148,45.870957],[133.51209,45.886785],[133.470822,45.838035],[133.484373,45.738737],[133.445569,45.70532],[133.491764,45.672301],[133.371656,45.576895],[133.21028,45.516975],[133.141295,45.427605],[133.095715,45.246753],[133.138215,45.178469],[133.103107,45.107147],[132.945426,45.020512],[132.867202,45.061944],[132.394161,45.163706],[132.025829,45.250545],[131.93159,45.288442],[131.917423,45.339354],[131.82996,45.31159],[131.79362,45.211778],[131.721555,45.234536],[131.650722,45.159909],[131.695685,45.132056],[131.632244,45.074621],[131.484418,44.995553],[131.464708,44.963388],[131.355687,44.98963],[131.274999,44.919766],[131.16105,44.948145],[131.090217,44.924426],[131.07913,44.881623],[130.967029,44.854059],[131.016304,44.789551],[131.064348,44.787003],[131.111775,44.71009],[131.310723,44.046392],[131.263912,44.030047],[131.267608,43.938778],[131.211557,43.826221],[131.244818,43.604369],[131.20047,43.531971],[131.304564,43.502033],[131.294093,43.469909],[131.134565,43.428643],[131.134565,43.428643],[131.026775,43.508542],[130.907283,43.434291],[130.841378,43.454274],[130.823515,43.502901],[130.488444,43.655905],[130.4133,43.652009],[130.423771,43.742853],[130.380039,43.783904],[130.383119,43.906025],[130.338155,43.949979],[130.338155,43.949979],[130.353554,44.050262],[130.260547,43.948256],[130.189098,43.940501],[130.079461,43.835285],[130.079461,43.835285],[130.027106,43.851684],[130.017251,43.962039],[129.98091,44.014128],[129.880512,44.000357],[129.880512,44.000357],[129.869425,44.005521],[129.869425,44.005521],[129.784426,43.964623],[129.742542,43.875841],[129.467833,43.874548],[129.406855,43.819314],[129.211602,43.784336],[129.230696,43.59527],[129.014501,43.523295],[128.949212,43.55409],[128.877763,43.540213],[128.719467,43.816724],[128.760734,43.857724],[128.723778,43.894816],[128.636315,43.891366],[128.644938,43.936193],[128.584576,43.990887],[128.574721,44.047682],[128.450301,44.203157],[128.481714,44.375332],[128.46262,44.433894],[128.373309,44.51416],[128.211317,44.431757],[128.190375,44.367206],[128.049941,44.349239],[128.101679,44.290593],[128.089977,44.132342],[128.059796,44.110007],[127.862079,44.063162],[127.729036,44.098836],[127.724109,44.196723],[127.681609,44.167116],[127.591066,44.227601],[127.623095,44.277743],[127.483892,44.401842],[127.483892,44.401842],[127.50853,44.437312],[127.463566,44.484713],[127.536247,44.522266],[127.557189,44.575566],[127.392733,44.632223],[127.182082,44.644144],[127.094003,44.615189],[127.049039,44.567041],[127.037336,44.72157],[126.984366,44.823936],[127.021938,44.899002],[127.085995,44.944757],[126.968351,45.074621],[126.96404,45.132056],[126.831613,45.146406],[126.567375,45.252651],[126.428172,45.2358],[126.321615,45.178891],[126.166398,45.133323],[125.915095,45.196602],[125.760494,45.291389],[125.697052,45.349447],[125.716146,45.421725],[125.687813,45.51404],[125.628067,45.522006],[125.497488,45.469161],[125.424807,45.485523],[125.398322,45.416686],[125.347815,45.395262],[125.248649,45.417526],[125.06941,45.384757],[125.025678,45.493492],[124.961005,45.49517],[124.923433,45.541286],[124.886476,45.442719],[124.625318,45.437262],[124.544014,45.412066],[124.480572,45.456151],[124.398652,45.44062],[124.354305,45.546734],[124.287783,45.539191],[124.273001,45.584014],[124.129487,45.637589],[124.13811,45.68735],[124.009379,45.78215],[124.064813,45.797586],[124.061118,45.886369],[123.996444,45.907189],[123.970574,45.971267],[124.040176,46.019484],[123.99398,46.101275],[123.982893,46.22601],[123.896046,46.303774],[123.779633,46.264078],[123.610866,46.252909],[123.565902,46.22601],[123.498765,46.259528],[123.373113,46.223112],[123.319527,46.253736]]],[[[124.43992,50.388713],[124.36416,50.360857],[124.368471,50.258068],[124.32474,50.178436],[124.278544,50.231284],[124.189233,50.216737],[124.103001,50.238555],[124.061733,50.199122],[124.007531,50.219417],[123.953944,50.186865],[123.878799,50.208696],[123.870792,50.270307],[123.777785,50.344441],[123.800575,50.455806],[123.920067,50.37307],[124.005067,50.434469],[123.983509,50.510249],[124.076516,50.564249],[124.289015,50.553226],[124.322892,50.532693],[124.43992,50.539919],[124.43992,50.388713]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":310000,\"name\":\"上海\",\"center\":[121.472644,31.231706],\"centroid\":[121.438732,31.072508],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":8,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[121.970004,30.789217],[121.943518,30.77688],[121.904714,30.814399],[121.601056,30.805149],[121.426129,30.730089],[121.362071,30.679673],[121.274608,30.677615],[121.217942,30.785105],[121.123087,30.778936],[121.097218,30.85704],[120.989428,30.833924],[120.991892,31.00793],[120.901349,31.017673],[120.881023,31.134513],[121.076892,31.158581],[121.063341,31.268088],[121.150188,31.275247],[121.106457,31.364697],[121.173594,31.448956],[121.25613,31.478047],[121.25613,31.478047],[121.302325,31.498966],[121.302325,31.498966],[121.343593,31.512229],[121.520984,31.394835],[121.713773,31.308992],[121.946598,31.065861],[121.990945,30.968434],[121.970004,30.789217]]],[[[121.371926,31.553028],[121.145261,31.753699],[121.200079,31.835066],[121.323267,31.86861],[121.43352,31.768452],[121.715005,31.673788],[121.974931,31.617249],[121.995873,31.493354],[121.890547,31.428537],[121.819098,31.438237],[121.547469,31.531101],[121.434136,31.59024],[121.371926,31.553028]]],[[[121.74149,31.345792],[121.509897,31.482639],[121.742106,31.407091],[121.74149,31.345792]]],[[[121.844352,31.294678],[121.792613,31.377468],[121.914569,31.343236],[121.844352,31.294678]]],[[[121.943518,31.215397],[122.008808,31.221026],[121.995873,31.160629],[121.943518,31.215397]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":320000,\"name\":\"江苏\",\"center\":[118.767413,32.041544],\"centroid\":[119.48196,32.985864],\"childrenNum\":13,\"level\":\"province\",\"subFeatureIndex\":9,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[121.974931,31.617249],[121.715005,31.673788],[121.43352,31.768452],[121.323267,31.86861],[121.200079,31.835066],[121.145261,31.753699],[121.371926,31.553028],[121.343593,31.512229],[121.302325,31.498966],[121.302325,31.498966],[121.25613,31.478047],[121.25613,31.478047],[121.173594,31.448956],[121.106457,31.364697],[121.150188,31.275247],[121.063341,31.268088],[121.076892,31.158581],[120.881023,31.134513],[120.901349,31.017673],[120.698089,30.970999],[120.713487,30.885286],[120.589068,30.854472],[120.504684,30.757858],[120.423996,30.900689],[120.35809,30.88734],[120.371025,30.948424],[120.226279,30.926356],[120.13512,30.941752],[120.001461,31.026902],[119.919542,31.170868],[119.678093,31.168308],[119.623891,31.130416],[119.460051,31.156533],[119.388602,31.194415],[119.388602,31.194415],[119.379979,31.269622],[119.267878,31.250698],[119.199508,31.293655],[119.075089,31.232282],[118.781286,31.239956],[118.728931,31.281384],[118.745561,31.37287],[118.853967,31.39841],[118.876756,31.532631],[118.873061,31.53569],[118.858278,31.624382],[118.804691,31.618268],[118.77451,31.682444],[118.736938,31.634061],[118.643931,31.65138],[118.697518,31.709935],[118.638388,31.759295],[118.552772,31.729275],[118.481939,31.778117],[118.504729,31.841674],[118.363679,31.930581],[118.400019,32.077724],[118.499801,32.1203],[118.522591,32.188178],[118.642083,32.208937],[118.69567,32.31721],[118.69259,32.463224],[118.592192,32.481396],[118.563859,32.56363],[118.719076,32.614042],[118.719076,32.614042],[118.92172,32.557074],[118.922336,32.557074],[118.92172,32.557074],[118.922336,32.557074],[118.978386,32.504106],[119.041212,32.515207],[119.084944,32.452622],[119.22045,32.57674],[119.184726,32.825465],[119.104038,32.82647],[118.995017,32.958604],[118.849039,32.956596],[118.811467,32.854622],[118.74125,32.850601],[118.756648,32.737433],[118.707373,32.720319],[118.375382,32.718809],[118.250346,32.84859],[118.2331,32.914414],[118.293462,32.947056],[118.244803,32.998256],[118.221397,33.182228],[118.038463,33.134642],[117.939297,33.262813],[117.971941,33.277821],[118.050782,33.492148],[118.108064,33.475181],[118.112376,33.617302],[118.16781,33.66313],[118.116071,33.767645],[117.901724,33.719883],[117.805638,33.736304],[117.752667,33.711422],[117.758826,33.885445],[117.715095,33.879485],[117.629479,34.028872],[117.575892,33.982744],[117.514914,34.061097],[117.410205,34.026888],[117.352922,34.089842],[117.192778,34.068532],[117.025243,34.167106],[117.04988,34.242321],[116.971656,34.279409],[116.969192,34.387613],[116.828142,34.389094],[116.774555,34.452764],[116.574991,34.488773],[116.595933,34.510469],[116.491839,34.57109],[116.429629,34.652834],[116.374195,34.640036],[116.408071,34.85095],[116.445028,34.89562],[116.677853,34.939285],[116.821983,34.929475],[116.966728,34.875497],[117.000605,34.793482],[117.088069,34.702039],[117.07575,34.637575],[117.137344,34.633144],[117.175532,34.47003],[117.242669,34.445856],[117.301184,34.557294],[117.301184,34.557294],[117.322125,34.566656],[117.322125,34.566656],[117.32151,34.566656],[117.32151,34.566656],[117.322125,34.574046],[117.322125,34.574046],[117.402813,34.569612],[117.465023,34.484827],[117.592523,34.462631],[117.684298,34.547439],[117.801942,34.51885],[117.793935,34.65185],[117.902956,34.644467],[117.951615,34.678424],[118.084042,34.655788],[118.079115,34.569612],[118.185056,34.543989],[118.132702,34.483348],[118.177665,34.453257],[118.179513,34.379218],[118.290382,34.424637],[118.404947,34.427598],[118.440671,34.527724],[118.424657,34.595228],[118.460997,34.65628],[118.601431,34.714336],[118.690127,34.678424],[118.783749,34.723188],[118.719076,34.745315],[118.772047,34.794464],[118.860742,34.94419],[118.865053,35.029974],[118.928495,35.051039],[119.114509,35.054958],[119.137915,35.09609],[119.286972,35.11518],[119.306066,35.076506],[119.238929,35.04908],[119.202588,34.890222],[119.238313,34.799378],[119.378747,34.764487],[119.459435,34.770876],[119.50871,34.729089],[119.465594,34.673012],[119.582623,34.598676],[119.781571,34.515892],[119.811752,34.48532],[119.962657,34.458684],[120.311895,34.307091],[120.367329,34.091328],[120.583524,33.668608],[120.651277,33.575937],[120.741205,33.337826],[120.821893,33.298327],[120.90566,33.030366],[120.929682,32.876232],[120.974646,32.874724],[120.966638,32.770141],[120.900733,32.72334],[120.916131,32.642261],[121.153268,32.529333],[121.352216,32.47433],[121.425513,32.430909],[121.472941,32.138034],[121.524063,32.137528],[121.759352,32.059471],[121.856055,31.95546],[121.970004,31.719096],[121.974931,31.617249]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":330000,\"name\":\"浙江\",\"center\":[120.153576,30.287459],\"centroid\":[120.109522,29.181876],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":10,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[120.461568,27.14259],[120.401206,27.211253],[120.430155,27.258601],[120.34146,27.39946],[120.26262,27.432921],[120.13512,27.420175],[120.052584,27.338886],[120.007005,27.376084],[119.843165,27.300611],[119.770484,27.305928],[119.685485,27.438762],[119.70889,27.514141],[119.630666,27.582574],[119.644217,27.663684],[119.501319,27.649905],[119.474833,27.539079],[119.376899,27.534835],[119.267878,27.421237],[119.194581,27.418582],[118.983314,27.498751],[118.903858,27.462125],[118.869365,27.54014],[118.913713,27.61651],[118.818242,27.916697],[118.730163,27.970611],[118.719076,28.063576],[118.802228,28.117416],[118.771431,28.188634],[118.802228,28.240303],[118.700598,28.310912],[118.674728,28.271398],[118.587881,28.28299],[118.444367,28.25348],[118.433896,28.288786],[118.486867,28.328821],[118.432048,28.402003],[118.472084,28.482497],[118.426505,28.532447],[118.425273,28.537177],[118.426505,28.532447],[118.425273,28.537177],[118.421577,28.540331],[118.421577,28.541908],[118.423425,28.587626],[118.423425,28.587626],[118.431432,28.679528],[118.379077,28.785509],[118.379077,28.785509],[118.306396,28.823782],[118.270056,28.918619],[118.111144,28.997671],[118.111144,28.997671],[118.037847,29.097054],[118.027992,29.168132],[118.077883,29.290836],[118.136397,29.284052],[118.20723,29.346135],[118.193064,29.395149],[118.316252,29.422774],[118.310708,29.49623],[118.496106,29.519662],[118.500417,29.575877],[118.573714,29.638302],[118.644547,29.641942],[118.744945,29.738621],[118.755416,29.845586],[118.894619,29.93792],[118.902626,30.029133],[118.847807,30.163208],[118.929727,30.202515],[118.880452,30.31518],[118.954365,30.360106],[119.06277,30.304849],[119.201356,30.290901],[119.246936,30.341002],[119.36766,30.384885],[119.326392,30.532906],[119.237081,30.54682],[119.238929,30.60915],[119.312225,30.620993],[119.386754,30.685333],[119.416935,30.642101],[119.482841,30.70437],[119.479761,30.772253],[119.575847,30.829814],[119.585702,30.976642],[119.633746,31.019724],[119.623891,31.130416],[119.678093,31.168308],[119.919542,31.170868],[120.001461,31.026902],[120.13512,30.941752],[120.226279,30.926356],[120.371025,30.948424],[120.35809,30.88734],[120.423996,30.900689],[120.504684,30.757858],[120.589068,30.854472],[120.713487,30.885286],[120.698089,30.970999],[120.901349,31.017673],[120.991892,31.00793],[120.989428,30.833924],[121.097218,30.85704],[121.123087,30.778936],[121.217942,30.785105],[121.274608,30.677615],[121.058413,30.563823],[121.225333,30.404496],[121.328195,30.397271],[121.497578,30.258864],[121.632469,30.072119],[121.721164,29.992865],[121.78399,29.993383],[121.919497,29.920808],[121.968156,29.956584],[122.00696,29.891764],[122.140003,29.901619],[122.10243,29.859597],[121.997721,29.759919],[121.937359,29.748491],[121.833265,29.653382],[121.966308,29.635702],[122.000185,29.582642],[121.968772,29.515497],[121.993409,29.451954],[121.937975,29.384201],[121.986634,29.15507],[121.966308,29.053128],[121.884388,29.105419],[121.780294,29.109601],[121.767975,29.166565],[121.660186,29.118487],[121.774751,28.864138],[121.668193,28.873046],[121.704534,28.816443],[121.689135,28.719415],[121.540694,28.655379],[121.634317,28.56293],[121.687287,28.40095],[121.627541,28.251899],[121.499426,28.306171],[121.373774,28.133246],[121.288159,28.144854],[121.261057,28.034533],[121.140949,28.031364],[121.108304,28.13905],[121.059029,28.096305],[120.991892,27.95],[121.05595,27.900306],[121.162507,27.90718],[121.152652,27.810376],[121.153268,27.809847],[121.149572,27.801908],[121.149572,27.801379],[121.149572,27.80085],[121.13479,27.787088],[121.134174,27.787088],[121.152036,27.815139],[121.027616,27.832601],[120.942001,27.896605],[120.797871,27.779677],[120.634647,27.577271],[120.703016,27.478581],[120.673451,27.369708],[120.572437,27.313903],[120.544104,27.154303],[120.461568,27.14259]]],[[[122.301379,29.942068],[122.163408,29.988201],[122.038989,29.989756],[121.991561,30.075743],[121.990945,30.076261],[121.952757,30.183898],[122.152938,30.113015],[122.293988,30.100075],[122.347574,30.014109],[122.301379,29.942068]]],[[[122.100583,30.304333],[122.228082,30.329641],[122.22993,30.232503],[122.058083,30.291934],[122.100583,30.304333]]],[[[122.317393,30.249561],[122.40732,30.272817],[122.397465,30.225266],[122.317393,30.249561]]],[[[122.435038,29.906287],[122.391922,29.831573],[122.327248,29.922883],[122.411632,29.951918],[122.435038,29.906287]]],[[[122.353734,30.464339],[122.423335,30.408624],[122.281669,30.418944],[122.277973,30.471558],[122.353734,30.464339]]],[[[122.303843,29.832611],[122.310002,29.766671],[122.221307,29.832611],[122.303843,29.832611]]],[[[122.13138,29.673659],[122.047612,29.719396],[122.130148,29.79056],[122.200981,29.711082],[122.192358,29.655462],[122.13138,29.673659]]],[[[121.943518,30.77688],[121.970004,30.789217],[122.011271,30.669381],[121.968156,30.68842],[121.943518,30.77688]]],[[[121.874533,29.964878],[121.835113,29.992865],[121.855439,30.085062],[121.924424,30.052441],[121.933047,29.994938],[121.874533,29.964878]]],[[[122.155401,29.97058],[122.154169,29.971098],[122.152322,29.971098],[122.163408,29.988201],[122.155401,29.97058]]],[[[121.136638,27.948414],[121.041783,27.943657],[121.0695,27.984349],[121.136638,27.948414]]],[[[121.134174,27.786029],[121.134174,27.787088],[121.13479,27.787088],[121.134174,27.786029]]],[[[122.152322,29.971098],[122.154169,29.971098],[122.155401,29.97058],[122.152322,29.971098]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":340000,\"name\":\"安徽\",\"center\":[117.283042,31.86119],\"centroid\":[117.226894,31.849585],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":11,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[115.5088,32.468777],[115.409018,32.549005],[115.304924,32.553039],[115.20083,32.591864],[115.183584,32.665937],[115.197135,32.85613],[115.139237,32.897837],[114.943368,32.935005],[114.883006,32.990227],[114.925506,33.016821],[114.902716,33.129632],[114.966158,33.147167],[115.042534,33.08653],[115.168186,33.088535],[115.301229,33.141657],[115.365286,33.335826],[115.312931,33.376307],[115.345576,33.503125],[115.421953,33.556992],[115.639995,33.584909],[115.563003,33.771624],[115.614126,33.775603],[115.629524,33.871536],[115.546988,33.875014],[115.60735,34.030359],[115.736082,34.076957],[115.877132,34.003083],[115.95782,34.007547],[116.00032,33.964881],[115.987385,33.900842],[116.05945,33.861103],[116.074232,33.781571],[116.155536,33.709929],[116.263326,33.729835],[116.316297,33.771127],[116.437021,33.801461],[116.437637,33.846694],[116.64336,33.896869],[116.648288,33.973317],[116.575607,34.069028],[116.575607,34.069028],[116.530643,34.107183],[116.565752,34.173541],[116.516477,34.296217],[116.409303,34.273971],[116.409303,34.273971],[116.26271,34.375762],[116.213435,34.382181],[116.162312,34.459178],[116.204196,34.508497],[116.196804,34.576017],[116.240536,34.552367],[116.281188,34.60754],[116.374195,34.640036],[116.429629,34.652834],[116.491839,34.57109],[116.595933,34.510469],[116.574991,34.488773],[116.774555,34.452764],[116.828142,34.389094],[116.969192,34.387613],[116.971656,34.279409],[117.04988,34.242321],[117.025243,34.167106],[117.192778,34.068532],[117.352922,34.089842],[117.410205,34.026888],[117.514914,34.061097],[117.575892,33.982744],[117.629479,34.028872],[117.715095,33.879485],[117.758826,33.885445],[117.752667,33.711422],[117.805638,33.736304],[117.901724,33.719883],[118.116071,33.767645],[118.16781,33.66313],[118.112376,33.617302],[118.108064,33.475181],[118.050782,33.492148],[117.971941,33.277821],[117.939297,33.262813],[118.038463,33.134642],[118.221397,33.182228],[118.244803,32.998256],[118.293462,32.947056],[118.2331,32.914414],[118.250346,32.84859],[118.375382,32.718809],[118.707373,32.720319],[118.756648,32.737433],[118.74125,32.850601],[118.811467,32.854622],[118.849039,32.956596],[118.995017,32.958604],[119.104038,32.82647],[119.184726,32.825465],[119.22045,32.57674],[119.084944,32.452622],[119.041212,32.515207],[118.978386,32.504106],[118.922336,32.557074],[118.92172,32.557074],[118.922336,32.557074],[118.92172,32.557074],[118.719076,32.614042],[118.719076,32.614042],[118.563859,32.56363],[118.592192,32.481396],[118.69259,32.463224],[118.69567,32.31721],[118.642083,32.208937],[118.522591,32.188178],[118.499801,32.1203],[118.400019,32.077724],[118.363679,31.930581],[118.504729,31.841674],[118.481939,31.778117],[118.552772,31.729275],[118.638388,31.759295],[118.697518,31.709935],[118.643931,31.65138],[118.736938,31.634061],[118.77451,31.682444],[118.804691,31.618268],[118.858278,31.624382],[118.873061,31.53569],[118.866285,31.527021],[118.870597,31.526001],[118.876756,31.532631],[118.853967,31.39841],[118.745561,31.37287],[118.728931,31.281384],[118.781286,31.239956],[119.075089,31.232282],[119.199508,31.293655],[119.267878,31.250698],[119.379979,31.269622],[119.388602,31.194415],[119.388602,31.194415],[119.460051,31.156533],[119.623891,31.130416],[119.633746,31.019724],[119.585702,30.976642],[119.575847,30.829814],[119.479761,30.772253],[119.482841,30.70437],[119.416935,30.642101],[119.386754,30.685333],[119.312225,30.620993],[119.238929,30.60915],[119.237081,30.54682],[119.326392,30.532906],[119.36766,30.384885],[119.246936,30.341002],[119.201356,30.290901],[119.06277,30.304849],[118.954365,30.360106],[118.880452,30.31518],[118.929727,30.202515],[118.847807,30.163208],[118.902626,30.029133],[118.894619,29.93792],[118.755416,29.845586],[118.744945,29.738621],[118.644547,29.641942],[118.573714,29.638302],[118.500417,29.575877],[118.496106,29.519662],[118.310708,29.49623],[118.316252,29.422774],[118.193064,29.395149],[118.136397,29.419125],[118.134549,29.508728],[118.008282,29.578479],[117.872775,29.547774],[117.807486,29.573796],[117.707703,29.548815],[117.647957,29.614897],[117.545711,29.594089],[117.532161,29.651822],[117.453936,29.688214],[117.455168,29.749011],[117.384335,29.84351],[117.29256,29.822749],[117.246365,29.915104],[117.17738,29.921846],[117.073286,29.832092],[117.136728,29.7755],[117.112706,29.712121],[116.780715,29.570153],[116.651983,29.637262],[116.677237,29.66898],[116.694483,29.672099],[116.694483,29.672099],[116.717273,29.690813],[116.710498,29.69705],[116.709882,29.69757],[116.706186,29.69809],[116.698795,29.707964],[116.684012,29.72823],[116.789954,29.795233],[116.882961,29.89332],[116.900207,29.949326],[116.83307,29.957621],[116.747454,30.057101],[116.666766,30.076779],[116.586078,30.046226],[116.552201,29.909918],[116.473361,29.89747],[116.26271,29.782251],[116.207891,29.82742],[116.13521,29.819634],[116.127203,29.899544],[116.073616,29.970061],[116.091479,30.036385],[116.065609,30.204584],[115.985537,30.290901],[115.903001,30.313631],[115.921479,30.416364],[115.876516,30.582368],[115.819234,30.59782],[115.762567,30.685848],[115.782893,30.751687],[115.851262,30.756829],[115.865429,30.864231],[115.976298,30.931488],[116.071769,30.956633],[116.058834,31.012545],[115.938726,31.047409],[115.869125,31.147828],[115.763799,31.118123],[115.700973,31.201068],[115.646155,31.209768],[115.559307,31.160117],[115.516191,31.263485],[115.457677,31.281384],[115.442279,31.346303],[115.372062,31.349368],[115.373909,31.405559],[115.371446,31.495905],[115.496481,31.674297],[115.660937,31.760822],[115.767495,31.787272],[115.816154,31.762348],[115.909777,31.791849],[115.893146,31.833033],[115.931334,31.994541],[115.941805,32.166402],[115.912856,32.227666],[115.899306,32.391005],[115.845719,32.501583],[115.789052,32.468777],[115.706517,32.494014],[115.667712,32.409696],[115.567314,32.421819],[115.509416,32.466758],[115.510648,32.467768],[115.510648,32.468272],[115.510648,32.468777],[115.5088,32.468777]]],[[[116.717273,29.690813],[116.694483,29.672099],[116.694483,29.672099],[116.677237,29.66898],[116.684012,29.72823],[116.698795,29.707964],[116.706186,29.69809],[116.709882,29.69757],[116.710498,29.69705],[116.709882,29.69757],[116.717273,29.690813]]],[[[118.873061,31.53569],[118.876756,31.532631],[118.870597,31.526001],[118.866285,31.527021],[118.873061,31.53569]]],[[[115.510648,32.468777],[115.510648,32.468272],[115.510648,32.467768],[115.509416,32.466758],[115.5088,32.468777],[115.510648,32.468777]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":350000,\"name\":\"福建\",\"center\":[119.306239,26.075302],\"centroid\":[118.005928,26.070282],\"childrenNum\":9,\"level\":\"province\",\"subFeatureIndex\":12,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[120.461568,27.14259],[120.393199,27.081343],[120.287257,27.094128],[120.29588,27.035519],[120.231823,26.907006],[120.117258,26.916609],[120.047041,26.824809],[120.1382,26.79704],[120.165917,26.73133],[120.110483,26.692848],[120.1382,26.637775],[119.967585,26.597657],[119.896136,26.516306],[119.827767,26.524872],[119.851788,26.595516],[119.949107,26.624404],[120.052584,26.786892],[119.942947,26.784756],[119.86965,26.642588],[119.83023,26.69071],[119.711354,26.686433],[119.665159,26.725986],[119.577695,26.622264],[119.788346,26.58321],[119.876426,26.359867],[119.962657,26.373269],[119.8986,26.308388],[119.841317,26.322333],[119.668854,26.256887],[119.604181,26.168853],[119.668854,26.025924],[119.723673,26.011406],[119.688564,25.897892],[119.632514,25.884436],[119.635594,25.746011],[119.601101,25.683479],[119.472986,25.662448],[119.586934,25.592317],[119.634362,25.475161],[119.716898,25.550758],[119.716898,25.551838],[119.683637,25.592856],[119.785883,25.667841],[119.790194,25.614439],[119.883817,25.54644],[119.812368,25.523225],[119.864107,25.479482],[119.764325,25.433562],[119.773564,25.395732],[119.646064,25.460576],[119.649144,25.34275],[119.549362,25.367082],[119.48592,25.364919],[119.490232,25.447069],[119.438493,25.412487],[119.452044,25.490824],[119.36458,25.521065],[119.354725,25.427077],[119.288204,25.410865],[119.256175,25.488664],[119.14469,25.388165],[119.299291,25.32869],[119.380595,25.250247],[119.293131,25.23347],[119.26911,25.15984],[119.131755,25.223187],[119.165632,25.145217],[119.119436,25.012447],[119.107118,25.075327],[119.035669,25.125717],[119.081248,25.218856],[118.989473,25.202075],[118.996864,25.266481],[118.911249,25.241589],[118.981466,25.19612],[118.975923,25.118133],[118.868133,25.082372],[118.928495,25.025459],[119.02335,25.04877],[118.989473,24.973944],[119.032589,24.962011],[119.032589,24.961468],[118.918024,24.924034],[118.96114,24.871933],[118.86259,24.886589],[118.650707,24.808949],[118.786213,24.776358],[118.703677,24.665485],[118.675344,24.57628],[118.558316,24.512602],[118.557084,24.573016],[118.444367,24.614907],[118.355056,24.534376],[118.242955,24.512602],[118.134549,24.575736],[118.12531,24.571927],[118.048934,24.418385],[118.088354,24.409123],[118.158571,24.270111],[118.001507,24.176805],[117.762522,23.88718],[117.671979,23.877879],[117.612849,23.71364],[117.500132,23.703232],[117.463791,23.58539],[117.387415,23.555228],[117.192778,23.561809],[117.192778,23.629799],[117.053576,23.696657],[117.012308,23.855446],[116.980279,23.881709],[116.981511,23.999282],[116.939627,24.033713],[116.9347,24.127123],[116.998757,24.178988],[116.933468,24.21992],[116.903903,24.369888],[116.860787,24.462507],[116.789338,24.50988],[116.761005,24.58281],[116.815207,24.655154],[116.778867,24.680165],[116.597165,24.65461],[116.525716,24.604572],[116.486912,24.71876],[116.44626,24.714412],[116.376659,24.820353],[116.245464,24.793197],[116.18079,24.87519],[116.068073,24.849675],[116.014486,24.905584],[115.89253,24.937056],[115.873436,25.020038],[115.928255,25.050396],[115.880212,25.092126],[115.855574,25.209654],[115.929487,25.234553],[116.008327,25.319496],[116.005247,25.490284],[116.063145,25.563173],[116.067457,25.703967],[116.18079,25.774571],[116.131515,25.82413],[116.176478,25.893048],[116.258398,25.902736],[116.36434,25.960312],[116.383434,26.029687],[116.489375,26.113529],[116.471513,26.175296],[116.396985,26.166168],[116.412999,26.298197],[116.519557,26.410251],[116.601476,26.372733],[116.610716,26.477216],[116.539267,26.559129],[116.566368,26.650075],[116.516477,26.69071],[116.557745,26.774073],[116.548506,26.839758],[116.679085,26.978479],[116.910062,27.034453],[117.05296,27.100519],[117.043721,27.139928],[117.171836,27.290509],[117.100387,27.338886],[117.133032,27.4223],[117.084989,27.564011],[117.01662,27.563481],[117.040641,27.670043],[117.096692,27.626582],[117.118865,27.694416],[117.204481,27.683819],[117.296872,27.764854],[117.27901,27.870161],[117.341836,27.855879],[117.52169,27.982236],[117.608537,27.863814],[117.740348,27.800321],[117.78716,27.896076],[117.856145,27.945772],[117.999043,27.991218],[118.096977,27.96744],[118.155491,28.061992],[118.356288,28.091555],[118.37415,28.188106],[118.314404,28.22238],[118.433896,28.288786],[118.444367,28.25348],[118.587881,28.28299],[118.674728,28.271398],[118.700598,28.310912],[118.802228,28.240303],[118.771431,28.188634],[118.802228,28.117416],[118.719076,28.063576],[118.730163,27.970611],[118.818242,27.916697],[118.913713,27.61651],[118.869365,27.54014],[118.903858,27.462125],[118.983314,27.498751],[119.194581,27.418582],[119.267878,27.421237],[119.376899,27.534835],[119.474833,27.539079],[119.501319,27.649905],[119.644217,27.663684],[119.630666,27.582574],[119.70889,27.514141],[119.685485,27.438762],[119.770484,27.305928],[119.843165,27.300611],[120.007005,27.376084],[120.052584,27.338886],[120.13512,27.420175],[120.26262,27.432921],[120.34146,27.39946],[120.430155,27.258601],[120.401206,27.211253],[120.461568,27.14259]]],[[[118.412338,24.514235],[118.477012,24.437452],[118.335962,24.385148],[118.316252,24.487557],[118.374766,24.458695],[118.412338,24.514235]]],[[[119.532116,25.203158],[119.549362,25.162007],[119.444036,25.202075],[119.473601,25.259988],[119.532116,25.203158]]],[[[118.079115,24.444533],[118.093281,24.540907],[118.142557,24.561588],[118.20723,24.487012],[118.143173,24.421109],[118.079115,24.444533]]],[[[119.737224,26.646332],[119.668238,26.628683],[119.673782,26.681087],[119.737224,26.646332]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":360000,\"name\":\"江西\",\"center\":[115.892151,28.676493],\"centroid\":[115.732937,27.636129],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":13,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[113.94185,29.047374],[113.952321,29.092871],[114.061959,29.204176],[114.252284,29.234985],[114.259059,29.344049],[114.519602,29.325271],[114.660652,29.393585],[114.759818,29.363345],[114.931049,29.422252],[114.860216,29.475917],[114.940904,29.494147],[115.00065,29.572235],[115.154019,29.51029],[115.142316,29.651822],[115.359127,29.646623],[115.471844,29.742777],[115.511264,29.839877],[115.667712,29.850257],[115.837096,29.748491],[115.965827,29.724593],[116.13521,29.819634],[116.207891,29.82742],[116.26271,29.782251],[116.473361,29.89747],[116.552201,29.909918],[116.586078,30.046226],[116.666766,30.076779],[116.747454,30.057101],[116.83307,29.957621],[116.900207,29.949326],[116.882961,29.89332],[116.789954,29.795233],[116.684012,29.72823],[116.677237,29.66898],[116.651983,29.637262],[116.780715,29.570153],[117.112706,29.712121],[117.136728,29.7755],[117.073286,29.832092],[117.17738,29.921846],[117.246365,29.915104],[117.29256,29.822749],[117.384335,29.84351],[117.455168,29.749011],[117.453936,29.688214],[117.532161,29.651822],[117.545711,29.594089],[117.647957,29.614897],[117.707703,29.548815],[117.807486,29.573796],[117.872775,29.547774],[118.008282,29.578479],[118.134549,29.508728],[118.136397,29.419125],[118.193064,29.395149],[118.20723,29.346135],[118.136397,29.284052],[118.077883,29.290836],[118.027992,29.168132],[118.037847,29.097054],[118.111144,28.997671],[118.111144,28.997671],[118.270056,28.918619],[118.306396,28.823782],[118.379077,28.785509],[118.379077,28.785509],[118.431432,28.679528],[118.423425,28.587626],[118.423425,28.587626],[118.421577,28.541908],[118.421577,28.540331],[118.425273,28.537177],[118.426505,28.532447],[118.425273,28.537177],[118.426505,28.532447],[118.472084,28.482497],[118.432048,28.402003],[118.486867,28.328821],[118.433896,28.288786],[118.314404,28.22238],[118.37415,28.188106],[118.356288,28.091555],[118.155491,28.061992],[118.096977,27.96744],[117.999043,27.991218],[117.856145,27.945772],[117.78716,27.896076],[117.740348,27.800321],[117.608537,27.863814],[117.52169,27.982236],[117.341836,27.855879],[117.27901,27.870161],[117.296872,27.764854],[117.204481,27.683819],[117.118865,27.694416],[117.096692,27.626582],[117.040641,27.670043],[117.01662,27.563481],[117.084989,27.564011],[117.133032,27.4223],[117.100387,27.338886],[117.171836,27.290509],[117.043721,27.139928],[117.05296,27.100519],[116.910062,27.034453],[116.679085,26.978479],[116.548506,26.839758],[116.557745,26.774073],[116.516477,26.69071],[116.566368,26.650075],[116.539267,26.559129],[116.610716,26.477216],[116.601476,26.372733],[116.519557,26.410251],[116.412999,26.298197],[116.396985,26.166168],[116.471513,26.175296],[116.489375,26.113529],[116.383434,26.029687],[116.36434,25.960312],[116.258398,25.902736],[116.176478,25.893048],[116.131515,25.82413],[116.18079,25.774571],[116.067457,25.703967],[116.063145,25.563173],[116.005247,25.490284],[116.008327,25.319496],[115.929487,25.234553],[115.855574,25.209654],[115.880212,25.092126],[115.928255,25.050396],[115.873436,25.020038],[115.89253,24.937056],[115.907313,24.880075],[115.822313,24.90884],[115.756408,24.749192],[115.845103,24.563221],[115.688038,24.545261],[115.67264,24.604028],[115.573474,24.617083],[115.556227,24.682883],[115.412714,24.792654],[115.358511,24.735064],[115.308004,24.758429],[115.095505,24.674184],[115.056701,24.703541],[114.909491,24.661679],[114.868839,24.562132],[114.729637,24.608924],[114.704999,24.526211],[114.664963,24.583898],[114.589819,24.537642],[114.534384,24.558867],[114.428443,24.486468],[114.391486,24.562677],[114.308334,24.574104],[114.258443,24.641558],[114.169132,24.689407],[114.27261,24.700279],[114.33482,24.747562],[114.403189,24.877361],[114.395798,24.951161],[114.506051,24.999975],[114.561485,25.077495],[114.640326,25.073702],[114.735796,25.121925],[114.679746,25.194495],[114.743188,25.274597],[114.63663,25.324364],[114.535616,25.41681],[114.381015,25.31571],[114.31511,25.338424],[114.262755,25.29191],[114.13156,25.30922],[114.039785,25.250789],[114.051488,25.348699],[113.94493,25.441667],[113.983118,25.599332],[113.913517,25.701272],[113.971416,25.835979],[114.028082,25.893586],[114.007756,26.007104],[114.044096,26.076452],[114.237501,26.152204],[114.181451,26.214489],[114.088444,26.168316],[113.944314,26.16402],[114.029314,26.266545],[114.030546,26.376485],[114.085364,26.4065],[114.073046,26.480965],[114.106306,26.576254],[113.915365,26.613706],[113.860546,26.663978],[113.834677,26.803983],[113.927068,26.949149],[113.821126,27.037651],[113.779242,27.137265],[113.848844,27.225087],[113.872865,27.385116],[113.616635,27.345264],[113.632033,27.405303],[113.583374,27.524754],[113.607395,27.625522],[113.763228,27.799262],[113.729967,27.887086],[113.752141,27.933614],[113.864242,28.004954],[113.914133,27.991218],[114.047176,28.05724],[113.992357,28.161207],[114.107538,28.182833],[114.25598,28.323554],[114.252284,28.395687],[114.172212,28.432524],[114.218407,28.484601],[114.08598,28.558201],[114.157429,28.761384],[114.152502,28.83479],[114.076741,28.834266],[114.008988,28.955273],[113.966488,28.945326],[113.94185,29.047374]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":370000,\"name\":\"山东\",\"center\":[117.000923,36.675807],\"centroid\":[118.186283,36.374485],\"childrenNum\":17,\"level\":\"province\",\"subFeatureIndex\":14,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[121.362071,37.634292],[121.4791,37.474914],[121.565331,37.440242],[121.635548,37.49438],[121.66573,37.47349],[121.923808,37.473015],[122.08888,37.554171],[122.166488,37.439292],[122.234857,37.469216],[122.284133,37.426464],[122.41656,37.414585],[122.487393,37.434541],[122.553914,37.406981],[122.670942,37.429315],[122.573624,37.296159],[122.629059,37.194708],[122.581015,37.147508],[122.505871,37.149892],[122.467067,37.03726],[122.575472,37.054452],[122.532356,36.901497],[122.344495,36.828257],[122.174495,36.842623],[122.141235,36.93833],[122.051923,36.904846],[122.008808,36.962238],[121.767975,36.874698],[121.762432,36.846454],[121.627541,36.795683],[121.647867,36.723301],[121.492035,36.789933],[121.454462,36.75255],[121.209318,36.671489],[121.028848,36.573046],[120.847146,36.618682],[120.983269,36.546133],[120.890878,36.373375],[120.828668,36.466779],[120.759683,36.462448],[120.694393,36.390234],[120.7449,36.330969],[120.66298,36.331933],[120.712255,36.126809],[120.478199,36.091522],[120.343308,36.04219],[120.290337,36.061539],[120.362402,36.19637],[120.181316,36.204095],[120.108635,36.127292],[120.241062,36.047995],[120.213345,35.998152],[120.292801,36.017512],[120.262004,35.965712],[120.062439,35.870739],[120.011317,35.713006],[119.926317,35.759631],[119.923237,35.635238],[119.718129,35.615785],[119.665775,35.57005],[119.543819,35.347815],[119.411392,35.231581],[119.373819,35.078464],[119.306066,35.076506],[119.286972,35.11518],[119.137915,35.09609],[119.114509,35.054958],[118.928495,35.051039],[118.865053,35.029974],[118.860742,34.94419],[118.772047,34.794464],[118.719076,34.745315],[118.783749,34.723188],[118.690127,34.678424],[118.601431,34.714336],[118.460997,34.65628],[118.424657,34.595228],[118.440671,34.527724],[118.404947,34.427598],[118.290382,34.424637],[118.179513,34.379218],[118.177665,34.453257],[118.132702,34.483348],[118.185056,34.543989],[118.079115,34.569612],[118.084042,34.655788],[117.951615,34.678424],[117.902956,34.644467],[117.793935,34.65185],[117.801942,34.51885],[117.684298,34.547439],[117.592523,34.462631],[117.465023,34.484827],[117.402813,34.569612],[117.322125,34.574046],[117.322125,34.574046],[117.32151,34.566656],[117.32151,34.566656],[117.322125,34.566656],[117.322125,34.566656],[117.301184,34.557294],[117.301184,34.557294],[117.242669,34.445856],[117.175532,34.47003],[117.137344,34.633144],[117.07575,34.637575],[117.088069,34.702039],[117.000605,34.793482],[116.966728,34.875497],[116.821983,34.929475],[116.677853,34.939285],[116.445028,34.89562],[116.408071,34.85095],[116.374195,34.640036],[116.281188,34.60754],[116.240536,34.552367],[116.196804,34.576017],[116.134594,34.559758],[116.101334,34.605571],[115.83032,34.562714],[115.697278,34.594243],[115.667096,34.557294],[115.515575,34.582421],[115.461373,34.637083],[115.42688,34.805273],[115.317243,34.859297],[115.256265,34.845549],[115.251953,34.906416],[115.189128,34.914757],[115.12815,35.004493],[115.028983,34.97165],[114.923658,34.968709],[114.824492,35.012335],[114.883006,35.098537],[114.841738,35.151389],[114.932281,35.197362],[114.929817,35.248196],[115.02036,35.364406],[115.093657,35.41611],[115.237171,35.422937],[115.357895,35.498475],[115.383148,35.569076],[115.48601,35.710091],[115.693582,35.75429],[115.773654,35.854252],[115.875284,35.859102],[115.911624,35.960385],[116.048979,35.970071],[116.099486,36.111826],[115.989849,36.045576],[115.646155,35.920663],[115.496481,35.885283],[115.498329,35.897401],[115.503257,35.91194],[115.503257,35.91194],[115.487242,35.903702],[115.473692,35.896917],[115.473692,35.896917],[115.467532,35.889646],[115.467532,35.889646],[115.464452,35.882859],[115.464452,35.88092],[115.464452,35.882859],[115.463837,35.882859],[115.464452,35.88092],[115.463837,35.88092],[115.463837,35.882859],[115.463837,35.88092],[115.460141,35.86783],[115.363438,35.78002],[115.335105,35.796522],[115.362822,35.972008],[115.447822,36.012672],[115.483547,36.149036],[115.466916,36.259115],[115.466916,36.259115],[115.366518,36.308793],[115.308004,36.461967],[115.308004,36.461967],[115.283366,36.486505],[115.365902,36.622043],[115.479851,36.76022],[115.683727,36.808139],[115.71206,36.883313],[115.79706,36.968931],[115.776734,36.992829],[115.868509,37.076414],[115.909777,37.206622],[115.969523,37.239497],[115.984921,37.326616],[116.051443,37.367998],[116.169087,37.384164],[116.236224,37.361816],[116.2855,37.404604],[116.226369,37.428365],[116.240536,37.489633],[116.240536,37.489633],[116.27626,37.466841],[116.291659,37.557966],[116.337238,37.580255],[116.379738,37.521909],[116.38097,37.522858],[116.379738,37.521909],[116.38097,37.522858],[116.433941,37.47349],[116.724664,37.744139],[116.788106,37.843429],[117.023395,37.832561],[117.093612,37.849571],[117.267923,37.838704],[117.34122,37.863271],[117.438538,37.853823],[117.513067,37.94353],[117.5839,38.070819],[117.70216,38.075529],[117.771761,38.136734],[117.808718,38.228445],[117.895565,38.30173],[117.997811,38.211992],[118.045238,38.207761],[118.143788,38.297035],[118.07234,38.170139],[118.331034,38.124968],[118.504729,38.114141],[118.552156,38.055744],[118.607591,38.129204],[118.726467,38.154144],[118.853967,38.155085],[118.974075,38.094367],[119.004872,37.992114],[119.110813,37.921349],[119.12806,37.814601],[119.217371,37.810347],[119.259871,37.702492],[119.080016,37.696337],[118.99748,37.632396],[118.939582,37.527129],[118.983314,37.349926],[119.054147,37.254738],[119.12806,37.254738],[119.298675,37.197567],[119.329472,37.115548],[119.489616,37.13463],[119.566608,37.100755],[119.744615,37.135107],[119.89244,37.263786],[119.843781,37.376557],[120.144359,37.482036],[120.246605,37.556543],[120.215192,37.621023],[120.272475,37.636661],[120.227511,37.693497],[120.367945,37.697758],[120.466496,37.757858],[120.595227,37.767318],[120.733197,37.833506],[120.938305,37.821219],[121.037471,37.718585],[121.136022,37.723318],[121.153884,37.613914],[121.217326,37.582626],[121.354064,37.595901],[121.362071,37.634292]]],[[[115.498329,35.897401],[115.496481,35.885283],[115.460141,35.86783],[115.463837,35.88092],[115.463837,35.882859],[115.463837,35.88092],[115.464452,35.88092],[115.463837,35.882859],[115.464452,35.882859],[115.464452,35.88092],[115.464452,35.882859],[115.467532,35.889646],[115.467532,35.889646],[115.473692,35.896917],[115.473692,35.896917],[115.487242,35.903702],[115.498329,35.897401]]],[[[121.487723,37.578833],[121.487723,37.577884],[121.487107,37.577884],[121.485875,37.578359],[121.485875,37.578833],[121.487723,37.578833]]],[[[121.487723,37.578833],[121.488339,37.578833],[121.488339,37.578833],[121.487723,37.57741],[121.487723,37.577884],[121.487723,37.578833]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":410000,\"name\":\"河南\",\"center\":[113.665412,34.757975],\"centroid\":[113.619918,33.902738],\"childrenNum\":18,\"level\":\"province\",\"subFeatureIndex\":15,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[116.196804,34.576017],[116.204196,34.508497],[116.162312,34.459178],[116.213435,34.382181],[116.26271,34.375762],[116.409303,34.273971],[116.409303,34.273971],[116.516477,34.296217],[116.565752,34.173541],[116.530643,34.107183],[116.575607,34.069028],[116.575607,34.069028],[116.648288,33.973317],[116.64336,33.896869],[116.437637,33.846694],[116.437021,33.801461],[116.316297,33.771127],[116.263326,33.729835],[116.155536,33.709929],[116.074232,33.781571],[116.05945,33.861103],[115.987385,33.900842],[116.00032,33.964881],[115.95782,34.007547],[115.877132,34.003083],[115.736082,34.076957],[115.60735,34.030359],[115.546988,33.875014],[115.629524,33.871536],[115.614126,33.775603],[115.563003,33.771624],[115.639995,33.584909],[115.421953,33.556992],[115.345576,33.503125],[115.312931,33.376307],[115.365286,33.335826],[115.301229,33.141657],[115.168186,33.088535],[115.042534,33.08653],[114.966158,33.147167],[114.902716,33.129632],[114.925506,33.016821],[114.883006,32.990227],[114.943368,32.935005],[115.139237,32.897837],[115.197135,32.85613],[115.183584,32.665937],[115.20083,32.591864],[115.304924,32.553039],[115.409018,32.549005],[115.5088,32.468777],[115.509416,32.466758],[115.567314,32.421819],[115.667712,32.409696],[115.706517,32.494014],[115.789052,32.468777],[115.845719,32.501583],[115.899306,32.391005],[115.912856,32.227666],[115.941805,32.166402],[115.931334,31.994541],[115.893146,31.833033],[115.909777,31.791849],[115.816154,31.762348],[115.767495,31.787272],[115.660937,31.760822],[115.496481,31.674297],[115.371446,31.495905],[115.373909,31.405559],[115.301229,31.384109],[115.22054,31.426494],[115.235323,31.556597],[115.12507,31.598904],[115.088729,31.507638],[115.024056,31.528551],[114.830035,31.458654],[114.778912,31.5209],[114.696376,31.526001],[114.641558,31.582085],[114.560869,31.561185],[114.549783,31.642721],[114.586123,31.762348],[114.448769,31.728257],[114.292936,31.752173],[114.195002,31.850315],[114.135871,31.843707],[114.088444,31.781677],[113.988662,31.750138],[113.954785,31.856413],[113.838373,31.854889],[113.791561,32.036142],[113.728735,32.0833],[113.783554,32.186153],[113.749677,32.272196],[113.761996,32.268149],[113.757069,32.29243],[113.758301,32.296476],[113.752757,32.388478],[113.664062,32.422324],[113.624642,32.361191],[113.425693,32.269161],[113.211962,32.431919],[113.118956,32.375846],[113.025949,32.425354],[112.992072,32.378373],[112.860877,32.395552],[112.733993,32.363718],[112.729066,32.366245],[112.544284,32.403635],[112.451893,32.344511],[112.390915,32.371298],[112.328089,32.321761],[112.228923,32.385447],[112.014576,32.450098],[111.948671,32.517225],[111.890157,32.503097],[111.640701,32.634703],[111.577875,32.593376],[111.380159,32.828984],[111.293311,32.859145],[111.242804,32.930486],[111.273601,32.971656],[111.238493,33.040899],[111.151029,33.053438],[111.179363,33.115601],[111.056791,33.192743],[111.032769,33.209265],[110.984726,33.255308],[111.025994,33.330327],[110.996429,33.435745],[111.02661,33.474183],[111.02661,33.478675],[111.00382,33.578429],[110.877552,33.635238],[110.782698,33.795494],[110.587445,33.887929],[110.669365,33.939072],[110.590525,34.096778],[110.642264,34.16067],[110.43962,34.24331],[110.426685,34.275454],[110.503677,34.337234],[110.403279,34.43352],[110.403279,34.43352],[110.360779,34.516878],[110.379257,34.600646],[110.474728,34.617389],[110.533242,34.583406],[110.710017,34.605078],[110.749437,34.652342],[110.883712,34.642498],[110.929907,34.731548],[110.966248,34.70499],[111.118385,34.756622],[111.148566,34.80773],[111.232949,34.789551],[111.346282,34.831798],[111.570484,34.843094],[111.66965,34.988319],[111.900012,35.079933],[112.062004,35.055937],[112.078634,35.219362],[112.058924,35.279951],[112.513487,35.218384],[112.637291,35.225716],[112.628052,35.263342],[112.766022,35.203718],[112.818377,35.258457],[112.911384,35.24673],[112.992072,35.296068],[112.997,35.362455],[113.126347,35.332197],[113.189789,35.449261],[113.298194,35.427325],[113.31236,35.481424],[113.485439,35.520879],[113.578446,35.63378],[113.604316,35.797008],[113.656671,35.836792],[113.637576,35.98847],[113.694859,36.026707],[113.651743,36.172224],[113.716417,36.262492],[113.731199,36.363257],[113.819894,36.330969],[113.881488,36.354102],[113.911054,36.314578],[113.982502,36.358921],[114.055799,36.330005],[114.060727,36.276482],[114.169132,36.243675],[114.169132,36.243675],[114.345291,36.255738],[114.591666,36.130192],[114.912571,36.140339],[114.914419,36.051865],[114.996955,36.06831],[115.064092,36.178985],[115.201446,36.210371],[115.201446,36.210371],[115.312931,36.088137],[115.483547,36.149036],[115.447822,36.012672],[115.362822,35.972008],[115.335105,35.796522],[115.363438,35.78002],[115.460141,35.86783],[115.496481,35.885283],[115.646155,35.920663],[115.989849,36.045576],[116.099486,36.111826],[116.048979,35.970071],[115.911624,35.960385],[115.875284,35.859102],[115.773654,35.854252],[115.693582,35.75429],[115.48601,35.710091],[115.383148,35.569076],[115.357895,35.498475],[115.237171,35.422937],[115.093657,35.41611],[115.02036,35.364406],[114.929817,35.248196],[114.932281,35.197362],[114.841738,35.151389],[114.883006,35.098537],[114.824492,35.012335],[114.923658,34.968709],[115.028983,34.97165],[115.12815,35.004493],[115.189128,34.914757],[115.251953,34.906416],[115.256265,34.845549],[115.317243,34.859297],[115.42688,34.805273],[115.461373,34.637083],[115.515575,34.582421],[115.667096,34.557294],[115.697278,34.594243],[115.83032,34.562714],[116.101334,34.605571],[116.134594,34.559758],[116.196804,34.576017]]],[[[115.498329,35.897401],[115.487242,35.903702],[115.503257,35.91194],[115.503257,35.91194],[115.498329,35.897401]]],[[[113.749677,32.272196],[113.758301,32.296476],[113.757069,32.29243],[113.761996,32.268149],[113.749677,32.272196]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":420000,\"name\":\"湖北\",\"center\":[114.298572,30.584355],\"centroid\":[112.271042,30.98802],\"childrenNum\":17,\"level\":\"province\",\"subFeatureIndex\":16,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.232378,29.119533],[109.110422,29.215143],[109.11227,29.360737],[108.919481,29.326314],[108.927488,29.435281],[108.880677,29.442576],[108.91209,29.571714],[108.844337,29.658582],[108.785822,29.633622],[108.690968,29.689773],[108.666946,29.842472],[108.602273,29.865824],[108.504338,29.707964],[108.437201,29.741218],[108.424266,29.816],[108.371295,29.841434],[108.516041,29.885539],[108.542526,29.998047],[108.513577,30.057619],[108.56778,30.157517],[108.581947,30.255763],[108.460606,30.35959],[108.402092,30.376626],[108.42673,30.492184],[108.56778,30.468464],[108.688504,30.587519],[108.743939,30.494762],[108.808612,30.491153],[108.971836,30.627686],[109.114734,30.64416],[109.09256,30.578762],[109.103647,30.565883],[109.143683,30.521052],[109.299516,30.630775],[109.36111,30.550942],[109.35495,30.487028],[109.435638,30.59576],[109.590855,30.693566],[109.780564,30.848822],[109.893897,30.899662],[110.008462,30.883746],[110.082375,30.799496],[110.172918,30.978694],[110.135961,30.986902],[110.119947,31.088409],[110.189548,31.129391],[110.140273,31.390238],[110.054042,31.410666],[109.946252,31.506108],[109.848934,31.552008],[109.719586,31.555067],[109.76455,31.602981],[109.731289,31.700263],[109.585928,31.726731],[109.638282,31.811172],[109.584696,31.900617],[109.631507,31.962059],[109.590855,32.012807],[109.621652,32.106617],[109.592703,32.219568],[109.495385,32.300522],[109.502776,32.389489],[109.575457,32.506629],[109.637051,32.540935],[109.631507,32.599929],[109.726978,32.608498],[109.816905,32.577244],[109.910528,32.592872],[110.017701,32.546987],[110.085454,32.613034],[110.153824,32.593376],[110.206179,32.633191],[110.156903,32.683061],[110.159367,32.767122],[110.10886,32.82999],[109.988752,32.886281],[109.76455,32.909391],[109.794731,33.066977],[109.688174,33.116603],[109.576073,33.110088],[109.438718,33.152177],[109.537268,33.2438],[109.619804,33.27532],[109.732521,33.231288],[109.852013,33.247803],[110.031252,33.191742],[110.164911,33.209265],[110.218497,33.163197],[110.468569,33.181226],[110.54125,33.255809],[110.59422,33.168706],[110.702626,33.097057],[110.745741,33.147167],[110.824582,33.158188],[110.984726,33.255308],[111.032769,33.209265],[111.037081,33.187235],[111.031537,33.17722],[111.056791,33.192743],[111.179363,33.115601],[111.151029,33.053438],[111.238493,33.040899],[111.273601,32.971656],[111.242804,32.930486],[111.293311,32.859145],[111.380159,32.828984],[111.577875,32.593376],[111.640701,32.634703],[111.890157,32.503097],[111.948671,32.517225],[112.014576,32.450098],[112.228923,32.385447],[112.328089,32.321761],[112.390915,32.371298],[112.451893,32.344511],[112.544284,32.403635],[112.729066,32.366245],[112.730914,32.363212],[112.732146,32.362707],[112.733993,32.363718],[112.860877,32.395552],[112.992072,32.378373],[113.025949,32.425354],[113.118956,32.375846],[113.211962,32.431919],[113.425693,32.269161],[113.624642,32.361191],[113.664062,32.422324],[113.752757,32.388478],[113.758301,32.296476],[113.749677,32.272196],[113.783554,32.186153],[113.728735,32.0833],[113.791561,32.036142],[113.838373,31.854889],[113.954785,31.856413],[113.988662,31.750138],[114.088444,31.781677],[114.135871,31.843707],[114.195002,31.850315],[114.292936,31.752173],[114.448769,31.728257],[114.586123,31.762348],[114.549783,31.642721],[114.560869,31.561185],[114.641558,31.582085],[114.696376,31.526001],[114.778912,31.5209],[114.830035,31.458654],[115.024056,31.528551],[115.088729,31.507638],[115.12507,31.598904],[115.235323,31.556597],[115.22054,31.426494],[115.301229,31.384109],[115.373909,31.405559],[115.372062,31.349368],[115.442279,31.346303],[115.457677,31.281384],[115.516191,31.263485],[115.559307,31.160117],[115.646155,31.209768],[115.700973,31.201068],[115.763799,31.118123],[115.869125,31.147828],[115.938726,31.047409],[116.058834,31.012545],[116.071769,30.956633],[115.976298,30.931488],[115.865429,30.864231],[115.851262,30.756829],[115.782893,30.751687],[115.762567,30.685848],[115.819234,30.59782],[115.876516,30.582368],[115.921479,30.416364],[115.903001,30.313631],[115.985537,30.290901],[116.065609,30.204584],[116.091479,30.036385],[116.073616,29.970061],[116.127203,29.899544],[116.13521,29.819634],[115.965827,29.724593],[115.837096,29.748491],[115.667712,29.850257],[115.511264,29.839877],[115.471844,29.742777],[115.359127,29.646623],[115.142316,29.651822],[115.154019,29.51029],[115.00065,29.572235],[114.940904,29.494147],[114.860216,29.475917],[114.931049,29.422252],[114.759818,29.363345],[114.660652,29.393585],[114.519602,29.325271],[114.259059,29.344049],[114.252284,29.234985],[114.061959,29.204176],[113.952321,29.092871],[113.94185,29.047374],[113.877793,29.035343],[113.816199,29.105419],[113.749677,29.060973],[113.66283,29.1697],[113.689931,29.230808],[113.606779,29.253779],[113.686236,29.392021],[113.753373,29.43997],[113.630801,29.523307],[113.736743,29.576918],[113.664678,29.683536],[113.547033,29.675219],[113.566127,29.846105],[113.37765,29.703287],[113.145441,29.449349],[113.078304,29.438407],[113.057362,29.522265],[112.950188,29.472792],[112.912,29.607095],[113.004391,29.692892],[113.020405,29.772384],[112.937869,29.783809],[112.939101,29.768229],[112.926782,29.763036],[112.861493,29.78329],[112.79374,29.736023],[112.788812,29.681457],[112.687182,29.592528],[112.439574,29.633622],[112.369973,29.542048],[112.281278,29.536842],[112.303452,29.585244],[112.111279,29.659622],[112.07617,29.740179],[111.95483,29.796791],[111.962222,29.837282],[111.862439,29.856484],[111.807005,29.904213],[111.723853,29.909399],[111.723853,29.909399],[111.709686,29.897988],[111.709686,29.897988],[111.39063,29.914585],[111.244036,30.039492],[110.929907,30.063316],[110.924364,30.111463],[110.746973,30.113015],[110.712481,30.033277],[110.650887,30.077814],[110.497518,30.05503],[110.557264,29.988201],[110.498134,29.910955],[110.60038,29.839877],[110.642264,29.777578],[110.507373,29.691853],[110.360779,29.635702],[110.219729,29.746413],[110.113788,29.789521],[110.02386,29.769788],[109.869876,29.774462],[109.775637,29.755244],[109.714043,29.673139],[109.717739,29.614897],[109.516326,29.62582],[109.458428,29.513414],[109.343863,29.369602],[109.352487,29.284574],[109.258248,29.21932],[109.274262,29.122146],[109.232378,29.119533]]],[[[113.020405,29.772384],[112.926782,29.692372],[112.926782,29.763036],[112.939101,29.768229],[112.937869,29.783809],[113.020405,29.772384]]],[[[111.032769,33.209265],[111.056791,33.192743],[111.031537,33.17722],[111.037081,33.187235],[111.032769,33.209265]]],[[[109.106111,30.57052],[109.09872,30.579277],[109.100567,30.580823],[109.106727,30.572066],[109.106111,30.57052]]],[[[112.732146,32.362707],[112.730914,32.363212],[112.729066,32.366245],[112.733993,32.363718],[112.732146,32.362707]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":430000,\"name\":\"湖南\",\"center\":[112.982279,28.19409],\"centroid\":[111.754313,27.655081],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":17,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.965962,26.195699],[110.017701,26.343246],[109.932701,26.476145],[109.856325,26.465433],[109.892665,26.525408],[109.82676,26.605681],[109.946252,26.685899],[109.838463,26.72759],[109.821216,26.781017],[109.652449,26.76232],[109.660456,26.709419],[109.590855,26.686433],[109.529261,26.740414],[109.548971,26.737208],[109.548971,26.737208],[109.528029,26.744689],[109.52187,26.748964],[109.504624,26.805051],[109.500928,26.828546],[109.486761,26.895267],[109.555131,26.947015],[109.520022,27.058433],[109.454733,27.069622],[109.472595,27.135136],[109.415928,27.15377],[109.267487,27.128746],[109.164625,27.065893],[109.07901,27.115965],[108.87575,26.999273],[108.791366,27.084539],[108.878829,27.106378],[108.907162,27.2054],[109.040821,27.276151],[109.142451,27.418051],[109.202197,27.449913],[109.300132,27.423893],[109.303211,27.475396],[109.461508,27.567724],[109.470747,27.68011],[109.332777,27.782853],[109.345711,27.840537],[109.30198,27.956342],[109.378972,28.032948],[109.298284,28.036117],[109.340168,28.190216],[109.388211,28.268236],[109.27303,28.310386],[109.274262,28.494592],[109.321074,28.581322],[109.304443,28.623871],[109.201581,28.598133],[109.2989,28.747221],[109.241002,28.776594],[109.235458,28.882476],[109.319842,29.042667],[109.232378,29.119533],[109.274262,29.122146],[109.258248,29.21932],[109.352487,29.284574],[109.343863,29.369602],[109.458428,29.513414],[109.516326,29.62582],[109.717739,29.614897],[109.714043,29.673139],[109.775637,29.755244],[109.869876,29.774462],[110.02386,29.769788],[110.113788,29.789521],[110.219729,29.746413],[110.360779,29.635702],[110.507373,29.691853],[110.642264,29.777578],[110.60038,29.839877],[110.498134,29.910955],[110.557264,29.988201],[110.497518,30.05503],[110.650887,30.077814],[110.712481,30.033277],[110.746973,30.113015],[110.924364,30.111463],[110.929907,30.063316],[111.244036,30.039492],[111.39063,29.914585],[111.709686,29.897988],[111.709686,29.897988],[111.723853,29.909399],[111.723853,29.909399],[111.807005,29.904213],[111.862439,29.856484],[111.962222,29.837282],[111.95483,29.796791],[112.07617,29.740179],[112.111279,29.659622],[112.303452,29.585244],[112.281278,29.536842],[112.369973,29.542048],[112.439574,29.633622],[112.687182,29.592528],[112.788812,29.681457],[112.79374,29.736023],[112.861493,29.78329],[112.926782,29.763036],[112.926782,29.692372],[113.020405,29.772384],[113.004391,29.692892],[112.912,29.607095],[112.950188,29.472792],[113.057362,29.522265],[113.078304,29.438407],[113.145441,29.449349],[113.37765,29.703287],[113.566127,29.846105],[113.547033,29.675219],[113.664678,29.683536],[113.736743,29.576918],[113.630801,29.523307],[113.753373,29.43997],[113.686236,29.392021],[113.606779,29.253779],[113.689931,29.230808],[113.66283,29.1697],[113.749677,29.060973],[113.816199,29.105419],[113.877793,29.035343],[113.94185,29.047374],[113.966488,28.945326],[114.008988,28.955273],[114.076741,28.834266],[114.152502,28.83479],[114.157429,28.761384],[114.08598,28.558201],[114.218407,28.484601],[114.172212,28.432524],[114.252284,28.395687],[114.25598,28.323554],[114.107538,28.182833],[113.992357,28.161207],[114.047176,28.05724],[113.914133,27.991218],[113.864242,28.004954],[113.752141,27.933614],[113.729967,27.887086],[113.763228,27.799262],[113.607395,27.625522],[113.583374,27.524754],[113.632033,27.405303],[113.616635,27.345264],[113.872865,27.385116],[113.848844,27.225087],[113.779242,27.137265],[113.821126,27.037651],[113.927068,26.949149],[113.834677,26.803983],[113.860546,26.663978],[113.915365,26.613706],[114.106306,26.576254],[114.073046,26.480965],[114.085364,26.4065],[114.030546,26.376485],[114.029314,26.266545],[113.944314,26.16402],[114.088444,26.168316],[114.181451,26.214489],[114.237501,26.152204],[114.044096,26.076452],[114.007756,26.007104],[114.028082,25.893586],[113.971416,25.835979],[113.913517,25.701272],[113.983118,25.599332],[113.94493,25.441667],[113.887032,25.436804],[113.822974,25.331935],[113.753373,25.362756],[113.611707,25.326527],[113.611707,25.326527],[113.535946,25.368704],[113.449715,25.359512],[113.373338,25.402758],[113.311129,25.490284],[113.248919,25.514045],[113.11834,25.445449],[113.080151,25.3833],[112.900297,25.311383],[112.867036,25.249706],[112.992688,25.247],[113.034572,25.198285],[112.96805,25.141426],[113.018557,25.082914],[112.979137,25.034133],[113.011782,24.946279],[112.871348,24.895816],[112.780805,24.896901],[112.712436,25.083456],[112.660081,25.132759],[112.414937,25.142509],[112.369357,25.189081],[112.3053,25.157132],[112.187039,25.182584],[112.155626,25.026544],[112.119902,24.963638],[112.175337,24.92729],[112.171025,24.86379],[112.097112,24.826327],[112.024431,24.739955],[111.951135,24.769839],[111.68936,24.778531],[111.570484,24.644821],[111.431282,24.687776],[111.479325,24.797543],[111.470086,24.928917],[111.43313,24.97991],[111.435593,25.09321],[111.321645,25.10513],[111.274833,25.151175],[111.200921,25.074786],[111.101754,25.035218],[111.100522,24.945736],[110.991501,24.924034],[110.951465,25.043891],[110.998892,25.161465],[111.112841,25.217232],[111.103602,25.284877],[111.301319,25.450851],[111.343202,25.602569],[111.30871,25.72014],[111.442369,25.771877],[111.43313,25.84621],[111.49226,25.868824],[111.346282,25.906504],[111.252043,25.864517],[111.189834,25.953318],[111.267442,26.058716],[111.279761,26.271911],[111.204616,26.307852],[111.092515,26.306779],[110.94469,26.373805],[110.939146,26.28425],[110.76114,26.248838],[110.612083,26.333594],[110.555416,26.286396],[110.516612,26.186035],[110.373098,26.08935],[110.325671,25.975373],[110.257301,25.961388],[110.201251,26.066241],[110.165527,26.023773],[110.065128,26.051191],[110.099005,26.16939],[109.965962,26.195699]]],[[[109.48245,26.029687],[109.449805,26.101709],[109.486761,26.148445],[109.486761,26.148445],[109.439334,26.238641],[109.466435,26.314288],[109.340784,26.264399],[109.285965,26.296052],[109.326001,26.427398],[109.407305,26.532902],[109.35495,26.693383],[109.454117,26.761252],[109.52187,26.748964],[109.528029,26.744689],[109.529261,26.740414],[109.590855,26.686433],[109.660456,26.709419],[109.652449,26.76232],[109.821216,26.781017],[109.838463,26.72759],[109.946252,26.685899],[109.82676,26.605681],[109.892665,26.525408],[109.856325,26.465433],[109.932701,26.476145],[110.017701,26.343246],[109.965962,26.195699],[109.906832,26.143611],[109.864332,26.027537],[109.783028,25.988282],[109.806434,25.874746],[109.685094,25.880129],[109.730057,25.989895],[109.635203,26.047428],[109.513247,25.997962],[109.48245,26.029687]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":440000,\"name\":\"广东\",\"center\":[113.280637,23.125178],\"centroid\":[113.429877,23.334664],\"childrenNum\":22,\"level\":\"province\",\"subFeatureIndex\":18,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.785492,21.457116],[109.742992,21.61629],[109.898209,21.649661],[109.940709,21.734723],[109.94502,21.844172],[110.051578,21.856945],[110.119947,21.901918],[110.200019,21.898587],[110.200019,21.898587],[110.388497,21.89026],[110.355236,22.061709],[110.355236,22.061709],[110.350924,22.072799],[110.350924,22.072799],[110.414366,22.20858],[110.488895,22.144863],[110.560344,22.196393],[110.629329,22.149296],[110.646575,22.222982],[110.725415,22.295522],[110.785777,22.294415],[110.711249,22.369684],[110.778386,22.585304],[111.055559,22.648268],[111.056791,22.72776],[111.202152,22.740452],[111.358601,22.889362],[111.363528,22.968713],[111.433746,23.036456],[111.377695,23.082149],[111.388782,23.210337],[111.353673,23.28895],[111.399869,23.469638],[111.479941,23.532738],[111.487332,23.62651],[111.615448,23.639117],[111.667187,23.718023],[111.621607,23.725692],[111.664723,23.83465],[111.8107,23.806735],[111.812548,23.887727],[111.940664,23.987803],[111.878454,24.110195],[111.877838,24.229196],[111.939432,24.230287],[112.029975,24.297925],[112.057692,24.387327],[111.985011,24.467953],[112.007185,24.534376],[111.937584,24.595323],[111.961606,24.720934],[112.024431,24.739955],[112.097112,24.826327],[112.171025,24.86379],[112.175337,24.92729],[112.119902,24.963638],[112.155626,25.026544],[112.187039,25.182584],[112.3053,25.157132],[112.369357,25.189081],[112.414937,25.142509],[112.660081,25.132759],[112.712436,25.083456],[112.780805,24.896901],[112.871348,24.895816],[113.011782,24.946279],[112.979137,25.034133],[113.018557,25.082914],[112.96805,25.141426],[113.034572,25.198285],[112.992688,25.247],[112.867036,25.249706],[112.900297,25.311383],[113.080151,25.3833],[113.11834,25.445449],[113.248919,25.514045],[113.311129,25.490284],[113.373338,25.402758],[113.449715,25.359512],[113.535946,25.368704],[113.611707,25.326527],[113.611707,25.326527],[113.753373,25.362756],[113.822974,25.331935],[113.887032,25.436804],[113.94493,25.441667],[114.051488,25.348699],[114.039785,25.250789],[114.13156,25.30922],[114.262755,25.29191],[114.31511,25.338424],[114.381015,25.31571],[114.535616,25.41681],[114.63663,25.324364],[114.743188,25.274597],[114.679746,25.194495],[114.735796,25.121925],[114.640326,25.073702],[114.561485,25.077495],[114.506051,24.999975],[114.395798,24.951161],[114.403189,24.877361],[114.33482,24.747562],[114.27261,24.700279],[114.169132,24.689407],[114.258443,24.641558],[114.308334,24.574104],[114.391486,24.562677],[114.428443,24.486468],[114.534384,24.558867],[114.589819,24.537642],[114.664963,24.583898],[114.704999,24.526211],[114.729637,24.608924],[114.868839,24.562132],[114.909491,24.661679],[115.056701,24.703541],[115.095505,24.674184],[115.308004,24.758429],[115.358511,24.735064],[115.412714,24.792654],[115.556227,24.682883],[115.573474,24.617083],[115.67264,24.604028],[115.688038,24.545261],[115.845103,24.563221],[115.756408,24.749192],[115.822313,24.90884],[115.907313,24.880075],[115.89253,24.937056],[116.014486,24.905584],[116.068073,24.849675],[116.18079,24.87519],[116.245464,24.793197],[116.376659,24.820353],[116.44626,24.714412],[116.486912,24.71876],[116.525716,24.604572],[116.597165,24.65461],[116.778867,24.680165],[116.815207,24.655154],[116.761005,24.58281],[116.789338,24.50988],[116.860787,24.462507],[116.903903,24.369888],[116.933468,24.21992],[116.998757,24.178988],[116.9347,24.127123],[116.939627,24.033713],[116.981511,23.999282],[116.980279,23.881709],[117.012308,23.855446],[117.053576,23.696657],[117.192778,23.629799],[117.192778,23.561809],[117.054192,23.542064],[117.01046,23.502564],[116.921765,23.53219],[116.874953,23.447683],[116.874338,23.447683],[116.871258,23.416391],[116.871874,23.415842],[116.782563,23.313679],[116.806584,23.200989],[116.74499,23.215286],[116.550969,23.109668],[116.576839,23.014429],[116.50539,22.930696],[116.382818,22.919124],[116.317528,22.952736],[116.226985,22.914715],[116.106877,22.817685],[116.073616,22.8425],[115.883291,22.785142],[115.796444,22.739349],[115.788437,22.809964],[115.654162,22.865657],[115.542677,22.76142],[115.606119,22.754799],[115.57409,22.650477],[115.471844,22.697956],[115.381301,22.684156],[115.338185,22.776867],[115.230396,22.776867],[115.236555,22.825406],[115.054853,22.777419],[115.04007,22.712307],[114.87623,22.589724],[114.747499,22.581437],[114.728405,22.651029],[114.749963,22.764179],[114.709927,22.7879],[114.512826,22.655446],[114.603369,22.63888],[114.559022,22.583094],[114.616304,22.54276],[114.611377,22.481959],[114.485109,22.446572],[114.467863,22.533365],[114.41058,22.599667],[114.232574,22.539997],[114.185762,22.551601],[114.185762,22.551601],[114.045944,22.502413],[114.044096,22.502413],[114.031778,22.504071],[113.959097,22.505177],[113.891959,22.442701],[113.733663,22.73659],[113.678228,22.726104],[113.740438,22.53447],[113.631417,22.475877],[113.669605,22.416154],[113.558736,22.213012],[113.553809,22.107727],[113.442324,22.009575],[113.330223,21.961861],[113.246455,21.880266],[113.091854,22.065591],[113.032724,22.072799],[113.037652,21.935223],[112.944645,21.84195],[112.795587,21.923567],[112.651458,21.761954],[112.523342,21.760842],[112.439574,21.803624],[112.415553,21.734723],[112.24001,21.701371],[112.192583,21.78918],[112.036134,21.761398],[111.951135,21.671904],[112.026895,21.633533],[111.811316,21.558985],[111.810084,21.604609],[111.693672,21.590144],[111.677658,21.52949],[111.382623,21.495534],[111.257587,21.413675],[111.28284,21.485513],[111.061102,21.44932],[110.929291,21.375792],[110.799328,21.374678],[110.626249,21.215797],[110.422373,21.190695],[110.388497,21.125968],[110.296722,21.093594],[110.180925,20.981905],[110.201251,20.867337],[110.390344,20.820367],[110.392192,20.682727],[110.466105,20.680488],[110.548025,20.477715],[110.545561,20.42726],[110.452554,20.311151],[110.349076,20.258958],[110.118099,20.219661],[110.082375,20.258958],[109.910528,20.224152],[109.916071,20.316762],[109.861252,20.376789],[109.888354,20.475473],[109.839695,20.489485],[109.793499,20.61554],[109.74484,20.62114],[109.730057,20.719667],[109.654913,20.903673],[109.674623,21.136572],[109.763934,21.226395],[109.757775,21.346816],[109.868644,21.365763],[109.894513,21.44208],[109.785492,21.457116]]],[[[117.100387,23.401566],[116.946402,23.421881],[117.129336,23.483358],[117.100387,23.401566]]],[[[112.853486,21.74028],[112.804826,21.686361],[112.817145,21.590144],[112.730914,21.613509],[112.782037,21.665788],[112.70566,21.679133],[112.831312,21.77529],[112.853486,21.74028]]],[[[112.625588,21.616847],[112.535045,21.628527],[112.663776,21.714157],[112.625588,21.616847]]],[[[110.495054,21.075171],[110.560344,21.061213],[110.535706,20.923235],[110.47288,20.983022],[110.347845,20.984698],[110.201251,20.938324],[110.211106,20.986933],[110.305961,21.088012],[110.495054,21.075171]]],[[[110.501829,21.142711],[110.431612,21.181211],[110.634256,21.21022],[110.582517,21.094711],[110.501829,21.142711]]],[[[116.769628,20.771704],[116.88604,20.77562],[116.934084,20.67657],[116.862635,20.588657],[116.749302,20.600979],[116.849084,20.62842],[116.87249,20.738134],[116.769628,20.771704]]],[[[110.598532,20.857273],[110.548641,20.908703],[110.584365,20.948941],[110.646575,20.917087],[110.598532,20.857273]]],[[[115.943037,21.097502],[116.044051,21.11034],[116.067457,21.040552],[115.989233,21.035526],[115.943037,21.097502]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":450000,\"name\":\"广西\",\"center\":[108.320004,22.82402],\"centroid\":[108.794237,23.833575],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":19,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[112.024431,24.739955],[111.961606,24.720934],[111.937584,24.595323],[112.007185,24.534376],[111.985011,24.467953],[112.057692,24.387327],[112.029975,24.297925],[111.939432,24.230287],[111.877838,24.229196],[111.878454,24.110195],[111.940664,23.987803],[111.812548,23.887727],[111.8107,23.806735],[111.664723,23.83465],[111.621607,23.725692],[111.667187,23.718023],[111.615448,23.639117],[111.487332,23.62651],[111.479941,23.532738],[111.399869,23.469638],[111.353673,23.28895],[111.388782,23.210337],[111.377695,23.082149],[111.433746,23.036456],[111.363528,22.968713],[111.358601,22.889362],[111.202152,22.740452],[111.056791,22.72776],[111.055559,22.648268],[110.778386,22.585304],[110.711249,22.369684],[110.785777,22.294415],[110.725415,22.295522],[110.646575,22.222982],[110.629329,22.149296],[110.560344,22.196393],[110.488895,22.144863],[110.414366,22.20858],[110.350924,22.072799],[110.350924,22.072799],[110.355236,22.061709],[110.355236,22.061709],[110.388497,21.89026],[110.200019,21.898587],[110.200019,21.898587],[110.119947,21.901918],[110.051578,21.856945],[109.94502,21.844172],[109.940709,21.734723],[109.898209,21.649661],[109.742992,21.61629],[109.785492,21.457116],[109.704188,21.462684],[109.612413,21.55676],[109.540964,21.466025],[109.245929,21.425929],[109.138756,21.389163],[109.042669,21.464355],[109.150459,21.523924],[109.142451,21.56455],[108.937959,21.589588],[108.881293,21.627415],[108.74517,21.599046],[108.710062,21.646881],[108.591802,21.677465],[108.479085,21.546743],[108.338651,21.541177],[108.230245,21.49108],[108.235173,21.60294],[108.106441,21.508895],[108.030681,21.546186],[107.956768,21.535055],[107.860066,21.651886],[107.546553,21.58625],[107.46956,21.659671],[107.388256,21.594039],[107.310648,21.733611],[107.247206,21.703039],[107.088294,21.805291],[107.011917,21.826399],[107.05996,21.915241],[106.999598,21.947433],[106.73844,22.007911],[106.681158,21.995152],[106.717498,22.074463],[106.673151,22.182543],[106.7021,22.206918],[106.663296,22.330948],[106.562282,22.34589],[106.562282,22.462608],[106.61402,22.601876],[106.710723,22.57536],[106.768621,22.739349],[106.841302,22.799484],[106.606013,22.925737],[106.366413,22.857939],[106.286957,22.86676],[106.206885,22.978629],[106.019639,22.990747],[105.994385,22.93786],[105.893987,22.936758],[105.724604,23.062332],[105.574931,23.066186],[105.542902,23.18449],[105.531815,23.248275],[105.694423,23.363122],[105.699966,23.401566],[105.815763,23.506953],[105.89214,23.525058],[105.999929,23.447683],[106.141595,23.569487],[106.120653,23.605129],[106.157609,23.724048],[106.136667,23.795238],[106.192102,23.824798],[106.04982,24.089986],[105.933407,24.123847],[105.89214,24.040271],[105.704278,24.066497],[105.649459,24.033167],[105.628518,24.126577],[105.529967,24.129308],[105.481924,24.018958],[105.320548,24.116202],[105.260186,24.061033],[105.20044,24.105279],[105.229389,24.165888],[105.164715,24.288109],[105.188121,24.346995],[105.063085,24.429281],[105.063085,24.429281],[104.979933,24.412937],[104.83642,24.446712],[104.72863,24.446167],[104.70892,24.321372],[104.610986,24.376973],[104.492109,24.656241],[104.529682,24.73126],[104.63316,24.65896],[104.743413,24.621978],[104.841963,24.676359],[104.899245,24.752996],[105.03352,24.787765],[105.077868,24.918065],[105.082179,24.915895],[105.096346,24.928375],[105.09573,24.928375],[105.198592,24.995095],[105.265729,24.930003],[105.365511,24.943566],[105.445584,24.918608],[105.500402,24.807862],[105.70551,24.768752],[105.827466,24.702997],[105.942031,24.724738],[106.023335,24.632313],[106.045508,24.681796],[106.173008,24.760059],[106.206269,24.851304],[106.146522,24.948449],[106.215508,24.982079],[106.304819,24.973944],[106.590615,25.087791],[106.684238,25.178252],[106.732281,25.162548],[106.900432,25.194495],[106.912751,25.243212],[107.013765,25.275138],[107.012533,25.353024],[106.963874,25.437884],[107.066736,25.509186],[107.064272,25.559395],[107.228728,25.604728],[107.336517,25.461116],[107.318039,25.401677],[107.420901,25.393029],[107.432604,25.289205],[107.481263,25.300024],[107.472024,25.213984],[107.599523,25.250789],[107.659885,25.316251],[107.700537,25.193954],[107.741805,25.239965],[107.841587,25.115966],[108.001732,25.196661],[108.115065,25.210195],[108.152021,25.324364],[108.142782,25.390867],[108.348506,25.536183],[108.418723,25.443287],[108.471693,25.458955],[108.625062,25.308138],[108.6072,25.491904],[108.68912,25.623072],[108.763649,25.637097],[108.781511,25.554537],[108.949046,25.557236],[109.025423,25.512426],[109.088249,25.550758],[109.030966,25.629545],[109.07901,25.720679],[109.000785,25.73631],[108.953974,25.686714],[108.953974,25.686714],[108.896076,25.71421],[108.989698,25.778881],[109.143683,25.795044],[109.147995,25.7417],[109.3414,25.732537],[109.339552,25.834363],[109.435022,25.933411],[109.408537,25.967305],[109.48245,26.029687],[109.513247,25.997962],[109.635203,26.047428],[109.730057,25.989895],[109.685094,25.880129],[109.806434,25.874746],[109.783028,25.988282],[109.864332,26.027537],[109.906832,26.143611],[109.965962,26.195699],[110.099005,26.16939],[110.065128,26.051191],[110.165527,26.023773],[110.201251,26.066241],[110.257301,25.961388],[110.325671,25.975373],[110.373098,26.08935],[110.516612,26.186035],[110.555416,26.286396],[110.612083,26.333594],[110.76114,26.248838],[110.939146,26.28425],[110.94469,26.373805],[111.092515,26.306779],[111.204616,26.307852],[111.279761,26.271911],[111.267442,26.058716],[111.189834,25.953318],[111.252043,25.864517],[111.346282,25.906504],[111.49226,25.868824],[111.43313,25.84621],[111.442369,25.771877],[111.30871,25.72014],[111.343202,25.602569],[111.301319,25.450851],[111.103602,25.284877],[111.112841,25.217232],[110.998892,25.161465],[110.951465,25.043891],[110.991501,24.924034],[111.100522,24.945736],[111.101754,25.035218],[111.200921,25.074786],[111.274833,25.151175],[111.321645,25.10513],[111.435593,25.09321],[111.43313,24.97991],[111.470086,24.928917],[111.479325,24.797543],[111.431282,24.687776],[111.570484,24.644821],[111.68936,24.778531],[111.951135,24.769839],[112.024431,24.739955]]],[[[105.082179,24.915895],[105.077868,24.918065],[105.09573,24.928375],[105.096346,24.928375],[105.082179,24.915895]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":460000,\"name\":\"海南\",\"center\":[110.33119,20.031971],\"centroid\":[109.754777,19.189617],\"childrenNum\":19,\"level\":\"province\",\"subFeatureIndex\":20,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.231147,19.863293],[109.300748,19.917868],[109.498464,19.873422],[109.585312,19.98817],[109.712195,20.017406],[109.76147,19.981422],[109.965346,19.993792],[110.106396,20.026963],[110.144585,20.074176],[110.291178,20.056754],[110.318279,20.109015],[110.526467,20.0753],[110.562191,20.109577],[110.717408,20.148901],[110.744509,20.074176],[110.871393,20.011784],[110.969327,20.010097],[111.071573,19.629025],[110.920668,19.552926],[110.844292,19.450278],[110.729727,19.378611],[110.619474,19.152118],[110.578206,18.78489],[110.499366,18.751466],[110.495054,18.65002],[110.329366,18.64265],[110.246215,18.609764],[110.117483,18.507666],[110.090382,18.399262],[110.022629,18.360083],[109.919767,18.375415],[109.785492,18.339639],[109.749767,18.193617],[109.584696,18.143589],[109.355566,18.215216],[109.287813,18.264655],[109.138756,18.268064],[109.117814,18.322032],[108.944735,18.31408],[108.888068,18.412319],[108.68912,18.447513],[108.644772,18.486672],[108.663866,18.673261],[108.593033,18.809246],[108.637997,18.920785],[108.591186,19.14477],[108.609048,19.276417],[108.663866,19.374095],[108.765496,19.401187],[109.048829,19.620007],[109.169553,19.736628],[109.159082,19.790684],[109.231147,19.863293]]],[[[113.896887,7.607259],[114.029314,7.670119],[114.211632,7.786918],[114.268298,7.870496],[114.414892,7.952872],[114.540543,7.945761],[114.540543,7.862199],[114.419819,7.765577],[114.368696,7.63869],[114.157429,7.56159],[113.98743,7.536085],[113.896887,7.607259]]],[[[111.660411,16.258092],[111.606825,16.17766],[111.569252,16.195472],[111.660411,16.258092]]],[[[113.976959,8.872658],[114.060111,8.816493],[114.037321,8.781016],[113.976959,8.872658]]],[[[112.067547,16.319543],[111.97454,16.323563],[112.047221,16.360309],[112.067547,16.319543]]],[[[115.837712,9.709358],[115.925791,9.7813],[115.901153,9.671021],[115.837712,9.709358]]],[[[109.463972,7.344453],[109.536037,7.448882],[109.653065,7.559218],[109.72205,7.575825],[109.904984,7.551507],[109.938861,7.504647],[109.791651,7.524815],[109.654297,7.479138],[109.513247,7.320122],[109.463972,7.344453]]],[[[112.527654,16.058099],[112.607726,16.066724],[112.570154,16.010945],[112.448814,16.005194],[112.527654,16.058099]]],[[[114.469095,10.83618],[114.587355,10.90904],[114.565181,10.836767],[114.469095,10.83618]]],[[[112.383524,16.266134],[112.528886,16.318395],[112.538741,16.289107],[112.383524,16.266134]]],[[[116.48876,10.395704],[116.514629,10.349208],[116.637817,10.3651],[116.566368,10.304472],[116.467202,10.309182],[116.48876,10.395704]]],[[[115.16757,8.386402],[115.315395,8.356213],[115.285214,8.314772],[115.18112,8.345557],[115.16757,8.386402]]],[[[109.936397,7.848566],[109.953027,7.888869],[110.078063,7.949317],[110.050346,7.846195],[109.988136,7.812408],[109.936397,7.848566]]],[[[114.696992,11.004203],[114.766593,11.110489],[114.793079,11.076435],[114.696992,11.004203]]],[[[110.459946,8.116389],[110.568351,8.172657],[110.554184,8.09388],[110.471032,8.071962],[110.459946,8.116389]]],[[[117.266691,10.691581],[117.369553,10.742727],[117.404661,10.671002],[117.266691,10.691581]]],[[[113.80696,19.223319],[113.920293,19.223319],[113.874097,19.151553],[113.80696,19.223319]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":500000,\"name\":\"重庆\",\"center\":[106.504962,29.533155],\"centroid\":[107.88398,30.067321],\"childrenNum\":38,\"level\":\"province\",\"subFeatureIndex\":21,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.09256,30.578762],[109.114734,30.64416],[108.971836,30.627686],[108.808612,30.491153],[108.743939,30.494762],[108.688504,30.587519],[108.56778,30.468464],[108.42673,30.492184],[108.402092,30.376626],[108.460606,30.35959],[108.581947,30.255763],[108.56778,30.157517],[108.513577,30.057619],[108.542526,29.998047],[108.516041,29.885539],[108.371295,29.841434],[108.424266,29.816],[108.437201,29.741218],[108.504338,29.707964],[108.602273,29.865824],[108.666946,29.842472],[108.690968,29.689773],[108.785822,29.633622],[108.844337,29.658582],[108.91209,29.571714],[108.880677,29.442576],[108.927488,29.435281],[108.919481,29.326314],[109.11227,29.360737],[109.110422,29.215143],[109.232378,29.119533],[109.319842,29.042667],[109.235458,28.882476],[109.241002,28.776594],[109.2989,28.747221],[109.201581,28.598133],[109.304443,28.623871],[109.321074,28.581322],[109.274262,28.494592],[109.191726,28.470927],[109.152306,28.349885],[109.081473,28.249264],[109.086401,28.184942],[109.026655,28.220271],[109.006329,28.163317],[108.922561,28.217635],[108.772888,28.21289],[108.726692,28.282463],[108.764881,28.306698],[108.779663,28.425158],[108.710678,28.500902],[108.640461,28.457251],[108.688504,28.422527],[108.668178,28.334614],[108.611512,28.324607],[108.577019,28.534024],[108.636149,28.621245],[108.565316,28.662204],[108.471077,28.627548],[108.332491,28.679528],[108.385462,28.772398],[108.352817,28.815395],[108.350353,28.933282],[108.268433,29.089734],[108.256115,29.040574],[108.068253,29.086597],[108.024521,29.038482],[107.930899,29.035343],[107.867457,28.960508],[107.784921,29.04842],[107.810791,29.138348],[107.751044,29.199997],[107.701769,29.142006],[107.589052,29.149845],[107.570574,29.218276],[107.486806,29.174402],[107.404271,29.187984],[107.412894,29.095485],[107.36485,29.010753],[107.441227,28.943755],[107.383945,28.848417],[107.219489,28.772923],[107.191156,28.888763],[107.057497,28.895049],[106.983584,28.851561],[106.986664,28.793899],[106.986664,28.793899],[106.926302,28.809104],[106.824056,28.756139],[106.883186,28.69265],[106.866556,28.624397],[106.73844,28.554522],[106.7446,28.465667],[106.632499,28.503531],[106.564745,28.485127],[106.63681,28.623346],[106.562897,28.753516],[106.45326,28.816968],[106.504999,28.662204],[106.484057,28.530344],[106.395978,28.570287],[106.37442,28.525613],[106.304203,28.650653],[106.248152,28.829024],[106.173008,28.92019],[106.048588,28.906573],[106.043661,28.954226],[105.970364,28.966267],[105.88906,28.909716],[105.762176,28.991391],[105.693807,29.267351],[105.518264,29.264219],[105.427721,29.316924],[105.428337,29.417562],[105.380294,29.456643],[105.380294,29.456643],[105.324859,29.448828],[105.289751,29.552979],[105.38399,29.67002],[105.476996,29.674699],[105.575547,29.745374],[105.619894,29.846624],[105.709206,29.840396],[105.70243,29.924957],[105.753553,30.018254],[105.687648,30.038974],[105.582938,30.123884],[105.582938,30.127507],[105.580474,30.129577],[105.574315,30.130611],[105.56138,30.183898],[105.571235,30.17976],[105.642684,30.186484],[105.624822,30.275917],[105.720292,30.252662],[105.720292,30.252662],[105.714749,30.322927],[105.792357,30.427199],[105.881053,30.387465],[106.031958,30.373529],[106.10587,30.310531],[106.17116,30.306399],[106.180399,30.23302],[106.256776,30.19631],[106.262935,30.211306],[106.428623,30.254729],[106.451412,30.307949],[106.451412,30.307949],[106.610941,30.292451],[106.610941,30.292451],[106.612789,30.235605],[106.612789,30.235605],[106.612173,30.235605],[106.612173,30.235605],[106.611557,30.235605],[106.612173,30.235605],[106.611557,30.235605],[106.677462,30.157],[106.726121,30.033277],[106.825904,30.031205],[106.825904,30.031205],[106.913367,30.025506],[106.974345,30.082992],[106.976193,30.083509],[106.980504,30.085062],[106.981736,30.085062],[107.053801,30.043636],[107.054417,30.041046],[107.055649,30.040528],[107.058113,30.043118],[107.221337,30.213891],[107.359923,30.456087],[107.516987,30.644675],[107.424597,30.740889],[107.514524,30.854986],[107.645103,30.821079],[107.739957,30.884259],[107.763979,30.816968],[107.85329,30.793842],[107.994956,30.90839],[107.943833,30.989466],[108.053471,31.040745],[108.009123,31.10839],[108.083652,31.185713],[108.095354,31.268088],[108.185898,31.337104],[108.153869,31.371338],[108.216079,31.410666],[108.191441,31.492333],[108.34173,31.509679],[108.391621,31.593298],[108.517889,31.665131],[108.535135,31.757769],[108.343578,31.860987],[108.259194,31.966628],[108.373759,32.077217],[108.447672,32.07164],[108.369447,32.173493],[108.509882,32.201343],[108.67249,32.104083],[108.734084,32.106617],[108.902235,31.984899],[108.988466,31.979317],[109.164009,31.877247],[109.195422,31.817782],[109.273646,31.801003],[109.281654,31.717061],[109.585928,31.726731],[109.731289,31.700263],[109.76455,31.602981],[109.719586,31.555067],[109.848934,31.552008],[109.946252,31.506108],[110.054042,31.410666],[110.140273,31.390238],[110.189548,31.129391],[110.119947,31.088409],[110.135961,30.986902],[110.172918,30.978694],[110.082375,30.799496],[110.008462,30.883746],[109.893897,30.899662],[109.780564,30.848822],[109.590855,30.693566],[109.435638,30.59576],[109.35495,30.487028],[109.36111,30.550942],[109.299516,30.630775],[109.143683,30.521052],[109.103647,30.565883],[109.106111,30.57052],[109.106727,30.572066],[109.108575,30.576702],[109.102415,30.580308],[109.100567,30.580823],[109.09872,30.579277],[109.09256,30.578762]]],[[[105.574315,30.130611],[105.580474,30.129577],[105.582938,30.127507],[105.582938,30.123884],[105.574315,30.130611]]],[[[109.09256,30.578762],[109.09872,30.579277],[109.106111,30.57052],[109.103647,30.565883],[109.09256,30.578762]]],[[[109.102415,30.580308],[109.108575,30.576702],[109.106727,30.572066],[109.100567,30.580823],[109.102415,30.580308]]],[[[107.053801,30.043636],[107.058113,30.043118],[107.055649,30.040528],[107.054417,30.041046],[107.053801,30.043636]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":510000,\"name\":\"四川\",\"center\":[104.065735,30.659462],\"centroid\":[102.693438,30.674548],\"childrenNum\":21,\"level\":\"province\",\"subFeatureIndex\":22,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[105.720292,30.252662],[105.720292,30.252662],[105.624822,30.275917],[105.642684,30.186484],[105.571235,30.17976],[105.56138,30.188035],[105.558916,30.18545],[105.56138,30.183898],[105.574315,30.130611],[105.582938,30.123884],[105.687648,30.038974],[105.753553,30.018254],[105.70243,29.924957],[105.709206,29.840396],[105.619894,29.846624],[105.575547,29.745374],[105.476996,29.674699],[105.38399,29.67002],[105.289751,29.552979],[105.324859,29.448828],[105.380294,29.456643],[105.380294,29.456643],[105.428337,29.417562],[105.427721,29.316924],[105.518264,29.264219],[105.693807,29.267351],[105.762176,28.991391],[105.88906,28.909716],[105.970364,28.966267],[106.043661,28.954226],[106.048588,28.906573],[106.173008,28.92019],[106.248152,28.829024],[106.304203,28.650653],[106.37442,28.525613],[106.330688,28.481971],[106.2925,28.537177],[106.103407,28.636476],[105.966668,28.76086],[105.891524,28.672179],[105.884748,28.594981],[105.749242,28.614943],[105.683952,28.535601],[105.62359,28.518253],[105.639604,28.32408],[105.730147,28.271925],[105.826234,28.304064],[105.88906,28.238722],[105.860111,28.165955],[105.975907,28.107917],[106.126812,28.16701],[106.206885,28.134302],[106.328225,27.952643],[106.304819,27.899249],[106.343007,27.821489],[106.193334,27.754265],[106.120653,27.779677],[106.023335,27.746851],[105.78435,27.719312],[105.62359,27.666333],[105.605112,27.715605],[105.508409,27.769089],[105.353809,27.74897],[105.308229,27.705011],[105.273736,27.795028],[105.308229,27.810376],[105.308229,27.810376],[105.244171,27.823077],[105.233084,27.895547],[105.284823,27.935729],[105.270657,27.99703],[105.186273,27.995445],[105.186889,28.0546],[105.05939,28.097889],[104.872144,27.905594],[104.743413,27.901892],[104.573413,27.840537],[104.40095,27.952114],[104.354139,28.019744],[104.44653,28.112666],[104.44961,28.269817],[104.384936,28.329874],[104.314103,28.306698],[104.254357,28.408844],[104.261748,28.537177],[104.318415,28.538229],[104.425588,28.626497],[104.314719,28.615468],[104.12501,28.637526],[103.940844,28.606013],[103.844757,28.660104],[103.838598,28.587101],[103.781931,28.525613],[103.877402,28.311966],[103.721569,28.201817],[103.639649,28.261912],[103.573128,28.230815],[103.471498,28.123221],[103.430846,28.044039],[103.488128,28.03242],[103.515846,27.965326],[103.487512,27.795028],[103.29226,27.632943],[103.295955,27.568785],[103.222043,27.566133],[103.111789,27.401054],[102.989833,27.368114],[102.941174,27.405303],[102.882044,27.293168],[102.913457,27.133538],[102.870957,27.026992],[102.898674,26.908073],[102.991681,26.775675],[103.018783,26.593911],[103.056971,26.525943],[102.989833,26.483108],[102.998457,26.371661],[102.739762,26.268691],[102.674473,26.205363],[102.60056,26.250448],[102.638748,26.307852],[102.567915,26.36362],[102.392372,26.296588],[102.349257,26.244545],[102.245163,26.212341],[102.107808,26.068391],[102.005562,26.091499],[102.005562,26.091499],[101.917483,26.108156],[101.86328,26.052266],[101.799223,26.109231],[101.807846,26.156501],[101.690202,26.241861],[101.630455,26.224687],[101.586724,26.279422],[101.660636,26.346999],[101.636615,26.395245],[101.506652,26.499708],[101.458608,26.495424],[101.400094,26.605146],[101.451833,26.600867],[101.453065,26.692848],[101.512195,26.756443],[101.389623,26.723314],[101.357594,26.770868],[101.399478,26.841893],[101.267667,26.902737],[101.264587,26.955549],[101.136472,27.023794],[101.170349,27.195821],[101.057016,27.20061],[101.021907,27.332508],[100.936908,27.469026],[100.848212,27.670573],[100.782307,27.691767],[100.707162,27.80085],[100.681293,27.923041],[100.633866,27.915111],[100.54517,27.809318],[100.442924,27.866459],[100.327744,27.720372],[100.295099,27.869633],[100.210715,27.877037],[100.196549,27.936257],[100.086296,28.030836],[100.033941,28.184942],[100.157129,28.210254],[100.176223,28.324607],[100.054267,28.376737],[100.073977,28.42621],[99.990209,28.476712],[99.987129,28.524561],[99.793724,28.699473],[99.733362,28.719415],[99.717964,28.846321],[99.625573,28.814871],[99.615718,28.741975],[99.532566,28.681628],[99.463581,28.549266],[99.403219,28.546638],[99.437095,28.398318],[99.374886,28.181778],[99.306516,28.227652],[99.280647,28.298269],[99.174705,28.402003],[99.183944,28.588677],[99.126662,28.699473],[99.103872,28.842128],[99.132206,28.948467],[99.113727,29.221409],[99.075539,29.314316],[99.052133,29.563908],[98.993003,29.656502],[99.0238,29.846105],[99.068148,29.93118],[99.044742,30.079885],[98.989308,30.151826],[98.907388,30.698196],[98.957895,30.765056],[98.901844,30.785105],[98.774345,30.907877],[98.806374,30.995621],[98.736772,31.049459],[98.709671,31.118635],[98.602498,31.192367],[98.64007,31.337615],[98.691809,31.333016],[98.773113,31.249163],[98.88583,31.376446],[98.837787,31.436705],[98.713367,31.510189],[98.553839,31.656473],[98.543983,31.718588],[98.414636,31.832525],[98.434962,32.007734],[98.301919,32.12334],[98.218768,32.234752],[98.218768,32.342489],[97.937283,32.484425],[97.730944,32.527315],[97.543698,32.621602],[97.42359,32.704713],[97.386018,32.779196],[97.373699,32.956094],[97.523988,32.988721],[97.542466,33.036385],[97.487648,33.10658],[97.487648,33.168205],[97.576343,33.221779],[97.621306,33.334327],[97.676125,33.340825],[97.753733,33.410277],[97.625618,33.461705],[97.552321,33.465698],[97.52522,33.575937],[97.415583,33.605343],[97.435293,33.680558],[97.388481,33.884452],[97.458698,33.886935],[97.660111,33.956444],[97.70261,34.036805],[97.665654,34.126997],[97.834421,34.208186],[97.937283,34.196804],[97.937283,34.196804],[98.051848,34.115604],[98.21076,34.078444],[98.401702,34.08786],[98.440506,33.981255],[98.406629,33.867065],[98.462064,33.849178],[98.539056,33.746752],[98.6567,33.647193],[98.61728,33.63723],[98.648077,33.549014],[98.742316,33.477677],[98.734309,33.409278],[98.779272,33.37181],[98.759562,33.277321],[98.858728,33.150674],[99.002242,33.08252],[99.179633,33.044912],[99.235067,32.982197],[99.268328,32.878744],[99.385973,32.900349],[99.558436,32.839039],[99.607711,32.780705],[99.763543,32.778693],[99.788181,32.956596],[99.854086,32.945048],[99.877492,33.045915],[99.956332,32.948061],[100.038252,32.928979],[100.123252,32.837028],[100.139266,32.724346],[100.088143,32.668959],[100.208252,32.606482],[100.258759,32.742466],[100.339447,32.719313],[100.399809,32.756556],[100.516837,32.630168],[100.54517,32.569681],[100.645568,32.526306],[100.690532,32.678025],[100.93198,32.600433],[101.075494,32.683061],[101.157414,32.661404],[101.22332,32.725856],[101.237486,32.824962],[101.124153,32.909893],[101.129081,32.989725],[101.183899,32.984204],[101.169733,33.100566],[101.11553,33.194746],[101.183283,33.270317],[101.297232,33.262313],[101.393935,33.157687],[101.405022,33.225783],[101.486326,33.227285],[101.625528,33.100566],[101.739477,33.265815],[101.64955,33.323328],[101.695745,33.433748],[101.769658,33.447728],[101.769042,33.538541],[101.844186,33.602353],[101.907012,33.542032],[101.9452,33.437742],[101.885454,33.380804],[101.878063,33.315829],[101.769658,33.268816],[101.841723,33.184731],[101.865744,33.103072],[101.935345,33.186734],[102.08933,33.204759],[102.112736,33.287324],[102.217446,33.248303],[102.186649,33.332327],[102.264873,33.417269],[102.396684,33.40678],[102.462589,33.449724],[102.440416,33.57494],[102.33817,33.614313],[102.342481,33.725357],[102.299981,33.782566],[102.239619,33.788036],[102.234076,33.870046],[102.136142,33.965377],[102.237772,33.963392],[102.315996,33.994154],[102.391756,33.970836],[102.437336,34.087364],[102.471213,34.072993],[102.655994,34.113623],[102.599328,34.145321],[102.798276,34.272982],[102.911609,34.313022],[102.978747,34.249246],[102.973203,34.205217],[103.124108,34.16166],[103.178927,34.079931],[103.119797,34.034822],[103.124108,33.968354],[103.181391,33.900842],[103.153057,33.814884],[103.279325,33.806433],[103.349542,33.74327],[103.525085,33.798975],[103.520157,33.678566],[103.626099,33.727347],[103.778236,33.658648],[103.871243,33.68255],[104.046169,33.686533],[104.168741,33.611821],[104.155191,33.542531],[104.22048,33.404782],[104.292545,33.336326],[104.432979,33.325828],[104.303632,33.304328],[104.378161,33.109086],[104.337509,33.038392],[104.426204,33.0108],[104.378161,32.953081],[104.288234,32.94304],[104.294393,32.83552],[104.363994,32.822448],[104.458849,32.748504],[104.582653,32.722333],[104.643015,32.661908],[104.739717,32.635711],[104.845659,32.653848],[104.881999,32.600938],[105.026745,32.650322],[105.111128,32.59388],[105.347033,32.682558],[105.455439,32.737433],[105.391381,32.835017],[105.414171,32.921948],[105.49917,32.911902],[105.563844,32.72485],[105.596489,32.699175],[105.719061,32.759575],[105.822538,32.770141],[105.825002,32.824962],[106.025798,32.85814],[106.093552,32.823956],[106.07261,32.764103],[106.076305,32.753537],[106.17424,32.697664],[106.347935,32.670974],[106.421231,32.616562],[106.585687,32.688097],[106.663296,32.690615],[106.733513,32.739446],[106.82344,32.705217],[107.066736,32.708741],[107.108004,32.600938],[107.080286,32.542448],[107.127098,32.482406],[107.263836,32.403129],[107.313727,32.489976],[107.382097,32.54043],[107.436299,32.529837],[107.456625,32.417778],[107.533002,32.383426],[107.680211,32.398078],[107.707929,32.331873],[107.75474,32.338445],[107.812022,32.24791],[107.979558,32.14614],[108.070717,32.233234],[108.179122,32.222099],[108.251187,32.273208],[108.312781,32.232222],[108.46923,32.270173],[108.509882,32.201343],[108.369447,32.173493],[108.447672,32.07164],[108.373759,32.077217],[108.259194,31.966628],[108.343578,31.860987],[108.535135,31.757769],[108.517889,31.665131],[108.391621,31.593298],[108.34173,31.509679],[108.191441,31.492333],[108.216079,31.410666],[108.153869,31.371338],[108.185898,31.337104],[108.095354,31.268088],[108.083652,31.185713],[108.009123,31.10839],[108.053471,31.040745],[107.943833,30.989466],[107.994956,30.90839],[107.85329,30.793842],[107.763979,30.816968],[107.739957,30.884259],[107.645103,30.821079],[107.514524,30.854986],[107.424597,30.740889],[107.516987,30.644675],[107.359923,30.456087],[107.221337,30.213891],[107.058113,30.043118],[107.053801,30.043636],[106.981736,30.085062],[106.980504,30.087651],[106.980504,30.087651],[106.980504,30.085062],[106.978041,30.087133],[106.978041,30.087651],[106.978041,30.087133],[106.978041,30.087651],[106.978041,30.087133],[106.976193,30.083509],[106.976193,30.087651],[106.976193,30.087651],[106.974345,30.082992],[106.913367,30.025506],[106.825904,30.031205],[106.825904,30.031205],[106.726121,30.033277],[106.677462,30.157],[106.611557,30.235605],[106.612173,30.235605],[106.611557,30.235605],[106.612173,30.235605],[106.612173,30.235605],[106.612789,30.235605],[106.612789,30.235605],[106.610941,30.292451],[106.610941,30.292451],[106.451412,30.307949],[106.451412,30.307949],[106.428623,30.254729],[106.262935,30.211306],[106.261703,30.205101],[106.260471,30.204067],[106.256776,30.19631],[106.180399,30.23302],[106.17116,30.306399],[106.10587,30.310531],[106.031958,30.373529],[105.881053,30.387465],[105.792357,30.427199],[105.714749,30.322927],[105.720292,30.252662]]],[[[106.262935,30.211306],[106.256776,30.19631],[106.260471,30.204067],[106.261703,30.205101],[106.262935,30.211306]]],[[[105.571235,30.17976],[105.56138,30.183898],[105.558916,30.18545],[105.56138,30.188035],[105.571235,30.17976]]],[[[106.981736,30.085062],[106.980504,30.085062],[106.980504,30.087651],[106.981736,30.085062]]],[[[106.980504,30.085062],[106.976193,30.083509],[106.978041,30.087133],[106.980504,30.085062]]],[[[106.976193,30.083509],[106.974345,30.082992],[106.976193,30.087651],[106.976193,30.083509]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":520000,\"name\":\"贵州\",\"center\":[106.713478,26.578343],\"centroid\":[106.88108,26.826362],\"childrenNum\":9,\"level\":\"province\",\"subFeatureIndex\":23,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.52187,26.748964],[109.454117,26.761252],[109.35495,26.693383],[109.407305,26.532902],[109.326001,26.427398],[109.285965,26.296052],[109.340784,26.264399],[109.466435,26.314288],[109.439334,26.238641],[109.486761,26.148445],[109.486761,26.148445],[109.449805,26.101709],[109.48245,26.029687],[109.408537,25.967305],[109.435022,25.933411],[109.339552,25.834363],[109.3414,25.732537],[109.147995,25.7417],[109.143683,25.795044],[108.989698,25.778881],[108.896076,25.71421],[108.953974,25.686714],[108.953974,25.686714],[109.000785,25.73631],[109.07901,25.720679],[109.030966,25.629545],[109.088249,25.550758],[109.025423,25.512426],[108.949046,25.557236],[108.781511,25.554537],[108.763649,25.637097],[108.68912,25.623072],[108.6072,25.491904],[108.625062,25.308138],[108.471693,25.458955],[108.418723,25.443287],[108.348506,25.536183],[108.142782,25.390867],[108.152021,25.324364],[108.115065,25.210195],[108.001732,25.196661],[107.841587,25.115966],[107.741805,25.239965],[107.700537,25.193954],[107.659885,25.316251],[107.599523,25.250789],[107.472024,25.213984],[107.481263,25.300024],[107.432604,25.289205],[107.420901,25.393029],[107.318039,25.401677],[107.336517,25.461116],[107.228728,25.604728],[107.064272,25.559395],[107.066736,25.509186],[106.963874,25.437884],[107.012533,25.353024],[107.013765,25.275138],[106.912751,25.243212],[106.900432,25.194495],[106.732281,25.162548],[106.684238,25.178252],[106.590615,25.087791],[106.304819,24.973944],[106.215508,24.982079],[106.146522,24.948449],[106.206269,24.851304],[106.173008,24.760059],[106.045508,24.681796],[106.023335,24.632313],[105.942031,24.724738],[105.827466,24.702997],[105.70551,24.768752],[105.500402,24.807862],[105.445584,24.918608],[105.365511,24.943566],[105.265729,24.930003],[105.198592,24.995095],[105.09573,24.928375],[105.077868,24.918065],[105.03352,24.787765],[104.899245,24.752996],[104.841963,24.676359],[104.743413,24.621978],[104.63316,24.65896],[104.529682,24.73126],[104.539537,24.813836],[104.713232,24.996179],[104.667652,25.05961],[104.750804,25.215067],[104.822869,25.17013],[104.816094,25.262152],[104.639935,25.298942],[104.646094,25.356809],[104.543232,25.400597],[104.556783,25.524845],[104.434827,25.47246],[104.420661,25.585301],[104.332581,25.598792],[104.309791,25.648964],[104.328886,25.760561],[104.373233,25.731459],[104.441602,25.869362],[104.414501,25.909733],[104.499501,26.070541],[104.592508,26.317506],[104.683667,26.377557],[104.554935,26.590701],[104.487798,26.579465],[104.421276,26.712091],[104.354139,26.621194],[104.120082,26.636705],[104.052329,26.507204],[103.865699,26.512023],[103.764685,26.584816],[103.773308,26.716901],[103.705555,26.794904],[103.779468,26.874454],[103.77454,26.951815],[103.675374,27.051506],[103.638418,27.013133],[103.624251,27.112237],[103.711714,27.14259],[103.903271,27.347921],[103.932221,27.444072],[104.015372,27.429204],[104.01722,27.383523],[104.113307,27.338354],[104.174285,27.262856],[104.363378,27.467964],[104.497653,27.411677],[104.546312,27.330382],[104.609754,27.306991],[104.808702,27.35483],[104.871528,27.291041],[105.067397,27.418051],[105.184425,27.393085],[105.260186,27.514672],[105.232469,27.546506],[105.305149,27.612799],[105.308229,27.705011],[105.353809,27.74897],[105.508409,27.769089],[105.605112,27.715605],[105.62359,27.666333],[105.78435,27.719312],[106.023335,27.746851],[106.120653,27.779677],[106.193334,27.754265],[106.343007,27.821489],[106.304819,27.899249],[106.328225,27.952643],[106.206885,28.134302],[106.126812,28.16701],[105.975907,28.107917],[105.860111,28.165955],[105.88906,28.238722],[105.826234,28.304064],[105.730147,28.271925],[105.639604,28.32408],[105.62359,28.518253],[105.683952,28.535601],[105.749242,28.614943],[105.884748,28.594981],[105.891524,28.672179],[105.966668,28.76086],[106.103407,28.636476],[106.2925,28.537177],[106.330688,28.481971],[106.37442,28.525613],[106.395978,28.570287],[106.484057,28.530344],[106.504999,28.662204],[106.45326,28.816968],[106.562897,28.753516],[106.63681,28.623346],[106.564745,28.485127],[106.632499,28.503531],[106.7446,28.465667],[106.73844,28.554522],[106.866556,28.624397],[106.883186,28.69265],[106.824056,28.756139],[106.926302,28.809104],[106.986664,28.793899],[106.986664,28.793899],[106.983584,28.851561],[107.057497,28.895049],[107.191156,28.888763],[107.219489,28.772923],[107.383945,28.848417],[107.441227,28.943755],[107.36485,29.010753],[107.412894,29.095485],[107.404271,29.187984],[107.486806,29.174402],[107.570574,29.218276],[107.589052,29.149845],[107.701769,29.142006],[107.751044,29.199997],[107.810791,29.138348],[107.784921,29.04842],[107.867457,28.960508],[107.930899,29.035343],[108.024521,29.038482],[108.068253,29.086597],[108.256115,29.040574],[108.268433,29.089734],[108.350353,28.933282],[108.352817,28.815395],[108.385462,28.772398],[108.332491,28.679528],[108.471077,28.627548],[108.565316,28.662204],[108.636149,28.621245],[108.577019,28.534024],[108.611512,28.324607],[108.668178,28.334614],[108.688504,28.422527],[108.640461,28.457251],[108.710678,28.500902],[108.779663,28.425158],[108.764881,28.306698],[108.726692,28.282463],[108.772888,28.21289],[108.922561,28.217635],[109.006329,28.163317],[109.026655,28.220271],[109.086401,28.184942],[109.081473,28.249264],[109.152306,28.349885],[109.191726,28.470927],[109.274262,28.494592],[109.27303,28.310386],[109.388211,28.268236],[109.340168,28.190216],[109.298284,28.036117],[109.378972,28.032948],[109.30198,27.956342],[109.345711,27.840537],[109.332777,27.782853],[109.470747,27.68011],[109.461508,27.567724],[109.303211,27.475396],[109.300132,27.423893],[109.202197,27.449913],[109.142451,27.418051],[109.040821,27.276151],[108.907162,27.2054],[108.878829,27.106378],[108.791366,27.084539],[108.87575,26.999273],[109.07901,27.115965],[109.164625,27.065893],[109.267487,27.128746],[109.415928,27.15377],[109.472595,27.135136],[109.454733,27.069622],[109.520022,27.058433],[109.555131,26.947015],[109.486761,26.895267],[109.500928,26.828546],[109.481218,26.838156],[109.473211,26.828546],[109.504624,26.805051],[109.52187,26.748964]]],[[[109.529261,26.740414],[109.528029,26.744689],[109.548971,26.737208],[109.548971,26.737208],[109.529261,26.740414]]],[[[109.500928,26.828546],[109.504624,26.805051],[109.473211,26.828546],[109.481218,26.838156],[109.500928,26.828546]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":530000,\"name\":\"云南\",\"center\":[102.712251,25.040609],\"centroid\":[101.485108,25.008649],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":24,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[105.542902,23.18449],[105.445584,23.292797],[105.372903,23.317525],[105.325475,23.390034],[105.238012,23.264217],[105.093266,23.260919],[104.886311,23.169088],[104.804391,23.110218],[104.860441,22.970917],[104.737869,22.825957],[104.579573,22.84636],[104.375697,22.690228],[104.272219,22.738245],[104.274067,22.828163],[104.117618,22.808861],[104.045553,22.728312],[104.009213,22.51789],[103.964249,22.502966],[103.825047,22.615685],[103.642113,22.795071],[103.566969,22.698508],[103.53494,22.594143],[103.436389,22.697404],[103.441317,22.753144],[103.323057,22.807758],[103.283021,22.678635],[103.195557,22.648268],[103.183854,22.557679],[103.081608,22.506835],[103.079761,22.448784],[102.930703,22.482512],[102.880196,22.586961],[102.688639,22.700164],[102.603024,22.731623],[102.570379,22.700164],[102.510633,22.774661],[102.384365,22.679739],[102.420706,22.636119],[102.322771,22.554364],[102.25625,22.457631],[102.270416,22.419472],[102.046214,22.457631],[101.907628,22.43717],[101.862665,22.389048],[101.76473,22.506282],[101.672339,22.474772],[101.625528,22.282789],[101.547304,22.237936],[101.596579,22.160933],[101.573789,22.114933],[101.626144,22.006247],[101.606434,21.967965],[101.701288,21.938553],[101.777049,21.826954],[101.747484,21.730276],[101.780129,21.640763],[101.754875,21.585137],[101.745636,21.29721],[101.833715,21.252606],[101.76473,21.147733],[101.672339,21.195158],[101.605818,21.172285],[101.604586,21.229741],[101.532521,21.252606],[101.387775,21.225837],[101.290457,21.178422],[101.222088,21.234203],[101.244877,21.302227],[101.142631,21.409218],[101.194986,21.425372],[101.209153,21.557316],[101.117378,21.689141],[101.123537,21.771956],[101.015132,21.70693],[100.870386,21.672461],[100.730568,21.518914],[100.558105,21.450434],[100.48296,21.459343],[100.437381,21.532829],[100.351765,21.52949],[100.247056,21.463798],[100.199628,21.512791],[100.126948,21.508338],[100.107853,21.585137],[100.169447,21.663564],[100.095535,21.704151],[99.991441,21.703595],[99.944014,21.821955],[99.999448,21.970184],[99.972347,22.052837],[99.871333,22.0667],[99.870101,22.029544],[99.486987,22.12879],[99.400139,22.099966],[99.220901,22.111053],[99.156227,22.160933],[99.235683,22.250673],[99.282495,22.401219],[99.381661,22.503519],[99.385973,22.57094],[99.31514,22.737693],[99.385973,22.761972],[99.457421,22.84636],[99.456806,22.932901],[99.563363,22.925737],[99.517168,23.006719],[99.528255,23.065635],[99.3484,23.128927],[99.255393,23.077746],[99.106336,23.086552],[98.889525,23.209238],[98.936953,23.309833],[98.872279,23.484456],[98.826084,23.470187],[98.808221,23.547549],[98.877823,23.59197],[98.786048,23.781551],[98.669019,23.800713],[98.701664,23.834103],[98.701048,23.946251],[98.899996,24.109102],[98.875975,24.150056],[98.716446,24.12767],[98.611737,24.08507],[98.550759,24.125485],[98.360434,24.097087],[98.225543,24.113471],[98.110978,24.092171],[97.902175,24.01404],[97.894168,23.973589],[97.769748,23.933126],[97.711234,23.861465],[97.5283,23.926563],[97.634241,24.046828],[97.730944,24.113471],[97.729712,24.227013],[97.767284,24.258656],[97.658879,24.326279],[97.716161,24.358987],[97.669966,24.452703],[97.531995,24.43146],[97.570799,24.602396],[97.570183,24.766579],[97.701379,24.842617],[97.764204,24.824155],[97.785762,24.875733],[97.716777,24.978283],[97.839349,25.27081],[97.914494,25.211278],[98.014892,25.305433],[98.06971,25.311924],[98.15779,25.457334],[98.131304,25.510266],[98.189818,25.569111],[98.170724,25.620374],[98.247717,25.607965],[98.314854,25.543201],[98.402317,25.593936],[98.457752,25.68294],[98.476846,25.777265],[98.553839,25.845672],[98.640686,25.798815],[98.704744,25.852133],[98.686881,25.925877],[98.614201,25.968919],[98.575396,26.118364],[98.634527,26.145759],[98.662244,26.0872],[98.735541,26.183351],[98.672715,26.240251],[98.733693,26.350753],[98.753403,26.559129],[98.781736,26.62066],[98.746012,26.697125],[98.757098,26.87819],[98.732461,27.002472],[98.765722,27.050973],[98.712135,27.077081],[98.696121,27.211253],[98.734309,27.35111],[98.706591,27.362269],[98.674563,27.582044],[98.583404,27.571437],[98.444201,27.665274],[98.429419,27.548628],[98.317318,27.519448],[98.278514,27.659974],[98.234166,27.690707],[98.222463,27.812493],[98.169492,27.851118],[98.205217,27.88973],[98.133152,27.99069],[98.160253,28.101056],[98.139311,28.142216],[98.168876,28.204454],[98.266195,28.24083],[98.208913,28.35831],[98.301303,28.384633],[98.37768,28.246101],[98.389383,28.114777],[98.428803,28.10475],[98.559382,28.182833],[98.626519,28.165427],[98.712135,28.229233],[98.752787,28.333561],[98.677026,28.463563],[98.627751,28.487756],[98.638222,28.55242],[98.594491,28.667979],[98.683802,28.739877],[98.652389,28.816968],[98.657932,28.93014],[98.765722,29.006044],[98.815613,28.948991],[98.828547,28.820113],[98.912931,28.800715],[98.972677,28.832693],[98.917243,28.888239],[98.925866,28.978306],[99.009018,29.031158],[98.967134,29.128418],[98.976373,29.204698],[99.113727,29.221409],[99.132206,28.948467],[99.103872,28.842128],[99.126662,28.699473],[99.183944,28.588677],[99.174705,28.402003],[99.280647,28.298269],[99.306516,28.227652],[99.374886,28.181778],[99.437095,28.398318],[99.403219,28.546638],[99.463581,28.549266],[99.532566,28.681628],[99.615718,28.741975],[99.625573,28.814871],[99.717964,28.846321],[99.733362,28.719415],[99.793724,28.699473],[99.987129,28.524561],[99.990209,28.476712],[100.073977,28.42621],[100.054267,28.376737],[100.176223,28.324607],[100.157129,28.210254],[100.033941,28.184942],[100.086296,28.030836],[100.196549,27.936257],[100.210715,27.877037],[100.295099,27.869633],[100.327744,27.720372],[100.442924,27.866459],[100.54517,27.809318],[100.633866,27.915111],[100.681293,27.923041],[100.707162,27.80085],[100.782307,27.691767],[100.848212,27.670573],[100.936908,27.469026],[101.021907,27.332508],[101.057016,27.20061],[101.170349,27.195821],[101.136472,27.023794],[101.264587,26.955549],[101.267667,26.902737],[101.399478,26.841893],[101.357594,26.770868],[101.389623,26.723314],[101.512195,26.756443],[101.453065,26.692848],[101.451833,26.600867],[101.400094,26.605146],[101.458608,26.495424],[101.506652,26.499708],[101.636615,26.395245],[101.660636,26.346999],[101.586724,26.279422],[101.630455,26.224687],[101.690202,26.241861],[101.807846,26.156501],[101.799223,26.109231],[101.86328,26.052266],[101.917483,26.108156],[102.005562,26.091499],[102.005562,26.091499],[102.107808,26.068391],[102.245163,26.212341],[102.349257,26.244545],[102.392372,26.296588],[102.567915,26.36362],[102.638748,26.307852],[102.60056,26.250448],[102.674473,26.205363],[102.739762,26.268691],[102.998457,26.371661],[102.989833,26.483108],[103.056971,26.525943],[103.018783,26.593911],[102.991681,26.775675],[102.898674,26.908073],[102.870957,27.026992],[102.913457,27.133538],[102.882044,27.293168],[102.941174,27.405303],[102.989833,27.368114],[103.111789,27.401054],[103.222043,27.566133],[103.295955,27.568785],[103.29226,27.632943],[103.487512,27.795028],[103.515846,27.965326],[103.488128,28.03242],[103.430846,28.044039],[103.471498,28.123221],[103.573128,28.230815],[103.639649,28.261912],[103.721569,28.201817],[103.877402,28.311966],[103.781931,28.525613],[103.838598,28.587101],[103.844757,28.660104],[103.940844,28.606013],[104.12501,28.637526],[104.314719,28.615468],[104.425588,28.626497],[104.318415,28.538229],[104.261748,28.537177],[104.254357,28.408844],[104.314103,28.306698],[104.384936,28.329874],[104.44961,28.269817],[104.44653,28.112666],[104.354139,28.019744],[104.40095,27.952114],[104.573413,27.840537],[104.743413,27.901892],[104.872144,27.905594],[105.05939,28.097889],[105.186889,28.0546],[105.186273,27.995445],[105.270657,27.99703],[105.284823,27.935729],[105.233084,27.895547],[105.244171,27.823077],[105.308229,27.810376],[105.308229,27.810376],[105.273736,27.795028],[105.308229,27.705011],[105.305149,27.612799],[105.232469,27.546506],[105.260186,27.514672],[105.184425,27.393085],[105.067397,27.418051],[104.871528,27.291041],[104.808702,27.35483],[104.609754,27.306991],[104.546312,27.330382],[104.497653,27.411677],[104.363378,27.467964],[104.174285,27.262856],[104.113307,27.338354],[104.01722,27.383523],[104.015372,27.429204],[103.932221,27.444072],[103.903271,27.347921],[103.711714,27.14259],[103.624251,27.112237],[103.638418,27.013133],[103.675374,27.051506],[103.77454,26.951815],[103.779468,26.874454],[103.705555,26.794904],[103.773308,26.716901],[103.764685,26.584816],[103.865699,26.512023],[104.052329,26.507204],[104.120082,26.636705],[104.354139,26.621194],[104.421276,26.712091],[104.487798,26.579465],[104.554935,26.590701],[104.683667,26.377557],[104.592508,26.317506],[104.499501,26.070541],[104.414501,25.909733],[104.441602,25.869362],[104.373233,25.731459],[104.328886,25.760561],[104.309791,25.648964],[104.332581,25.598792],[104.420661,25.585301],[104.434827,25.47246],[104.556783,25.524845],[104.543232,25.400597],[104.646094,25.356809],[104.639935,25.298942],[104.816094,25.262152],[104.822869,25.17013],[104.750804,25.215067],[104.667652,25.05961],[104.713232,24.996179],[104.539537,24.813836],[104.529682,24.73126],[104.492109,24.656241],[104.610986,24.376973],[104.70892,24.321372],[104.72863,24.446167],[104.83642,24.446712],[104.979933,24.412937],[105.063085,24.429281],[105.063085,24.429281],[105.188121,24.346995],[105.164715,24.288109],[105.229389,24.165888],[105.20044,24.105279],[105.260186,24.061033],[105.320548,24.116202],[105.481924,24.018958],[105.529967,24.129308],[105.628518,24.126577],[105.649459,24.033167],[105.704278,24.066497],[105.89214,24.040271],[105.933407,24.123847],[106.04982,24.089986],[106.192102,23.824798],[106.136667,23.795238],[106.157609,23.724048],[106.120653,23.605129],[106.141595,23.569487],[105.999929,23.447683],[105.89214,23.525058],[105.815763,23.506953],[105.699966,23.401566],[105.694423,23.363122],[105.531815,23.248275],[105.542902,23.18449]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":540000,\"name\":\"西藏\",\"center\":[91.132212,29.660361],\"centroid\":[88.388277,31.56375],\"childrenNum\":7,\"level\":\"province\",\"subFeatureIndex\":25,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[79.039649,34.33427],[79.0107,34.399956],[79.161605,34.441416],[79.229358,34.413778],[79.504683,34.454737],[79.675914,34.451284],[79.801566,34.478909],[79.906892,34.683837],[79.947544,34.820993],[80.034391,34.902],[80.031311,35.034384],[80.118159,35.066222],[80.23026,35.147476],[80.257977,35.20323],[80.362687,35.209096],[80.268448,35.294114],[80.321419,35.386848],[80.412578,35.433663],[80.516672,35.392214],[80.65649,35.394165],[80.689135,35.33903],[80.844351,35.345375],[81.026053,35.312181],[81.031597,35.380506],[81.09935,35.407333],[81.219458,35.319016],[81.362356,35.354647],[81.494167,35.292161],[81.513261,35.235002],[81.675253,35.233536],[81.736847,35.262365],[81.927789,35.271158],[82.05344,35.350255],[82.033114,35.450236],[82.328149,35.559342],[82.336156,35.651284],[82.424852,35.713006],[82.628727,35.692114],[82.731589,35.63767],[82.788872,35.684824],[82.960719,35.671702],[82.998907,35.484348],[83.067892,35.462908],[83.127022,35.398554],[83.242203,35.420011],[83.451006,35.38197],[83.622238,35.335614],[83.677672,35.360991],[83.885244,35.367334],[84.005968,35.422449],[84.095895,35.362943],[84.1618,35.359039],[84.335495,35.414647],[84.45314,35.473141],[84.448828,35.55058],[84.729081,35.613353],[85.053065,35.751862],[85.159006,35.745549],[85.271107,35.788757],[85.372121,35.701346],[85.613569,35.652257],[85.65299,35.731465],[85.811286,35.779049],[85.949256,35.779049],[86.060125,35.846008],[86.132806,35.979271],[86.199944,36.032513],[86.187625,36.131158],[86.392733,36.206992],[86.515305,36.205543],[86.701318,36.245122],[86.746282,36.291916],[86.862078,36.300114],[86.887332,36.262492],[86.996353,36.308793],[87.149106,36.29722],[87.193454,36.349283],[87.306787,36.363739],[87.361605,36.419128],[87.460155,36.409498],[87.470626,36.354102],[87.570409,36.342536],[87.731785,36.384936],[87.949211,36.401312],[87.983088,36.437903],[88.134609,36.427313],[88.241782,36.468704],[88.365586,36.457636],[88.470912,36.482175],[88.573158,36.461005],[88.623665,36.389271],[88.783809,36.291916],[88.802903,36.337717],[88.926091,36.364221],[88.964279,36.318917],[89.10225,36.281305],[89.127503,36.249465],[89.232213,36.295774],[89.287647,36.235954],[89.375727,36.228231],[89.490291,36.150969],[89.711414,36.092972],[89.638117,36.04993],[89.476125,36.021868],[89.418843,36.04606],[89.429929,35.916302],[89.549422,35.858132],[89.801957,35.847948],[89.747138,35.751862],[89.765616,35.599732],[89.700327,35.537435],[89.744058,35.479963],[89.68616,35.414647],[89.497067,35.361479],[89.532175,35.285323],[89.449639,35.226693],[89.513081,35.139158],[89.593153,35.104412],[89.560509,34.938794],[89.654747,34.883351],[89.707102,34.919663],[89.821667,34.902981],[89.867862,34.810677],[89.799493,34.74384],[89.732356,34.732039],[89.72558,34.660709],[89.798877,34.628714],[89.823515,34.455231],[89.801957,34.390575],[89.872174,34.335752],[89.825362,34.293746],[89.818587,34.174037],[89.655979,34.096778],[89.635037,34.0492],[89.691704,33.957933],[89.795181,33.865575],[89.837065,33.869052],[89.933768,33.796986],[89.907282,33.74128],[90.008296,33.688026],[89.984275,33.61232],[90.01076,33.553501],[90.080977,33.530561],[90.092064,33.469691],[90.246665,33.42426],[90.332896,33.310829],[90.405577,33.260311],[90.486881,33.266815],[90.70554,33.135645],[90.805938,33.114599],[91.001807,33.116102],[91.001807,33.116102],[91.134849,33.073495],[91.262349,33.141156],[91.436044,33.065974],[91.49887,33.109086],[91.58079,33.039395],[91.785281,32.944044],[91.896766,32.907884],[91.955897,32.820437],[92.145606,32.885779],[92.227526,32.820939],[92.198577,32.755046],[92.255243,32.720823],[92.355641,32.764606],[92.63651,32.720319],[92.686401,32.765109],[92.877342,32.697161],[93.019624,32.737433],[93.069515,32.626137],[93.239514,32.662411],[93.385492,32.525297],[93.4631,32.556065],[93.516687,32.475844],[93.618933,32.522775],[93.654657,32.57321],[93.820345,32.549509],[93.861613,32.466253],[93.958931,32.484929],[94.136322,32.433939],[94.196684,32.516216],[94.371611,32.524793],[94.395016,32.594385],[94.53853,32.599425],[94.614291,32.673492],[94.772587,32.555057],[94.80708,32.486444],[94.889616,32.472311],[94.912405,32.415758],[94.985086,32.421819],[95.081789,32.384942],[95.218527,32.397067],[95.261643,32.348049],[95.096571,32.322267],[95.10581,32.259042],[95.241317,32.32075],[95.26965,32.194761],[95.312766,32.148673],[95.406389,32.182102],[95.454432,32.062006],[95.360809,31.959013],[95.439649,31.831508],[95.546823,31.739961],[95.618272,31.783712],[95.779648,31.74912],[95.825227,31.681935],[95.89914,31.817273],[95.982908,31.816765],[96.041422,31.734364],[96.135661,31.702299],[96.160298,31.600943],[96.204646,31.598904],[96.252689,31.69619],[96.176313,31.777608],[96.253921,31.929566],[96.389428,31.919917],[96.468268,31.769978],[96.576057,31.712989],[96.616093,31.736908],[96.775006,31.673788],[96.840295,31.720623],[96.760223,31.856922],[96.81073,31.894521],[96.722651,32.013314],[96.894498,32.013822],[97.008447,32.067076],[97.130403,32.04375],[97.308409,32.074682],[97.264062,32.183621],[97.299786,32.294959],[97.371235,32.273208],[97.424822,32.323278],[97.387865,32.427374],[97.341054,32.441009],[97.388481,32.501583],[97.334895,32.514198],[97.448843,32.586823],[97.472249,32.54497],[97.670582,32.517225],[97.730944,32.527315],[97.937283,32.484425],[98.218768,32.342489],[98.218768,32.234752],[98.301919,32.12334],[98.434962,32.007734],[98.414636,31.832525],[98.543983,31.718588],[98.553839,31.656473],[98.713367,31.510189],[98.837787,31.436705],[98.88583,31.376446],[98.773113,31.249163],[98.691809,31.333016],[98.64007,31.337615],[98.602498,31.192367],[98.709671,31.118635],[98.736772,31.049459],[98.806374,30.995621],[98.774345,30.907877],[98.901844,30.785105],[98.957895,30.765056],[98.907388,30.698196],[98.989308,30.151826],[99.044742,30.079885],[99.068148,29.93118],[99.0238,29.846105],[98.993003,29.656502],[99.052133,29.563908],[99.075539,29.314316],[99.113727,29.221409],[98.976373,29.204698],[98.967134,29.128418],[99.009018,29.031158],[98.925866,28.978306],[98.917243,28.888239],[98.972677,28.832693],[98.912931,28.800715],[98.828547,28.820113],[98.815613,28.948991],[98.765722,29.006044],[98.657932,28.93014],[98.652389,28.816968],[98.683802,28.739877],[98.594491,28.667979],[98.638222,28.55242],[98.627751,28.487756],[98.677026,28.463563],[98.752787,28.333561],[98.712135,28.229233],[98.626519,28.165427],[98.559382,28.182833],[98.428803,28.10475],[98.389383,28.114777],[98.37768,28.246101],[98.301303,28.384633],[98.208913,28.35831],[98.266195,28.24083],[98.168876,28.204454],[98.139311,28.142216],[98.090036,28.195489],[98.03337,28.187052],[98.020435,28.25348],[97.907718,28.363575],[97.801161,28.326714],[97.738335,28.396213],[97.737103,28.465667],[97.68598,28.51983],[97.569567,28.541382],[97.506126,28.471453],[97.485184,28.386212],[97.518445,28.327767],[97.460546,28.268236],[97.42359,28.297742],[97.350909,28.23714],[97.321344,28.054071],[97.413119,28.013406],[97.386634,27.882855],[97.303482,27.913525],[97.062649,27.742615],[97.049099,27.814081],[96.972722,27.861169],[96.849534,27.874393],[96.784245,27.9315],[96.690622,27.948943],[96.572978,28.058296],[96.499681,28.067271],[96.46334,28.143271],[96.398667,28.118471],[96.297037,28.141161],[96.275479,28.228179],[95.989067,28.198126],[95.874502,28.297742],[95.674322,28.254007],[95.371896,28.110028],[95.28628,27.939957],[95.015267,27.828897],[94.88592,27.743145],[94.524979,27.596362],[94.277372,27.580983],[93.970634,27.305396],[93.849294,27.168676],[93.841903,27.045645],[93.56781,26.937948],[93.232739,26.907006],[93.111399,26.880325],[92.909371,26.914475],[92.802813,26.895267],[92.682089,26.948082],[92.57122,26.946482],[92.404916,26.902737],[92.109265,26.854705],[92.124664,26.959815],[92.043976,27.052572],[92.032273,27.168144],[92.125896,27.27296],[92.010715,27.474866],[91.839484,27.489728],[91.753868,27.462656],[91.585101,27.54014],[91.570934,27.650965],[91.642383,27.766442],[91.611586,27.891316],[91.486551,27.937314],[91.464993,28.002841],[91.309776,28.057768],[91.251878,27.970611],[91.162567,27.968497],[91.113292,27.846357],[90.96485,27.900306],[90.96177,27.9537],[90.896481,27.9463],[90.802242,28.040342],[90.701844,28.076246],[90.591591,28.021329],[90.513983,28.061992],[90.384019,28.060936],[90.296556,28.15435],[90.231882,28.144854],[90.124709,28.190743],[90.03355,28.13694],[89.976268,28.189161],[89.906051,28.180723],[89.789638,28.24083],[89.720037,28.170175],[89.605472,28.161735],[89.461958,28.031892],[89.375727,27.875979],[89.238988,27.796616],[89.184786,27.673752],[89.131815,27.633474],[89.163228,27.574619],[89.095474,27.471681],[89.182938,27.373959],[89.077612,27.287319],[89.057286,27.234663],[88.975982,27.217106],[88.911924,27.274024],[88.920548,27.325598],[88.809063,27.405834],[88.770874,27.567724],[88.852178,27.671103],[88.888519,27.846886],[88.842939,28.006539],[88.764099,28.068327],[88.67602,28.068327],[88.645223,28.111083],[88.565151,28.083109],[88.554064,28.027667],[88.478919,28.034005],[88.401311,27.976952],[88.254101,27.939429],[88.156783,27.957928],[88.111819,27.864872],[87.826639,27.927799],[87.727473,27.802967],[87.590119,27.848473],[87.45954,27.82096],[87.420735,27.859053],[87.364069,27.824135],[87.280917,27.845299],[87.227946,27.813022],[87.118309,27.840537],[87.035157,27.9463],[86.935375,27.955285],[86.864542,28.022385],[86.756753,28.032948],[86.700086,28.101583],[86.647732,28.069383],[86.568891,28.103167],[86.514689,27.954757],[86.450015,27.908766],[86.231972,27.97431],[86.19132,28.16701],[86.082915,28.01816],[86.125415,27.923041],[86.053966,27.900306],[85.949256,27.937314],[85.980053,27.984349],[85.901213,28.053543],[85.854402,28.172284],[85.753388,28.227652],[85.720743,28.371999],[85.682555,28.375684],[85.650526,28.283517],[85.526106,28.324607],[85.415853,28.321447],[85.272339,28.282463],[85.209513,28.338827],[85.113427,28.34462],[85.108499,28.461459],[85.189803,28.545062],[85.195963,28.623871],[85.126361,28.675854],[85.05676,28.674279],[84.981616,28.586576],[84.857196,28.56766],[84.698284,28.633325],[84.650856,28.714692],[84.483321,28.735155],[84.408176,28.854182],[84.234481,28.889287],[84.248648,29.030635],[84.194445,29.044759],[84.20738,29.118487],[84.116837,29.286661],[84.002272,29.291358],[83.917273,29.324749],[83.727563,29.244383],[83.656114,29.167088],[83.548941,29.201042],[83.266841,29.571194],[83.12887,29.62374],[83.088834,29.605014],[82.9484,29.704846],[82.830756,29.687694],[82.703872,29.847662],[82.6238,29.834687],[82.560974,29.955547],[82.498148,29.947771],[82.412533,30.012037],[82.246845,30.071601],[82.17786,30.067976],[82.207425,30.143548],[82.114418,30.226816],[82.104563,30.346682],[81.99123,30.322927],[81.872354,30.373012],[81.759021,30.385401],[81.63029,30.446802],[81.566232,30.428747],[81.555761,30.369399],[81.406704,30.40398],[81.427646,30.305366],[81.393769,30.199413],[81.335871,30.150791],[81.269349,30.153378],[81.293371,30.094899],[81.225618,30.005301],[81.131995,30.016181],[81.034677,30.246977],[80.81725,30.321378],[80.719316,30.414816],[80.633084,30.458665],[80.549316,30.448866],[80.322035,30.564338],[80.214245,30.585974],[80.124934,30.558671],[80.04363,30.603485],[79.970333,30.685848],[79.961094,30.771225],[79.890877,30.854986],[79.835443,30.850876],[79.75845,30.93662],[79.668523,30.980233],[79.59769,30.925843],[79.505915,31.027415],[79.427075,31.018186],[79.421531,31.067399],[79.316206,31.017673],[79.33222,30.96946],[79.227511,30.94945],[79.181931,31.015622],[79.0957,30.993057],[79.010084,31.044333],[78.997765,31.159093],[78.865338,31.313082],[78.841933,31.288542],[78.755085,31.3555],[78.792041,31.436195],[78.729832,31.478047],[78.740303,31.532631],[78.845628,31.610115],[78.763092,31.668696],[78.706426,31.778626],[78.654071,31.821849],[78.739687,31.885376],[78.762476,31.946829],[78.599868,32.024982],[78.519796,32.123847],[78.469905,32.127901],[78.430485,32.211975],[78.511173,32.308108],[78.458818,32.379889],[78.472985,32.435454],[78.395377,32.530342],[78.518564,32.605978],[78.628202,32.630168],[78.741534,32.703706],[78.781571,32.607994],[78.760629,32.56363],[78.81052,32.436464],[78.970664,32.331873],[79.005772,32.375341],[79.103091,32.369782],[79.135736,32.472311],[79.252148,32.51672],[79.308199,32.596905],[79.27309,32.678025],[79.301423,32.728877],[79.224431,32.784729],[79.255844,32.942537],[79.162837,33.011804],[79.139431,33.117606],[79.162221,33.166202],[79.072294,33.228286],[79.022403,33.323328],[78.84686,33.421264],[78.74215,33.553501],[78.755085,33.623281],[78.692259,33.676575],[78.779723,33.732323],[78.758165,33.791019],[78.744614,33.980759],[78.656535,34.030359],[78.661462,34.086868],[78.750158,34.092815],[78.793273,34.132445],[78.9257,34.155719],[78.981751,34.318458],[79.039649,34.33427]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":610000,\"name\":\"陕西\",\"center\":[108.948024,34.263161],\"centroid\":[108.887567,35.263665],\"childrenNum\":10,\"level\":\"province\",\"subFeatureIndex\":26,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[107.288474,37.00812],[107.288474,37.00812],[107.268764,37.099324],[107.336517,37.165628],[107.257677,37.337082],[107.284162,37.482036],[107.342061,37.515265],[107.348836,37.608226],[107.484959,37.706279],[107.499125,37.7659],[107.620465,37.775832],[107.65003,37.864688],[107.982022,37.787181],[108.025137,37.649926],[108.134159,37.621971],[108.219158,37.661295],[108.304158,37.638556],[108.440896,37.654663],[108.532671,37.690656],[108.611512,37.65419],[108.777815,37.683554],[108.799989,37.783871],[108.798141,37.93362],[108.82709,37.989285],[108.797525,38.047735],[108.871438,38.027471],[108.938575,37.920877],[109.017416,37.969949],[109.069155,38.091071],[108.963829,38.155085],[108.938575,38.207291],[109.051908,38.432146],[109.178792,38.520675],[109.276726,38.623121],[109.367269,38.627328],[109.338936,38.70161],[109.404226,38.720752],[109.511399,38.833633],[109.549587,38.805662],[109.624116,38.854603],[109.683862,38.935631],[109.665384,38.981691],[109.961035,39.191608],[110.217881,39.28105],[110.146432,39.455434],[110.243751,39.42355],[110.39096,39.31161],[110.434692,39.381016],[110.528315,39.380091],[110.604075,39.277345],[110.702626,39.27364],[110.740198,39.351874],[110.892335,39.509927],[111.134399,39.586513],[111.148566,39.531619],[111.064182,39.400899],[111.125776,39.366678],[111.247732,39.302351],[111.163348,39.152644],[111.138711,39.064897],[110.980414,38.970063],[111.009363,38.847614],[110.880016,38.618446],[110.920052,38.581973],[110.874473,38.453702],[110.77777,38.44105],[110.746973,38.366029],[110.661358,38.308773],[110.57759,38.297035],[110.565887,38.215283],[110.509221,38.192245],[110.501213,38.031713],[110.522771,37.954853],[110.59422,37.921821],[110.663821,37.803256],[110.758676,37.744139],[110.706321,37.705332],[110.796248,37.66319],[110.795017,37.566029],[110.745125,37.450693],[110.644111,37.435017],[110.630561,37.373228],[110.695234,37.34945],[110.690307,37.287115],[110.53509,37.137969],[110.444547,37.007164],[110.382953,37.021975],[110.425453,36.960325],[110.416214,36.790892],[110.447011,36.737687],[110.394656,36.676768],[110.496902,36.582175],[110.503677,36.487948],[110.45933,36.330969],[110.474112,36.248018],[110.447011,36.164495],[110.511684,35.879951],[110.549257,35.877527],[110.57759,35.701346],[110.609619,35.632321],[110.525851,35.44195],[110.477808,35.413672],[110.45009,35.327803],[110.39404,35.271647],[110.325671,35.014785],[110.257301,34.93487],[110.232664,34.803308],[110.241287,34.682361],[110.310272,34.608033],[110.379257,34.600646],[110.360779,34.516878],[110.403279,34.43352],[110.403279,34.43352],[110.503677,34.337234],[110.426685,34.275454],[110.43962,34.24331],[110.642264,34.16067],[110.590525,34.096778],[110.669365,33.939072],[110.587445,33.887929],[110.782698,33.795494],[110.877552,33.635238],[111.00382,33.578429],[111.02661,33.478675],[111.022914,33.475181],[111.022914,33.474682],[111.02661,33.474183],[110.996429,33.435745],[111.025994,33.330327],[110.984726,33.255308],[110.824582,33.158188],[110.745741,33.147167],[110.702626,33.097057],[110.59422,33.168706],[110.54125,33.255809],[110.468569,33.181226],[110.218497,33.163197],[110.164911,33.209265],[110.031252,33.191742],[109.852013,33.247803],[109.732521,33.231288],[109.619804,33.27532],[109.537268,33.2438],[109.438718,33.152177],[109.576073,33.110088],[109.688174,33.116603],[109.794731,33.066977],[109.76455,32.909391],[109.988752,32.886281],[110.10886,32.82999],[110.159367,32.767122],[110.156903,32.683061],[110.206179,32.633191],[110.153824,32.593376],[110.085454,32.613034],[110.017701,32.546987],[109.910528,32.592872],[109.816905,32.577244],[109.726978,32.608498],[109.631507,32.599929],[109.637051,32.540935],[109.575457,32.506629],[109.502776,32.389489],[109.495385,32.300522],[109.592703,32.219568],[109.621652,32.106617],[109.590855,32.012807],[109.631507,31.962059],[109.584696,31.900617],[109.638282,31.811172],[109.585928,31.726731],[109.281654,31.717061],[109.273646,31.801003],[109.195422,31.817782],[109.164009,31.877247],[108.988466,31.979317],[108.902235,31.984899],[108.734084,32.106617],[108.67249,32.104083],[108.509882,32.201343],[108.46923,32.270173],[108.312781,32.232222],[108.251187,32.273208],[108.179122,32.222099],[108.070717,32.233234],[107.979558,32.14614],[107.812022,32.24791],[107.75474,32.338445],[107.707929,32.331873],[107.680211,32.398078],[107.533002,32.383426],[107.456625,32.417778],[107.436299,32.529837],[107.382097,32.54043],[107.313727,32.489976],[107.263836,32.403129],[107.127098,32.482406],[107.080286,32.542448],[107.108004,32.600938],[107.066736,32.708741],[106.82344,32.705217],[106.733513,32.739446],[106.663296,32.690615],[106.585687,32.688097],[106.421231,32.616562],[106.347935,32.670974],[106.17424,32.697664],[106.076305,32.753537],[106.076305,32.758065],[106.076921,32.764103],[106.07261,32.764103],[106.093552,32.823956],[106.025798,32.85814],[105.825002,32.824962],[105.822538,32.770141],[105.719061,32.759575],[105.596489,32.699175],[105.563844,32.72485],[105.49917,32.911902],[105.590329,32.876734],[105.735691,32.905372],[105.917393,32.993739],[105.930944,33.177721],[105.965436,33.204759],[105.862574,33.234291],[105.74801,33.298827],[105.723372,33.390796],[105.82993,33.382802],[105.842248,33.490152],[105.956197,33.612818],[106.129276,33.604347],[106.187174,33.54652],[106.303587,33.604347],[106.447101,33.613316],[106.456956,33.533055],[106.54134,33.513103],[106.58076,33.575937],[106.539492,33.691013],[106.480362,33.715403],[106.461883,33.789528],[106.493296,33.846197],[106.41076,33.906304],[106.474202,33.970836],[106.501919,34.104706],[106.585071,34.149282],[106.526557,34.291768],[106.663912,34.24331],[106.717498,34.369342],[106.624491,34.410323],[106.610325,34.454244],[106.455108,34.531667],[106.334384,34.517864],[106.314058,34.578973],[106.419384,34.643482],[106.505615,34.74679],[106.575216,34.769893],[106.493296,34.941247],[106.494528,35.005964],[106.494528,35.005964],[106.5746,35.089236],[106.710723,35.100495],[106.838222,35.079933],[106.901664,35.094621],[107.08275,35.024095],[107.089526,34.976553],[107.189308,34.893166],[107.252134,34.880896],[107.286626,34.931927],[107.523763,34.909851],[107.561951,34.966747],[107.634016,34.950565],[107.804631,34.95694],[107.863761,34.996161],[107.757204,35.076016],[107.686371,35.217895],[107.651878,35.239889],[107.745501,35.311693],[107.867457,35.256014],[108.049159,35.254059],[108.174811,35.305345],[108.2401,35.256014],[108.352817,35.285812],[108.48894,35.275066],[108.614591,35.32878],[108.631222,35.418548],[108.618287,35.556908],[108.539447,35.605569],[108.517273,35.715921],[108.524664,35.839703],[108.498179,35.876072],[108.588722,35.950214],[108.656475,35.952636],[108.712526,36.13889],[108.646004,36.25429],[108.651548,36.384936],[108.618903,36.434052],[108.510498,36.474478],[108.495099,36.422498],[108.407636,36.458117],[108.340498,36.55911],[108.262274,36.549497],[108.194521,36.625405],[108.163724,36.563916],[108.007891,36.61628],[108.004811,36.683006],[107.939522,36.655651],[107.907493,36.751591],[107.720863,36.802391],[107.540393,36.828736],[107.478183,36.908674],[107.310032,36.912501],[107.288474,37.00812]]],[[[106.076305,32.753537],[106.07261,32.764103],[106.076921,32.764103],[106.076305,32.758065],[106.076305,32.753537]]],[[[111.022914,33.474682],[111.022914,33.475181],[111.02661,33.478675],[111.02661,33.474183],[111.022914,33.474682]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":620000,\"name\":\"甘肃\",\"center\":[103.823557,36.058039],\"centroid\":[95.7129,40.166],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":27,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[106.494528,35.005964],[106.494528,35.005964],[106.493296,34.941247],[106.575216,34.769893],[106.505615,34.74679],[106.419384,34.643482],[106.314058,34.578973],[106.334384,34.517864],[106.455108,34.531667],[106.610325,34.454244],[106.624491,34.410323],[106.717498,34.369342],[106.663912,34.24331],[106.526557,34.291768],[106.585071,34.149282],[106.501919,34.104706],[106.474202,33.970836],[106.41076,33.906304],[106.493296,33.846197],[106.461883,33.789528],[106.480362,33.715403],[106.539492,33.691013],[106.58076,33.575937],[106.54134,33.513103],[106.456956,33.533055],[106.447101,33.613316],[106.303587,33.604347],[106.187174,33.54652],[106.129276,33.604347],[105.956197,33.612818],[105.842248,33.490152],[105.82993,33.382802],[105.723372,33.390796],[105.74801,33.298827],[105.862574,33.234291],[105.965436,33.204759],[105.930944,33.177721],[105.917393,32.993739],[105.735691,32.905372],[105.590329,32.876734],[105.49917,32.911902],[105.414171,32.921948],[105.391381,32.835017],[105.455439,32.737433],[105.347033,32.682558],[105.111128,32.59388],[105.026745,32.650322],[104.881999,32.600938],[104.845659,32.653848],[104.739717,32.635711],[104.643015,32.661908],[104.582653,32.722333],[104.458849,32.748504],[104.363994,32.822448],[104.294393,32.83552],[104.288234,32.94304],[104.378161,32.953081],[104.426204,33.0108],[104.337509,33.038392],[104.378161,33.109086],[104.303632,33.304328],[104.432979,33.325828],[104.292545,33.336326],[104.22048,33.404782],[104.155191,33.542531],[104.168741,33.611821],[104.046169,33.686533],[103.871243,33.68255],[103.778236,33.658648],[103.626099,33.727347],[103.520157,33.678566],[103.525085,33.798975],[103.349542,33.74327],[103.279325,33.806433],[103.153057,33.814884],[103.181391,33.900842],[103.124108,33.968354],[103.119797,34.034822],[103.178927,34.079931],[103.124108,34.16166],[102.973203,34.205217],[102.978747,34.249246],[102.911609,34.313022],[102.798276,34.272982],[102.599328,34.145321],[102.655994,34.113623],[102.471213,34.072993],[102.437336,34.087364],[102.391756,33.970836],[102.315996,33.994154],[102.237772,33.963392],[102.136142,33.965377],[102.234076,33.870046],[102.239619,33.788036],[102.299981,33.782566],[102.342481,33.725357],[102.33817,33.614313],[102.440416,33.57494],[102.462589,33.449724],[102.396684,33.40678],[102.264873,33.417269],[102.186649,33.332327],[102.217446,33.248303],[102.112736,33.287324],[102.08933,33.204759],[101.935345,33.186734],[101.865744,33.103072],[101.841723,33.184731],[101.769658,33.268816],[101.878063,33.315829],[101.885454,33.380804],[101.9452,33.437742],[101.907012,33.542032],[101.844186,33.602353],[101.769042,33.538541],[101.735781,33.49614],[101.622448,33.502127],[101.582412,33.675081],[101.501724,33.70296],[101.385312,33.644702],[101.238718,33.685039],[101.166653,33.660142],[101.191907,33.786047],[101.153718,33.844706],[100.999118,33.889419],[100.806329,34.155224],[100.764445,34.178987],[100.821727,34.317469],[100.895024,34.375268],[100.986799,34.374774],[101.054552,34.322905],[101.235022,34.325376],[101.331109,34.245289],[101.530057,34.21066],[101.622448,34.178492],[101.736397,34.079931],[101.84665,34.150272],[101.955055,34.10966],[101.965526,34.167601],[102.062229,34.227976],[102.067772,34.293746],[102.149692,34.271993],[102.189728,34.355018],[102.237156,34.343163],[102.237772,34.343163],[102.237156,34.343163],[102.237772,34.343163],[102.210054,34.399462],[102.210054,34.399462],[102.155852,34.507511],[102.003715,34.538074],[101.919947,34.621821],[101.917483,34.875497],[102.048062,34.910832],[102.094874,34.986848],[102.218677,35.058386],[102.29567,35.071609],[102.310452,35.128883],[102.402227,35.191006],[102.370814,35.262854],[102.279655,35.304857],[102.317228,35.433663],[102.407155,35.408308],[102.447807,35.437563],[102.504473,35.583189],[102.742226,35.495065],[102.808747,35.560315],[102.686175,35.772253],[102.78411,35.862496],[102.955957,35.861041],[102.971971,35.995247],[102.882044,36.082335],[102.941174,36.105058],[102.98737,36.193956],[103.068058,36.203612],[103.024326,36.257185],[102.830305,36.358439],[102.832153,36.357957],[102.831537,36.360848],[102.830305,36.362294],[102.769943,36.472072],[102.761936,36.568721],[102.606719,36.682526],[102.704654,36.792329],[102.587009,36.869912],[102.56114,36.919676],[102.450271,36.968453],[102.506321,37.019108],[102.488459,37.079278],[102.642444,37.099801],[102.599944,37.174687],[102.457662,37.24807],[102.428097,37.308534],[102.19712,37.420287],[102.102881,37.48441],[102.130598,37.544684],[102.035743,37.627184],[102.036359,37.684974],[101.946432,37.728051],[101.815853,37.65419],[101.791832,37.695864],[101.659405,37.733256],[101.597195,37.828308],[101.459224,37.866105],[101.362522,37.791437],[101.150639,37.876969],[100.887633,38.050562],[100.93814,38.160261],[100.825423,38.158849],[100.74843,38.239724],[100.619083,38.265567],[100.546402,38.246773],[100.474953,38.289052],[100.318505,38.329428],[100.261222,38.366498],[100.24028,38.441519],[100.064122,38.518802],[100.001296,38.466821],[100.093071,38.4073],[100.157744,38.309712],[100.182998,38.221864],[100.126332,38.231735],[99.937238,38.34163],[99.826985,38.370251],[99.65945,38.449017],[99.555972,38.520207],[99.50916,38.608628],[99.450646,38.60442],[99.361951,38.718418],[99.222133,38.788875],[99.068764,38.896991],[99.1088,38.946334],[98.951735,38.987737],[98.816845,39.085799],[98.743548,39.086728],[98.584635,38.930046],[98.457752,38.952849],[98.383839,39.029581],[98.280977,39.027257],[98.251412,38.891403],[98.094964,38.786077],[98.009348,38.859262],[97.828878,38.930046],[97.701379,38.963085],[97.679205,39.010522],[97.371235,39.14058],[97.220946,39.192999],[96.962867,39.198564],[97.012142,39.141972],[96.969643,39.097873],[96.940693,38.907701],[96.983809,38.869046],[97.009063,38.702544],[97.057722,38.672654],[97.055874,38.5946],[96.975802,38.559519],[96.7941,38.60816],[96.780549,38.504289],[96.6666,38.483684],[96.698013,38.422302],[96.626564,38.356177],[96.665369,38.230325],[96.46334,38.27778],[96.335841,38.246303],[96.313051,38.162142],[96.221892,38.148969],[96.109175,38.187072],[96.063596,38.172962],[95.856024,38.284355],[95.83693,38.343977],[95.702039,38.400736],[95.51849,38.295156],[95.320157,38.32051],[95.261027,38.301261],[95.121825,38.417615],[94.973999,38.430271],[94.810775,38.385261],[94.67958,38.387137],[94.527443,38.36556],[94.511429,38.445268],[94.370379,38.762753],[93.885018,38.720752],[93.800019,38.750622],[93.769838,38.821047],[93.884403,38.826175],[93.729186,38.92446],[93.453245,38.915615],[93.274007,38.89606],[93.179152,38.923994],[93.198246,39.045847],[93.131725,39.108088],[93.142196,39.160531],[92.978356,39.143364],[92.938936,39.169809],[92.866871,39.138723],[92.489916,39.09973],[92.41046,39.038412],[92.366728,39.059322],[92.339011,39.236575],[92.52564,39.368528],[92.639589,39.514543],[92.745531,39.868137],[92.796654,40.15364],[92.906907,40.310773],[92.928465,40.572609],[93.506216,40.648464],[93.760599,40.664804],[93.820961,40.793574],[93.809874,40.879583],[94.01067,41.114857],[94.184365,41.268392],[94.534219,41.50586],[94.750413,41.538114],[94.861898,41.668309],[95.135991,41.772811],[95.29552,41.569456],[95.39407,41.693333],[95.57146,41.796011],[95.677402,41.830795],[95.855408,41.849516],[96.038342,41.924794],[96.117183,41.985753],[96.13874,42.054207],[96.077147,42.149652],[96.178161,42.217929],[96.040806,42.3264],[96.06606,42.414367],[95.978596,42.436892],[96.02356,42.54234],[96.103632,42.604026],[96.386348,42.727655],[96.742361,42.757096],[96.968411,42.756218],[97.172903,42.795305],[97.307177,42.565259],[97.84674,41.656687],[97.613915,41.477176],[97.629314,41.440407],[97.971776,41.097726],[98.25018,40.939271],[98.333332,40.918929],[98.344419,40.568518],[98.627751,40.677965],[98.569853,40.746901],[98.668403,40.772734],[98.689345,40.691576],[98.801446,40.609411],[98.790975,40.705185],[98.984996,40.782701],[99.041662,40.693844],[99.102025,40.676603],[99.172858,40.747354],[99.174705,40.858317],[99.565827,40.846551],[99.673,40.932943],[100.057346,40.908077],[100.107853,40.875511],[100.237201,40.716977],[100.242744,40.618495],[100.169447,40.541242],[100.169447,40.277458],[100.002528,40.197528],[99.927383,40.063947],[99.488218,39.875943],[99.672384,39.887881],[99.822058,39.85987],[99.904593,39.785886],[100.040716,39.756913],[100.128179,39.702155],[100.250135,39.68512],[100.314193,39.606799],[100.326512,39.509003],[100.500823,39.4813],[100.498975,39.400437],[100.619699,39.38749],[100.842053,39.405523],[100.842669,39.199955],[100.864227,39.106695],[100.835278,39.025863],[100.961545,39.005873],[100.969553,38.9468],[101.117378,38.97518],[101.228863,39.02075],[101.198682,38.943077],[101.24303,38.86066],[101.334189,38.848545],[101.307087,38.802865],[101.562702,38.712816],[101.601506,38.6549],[101.679115,38.690869],[101.777049,38.660507],[101.941505,38.808926],[102.075164,38.891403],[101.926106,39.000758],[101.830636,39.093229],[102.280887,39.190217],[102.45335,39.25511],[102.601792,39.172129],[103.007696,39.09973],[103.344615,39.331514],[103.595302,39.386565],[103.839214,39.460516],[103.964865,39.455434],[104.091133,39.418466],[104.047401,39.297721],[104.177364,39.15218],[104.207546,39.083941],[104.168125,38.940285],[104.044322,38.895128],[103.85954,38.64462],[103.416063,38.404956],[103.507838,38.281068],[103.53494,38.156497],[103.369868,38.089658],[103.362477,38.037368],[103.401897,37.861854],[103.676606,37.783871],[103.948235,37.564606],[104.183524,37.406981],[104.287002,37.42789],[104.437907,37.445943],[104.679971,37.407931],[104.713848,37.32947],[104.632544,37.299015],[104.600515,37.242831],[104.638087,37.201857],[104.775442,37.246641],[104.85613,37.211864],[104.95468,37.040125],[105.165331,36.995218],[105.190585,36.886185],[105.244787,36.894798],[105.334714,36.800953],[105.319932,36.742961],[105.218302,36.730494],[105.22015,36.631167],[105.281744,36.522575],[105.319932,36.536038],[105.398156,36.430683],[105.401236,36.370002],[105.473301,36.298185],[105.460366,36.223887],[105.513337,36.150003],[105.343954,36.033965],[105.333483,35.887707],[105.392613,35.865405],[105.481924,35.727094],[105.570003,35.716407],[105.671017,35.749434],[105.754785,35.730494],[105.690727,35.698431],[105.847176,35.490681],[105.868734,35.53987],[106.015943,35.52234],[106.070762,35.491655],[106.057827,35.488245],[105.897683,35.451698],[105.894603,35.413672],[106.054132,35.449261],[106.061523,35.457547],[106.064603,35.431225],[106.073226,35.421474],[106.079385,35.427325],[106.107102,35.364894],[106.174856,35.438538],[106.319601,35.265296],[106.472354,35.310716],[106.503767,35.415135],[106.440941,35.526723],[106.476666,35.580756],[106.434782,35.688712],[106.501304,35.737779],[106.501304,35.735836],[106.503767,35.736322],[106.504383,35.738265],[106.737208,35.689198],[106.86594,35.737779],[106.92199,35.803316],[106.849925,35.887707],[106.950939,36.004444],[106.957715,36.091522],[106.858548,36.206992],[106.858548,36.206992],[106.599238,36.274552],[106.599238,36.274552],[106.505615,36.265869],[106.488369,36.400348],[106.521014,36.479289],[106.401521,36.546133],[106.471738,36.581214],[106.519782,36.708912],[106.519782,36.708912],[106.589383,36.750153],[106.631883,36.723301],[106.658368,36.811972],[106.595542,36.940243],[106.666991,37.01672],[106.605397,37.127475],[106.750143,37.098847],[106.777244,37.156569],[106.777244,37.156569],[106.891193,37.098369],[107.030395,37.140831],[107.095685,37.115548],[107.180685,37.143692],[107.268764,37.099324],[107.288474,37.00812],[107.288474,37.00812],[107.310032,36.912501],[107.478183,36.908674],[107.540393,36.828736],[107.720863,36.802391],[107.907493,36.751591],[107.939522,36.655651],[108.004811,36.683006],[108.007891,36.61628],[108.163724,36.563916],[108.194521,36.625405],[108.262274,36.549497],[108.340498,36.55911],[108.407636,36.458117],[108.495099,36.422498],[108.510498,36.474478],[108.618903,36.434052],[108.651548,36.384936],[108.646004,36.25429],[108.712526,36.13889],[108.656475,35.952636],[108.588722,35.950214],[108.498179,35.876072],[108.524664,35.839703],[108.517273,35.715921],[108.539447,35.605569],[108.618287,35.556908],[108.631222,35.418548],[108.614591,35.32878],[108.48894,35.275066],[108.352817,35.285812],[108.2401,35.256014],[108.174811,35.305345],[108.049159,35.254059],[107.867457,35.256014],[107.745501,35.311693],[107.651878,35.239889],[107.686371,35.217895],[107.757204,35.076016],[107.863761,34.996161],[107.804631,34.95694],[107.634016,34.950565],[107.561951,34.966747],[107.523763,34.909851],[107.286626,34.931927],[107.252134,34.880896],[107.189308,34.893166],[107.089526,34.976553],[107.08275,35.024095],[106.901664,35.094621],[106.838222,35.079933],[106.710723,35.100495],[106.5746,35.089236],[106.494528,35.005964]]],[[[106.070762,35.491655],[106.078153,35.489707],[106.078153,35.489707],[106.071994,35.463395],[106.061523,35.457547],[106.054132,35.449261],[106.057827,35.488245],[106.070762,35.491655]]],[[[106.073226,35.421474],[106.064603,35.431225],[106.061523,35.457547],[106.071994,35.463395],[106.06953,35.458034],[106.071378,35.449261],[106.079385,35.427325],[106.073226,35.421474]]],[[[102.831537,36.360848],[102.832153,36.357957],[102.830305,36.358439],[102.830305,36.362294],[102.831537,36.360848]]],[[[106.503767,35.736322],[106.501304,35.735836],[106.501304,35.737779],[106.504383,35.738265],[106.503767,35.736322]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":630000,\"name\":\"青海\",\"center\":[101.778916,36.623178],\"centroid\":[96.043531,35.726402],\"childrenNum\":8,\"level\":\"province\",\"subFeatureIndex\":28,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[91.001807,33.116102],[91.001807,33.116102],[90.805938,33.114599],[90.70554,33.135645],[90.486881,33.266815],[90.405577,33.260311],[90.332896,33.310829],[90.246665,33.42426],[90.092064,33.469691],[90.080977,33.530561],[90.01076,33.553501],[89.984275,33.61232],[90.008296,33.688026],[89.907282,33.74128],[89.933768,33.796986],[89.837065,33.869052],[89.795181,33.865575],[89.691704,33.957933],[89.635037,34.0492],[89.655979,34.096778],[89.818587,34.174037],[89.825362,34.293746],[89.872174,34.335752],[89.801957,34.390575],[89.823515,34.455231],[89.798877,34.628714],[89.72558,34.660709],[89.732356,34.732039],[89.799493,34.74384],[89.867862,34.810677],[89.821667,34.902981],[89.707102,34.919663],[89.654747,34.883351],[89.560509,34.938794],[89.593153,35.104412],[89.513081,35.139158],[89.449639,35.226693],[89.532175,35.285323],[89.497067,35.361479],[89.68616,35.414647],[89.744058,35.479963],[89.700327,35.537435],[89.765616,35.599732],[89.747138,35.751862],[89.801957,35.847948],[89.549422,35.858132],[89.429929,35.916302],[89.418843,36.04606],[89.476125,36.021868],[89.638117,36.04993],[89.711414,36.092972],[89.941159,36.067343],[89.937463,36.130675],[89.999057,36.169809],[90.028006,36.25815],[90.145651,36.238849],[90.128405,36.208923],[90.234962,36.161597],[90.430215,36.133091],[90.526917,36.148553],[90.66304,36.134058],[90.776373,36.086203],[90.841046,36.01848],[90.922966,36.029126],[90.979017,36.106992],[91.09235,36.088621],[91.124994,36.115693],[91.07264,36.299149],[91.026444,36.323738],[91.05293,36.432608],[91.035683,36.529788],[90.7388,36.58746],[90.720938,36.708912],[90.735105,36.827778],[90.853981,36.915371],[90.983944,36.913458],[91.181045,37.025318],[91.303617,37.01242],[91.280211,37.163721],[91.1909,37.205669],[91.192132,37.27807],[91.134849,37.32614],[91.099741,37.447843],[91.057241,37.483936],[90.958075,37.477763],[90.863836,37.534246],[90.882314,37.575513],[90.776373,37.6504],[90.519526,37.73089],[90.516446,38.207291],[90.530613,38.32004],[90.361846,38.300322],[90.352607,38.233615],[90.280542,38.238315],[90.137644,38.340692],[90.111774,38.477595],[90.315034,38.501948],[90.424671,38.492114],[90.463476,38.556711],[90.610685,38.596003],[90.619308,38.664245],[90.831191,38.667982],[91.307928,38.751089],[91.446515,38.813588],[91.87952,38.884417],[91.966368,38.930976],[92.173323,38.960758],[92.263866,39.002153],[92.38459,39.000758],[92.41046,39.038412],[92.489916,39.09973],[92.866871,39.138723],[92.938936,39.169809],[92.978356,39.143364],[93.142196,39.160531],[93.131725,39.108088],[93.198246,39.045847],[93.179152,38.923994],[93.274007,38.89606],[93.453245,38.915615],[93.729186,38.92446],[93.884403,38.826175],[93.769838,38.821047],[93.800019,38.750622],[93.885018,38.720752],[94.370379,38.762753],[94.511429,38.445268],[94.527443,38.36556],[94.67958,38.387137],[94.810775,38.385261],[94.973999,38.430271],[95.121825,38.417615],[95.261027,38.301261],[95.320157,38.32051],[95.51849,38.295156],[95.702039,38.400736],[95.83693,38.343977],[95.856024,38.284355],[96.063596,38.172962],[96.109175,38.187072],[96.221892,38.148969],[96.313051,38.162142],[96.335841,38.246303],[96.46334,38.27778],[96.665369,38.230325],[96.626564,38.356177],[96.698013,38.422302],[96.6666,38.483684],[96.780549,38.504289],[96.7941,38.60816],[96.975802,38.559519],[97.055874,38.5946],[97.057722,38.672654],[97.009063,38.702544],[96.983809,38.869046],[96.940693,38.907701],[96.969643,39.097873],[97.012142,39.141972],[96.962867,39.198564],[97.220946,39.192999],[97.371235,39.14058],[97.679205,39.010522],[97.701379,38.963085],[97.828878,38.930046],[98.009348,38.859262],[98.094964,38.786077],[98.251412,38.891403],[98.280977,39.027257],[98.383839,39.029581],[98.457752,38.952849],[98.584635,38.930046],[98.743548,39.086728],[98.816845,39.085799],[98.951735,38.987737],[99.1088,38.946334],[99.068764,38.896991],[99.222133,38.788875],[99.361951,38.718418],[99.450646,38.60442],[99.50916,38.608628],[99.555972,38.520207],[99.65945,38.449017],[99.826985,38.370251],[99.937238,38.34163],[100.126332,38.231735],[100.182998,38.221864],[100.157744,38.309712],[100.093071,38.4073],[100.001296,38.466821],[100.064122,38.518802],[100.24028,38.441519],[100.261222,38.366498],[100.318505,38.329428],[100.474953,38.289052],[100.546402,38.246773],[100.619083,38.265567],[100.74843,38.239724],[100.825423,38.158849],[100.93814,38.160261],[100.887633,38.050562],[101.150639,37.876969],[101.362522,37.791437],[101.459224,37.866105],[101.597195,37.828308],[101.659405,37.733256],[101.791832,37.695864],[101.815853,37.65419],[101.946432,37.728051],[102.036359,37.684974],[102.035743,37.627184],[102.130598,37.544684],[102.102881,37.48441],[102.19712,37.420287],[102.428097,37.308534],[102.457662,37.24807],[102.599944,37.174687],[102.642444,37.099801],[102.488459,37.079278],[102.506321,37.019108],[102.450271,36.968453],[102.56114,36.919676],[102.587009,36.869912],[102.704654,36.792329],[102.606719,36.682526],[102.761936,36.568721],[102.769943,36.472072],[102.830305,36.362294],[102.830305,36.358439],[103.024326,36.257185],[103.068058,36.203612],[102.98737,36.193956],[102.941174,36.105058],[102.882044,36.082335],[102.971971,35.995247],[102.955957,35.861041],[102.78411,35.862496],[102.686175,35.772253],[102.808747,35.560315],[102.742226,35.495065],[102.504473,35.583189],[102.447807,35.437563],[102.407155,35.408308],[102.317228,35.433663],[102.279655,35.304857],[102.370814,35.262854],[102.402227,35.191006],[102.310452,35.128883],[102.29567,35.071609],[102.218677,35.058386],[102.094874,34.986848],[102.048062,34.910832],[101.917483,34.875497],[101.919947,34.621821],[102.003715,34.538074],[102.155852,34.507511],[102.210054,34.399462],[102.210054,34.399462],[102.237772,34.343163],[102.237156,34.343163],[102.237772,34.343163],[102.237156,34.343163],[102.189728,34.355018],[102.149692,34.271993],[102.067772,34.293746],[102.062229,34.227976],[101.965526,34.167601],[101.955055,34.10966],[101.84665,34.150272],[101.736397,34.079931],[101.622448,34.178492],[101.530057,34.21066],[101.331109,34.245289],[101.235022,34.325376],[101.054552,34.322905],[100.986799,34.374774],[100.895024,34.375268],[100.821727,34.317469],[100.764445,34.178987],[100.806329,34.155224],[100.999118,33.889419],[101.153718,33.844706],[101.191907,33.786047],[101.166653,33.660142],[101.238718,33.685039],[101.385312,33.644702],[101.501724,33.70296],[101.582412,33.675081],[101.622448,33.502127],[101.735781,33.49614],[101.769042,33.538541],[101.769658,33.447728],[101.695745,33.433748],[101.64955,33.323328],[101.739477,33.265815],[101.625528,33.100566],[101.486326,33.227285],[101.405022,33.225783],[101.393935,33.157687],[101.297232,33.262313],[101.183283,33.270317],[101.11553,33.194746],[101.169733,33.100566],[101.183899,32.984204],[101.129081,32.989725],[101.124153,32.909893],[101.237486,32.824962],[101.22332,32.725856],[101.157414,32.661404],[101.075494,32.683061],[100.93198,32.600433],[100.690532,32.678025],[100.645568,32.526306],[100.54517,32.569681],[100.516837,32.630168],[100.399809,32.756556],[100.339447,32.719313],[100.258759,32.742466],[100.208252,32.606482],[100.088143,32.668959],[100.139266,32.724346],[100.123252,32.837028],[100.038252,32.928979],[99.956332,32.948061],[99.877492,33.045915],[99.854086,32.945048],[99.788181,32.956596],[99.763543,32.778693],[99.607711,32.780705],[99.558436,32.839039],[99.385973,32.900349],[99.268328,32.878744],[99.235067,32.982197],[99.179633,33.044912],[99.002242,33.08252],[98.858728,33.150674],[98.759562,33.277321],[98.779272,33.37181],[98.734309,33.409278],[98.742316,33.477677],[98.648077,33.549014],[98.61728,33.63723],[98.6567,33.647193],[98.539056,33.746752],[98.462064,33.849178],[98.406629,33.867065],[98.440506,33.981255],[98.401702,34.08786],[98.21076,34.078444],[98.051848,34.115604],[97.937283,34.196804],[97.937283,34.196804],[97.834421,34.208186],[97.665654,34.126997],[97.70261,34.036805],[97.660111,33.956444],[97.458698,33.886935],[97.388481,33.884452],[97.435293,33.680558],[97.415583,33.605343],[97.52522,33.575937],[97.552321,33.465698],[97.625618,33.461705],[97.753733,33.410277],[97.676125,33.340825],[97.621306,33.334327],[97.576343,33.221779],[97.487648,33.168205],[97.487648,33.10658],[97.542466,33.036385],[97.523988,32.988721],[97.373699,32.956094],[97.386018,32.779196],[97.42359,32.704713],[97.543698,32.621602],[97.730944,32.527315],[97.670582,32.517225],[97.472249,32.54497],[97.448843,32.586823],[97.334895,32.514198],[97.388481,32.501583],[97.341054,32.441009],[97.387865,32.427374],[97.424822,32.323278],[97.371235,32.273208],[97.299786,32.294959],[97.264062,32.183621],[97.308409,32.074682],[97.130403,32.04375],[97.008447,32.067076],[96.894498,32.013822],[96.722651,32.013314],[96.81073,31.894521],[96.760223,31.856922],[96.840295,31.720623],[96.775006,31.673788],[96.616093,31.736908],[96.576057,31.712989],[96.468268,31.769978],[96.389428,31.919917],[96.253921,31.929566],[96.176313,31.777608],[96.252689,31.69619],[96.204646,31.598904],[96.160298,31.600943],[96.135661,31.702299],[96.041422,31.734364],[95.982908,31.816765],[95.89914,31.817273],[95.825227,31.681935],[95.779648,31.74912],[95.618272,31.783712],[95.546823,31.739961],[95.439649,31.831508],[95.360809,31.959013],[95.454432,32.062006],[95.406389,32.182102],[95.312766,32.148673],[95.26965,32.194761],[95.241317,32.32075],[95.10581,32.259042],[95.096571,32.322267],[95.261643,32.348049],[95.218527,32.397067],[95.081789,32.384942],[94.985086,32.421819],[94.912405,32.415758],[94.889616,32.472311],[94.80708,32.486444],[94.772587,32.555057],[94.614291,32.673492],[94.53853,32.599425],[94.395016,32.594385],[94.371611,32.524793],[94.196684,32.516216],[94.136322,32.433939],[93.958931,32.484929],[93.861613,32.466253],[93.820345,32.549509],[93.654657,32.57321],[93.618933,32.522775],[93.516687,32.475844],[93.4631,32.556065],[93.385492,32.525297],[93.239514,32.662411],[93.069515,32.626137],[93.019624,32.737433],[92.877342,32.697161],[92.686401,32.765109],[92.63651,32.720319],[92.355641,32.764606],[92.255243,32.720823],[92.198577,32.755046],[92.227526,32.820939],[92.145606,32.885779],[91.955897,32.820437],[91.896766,32.907884],[91.785281,32.944044],[91.58079,33.039395],[91.49887,33.109086],[91.436044,33.065974],[91.262349,33.141156],[91.134849,33.073495],[91.001807,33.116102]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":640000,\"name\":\"宁夏\",\"center\":[106.278179,38.46637],\"centroid\":[106.169867,37.291331],\"childrenNum\":5,\"level\":\"province\",\"subFeatureIndex\":29,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[106.06953,35.458034],[106.071994,35.463395],[106.078153,35.489707],[106.078153,35.489707],[106.070762,35.491655],[106.015943,35.52234],[105.868734,35.53987],[105.847176,35.490681],[105.690727,35.698431],[105.754785,35.730494],[105.671017,35.749434],[105.570003,35.716407],[105.481924,35.727094],[105.392613,35.865405],[105.333483,35.887707],[105.343954,36.033965],[105.513337,36.150003],[105.460366,36.223887],[105.473301,36.298185],[105.401236,36.370002],[105.398156,36.430683],[105.319932,36.536038],[105.281744,36.522575],[105.22015,36.631167],[105.218302,36.730494],[105.319932,36.742961],[105.334714,36.800953],[105.244787,36.894798],[105.190585,36.886185],[105.165331,36.995218],[104.95468,37.040125],[104.85613,37.211864],[104.775442,37.246641],[104.638087,37.201857],[104.600515,37.242831],[104.632544,37.299015],[104.713848,37.32947],[104.679971,37.407931],[104.437907,37.445943],[104.287002,37.42789],[104.407726,37.464467],[104.419429,37.511943],[104.801311,37.538516],[104.866601,37.566503],[105.024281,37.579781],[105.111128,37.633818],[105.315004,37.702018],[105.598952,37.699178],[105.622974,37.778669],[105.760944,37.799947],[105.80406,37.861854],[105.799749,37.940227],[105.840401,38.003902],[105.780655,38.084949],[105.775111,38.186601],[105.86627,38.296565],[105.821307,38.366967],[105.874277,38.593197],[105.852719,38.641349],[105.90569,38.731488],[105.897683,38.788875],[106.003625,38.874636],[105.97098,38.909097],[106.060907,38.968667],[106.096631,39.08487],[106.145907,39.153108],[106.283877,39.14522],[106.284493,39.270397],[106.402753,39.291701],[106.506231,39.269934],[106.602318,39.375466],[106.683622,39.357426],[106.751375,39.381478],[106.806809,39.318554],[106.795723,39.214327],[106.859164,39.107623],[106.96757,39.054676],[106.954019,38.941215],[106.709491,38.718885],[106.66268,38.601614],[106.647897,38.470569],[106.601702,38.392295],[106.482825,38.319571],[106.546883,38.269794],[106.768621,38.174843],[107.014997,38.120261],[107.19054,38.154144],[107.329742,38.087774],[107.438147,37.992586],[107.419669,37.940699],[107.49235,37.944945],[107.65003,37.864688],[107.620465,37.775832],[107.499125,37.7659],[107.484959,37.706279],[107.348836,37.608226],[107.342061,37.515265],[107.284162,37.482036],[107.257677,37.337082],[107.336517,37.165628],[107.268764,37.099324],[107.180685,37.143692],[107.095685,37.115548],[107.030395,37.140831],[106.891193,37.098369],[106.777244,37.156569],[106.777244,37.156569],[106.750143,37.098847],[106.605397,37.127475],[106.666991,37.01672],[106.595542,36.940243],[106.658368,36.811972],[106.631883,36.723301],[106.589383,36.750153],[106.519782,36.708912],[106.519782,36.708912],[106.471738,36.581214],[106.401521,36.546133],[106.521014,36.479289],[106.488369,36.400348],[106.505615,36.265869],[106.599238,36.274552],[106.599238,36.274552],[106.858548,36.206992],[106.858548,36.206992],[106.957715,36.091522],[106.950939,36.004444],[106.849925,35.887707],[106.92199,35.803316],[106.86594,35.737779],[106.737208,35.689198],[106.504383,35.738265],[106.501304,35.737779],[106.434782,35.688712],[106.476666,35.580756],[106.440941,35.526723],[106.503767,35.415135],[106.472354,35.310716],[106.319601,35.265296],[106.174856,35.438538],[106.107102,35.364894],[106.079385,35.427325],[106.071378,35.449261],[106.073226,35.450236],[106.073842,35.45511],[106.06953,35.458034]]],[[[106.057827,35.488245],[106.054132,35.449261],[105.894603,35.413672],[105.897683,35.451698],[106.057827,35.488245]]],[[[106.071378,35.449261],[106.06953,35.458034],[106.073842,35.45511],[106.073226,35.450236],[106.071378,35.449261]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":650000,\"name\":\"新疆\",\"center\":[87.617733,43.792818],\"centroid\":[85.294712,41.371801],\"childrenNum\":23,\"level\":\"province\",\"subFeatureIndex\":30,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[79.039649,34.33427],[78.958961,34.386132],[78.878273,34.391563],[78.742766,34.454737],[78.708274,34.522301],[78.634977,34.538074],[78.58139,34.505539],[78.542586,34.574539],[78.436029,34.543496],[78.427405,34.594243],[78.280812,34.623298],[78.267261,34.705482],[78.213059,34.717778],[78.237696,34.882369],[78.182262,34.936832],[78.201972,34.974592],[78.123131,35.036833],[78.124979,35.108327],[78.062769,35.11469],[78.01719,35.22816],[78.013494,35.36587],[78.136066,35.49263],[78.009799,35.491655],[77.914944,35.464857],[77.816394,35.518445],[77.690742,35.448287],[77.518895,35.481912],[77.396939,35.467781],[77.307628,35.540356],[77.195527,35.519419],[77.072339,35.590974],[76.967013,35.591947],[76.83705,35.66198],[76.76129,35.65566],[76.69292,35.747492],[76.593754,35.772253],[76.566037,35.819328],[76.59745,35.895947],[76.54879,35.919209],[76.365857,35.82418],[76.298719,35.841643],[76.147198,35.833397],[76.16506,35.909033],[76.104082,36.018964],[75.961184,36.051381],[75.942706,36.137923],[76.016619,36.165461],[76.011691,36.229197],[76.060967,36.225335],[75.989518,36.340127],[76.035097,36.409017],[75.945786,36.588421],[75.871873,36.66621],[75.724048,36.750632],[75.537418,36.773161],[75.536802,36.730015],[75.458578,36.720903],[75.425933,36.778912],[75.413614,36.954588],[75.244847,36.963194],[75.130898,37.010987],[75.032348,37.01672],[74.893762,36.939764],[74.84695,37.056839],[74.739161,37.028185],[74.70898,37.084529],[74.56793,37.032961],[74.498944,37.072595],[74.465068,37.147031],[74.511263,37.239973],[74.665864,37.235686],[74.727458,37.282831],[74.816153,37.216629],[74.911008,37.23378],[74.927022,37.277594],[75.125971,37.322334],[75.153072,37.414109],[75.069304,37.513367],[75.035428,37.501026],[74.940573,37.558914],[74.891914,37.668399],[75.006478,37.771102],[74.917167,37.844847],[74.911008,37.967118],[74.821697,38.102842],[74.789668,38.324734],[74.868508,38.404018],[74.862965,38.484152],[74.792747,38.536121],[74.717603,38.542205],[74.639995,38.599744],[74.506336,38.63761],[74.229779,38.656302],[74.147859,38.676858],[74.068403,38.585714],[74.090577,38.542205],[73.926121,38.536121],[73.89902,38.579166],[73.799237,38.610966],[73.757353,38.719818],[73.769056,38.775815],[73.699455,38.857865],[73.767824,38.941215],[73.826339,38.917012],[73.820179,39.041665],[73.743187,39.029581],[73.719781,39.108088],[73.639709,39.220353],[73.542391,39.269471],[73.554094,39.350023],[73.502355,39.383791],[73.592898,39.412457],[73.61076,39.466059],[73.745651,39.461902],[73.868223,39.482686],[73.953838,39.600345],[73.905795,39.742193],[73.841737,39.756453],[73.845433,39.831389],[73.907027,39.873647],[73.910722,39.934693],[73.980324,40.004851],[73.943367,40.015849],[74.023439,40.085008],[74.26304,40.125281],[74.356662,40.089128],[74.442894,40.137175],[74.577169,40.260567],[74.673255,40.278828],[74.697893,40.344527],[74.908544,40.339055],[74.795211,40.443412],[74.819233,40.505767],[74.891914,40.507587],[74.973218,40.460258],[75.102565,40.439769],[75.13521,40.463445],[75.242383,40.448876],[75.355716,40.538059],[75.432093,40.563518],[75.550353,40.648917],[75.636584,40.624399],[75.646439,40.516684],[75.733287,40.474369],[75.669845,40.363678],[75.709265,40.28111],[75.831221,40.327196],[75.921764,40.291151],[75.986438,40.381911],[76.176147,40.381455],[76.279625,40.439314],[76.333212,40.343615],[76.442233,40.391482],[76.539551,40.4639],[76.556798,40.542606],[76.657196,40.620312],[76.676906,40.696113],[76.646725,40.760045],[76.731724,40.818935],[76.761905,40.954185],[76.85368,40.976323],[76.885709,41.027348],[77.002122,41.073373],[77.091433,41.062546],[77.169041,41.009291],[77.296541,41.004776],[77.363062,41.040888],[77.476395,40.999357],[77.591576,40.992132],[77.829328,41.059388],[77.814546,41.134238],[77.905089,41.185141],[77.972842,41.172982],[78.129291,41.228354],[78.162551,41.382521],[78.324544,41.384316],[78.458818,41.41349],[78.580774,41.481659],[78.650375,41.467314],[78.739071,41.555578],[78.825302,41.560503],[78.959577,41.652663],[79.021787,41.657134],[79.138199,41.722814],[79.21704,41.725493],[79.326061,41.809391],[79.361169,41.796457],[79.462799,41.848625],[79.550879,41.833915],[79.640806,41.884717],[79.776313,41.892734],[79.852689,42.015544],[79.918594,42.041322],[80.14218,42.034656],[80.193303,42.081301],[80.139717,42.151427],[80.168666,42.200202],[80.28631,42.232993],[80.283847,42.320649],[80.229028,42.358241],[80.206238,42.428943],[80.265368,42.502211],[80.164354,42.627363],[80.228412,42.692923],[80.261673,42.825592],[80.417505,42.838755],[80.500041,42.879544],[80.602903,42.89445],[80.487106,42.94878],[80.378701,43.031497],[80.593048,43.133319],[80.79446,43.137248],[80.777214,43.30816],[80.69283,43.32035],[80.761199,43.446456],[80.75504,43.49422],[80.522215,43.816724],[80.511128,43.906887],[80.453846,43.989596],[80.449534,44.077778],[80.3941,44.127189],[80.413194,44.264461],[80.350368,44.484713],[80.411962,44.605392],[80.313412,44.704987],[80.200695,44.75642],[80.169898,44.844727],[79.999283,44.793797],[79.969102,44.877383],[79.887798,44.909173],[80.144644,45.058985],[80.24381,45.031507],[80.328194,45.069973],[80.404571,45.049264],[80.493882,45.126991],[80.599207,45.10588],[80.731634,45.156111],[80.897938,45.127413],[80.93551,45.16033],[81.024821,45.162862],[81.111669,45.218522],[81.170183,45.210935],[81.44982,45.265707],[81.575471,45.307803],[81.634601,45.357856],[81.78797,45.383497],[81.921013,45.233272],[82.052824,45.25602],[82.109491,45.211357],[82.294272,45.247596],[82.487061,45.181],[82.58746,45.224001],[82.60101,45.346083],[82.546808,45.425925],[82.281954,45.538772],[82.266555,45.620015],[82.289961,45.7166],[82.340468,45.772552],[82.342932,45.935076],[82.461808,45.979999],[82.518474,46.153938],[82.726662,46.494818],[82.829524,46.772551],[82.876335,46.82375],[82.937929,47.014193],[82.993364,47.06557],[83.02724,47.215341],[83.15474,47.236063],[83.257602,47.173057],[83.370318,47.178751],[83.418978,47.118934],[83.463325,47.131961],[83.576042,47.059049],[83.766367,47.026838],[83.932671,46.970117],[84.002888,46.990527],[84.086656,46.965217],[84.195061,47.003586],[84.37122,46.993384],[84.425422,47.00889],[84.506726,46.972975],[84.748175,47.009706],[84.849189,46.95705],[84.934188,46.863857],[84.987159,46.918239],[85.082014,46.939895],[85.276651,47.068831],[85.325926,47.044781],[85.545816,47.057826],[85.582772,47.14295],[85.682555,47.222655],[85.675163,47.318063],[85.701649,47.384138],[85.614801,47.497853],[85.617881,47.550781],[85.547048,48.00833],[85.529186,48.02714],[85.587084,48.191738],[85.678243,48.266272],[85.695489,48.335129],[85.791576,48.418986],[85.916612,48.438043],[86.225813,48.432485],[86.305269,48.491999],[86.416138,48.481688],[86.579978,48.538768],[86.640956,48.629012],[86.780774,48.73133],[86.754289,48.78458],[86.822042,48.849193],[86.757985,48.894844],[86.732731,48.995444],[86.836209,49.051159],[86.88918,49.132656],[87.088128,49.13383],[87.112766,49.155748],[87.239033,49.114644],[87.388707,49.098193],[87.43675,49.075073],[87.511894,49.101718],[87.49896,49.141268],[87.821096,49.173745],[87.867291,49.108769],[87.833415,49.050374],[87.911639,48.980132],[87.87653,48.949099],[87.763198,48.926697],[87.742256,48.881074],[87.93874,48.757765],[88.029283,48.75027],[88.089645,48.695009],[88.027436,48.62743],[87.96153,48.599344],[88.041602,48.548275],[88.10874,48.545898],[88.196819,48.493982],[88.363123,48.460267],[88.443811,48.391579],[88.503557,48.413029],[88.605803,48.337914],[88.575006,48.277423],[88.663085,48.172189],[88.79736,48.133869],[88.824461,48.106708],[88.939026,48.115497],[89.078228,47.98711],[89.231597,47.980301],[89.38127,48.046344],[89.569132,48.037943],[89.651052,47.913774],[89.735435,47.897329],[89.761921,47.835916],[89.957789,47.842743],[89.960253,47.885694],[90.086521,47.865628],[90.07605,47.777646],[90.13518,47.723337],[90.331665,47.68146],[90.398186,47.547551],[90.468403,47.497853],[90.468403,47.404795],[90.526301,47.378871],[90.488113,47.317252],[90.56141,47.207212],[90.767134,46.992568],[90.901408,46.960725],[90.958075,46.8794],[90.942676,46.825797],[91.054161,46.71761],[91.017821,46.582483],[91.079415,46.558626],[90.983328,46.374823],[90.900177,46.31204],[91.021517,46.121185],[91.028292,46.023224],[90.850285,45.888035],[90.714779,45.728714],[90.676591,45.582339],[90.671047,45.48762],[90.772677,45.432223],[90.804706,45.294756],[90.877387,45.280865],[90.881698,45.191964],[91.007966,45.218522],[91.129922,45.215993],[91.242023,45.137544],[91.37753,45.110947],[91.448978,45.156533],[91.561695,45.075466],[91.694738,45.065325],[91.803144,45.082649],[92.100026,45.081381],[92.240461,45.015859],[92.315605,45.02897],[92.501003,45.001054],[92.779407,45.050532],[92.884117,45.046727],[92.932776,45.017551],[93.174225,45.015436],[93.434767,44.955343],[93.509296,44.968044],[93.716251,44.89434],[93.723642,44.86551],[94.215162,44.667978],[94.329727,44.582811],[94.359292,44.51544],[94.470777,44.509466],[94.606283,44.448418],[94.722696,44.340681],[94.945666,44.292734],[94.998637,44.25332],[95.398381,44.294447],[95.326932,44.028756],[95.527113,44.007243],[95.623199,43.855567],[95.735916,43.597437],[95.857872,43.417779],[95.880046,43.280289],[95.921314,43.22974],[96.363558,42.900586],[96.386348,42.727655],[96.103632,42.604026],[96.02356,42.54234],[95.978596,42.436892],[96.06606,42.414367],[96.040806,42.3264],[96.178161,42.217929],[96.077147,42.149652],[96.13874,42.054207],[96.117183,41.985753],[96.038342,41.924794],[95.855408,41.849516],[95.677402,41.830795],[95.57146,41.796011],[95.39407,41.693333],[95.29552,41.569456],[95.135991,41.772811],[94.861898,41.668309],[94.750413,41.538114],[94.534219,41.50586],[94.184365,41.268392],[94.01067,41.114857],[93.809874,40.879583],[93.820961,40.793574],[93.760599,40.664804],[93.506216,40.648464],[92.928465,40.572609],[92.906907,40.310773],[92.796654,40.15364],[92.745531,39.868137],[92.639589,39.514543],[92.52564,39.368528],[92.339011,39.236575],[92.366728,39.059322],[92.41046,39.038412],[92.38459,39.000758],[92.263866,39.002153],[92.173323,38.960758],[91.966368,38.930976],[91.87952,38.884417],[91.446515,38.813588],[91.307928,38.751089],[90.831191,38.667982],[90.619308,38.664245],[90.610685,38.596003],[90.463476,38.556711],[90.424671,38.492114],[90.315034,38.501948],[90.111774,38.477595],[90.137644,38.340692],[90.280542,38.238315],[90.352607,38.233615],[90.361846,38.300322],[90.530613,38.32004],[90.516446,38.207291],[90.519526,37.73089],[90.776373,37.6504],[90.882314,37.575513],[90.863836,37.534246],[90.958075,37.477763],[91.057241,37.483936],[91.099741,37.447843],[91.134849,37.32614],[91.192132,37.27807],[91.1909,37.205669],[91.280211,37.163721],[91.303617,37.01242],[91.181045,37.025318],[90.983944,36.913458],[90.853981,36.915371],[90.735105,36.827778],[90.720938,36.708912],[90.7388,36.58746],[91.035683,36.529788],[91.05293,36.432608],[91.026444,36.323738],[91.07264,36.299149],[91.124994,36.115693],[91.09235,36.088621],[90.979017,36.106992],[90.922966,36.029126],[90.841046,36.01848],[90.776373,36.086203],[90.66304,36.134058],[90.526917,36.148553],[90.430215,36.133091],[90.234962,36.161597],[90.128405,36.208923],[90.145651,36.238849],[90.028006,36.25815],[89.999057,36.169809],[89.937463,36.130675],[89.941159,36.067343],[89.711414,36.092972],[89.490291,36.150969],[89.375727,36.228231],[89.287647,36.235954],[89.232213,36.295774],[89.127503,36.249465],[89.10225,36.281305],[88.964279,36.318917],[88.926091,36.364221],[88.802903,36.337717],[88.783809,36.291916],[88.623665,36.389271],[88.573158,36.461005],[88.470912,36.482175],[88.365586,36.457636],[88.241782,36.468704],[88.134609,36.427313],[87.983088,36.437903],[87.949211,36.401312],[87.731785,36.384936],[87.570409,36.342536],[87.470626,36.354102],[87.460155,36.409498],[87.361605,36.419128],[87.306787,36.363739],[87.193454,36.349283],[87.149106,36.29722],[86.996353,36.308793],[86.887332,36.262492],[86.862078,36.300114],[86.746282,36.291916],[86.701318,36.245122],[86.515305,36.205543],[86.392733,36.206992],[86.187625,36.131158],[86.199944,36.032513],[86.132806,35.979271],[86.060125,35.846008],[85.949256,35.779049],[85.811286,35.779049],[85.65299,35.731465],[85.613569,35.652257],[85.372121,35.701346],[85.271107,35.788757],[85.159006,35.745549],[85.053065,35.751862],[84.729081,35.613353],[84.448828,35.55058],[84.45314,35.473141],[84.335495,35.414647],[84.1618,35.359039],[84.095895,35.362943],[84.005968,35.422449],[83.885244,35.367334],[83.677672,35.360991],[83.622238,35.335614],[83.451006,35.38197],[83.242203,35.420011],[83.127022,35.398554],[83.067892,35.462908],[82.998907,35.484348],[82.960719,35.671702],[82.788872,35.684824],[82.731589,35.63767],[82.628727,35.692114],[82.424852,35.713006],[82.336156,35.651284],[82.328149,35.559342],[82.033114,35.450236],[82.05344,35.350255],[81.927789,35.271158],[81.736847,35.262365],[81.675253,35.233536],[81.513261,35.235002],[81.494167,35.292161],[81.362356,35.354647],[81.219458,35.319016],[81.09935,35.407333],[81.031597,35.380506],[81.026053,35.312181],[80.844351,35.345375],[80.689135,35.33903],[80.65649,35.394165],[80.516672,35.392214],[80.412578,35.433663],[80.321419,35.386848],[80.268448,35.294114],[80.362687,35.209096],[80.257977,35.20323],[80.23026,35.147476],[80.118159,35.066222],[80.031311,35.034384],[80.034391,34.902],[79.947544,34.820993],[79.906892,34.683837],[79.801566,34.478909],[79.675914,34.451284],[79.504683,34.454737],[79.229358,34.413778],[79.161605,34.441416],[79.0107,34.399956],[79.039649,34.33427]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":710000,\"name\":\"台湾\",\"center\":[121.509062,25.044332],\"centroid\":[120.971486,23.749452],\"childrenNum\":0,\"level\":\"province\",\"subFeatureIndex\":31,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[120.443706,22.441042],[120.297112,22.531154],[120.20041,22.721137],[120.131425,23.002313],[120.018708,23.073342],[120.108019,23.34115],[120.12157,23.504758],[120.095084,23.587583],[120.102476,23.70104],[120.175156,23.807282],[120.245989,23.84067],[120.278018,23.927657],[120.68885,24.600764],[120.82374,24.68832],[120.89211,24.767665],[120.914899,24.864876],[121.024537,25.040639],[121.209318,25.127342],[121.371926,25.15984],[121.444607,25.27081],[121.53515,25.307597],[121.62323,25.294614],[121.745186,25.162007],[121.917033,25.137634],[121.947214,25.031965],[122.012503,25.001602],[121.844968,24.836101],[121.841272,24.733977],[121.892395,24.618171],[121.88562,24.529477],[121.809243,24.338818],[121.643556,24.097633],[121.65957,24.006934],[121.621382,23.920547],[121.522832,23.538772],[121.479716,23.32247],[121.415042,23.196039],[121.430441,23.137181],[121.370695,23.084351],[121.324499,22.945574],[121.170514,22.723345],[121.03316,22.650477],[120.914899,22.302718],[120.907508,22.033426],[120.86624,21.98461],[120.873016,21.897477],[120.701784,21.926898],[120.651277,22.033426],[120.640806,22.241259],[120.569973,22.361938],[120.443706,22.441042]]],[[[119.646064,23.55084],[119.609108,23.503661],[119.566608,23.584842],[119.678093,23.600195],[119.646064,23.55084]]],[[[123.491374,25.747089],[123.496917,25.739005],[123.495069,25.737927],[123.494453,25.737927],[123.492606,25.737388],[123.480903,25.737927],[123.480287,25.737388],[123.46612,25.732537],[123.465504,25.732537],[123.491374,25.747089]]],[[[123.549272,25.724991],[123.549272,25.724991],[123.546192,25.729303],[123.546192,25.728764],[123.549272,25.724991]]],[[[123.690322,25.923187],[123.691554,25.921572],[123.690938,25.917267],[123.690938,25.916729],[123.690322,25.923187]]],[[[123.559743,25.718523],[123.559743,25.717984],[123.548656,25.720679],[123.549272,25.720679],[123.559743,25.718523]]],[[[121.510513,22.087215],[121.573339,22.086106],[121.594281,21.995152],[121.510513,22.087215]]],[[[123.559743,25.718523],[123.560359,25.718523],[123.560359,25.717984],[123.559743,25.717984],[123.559743,25.718523]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":810000,\"name\":\"香港\",\"center\":[114.173355,22.320048],\"centroid\":[114.134394,22.377371],\"childrenNum\":18,\"level\":\"province\",\"subFeatureIndex\":32,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[114.031778,22.504071],[114.044096,22.502413],[114.045944,22.502413],[114.185762,22.551601],[114.185762,22.551601],[114.232574,22.539997],[114.232574,22.528944],[114.263371,22.541654],[114.263987,22.541654],[114.271994,22.535023],[114.28924,22.522864],[114.355762,22.434958],[114.406269,22.433299],[114.406269,22.432746],[114.356994,22.340356],[114.323733,22.384622],[114.315726,22.299951],[114.315726,22.298843],[114.248588,22.274484],[114.265835,22.200825],[114.195002,22.232951],[114.120473,22.272269],[114.121089,22.320985],[114.034857,22.301058],[114.026234,22.229628],[113.848844,22.191961],[113.898119,22.308808],[114.015763,22.332054],[113.920293,22.368024],[113.918445,22.418366],[114.031778,22.504071]]],[[[114.350834,22.260087],[114.355146,22.268393],[114.355762,22.268393],[114.350834,22.260087]]],[[[114.320037,22.381303],[114.320037,22.381856],[114.319421,22.382409],[114.323733,22.384622],[114.320037,22.381303]]],[[[114.372392,22.322645],[114.372392,22.323752],[114.37424,22.323199],[114.372392,22.322645]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":820000,\"name\":\"澳门\",\"center\":[113.54909,22.198951],\"centroid\":[113.56642,22.159262],\"childrenNum\":8,\"level\":\"province\",\"subFeatureIndex\":33,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[113.558736,22.213012],[113.6037,22.132116],[113.553809,22.107727],[113.558736,22.213012]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":100000,\"name\":\"\",\"adchar\":\"JD\"},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[122.51865306,23.46078502],[122.51742454,23.45790762],[122.51536697,23.45555069],[122.51268178,23.45394494],[122.50963181,23.45324755],[122.5065156,23.45352678],[122.5036382,23.45475531],[122.50128127,23.45681287],[122.49967552,23.45949807],[122.49897813,23.46254804],[122.49925737,23.46566424],[122.77921829,24.57855302],[122.78044682,24.58143041],[122.78250438,24.58378734],[122.78518957,24.5853931],[122.78823955,24.58609049],[122.79135575,24.58581125],[122.79423315,24.58458272],[122.79659008,24.58252516],[122.79819583,24.57983997],[122.79889322,24.57678999],[122.79861399,24.57367379],[122.51865306,23.46078502]]],[[[121.17202617,20.8054593],[121.16966862,20.80340244],[121.16679085,20.80217478],[121.16367457,20.80189649],[121.1606248,20.8025948],[121.1579401,20.80420136],[121.15588324,20.80655891],[121.15465558,20.80943668],[121.15437729,20.81255297],[121.1550756,20.81560273],[121.15668216,20.81828744],[121.89404403,21.70026162],[121.89640158,21.70231847],[121.89927934,21.70354613],[121.90239563,21.70382443],[121.9054454,21.70312611],[121.9081301,21.70151955],[121.91018696,21.699162],[121.91141462,21.69628423],[121.91169291,21.69316794],[121.9109946,21.69011818],[121.90938804,21.68743347],[121.17202617,20.8054593]]],[[[119.47366172,18.00707291],[119.47175735,18.00459056],[119.46917909,18.0028182],[119.46617933,18.0019293],[119.4630517,18.00201089],[119.46010237,18.00305497],[119.45762002,18.00495935],[119.45584765,18.00753761],[119.45495876,18.01053737],[119.45504035,18.01366499],[119.45608443,18.01661433],[120.00812005,19.0335793],[120.01002443,19.03606165],[120.01260269,19.03783401],[120.01560245,19.03872291],[120.01873007,19.03864132],[120.02167941,19.03759723],[120.02416175,19.03569286],[120.02593412,19.0331146],[120.02682302,19.03011484],[120.02674143,19.02698721],[120.02569734,19.02403788],[119.47366172,18.00707291]]],[[[119.0726757,15.04098494],[119.0726746,15.04083704],[119.07218171,15.00751424],[119.07164663,15.00443165],[119.07018516,15.00166528],[119.06794036,14.99948592],[119.06513198,14.99810691],[119.06203491,14.99766324],[119.05895232,14.99819832],[119.05618595,14.99965979],[119.05400659,15.00190458],[119.05262758,15.00471297],[119.0521839,15.00781004],[119.0526757,15.04105889],[119.0526757,16.04388528],[119.05316513,16.04697545],[119.05458553,16.04976313],[119.05679784,16.05197545],[119.05958553,16.05339584],[119.0626757,16.05388528],[119.06576587,16.05339584],[119.06855355,16.05197545],[119.07076587,16.04976313],[119.07218626,16.04697545],[119.0726757,16.04388528],[119.0726757,15.04098494]]],[[[118.68646749,11.18959191],[118.85557939,11.6136711],[118.9698053,11.99151854],[118.97116801,11.99433487],[118.97333431,11.99659227],[118.97609216,11.99806975],[118.9791716,11.99862269],[118.98227119,11.99819697],[118.98508753,11.99683427],[118.98734492,11.99466796],[118.9888224,11.99191011],[118.98937534,11.98883067],[118.98894963,11.98573108],[118.87459939,11.60747236],[118.87431591,11.606662],[118.70476212,11.18147468],[118.70409227,11.18010771],[118.54242469,10.9053354],[118.54043581,10.90292022],[118.53779795,10.90123786],[118.53476931,10.90045298],[118.53164636,10.90064241],[118.5287348,10.90178762],[118.52631962,10.9037765],[118.52463726,10.90641436],[118.52385237,10.909443],[118.52404181,10.91256595],[118.52518702,10.91547751],[118.68646749,11.18959191]]],[[[115.54466883,7.14672265],[115.54229721,7.14468204],[115.53941108,7.14347417],[115.53629295,7.14321728],[115.53324806,7.14393652],[115.53057445,7.14556148],[115.52853383,7.1479331],[115.52732596,7.15081924],[115.52706908,7.15393736],[115.52778832,7.15698226],[115.52941328,7.15965587],[116.23523025,7.99221221],[116.23760187,7.99425282],[116.240488,7.99546069],[116.24360613,7.99571758],[116.24665102,7.99499834],[116.24932463,7.99337338],[116.25136525,7.99100176],[116.25257312,7.98811563],[116.25283001,7.9849975],[116.25211077,7.98195261],[116.2504858,7.979279],[115.54466883,7.14672265]]],[[[112.30705249,3.53487257],[112.51501594,3.59753306],[112.84361424,3.7506962],[112.84662187,3.75155809],[112.84974864,3.7514484],[112.85268847,3.75037785],[112.8551536,3.74845124],[112.85690272,3.74585715],[112.85776462,3.74284952],[112.85765492,3.73972276],[112.85658437,3.73678292],[112.85465776,3.7343178],[112.85206367,3.73256867],[112.52281386,3.57910186],[112.52147408,3.5785908],[112.31248917,3.51562254],[112.31181658,3.51544515],[111.79132585,3.39736822],[111.78820398,3.39716187],[111.78517113,3.39793033],[111.78252419,3.39959839],[111.78052226,3.40200275],[111.77936129,3.40490807],[111.77915495,3.40802995],[111.77992341,3.41106279],[111.78159146,3.41370973],[111.78399583,3.41571167],[111.78690114,3.41687263],[112.30705249,3.53487257]]],[[[108.26055972,6.08912451],[108.26004031,6.09098419],[108.23638164,6.22427602],[108.23630689,6.22476797],[108.19687578,6.53630242],[108.19679674,6.53760583],[108.1987683,6.95072469],[108.19897125,6.95268198],[108.22460147,7.07791743],[108.22570055,7.08084671],[108.22765103,7.083293],[108.230262,7.08501682],[108.23327786,7.08584944],[108.23640341,7.08570936],[108.2393327,7.08461028],[108.24177899,7.0826598],[108.24350281,7.08004883],[108.24433543,7.07703297],[108.24419535,7.07390742],[108.21876335,6.94964057],[108.21679964,6.53816468],[108.25611734,6.22752625],[108.279563,6.09543449],[108.30878645,6.01987736],[108.30944469,6.0168187],[108.30912553,6.01370633],[108.30786022,6.01084492],[108.30577262,6.00851455],[108.30306706,6.00694335],[108.3000084,6.00628511],[108.29689603,6.00660426],[108.29403462,6.00786957],[108.29170425,6.00995718],[108.29013305,6.01266273],[108.26055972,6.08912451]]],[[[110.12822847,11.36894451],[110.18898148,11.48996382],[110.23982347,11.61066468],[110.28485499,11.78705054],[110.3083549,11.94803461],[110.3142445,12.14195265],[110.312278,12.23998238],[110.31270536,12.24308175],[110.31406956,12.24589736],[110.31623706,12.2481536],[110.3189957,12.24962962],[110.32207543,12.25018094],[110.32517479,12.24975358],[110.3279904,12.24838938],[110.33024665,12.24622187],[110.33172267,12.24346324],[110.33227398,12.24038351],[110.33424553,12.14210167],[110.33424294,12.14159753],[110.32832827,11.94685414],[110.32822801,11.94571326],[110.30456934,11.78364161],[110.30436343,11.7826124],[110.25901765,11.60499559],[110.25854422,11.60358735],[110.20728377,11.48189306],[110.20700505,11.48128846],[110.14588682,11.35954163],[110.14541497,11.35870461],[110.07246741,11.24270688],[110.07040803,11.24035153],[110.0677216,11.23874785],[110.06467109,11.23805281],[110.0615551,11.23833444],[110.05867865,11.23956519],[110.05632331,11.24162456],[110.05471962,11.24431099],[110.05402458,11.2473615],[110.05430621,11.25047749],[110.05553696,11.25335394],[110.12822847,11.36894451]]],[[[109.82951587,15.22896754],[109.77065019,15.44468789],[109.67264555,15.66561455],[109.57455994,15.82609887],[109.51574449,15.91095759],[109.29314007,16.19491896],[109.29161878,16.19765288],[109.29101677,16.20072311],[109.29139298,16.2038291],[109.29271057,16.20666681],[109.29484059,16.20895848],[109.29757451,16.21047978],[109.30064474,16.21108179],[109.30375073,16.21070558],[109.30658844,16.20938798],[109.30888011,16.20725797],[109.53166592,15.92306523],[109.53201478,15.92259221],[109.59116145,15.8372556],[109.59147511,15.83677407],[109.6900529,15.67548445],[109.69066131,15.67432448],[109.7892391,15.45210582],[109.78974541,15.45068337],[109.84889209,15.23393326],[109.84903675,15.23333003],[109.8648092,15.15722425],[109.86495704,15.15409906],[109.86413191,15.15108113],[109.86241457,15.1484659],[109.85997314,15.14650935],[109.85704658,15.145403],[109.85392139,15.14525516],[109.85090347,15.14608029],[109.84828823,15.14779763],[109.84633168,15.15023907],[109.84522534,15.15316562],[109.82951587,15.22896754]]]]}}]}");

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/bundle_b/common/vendor.js.map