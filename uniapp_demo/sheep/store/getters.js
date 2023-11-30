export default {
	token: state => state.app.token,
	isLogin: state => !!state.app.token,
	userInfo: state => state.app.userInfo || {},
	nurseInfo: state => state.app.nurseInfo || {}
}