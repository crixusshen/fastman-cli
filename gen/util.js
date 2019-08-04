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
 * @Description: util tools
 */
var child_process = __importStar(require("child_process"));
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var config_1 = require("./config");
/**
 * current user job directory
 */
exports.cwd = process.cwd();
/**
 * copy source dir to dist dir synchronized
 * @param src path of source dir
 * @param dist path of dist dir
 * @param cb callback function
 */
exports.copySync = function (src, dist, cb) {
    child_process.exec("cp -r " + src + " " + dist, function (error, stdout, stderr) {
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
exports.mkDirSync = function (dir, cb) {
    var pathInfo = path.parse(dir);
    if (!fs.existsSync(pathInfo.dir)) {
        exports.mkDirSync(pathInfo.dir, function () {
            fs.mkdirSync(pathInfo.dir);
        });
    }
    cb && cb();
};
/**
 * query file extension by type
 * @param type file enum type
 */
exports.fileExtension = function (type) {
    var fileExt;
    switch (type) {
        case config_1.specificFileType.effect:
        case config_1.specificFileType.mutation:
            fileExt = "ts";
            break;
        default:
            fileExt = "tsx";
            break;
    }
    return fileExt;
};
/**
 * capitalize the first letter of a word
 * @param word str
 */
exports.LeadUpperCase = function (word) {
    return word.toLowerCase().replace(/\b([\w|']+)\b/g, function (str) {
        return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    });
};
//# sourceMappingURL=util.js.map