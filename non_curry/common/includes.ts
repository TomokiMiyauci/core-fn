// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { TypedArray } from "../../deps.ts";

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
const includes = <T extends string | readonly unknown[] | TypedArray>(
  val: T extends string ? string : T[number],
  collection: T,
): boolean => collection.includes(val as never);

export { includes };
export type { TypedArray };
