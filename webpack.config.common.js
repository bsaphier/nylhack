const path = require('path');

module.exports = {
    entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    context: __dirname,
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.svg$/,
            exclude: /(node_modules)/,
            use: [
                {
                    loader: 'react-svg-loader',
                    options: {
                        svgo: {
                            plugins: [
                                { removeTitle: false }
                            ],
                            floatPrecision: 2
                        }
                    }
                }
            ]
        }, {
            test: /jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        }]
    }
};
