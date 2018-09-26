const path = require('path');

const config = {
  entry: [
    './index.js',
  ],
  watch: true,
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
};

module.exports = config;