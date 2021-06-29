// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { match } from "./match.ts";
import { assertEqualsType } from "../dev_deps.ts";

Deno.test("match", () => {
  assertEqualsType<(val: string) => RegExpMatchArray | null>(match(/f/));
  assertEqualsType<(val: string) => RegExpMatchArray | null>(match(""));
  assertEqualsType<RegExpMatchArray | null>(match(/f/)(""));
  assertEqualsType<RegExpMatchArray | null>(match(/f/, ""));
});
