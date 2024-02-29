const TransformPages = require('./js_sdk/uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath','animation', 'meta']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	},
	lintOnSave:true,
	productionSourceMap: false,
	css:{},
	devServer:{
		disableHostCheck:true,
		// proxy:{
		// 	'/api':{
		// 		/* 背地服务接口 */
		// 		// target:'https://didi.wellnurse.cn',
		// 		target: dataUrl,
		// 		ws:true,
		// 		pathRewrite:{
		// 			'^/api':'/',
		// 		}
		// 	}
		// }
	}
}