export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$share', {
      get() {
        return uni.requireNativePlugin('share')
      }
    })
  }
}
