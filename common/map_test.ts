// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEqualsType, TypedArray } from "../dev_deps.ts";
import { map } from "./map.ts";

Deno.test("map", () => {
  assertEqualsType<
    TypedArray | readonly unknown[]
  >(map(() => 1, new Uint16Array([])));
});
