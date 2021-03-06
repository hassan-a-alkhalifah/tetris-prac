const webpack = require('webpack');

module.exports = {
     
    entry: './src/index.jsx',

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            },
            {
                test: /\jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: './dist',
        publicPath: '/',
        hot: true,
    }
}