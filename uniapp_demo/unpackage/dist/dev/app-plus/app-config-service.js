
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/order/order","pages/message/message","pages/user/user","pages/login/login","pages/register/register","pages/location/location","pages/web_view/web_view","pages/web_view/informed_consent","pages/login/login_example","pages/html_test/html_test","bundle/pages/list_h/list_h","bundle/pages/list_h/list_water","bundle/pages/user_intro/user_intro","bundle/pages/mescroll_swiper/mescroll_swiper","bundle/pages/nurse_order/nurse_order","bundle/pages/service_order/service_order","bundle/pages/form_page/form_page","bundle/pages/upload_img/upload_photo","bundle/pages/list_input/list_input","bundle/pages/appraise_form/appraise_form","bundle/pages/header_footer/header_footer","bundle/pages/take_photo/take_photo","bundle/pages/choose_photo/choose_photo","bundle/pages/take_photo/take_images","bundle/pages/tag_page/tag-page","bundle/pages/files_upload/files_upload","bundle/pages/pop_box/pop_box","bundle/pages/card_list/card_list","bundle/pages/video_player/video_player","bundle/pages/native_video/native_video","bundle/pages/video_live/video_live","bundle/pages/action_sheet/action_sheet","bundle/pages/nurse_auth/nurse_auth","bundle/pages/sign_page/landscape_sign","bundle/pages/sign_page/vertical_sign","bundle/pages/loading_page/loading_page","bundle/pages/wallet/wallet","bundle/pages/drop_down/drop_down","bundle/pages/text_auto/text_auto","bundle/pages/server_explan/server_explan","bundle/pages/choose_date/choose_date","bundle/pages/list_h/list_left","bundle_b/pages/swiper_action/swiper_action","bundle_b/pages/lesson_play/lesson_play","bundle_b/pages/pay/pay_page","bundle_b/pages/pay/web_view","bundle_b/pages/weixin_openid/weixin_openid","bundle_b/pages/spread_code/spread_code","bundle_b/pages/chart_demo/chart_demo","bundle_b/pages/keyboard_pop/keyboard_pop"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#666","selectedColor":"#FF2C3C","borderStyle":"black","list":[{"pagePath":"pages/index/index","iconPath":"/static/images/tab_home.png","selectedIconPath":"/static/images/tab_home_s.png","text":"首页"},{"pagePath":"pages/order/order","iconPath":"/static/images/tab_home.png","selectedIconPath":"/static/images/tab_home_s.png","text":"订单"},{"pagePath":"pages/message/message","iconPath":"/static/images/tab_home.png","selectedIconPath":"/static/images/tab_home_s.png","text":"消息"},{"pagePath":"pages/user/user","iconPath":"/static/images/tab_user.png","selectedIconPath":"/static/images/tab_user_s.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniapp_demo","compilerVersion":"3.96","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/order/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/register/register","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/location/location","meta":{},"window":{"navigationBarTitleText":"QQ地图定位"}},{"path":"/pages/web_view/web_view","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/web_view/informed_consent","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/login_example","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/html_test/html_test","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/list_h/list_h","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/list_h/list_water","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/user_intro/user_intro","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/mescroll_swiper/mescroll_swiper","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/nurse_order/nurse_order","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/service_order/service_order","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/form_page/form_page","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/upload_img/upload_photo","meta":{},"window":{"navigationBarTitleText":"上传证件"}},{"path":"/bundle/pages/list_input/list_input","meta":{},"window":{"navigationBarTitleText":"多个input"}},{"path":"/bundle/pages/appraise_form/appraise_form","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"评估表单"}},{"path":"/bundle/pages/header_footer/header_footer","meta":{},"window":{"navigationBarTitleText":"header footer"}},{"path":"/bundle/pages/take_photo/take_photo","meta":{},"window":{"navigationBarTitleText":"拍照"}},{"path":"/bundle/pages/choose_photo/choose_photo","meta":{},"window":{"navigationBarTitleText":"选择照片"}},{"path":"/bundle/pages/take_photo/take_images","meta":{},"window":{"navigationBarTitleText":"image"}},{"path":"/bundle/pages/tag_page/tag-page","meta":{},"window":{"navigationBarTitleText":"tag"}},{"path":"/bundle/pages/files_upload/files_upload","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"upload files"}},{"path":"/bundle/pages/pop_box/pop_box","meta":{},"window":{"navigationBarTitleText":"pop box"}},{"path":"/bundle/pages/card_list/card_list","meta":{},"window":{"navigationBarTitleText":"卡片"}},{"path":"/bundle/pages/video_player/video_player","meta":{},"window":{"navigationBarTitleText":"video"}},{"path":"/bundle/pages/native_video/native_video","meta":{},"window":{"navigationBarTitleText":"native video"}},{"path":"/bundle/pages/video_live/video_live","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/action_sheet/action_sheet","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/nurse_auth/nurse_auth","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/sign_page/landscape_sign","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/sign_page/vertical_sign","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/loading_page/loading_page","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/wallet/wallet","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/drop_down/drop_down","meta":{},"window":{"navigationBarTitleText":"筛选"}},{"path":"/bundle/pages/text_auto/text_auto","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle/pages/server_explan/server_explan","meta":{},"window":{"navigationBarTitleText":"服务协议"}},{"path":"/bundle/pages/choose_date/choose_date","meta":{},"window":{"navigationBarTitleText":"日期选择"}},{"path":"/bundle/pages/list_h/list_left","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle_b/pages/swiper_action/swiper_action","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle_b/pages/lesson_play/lesson_play","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/bundle_b/pages/pay/pay_page","meta":{},"window":{}},{"path":"/bundle_b/pages/pay/web_view","meta":{},"window":{}},{"path":"/bundle_b/pages/weixin_openid/weixin_openid","meta":{},"window":{}},{"path":"/bundle_b/pages/spread_code/spread_code","meta":{},"window":{}},{"path":"/bundle_b/pages/chart_demo/chart_demo","meta":{},"window":{}},{"path":"/bundle_b/pages/keyboard_pop/keyboard_pop","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
