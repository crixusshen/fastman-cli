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
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-20 13:11:47
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
//# sourceMappingURL=config.js.map