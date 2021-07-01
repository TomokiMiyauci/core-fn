// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";
import { repeat as _repeat } from "../uncurry/string/repeat.ts";

/**
 * Returns a String value that is made from count copies appended together. If count is 0,
 * the empty string is returned.
 * @param count - Number of copies to append
 * @param val - Any string
 * @returns The result of `val.repeat(count)`
 *
 * @remarks
 * No exception will be thrown. If `RangeError` is raised, return `''`.
 *
 * @example
 * ```ts
 * repeat(0, 'abc') // ''
 * repeat(2, 'abc') // 'abcabc'
 * ```
 *
 * @example
 * ```ts
 * // RangeError
 * repeat(-1, 'abc') // ''
 * repeat(Infinity, 'abc') // ''
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const repeat = curry(_repeat);

export { repeat };
