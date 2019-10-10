function friendlyDate(dataStr) {
  // 判断是否需要 friendlyDate
  let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''

  switch (true) {
    case space < 60000:
      str = '刚刚'
      break
    case space < 1000 * 3600:
      // Math.floor() 返回小于或等于一个给定数字的最大整数
      str = Math.floor(space / 60000) + '分钟前'
      break
    case space < 1000 * 3600 * 24:
      str = Math.floor(space / (1000 * 3600)) + '小时前'
      break
    default:
      str = Math.floor(space / (1000 * 3600 * 24)) + '天前'
  }
  return str
}

// 一个 vue 的插件：属性为 install 对象，默认参数 vue，提供 friendlyDate 功能
export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}
