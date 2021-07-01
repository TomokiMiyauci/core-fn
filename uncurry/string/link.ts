// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

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
const link = (
  url: string,
  val: string,
): string => val.link(url);

export { link };
