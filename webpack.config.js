const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    context:path.join(__dirname,'src'),
    mode:'development',
    entry:['@babel/polyfill','./index.js'],
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),new MiniCssExtractPlugin({
            filename:'[hash].[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.js/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}