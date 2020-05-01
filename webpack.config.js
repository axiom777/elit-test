/*eslint no-undef: "error"*/
/*eslint-env node*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack');
const isDev = process.env.NODE_ENV === 'development' ? true : false;
console.log(process.env.NODE_ENV);

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
        use: ExtractTextPlugin.extract([
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
          { loader: 'less-loader' },
        ]),
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
          publicPath: isDev ? '/img/': '/elit-test/img/',
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
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
module.exports = defaultConfig;
