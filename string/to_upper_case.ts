// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
/**
 * Return uppercase string.
 *
 * @param val - Input string value
 * @returns Uppercase string
 *
 * @example
 * ```ts
 * toUpperCase('Hello') // HELLO
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const toUpperCase = <T extends string>(val: T): Uppercase<T> =>
  val.toUpperCase() as Uppercase<T>;

export { toUpperCase };
