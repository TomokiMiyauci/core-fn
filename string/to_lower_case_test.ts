// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals } from "../dev_deps.ts";
import { toLowerCase } from "./to_lower_case.ts";

Deno.test("toLowerCase", () => {
  const table: [string, string][] = [
    ["", ""],
    ["Hello", "hello"],
    ["HeLlo", "hello"],
    ["hello", "hello"],
    ["Hello World", "hello world"],
  ];
  table.forEach(([val, expected]) => {
    assertEquals(
      toLowerCase(val),
      expected,
      `toLowerCase(${val}) -> ${expected}`,
    );
  });
});
