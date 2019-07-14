import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
    {
        input: "./src/main.js",
        output: {
            name: "dynamicCondition",
            file: pkg.browser,
            format: "umd"
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            uglify()
        ]
    },
    {
        input: "./src/main.js",
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" }
        ]
    }
];
