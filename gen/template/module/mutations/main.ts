import { Mutation } from "fastman/mutation";
import { IModel } from "../types";

export const mutationName: Mutation<IModel> = (model, data, actions, error) => {
  return {
    name: "Fastman V2"
  };
};
