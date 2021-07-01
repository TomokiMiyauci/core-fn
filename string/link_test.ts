// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { link } from "./link.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("link", () => {
  assertEqualsType<(val: string) => string>(link(""));
  assertEqualsType<string>(link("")(""));
  assertEqualsType<string>(link("", ""));
});
