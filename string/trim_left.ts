// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { trimStart } from "./trim_start.ts";

/**
 * Removes space from left ends of the string.
 *
 * @param val - input string
 * @returns The result of `val.trimLeft()`
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * trimLeft('   hello') // 'hello'
 * trimLeft(' \n\thello') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const trimLeft = trimStart;

export { trimLeft };
