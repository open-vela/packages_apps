## 欢迎使用快应用-Vela日历模板
项目主要展示一个基础的日历示例模板

### 项目开发相关命令

#### 1. 开发

```
npm install
npm run start
```

#### 2. 构建

```
npm run build
npm run release
```

#### 3. 调试
```
npm run watch
```
### 项目目录结构（src）
```
.
├── manifest.json //描述项目配置信息的manifest 文件（关于该文件的详细说明请参考档，
│   [小米Vela快速应用框架Manifest文档](https://iot.mi.com/vela/quickapp/zh/content/framework/manifest.html)）
│    
├── app.ux //放置项目公共资源脚本的app.ux 文件
├── pages  //应用主要页面代码
│   ├── index
|   |   └── index.ux // 万年历首页
│   ├── detail
|   |   └── detail.ux // 具体日期详情页（阴历，阳历，星期）
│   └── logo
|       └── logo.ux  // 应用加载过渡页 （logo与名称展示）

├── i18n（国际化文件夹，具体参考快应用文档）
|   ├── defaults.json
|   ├── zh-CN.json
|   └── en-US.json
└── common //存放公共资源文件夹
 ```

## 了解更多

你可以通过我们的[官方文档](https://iot.mi.com/vela/quickapp)熟悉和了解快应用。

