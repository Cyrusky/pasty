import path from "path";
import fs from "node:fs";
import { fileURLToPath } from "url";

// 获取当前模块文件的路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块文件所在的目录
const __dirname = path.dirname(__filename);

const rootPath = path.resolve(__dirname, "..");
const iconfontConfig = JSON.parse(
  fs.readFileSync(path.join(rootPath, "iconfont.json")),
);
const iconPath = path.join(rootPath, iconfontConfig.save_dir);

const removeReactImport = (filePath) => {
  let content = fs.readFileSync(filePath, "utf-8");
  content = content.replace("import React from 'react';\n", "");
  content = content.replace(/ \+ 'rpx'/g, "");
  const fileName = filePath.split(path.sep).at(-1).split(".")[0];
  content = content.replace(
    `
${fileName}.defaultProps = {
  size: 18,
};
`,
    "",
  );
  fs.writeFileSync(filePath, content);
};

const traverseDirectoryAsync = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("读取目录时出错:", err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error("获取文件状态时出错:", err);
          return;
        }
        if (stat.isDirectory()) {
          traverseDirectoryAsync(filePath);
        } else {
          if (filePath.endsWith(".ts")) {
            return;
          }
          if (filePath.endsWith(".js")) {
            const newName = filePath.replace(/\.js$/, ".jsx");
            fs.renameSync(filePath, newName);
            console.log(`重命名文件${filePath}`);
            removeReactImport(newName);
          }
        }
      });
    });
  });
};

traverseDirectoryAsync(iconPath);
