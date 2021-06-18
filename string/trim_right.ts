// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { trimEnd } from "./trim_end.ts";

/**
 * Removes space from right ends of the string.
 *
 * @param val - input string
 * @returns The result of `val.trimRight()`
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * trimRight('hello   ') // 'hello'
 * trimRight('hello \n\t') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const trimRight = trimEnd;

export { trimRight };
