// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";
import { exec as _exec } from "../non_curry/regexp/exec.ts";

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
const exec = curry(_exec);

export { exec };
