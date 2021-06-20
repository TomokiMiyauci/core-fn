// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular expression. Default is false. Read-only.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.sticky`
 *
 * @example
 * ```ts
 * sticky(/test/y) // true
 * sticky(/test/) // false
 * ```
 *
 * @beta
 */
const sticky = (regExp: RegExp) => regExp.sticky;

export { sticky };
