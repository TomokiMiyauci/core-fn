// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../../dev_deps.ts";
import { link } from "./link.ts";

Deno.test("link", () => {
  const table: [string, string, string][] = [
    ["", "", '<a href=""></a>'],
    ["abc", "", '<a href="abc"></a>'],
    ["abc", "efg", '<a href="abc">efg</a>'],
  ];
  table.forEach(([pos, val, expected]) => {
    assertEquals(
      link(pos, val),
      expected,
      `link(${pos}, ${val}) -> ${expected}`,
    );
  });
});
