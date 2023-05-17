
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
