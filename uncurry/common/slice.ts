import { TypedArray } from "../../deps.ts";
/**
 * Returns a section of a value.
 * @param start - The index to the beginning of the specified portion
 * @param end - The index to the end of the specified portion
 * @param val - Any `String`, `Array`, `TypedArray`, `ArrayBuffer`, `SharedArrayBuffer` and `Blog`
 * @returns The result of `val.slice(start, end)`
 *
 * @example
 * ```ts
 * slice(0, 2, 'hello') // 'he'
 * slice(1, Infinity, [1, 2, 3]) // [2, 3]
 * ```
 *
 * @beta
 */
const slice = <
  T extends
    | string
    | readonly unknown[]
    | TypedArray
    | ArrayBuffer
    | SharedArrayBuffer
    | Blob,
>(
  start: number | undefined = 0,
  end: number | undefined = Infinity,
  val: T,
): T => val.slice(start, end) as T;

export { slice };
