/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'resources', 'assets', 'js', 'app.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    watch: true,
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })],
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