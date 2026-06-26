// 纯逻辑层：无框架依赖、无副作用，可在 node 下单测。
// 被 index 页用于把原始样本加工成可直接渲染的数据。
// 注：保留 CommonJS 导出，以便 `npm run test:logic` 直接用 node 运行。

/**
 * 心率区间分类。
 * @param {number} bpm 心率值（次/分）
 * @returns {string} `rest` | `normal` | `elevated` | `peak`
 */
function classifyHr(bpm) {
  if (bpm < 60) return 'rest';
  if (bpm < 100) return 'normal';
  if (bpm < 140) return 'elevated';
  return 'peak';
}

/**
 * 把新值压入定长滑动窗口，超出 `max` 丢弃最旧的。
 * @param {number[]} arr 原窗口（不会被修改）
 * @param {number} v 新值
 * @param {number} max 窗口最大长度
 * @returns {number[]} 新窗口数组
 */
function pushWindow(arr, v, max) {
  const next = arr.concat([v]);
  return next.length > max ? next.slice(next.length - max) : next;
}

/**
 * 计算窗口的最小 / 均值（四舍五入）/ 最大；空窗口返回全 0。
 * @param {number[]} arr 数值窗口
 * @returns {{min: number, avg: number, max: number}} 统计结果
 */
function stats(arr) {
  if (!arr || arr.length === 0) {
    return { min: 0, avg: 0, max: 0 };
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v < min) min = v;
    if (v > max) max = v;
    sum += v;
  }
  return { min, max, avg: Math.round(sum / arr.length) };
}

/**
 * 显示格式化：血氧带 `%`，其余取整；空值显示 `--`。
 * @param {?number} value 原始值（可空）
 * @param {string} type 数据类型名，如 `SPO2`
 * @returns {string} 可直接渲染的文本
 */
function fmt(value, type) {
  if (value == null) return '--';
  const n = Math.round(value);
  return type === 'SPO2' ? `${n}%` : String(n);
}

/**
 * 错误码 → 文案。
 * @param {number} code 错误码（203 = 不支持；0 / 空 = 无错）
 * @returns {string} 提示文案，无错时为空串
 */
function codeMessage(code) {
  if (!code) return '';
  if (code === 203) return '该类型暂不支持';
  return `错误 ${code}`;
}

module.exports = { classifyHr, pushWindow, stats, fmt, codeMessage };
