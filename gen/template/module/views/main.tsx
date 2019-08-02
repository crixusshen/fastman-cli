var { h } = require("fastman/coreman");
import { View, IView } from "fastman/view";
import {
  // IComponentProps,
  IModel
} from "../types";

export default class MainComponent extends View implements IView<IModel> {
  render(
    model: IModel & import("fastman/bootstrap").IBaseModelType<IModel>,
    actions: import("fastman/bootstrap").IAction<IModel> &
      import("fastman/bootstrap").IEffect<IModel> &
      import("fastman/bootstrap").IMutation<IModel>
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

// export class ChildComponent {
//   public constructor(private props: IComponentProps, private children: any) {}

//   public render() {
//     return (
//       <div class="ui-btn-wrap">
//         <button
//           class="ui-btn-lg ui-btn-danger"
//           onclick={this.props.actions!.effectName}
//         >
//           {this.props.bar} - {this.props.foo} - {this.props.model!.name}
//         </button>
//       </div>
//     );
//   }
// }
