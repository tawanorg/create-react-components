import uglify from 'rollup-plugin-uglify';
import cssnano from 'cssnano';
import postcssModules from 'postcss-modules';
import replace from 'rollup-plugin-replace';

const cssExportMap = {};

const configProduction = Object.assign({}, require('./rollup.config.js'), {
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    postcssModules({
      getJSON(id, exportTokens) {
        cssExportMap[id] = exportTokens;
      },
      generateScopedName: '[hash:base64:5]',
    }),
    cssnano(),
    uglify(),
  ],
});

export default configProduction;
