const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {

  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },

 output: {
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]'
        }

    }, {
      test: /\.(png|jpg|gif|svg|)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.resolve(__dirname, 'dist') 
          },
        },
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, postcssOptions: { path: './postcss.config.js' } }
        }, {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.resolve(__dirname, 'dist') 
          },
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, postcssOptions: { path: './postcss.config.js' } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': 'src',
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.pug`,
      filename: './index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/interface/interface.pug`,
      filename: './interface.html',
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/interface/form_elements/like/img`, to: `${PATHS.dist}/img` },
        { from: `${PATHS.src}/interface/form_elements/comment/img`, to: `${PATHS.dist}/img` },
        { from: `${PATHS.src}/fonts`, to: `${PATHS.dist}/fonts` },
        // { from: `${PATHS.src}/static`, to: '' }
      ]
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
}