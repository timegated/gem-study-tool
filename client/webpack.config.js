const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  entry: [
    '@babel/polyfill/noConflict',
    path.join(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    open: true,
    clientLogLevel: 'silent',
    port: 8080,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|gif|pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
