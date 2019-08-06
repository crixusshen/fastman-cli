import { IProps } from "fastman/view";
import { Mutation } from "fastman/mutation";

// Mutation函数所需声明的类型
export type MutationType<D = IModel> = Mutation<
  IModel,
  import("1383389186").IMutation<IModel>,
  D
>;

// 导出Mutation的类型映射
export type IExportMutationToAction<T> = {
  [P in keyof T]: T[P] extends MutationType<infer D>
    ? (data: D) => IModel
    : never;
};

// Model数据类型
export interface IModel {
  name: string;
}

// 如需要,应该在这里定义子组件的属性类型
export interface IComponentProps
  extends IProps<
    IModel,
    import("1383389186").IEffect<IModel>,
    import("1383389186").IMutation<IModel>
  > {
  foo: string;
  bar: number;
}
