

// 开发者环境：开|关	【注：方便微信小程序发行测试】
// 开发环境true  生产环境false
const SWITCH_DEVELOPMENT = true


/* https://api.depin.tech/api/sms/send */
/** S API BaseURL **/
const baseURLMap = {
	// 开发环境
	development: 'http://222.92.38.178:8091/api/',
	// 生产环境
	// production: IS_H5 ? location.origin : 'https://mall.wellnurse.cn',
	production:  'https://didi.wellnurse.cn/api/',
}

// const baseURL = SWITCH_DEVELOPMENT ? baseURLMap['development'] : baseURLMap[process.env.NODE_ENV]
const baseURL = SWITCH_DEVELOPMENT ? baseURLMap['development'] : baseURLMap['production']

const dataUrl = "https://api.szdepin.com"

/** E API BaseURL **/

/* 2023年04月17号 开始开发 */
module.exports = {
	version: '1.0.0.20231017',			// 版本号
	baseURL,							// API Base URL
	dataUrl,
	basePath: '/mobile',
	SWITCH_DEVELOPMENT  				//判断 开发 或者 生产环境
}

