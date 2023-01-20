import * as dataTypes from './dataType/builtIn'
import { DataType } from './dataType'
import './transforms/array/sort'
import './transforms/array/reverse'
import './transforms/array/filter'
import './transforms/array/map'
import './transforms/array/rename'
import './transforms/array/pick'
import './transforms/array/sort-by'
import './transforms/array/partition'
import './transforms/tree/toTree'
import './transforms/tree/flatTree'

for (const key in dataTypes) {
  if (Object.prototype.hasOwnProperty.call(dataTypes, key)) {
    const dataTypeIteratorFn = dataTypes[key as keyof typeof dataTypes]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (key.includes('is')) DataType.registerDataType(key, dataTypeIteratorFn)
  }
}
