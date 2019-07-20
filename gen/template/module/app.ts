/*
 * @Author: shenzhiwei
 * @Date: 2019-07-01 20:59:42
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-19 15:07:31
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
      name: "World"
    };
  }
  protected setRedies(): IReadiesType<IModel>[] {
    return [
      (model, actions, error) => {
        console.log("readies .");
        // // 如需要,可这样调用mutations
        // actions.$mutationName();
        // // 如需要,可这样调用@exportAction() effects
        // actions.effectName(1, "2");
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
