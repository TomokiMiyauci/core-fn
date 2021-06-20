// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { flags } from "./flags.ts";

Deno.test("flags", () => {
  const table: [RegExp, string][] = [
    [/test/, ""],
    [/test/i, "i"],
    [/test/gis, "gis"],
    [new RegExp("test", "i"), "i"],
  ];

  table.forEach(([regExp, expected]) => {
    assertEquals(
      flags(regExp),
      expected,
      `flags(${regExp}}) -> ${expected}`,
    );
  });
});
