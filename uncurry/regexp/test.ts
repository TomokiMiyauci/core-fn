// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * whether a given `string` matches a given regular expression.
 *
 * @param regExp - Any Regular expression
 * @param val - Any `string` value
 * @returns The result of `regExp.test(val)`
 *
 * @example
 * ```ts
 * test(new RegExp('^test'), 'testdata') // true
 * test(/xyz$/, 'testxyz') // true
 * ```
 *
 * @category `RegExp`
 *
 * @beta
 */
const test = (regExp: RegExp, val: string): boolean => regExp.test(val);

export { test };
