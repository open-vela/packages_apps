export const tabsData = {
  framework: {
    name: '框架',
    groupList: [
      {
        name: '模板语法',
        caseList: [
          { name: '事件绑定', path: 'framework/template/events' },
          { name: '循环指令 for', path: 'framework/template/for' },
          { name: '条件指令 if', path: 'framework/template/if' },
          { name: 'computed 计算属性', path: 'framework/template/computed' },
          { name: '自定义组件', path: 'framework/template/component' },
          { name: 'Props 传参', path: 'framework/template/props' }
        ]
      },
      {
        name: '样式语法',
        caseList: [
          { name: '页面样式与布局', path: 'framework/style/page-style' },
          { name: '媒体查询', path: 'framework/style/media-query' }
        ]
      },
      {
        name: '脚本语法',
        caseList: [
          { name: '全局数据和方法', path: 'framework/script/global-data-method' },
          { name: '页面数据对象', path: 'framework/script/page-data' },
          { name: '生命周期', path: 'framework/script/lifecycle' }
        ]
      },
      {
        name: '进阶功能',
        caseList: [
          { name: '国际化 i18n', path: 'framework/other/i18n' },
          { name: 'hap 链接', path: 'framework/other/hap-schema' },
          { name: '启动模式', path: 'framework/other/launch-mode' },
          { name: '动态组件', path: 'framework/other/dynamic-component' }
        ]
      }
    ]
  },
  component: {
    name: '组件',
    groupList: [
      {
        name: '通用规范',
        caseList: [
          { name: '通用样式', path: 'component/general/style' },
          { name: '颜色', path: 'component/general/color' },
          { name: '动画样式', path: 'component/general/animation-style' },
          { name: '背景图样式', path: 'component/general/background-img' },
          { name: '通用属性', path: 'component/general/properties' },
          { name: '通用事件', path: 'component/general/events' },
          { name: '通用方法', path: 'component/general/methods' }
        ]
      },
      {
        name: '容器组件',
        caseList: [
          { name: 'div', path: 'component/container/div' },
          { name: 'list', path: 'component/container/list' },
          { name: 'scroll', path: 'component/container/scroll' },
          { name: 'stack', path: 'component/container/stack' },
          { name: 'swiper', path: 'component/container/swiper' }
        ]
      },
      {
        name: '基础组件',
        caseList: [
          { name: 'text', path: 'component/basic/text' },
          { name: 'span', path: 'component/basic/span' },
          { name: 'a', path: 'component/basic/a' },
          { name: 'image', path: 'component/basic/image' },
          { name: 'image-animator', path: 'component/basic/image-animator' },
          { name: 'progress', path: 'component/basic/progress' },
          { name: 'marquee', path: 'component/basic/marquee' },
          { name: 'chart', path: 'component/basic/chart' },
          { name: 'qrcode', path: 'component/basic/qrcode' },
          { name: 'barcode', path: 'component/basic/barcode' }
        ]
      },
      {
        name: '表单组件',
        caseList: [
          { name: 'input', path: 'component/form/input' },
          { name: 'picker', path: 'component/form/picker' },
          { name: 'switch', path: 'component/form/switch' },
          { name: 'slider', path: 'component/form/slider' }
        ]
      }
    ]
  },
  interface: {
    name: '接口',
    groupList: [
      {
        name: '基本功能',
        caseList: [
          { name: '应用上下文 app', path: 'interface/basic/app' },
          { name: '设备信息 device', path: 'interface/basic/device' },
          { name: '页面路由 router', path: 'interface/basic/router' },
          { name: '应用配置 configuration', path: 'interface/basic/configuration' }
        ]
      },
      {
        name: '网络访问',
        caseList: [
          { name: '数据请求 fetch', path: 'interface/network/fetch' },
          { name: '设备通信 interconnect', path: 'interface/network/interconnect' },
          { name: '上传下载 request', path: 'interface/network/request' },
          { name: '上传 uploadtask', path: 'interface/network/uploadtask' }
        ]
      },
      {
        name: '数据文件',
        caseList: [
          { name: '数据存储 storage', path: 'interface/data/storage' },
          { name: '文件存储 file', path: 'interface/data/file' }
        ]
      },
      {
        name: '系统能力',
        caseList: [
          { name: '网络状态 network', path: 'interface/system/network' },
          { name: '震动 vibrator', path: 'interface/system/vibrator' },
          { name: '屏幕亮度 brightness', path: 'interface/system/brightness' },
          { name: '录音 record', path: 'interface/system/record' },
          { name: '地理位置 geolocation', path: 'interface/system/geolocation' },
          { name: '传感器 sensor', path: 'interface/system/sensor' },
          { name: '事件 event', path: 'interface/system/event' },
          { name: '电量 battery', path: 'interface/system/battery' },
          { name: '系统音量 volume', path: 'interface/system/volume' },
          { name: '解压 zip', path: 'interface/system/zip' }
        ]
      },
      {
        name: '安全',
        caseList: [
          { name: '加密算法 crypto', path: 'interface/security/crypto' }
        ]
      },
      {
        name: '其它',
        caseList: [
          { name: '音频 audio', path: 'interface/other/audio' },
          { name: '弹窗 prompt', path: 'interface/other/prompt' }
        ]
      }
    ]
  }
}
