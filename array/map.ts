// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
import { AnyFn, curry } from "../deps.ts";

/**
 * @internal
 */
const _map = <
  T extends readonly unknown[],
  F extends (value: T[number], index: number, array: T) => unknown,
>(
  fn: F,
  array: T,
): ReturnType<F>[] => array.map(fn as AnyFn<T[number], U>);

/**
 * Takes a function, applies the function to each, and returns a result of the same shape.
 *
 * @param fn - The function to be called on every element of the input `array`.
 * @param array - The array to be iterated over.
 * @returns The result of `array.map(fn)`
 *
 * @example
 * ```ts
 * const triple = (val: number):number => val * 3
 * map(triple, [1, 2, 3]) // [3, 6, 9]
 * ```
 *
 * @category `Array`
 *
 * @beta
 */
const map = curry(_map);

export { map };
