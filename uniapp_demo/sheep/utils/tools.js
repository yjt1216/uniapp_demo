import test from '@/sheep/utils/test.js'



//所在环境
let client = null
// #ifdef MP-WEIXIN
client = 1
// #endif

// #ifdef H5
client = isWeixinClient() ? 2 : 6
// #endif

// #ifdef APP-PLUS
client = 3;
uni.getSystemInfo({
	success: res => {
		client = res.platform == 'ios' ? 3 : 4;
	},
	fail: res => {
		client = 3
	}
})
// #endif
export {
	client
}

// wgs84转gcj02
export function wgs84togcj02(lng, lat) {
	lat = parseFloat(lat)
	lng = parseFloat(lng)
	// 定义一些常量
	var PI = 3.1415926535897932384626
	var a = 6378245.0
	var ee = 0.00669342162296594323
	function transformlat (lng, lat) {
		var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
		ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
		ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0
		ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0
		return ret
	}
	function transformlng (lng, lat) {
		var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
		ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
		ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0
		ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0
		return ret
	}
	// 判断是否在国内，不在国内则不做偏移
	function out_of_china (lng, lat) {
		return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false)
	}
	if(out_of_china(lng, lat)) {
		return [lng, lat]
	} else {
		var dlat = transformlat(lng - 105.0, lat - 35.0)
		var dlng = transformlng(lng - 105.0, lat - 35.0)
		var radlat = lat / 180.0 * PI
		var magic = Math.sin(radlat)
		magic = 1 - ee * magic * magic
		var sqrtmagic = Math.sqrt(magic)
		dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
		dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
		var mglat = lat + dlat
		var mglng = lng + dlng
		return [mglng, mglat]
	}
}
// gcj02转wgs84
export function gcj02towgs84(lng, lat) {
	lat = parseFloat(lat)
	lng = parseFloat(lng)
	// 定义一些常量
	var PI = 3.1415926535897932384626
	var a = 6378245.0
	var ee = 0.00669342162296594323
	function transformlat(lng, lat) {
		var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
		ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
		ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0
		ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0
		return ret
	}
	function transformlng(lng, lat) {
		var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
		ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
		ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0
		ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0
		return ret
	}
	// 判断是否在国内，不在国内则不做偏移
	function out_of_china(lng, lat) {
		return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false)
	}
	if(out_of_china(lng, lat)) {
		return [lng, lat]
	} else {
		var dlat = transformlat(lng - 105.0, lat - 35.0)
		var dlng = transformlng(lng - 105.0, lat - 35.0)
		var radlat = lat / 180.0 * PI
		var magic = Math.sin(radlat)
		magic = 1 - ee * magic * magic
		var sqrtmagic = Math.sqrt(magic)
		dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
		dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
		var mglat = lat + dlat
		var mglng = lng + dlng
		return [lng * 2 - mglng, lat * 2 - mglat]
	}
}

/**
* H5端图片压缩
*  参数说明：
*  imgSrc 图片url
*  scale缩放比例 0-1
*  返回base64
*  callback 回调设置返回值 
*/
export function translateImage(imgSrc, scale, callback) {
	var img = new Image();
	img.src = imgSrc;
	img.onload = function() {
		var that = this;
		var h = that.height; // 默认按比例压缩
		var w = that.width;
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var width = document.createAttribute("width");
		width.nodeValue = w;
		var height = document.createAttribute("height");
		height.nodeValue = h;
		canvas.setAttributeNode(width);
		canvas.setAttributeNode(height);
		ctx.drawImage(that, 0, 0, w, h);
		var base64 = canvas.toDataURL('image/jpeg', scale); //压缩比例
		canvas = null;
		callback(base64);
	}
};


/* 替换list中item的key值 */
export function renameAndAddLabelShow(list, renameMap) {
  return list.map(item => {
    let newItem = { ...item, labelShow: false };
    for (const [oldName, newName] of Object.entries(renameMap)) {
      if (item.hasOwnProperty(oldName)) {
        newItem[newName] = item[oldName];
        // 可以选择性地删除旧属性（根据需求）
        // delete newItem[oldName];
      }
    }
    return newItem;
  });
}

