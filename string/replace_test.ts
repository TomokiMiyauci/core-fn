// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../dev_deps.ts";
import { _replace, Replace } from "./replace.ts";

Deno.test("replace", () => {
  const table: [string | RegExp, string, string, string][] = [
    ["", "", "", ""],
    ["hello", "hello", "", ""],
    ["hoge", "huga", "", ""],
    [" ", "a", " ", "a"],
    [" ", "a", "  ", "a "],
    ["a", "b", "a", "b"],
    ["a", "b", "aaa", "baa"],
    ["Tom", "Bob", "hello Tom", "hello Bob"],
    [/^test/, "hello", "test Bob", "hello Bob"],
  ];
  table.forEach(([val, from, to, expected]) => {
    assertEquals(
      _replace(val, from, to),
      expected,
      `replace(${val}, ${from}, ${to}) -> ${expected}`,
    );
  });

  assertEqualsType<"", Replace<"", "", "">>();
  assertEqualsType<"", Replace<"", "a", "a">>();
  assertEqualsType<"a", Replace<"a", "a", "a">>();
  assertEqualsType<"b", Replace<"a", "a", "b">>();
  assertEqualsType<"baa", Replace<"aaa", "a", "b">>();
  assertEqualsType<"hello Bob", Replace<"hello Tom", "Tom", "Bob">>();
  assertEqualsType<string, Replace<"hello Tom", RegExp, "Bob">>();
});
