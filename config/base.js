const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

const dir = {
    source: path.join(__dirname,'..', 'src'),
    build: path.join(__dirname,'..', 'dist'),
    modules: path.join(__dirname,'..', 'node_modules'),
};
const common = {
    context: dir.source,
    output: {
        path: dir.build,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            dir.modules,
            dir.source
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'New office-manager',
            filename: 'index.html',
            template: 'index.ejs',
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module:{
        rules: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             use: 'babel-loader'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use:'eslint-loader'
        }, { 
             test: /\.css$/,
             use: ["style-loader", "css-loader"]
        }, {
             test: /\.(jpe?g|png|gif)$/,
             exclude: /(node_modules)/,
             use: 'url-loader?limit=1000'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: "file-loader"
        }],
    },
};

module.exports = {common, dir};