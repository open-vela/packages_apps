# health-demo — openvela 快应用健康数据示例

基于 openvela 快应用框架的健康数据示例 app，演示通过 **`service.health`** 实时读取并展示手表健康数据。三张可上下滑动的卡片：**心率 / 血氧 / 压力**。

适配圆形表盘（`designWidth: 480`，`deviceTypeList: ["watch"]`）。

## 功能

- **实时采样**：用 `subscribeSample` 持续接收 心率（`HEART_RATE`）/ 血氧（`SPO2`）/ 压力（`STRESS`），每张卡片用 `chart` 组件画趋势曲线（渐变面积）+ 当前值 + 状态标签。
- **进入即有数据**：冷启动（`onReady`）用 `getRecent` 补一帧最近值，避免首帧空白。
- **后台运行**：manifest 声明 `background.features`，切到后台后订阅仍持续回调（返回前台可见曲线已往前推进）。
- **错误处理**：对本期不支持的类型，订阅会回调 `fail`（`code === 203`），卡片上给出提示。

## 运行环境

- **openvela qemu-miwear 模拟器**（配套出库包）。出库包后续将集成进 AIoT-IDE，开发者在 IDE 启动对应模拟器即可直接使用，`service.health` 与调试用模拟数据均已内置。
- Node 环境 + `aiot-toolkit`（见 `devDependencies`，已固定 `2.0.5`）。

## 快速开始

```bash
npm install

# 开发：启动开发服务并连接模拟器
npm run start

# 构建：产出 dist/<package>.rpk
npm run build
```

其它脚本：

| 命令 | 说明 |
| --- | --- |
| `npm run watch` | 监听并连模拟器调试 |
| `npm run release` | 发布构建 |
| `npm run lint` | eslint 校验 / 修复（`.ux` / `.js`） |
| `npm run test:logic` | 运行 `vitals.js` 纯逻辑单测（node 直接跑） |

> 提交规范化（commit 前校验/格式化）：先关联 git，再执行 `sh husky.sh`。

## 项目结构

```
src/
  app.ux                  应用入口（生命周期）
  manifest.json           配置：权限 / feature / 路由
  pages/index/
    index.ux              主页面：3 卡片 swiper + 数据编排（订阅 / 取数 / 分发到各卡）
    health.js             service.health 封装：getRecent / subscribe / unsubscribe（ESM）
    vitals.js             纯逻辑：分类 / 统计 / 格式化（CommonJS，可 node 单测）
    theme.js              主题配色（ESM）
  components/
    card.css              三张卡共享的结构性样式（各卡 @import 引入）
    HrCard.ux             心率卡（纯展示，靠 props 渲染）
    Spo2Card.ux           血氧卡（纯展示）
    StressCard.ux         压力卡（纯展示）
  common/                 资源目录
    logo.png              应用图标
  i18n/                   国际化脚手架（本示例未使用，硬编码中文）
test/vitals.test.js       vitals 纯逻辑单测
```

## 核心用法（service.health）

1. `manifest.json` 声明权限与 feature：

```json
{
  "features": [{ "name": "service.health" }],
  "permissions": [{ "name": "hapjs.permission.HEALTH" }]
}
```

2. 在 JS 中引入并使用：

```js
import health from '@service.health';

// 订阅心率：数据更新时持续回调
health.subscribeSample({
  dataType: health.DATA_TYPES.HEART_RATE,
  callback: (sample) => {
    // sample = { timeStamp: <毫秒>, value: <bpm> }
    console.log(sample.value);
  },
  fail: (data, code) => {
    // code === 203：该类型本期不支持
  },
});

// 一次性取最近值（getRecentSamples 原生返回 Promise）
health
  .getRecentSamples({ dataTypes: [health.DATA_TYPES.HEART_RATE, health.DATA_TYPES.SPO2] })
  .then((list) => {
    // list = [{ dataType, data: { timeStamp, value } }, ...]
  });

// 离开页面 / 不再需要时取消订阅
health.unsubscribeSample({ dataType: health.DATA_TYPES.HEART_RATE });
```

> 本示例把上述接口封装在 `pages/index/health.js`：`getRecent()` 返回 Promise、`subscribe()/unsubscribe()` 统一了规范化的成功/失败结构，页面与卡片只消费加工后的数据。

本期支持的数据类型：`HEART_RATE`(0) / `SPO2`(6) / `STRESS`(9)。

## 调试环境数据说明

模拟器固件内置 **mock publisher**：以一份真人约 31 天的真实健康数据循环回放，各类型按 **1Hz** 上报（其中 STRESS 为便于联调被加速到 1Hz）。`timeStamp` 取发布时刻的设备当前时间（接近“现在”且单调递增），可直接 `new Date(timeStamp)`。

## 本期范围

仅实时采样的 **心率 / 血氧 / 压力**；睡眠与统计类接口（当日汇总、报告等）规划在后续版本。

## 参考

- [openvela 快应用官方文档](https://iot.mi.com/vela/quickapp)
