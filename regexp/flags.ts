// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a string indicating the flags of the regular expression in question. This field is read-only. The characters in this string are sequenced and concatenated in the following order:
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.flags`
 *
 * @remarks
 * - "g" for global
 * - "i" for ignoreCase
 * - "m" for multiline
 * - "u" for unicode
 * - "y" for sticky
 *
 * If no flags are set, the value is the empty string.
 *
 * @example
 * ```ts
 * flags(/test/s) // true
 * flags(/test/) // false
 * ```
 *
 * @beta
 */
const flags = (regExp: RegExp) => regExp.flags;

export { flags };
