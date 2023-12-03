// import { deserialize, serialize } from "v8";

export type Serialized<T> = string & { _brand: "serialized"; _type: T };

export function serializeT<T>(src: T): Serialized<T> {
  return JSON.stringify(src) as Serialized<T>;
}

export function deserializeT<T>(src: Serialized<T>): T {
  return JSON.parse(src);
}

export function getPage<T>(
  array: Array<T>,
  pageSize: number,
  page: number
): Array<T> {
  return array.slice((page - 1) * pageSize, page * pageSize);
}
