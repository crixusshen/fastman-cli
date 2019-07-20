/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 11:14:33
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-20 15:14:23
 * @Description: util tools
 */
import * as child_process from "child_process";
import * as path from "path";
import * as fs from "fs";

/**
 * current user job directory
 */
export const cwd = process.cwd();

/**
 * copy source dir to dist dir synchronized
 * @param src path of source dir
 * @param dist path of dist dir
 */
export const copyDirSync = (src: string, dist: string) => {
  child_process.exec(`cp -r ${src} ${dist}`);
};

/**
 * create dirs recursivively and synchronized
 * @param dir dir path
 * @param cb callback function
 */
export const mkDirSync = (dir: string, cb: () => void) => {
  const pathInfo = path.parse(dir);
  if(!fs.existsSync(pathInfo.dir)) {
    mkDirSync(pathInfo.dir, () => {
      fs.mkdirSync(pathInfo.dir);
    });
  }
  cb && cb();
};
