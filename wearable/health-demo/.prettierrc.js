// prettier 配置，对齐《小米 TS/JS 语言编程规范》中可由 prettier 管控的条款。
module.exports = {
  printWidth: 100, // 一行长度限定在 100 字符以内
  tabWidth: 2, // 2 个空格作为基本缩进
  useTabs: false, // 使用空格替代 tab
  semi: true, // 显式使用分号结束每条语句
  singleQuote: true, // 字符串使用单引号
  quoteProps: 'as-needed', // 仅对无效标识符的属性名加引号
  trailingComma: 'all', // 多行逗号分隔的语法结构使用尾逗号
  bracketSpacing: true, // 对象大括号内侧保留空格：{ foo }
  arrowParens: 'always', // 箭头函数参数始终带括号
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve', // 按文件原样折行
  htmlWhitespaceSensitivity: 'ignore', // 忽略 html 空格敏感度
  endOfLine: 'auto', // 保留文件原有换行符
  overrides: [
    {
      files: '*.ux',
      options: { parser: 'vue' },
    },
  ],
};
