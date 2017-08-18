import path from 'path';

import loaders from './loaders';
import plugins from './plugins';
import config from '../src/server/config';

export default {
  entry: {
    main: './src/Root.js',
  },

  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },

  module: {
    rules: loaders,
  },

  plugins,
};
