"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
/**
 * it will inject module declaration in the entry of this file
 * @param entryFilePath path of file entry
 * @param filename file name
 * @param exportDeclaration a declaration of entry export
 */
exports.injectFileEntry = function (entryFilePath, filename, exportDeclaration) {
    // check if the file entry exist, it will skip that if it is not exist.
    fs.access(entryFilePath, function (err) {
        // it skip when err happens.
        if (!err) {
            // replace export declaration
            exportDeclaration = exportDeclaration.replace(/\$filename\$/g, filename);
            fs.appendFile(entryFilePath, exportDeclaration, function (err) {
                if (err) {
                    console.error("append file failure:" + err);
                    process.exit(1);
                }
            });
        }
    });
};
//# sourceMappingURL=injectEntry.js.map