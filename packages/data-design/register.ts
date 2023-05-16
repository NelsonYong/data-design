import { isFns } from 'js-utils-pro'
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
import './geo/isPtInPoly'

for (const key in isFns) {
  if (Object.prototype.hasOwnProperty.call(isFns, key)) {
    const dataTypeIteratorFn = isFns[key as keyof typeof isFns]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (key.includes('is')) DataType.registerDataType(key, dataTypeIteratorFn)
  }
}
