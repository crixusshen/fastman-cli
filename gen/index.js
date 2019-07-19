/*
 * @Author: shenzhiwei
 * @Date: 2019-07-17 14:52:37
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-17 18:47:08
 * @Description: 代码模板快速生成工具
 */
const program = require('commander');
const fs = require("fs");
const path = require("path");
// 获取不同系统分隔符
const sep = path.sep;
const child_process = require("child_process");

// 设置工具版本
const packageJson = require("../package.json");
program.version(packageJson.version, "-v, --version");

program
  .option("-n, --name <name>", "module name,effect name or mutation name")
  .option("-t, --template <type>", "template type, you can choose module,effect or mutation");

program.parse(process.argv);

console.log(`name: ${program.name}`);
console.log(`template: ${program.template}`);

// 定义模板路径和目标路径
const from = path.resolve(__dirname, './template');
const to = process.cwd();

function copyDir(src, dist) {
  console.log(src);
  console.log(dist);
  // child_process.exec(`cp -r ${src} ${dist}`);
}

// src
copyDir(path.resolve(from, "src"), to);
