// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { charAt } from "./char_at.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("charAt", () => {
  assertEqualsType<(val: string) => string>(charAt(0));
  assertEqualsType<string>(charAt(0)(""));
  assertEqualsType<string>(charAt(0, ""));
});
