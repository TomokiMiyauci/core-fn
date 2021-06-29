// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";
import { startsWith as _startsWith } from "../non_curry/string/starts_with.ts";

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

export { startsWith };
