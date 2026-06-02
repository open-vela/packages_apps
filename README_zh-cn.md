# packages_apps 简介

\[ [English](README.md) | 简体中文 \]

`packages_apps` 存放基于 openvela 的快应用（JS 应用）示例工程，按设备形态组织，技术栈为 [Xiaomi Vela QuickJS](https://iot.mi.com/vela/quickapp/zh/guide/)，涵盖系统一方应用与三方应用示例，供开发者参考学习。

本仓库的快应用面向 **openvela 模拟器**（NuttX 环境）运行，更接近真机行为。**AI 硬件大赛中，快应用赛道的参赛代码提交到本仓库。**

> 说明：本仓库与 [packages_fe_examples](../../../../open-vela/packages_fe_examples) 的区别——
> - **packages_apps（本仓库）**：在 openvela 模拟器上运行快应用，参赛代码**提交到本仓库**。
> - **packages_fe_examples**：在 AIoT IDE 内置模拟器中运行快应用，仅供学习参考，参赛代码**不提交**到该仓库。

## 目录结构

| 目录 | 说明 |
| ---- | ---- |
| [smartspeaker](./smartspeaker) | 小米音箱设备相关快应用示例（系统应用与三方应用）。 |
| [wearable](./wearable) | 小米穿戴设备相关快应用示例，包含 Launcher、设置等系统应用，以及日历、计算器、播放器、待办、小游戏等三方应用。 |
| [common](./common) | 各应用共享的公共资源与组件。 |

## 快速开始

各示例工程基于 `aiot` 工具链构建，通用步骤如下（以单个应用目录为例）：

```bash
# 安装依赖
npm install

# 构建（产出可在 openvela 模拟器运行的快应用包）
npm run build
```

不同示例的脚本可能略有差异，请以各应用目录下的 `package.json` 与 `README.md` 为准。

## 相关文档

- 快应用开发指南：[Xiaomi Vela 快应用开发文档](https://iot.mi.com/vela/quickapp/zh/guide/)
