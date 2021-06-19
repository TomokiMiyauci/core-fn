// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";

/**
 * @internal
 */
const _match = (
  matcher: string | RegExp,
  val: string,
): RegExpMatchArray | null => val.match(matcher);

/**
 * Matches a string with a regular expression, and returns an array containing the results of that search.
 * @param matcher - `RegExp` a variable name or string literal containing the regular expression pattern and flags
 * @param val - Any `String`
 * @returns The result of `val.match(matcher)`
 *
 * @example
 * ```ts
 * match(/xyz/, 'vwxyz') // ['xyz']
 * ```
 *
 * @beta
 */
const match = curry(_match);

export { _match, match };
