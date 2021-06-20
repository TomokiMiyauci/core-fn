// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { lastIndex } from "./last_index.ts";
import { exec } from "./exec.ts";

Deno.test("lastIndex", () => {
  const table: [RegExp, number][] = [
    [/test/, 0],
    [/test/s, 0],
    [new RegExp("test", "s"), 0],
    [/test/g, 0],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      lastIndex(regExp),
      expected,
      `lastIndex(${regExp}}) -> ${expected}`,
    );
  });

  const re = /t/g;
  exec(re, "test");
  assertEquals(lastIndex(re), 1);
  exec(re, "test");
  assertEquals(lastIndex(re), 4);
  assertEquals(exec(re, "test"), null);
  assertEquals(lastIndex(re), 0);
});
