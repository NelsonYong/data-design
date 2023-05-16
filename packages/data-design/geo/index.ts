/**
 *  Transform（key 注册中心--
 * */

import { GeoType } from "../type";

type GeoFunction<K extends keyof GeoType> = (options: GeoType[K]) => void;

export class Geo {
  /**
   * 已注册的 Transform（key-value 键值对）
   */
  static geos: Record<string, any> = {};

  static register<K extends keyof GeoType>(
    name: K,
    fn: (options: GeoType[K]) => void
  ): void {
    Geo.geos[name] = fn;
  }

  static get<K extends keyof GeoType>(name: keyof GeoType): GeoFunction<K> {
    return Geo.geos[name] || Geo.geos.default;
  }
  static Geo: typeof Geo = Geo;
}
