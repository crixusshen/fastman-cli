var { h } = require("fastman/coreman");
import { View, IView } from "fastman/view";
import { IComponentProps, IModel } from "../types";

export default class Main extends View implements IView<IModel> {
  render(
    model: IModel & import("fastman/bootstrap").IBaseModelType<IModel>,
    actions: import("fastman/bootstrap").IAction<IModel> &
      import("fastman/bootstrap").IEffect<IModel> &
      import("fastman/bootstrap").IMutation<IModel> &
      import("1383389186").IEffect<IModel> &
      import("1383389186").IMutation<IModel>
  ) {
    return (
      <div class="page" id="mainPage">
        <h1>Hello {model.name} ! </h1>
        {/* 开发者还可以在此处定义一个子组件 */}
        {/* <ChildComponent
          foo="fastman"
          bar={2.0}
          actions={actions}
          model={model}
        /> */}
      </div>
    );
  }
}

// /**
//  * 这是一个子组件的声明方式
//  */
// export class ChildComponent {
//   public constructor(private props: IComponentProps, private children: any) {}

//   public render() {
//     return (
//       <div class="ui-btn-wrap">
//         {/* 由于actions和model在props作用域中被定义为可选属性(?:)，因此如果开发者很明确已经在主组件将它们传递给子组件，则可以使用!来调用，否则将无法有代码提示效果 */}
//         <button
//           class="ui-btn-lg ui-btn-danger"
//           onclick={this.props.actions!.yourEffectName}
//         >
//           {this.props.bar} - {this.props.foo} - {this.props.model!.name}
//         </button>
//       </div>
//     );
//   }
// }
