import express from 'express';

import path from 'path';
const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./../../webpack/webpack.config.dev').default;

const compiler = webpack(webpackConfig);

//  Use webpack-dev-middleware to serves static files in development mode
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(
  '/news',
  (req, res) => {
    return res.set('content-type', 'text/html').send(app.locals.html)
  }
);

app.use(
  '*',
  (req, res) => (
    res.set('content-type', 'text/html').send(app.locals.html)
  ),
);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('\uD83D\uDE80', ' Server running on port 3000');
});
