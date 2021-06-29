// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { startsWith } from "./starts_with.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("startsWith", () => {
  assertEqualsType<(val: string) => boolean>(startsWith(""));
  assertEqualsType<boolean>(startsWith("")(""));
  assertEqualsType<boolean>(startsWith("", ""));
});
