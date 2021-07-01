// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Executes a search on a `string` using a regular expression pattern, and returns an `array` containing the results of that search.
 * @param regExp - Any `RegExp`
 * @param val - Any `String`
 * @returns The result of `regExp.exec(val)`
 *
 * @example
 * ```ts
 * exec(/^test/, 'test-data') // ['test']
 * ```
 *
 * @beta
 */
const exec = (regExp: RegExp, val: string) => regExp.exec(val);

export { exec };
