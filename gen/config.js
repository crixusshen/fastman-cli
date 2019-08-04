"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 10:56:30
 * @Description: define configuration params
 */
var path = __importStar(require("path"));
/**
 * Specify the directory where the module will created
 */
exports.rootDir = "./src";
/**
 * module template source path
 */
exports.moduleTemplatePath = path.resolve(__dirname, './template/module');
/**
 * the type of template, now it only supports module
 */
exports.templateType = "module";
/**
 * filter file suffix regex
 */
exports.filterFileSuffixReg = /.+\.(ts|tsx|js|jsx)$/;
/**
 * moduleId in the template of module
 */
exports.replaceModuleIdReg = /1383389186/g;
/**
 * define default type of file
 */
exports.defaultFileType = "effect";
/**
 * define type of files
 */
var specificFileType;
(function (specificFileType) {
    specificFileType[specificFileType["effect"] = 1] = "effect";
    specificFileType[specificFileType["mutation"] = 2] = "mutation";
    specificFileType[specificFileType["view"] = 3] = "view";
})(specificFileType = exports.specificFileType || (exports.specificFileType = {}));
;
/**
 * define template、 entry and export-declaration that different types of files
 */
exports.typeFilesMeta = new Map([
    [specificFileType.effect, ["main.ts", "index.ts", '\r\nexport * from "./$filename$";\r\n']],
    [specificFileType.mutation, ["main.ts", "index.ts", '\r\nexport * from "./$filename$";\r\n']],
    [specificFileType.view, ["main.tsx", "index.tsx", '\r\nexport { default as $filename$ } from "./$filename$";\r\n']],
]);
//# sourceMappingURL=config.js.map