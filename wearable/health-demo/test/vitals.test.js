const assert = require('assert');
const V = require('../src/pages/index/vitals.js');
let passed = 0;
function t(name, fn) {
  fn();
  passed++;
  console.log('ok - ' + name);
}

t('classifyHr 边界', () => {
  assert.strictEqual(V.classifyHr(50), 'rest');
  assert.strictEqual(V.classifyHr(59), 'rest');
  assert.strictEqual(V.classifyHr(60), 'normal');
  assert.strictEqual(V.classifyHr(99), 'normal');
  assert.strictEqual(V.classifyHr(100), 'elevated');
  assert.strictEqual(V.classifyHr(139), 'elevated');
  assert.strictEqual(V.classifyHr(140), 'peak');
  assert.strictEqual(V.classifyHr(182), 'peak');
});
t('pushWindow 限长', () => {
  assert.deepStrictEqual(V.pushWindow([1, 2, 3], 4, 3), [2, 3, 4]);
  assert.deepStrictEqual(V.pushWindow([], 1, 3), [1]);
  assert.deepStrictEqual(V.pushWindow([1, 2], 3, 5), [1, 2, 3]);
});
t('stats 最小/均值/最大', () => {
  assert.deepStrictEqual(V.stats([60, 70, 80]), { min: 60, avg: 70, max: 80 });
  assert.deepStrictEqual(V.stats([]), { min: 0, avg: 0, max: 0 });
  assert.deepStrictEqual(V.stats([72]), { min: 72, avg: 72, max: 72 });
});
t('fmt 按类型', () => {
  assert.strictEqual(V.fmt(73.4, 'HEART_RATE'), '73');
  assert.strictEqual(V.fmt(98, 'SPO2'), '98%');
  assert.strictEqual(V.fmt(null, 'SPO2'), '--');
});
t('codeMessage', () => {
  assert.strictEqual(V.codeMessage(203), '该类型暂不支持');
  assert.strictEqual(V.codeMessage(0), '');
  assert.strictEqual(V.codeMessage(500), '错误 500');
});

console.log('\n' + passed + ' tests passed');
