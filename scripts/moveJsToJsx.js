const path = require("path");
const fs = require("node:fs");

// 获取当前模块文件的路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块文件所在的目录
const __dirname = dirname(__filename);

const rootPath = path.resolve(__dirname, "..");
const iconfontConfig = JSON.parse(
  fs.readFileSync(path.join(rootPath, "iconfont.json")),
);
const iconPath = path.join(rootPath, iconfontConfig.save_dir);

console.log(iconPath);
