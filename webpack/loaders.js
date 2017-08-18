import combineLoaders from 'webpack-combine-loaders';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

import config from './../src/server/config';

const { isDevEnvironment } = config;

export const sassFilePaths = [
  'src/styles',
  'node_modules',
];

const cssLoaderConfig = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]--[hash:base64:5]',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        autoprefixer({
          browsers: [
            'last 2 versions',
          ],
        }),
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: sassFilePaths,
      sourceMap: false,
    },
  },
];

export default [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.scss?$/,
    exclude: /node_modules/,
    loader: (isDevEnvironment)
      ? combineLoaders([
        'style-loader',
        ...cssLoaderConfig,
      ])
      : ExtractTextPlugin.extract({
        use: cssLoaderConfig,
      }),
  },
  {
    test: /\.(png|svg)?$/,
    exclude: /node_modules/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[hash]-1.[ext]',
        outputPath: 'assets/images/',
      },
    },
  },
];
