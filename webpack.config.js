/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
/**
 * Created by Evhenii_Izotov on 1/24/2018.
 */
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy']
                }},
            { test: /\.scss$|\.css$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        HtmlWebpackPluginConfig,
    ],
    devServer: {
        contentBase: '/',
        port: 8080,
        historyApiFallback: true,
    },
}