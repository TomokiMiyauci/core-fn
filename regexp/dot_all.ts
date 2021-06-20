// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression. Default is false. Read-only.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.dotAll`
 *
 * @example
 * ```ts
 * dotAll(/test/s) // true
 * dotAll(/test/) // false
 * ```
 *
 * @beta
 */
const dotAll = (regExp: RegExp) => regExp.dotAll;

export { dotAll };
