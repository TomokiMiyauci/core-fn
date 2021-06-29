// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { description } from "./description.ts";

Deno.test("description", () => {
  const table: [symbol, string | undefined][] = [
    [Symbol(""), ""],
    [Symbol("abc"), "abc"],
    [Symbol(), undefined],
    [Symbol(1), "1"],
  ];
  table.forEach(([val, expected]) => {
    assertEquals(
      description(val),
      expected,
      `description(${String(val)}) -> ${expected}`,
    );
  });
});
