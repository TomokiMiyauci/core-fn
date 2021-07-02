// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
import { assertEquals, assertEqualsType, TypedArray } from "../../dev_deps.ts";
import { slice } from "./slice.ts";

Deno.test("slice", () => {
  const table: [
    number | undefined,
    number | undefined,
    | string
    | readonly unknown[]
    | TypedArray
    | ArrayBuffer
    | SharedArrayBuffer
    | Blob,
    | string
    | readonly unknown[]
    | TypedArray
    | ArrayBuffer
    | SharedArrayBuffer
    | Blob,
  ][] = [
    [0, 0, "", ""],
    [undefined, undefined, "", ""],
    [undefined, undefined, "a", "a"],
    [1, undefined, "a", ""],
    [0, 2, "abc", "ab"],
    [1, 2, "abc", "b"],
    [1, Infinity, "abc", "bc"],
    [undefined, Infinity, "abc", "abc"],
    [undefined, undefined, "abc", "abc"],
    [1, undefined, "abc", "bc"],
    [-1, undefined, "abc", "c"],
    [-Infinity, undefined, "abc", "abc"],
    [undefined, undefined, [], []],
    [undefined, undefined, [1, 2, 3], [1, 2, 3]],
    [0, undefined, [1, 2, 3], [1, 2, 3]],
    [0, 1, [1, 2, 3], [1]],
    [0, 1, [1, 2, 3], [1]],
    [1, undefined, [1, 2, 3], [2, 3]],
    [1, 0, [1, 2, 3], []],
    [1, 2, [1, 2, 3], [2]],
    [1, Infinity, [1, 2, 3], [2, 3]],
    [1, undefined, new Uint16Array([1, 2, 3]), [2, 3]],
    [undefined, undefined, new ArrayBuffer(16), new ArrayBuffer(16)],
    [
      undefined,
      undefined,
      new SharedArrayBuffer(16),
      new SharedArrayBuffer(16),
    ],
    [
      undefined,
      undefined,
      new Blob(),
      new Blob(),
    ],
  ];

  table.forEach(([start, end, val, expected]) => {
    assertEquals(
      slice(start, end, val),
      expected,
      `slice(${start}, ${end}, ${val}) -> ${expected}`,
    );
  });

  assertEqualsType<string>(slice(undefined, undefined, ""));
  assertEqualsType<"abc">(slice(undefined, undefined, "abc"));
  assertEqualsType<never[]>(slice(undefined, undefined, []));
  assertEqualsType<string[]>(slice(undefined, undefined, [""]));
  assertEqualsType<TypedArray>(
    slice(undefined, undefined, new Uint16Array() as TypedArray),
  );
});
