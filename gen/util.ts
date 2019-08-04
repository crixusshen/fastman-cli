/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 11:14:33
 * @Description: util tools
 */
import * as child_process from "child_process";
import * as path from "path";
import * as fs from "fs";
import { specificFileType } from './config';

/**
 * current user job directory
 */
export const cwd = process.cwd();

/**
 * copy source dir to dist dir synchronized
 * @param src path of source dir
 * @param dist path of dist dir
 * @param cb callback function
 */
export const copySync = (src: string, dist: string, cb?: () => void) => {
  child_process.exec(`cp -r ${src} ${dist}`, (error, stdout, stderr) => {
    if (!error) {
      cb && cb();
    }
  });
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

/**
 * query file extension by type
 * @param type file enum type
 */
export const fileExtension = (type: specificFileType) => {
  let fileExt;
  switch(type) {
    case specificFileType.effect:
    case specificFileType.mutation:
      fileExt = "ts";
      break;
    default:
      fileExt = "tsx";
      break;
  }
  return fileExt;
}

/**
 * capitalize the first letter of a word
 * @param word str
 */
export const LeadUpperCase = (word: string) => {
  return word.toLowerCase().replace(/\b([\w|']+)\b/g, function(str) {  
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());  
  }); 
};
