// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, equal } from "../../dev_deps.ts";
import { match } from "./match.ts";

Deno.test("match", () => {
  const table: [string | RegExp, string, RegExpMatchArray | null][] = [
    ["", "", [""]],
    ["c", "abc", ["c"]],
    ["aaaa", "aa", null],
    ["abc", "abcdabc", ["abc"]],
    [/a/, "bcd", null],
    [/a/, "abc", ["a"]],
    [/a(.*)/, "abc", ["abc", "bc"]],
    [/a(?<name>.*)/, "abc", ["abc", "bc"]],
    [/a/g, "abc", ["a"]],
    [/a/g, "abaca", ["a", "a", "a"]],
  ];
  table.forEach(([matcher, val, expected]) => {
    assertEquals(
      equal(
        match(matcher, val),
        expected,
      ),
      true,
      `match(${matcher}, ${val}) -> ${expected}`,
    );
  });
});
