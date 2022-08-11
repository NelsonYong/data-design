export class DataType {
  /**
   * 已注册的 DataType-value 键值对）
   */
  static dataTypes: Record<string, any> = {};

  static registerDataType(name: string, typeFn: (target: any) => boolean): void {
    DataType.dataTypes[name] = typeFn;
  }
  static getDataType(name: string): (target: any) => boolean {
    return DataType.dataTypes[name];
  }

  static DataType: typeof DataType = DataType;
}
