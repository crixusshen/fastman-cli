import {
  // inject,
  // injectable,
  bind,
  action,
  singleton
} from "fastman/annotationman";
import { MutationService } from "fastman/mutation";
import { IModel } from "../types";

// 开发者可在这里将需要的effect副作用函数暴露为action(请不要使用extend,否则函数无法被重载)
declare module "fastman/bootstrap" {
  interface IEffect<T> {
    effectName(foo: number, bar: string);
  }
}

// 请根据情况选择单例模式@singleton()还是非单例模式@injectable()
@singleton()
@action()
export class Main {
  // /**
  //  * effectName
  //  * @param foo 参数1
  //  * @param bar 参数2
  //  */
  // @bind // 自动绑定this作用域,一般都需要声明这个函数
  // public effectName(foo: number, bar: string) {
  //   // 如需要,可通过此函数调用mutation函数
  //   this.mutationService.select().mutationName();
  // }

  public constructor(
    private mutationService: MutationService<IModel> // @inject("IOtherEffect") private otherEffect: IOtherEffect, // 如需要,可在此处注入其它的effect模块
  ) {}
}
