// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { TrimLeft } from "./trim_left.ts";
import { TrimRight } from "./trim_right.ts";

/**
 * Infer the trimmed string.
 *
 * @typeParam T - Any string
 * @returns Trimmed string
 *
 * @remarks
 * The definition of space
 * - `''`
 * - `\n`
 * - `\t`
 *
 * @example
 * ```ts
 * Trim<'\t\n hello \t\n'> // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
type Trim<T extends string> = TrimLeft<TrimRight<T>>;

/**
 * Removes whitespace from both ends of the string.
 *
 * @param val - `string` to trim
 * @returns The result of `val.trim()`
 *
 * @example
 * ```ts
 * trim('   hello   ') // 'hello'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
const trim = <T extends string>(val: T): Trim<T> => val.trim() as Trim<T>;

export { trim };
export type { Trim };
