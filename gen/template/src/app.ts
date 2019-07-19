/*
 * @Author: shenzhiwei
 * @Date: 2019-07-01 20:59:42
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-17 15:47:18
 * @Description: Bootstrap Application
 */
import { Bootstrap, IReadiesType } from "fastman/bootstrap";
import { IModel } from "./types";

export default class App extends Bootstrap<IModel> {
  protected rootId: string = "page-group";
  protected registerContainer() {
    return {};
  }
  protected setViews() {
    return {
      "/": $views.main
    };
  }
  protected setModel(): IModel {
    return {
      name: "Fastman V2"
    };
  }
  protected setRedies(): IReadiesType<IModel>[] {
    return [
      (model, actions, error) => {
        console.log("readies .");
      }
      // 可定义其它Redies...
    ];
  }
  protected setHooks() {
    return {
      onPageInit: (e, pageId, $page, actions, model) => {
        console.log("onPageInit");
      }
      // 可定义其它Hooks...
    };
  }
}

// new App()
//   .use(yourPlugin)
//   .use(anotherPlugin)
//   .start($mutations);
new App().start($mutations);
