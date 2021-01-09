import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/swordcss.cjs",
      format: "cjs",
    },
    {
      file: "dist/swordcss.min.cjs",
      format: "cjs",
      plugins: [terser()],
    },
    {
      file: "dist/swordcss.es.js",
      format: "es",
    },
    {
      file: "dist/swordcss.es.min.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
  external: ["css", "css-ast-iterations", "css-ast-iterations-pure"],
};
