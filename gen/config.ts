/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 10:56:30
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

/**
 * define default type of file
 */
export const defaultFileType = "effect";

/**
 * define type of files
 */
export enum specificFileType {
  effect = 1,
  mutation,
  view
};

/**
 * define template、 entry and export-declaration that different types of files
 */
export const typeFilesMeta = new Map<specificFileType, [string, string, string]>([
  [specificFileType.effect, ["main.ts", "index.ts", '\r\nexport * from "./$filename$";\r\n']],
  [specificFileType.mutation, ["main.ts", "index.ts", '\r\nexport * from "./$filename$";\r\n']],
  [specificFileType.view, ["main.tsx", "index.tsx", '\r\nexport { default as $filename$ } from "./$filename$";\r\n']],
]);