/**
* 更新数组list中item包含的key名称并替换
* @description 传递参数并发起跳转
* @param {Object} list - [item]
* @param {Object} renameMap - 重命名规则 oldname ---> newname
* @param {Object} targetKeyName - 将数组绑定单新对象object中的data
* @return result
*/
export function transformListWithRename(list, renameMap, targetKeyName = 'data') {
	return {
	    series: [{
			labelLine: {
				show: false
			},
			data: list.map(item => {
				let newItem = { ...item };
				for (const [oldName, newName] of Object.entries(renameMap)) {
					if (item.hasOwnProperty(oldName)) {
						newItem[newName] = item[oldName];
						// 可以选择性地删除旧属性（根据需求）
						// delete newItem[oldName];
					}
				}
				newItem.labelShow = false; // 给每个新数据项添加默认的labelShow属性
				return newItem;
			})
	    }]
	};
}

/**
* 获取数组list中所有item中value的和
* @description 传递参数并发起跳转
* @param {Object} list - [item]
* @param {Object} key - item.key
* @return result
*/
export function sumValues(list, key) {
	return list.reduce((accumulator, currentItem) => {
		return accumulator + (currentItem[key] || 0);
	}, 0);
}

// 提示message
/*

import {toast} from './tools'

	this.$toast({
		title: '这是示例'
	})
*/
export function toast(info = {}, navigateOpt) {
	let title = info.title || ''
	let icon = info.icon || 'none'
	let endtime = info.endtime || 2000
	if (title) uni.showToast({
		title: title,
		icon: icon,
		duration: endtime
	})
	if (navigateOpt != undefined) {
		if (typeof navigateOpt == 'object') {
			let tab = navigateOpt.tab || 1,
				url = navigateOpt.url || '';
			switch (tab) {
				case 1:
					//跳转至 table
					setTimeout(function() {
						uni.switchTab({
							url: url
						})
					}, endtime);
					break;
				case 2:
					//跳转至非table页面
					setTimeout(function() {
						uni.navigateTo({
							url: url,
						})
					}, endtime);
					break;
				case 3:
					//返回上页面
					setTimeout(function() {
						uni.navigateBack({
							delta: parseInt(url),
						})
					}, endtime);
					break;
				case 4:
					//关闭当前所有页面跳转至非table页面
					setTimeout(function() {
						uni.reLaunch({
							url: url,
						})
					}, endtime);
					break;
				case 5:
					//关闭当前页面跳转至非table页面
					setTimeout(function() {
						uni.redirectTo({
							url: url,
						})
					}, endtime);
					break;
			}

		} else if (typeof navigateOpt == 'function') {
			setTimeout(function() {
				navigateOpt && navigateOpt();
			}, endtime);
		}
	}
}


	// 图片压缩公共方法
	export function compressImage(file, quality = 0.8, maxWidth = 1024) {
		return new Promise((resolve, reject) => {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function (e) {
			  let img = new Image();
			  img.src = e.target.result;
			  img.onload = function () {
				let canvas = document.createElement('canvas');
				let ctx = canvas.getContext('2d');

				// 调整canvas尺寸以适应图片的最大宽度
				let width = img.width;
				let height = img.height;
				if (width > maxWidth) {
				  height *= maxWidth / width;
				  width = maxWidth;
				}

				canvas.width = width;
				canvas.height = height;

				// 绘制压缩后的图片到canvas上
				ctx.drawImage(img, 0, 0, width, height);

				// 将canvas内容转为base64格式并压缩质量
				let dataUrl = canvas.toDataURL('image/jpeg', quality);

				// 将压缩后的base64转换为file对象（如果需要上传至服务器）
				let compressedFile = dataURLtoBlob(dataUrl);

				resolve(compressedFile);
			  };
			  img.onerror = function (err) {
				reject(err);
			  };
			};
			reader.onerror = function (error) {
			  reject(error);
			};
		});

  // base64转blob函数
  function dataURLtoBlob(dataUrl) {
    let arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], 'compressed.jpg', { type: mime });
  }
}


// normal.js
 
/**
 * 检查网络
 * @param {Boolean} silence - 静默检查
 */
async function checkNetwork() {
  const networkStatus = await uni.getNetworkType();
  if (networkStatus.networkType == 'none') {
    return Promise.resolve(false);
  }
  return Promise.resolve(true);
}

