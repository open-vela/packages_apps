# Vela 快应用示例项目

面向三方开发者的 Vela 快应用框架能力示例，覆盖组件、接口、框架特性三大类。

目标设备：watch（设计宽度 480px）  
包名：`com.xiaomi.vela.sample`

## 环境准备

- Node.js >= 18
- aiot-toolkit >= 1.1.4（`npm install` 自动安装）
- Vela IDE（用于调试和模拟器运行）

## 快速开始

```bash
# 安装依赖
npm install

# 构建
npm run build
```

构建完成后，使用 [Vela IDE](https://iot.mi.com/vela/quickapp/zh/guide/start/use-ide.html) 选择模拟器设备启动调试。

## 项目结构

```
src/
├── app.ux              # 应用入口（全局数据和生命周期）
├── manifest.json       # 应用配置（路由、接口声明）
├── Common/             # 公共资源（图片、音频等）
├── style/comm.css      # 公共样式
├── home/               # 首页导航
├── i18n/               # 国际化资源
├── component/          # 组件示例
│   ├── basic/          # text、image、progress、marquee、qrcode、barcode 等
│   ├── container/      # div、list、scroll、stack、swiper
│   ├── form/           # input、picker、switch、slider
│   └── general/        # 通用样式、颜色、属性、事件、方法、动画、背景图
├── framework/          # 框架特性
│   ├── script/         # 全局数据和方法、页面数据、生命周期
│   ├── style/          # 页面样式与布局、媒体查询
│   ├── template/       # for、if、事件绑定、computed、自定义组件、Props
│   └── other/          # i18n、hap 链接、启动模式、动态组件
└── interface/          # 系统接口
    ├── basic/          # app、device、router、configuration
    ├── network/        # fetch、request、interconnect、uploadtask
    ├── data/           # storage、file
    ├── system/         # brightness、vibrator、network、sensor、battery、volume、event、zip 等
    ├── security/       # crypto（AES/RSA/哈希/HMAC）
    └── other/          # audio、prompt
```

## 文档

详细 API 文档请参考 [Xiaomi Vela JS 应用开发文档](https://iot.mi.com/vela/quickapp/)。
