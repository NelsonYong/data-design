import { SortOptions } from './transforms/array/sort'
import * as types from './dataType'
import { FilterOptions } from './transforms/array/filter'
import { MapOptions } from './transforms/array/map'
import { RenameOptions } from './transforms/array/rename'
import { PickOptions } from './transforms/array/pick'
import { SortByOptions } from './transforms/array/sort-by'
import { PartitionOptions } from './transforms/array/partition'
import { ToTreeOptions } from './transforms/tree/toTree'
import { FlatTreeOptions } from './transforms/tree/flatTree'

export type DataType = keyof Omit<
	typeof types,
	'objectToString' | 'toTypeString'
>

export interface TransformType {
	sort: SortOptions
	reverse: null
	filter: FilterOptions
	map: MapOptions
	rename: RenameOptions
	pick: PickOptions
	sortBy: SortByOptions
	group: PartitionOptions
	partition: PartitionOptions
	toTree: ToTreeOptions
	flatTree: FlatTreeOptions
}
