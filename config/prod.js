const webpack = require('webpack');
const { common } = require('./base');
const merge = require('webpack-merge');
const path = require('path');

module.exports = () => merge(common, {
  entry: 'index.jsx',
  output: {
    filename: 'scripts/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'prod'),
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
