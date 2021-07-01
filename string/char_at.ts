// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";
import { charAt as _charAt } from "../uncurry/string/char_at.ts";

/**
 * Returns the character at the specified index.
 * @param pos - The zero-based index of the desired character
 * @param val - Any `String`
 * @returns The result of `val.charAt(pos)`
 *
 * @example
 * ```ts
 * charAt(0, 'hello') // 'h'
 * charAt(4, 'hello') // 'o'
 * charAt(100, 'hello') // ''
 * ```
 *
 * @beta
 */
const charAt = curry(_charAt);

export { charAt };
