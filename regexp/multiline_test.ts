// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { multiline } from "./multiline.ts";

Deno.test("multiline", () => {
  const table: [RegExp, boolean][] = [
    [/test/, false],
    [/test/s, false],
    [/test/m, true],
    [new RegExp("test", "m"), true],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      multiline(regExp),
      expected,
      `multiline(${regExp}}) -> ${expected}`,
    );
  });
});
