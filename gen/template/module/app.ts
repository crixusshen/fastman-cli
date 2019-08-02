import { Bootstrap, IReadiesType, IHooksType } from "fastman/bootstrap";
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
  protected setHooks(): IHooksType<IModel> {
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
