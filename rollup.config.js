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
const pkg = require('./package.json');

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
  sourcemap: true,
  external: ['react'],
  plugins: [
    postcss({
      plugins: postcssPlugins,
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id];
      },
      extensions: ['.css'],
      extract: 'dist/styles.css',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    url({ limit: 1000000 }),
    babel({ exclude: 'node_modules/**' }),
  ],
};
