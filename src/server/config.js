import path from 'path';

const isDevEnvironment = (process.env.NODE_ENV === 'development');
const publicPath = path.join(process.cwd(), '/dist');
export default {
  appVersion: (process.env.APP_VERSION || '0.0.0'),
  isDevEnvironment,
  publicPath,
  indexPath: `${publicPath}/index.html`,
};
