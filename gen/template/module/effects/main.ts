import {
  // inject,
  // injectable,
  // bind,
  action,
  singleton
} from "fastman/annotationman";
// 用于effect调用mutation
import { MutationService } from "fastman/mutation";
import { ModelService } from "fastman/model";
import { IModel } from "../types";

declare module "1383389186" {
  interface IEffect<T> extends IExportEffectToAction {}
}

// 开发者可在这里将需要的effect函数暴露为action
// 注：如果不定义就不会被导出，即无法使用action来调用
interface IExportEffectToAction {
  // yourEffectName(foo: number, bar: string): void;
}

// 请根据情况选择单例模式@singleton()还是非单例模式@injectable()
@singleton()
// 标记该class可暴露为action，如果class只是业务逻辑的封装可以不用标记
@action()
export class Main implements IExportEffectToAction {
  /**
   * effectName
   * @param foo 参数1
   * @param bar 参数2
   */
  public yourEffectName(foo: number, bar: string) {
    // 如需要,可通过此函数调用mutation函数
    // this.mutationService.select().yourMutationName();
    // 如需要,可通过此函数获取model数据
    // this.modelService.select();
  }

  public constructor(
    // @inject("IOtherEffect") private otherEffect: IOtherEffect, // 如需要,可在此处注入其它的effect模块
    private mutationService: MutationService<
      IModel,
      import("1383389186").IMutation<IModel>
    >,
    private modelService: ModelService<IModel>
  ) {}
}
