/*eslint no-undef: "error"*/
/*eslint-env node*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const defaultConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      path.resolve(__dirname + '/node_modules'),
      path.resolve(__dirname + '/src'),
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 3000,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(['css-loader', 'less-loader']),
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        query: {
          pretty: true,
        },
      },
      {
        test: /\.(jpeg|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [path.resolve(__dirname, 'src/commons/fonts/')],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/img/',
          outputPath: 'img/',
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.resolve(__dirname, 'src/commons/fonts/')],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/fonts/',
          outputPath: 'fonts/',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new HtmlWebpackPlugin({
      template: `./index.pug`,
      filename: `index.html`,
      chunks: ['index'],
    }),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
};
module.exports = defaultConfig;
