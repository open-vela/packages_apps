const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  // 在此处添加命令行
  cli: {
    trimDotnine: true,
    devtool: false,
    buildNameFormat: 'ORIGINAL',
    optimizeDescMeta: true
  },
  webpack: {
    resolve: {
      // 设置别名
      alias: {
        '@components': resolve('src/components'),
        '@common': resolve('src/common'),
        "@": resolve('src')
      }
    },
    
  },
  postHook: (config) => {
    if (config.mode === "production") {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              pure_funcs: ['console.info'],   // 数组中是要清除的函数
            },
          },
        }),
      ];
    }
  },
}