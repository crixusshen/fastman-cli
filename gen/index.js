"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-17 14:52:37
 * @Description: cli for fastman framework
 */
var commander = __importStar(require("commander"));
// commander of create
var create_1 = __importDefault(require("./create"));
// commander of add
var add_1 = __importDefault(require("./add"));
var program = new commander.Command();
// setting version
var packageJson = require("../package.json");
program.version(packageJson.version, "-v, --version");
// register commander of create
create_1.default(program);
// register commander of add
add_1.default(program);
// inject args of process
program.parse(process.argv);
//# sourceMappingURL=index.js.map