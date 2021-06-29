// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { repeat } from "./repeat.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("repeat", () => {
  assertEqualsType<(val: string) => string>(repeat(1));
  assertEqualsType<string>(repeat(1, ""));
  assertEqualsType<string>(repeat(1)(""));
});
