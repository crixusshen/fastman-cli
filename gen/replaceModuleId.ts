/*
 * @Author: shenzhiwei
 * @Date: 2019-08-03 15:50:44
 * @Company: orientsec.com.cn
 * @Description: replace moduleId recursivively
 */
const md5 = require('js-md5');
import * as path from "path";
import * as fs from "fs";
import { filterFileSuffixReg, replaceModuleIdReg } from "./config";
import { LeadUpperCase } from './util';

/**
 * directory of process replace moduleId
 * @param processDir process src directory
 * @param moduleName moduleId
 */
export const replaceModuleId = (processDir: string, moduleName: string) => {
  if(!moduleName) {
    console.error("moduleName is not found.");
    process.exit(1);
  }
  const moduleId = md5(moduleName);
  fs.readdir(processDir, "utf8", (err, data) => {
    if(err) {
      console.error("No resource files were found in the target directory, so the process ends");
      process.exit(1);
    }
    data.forEach((item, index) => {
      // read file type async and filter files that don't need to processed
      fs.stat(path.resolve(processDir, item), (err, stat) => {
        if(!err) {
          if(stat.isFile()) {
            // filter file suffix
            if(filterFileSuffixReg.test(item)) {
              // begin replace moduleId async
              fs.readFile(path.resolve(processDir, item), "utf8", (err, files) => {
                if(err) {
                  console.error("read file failure:" + err);
                  process.exit(1);
                }
                const replacedContent = files.replace(replaceModuleIdReg, moduleId);

                // begin write file
                fs.writeFile(path.resolve(processDir, item), replacedContent, "utf8", (err) => {
                  if(err) {
                    console.error("write file failure:" + err);
                    process.exit(1);
                  }
                });
              });
            }
          }
          else if(stat.isDirectory()) {
            replaceModuleId(path.resolve(processDir, item), moduleName);
          }
          // don't consider symbol link.
        }
      });
    });
  });
};

/**
 * specific file that it will replace moduleId
 * @param specificFile specific file path
 * @param moduleName specific module name
 * @param fileName specific file name
 */
export const replaceModuleIdSpecificFile = (specificFile: string, moduleName: string, fileName: string) => {
  const moduleId = md5(moduleName);
  fs.readFile(specificFile, "utf8", (err, files) => {
    if(err) {
      console.error("read file failure:" + err);
      process.exit(1);
    }
    let replacedContent = files.replace(replaceModuleIdReg, moduleId);
    // replace module name, otherwise it will cause conflict between other modules
    replacedContent = replacedContent.replace(/class Main/g, `class ${LeadUpperCase(fileName)}`);
    // replace id of div element
    replacedContent = replacedContent.replace(/id="mainPage"/g, `id="${fileName}Page"`);
    // replace IExportMutationToAction<typeof import("./main")> codes, if it is exist.
    replacedContent = replacedContent.replace(/(IExportMutationToAction<typeof import\(".+"\)>)/, `$1 & IExportMutationToAction<typeof import("./${fileName}")>`);

    fs.writeFile(specificFile, replacedContent, "utf8", (err) => {
      if(err) {
        console.error("write file failure:" + err);
        process.exit(1);
      }
    });
  });
};
