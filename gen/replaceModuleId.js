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
 * @Date: 2019-08-03 15:50:44
 * @Company: orientsec.com.cn
 * @Description: replace moduleId recursivively
 */
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var md5 = require('js-md5');
var config_1 = require("./config");
var util_1 = require("./util");
/**
 * directory of process replace moduleId
 * @param processDir process src directory
 * @param moduleName moduleId
 */
exports.replaceModuleId = function (processDir, moduleName) {
    if (!moduleName) {
        console.error("moduleName is not found.");
        process.exit(1);
    }
    var moduleId = md5(moduleName);
    fs.readdir(processDir, "utf8", function (err, data) {
        if (err) {
            console.error("No resource files were found in the target directory, so the process ends");
            process.exit(1);
        }
        data.forEach(function (item, index) {
            // read file type async and filter files that don't need to processed
            fs.stat(path.resolve(processDir, item), function (err, stat) {
                if (!err) {
                    if (stat.isFile()) {
                        // filter file suffix
                        if (config_1.filterFileSuffixReg.test(item)) {
                            // begin replace moduleId async
                            fs.readFile(path.resolve(processDir, item), "utf8", function (err, files) {
                                if (err) {
                                    console.error("read file failure:" + err);
                                    process.exit(1);
                                }
                                var replacedContent = files.replace(config_1.replaceModuleIdReg, moduleId);
                                // begin write file
                                fs.writeFile(path.resolve(processDir, item), replacedContent, "utf8", function (err) {
                                    if (err) {
                                        console.error("write file failure:" + err);
                                        process.exit(1);
                                    }
                                });
                            });
                        }
                    }
                    else if (stat.isDirectory()) {
                        exports.replaceModuleId(path.resolve(processDir, item), moduleName);
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
exports.replaceModuleIdSpecificFile = function (specificFile, moduleName, fileName) {
    var moduleId = md5(moduleName);
    fs.readFile(specificFile, "utf8", function (err, files) {
        if (err) {
            console.error("read file failure:" + err);
            process.exit(1);
        }
        var replacedContent = files.replace(config_1.replaceModuleIdReg, moduleId);
        // replace module name, otherwise it will cause conflict between other modules
        replacedContent = replacedContent.replace(/class Main/g, "class " + util_1.LeadUpperCase(fileName));
        fs.writeFile(specificFile, replacedContent, "utf8", function (err) {
            if (err) {
                console.error("write file failure:" + err);
                process.exit(1);
            }
        });
    });
};
//# sourceMappingURL=replaceModuleId.js.map