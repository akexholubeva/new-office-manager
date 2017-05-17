const webpack=require('webpack');
const { dir, common }=require('./base');
const merge=require('webpack-merge');

module.exports=function(env) {
    return merge(common, {
        plugins:[
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),

        ],
    });
}
