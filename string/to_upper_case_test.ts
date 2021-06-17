// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { toUpperCase } from "./to_upper_case.ts";

Deno.test("toUpperCase", () => {
  const table: [string, string][] = [
    ["", ""],
    ["Hello", "HELLO"],
    ["hello", "HELLO"],
    ["Hello World", "HELLO WORLD"],
  ];
  table.forEach(([val, expected]) => {
    assertEquals(
      toUpperCase(val),
      expected,
      `toUpperCase(${val}) -> ${expected}`,
    );
  });
});
