/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 10:56:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-03 19:18:14
 * @Description: define configuration params 
 */
import * as path from "path";

/**
 * Specify the directory where the module will created
 */
export const rootDir = "./src";

/**
 * module template source path
 */
export const moduleTemplatePath = path.resolve(__dirname, './template/module');

/**
 * the type of template, now it only supports module
 */
export const templateType = "module";

/**
 * filter file suffix regex
 */
export const filterFileSuffixReg = /.+\.(ts|tsx|js|jsx)$/;

/**
 * moduleId in the template of module
 */
export const replaceModuleIdReg = /1383389186/g;
