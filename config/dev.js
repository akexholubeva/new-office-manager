const webpack = require('webpack');
const { dir, common } = require('./base');
const merge = require('webpack-merge');

module.exports = function() {
  return merge(common, {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'index.jsx',
    ],
    devtool: 'eval',
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
    },
  });
};
