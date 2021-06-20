// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { dotAll } from "./dot_all.ts";

Deno.test("dotAll", () => {
  const table: [RegExp, boolean][] = [
    [/test/, false],
    [/test/s, true],
    [new RegExp("test", "s"), true],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      dotAll(regExp),
      expected,
      `dotAll(${regExp}}) -> ${expected}`,
    );
  });
});
