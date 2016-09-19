/**
 * 创建时间：2016年9月19日 10:46:49
 * 创建人：JaminHuang
 * 描述：配置文件
 */
'use strict';
var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'source-map',
    entry: {
        app: ['webpack-dev-server/client?http://localhost:3010', 'webpack/hot/dev-server', './src/index']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        //chunkFilename: '[id].chunk.js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['react-hot', 'babel'], include: [path.join(__dirname, 'src')]}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.CommonsChunkPlugin('shared.js'),
        new webpack.DefinePlugin({
            'process.env': {
                'DEBUG': true
            }
        })
    ]
};
module.exports = config;