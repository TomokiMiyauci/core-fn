// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { Space } from "../deps.ts";

/**
 * Infer the string with the left ends of trimmed.
 *
 * @returns String left ends of trimmed
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * TrimStart<' \n\thello'> // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
type TrimStart<T extends string> = T extends `${Space}${infer R}` ? TrimStart<R>
  : T;

/**
 * Removes the leading white space and line terminator characters from a string.
 *
 * @param val - input string
 * @returns The result of `val.trimStart()`
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * trimStart('   hello') // 'hello'
 * trimStart(' \n\thello') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const trimStart = <T extends string>(val: T): TrimStart<T> =>
  val.trimStart() as TrimStart<T>;

export { trimStart };
export type { TrimStart };
