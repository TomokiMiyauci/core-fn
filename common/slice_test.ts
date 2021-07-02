// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEqualsType, TypedArray } from "../dev_deps.ts";
import { slice } from "./slice.ts";

Deno.test("slice", () => {
  assertEqualsType<
    | string
    | readonly unknown[]
    | TypedArray
    | ArrayBuffer
    | SharedArrayBuffer
    | Blob
  >(slice(0)(2)([]));
});
