/*
 * @Author: shenzhiwei
 * @Date: 2019-07-17 14:52:37
 * @Description: cli for fastman framework
 */
import * as commander from "commander";

// commander of create
import create from './create';
// commander of add
import add from './add';

const program = new commander.Command();

// setting version
const packageJson = require("../package.json");
program.version(packageJson.version, "-v, --version");

// register commander of create
create(program);
// register commander of add
add(program);
// inject args of process
program.parse(process.argv);
