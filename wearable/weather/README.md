## 欢迎使用快应用-Vela天气预报
项目主要展示一个基础的天气预报，包含当前所在省市，天气的信息，天气图标，天气更新时间等。

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
|   |   └── index.ux //天气预报首页
│   ├── seven
|       └── seven.ux //未来一周的天气信息
│
├── i18n（国际化文件夹，具体参考快应用文档）
|   ├── defaults.json
|   ├── zh-CN.json
|   └── en-US.json
└── common //存放公共资源文件夹
    ├── incon //存放天气图标
    └── utils //存放工具类
 ```

## 了解更多

你可以通过我们的[官方文档](https://iot.mi.com/vela/quickapp)熟悉和了解快应用。
