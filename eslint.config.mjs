import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";

export default tsEslint.config({
  extends: [pluginJs.configs.recommended, ...tsEslint.configs.recommended],
  files: ["**/*.{js,mjs,cjs,ts}"],
  ignores: ["dist", "./build"],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "commonjs",
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // 忽略以 _ 开头的参数
        varsIgnorePattern: "^_", // 忽略以 _ 开头的变量
        caughtErrorsIgnorePattern: "^_", // 忽略以 _ 开头的 catch 参数
      },
    ],
  },
});
