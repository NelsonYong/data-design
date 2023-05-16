import { CartesianType } from "../type";

type CartesianFunction<K extends keyof CartesianType> = (options: CartesianType[K]) => void;
export class Cartesian {
  static cartesians: Record<string, any> = {};

  static register<K extends keyof CartesianType>(
    name: K,
    fn: (options: CartesianType[K]) => void
  ): void {
    Cartesian.cartesians[name] = fn;
  }

  static get<K extends keyof CartesianType>(name: keyof CartesianType): CartesianFunction<K> {
    return Cartesian.cartesians[name] || Cartesian.cartesians.default;
  }
  static Cartesian: typeof Cartesian = Cartesian;
}

