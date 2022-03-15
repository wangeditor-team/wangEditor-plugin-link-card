const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpackCommonConf = require('./webpack.common.js')
const { distPath, srcPath } = require('./paths.js')

// 包体积分析
const isAnalyzer = process.env.NODE_ENV === 'production_analyzer'

// webpack plugins
const plugins = [
  new webpack.DefinePlugin({
    ENV: JSON.stringify('production'),
  }),
  new CleanWebpackPlugin(),
]
if (isAnalyzer) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = merge(webpackCommonConf, {
  mode: 'production',
  entry: path.join(srcPath, 'index'),
  output: {
    filename: 'index.js',
    path: distPath,
    library: {
      name: 'WangEditorPluginLinkCard',
      type: 'umd',
    },
  },
  externals: {
    '@wangeditor/core': {
      commonjs: '@wangeditor/core',
      commonjs2: '@wangeditor/core',
      amd: '@wangeditor/core',
      root: 'WangEditorCore',
    },
    '@wangeditor/editor': {
      commonjs: '@wangeditor/editor',
      commonjs2: '@wangeditor/editor',
      amd: '@wangeditor/editor',
      root: 'wangEditor',
    },
  },
  plugins,
  devtool: 'source-map',
})
