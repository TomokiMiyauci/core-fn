// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.

import { curry } from "../deps.ts";
import { replace as _replace } from "../uncurry/string/replace.ts";

/**
* Replaces matches for `from` in string or RegExp with `to`.
*
* @param from - Holds the pattern string that need to replace or RegExp
* @param to - Holds the replacement string
* @param val - Original string
* @returns The result of `val.replace(from, to)`
*
* @example
* ```ts
* replace('hello Tom', 'Tom', 'Bob') // 'hello Bob'
* replace('hogehoge', 'hoge', 'fuga') // 'fugahoge'
* ```
*
* @category `String`
*
* @beta
*/
const replace = curry(_replace);

export { replace };
