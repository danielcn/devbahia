const path = require('path');
const webpackDashboard = require('webpack-dashboard/plugin');

const config = {
    entry: [
        './index.js',
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            loaders: [
            'babel-loader',
            ],
            exclude: /node_modules/,
        },
        ],
    },
    plugins: [
      new webpackDashboard(),
    ]
};

module.exports = config;