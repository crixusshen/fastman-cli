/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 10:56:30
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-20 13:11:47
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
