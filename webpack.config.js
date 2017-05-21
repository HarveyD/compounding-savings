var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devServer: {
    //     inline: true,
    //     contentBase: './src',
    //     port: 3000
    // },
    //devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    entry: './dev/js/index.js',
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
    ],
    module: {
    loaders: [
        {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader',
            exclude: /node_modules/
        }
     ]
    }
};
