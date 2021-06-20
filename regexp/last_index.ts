// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Returns read/write integer property of `RegExp` instances that specifies the index at which to start the next match.
 * @param regExp - Any `RegExp`
 * @returns The result of `regExp.lastIndex`
 *
 * @example
 * ```ts
 * const re = /t/g;
 * exec(re, "test");
 * lastIndex(re) // 1
 * ```
 *
 * @beta
 */
const lastIndex = (regExp: RegExp) => regExp.lastIndex;

export { lastIndex };
