// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Checks if a string ends with the provided substring.
 * @param val - Search string
 * @param target - Target string
 * @returns The result of `target.endsWith(val)`
 *
 * @example
 * ```ts
 * endsWith('world', 'hello world') // true
 * endsWith('earth', 'hello world') // false
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const endsWith = (
  val: string,
  target: string,
): boolean => target.endsWith(val);

export { endsWith };
