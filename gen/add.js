"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var util_1 = require("./util");
var config_1 = require("./config");
var replaceModuleId_1 = require("./replaceModuleId");
var injectEntry_1 = require("./injectEntry");
exports.default = (function (program) {
    program
        .command("add <file-name>")
        .description("the name of the type file, which is normally effect-name、mutation-name or view-name")
        // define root dir, defaults is ./src
        .option("-r, --rootDir [rootDir]", "specify the directory where the module will created, defaults to the src folder", config_1.rootDir)
        // define file type, eg effect/mutation/view, default is effect.
        .option("-t, --type [type]", "specify the type of file, now it support effect/mutatio/view, default is effect", config_1.defaultFileType)
        // define specified module
        .option("-m, --moduleName <moduleName>", "specify module which to add files")
        .action(function (fileName, cmd) {
        // check if the type definition exists
        if (!config_1.specificFileType[cmd.type]) {
            console.error('Invalid Options: %s\nSee --help for a list of available Options.', '-t');
            process.exit(1);
        }
        // check that the module name is required
        if (!cmd.moduleName) {
            console.error('Invalid Options: %s\nSee --help for a list of available Options.', '-m');
            process.exit(1);
        }
        var _a = config_1.typeFilesMeta.get(config_1.specificFileType[cmd.type]), templateFile = _a[0], entryFile = _a[1], exportDeclaration = _a[2];
        var from = path.resolve(config_1.moduleTemplatePath, cmd.type + "s", templateFile);
        var to = path.resolve(util_1.cwd, cmd.rootDir, cmd.moduleName, cmd.type + "s", fileName + "." + util_1.fileExtension(config_1.specificFileType[cmd.type]));
        // check if the user has created a module, skip it if user don't.
        fs.access(to, function (err) {
            if (err) {
                util_1.copySync(from, to, function () {
                    // the file moduleId is processed async after this file is copied.
                    replaceModuleId_1.replaceModuleIdSpecificFile(to, cmd.moduleName, fileName);
                    // inject entry declaration
                    var entryFilePath = path.resolve(to, "..", entryFile);
                    injectEntry_1.injectFileEntry(entryFilePath, fileName, exportDeclaration);
                });
            }
        });
    });
    // it will append logs for commander of help or -h
    program.on("--help", function () {
        console.log("");
        console.log("[add options]:");
        console.log("  -t --type [type]                specify the type of file, now it support effect/mutatio/view, default is effect");
        console.log("  -m --moduleName [moduleName]    specify module which to add files");
        console.log("  -r --rootDir [rootDir]          specify the directory where the module will created, defaults to the src folder");
    });
});
//# sourceMappingURL=add.js.map