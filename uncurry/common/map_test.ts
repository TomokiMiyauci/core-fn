// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import {
  AnyFn,
  assertEquals,
  assertEqualsType,
  TypedArray,
} from "../../dev_deps.ts";
import { map } from "./map.ts";

Deno.test("map", () => {
  const table: [
    AnyFn,
    readonly unknown[] | TypedArray,
    // deno-lint-ignore no-explicit-any
    any,
  ][] = [
    [() => {}, [], []],
    [() => 1, [], []],
    [() => 1, [1, 2, 3], [1, 1, 1]],
    [(a: number) => a, [1, 2, 3], [1, 2, 3]],
    [() => 1, new Uint16Array([1, 2, 3]), [1, 1, 1]],
    [(a: number) => a, new Uint16Array([1, 2, 3]), [1, 2, 3]],
  ];

  table.forEach(([callbackfn, val, expected]) => {
    assertEquals(
      map(callbackfn, val),
      expected,
      `map(${callbackfn}, ${val}) -> ${expected}`,
    );
  });

  assertEqualsType<never[]>(map(() => [] as never, []));
  assertEqualsType<string[]>(map(() => "", [""]));
  assertEqualsType<readonly [""]>(map(() => "" as const, [""] as const));
  assertEqualsType<Uint16Array>(map(() => 1, new Uint16Array([])));
  assertEqualsType<Uint32Array>(map((a) => a, new Uint32Array([])));
  assertEqualsType<Uint8ClampedArray>(map(() => 1, new Uint8ClampedArray([])));
});
