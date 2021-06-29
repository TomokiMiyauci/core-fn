// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEqualsType } from "../dev_deps.ts";
import { exec } from "./exec.ts";

Deno.test("exec", () => {
  assertEqualsType<(val: string) => RegExpExecArray | null>(exec(RegExp("")));
  assertEqualsType<RegExpExecArray | null>(exec(RegExp(""))(""));
  assertEqualsType<RegExpExecArray | null>(
    exec(RegExp(""), ""),
  );
});
