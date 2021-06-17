// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
/**
 * Return lowercase string.
 *
 * @param val - Input string value
 * @returns Lowercase string
 *
 * @example
 * ```ts
 * toLowerCase('Hello') // hello
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const toLowerCase = <T extends string>(val: T): Lowercase<T> =>
  val.toLowerCase() as Lowercase<T>;

export { toLowerCase };
