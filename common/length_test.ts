// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { length } from "./length.ts";

Deno.test("length", () => {
  const table: [{ length: number } | string, number][] = [
    ["", 0],
    [" ", 1],
    ["  ", 2],
    ["a", 1],
    ["ab", 2],
    ["hello", 5],
    [[], 0],
    [[""], 1],
    [["", 0], 2],
    [["", 0, "1"], 3],
    [{ length: 3 }, 3],
  ];

  table.forEach(([val, expected]) => {
    assertEquals(length(val), expected, `length(${val}) -> ${expected}`);
  });

  assertEqualsType<number>(length(""));
  assertEqualsType<number>(length([]));
  assertEqualsType<number>(length({ length: 1 }));
  assertEqualsType<1>(length({ length: 1 } as const));
});
