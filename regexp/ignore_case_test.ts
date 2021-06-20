// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { ignoreCase } from "./ignore_case.ts";

Deno.test("ignoreCase", () => {
  const table: [RegExp, boolean][] = [
    [/test/, false],
    [/test/i, true],
    [new RegExp("test", "i"), true],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      ignoreCase(regExp),
      expected,
      `ignoreCase(${regExp}}) -> ${expected}`,
    );
  });
});
