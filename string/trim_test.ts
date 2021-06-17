// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { Trim, trim } from "./trim.ts";

Deno.test("trim", () => {
  const table: [string, string][] = [
    ["", ""],
    ["         ", ""],
    ["\n\n", ""],
    ["\t\t\t\t", ""],
    ["hello", "hello"],
    [" hello", "hello"],
    ["hello ", "hello"],
    [" hello ", "hello"],
    ["   hello   ", "hello"],
    ["   hello  world  ", "hello  world"],
    ["   hello  world\n\n", "hello  world"],
  ];
  table.forEach(([val, expected]) => {
    assertEquals(trim(val), expected, `trim(${val}) -> ${expected}`);
  });

  assertEqualsType<"", Trim<"">>();
  assertEqualsType<"hello", Trim<"hello">>();
  assertEqualsType<"", Trim<"\n">>();
  assertEqualsType<"", Trim<"\t">>();
  assertEqualsType<"", Trim<"\t\n ">>();
  assertEqualsType<"hello", Trim<"hello ">>();
  assertEqualsType<"hello", Trim<"\n\t hello\n\t ">>();
});
