const webpack = require('webpack');
const { dir, common } = require('./base');
const merge = require('webpack-merge');
const path = require('path');

module.exports = () => merge(common, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'index.jsx',
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dev'),
    publicPath: 'http://localhost:8080/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: dir.source,
    port: 8080,
  },
});
