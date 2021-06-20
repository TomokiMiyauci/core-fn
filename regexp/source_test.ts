// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { source } from "./source.ts";

Deno.test("source", () => {
  const table: [RegExp, string][] = [
    [/test/, "test"],
    [/test/s, "test"],
    [new RegExp("test", "s"), "test"],
    [new RegExp(""), "(?:)"],
    [/\n/, "\\n"],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      source(regExp),
      expected,
      `source(${regExp}}) -> ${expected}`,
    );
  });
});
