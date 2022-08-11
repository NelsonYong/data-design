import "./transforms/array/sort";
import "./transforms/reverse";
import "./transforms/filter";
import "./transforms/map";
import "./transforms/rename";
import "./transforms/pick";
import "./transforms/sort-by";
import "./transforms/partition";
import "./transforms/tree/toTree";
import "./transforms/tree/flatTree";
import { Transforms } from "./transforms";
import { DataType as DataType_, TransformType } from "./type";

import { DataType as DataTypeIntance } from "./dataType";

export type DataType = DataType_;
export const dataType = <D extends DataType | string>({ type, target }: { type: D; target: any }) => {
  if (DataTypeIntance?.getDataType(type)) {
    return DataTypeIntance?.getDataType(type)(target);
  } else {
    console.error("Type does not exist");
  }
};

export const transform = <K extends keyof TransformType = keyof TransformType, T = any>({
  type,
  data,
  ...option
}: {
  type: K;
  data: T;
} & {
  [P in keyof TransformType[K]]: TransformType[K][P];
}) => {
  const transform_ = Transforms.getTransform(type);
  return transform_(data as T, option);
};
