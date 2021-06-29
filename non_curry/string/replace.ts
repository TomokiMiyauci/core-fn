// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Infer the replacement value.
 *
 * @typeParam T - Original string
 * @typeParam From - Holds the pattern string that need to replace or RegExp
 * @typeParam To - Holds the replacement string
 *
 * @example
 * ```ts
 * Replace<'hello Tom', 'Tom', 'Bob'> // 'hello Bob'
 * Replace<'hogehoge', 'hoge', 'fuga'> // 'fugahoge'
 * ```
 *
 * @category `String`
 *
 * @beta
 */
type Replace<
  T extends string,
  From extends string | RegExp,
  To extends string,
> = From extends "" | To ? T
  : From extends string
    ? T extends `${infer L}${From}${infer R}` ? `${L}${To}${R}`
    : T
  : From extends RegExp ? string
  : never;

/**
* Replaces matches for `from` in string or RegExp with `to`.
*
* @param from - Holds the pattern string that need to replace or RegExp
* @param to - Holds the replacement string
* @param val - Original string
* @returns The result of `val.replace(from, to)`
*
* @example
* ```ts
* replace('hello Tom', 'Tom', 'Bob') // 'hello Bob'
* replace('hogehoge', 'hoge', 'fuga') // 'fugahoge'
* ```
*
* @category `String`
*
* @beta
*/
const replace = <
  From extends string | RegExp,
  To extends string,
  T extends string,
>(
  from: From,
  to: To,
  val: T,
): Replace<T, From, To> => val.replace(from, to) as Replace<T, From, To>;

export { replace };
export type { Replace };
