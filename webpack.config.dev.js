const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        disableHostCheck: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    camelCase: true,
                    modules: true,
                    localIdentName: '[name]--[local]__[hash:base64:5]'
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }]
    }
});
