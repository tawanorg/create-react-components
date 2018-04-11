import uglify from 'rollup-plugin-uglify';
import cssnano from 'cssnano';
import postcssModules from 'postcss-modules';
import replace from 'rollup-plugin-replace';
import baseConfig from './rollup.config'

const cssExportMap = {};

const configProduction = Object.assign({}, baseConfig, {
  plugins: [
    ...baseConfig.plugins,
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    postcssModules({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }),
    cssnano(),
    uglify(),
  ],
});

export default configProduction;
