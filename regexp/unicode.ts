// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular expression. Default is false. Read-only.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.unicode`
 *
 * @example
 * ```ts
 * dotAll(/test/u) // true
 * dotAll(/test/) // false
 * ```
 *
 * @beta
 */
const unicode = (regExp: RegExp) => regExp.unicode;

export { unicode };
