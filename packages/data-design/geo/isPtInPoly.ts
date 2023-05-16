import { Geo } from '.'


/* 
:param aLon: double 经度 
:param aLat: double 纬度 
:param pointList: list [{latitude: 22.22, longitude: 113.113}...] 多边形点的顺序需根据顺时针或逆时针
*/
const isPtInPoly = (
  lnglat: { lng: number; lat: number },
  pointList: { lng: number; lat: number }[],
) => {
  const aLat = lnglat.lat
  const aLon = lnglat.lng
  let iSum = 0;
  const iCount = pointList.length;
  if (iCount < 3) {
    return false;
  }
  //  待判断的点(x, y) 为已知值
  const y = aLat;
  const x = aLon;
  let y2;
  let x2;
  for (let i = 0; i < iCount; i++) {
    const y1 = pointList[i].lat;
    const x1 = pointList[i].lng;
    if (i == iCount - 1) {
      y2 = pointList[0].lat;
      x2 = pointList[0].lng;
    } else {
      y2 = pointList[i + 1].lat;
      x2 = pointList[i + 1].lng;
    }
    // 当前边的 2 个端点分别为 已知值(x1, y1), (x2, y2)
    if ((y >= y1 && y < y2) || (y >= y2 && y < y1)) {
      //  y 界于 y1 和 y2 之间
      //  假设过待判断点(x, y)的水平直线和当前边的交点为(x_intersect, y_intersect)，有y_intersect = y
      // 则有（2个相似三角形，公用顶角，宽/宽 = 高/高）：|x1 - x2| / |x1 - x_intersect| = |y1 - y2| / |y1 - y|
      if (Math.abs(y1 - y2) > 0) {
        const x_intersect = x1 - ((x1 - x2) * (y1 - y)) / (y1 - y2);
        if (x_intersect < x) {
          iSum += 1;
        }
      }
    }
  }
  if (iSum % 2 != 0) {
    return true;
  } else {
    return false;
  }
};


export interface isPtInPolyOptions {
  lnglat: { lng: number; lat: number },
  pointList: { lng: number; lat: number }[]
}

Geo.register(
  'isPtInPoly',
  (options: isPtInPolyOptions) => {
    return isPtInPoly(options.lnglat, options.pointList)
  }
)
