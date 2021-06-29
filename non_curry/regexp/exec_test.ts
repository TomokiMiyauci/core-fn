// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, equal } from "../../dev_deps.ts";
import { exec } from "./exec.ts";

Deno.test("exec", () => {
  const table: [RegExp, string, RegExpExecArray | null][] = [
    [/test/, "hello", null],
    [/test/, "data-test", ["test"] as RegExpExecArray],
    [/^test/, "test-data", ["test"] as RegExpExecArray],
  ];

  table.forEach(([regExp, val, expected]) => {
    assertEquals(
      equal(exec(regExp, val), expected),
      true,
      `exec(${regExp}, ${val})() -> ${expected}`,
    );
  });
});
