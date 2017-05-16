const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname, './dist'),
        filename: './dist/bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'New office-manager',
            filename: './dist/index.html',
        })
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
             use: 'url-loader?limit=10000'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: "file-loader"
        }
        ],
    },
}