/**
 * 获取是否授权了定位权限
 * @param { Boolean } launchAuth: 是否发起授权请求, 初次有效
 * @return { Boolean }
 */
export function getLocationAuth(launchAuth) {
  return new Promise(resolve => {
    uni.getSetting({
      success: res => {
        if(launchAuth && res.authSetting['scope.userLocation'] === undefined) {
          return uni.authorize({
            scope: 'scope.userLocation',
            success: () => {
              resolve(true);
            },
            fail: () => {
              resolve(false);
            }
          })
        }
         resolve(res.authSetting['scope.userLocation']);
      },
      fail: err => {
        console.err(err);
      }
    })
  })
}

//判断是否为微信环境
export function isWeixinClient() {
	// #ifdef H5
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		//这是微信环境
		return true;
	} else {
		//这是非微信环境
		return false;
	}
	// #endif
	// #ifndef H5
	return false
	// #endif
}

//判断是否为安卓环境
export function isAndroid() {
	let u = navigator.userAgent;
	return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}


//获取url后的参数  以对象返回
export function strToParams(str) {
	var newparams = {}
	for (let item of str.split('&')) {
		newparams[item.split('=')[0]] = item.split('=')[1]
	}
	return newparams
}

//重写encodeURL函数
export function urlencode(str) {
	str = (str + '').toString();
	return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
	replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

/* 
 * 一维数组截取为二维数组
 * 5个一组
**/
export function arraySliceFive(data, array = [], optNum = 5) {
	data = JSON.parse(JSON.stringify(data))
	if (data.length <= optNum) {
		data.length > 0 && array.push(data);
		return array;
	}
	array.push(data.splice(0, optNum));
	return arraySliceFive(data, array, optNum);
}

export function arraySliceSix(data, array = [], optNum = 6) {
	data = JSON.parse(JSON.stringify(data))
	if (data.length <= optNum) {
		data.length > 0 && array.push(data);
		return array;
	}
	array.push(data.splice(0, optNum));
	return arraySliceFive(data, array, optNum);
}


/* 对象参数转为以？&拼接的字符 */
export function paramsToStr(params) {
	let p = '';
	if (typeof params == 'object') {
		p = '?'
		for (let props in params) {
			p += `${props}=${params[props]}&`
		}
		p = p.slice(0, -1)
	}
	return p
}

// 判断类型集合
export const checkStr = (str, type) => {
	switch (type) {
		case 'phone': //手机号码
			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
		case 'tel': //座机
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'card': //身份证
			return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
		case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
			return /^[a-zA-Z]\w{5,17}$/.test(str)
		case 'postal': //邮政编码
			return /[1-9]\d{5}(?!\d)/.test(str);
		case 'QQ': //QQ号
			return /^[1-9][0-9]{4,9}$/.test(str);
		case 'email': //邮箱
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'money': //金额(小数点2位)
			return /^\d*(?:\.\d{0,2})?$/.test(str);
		case 'URL': //网址
			return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
		case 'IP': //IP
			return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
		case 'date': //日期时间
			return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/
				.test(str)
		case 'number': //数字
			return /^[0-9]$/.test(str);
		case 'english': //英文
			return /^[a-zA-Z]+$/.test(str);
		case 'chinese': //中文
			return /^[\\u4E00-\\u9FA5]+$/.test(str);
		case 'lower': //小写
			return /^[a-z]+$/.test(str);
		case 'upper': //大写
			return /^[A-Z]+$/.test(str);
		case 'HTML': //HTML标记
			return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
		default:
			return true;
	}
}

// 格式化时间-小于10补0
function formatDigit(n) {
	return n.toString().replace(/^(\d)$/, '0$1');
}
// 格式化时间，通用
export const formatDate = (timestamp, formats) => {
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
		if (typeof(timestamp) != 'string') {
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
	return formats.replace(/Y|M|D|h|m|s/g, (matches) => {
		return {
			Y: year,
			M: month,
			D: day,
			h: hour,
			m: minute,
			s: second
		} [matches];
	});
}

// 验证邮箱
export const isEmail = (s) => {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
// 验证手机号码
export const isMobile = (s) => {
	return /^1[0-9]{10}$/.test(s)
}
// 验证电话号码
export const isPhone = (s) => {
	return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}
// 验证是否url地址
export const isURL = (s) => {
	return /^http[s]?:\/\/.*/.test(s)
}
// 验证是否字符串
export const isString = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}
// 验证是否是否数字
export const isNumber = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}
// 验证是否是Boolean
export const isBoolean = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}
// 验证是否是函数
export const isFunction = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}
//是否为null
export const isNull = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
//是否undefined
export const isUndefined = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}
//是否对象
export const isObj = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}
//是否数组
export const isArray = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}
// 是否时间对象
export const isDate = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}
//是否正则
export const isRegExp = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}
// 是否错误对象
export const isError = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}
//是否Symbol函数
export const isSymbol = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}
// 是否Promise对象
export const isPromise = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}
// 是否Set对象
export const isSet = (o) => {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}
//判断数据是不是引用类型的数据
export function isObject(value) {
	let type = typeof value;
	return value != null && (type == 'object' || type == 'function');
}

