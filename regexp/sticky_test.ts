// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { sticky } from "./sticky.ts";

Deno.test("sticky", () => {
  const table: [RegExp, boolean][] = [
    [/test/, false],
    [/test/s, false],
    [/test/y, true],
    [new RegExp("test", "y"), true],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      sticky(regExp),
      expected,
      `sticky(${regExp}}) -> ${expected}`,
    );
  });
});
