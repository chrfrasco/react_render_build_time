var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Who did this?',
      template: './src/templates/index.template.js'
    }),
  ]
};