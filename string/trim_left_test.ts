// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { TrimLeft, trimLeft } from "./trim_left.ts";

Deno.test("trimLeft", () => {
  const table: [string, string][] = [
    ["", ""],
    ["         ", ""],
    ["\n\n", ""],
    ["\t\t\t\t", ""],
    ["hello", "hello"],
    [" hello", "hello"],
    ["hello ", "hello "],
    [" hello ", "hello "],
    ["   hello   ", "hello   "],
    ["   hello  world  ", "hello  world  "],
    ["   hello  world\n\n", "hello  world\n\n"],
  ];
  table.forEach(([val, expected]) => {
    assertEquals(trimLeft(val), expected, `trimLeft(${val}) -> ${expected}`);
  });

  assertEqualsType<"", TrimLeft<"">>();
  assertEqualsType<"hello", TrimLeft<"hello">>();
  assertEqualsType<"", TrimLeft<"\n">>();
  assertEqualsType<"", TrimLeft<"\t">>();
  assertEqualsType<"", TrimLeft<"\t\n ">>();
  assertEqualsType<"hello ", TrimLeft<"hello ">>();
  assertEqualsType<"hello\n\t ", TrimLeft<"\n\t hello\n\t ">>();
});
