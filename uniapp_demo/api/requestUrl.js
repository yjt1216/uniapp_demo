import { baseURL, dataUrl } from "@/sheep/config/app.js";



export default {
	// 第三方登录接口
	WxLogin: dataUrl + "/user/connect/login",
	// 文件上传
	fileUpload: dataUrl + "/file/upload",
	// 上传用户头像
	user_avatar: dataUrl + "/file/uploadAvatar",
	// 订单预支付
	prepay: dataUrl + "/pay/prepay",
	/* h5预支付 */
	hospitalH5Prepay: dataUrl + 'hospital/h5/prepay',
	
	//上传身份证
	addCard: dataUrl + "/file/uploadIdCard",
	
	//用户登录
	userLogin: baseURL + 'user/login',
	//发送验证码
	sendCode: dataUrl + '/sms/send',
	//验证码登录
	loginByCode: baseURL + 'user/loginBySms',
	
	
	/* 首页 获取医院信息 */
	getHospitalInfo: baseURL + 'hospital/index/',
	//微信绑定
	wxBind: baseURL +'weixin/decryptAndBind',
	/* 服务详情 */
	projectDetail: baseURL + 'service/item/',
	/* 护士上门/上门护理 */
	homeCare: baseURL + 'service/category',
	/* 服务列表--机构 */
	hosService: baseURL+'service/hospital/items',
	new_projects: baseURL+"service/cate/items",
	
	/* 服务机构列表 new */
	categoryService: baseURL + "service/hospital/itemsV2",
	
	//创建订单
	createOrder: baseURL + "order/create",
	//用户订单
	orderList: baseURL + "order/list",
	
	// 订单详情
	orderdetail: baseURL + "order/detail",
	
	//项目费用
	projectFee: baseURL+'service/calculatePrice',
	// 退款原因
	refundReason: baseURL + "order/refundReasons",
	
	// 申请退款
	applyRefund: baseURL +"order/applyRefund",
	// 退款详情
	refundDetail : baseURL + "order/refundDetail",
	// 取消退款
	cancelRefund: baseURL + "order/cancelRefund",
	
	
	// 推开金额
	refundFee : baseURL + "order/refundAmount",
	
	// 修改退款
	changeRefund: baseURL + "order/modifyRefund",
	
	//获取订单服务过程列表
	orderStep: baseURL + "order/steps",
	
	//机构知情同意书
	informed: baseURL + "content/consent",
	
	// 删除服务对象列表
	deletePerson: baseURL + "person/delete", 
	// 服务对象详情
	personDetail : baseURL + "person/detail",
	//用户关联对象
	objectList: baseURL + "person/list",
	//添加服务对象
	addObject: baseURL + "person/edit",
	// 机构地址
	new_hospital: baseURL + "service/person/hospital",
	// 评估问题单
	questionFrom: baseURL + 'question/form',
	// 用户信息
	user_userinfo: baseURL + "user/info",
	// 用户帮助
	user_help: baseURL + "content/articles/platform_help",
	//更改用户信息
	changeUserName: baseURL+'user/modify',
	//设置用户头像
	setAvatar: baseURL+"user/setAvatar",
	
	// 获取子参数列表
	parametersub: baseURL+"parameter/sub/",
	// 订单投诉
	orderComplain: baseURL+"order/complain",
	// 订单评价
	orderComment: baseURL+"order/comment",
	
	/* 机构首页V2 */
	indexV2: baseURL+"hospital/indexV2/",
	/* 热点推荐列表 */
	hotRecommendList:baseURL + 'hospital/article/list',
	/* 热点推荐详情 */
	recommendDetail:baseURL + 'hospital/article/detail',
	/* 健康资讯列表 */
	healthList:baseURL + 'hospital/course/list',
	/* 健康资讯详情 */
	healthDetail:baseURL + 'hospital/course/detail',
	/* 健康资讯分享 */
	healthShare:baseURL + 'hospital/course/share',
	/* 科室列表 */
	departmentList: baseURL+'hospital/department/list',
	/* 护士榜单列表 */
	nurseRankingList: baseURL + 'hospital/nurse/list',
	/* 护士榜单详情 */
	nurseDetailApi: baseURL + 'hospital/nurse/detail',
	/* 护士榜单评价列表 */
	nurseCommentApi: baseURL + 'hospital/nurse/comment',
	/* 热门服务列表 */
	recommentServiceList:baseURL + 'hospital/recommendService/list',
	
	/* 微信内公众号静默授权地址 */
	wechatAuth:baseURL + 'hospital/h5/wechatAuth',
	/* 热搜 */
	new_hot: baseURL + "parameter/sub/hot_search",
	/* 搜索 医院服务项目列表 */
	search_project: baseURL + "service/hospital/itemsV2",
}