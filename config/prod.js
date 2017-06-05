const webpack = require('webpack');
const { common } = require('./base');
const merge = require('webpack-merge');

module.exports = function() {
  return merge(common, {
    entry: 'index.jsx',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  });
};
