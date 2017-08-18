import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import WebpackChunkHash from 'webpack-chunk-hash';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import config from './../src/server/config';

const { isDevEnvironment } = config;

const isVendor = ({ resource }) => (
  resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
);

export default [
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'manifest'],
    minChunks: isVendor,
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
  }),
  new CopyWebpackPlugin([{
    flatten: true,
    from: { glob: 'src/static/*' },
    to: 'static',
  }]),

  //  Production plugins
  ...(!isDevEnvironment) && [
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new ExtractTextPlugin('styles/style.[contenthash]-1.bundle.css'),
    new UglifyJsPlugin(),
  ],

  //  Development plugins
  ...(isDevEnvironment) && [
    new webpack.HotModuleReplacementPlugin(),
  ],
];
