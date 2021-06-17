// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";

/**
 * @internal
 */
const _startsWith = <T extends string, U extends string>(
  val: T,
  target: U,
): boolean => target.startsWith(val);

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
const startsWith = curry(_startsWith);

export { _startsWith, startsWith };
