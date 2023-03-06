export default {
  
  token: state => state.app.token,
  isLogin: state => !!state.app.token,
 
};
