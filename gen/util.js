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
 * @Date: 2019-07-20 11:14:33
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-20 15:14:23
 * @Description: util tools
 */
var child_process = __importStar(require("child_process"));
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
/**
 * current user job directory
 */
exports.cwd = process.cwd();
/**
 * copy source dir to dist dir synchronized
 * @param src path of source dir
 * @param dist path of dist dir
 */
exports.copyDirSync = function (src, dist) {
    child_process.exec("cp -r " + src + " " + dist);
};
/**
 * create dirs recursivively and synchronized
 * @param dir dir path
 * @param cb callback function
 */
exports.mkDirSync = function (dir, cb) {
    var pathInfo = path.parse(dir);
    if (!fs.existsSync(pathInfo.dir)) {
        exports.mkDirSync(pathInfo.dir, function () {
            fs.mkdirSync(pathInfo.dir);
        });
    }
    cb && cb();
};
//# sourceMappingURL=util.js.map