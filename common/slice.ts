// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

import { curry } from "../deps.ts";

import { slice as _slice } from "../uncurry/common/slice.ts";

/**
 * Returns a section of a value.
 * @param start - The index to the beginning of the specified portion
 * @param end - The index to the end of the specified portion
 * @param val - Any `String`, `Array`, `TypedArray`, `ArrayBuffer`, `SharedArrayBuffer` and `Blog`
 * @returns The result of `val.slice(start, end)`
 *
 * @example
 * ```ts
 * slice(0, 2, 'hello') // 'he'
 * slice(1, Infinity, [1, 2, 3]) // [2, 3]
 * ```
 *
 * @beta
 */
const slice = curry(_slice);

export { slice };
