// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.ignoreCase`
 *
 * @example
 * ```ts
 * ignoreCase(/test/s) // true
 * ignoreCase(/test/) // false
 * ```
 *
 * @beta
 */
const ignoreCase = (regExp: RegExp) => regExp.ignoreCase;

export { ignoreCase };
