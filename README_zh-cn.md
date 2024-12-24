<h1 align="center">Xiaomi Vela JS 应用</h1>

## 简介

Xiaomi Vela JS 应用是小米公司开发的一种应用类型，它是基于小米的物联网嵌入式软件平台 Xiaomi Vela OS 开发的。

## 技术优势

- **轻量化**：Xiaomi Vela JS 应用采用了轻量级的架构设计，与传统的应用程序相比，Xiaomi Vela JS 应用具有更小的体积，这使得它们能够快速加载和运行，尤其适合内存和处理能力有限的穿戴设备。

- **跨平台兼容性**：Xiaomi Vela JS 应用支持跨端运行，开发者可以一次开发，实现在多种设备上的运行，这大大提高了开发效率和应用的普及率。

- **高性能渲染**：系统优化了渲染能力，使得应用的动画和交互更为流畅，提升了用户的使用体验。

- **安全性能**：Xiaomi Vela OS 通过三重隔离机制确保了应用的安全性，保护了用户数据和设备的安全。

- **开发支持**：小米提供了全面的开发支持Xiaomi Vela JS 应用的开发工具和文档齐全，开发者可以轻松上手，快速构建高质量的应用。小米提供了包括AIoT-IDE在内的一系列开发工具，支持开发者在Ubuntu、Windows、MacOS等操作系统上进行Xiaomi Vela JS 应用的开发和调试。

## 开发工具
AIoT-IDE 是用于开发Xiaomi Vela JS 应用的官方集成开发环境，建立在 Visual Studio Code（以下简称 VS Code）的基础上，继承了 VS Code 的全部功能，比如代码编辑、插件集成、主题定制及个性化设置。此外，AIoT-IDE 还引入了一系列专门针对 Xiaomi Vela JS 应用 开发的增强功能，主要包括如下功能：
- 智能编码提示
- Xiaomi Vela JS 应用调试
- 实时编译预览
- Xiaomi Vela JS 应用打包发布
更多详情请参见[使用IDE来开发JS应用](https://iot.mi.com/vela/quickapp/zh/guide/start/use-ide.html)。

## 代码结构

 ```cpp
    ├── common              # 通用应用示例集
    ├── smartspeaker        # 音箱应用示例集
    ├── wearable            # 可穿戴设备应用示例集
```
  
## 快速入门

如果您想要体验Xiaomi Vela JS 应用 ，我们提供一个功能完备的模拟器，无需硬件平台即可使用。有关详细信息，请参阅如下指南。

1. [准备开发环境](https://iot.mi.com/vela/quickapp/zh/guide/start/use-ide.html)
2. 克隆本仓库到本地
```bash
   git clone https://github.com/open-vela/packages_apps.git
```
3. 编译运行
   打开示例中的应用项目，在AIoT-IDE中打开此项目，点击运行按钮即可编译运行。