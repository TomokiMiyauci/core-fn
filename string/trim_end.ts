// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { Space } from "../deps.ts";

/**
 * Infer the string with the right ends of trimmed.
 *
 * @typeParam T - Any string
 * @returns String right ends of trimmed
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * TrimEnd<'hello \n\t'> // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
type TrimEnd<T extends string> = T extends `${infer R}${Space}` ? TrimEnd<R>
  : T;

/**
 * Removes space from right ends of the string.
 *
 * @param val - input string
 * @returns The result of `val.trimEnd()`
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * trimEnd('hello   ') // 'hello'
 * trimEnd('hello \n\t') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const trimEnd = <T extends string>(val: T): TrimEnd<T> =>
  val.trimEnd() as TrimEnd<T>;

export { trimEnd };
export type { TrimEnd };
