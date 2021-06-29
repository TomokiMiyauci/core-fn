// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { endsWith } from "./ends_with.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("endsWith", () => {
  assertEqualsType<(val: string) => boolean>(endsWith(""));
  assertEqualsType<boolean>(endsWith("")(""));
  assertEqualsType<boolean>(endsWith("", ""));
});
