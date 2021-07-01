// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { curry } from "../deps.ts";
import { link as _link } from "../uncurry/string/link.ts";

/**
 * Returns an `<a>` HTML element and sets the href attribute value.
 * @param url - href url string
 * @param val - Any `String`
 * @returns The result of `val.link(url)`
 *
 * @example
 * ```ts
 * link('https://google.com', 'google') // '<a href="https://google.com">google</a>'
 * ```
 *
 * @beta
 */
const link = curry(_link);

export { link };
