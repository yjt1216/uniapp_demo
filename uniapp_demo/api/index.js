
import request from '@/sheep/request/index.js'
import urls from '@/api/requestUrl.js'



export default {
	/* 首页 */
	indexV2Api:(hospitalId)=>request({
		url: urls.indexV2+hospitalId,
		method:'GET',
	}),
	
	
	/* 热点推荐列表 */
	hospitalArticleList:(params)=>request({
		url:urls.hotRecommendList,
		method:'GET',
		params
	}),
	/* 热点推荐详情 */
	hospitalActicleDetail:(params)=>request({
		url:urls.recommendDetail,
		method:'GET',
		params
	}),
	/* 健康资讯list */
	hospitalCourseList:(params)=>request({
		url:urls.healthList,
		method:'GET',
		params
	}),
	hospitalCourseDetail:(params)=>request({
		url:urls.healthDetail,
		method:'GET',
		params
	}),
	hospitalCourseShare:(params)=>request({
		url:urls.healthShare,
		method:'POST',
		params
	}),
	/* 热门服务列表 */
	recommentServiceList:(params)=>request({
		url:urls.recommentServiceList,
		method:'POST',
		params
	}),
	/* 护士榜单 */
	nurseRankingList:(params)=>request({
		url:urls.nurseRankingList,
		method:'GET',
		params
	}),
	nurseRankingDetail:(params)=>request({
		url:urls.nurseDetailApi,
		method:'GET',
		params
	}),
	nurseCommentList:(params)=>request({
		url:urls.nurseCommentApi,
		method:'GET',
		params
	}),
	/* 科室列表 */
	departmentList:(params)=>request({
		url:urls.departmentList,
		method:'GET',
		params
	}),
	
	/* h5预支付 */
	hospitalPrepay:(params)=>request({
		url:urls.hospitalH5Prepay,
		method:'POST',
		params
	}),
	/* 微信内公众号静默授权地址 */
	wechatAuthLogin:(params)=>request({
		url:urls.wechatAuth,
		method:'POST',
		params
	}),
	/* 搜索项目 */
	searchService:(params)=>request({
		url:urls.search_project,
		method:'POST',
		params
	}),
	hotSearch:()=>request({
		url:urls.hotSearch,
		method:'POST',
	}),
	//
	getOpenId:(params)=>request({
		url:'http://data.szdepin.com/web/wechat/webAuth',
		method:'GET',
		params
	}),
}



