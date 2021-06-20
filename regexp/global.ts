// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.global`
 *
 * @example
 * ```ts
 * global(/test/g) // true
 * global(/test/) // false
 * ```
 *
 * @beta
 */
const global = (regExp: RegExp) => regExp.global;

export { global };
