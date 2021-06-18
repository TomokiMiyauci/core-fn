// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { TrimEnd, trimEnd } from "./trim_end.ts";

Deno.test("trimEnd", () => {
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
    assertEquals(trimEnd(val), expected, `trimEnd(${val}) -> ${expected}`);
  });

  assertEqualsType<"", TrimEnd<"">>();
  assertEqualsType<"hello", TrimEnd<"hello">>();
  assertEqualsType<"", TrimEnd<"\n">>();
  assertEqualsType<"", TrimEnd<"\t">>();
  assertEqualsType<"", TrimEnd<"\t\n ">>();
  assertEqualsType<"hello", TrimEnd<"hello ">>();
  assertEqualsType<"\n\t hello", TrimEnd<"\n\t hello\n\t ">>();
});
