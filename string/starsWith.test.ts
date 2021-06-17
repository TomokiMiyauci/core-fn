// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { _startsWith } from "./startsWith.ts";

Deno.test("startsWith", () => {
  const table: [string, string, boolean][] = [
    ["", "", true],
    ["hello", "hello world", true],
    ["H", "hello", false],
    ["Hello", "hello", false],
  ];
  table.forEach(([val, target, expected]) => {
    assertEquals(
      _startsWith(val, target),
      expected,
      `startsWith(${val}, ${target}) -> ${expected}`,
    );
  });
});
