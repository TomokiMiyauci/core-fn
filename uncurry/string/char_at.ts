// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

type IsNegative<T extends number | bigint> = `${T}` extends `-${infer _}` ? true
  : false;
type String2Array<T extends string> = T extends "" ? []
  : T extends `${infer F}${infer R}` ? [F, ...String2Array<R>]
  : string[];

/**
 * @internal
 */
type CharAt<T extends number, U extends string> = IsNegative<T> extends true
  ? ""
  : String2Array<U>[T] extends infer R ? R extends undefined ? "" : R
  : string;

/**
 * Returns the character at the specified index.
 * @param pos - The zero-based index of the desired character
 * @param val - Any `String`
 * @returns The result of `val.charAt(pos)`
 *
 * @remarks
 * Due to the TypeScript recursion limit, the maximum number of valid characters is `23`. If you want to adapt a `string` longer than that, need to cast it to a `string` type.
 *
 * @example
 * ```ts
 * charAt(0, 'hello') // 'h'
 * charAt(4, 'hello') // 'o'
 * charAt(100, 'hello') // ''
 * ```
 *
 * @beta
 */
const charAt = <T extends number, U extends string>(
  pos: T,
  val: U,
): CharAt<T, U> => val.charAt(pos) as CharAt<T, U>;

export { charAt };
export type { CharAt };
