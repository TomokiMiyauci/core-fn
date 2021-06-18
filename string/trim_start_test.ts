// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { TrimStart, trimStart } from "./trim_start.ts";

Deno.test("trimStart", () => {
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
    assertEquals(trimStart(val), expected, `trimStart(${val}) -> ${expected}`);
  });

  assertEqualsType<"", TrimStart<"">>();
  assertEqualsType<"hello", TrimStart<"hello">>();
  assertEqualsType<"", TrimStart<"\n">>();
  assertEqualsType<"", TrimStart<"\t">>();
  assertEqualsType<"", TrimStart<"\t\n ">>();
  assertEqualsType<"hello ", TrimStart<"hello ">>();
  assertEqualsType<"hello\n\t ", TrimStart<"\n\t hello\n\t ">>();
});
