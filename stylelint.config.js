// noinspection JSUnusedGlobalSymbols
/** @type {import('stylelint').Config} **/

export default {
  // 继承标准的 SCSS 配置
  extends: [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "stylelint-config-recommended-scss",
  ],
  // 引入支持 SCSS 语法检查的插件
  plugins: ["stylelint-scss", "stylelint-order"],
  // 自定义规则
  rules: {
    "declaration-property-value-no-unknown": false,
    // 禁止使用未知的 CSS 属性
    "property-no-unknown": true,
    // 禁止使用不合法的Hex颜色
    "color-no-invalid-hex": true,
    // 禁止使用未知的 SCSS @ 规则
    "scss/at-rule-no-unknown": true,
    // 要求类名使用小写字母和连字符的组合（BEM 风格）
    "selector-class-pattern": "^[a-z][a-z0-9]*(-[a-z0-9]+)*$",
    // 禁止空块
    "block-no-empty": true,
    // 要求每行只写一个声明
    "declaration-block-single-line-max-declarations": 1,
    // 要求使用缩写属性
    "shorthand-property-no-redundant-values": true,
    // 注释前后需要有空格
    "comment-whitespace-inside": "always",
    // 禁止使用!important
    "declaration-no-important": true,
  },
  // 指定要检查的文件类型
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
