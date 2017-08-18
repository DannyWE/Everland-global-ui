import path from 'path';

import loaders from './loaders';
import plugins from './plugins';

export default {
  entry: [
    './src/Root.js',
    'webpack-hot-middleware/client?reload=true',
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  module: {
    rules: loaders,
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    hot: true,
    inline: true,
    historyApiFallback: true,
  },

  plugins,
};
