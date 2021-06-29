// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEqualsType, TypedArray } from "../dev_deps.ts";
import { includes } from "./includes.ts";

Deno.test("includes", () => {
  assertEqualsType<
    (val: unknown) => (collection: string | unknown[] | TypedArray) => boolean
  >(includes);
  assertEqualsType<
    (collection: string | unknown[] | TypedArray) => boolean
  >(includes(""));
  assertEqualsType<
    boolean
  >(includes("")(""));
  assertEqualsType<
    boolean
  >(includes("")([]));
  assertEqualsType<
    boolean
  >(includes("", new Uint16Array([])));
});
