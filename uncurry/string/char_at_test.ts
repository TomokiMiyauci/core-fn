// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType } from "../../dev_deps.ts";
import { CharAt, charAt } from "./char_at.ts";

Deno.test("charAt", () => {
  const table: [number, string, string][] = [
    [0, "", ""],
    [0, "abc", "a"],
    [1, "abc", "b"],
    [2, "abc", "c"],
    [3, "abc", ""],
    [100, "abc", ""],
    [-1, "abc", ""],
    [-100, "abc", ""],
    [-0, "abc", "a"],
    [-0, "", ""],
  ];
  table.forEach(([pos, val, expected]) => {
    assertEquals(
      charAt(pos, val),
      expected,
      `charAt(${pos}, ${val}) -> ${expected}`,
    );
  });

  assertEqualsType<"", CharAt<0, "">>();
  assertEqualsType<"", CharAt<1, "">>();
  assertEqualsType<"", CharAt<2, "">>();
  assertEqualsType<"a", CharAt<0, "a">>();
  assertEqualsType<"", CharAt<1, "a">>();
  assertEqualsType<"a", CharAt<0, "ab">>();
  assertEqualsType<"b", CharAt<1, "ab">>();
  assertEqualsType<"", CharAt<2, "ab">>();
  assertEqualsType<"", CharAt<-1, "">>();
  assertEqualsType<"", CharAt<-1, "a">>();
  assertEqualsType<"", CharAt<-1, "ab">>();
  assertEqualsType<"", CharAt<-100, "ab">>();
  assertEqualsType<"", CharAt<100, "ab">>();
  assertEqualsType<"a", CharAt<-0, "ab">>();
});
