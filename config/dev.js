const webpack=require('webpack');
const { dir, common }=require('./base');
const merge=require('webpack-merge');

module.exports= function(env) {
    return merge( common, {
        entry: 'index.js',
        plugins:[
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development'),
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        devServer: {
            hot: true,
            historyApiFallback: true,
    },
    });
 }