// 字符串超出多少字显示省略号
export function strOut(str, len=0,type) {
	type=type||'star';
	var restr = '';
	if (str) {
		if (str.length >= len) {
			restr = str.substring(0, len) + (type=='star'?'***':'...');
		} else {
			restr = str;
		}
	}
	return restr;
}
//浮点数加法运算--解决精度丢失（传入Number，返回Number）
export function FloatAdd(arg1, arg2) {
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
export function FloatMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split('.')[1].length;
	} catch (e) {}
	try {
		m += s2.split('.')[1].length;
	} catch (e) {}
	return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}
//随机数时间戳 （返回数字符串）
export function uniqueId() {
	var a = Math.random,
		b = parseInt;
	return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}

// 数组随机洗牌算法
export const shuffle = (arr) => {
	var result = [],
		random;
	while (arr.length > 0) {
		random = Math.floor(Math.random() * arr.length);
		result.push(arr[random])
		arr.splice(random, 1)
	}
	return result;
}
// 严格的身份证号码校验
export const isCardID = (sId) => {
	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
		console.log('你输入的身份证长度或格式错误')
		return false
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
		console.log('你的身份证地区非法')
		return false
	}

	// 出生日期验证
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g,
			"/"),
		d = new Date(sBirthday)
	if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
		console.log('身份证上的出生日期非法')
		return false
	}

	// 身份证号码校验
	var sum = 0,
		weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
		codes = "10X98765432"
	for (var i = 0; i < sId.length - 1; i++) {
		sum += sId[i] * weights[i];
	}
	var last = codes[sum % 11]; //计算出来的最后一位身份证号码
	if (sId[sId.length - 1] != last) {
		console.log('你输入的身份证号非法')
		return false
	}

	return true
}
// 随机整数范围
export const random = (min, max) => {
	if (arguments.length === 2) {
		return Math.floor(min + Math.random() * ((max + 1) - min))
	} else {
		return null;
	}
}
// 将阿拉伯数字翻译成中文的大写数字
export const numberToChinese = (num) => {
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
				if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
					.test(a[0]))
					re = BB[4] + re;
				break;
			case 8:
				re = BB[5] + re;
				BB[7] = BB[5];
				k = 0;
				break;
		}
		if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
			re = AA[0] + re;
		if (a[0].charAt(i) != 0)
			re = AA[a[0].charAt(i)] + BB[k % 4] + re;
		k++;
	}

	if (a.length > 1) // 加上小数部分(如果有小数部分)
	{
		re += BB[6];
		for (var i = 0; i < a[1].length; i++)
			re += AA[a[1].charAt(i)];
	}
	if (re == '一十')
		re = "十";
	if (re.match(/^一/) && re.length == 3)
		re = re.replace("一", "");
	return re;
}
// 将数字转换为大写金额
export const changeToChinese = (Num) => {
	//判断如果传递进来的不是字符的话转换为字符
	if (typeof Num == "number") {
		Num = new String(Num);
	};
	Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
	Num = Num.replace(/ /g, "") //替换tomoney()中的空格
	Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
	if (isNaN(Num)) { //验证输入的字符是否为数字
		//alert("请检查小写金额是否正确");
		return "";
	};
	//字符处理完毕后开始转换，采用前后两部分分别转换
	var part = String(Num).split(".");
	var newchar = "";
	//小数点前进行转化
	for (var i = part[0].length - 1; i >= 0; i--) {
		if (part[0].length > 10) {
			return "";
			//若数量超过拾亿单位，提示
		}
		var tmpnewchar = ""
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
			part[1] = part[1].substr(0, 2)
		}
		for (i = 0; i < part[1].length; i++) {
			tmpnewchar = ""
			perchar = part[1].charAt(i)
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
	while (newchar.search("零零") != -1)
		newchar = newchar.replace("零零", "零");
	newchar = newchar.replace("零亿", "亿");
	newchar = newchar.replace("亿万", "亿");
	newchar = newchar.replace("零万", "万");
	newchar = newchar.replace("零元", "元");
	newchar = newchar.replace("零角", "");
	newchar = newchar.replace("零分", "");
	if (newchar.charAt(newchar.length - 1) == "元") {
		newchar = newchar + "整"
	}
	return newchar;
}
// 判断一个元素是否在数组中
export const arrContains = (arr, val) => {
	return arr.indexOf(val) != -1 ? true : false;
}
// 数组去重
export const unique = (arr) => {
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
}

// 数组删除其中一个元素
export const arrRemove = (arr, ele) => {
	var index = arr.indexOf(ele);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}

// 求数组中的最大值
export const arrMax = (arr) => {
	return Math.max.apply(null, arr);
}
// 求数组中的最小值
export const arrMin = (arr) => {
	return Math.min.apply(null, arr);
}
// 数组中的值求和
export const arrSum = (arr) => {
	return arr.reduce((pre, cur) => {
		return pre + cur
	})
}
// 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const strTrim = (str, type) => {
	type = type || 2
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
}
// 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
export const changeCase = (str, type) => {
	type = type || 4
	switch (type) {
		case 1:
			return str.replace(/\b\w+\b/g, (word) => {
				return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

			});
		case 2:
			return str.replace(/\b\w+\b/g, (word) => {
				return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
			});
		case 3:
			return str.split('').map((word) => {
				if (/[a-z]/.test(word)) {
					return word.toUpperCase();
				} else {
					return word.toLowerCase()
				}
			}).join('')
		case 4:
			return str.toUpperCase();
		case 5:
			return str.toLowerCase();
		default:
			return str;
	}
}
// 检测密码强度 等级1-5
export const checkPwd = (str) => {
	var Lv = 1;
	if (str.length < 6) {
		return Lv
	}
	if (/[0-9]/.test(str)) {
		Lv++
	}
	if (/[a-z]/.test(str)) {
		Lv++
	}
	if (/[A-Z]/.test(str)) {
		Lv++
	}
	if (/[\.|-|_]/.test(str)) {
		Lv++
	}
	return Lv;
}
// 在字符串中插入新字符串
export const insertStr = (soure, index, newStr) => {
	var str = soure.slice(0, index) + newStr + soure.slice(index);
	return str;
}
// 16进制颜色值转RGBA字符串
export const colorToRGB = (val, opa) => {

	var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
	var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

	if (!pattern.test(val)) { //如果值不符合规则返回空字符
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
}

/* 图片上传 */
export function uploadFile(path) {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: baseURL + '/api/file/formimage',
			filePath: path,
			name: 'file',
			header: {
				token: 'store.getters.token',
			},
			fileType: 'image',
			cloudPath: '',
			success: res => {
				try {
					console.log(path)
					console.log('uploadFile res ==> ', res)
					let data = JSON.parse(res.data);

					if (data.code == 1) {
						resolve(data.data);
					} else {
						reject()
					}
				} catch (e) {
					console.log(e)
					reject()
				}
			},
			fail: (err) => {
				console.log(err)
				reject()
			}
		});
	});

}

/* 选择图片 */
export function chooseImages(imageMax){
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count: imageMax,
			success:function(res){
				var imageLise = [];
				for(var i = 0; i<imageMax; i++){
					
				}
			}
		})
	});
}

/**
 * 判断是否为空
 */
export function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (const i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */
export function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  const o = test.array(obj) ? [] : {};
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
