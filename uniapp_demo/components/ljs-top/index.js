export default {
	data() {
		return {
			statusBarHeight: 0, // 状态按钮高度
			myback: {
				// 是否显示返回按钮
				show: true,
				// 是否显示返回按钮
				imgUrl: require('../../static/images/ico_back.png')
			},
			// top样式
			topStyle: {}
		}
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
			default: function() {
				return {
					// 是否显示返回按钮，默认显示
					show: true,
					// 返回按钮的图片地址
					imgUrl: require('../../static/images/ico_back.png')
				}
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
		},
	},
	mounted() {
		this.init();
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		init() {
			// #ifdef MP-WEIXIN
			// #endif
			// #ifndef MP-WEIXIN
			if (this.backgroundImageShow) {
				this.topStyle = {
					'background-image': 'url('+this.backgroundImage+')',
					'background-repeat': 'no-repeat',
					backgroundSize: '100% 100%'
				}
			} else {
				this.topStyle = {
					'background': this.backgroundColor
				}
			}
			// #endif
			this.statusBarHeight = this.getSysInfo().statusBarHeight;
			for (let key in this.back) {
				this.myback[key] = this.back[key];
			}
		},
		getSysInfo() {
			return uni.getSystemInfoSync();
		}
	}
}
