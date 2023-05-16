import './register'
import { Transforms } from './transforms'
import { DataType as DataTypeIntance } from './dataType'

import { AddonDataType, CartesianType, GeoType, TransformType } from './type'
import { Geo } from './geo'
import { Cartesian } from './cartesian'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
    return
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

export const dataCartesian = <K extends keyof CartesianType = keyof CartesianType>({
  type,
  ...option
}: {
  type: K
} & {
    [P in keyof CartesianType[K]]: CartesianType[K][P]
  }) => {
  const fn = Cartesian.get(type)
  return fn(option)
}


export const dataGeo = <K extends keyof GeoType = keyof GeoType>({
  type,
  ...option
}: {
  type: K
} & {
    [P in keyof GeoType[K]]: GeoType[K][P]
  }) => {
  const fn = Geo.get(type)
  return fn(option)
}
