/*
 * @Author: shenzhiwei
 * @Date: 2019-08-04 08:35:06
 * @Company: orientsec.com.cn
 * @Description: add a fastman V2 function file
 */
import { Command } from "commander";
import * as path from "path";
import * as fs from "fs";
import { cwd, copySync, fileExtension } from "./util";
import { defaultFileType, specificFileType, moduleTemplatePath, typeFilesMeta, rootDir } from "./config";
import { replaceModuleIdSpecificFile } from "./replaceModuleId";
import { injectFileEntry } from './injectEntry';

export default (program: Command) => {
  program
    .command("add <file-name>")
    .description(
      "the name of the type file, which is normally effect-name、mutation-name or view-name"
    )
    // define root dir, defaults is ./src
    .option(
      "-r, --rootDir [rootDir]",
      "specify the directory where the module will created, defaults to the src folder",
      rootDir
    )
    // define file type, eg effect/mutation/view, default is effect.
    .option(
      "-t, --type [type]",
      "specify the type of file, now it support effect/mutatio/view, default is effect",
      defaultFileType
    )
    // define specified module
    .option(
      "-m, --moduleName <moduleName>",
      "specify module which to add files"
    )
    .action((fileName, cmd) => {
      // check if the type definition exists
      if(!specificFileType[cmd.type]) {
        console.error('Invalid Options: %s\nSee --help for a list of available Options.', '-t');
        process.exit(1);
      }
      // check that the module name is required
      if(!cmd.moduleName) {
        console.error('Invalid Options: %s\nSee --help for a list of available Options.', '-m');
        process.exit(1);
      }

      const [templateFile, entryFile, exportDeclaration] = typeFilesMeta.get(specificFileType[<string>cmd.type])!;
      const from = path.resolve(moduleTemplatePath, `${cmd.type}s`, templateFile);
      const to = path.resolve(cwd, cmd.rootDir, cmd.moduleName, `${cmd.type}s`, `${fileName}.${fileExtension(specificFileType[<string>cmd.type])}`);
      // check if the user has created a module, skip it if user don't.
      fs.access(to, (err) => {
        if(err) {
          copySync(from, to, () => {
            // the file moduleId is processed async after this file is copied.
            replaceModuleIdSpecificFile(to, cmd.moduleName, fileName);

            // inject entry declaration
            const entryFilePath = path.resolve(to, "..", entryFile);
            injectFileEntry(entryFilePath, fileName, exportDeclaration);
          });
        }
      });
    });

  // it will append logs for commander of help or -h
  program.on("--help", () => {
    console.log("");
    console.log("[add options]:");
    console.log("  -t --type [type]                specify the type of file, now it support effect/mutatio/view, default is effect");
    console.log("  -m --moduleName [moduleName]    specify module which to add files");
    console.log("  -r --rootDir [rootDir]          specify the directory where the module will created, defaults to the src folder");
  });
};