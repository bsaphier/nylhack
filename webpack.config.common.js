const path = require('path');

module.exports = {
    entry: './app/main.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    context: __dirname,
    module: {
        rules: [{
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
