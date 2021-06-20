// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.source`
 *
 * @example
 * ```ts
 * source(/test/s) // true
 * source(/test/) // false
 * ```
 *
 * @beta
 */
const source = (regExp: RegExp) => regExp.source;

export { source };
