// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Checks if a string starts with the provided substring.
 *
 * @param val - search string
 * @param target - target string
 * @returns The result of `target.startsWith(val)`
 *
 * @example
 * ```ts
 * // Basic
 * startsWith('hello', 'hello world') // true
 * startsWith('good', 'hello world') // false
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const startsWith = (
  val: string,
  target: string,
): boolean => target.startsWith(val);

export { startsWith };
