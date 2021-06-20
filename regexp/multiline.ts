// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.multiline`
 *
 * @example
 * ```ts
 * multiline(/test/y) // true
 * multiline(/test/) // false
 * ```
 *
 * @beta
 */
const multiline = (regExp: RegExp) => regExp.multiline;

export { multiline };
