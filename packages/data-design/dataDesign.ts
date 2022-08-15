import "./transforms/array/sort";
import "./transforms/array/reverse";
import "./transforms/array/filter";
import "./transforms/array/map";
import "./transforms/array/rename";
import "./transforms/array/pick";
import "./transforms/array/sort-by";
import "./transforms/array/partition";
import "./transforms/tree/toTree";
import "./transforms/tree/flatTree";
import { Transforms } from "./transforms";
import { AddonDataType, TransformType } from "./type";

import { DataType as DataTypeIntance } from "./dataType";

export const dataType = <D extends string>({
  type,
  target,
}: {
  type: AddonDataType<D>;
  target: any;
}) => {
  if (DataTypeIntance?.getDataType(type)) {
    return DataTypeIntance?.getDataType(type)(target);
  } else {
    console.error("Type does not exist");
  }
};

export const transform = <
  K extends keyof TransformType = keyof TransformType,
  T = any
>({
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
