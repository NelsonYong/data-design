import { Cartesian } from ".";

export type NearestPointType = {
  dyadicArray: ({ x: number; y: number } | [number, number])[]
  targetPoint: [number, number]
  step: Partial<number>
  keep: number
}

export function minDistancePoint({
  dyadicArray,
  targetPoint,
  step = 1000,
  keep = -1,
}: NearestPointType): any {
  const [targetX = null, targetY = null] = targetPoint ?? []
  if (keep === -1) keep = step!

  if (targetX !== null && targetY !== null) {
    const point =
      dyadicArray?.filter((item) =>
        item instanceof Array
          ? item[0] <= targetX + keep &&
          item[0] >= targetX - keep &&
          item[1] <= targetY + keep &&
          item[1] >= targetY - keep
          : item.x <= targetX + keep &&
          item.x >= targetX - keep &&
          item.y <= targetY + keep &&
          item.y >= targetY - keep,
      ) ?? []
    if (point && point.length !== 0) {
      // 收集距离
      const distances =
        point?.map((item: any) => ({
          distance: Math.sqrt(Math.pow(targetX - item.x, 2) + Math.pow(targetY - item.y, 2)),
        })) ?? []
      // 获取最小距离
      const minDistance = Math.min(...(distances?.map((item) => item.distance) ?? []))
      // 获取最小索引
      const minIndex = distances?.findIndex((item) => item.distance === minDistance)
      // 根据最小距离索引有效最小点集的点
      return point[minIndex]
    } else {
      return minDistancePoint({
        dyadicArray,
        targetPoint,
        step: step + 1000,
        keep,
      })
    }
  }

  return null
}


Cartesian.register(
  'minDistancePoint',
  (options: NearestPointType) => {
    return minDistancePoint(options)
  }
)



