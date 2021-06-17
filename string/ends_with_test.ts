// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { _endsWith } from "./ends_with.ts";

Deno.test("_endsWith", () => {
  const table: [string, string, boolean][] = [
    ["", "", true],
    ["o", "hello", true],
    ["world", "hello world", true],
    ["O", "hello", false],
    ["earth", "hello world", false],
    ["Hello", "hello", false],
  ];
  table.forEach(([val, target, expected]) => {
    assertEquals(
      _endsWith(val, target),
      expected,
      `_endsWith(${val}, ${target}) -> ${expected}`,
    );
  });
});
