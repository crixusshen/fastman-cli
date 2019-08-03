import { Mutation } from "fastman/mutation";
import { IModel } from "../types";

// 开发者可在这里将需要的mutation函数暴露为action
// 注：如果不定义就不会被导出，即无法使用action调用，也无法在effect层通过mutationService.select()调用
declare module "1383389186" {
  interface IMutation<T> {
    // // 一般data作为入参可以定义为any，但是如果开发者想要限制调用者的参数类型，这里也可以加强参数类型的声明
    // yourMutationName(data?: any);
  }
}

// /**
//  * 你的mutation名称和作用
//  * @param model 数据状态
//  * @param data 所接受到的参数
//  * @param actions 可使用该变量跳转到其它的mutation函数中
//  * @param error 错误处理
//  */
// export const yourMutationName: Mutation<IModel> = (
//   model,
//   data,
//   actions,
//   error
// ) => {
//   return {
//     name: "Fastman V2"
//   };
// };
