import ts from "rollup-plugin-ts";
import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
import { dependencies, main, module } from "./package.json";

const baseDir = resolve(__dirname);
const inputFilePath = resolve(baseDir, "mod.ts");
const nonCurryInputFilePath = resolve(baseDir, "non_curry", "mod.ts");
const banner =
  "/*! Copyright (c) 2021-present the Core-fn authors. All rights reserved. MIT license. */";
const external = Object.keys(dependencies);

const replaceOption = {
  ".ts": "",
  "https://deno.land/x/curry@v1.0.0/mod": "curry-rice",
  "https://deno.land/x/fonction@v2.0.0/mod": "fonction",
  preventAssignment: true,
};
const config = [
  {
    input: inputFilePath,
    plugins: [
      replace(replaceOption),
      ts({
        transpiler: "babel",
        tsconfig: (resolvedConfig) => ({
          ...resolvedConfig,
          declaration: false,
        }),
      }),
      terser(),
    ],

    external,

    output: {
      file: main,
      format: "cjs",
      sourcemap: true,
      banner,
    },
  },
  {
    input: inputFilePath,
    plugins: [
      replace(replaceOption),
      ts({
        transpiler: "babel",
      }),
      terser(),
    ],

    external,

    output: {
      file: module,
      format: "es",
      sourcemap: true,
      banner,
    },
  },

  {
    input: nonCurryInputFilePath,
    plugins: [
      replace(replaceOption),
      ts({
        transpiler: "babel",
        tsconfig: (resolvedConfig) => ({
          ...resolvedConfig,
          declaration: false,
        }),
      }),
      terser(),
    ],

    external,

    output: {
      file: "dist/non-curry/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      banner,
    },
  },
  {
    input: nonCurryInputFilePath,
    plugins: [
      replace(replaceOption),
      ts({
        transpiler: "babel",
      }),
      terser(),
    ],

    external,

    output: {
      file: "dist/non-curry/index.es.js",
      format: "es",
      sourcemap: true,
      banner,
    },
  },
];

export default config;
