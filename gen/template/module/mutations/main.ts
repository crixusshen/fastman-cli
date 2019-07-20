/*
 * @Author: shenzhiwei
 * @Date: 2019-06-26 14:05:14
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-19 15:07:22
 * @Description: main mutation
 */
import { Mutation } from "fastman/mutation";
import { IModel } from "../types";

export const mutationName: Mutation<IModel> = (model, data, actions, error) => {
  return {
    name: "Fastman V2"
  };
};
