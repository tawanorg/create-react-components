import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import postcssModules from 'postcss-modules';
import postcssUrl from 'postcss-url';
import postcssImport from 'postcss-import';
import globalImport from 'postcss-global-import';
import url from 'rollup-plugin-url';
import replace from 'rollup-plugin-replace';
import globals from "rollup-plugin-node-globals";
import nodeBuiltins from 'rollup-plugin-node-builtins';

const pkg = require('../../package.json');

const external = Object.keys(pkg.dependencies);

const cssExportMap = {};

const postcssPlugins = [
  postcssImport(),
  globalImport(),
  postcssUrl({
    url: 'inline',
  }),
  precss(),
  autoprefixer(),
  postcssModules({
    getJSON(id, exportTokens) {
      cssExportMap[id] = exportTokens;
    },
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  }),
];

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  sourcemap: false,
  external,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: true
    }),
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/create-react-class/**',
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**',
      ]
    }),
    globals(),
    nodeBuiltins(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    postcss({
      plugins: postcssPlugins,
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
      extensions: ['.css'],
      extract: pkg.style,
    }),
    url({ limit: 1000000 }),
  ]
};
