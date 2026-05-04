# My Vela App

基于 Vela 快应用框架开发的手表联系人示例应用，展示了页面路由、自定义组件和国际化等核心能力。主要用于父子组件通信代码示例

## 功能概览

- **联系人列表** — 首页展示联系人卡片列表，点击可查看选中状态
- **头像卡片组件** — 可复用的 `avatar-card` 组件，支持自定义姓名与颜色
- **详情页** — 通过路由跳转的详情展示页
- **国际化** — 内置中英文语言支持（`i18n`）

## 项目结构

```
src/
├── app.ux                    # 应用入口
├── manifest.json             # 应用配置（路由、权限、设备类型等）
├── config-watch.json         # 手表设备配置
├── common/
│   └── logo.png              # 应用图标
├── components/
│   └── avatar-card.ux        # 头像卡片组件
├── i18n/
│   ├── defaults.json         # 默认语言
│   ├── en.json               # 英文
│   └── zh-CN.json            # 中文
└── pages/
    ├── index/index.ux        # 首页（联系人列表）
    └── detail/detail.ux      # 详情页
```

## 环境要求

- Node.js >= 8.10
- npm

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发调试

启动开发服务器，支持文件监听与热更新：

```bash
npm run start
```

### 构建

```bash
# 开发构建
npm run build

# 正式发布包
npm run release
```

### 代码检查

```bash
npm run lint
```

## 应用配置

| 字段 | 值 | 说明 |
|------|-----|------|
| `package` | `com.application.watch.demo` | 应用包名 |
| `minPlatformVersion` | `1200` | 最低平台版本 |
| `deviceTypeList` | `["watch"]` | 目标设备类型 |
| `designWidth` | `device-width` | 设计稿宽度 |

路由入口为 `pages/index`，包含两个页面：`index`（首页）和 `detail`（详情页）。

## 技术栈

- **框架**：Vela 快应用（`.ux` 单文件组件）
- **构建工具**：aiot-toolkit
- **JSC 引擎**：@aiot-toolkit/jsc

## 了解更多

- [Vela 快应用官方文档](https://iot.mi.com/vela/quickapp)
