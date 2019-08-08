import { IExportMutationToAction } from "../types";

declare module "1383389186" {
  type IMutation<T> = IExportMutationToAction<typeof import("./main")>;
}

export * from "./main";
