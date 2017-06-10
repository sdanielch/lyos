'use strict';

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'resources', 'assets', 'js', 'app.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
};