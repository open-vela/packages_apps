const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  // 在此处添加命令行
  cli: {
    trimDotnine: true,
    devtool: 'none',
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
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        },
      ]
    }
  }
}