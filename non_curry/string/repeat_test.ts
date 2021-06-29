// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../../dev_deps.ts";
import { repeat } from "./repeat.ts";

Deno.test("repeat", () => {
  const table: [number, string, string][] = [
    [-1, "a", ""],
    [Infinity, "a", ""],
    [-Infinity, "a", ""],
    [NaN, "a", ""],
    [-NaN, "a", ""],
    [-0, "a", ""],
    [0, "", ""],
    [0, "", ""],
    [0, "", ""],
    [0, "", ""],
    [0, "abc", ""],
    [1, "a", "a"],
    [1, "abc", "abc"],
    [2, "abc", "abcabc"],
    [10, "a", "aaaaaaaaaa"],
  ];
  table.forEach(([count, val, expected]) => {
    assertEquals(
      repeat(count, val),
      expected,
      `repeat(${count}, ${val}) -> ${expected}`,
    );
  });
});
