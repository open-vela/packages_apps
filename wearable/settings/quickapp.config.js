const path = require('path')


const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  // 在此处添加命令行
  cli: {
    trimDotnine: true,
    buildNameFormat: 'ORIGINAL',
    optimizeDescMeta: true
  },
  webpack: {
    resolve: {
      // 设置别名
      alias: {
        '@components': resolve('src/Components'),
        '@common': resolve('src/Common'),
        "@": resolve('src')
      }
    }
  }
}