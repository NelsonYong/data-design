import { Geo } from '.'

const isPointInCircle = (
  lnglat1: {
    lat: number,
    lng: number,
  },
  lnglat2: {
    lat: number,
    lng: number,
  },
  radius: number
) => {
  const lat1 = lnglat1.lat
  const lng1 = lnglat1.lng
  const lat2 = lnglat2.lat
  const lng2 = lnglat2.lng
  const radLat1 = (lat1 * Math.PI) / 180.0;
  const radLat2 = (lat2 * Math.PI) / 180.0;
  const a = radLat1 - radLat2;
  const b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
  let s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) *
        Math.cos(radLat2) *
        Math.pow(Math.sin(b / 2), 2),
      ),
    );
  s = s * 6378.137; // 地球半径
  s = Math.round(s * 10000) / 10000;
  return s * 1000 <= radius;
};

export interface isPointInCircleOptions {
  lnglat1: {
    lat: number,
    lng: number,
  },
  lnglat2: {
    lat: number,
    lng: number,
  },
  radius: number
}

Geo.register(
  'isPointInCircle',
  (options: isPointInCircleOptions) => {
    return isPointInCircle(options.lnglat1, options.lnglat2, options.radius)
  }
)
