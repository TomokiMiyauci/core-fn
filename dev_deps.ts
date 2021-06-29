// Copyright 2021-present the Core-fn authors. All rights reserved. MIT license.
export { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
export { equal } from "https://deno.land/x/equal@v1.5.0/mod.ts";
export type {
  TypedArray,
} from "https://deno.land/x/fonction@v2.1.0-beta.1/mod.ts";

export const assertEqualsType = <T, U extends T = T>(_actual?: U): void => {};
