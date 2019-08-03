/*
 * @Author: shenzhiwei
 * @Date: 2019-07-20 09:55:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-03 16:50:52
 * @Description: create a fastman V2 module
 */
import { Command } from "commander";
import * as path from "path";
import * as fs from "fs";
import { rootDir, moduleTemplatePath, templateType } from "./config";
import { cwd, copyDirSync, mkDirSync } from "./util";
import { replaceModuleId } from "./replaceModuleId";

export default (program: Command) => {
  program
    .command("create <module-name>")
    .description(
      "the name of the module, which is normally located in the src folder"
    )
    // define template type, eg project/module
    .option(
      "-t, --template [templateType]",
      "specify the type of template, now it only support module",
      templateType
    )
    // define root dir, defaults is ./src
    .option(
      "-r, --rootDir [rootDir]",
      "specify the directory where the module will created, defaults to the src folder",
      rootDir
    )
    .action((moduleName, cmd) => {
      // check valid for option of template
      if(cmd.template != templateType) {
        console.error('Invalid Options: %s\nSee --help for a list of available Options.', '-t');
        process.exit(1);
      }

      const from = path.resolve(moduleTemplatePath);
      const to = path.resolve(cwd, cmd.rootDir, moduleName);
      // ignore folder if dist dir has exists
      fs.access(to, (err) => {
        if(err) {
          // mkdir if not exist
          mkDirSync(to, () => {
            // copy template to dist dir
            copyDirSync(from, to, () => {
              // replace moduleId for template recursivively
              replaceModuleId(to, moduleName);
            });
            console.log(`It was successfully created in: ${to}`);
          });
        }
      });
    });

  // it will append logs for commander of help or -h
  program.on("--help", () => {
    console.log("");
    console.log("[options]:");
    console.log("  -t --template [templateType]    specify the type of template, now it only support module");
    console.log("  -r --rootDir [rootDir]          specify the directory where the module will created, defaults to the src folder");
  });
};
