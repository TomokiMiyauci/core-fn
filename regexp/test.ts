// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";
import { test as _test } from "../uncurry/regexp/test.ts";

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
const test = curry(_test);

export { test };
