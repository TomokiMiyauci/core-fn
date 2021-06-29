// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * Expose the [[Description]] internal slot of a symbol directly.
 * @param val - Any `Symbol`
 * @returns The result of `val.description`
 *
 * @example
 * ```ts
 * description(Symbol()) // undefined
 * description(Symbol('')) // ''
 * description(Symbol('abc')) // 'abc'
 * ```
 *
 * @beta
 */
const description = (val: symbol): symbol["description"] => val.description;

export { description };
