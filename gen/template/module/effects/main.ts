/*
 * @Author: shenzhiwei
 * @Date: 2019-07-03 14:43:39
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-19 15:02:56
 * @Description: main effect
 */
import {
  // inject,
  singleton
  // injectable,
  // exportAction,
  // bind
} from "fastman/annotationman";
import { ActionService } from "fastman/coreman";

// 请根据情况选择单例模式@singleton()还是非单例模式@injectable()
@singleton()
export class Template {
  public constructor(
    private actionService: ActionService // @inject("IOtherEffect") private otherEffect: IOtherEffect, // 如需要,可在此处注入其它的effect模块
  ) {}

  // /**
  //  * effectName
  //  * @param foo 参数1
  //  * @param bar 参数2
  //  */
  // @exportAction() // 如需要,可将该函数导出为一个effect给上层调用,例如actions.effectName(1, "2")
  // @bind // 自动绑定this作用域,一般都需要声明这个函数
  // public effectName(foo: number, bar: string) {
  //   // // 如需要,可通过此函数调用mutation函数
  //   // this.actionService.select().$XXXX();
  // }
}
