// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEqualsType } from "../dev_deps.ts";
import { test } from "./test.ts";

Deno.test("test", () => {
  assertEqualsType<(val: string) => boolean>(test(RegExp("")));
  assertEqualsType<boolean>(test(RegExp(""))(""));
  assertEqualsType<boolean>(
    test(RegExp(""), ""),
  );
});
