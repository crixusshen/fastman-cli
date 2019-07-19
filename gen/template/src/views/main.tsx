/*
 * @Author: shenzhiwei
 * @Date: 2019-06-26 14:09:39
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-17 15:41:59
 * @Description: main view
 */
var { h } = require("fastman/coreman");
import { View, IView } from "fastman/view";
import { IModel } from "../types";

export default class MainComponent extends View implements IView<IModel> {
  render(
    model: IModel & import("fastman2/bootstrap").IBaseModelType<IModel>,
    actions: import("fastman2/bootstrap").IAction<IModel>
  ) {
    return (
      <div class="page" id="mainPage">
        <h1>Hello {model.name} ! </h1>
      </div>
    );
  }
}
