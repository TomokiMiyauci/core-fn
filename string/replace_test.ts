// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { replace } from "./replace.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("replace", () => {
  assertEqualsType<(to: string, val: string) => string>(replace(/f/));
  assertEqualsType<(to: string) => (val: string) => string>(replace(/f/));
  assertEqualsType<(to: string, val: string) => string>(replace(""));
  assertEqualsType<(to: string) => (val: string) => string>(replace(""));
  assertEqualsType<(val: string) => string>(replace("", ""));
  assertEqualsType<(val: string) => string>(replace("")(""));
  assertEqualsType<(val: string) => string>(replace(/f/, ""));
  assertEqualsType<(val: string) => string>(replace(/f/)(""));
  assertEqualsType<string>(replace(/f/, "", ""));
  assertEqualsType<string>(replace(/f/)("")(""));
  assertEqualsType<string>(replace(/f/, "")(""));
  assertEqualsType<string>(replace(/f/)("", ""));
});
