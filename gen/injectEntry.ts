/*
 * @Author: shenzhiwei
 * @Date: 2019-08-04 10:47:52
 * @Company: orientsec.com.cn
 * @Description: auto inject file entry
 */
import * as path from "path";
import * as fs from "fs";
import { specificFileType } from './config';
import { replaceModuleIdSpecificFile } from './replaceModuleId';

/**
 * it will inject module declaration in the entry of this file
 * @param entryFilePath path of file entry
 * @param filename file name
 * @param exportDeclaration a declaration of entry export
 * @param type file type
 */
export const injectFileEntry = (entryFilePath: string, filename: string, exportDeclaration: string, type?: specificFileType) => {
  // check if the file entry exist, it will skip that if it is not exist.
  fs.access(entryFilePath, (err) => {
    // it skip when err happens.
    if(!err) {
      // replace export declaration
      exportDeclaration = exportDeclaration.replace(/\$filename\$/g, filename);
      fs.appendFile(entryFilePath, exportDeclaration, (err) => {
        if(err) {
          console.error("append file failure:" + err);
          process.exit(1);
        }

        // if file type is mutation, you also need to inject export mutation types.
        if (type === specificFileType.mutation) {
          replaceModuleIdSpecificFile(entryFilePath, "", filename);
        }
      });
    }
  });
}