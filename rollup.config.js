import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss"; // import postcss plugin

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/main.ts",
    output: {
        file: "public/bundle.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        postcss(), // use postcss plugin
        typescript({
            include: ["src/**/*.ts"],
            module: "ESNext",
        }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
        }),
        production && terser({ format: { comments: false } }), // minify, but only  in production
    ],
};
