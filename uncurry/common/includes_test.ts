// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../../dev_deps.ts";
import { includes } from "./includes.ts";
import { TypedArray } from "../../deps.ts";

Deno.test("includes", () => {
  const table: [
    string | number,
    string | readonly unknown[] | TypedArray,
    boolean,
  ][] = [
    ["llo", "hello", true],
    ["1", ["2"], false],
    ["1", ["1", "2"], true],
    [1, ["1", "2", 1], true],
    [20, new Uint8Array([10, 20, 30, 40, 50]), true],
  ];

  table.forEach(([val, collection, expected]) => {
    assertEquals(
      // deno-lint-ignore no-explicit-any
      includes(val, collection as any),
      expected,
      `includes(${val}, ${collection})() -> ${expected}`,
    );
  });

  assertEqualsType<boolean>(includes("", ""));
  assertEqualsType<boolean>(includes("", [""]));
  assertEqualsType<boolean>(includes(2, [1]));
  assertEqualsType<boolean>(includes(1, [1] as const));
  assertEqualsType<boolean>(includes(1, new Uint16Array([])));
});
