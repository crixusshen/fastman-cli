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
var config_1 = require("./config");
var util_1 = require("./util");
exports.default = (function (program) {
    program
        .command("create <module-name>")
        .description("the name of the module, which is normally located in the src folder")
        // define template type, eg project/module
        .option("-t, --template [templateType]", "specify the type of template, now it only support module", config_1.templateType)
        // define root dir, defaults is ./src
        .option("-r, --rootDir [rootDir]", "specify the directory where the module will created, defaults to the src folder", config_1.rootDir)
        .action(function (moduleName, cmd) {
        // check valid for option of template
        if (cmd.template != config_1.templateType) {
            console.error('Invalid Options: %s\nSee --help for a list of available Options.', '-t');
            process.exit(1);
        }
        var from = path.resolve(config_1.moduleTemplatePath);
        var to = path.resolve(util_1.cwd, cmd.rootDir, moduleName);
        // ignore folder if dist dir has exists
        fs.access(to, function (err) {
            if (err) {
                // mkdir if not exist
                util_1.mkDirSync(to, function () {
                    util_1.copyDirSync(from, to);
                    console.log("It was successfully created in: " + to);
                });
            }
        });
    });
    // it will append logs for commander of help or -h
    program.on("--help", function () {
        console.log("");
        console.log("[options]:");
        console.log("  -t --template [templateType]    specify the type of template, now it only support module");
        console.log("  -r --rootDir [rootDir]          specify the directory where the module will created, defaults to the src folder");
    });
});
//# sourceMappingURL=create.js.map