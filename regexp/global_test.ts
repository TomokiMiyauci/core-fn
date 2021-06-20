// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { global } from "./global.ts";

Deno.test("global", () => {
  const table: [RegExp, boolean][] = [
    [/test/, false],
    [/test/g, true],
    [/test/gi, true],
    [new RegExp("test", "g"), true],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      global(regExp),
      expected,
      `global(${regExp}}) -> ${expected}`,
    );
  });
});
