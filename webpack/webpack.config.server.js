import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './src/server/app.js',

  target: 'node',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  externals: [nodeExternals()],
};
