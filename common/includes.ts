// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

import { curry } from "../deps.ts";

import { includes as _includes } from "../non_curry/common/includes.ts";

/**
 * Checks if value is in collection.
 *
 * @param val - The value to search for
 * @param collection - The collection to inspect
 * @returns The result of `collection.includes(val)`
 *
 * @example
 * ```ts
 * includes('lo', 'hello') // true
 * includes(3, [1, 2, 3]) // true
 * includes(20, new Uint8Array([10, 20, 30, 40, 50])) // true
 * ```
 *
 * @category `String` `Array`
 *
 * @beta
 */
const includes = curry(_includes);

export { includes };
