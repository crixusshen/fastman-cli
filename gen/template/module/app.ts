import { Bootstrap, IReadiesType, IHooksType } from "fastman/bootstrap";
import { IModel } from "./types";
import EventEmitter from "fastman/eventemitterman";
import { Persist } from "fastman/persistman";
import { LazyLoad } from "fastman/lazyloadman";
import { HistoryStack } from "common/plugin/historyStack";
import { NoBfCache } from "common/plugin/noBfCache";
import { JsBridge, oauth } from "common/jsbridge";

export default class App extends Bootstrap<
  IModel,
  import("1383389186").IEffect<IModel>,
  import("1383389186").IMutation<IModel>
> {
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
  protected setRedies(): IReadiesType<
    IModel,
    import("1383389186").IEffect<IModel>,
    import("1383389186").IMutation<IModel>
  >[] {
    return [
      (model, actions, error) => {
        console.log("readies .");
      }
      // 可定义其它Redies...
    ];
  }
  protected setHooks(): IHooksType<
    IModel,
    import("1383389186").IEffect<IModel>,
    import("1383389186").IMutation<IModel>
  > {
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

// 除了框架底层预先内置了Router和ModelState插件外
// 应用层也为开发者配置好了常用的插件
// 注：VerticalSwiper和Preload插件并没有被配置到应用层，如果开发者需要请自行导入
new App()
  .use(JsBridge)
  .use(EventEmitter)
  .use(HistoryStack)
  .use(NoBfCache)
  .use(Persist)
  .use(LazyLoad)
  .start($mutations);
