// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

import { curry } from "../deps.ts";

import { map as _map } from "../uncurry/common/map.ts";

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn - callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array
 * @param val - Any `Array` or `TypedArray`
 * @returns The result of `val.map(callbackfn)`
 *
 * @example
 * ```ts
 * map(() => 1, [1, 2, 3]) // [1, 1, 1]
 * map((a) => a + 1, new Unit8Array([2, 4, 6])) // Uint8Array(2) [3, 5, 7]
 * ```
 *
 * @beta
 */
const map = curry(_map);

export { map };
