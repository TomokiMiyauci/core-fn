// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";

/**
 * @internal
 */
const _endsWith = <T extends string, U extends string>(
  val: T,
  target: U,
): boolean => target.endsWith(val);

/**
 * Checks if a string ends with the provided substring.
 *
 * @param val - Search string
 * @param target - Target string
 * @returns The result of `target.endsWith(val)`
 *
 * @example
 * ```ts
 * // Basic
 * endsWith('world', 'hello world') // true
 * endsWith('earth', 'hello world') // false
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const endsWith = curry(_endsWith);

export { _endsWith, endsWith };
