// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

/**
 * @internal
 */
type Link<T extends string, U extends string> = `\<a href="${T}">${U}\</a>`;

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
const link = <T extends string, U extends string>(
  url: T,
  val: U,
): Link<T, U> => val.link(url) as Link<T, U>;

export { link };
export type { Link };
