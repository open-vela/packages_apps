## 欢迎使用快应用-Vela音乐播放器模板
项目主要展示一个基础的音乐播放器，包含音乐的播放，上一首，下一首，音量调节，歌单

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
│   ├── player
|   |   └── player.ux //播放器首页
│   ├── list
|   |   └── list.ux //歌单列表
│   └── volume
|       └── volume.ux  //音量控制组件

├── i18n（国际化文件夹，具体参考快应用文档）
|   ├── defaults.json
|   ├── zh-CN.json
|   └── en-US.json
└── common //存放公共资源文件夹
 ```

## 了解更多

你可以通过我们的[官方文档](https://iot.mi.com/vela/quickapp)熟悉和了解快应用。

