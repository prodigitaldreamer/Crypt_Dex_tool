"use strict";
/* globals process */
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_terser_1 = require("rollup-plugin-terser");
const plugin_node_resolve_1 = require("@rollup/plugin-node-resolve");
const environment = process.env.ENV || 'development';
const isDevelopmentEnv = (environment === 'development');
exports.default = [
    {
        input: 'lib/udf-compatible-datafeed.js',
        output: {
            name: 'Datafeeds',
            format: 'umd',
            file: 'dist/bundle.js',
        },
        plugins: [
            (0, plugin_node_resolve_1.nodeResolve)(),
            !isDevelopmentEnv && (0, rollup_plugin_terser_1.terser)({
                ecma: 2018,
                output: { inline_script: true },
            }),
        ],
    },
];
