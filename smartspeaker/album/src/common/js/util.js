/**
 * 拼接get参数
 * @param {Object} obj 拼接get参数
 * @returns string
 */
function turnObjAsQueryString(obj) {
  return Object.keys(obj).map(k => {
    return k + '=' + obj[k]
  }).join('&')
}

/**
 * 拼接url及其参数
 * @param {Object} params url的参数
 * @param {String} path url的地址
 * @returns 
 */
export function getOpaque(path, params) {
  const str = path + '?' + turnObjAsQueryString({
    ...params
  })
  return str.toString()
}

// 定义防抖函数
// func: 点击按钮要执行的函数
// delay: 防抖时间
/**
 * debounce
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 */
export function debounce(func, delay) {
  // 设置定时器标识
  let timer
  // 难点返回事件绑定函数
  return function () {
    // func指定this
    let context = this
    // func参数
    let args = arguments
    // 先清除定时器
    clearTimeout(timer)
    //设置定时器
    timer = setTimeout(() => {
      // 调用函数
      func.apply(context, args)
    }, delay)
  }
}
