import { IProps } from "fastman/view";

// Model数据类型
export interface IModel {
  name: string;
}

// // 如需要,应该在这里定义子组件的属性类型
export interface IComponentProps
  extends IProps<
    IModel,
    import("1383389186").IEffect<IModel>,
    import("1383389186").IMutation<IModel>
  > {
  foo: string;
  bar: number;
}
