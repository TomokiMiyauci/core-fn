// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { TrimRight, trimRight } from "./trim_right.ts";

Deno.test("trimRight", () => {
  const table: [string, string][] = [
    ["", ""],
    ["         ", ""],
    ["\n\n", ""],
    ["\t\t\t\t", ""],
    ["hello", "hello"],
    [" hello", " hello"],
    ["hello ", "hello"],
    [" hello ", " hello"],
    ["   hello   ", "   hello"],
    ["   hello  world  ", "   hello  world"],
    ["   hello  world\n\n", "   hello  world"],
  ];
  table.forEach(([val, expected]) => {
    assertEquals(trimRight(val), expected, `trimRight(${val}) -> ${expected}`);
  });

  assertEqualsType<"", TrimRight<"">>();
  assertEqualsType<"hello", TrimRight<"hello">>();
  assertEqualsType<"", TrimRight<"\n">>();
  assertEqualsType<"", TrimRight<"\t">>();
  assertEqualsType<"", TrimRight<"\t\n ">>();
  assertEqualsType<"hello", TrimRight<"hello ">>();
  assertEqualsType<"\n\t hello", TrimRight<"\n\t hello\n\t ">>();
});
