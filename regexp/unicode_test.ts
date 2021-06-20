// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { unicode } from "./unicode.ts";

Deno.test("unicode", () => {
  const table: [RegExp, boolean][] = [
    [/test/, false],
    [/test/s, false],
    [/test/u, true],
    [new RegExp("test", "s"), false],
    [new RegExp("test", "u"), true],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      unicode(regExp),
      expected,
      `unicode(${regExp}}) -> ${expected}`,
    );
  });
});
