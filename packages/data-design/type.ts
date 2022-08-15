import * as types from "./dataType/builtIn";
import { SortOptions } from "./transforms/array/sort";
import { FilterOptions } from "./transforms/array/filter";
import { MapOptions } from "./transforms/array/map";
import { RenameOptions } from "./transforms/array/rename";
import { PickOptions } from "./transforms/array/pick";
import { SortByOptions } from "./transforms/array/sort-by";
import { PartitionOptions } from "./transforms/array/partition";
import { ToTreeOptions } from "./transforms/tree/toTree";
import { FlatTreeOptions } from "./transforms/tree/flatTree";

export type MergeUnionType<T, U> = T extends U ? U : T | U;
export type DataType = keyof Omit<
  typeof types,
  "objectToString" | "toTypeString"
>;

export interface TransformType {
  sort: SortOptions;
  reverse: null;
  filter: FilterOptions;
  map: MapOptions;
  rename: RenameOptions;
  pick: PickOptions;
  sortBy: SortByOptions;
  group: PartitionOptions;
  partition: PartitionOptions;
  toTree: ToTreeOptions;
  flatTree: FlatTreeOptions;
}

export type AddonDataType<D> = MergeUnionType<D, DataType>;
export type AddonTransformType<T> = MergeUnionType<T, TransformType>;
