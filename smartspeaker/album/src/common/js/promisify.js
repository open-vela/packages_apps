/**
 * 将Vela的异步 API 转换成 Promise
 * @param {Object} feature
 * @param {String} methodName
 * @example
 * const { promisify } = require('./promisify');
 * const device = require('@system.device');
 * const getSystemInfoAsync = promisify(device, 'getSystemInfo');
 * getSystemInfoAsync().then(res => {}).catch(err => {});
 * @returns
 */
export function promisify(feature, methodName) {
  if (typeof feature !== 'object') {
    throw Error('[promisify] the type of `feature` should be object');
  }

  if (typeof methodName !== 'string') {
    throw Error('[promisify] the type of `methodName` should be string');
  }

  if (typeof feature[methodName] !== 'function') {
    throw Error('[promisify] the type of `fn` should be function');
  }

  let fn = feature[methodName];

  return (opts = {}) => {
    let { success, fail, complete, ...args } = opts;

    if (typeof success === 'function' || typeof fail === 'function' || typeof complete === 'function') {
      console.warn('[promisify] [WARN] The `success`, `fail` and `complete` callback will be ignored');
    }

    return new Promise((resolve, reject) => {
      try {
        fn.call(feature, {
          ...args,
          success: data => {
            resolve(data);
          },
          fail: (data, code) => {
            let err = new Error(data);
            err.code = code;
            reject(err);
          }
        });
      } catch (error) {
        reject(error)
      }
    })
  }
}
