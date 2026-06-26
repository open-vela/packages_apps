// service.health 接口封装层。
// 把成功/失败回调统一成规范化结构，并把 203 标记为 unsupported。
//
// 原始回调结构（已验证）：
//   getRecentSamples.success(list)   list = [{ dataType, data: { timeStamp, value } }, ...]
//   subscribeSample.callback(sample) sample = { timeStamp, value }
//   两者 fail(data, code)
import health from '@service.health';

/** service.health 的数据类型常量集合（HEART_RATE / SPO2 / STRESS 等）。 */
export const DATA_TYPES = health.DATA_TYPES;

/**
 * 规范化后的采样结果。
 *
 * @typedef {Object} HealthSample
 * @property {boolean} ok 是否成功获取
 * @property {number} [dataType] 数据类型（成功时）
 * @property {number} [value] 数值（成功时）
 * @property {number} [timeStamp] 毫秒级时间戳（成功时）
 * @property {number} [code] 错误码（`ok` 为 false 时）
 * @property {boolean} [unsupported] 是否为"功能不支持"（code 203）
 */

/**
 * 一次性获取最近采样。
 *
 * `getRecentSamples` 原生返回 `Promise`，这里直接链式取用并规范化结果。
 * @param {number[]} dataTypes 要查询的数据类型数组
 * @returns {Promise<HealthSample[]>} 解析为规范化采样数组（出错时为空数组）
 */
export function getRecent(dataTypes) {
  return health
    .getRecentSamples({ dataTypes })
    .then((list) =>
      (list || []).map((it) => ({
        ok: true,
        dataType: it.dataType,
        value: it.data && it.data.value,
        timeStamp: it.data && it.data.timeStamp,
      })),
    )
    .catch(() => []);
}

/**
 * 订阅某类型，数据更新时持续回调。
 *
 * 流式接口（会多次回调），因此使用回调而非 Promise。
 * @param {number} dataType 数据类型
 * @param {function(HealthSample): void} onSample 数据回调
 * @param {function(HealthSample): void} [onError] 失败回调（含 `unsupported` 标记）
 * @returns {void}
 */
export function subscribe(dataType, onSample, onError) {
  health.subscribeSample({
    dataType,
    callback: (s) => {
      onSample({ ok: true, dataType, value: s.value, timeStamp: s.timeStamp });
    },
    fail: (data, code) => {
      if (onError) {
        onError({ ok: false, code, unsupported: code === 203 });
      }
    },
  });
}

/**
 * 取消订阅（离开卡片 / 页面销毁时必须调用）。
 * @param {number} dataType 数据类型
 * @returns {void}
 */
export function unsubscribe(dataType) {
  health.unsubscribeSample({ dataType });
}
