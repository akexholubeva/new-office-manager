const webpack = require('webpack');
const { common } = require('./base');
const merge = require('webpack-merge');

module.exports = function() {
  return merge(common, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
    ],
  });
};
