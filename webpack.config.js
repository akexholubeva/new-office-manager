module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module:{
        loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]

    },

}