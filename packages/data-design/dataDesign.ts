import './register'
import { Transforms } from './transforms'
import { DataType as DataTypeIntance } from './dataType'

import { AddonDataType, TransformType } from './type'

export const dataType = <D extends string>({
  type,
  target,
}: {
  type: AddonDataType<D>
  target: any
}) => {
  if (DataTypeIntance?.getDataType(type)) {
    return DataTypeIntance?.getDataType(type)(target)
  } else {
    console.error('Type does not exist')
  }
}

export const dataTransform = <K extends keyof TransformType = keyof TransformType, T = any>({
  type,
  data,
  ...option
}: {
  type: K
  data: T
} & {
  [P in keyof TransformType[K]]: TransformType[K][P]
}) => {
  const transform_ = Transforms.getTransform(type)
  return transform_(data as T, option)
}
