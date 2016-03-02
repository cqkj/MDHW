/* global __dirname */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  externals: {},
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=10000&name=font/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=img/[name].[ext]?[hash]'
      },
      // {
      //   test: require.resolve('angular'),
      //   loader: 'expose?angular'
      // },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
  postcss: function(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')()
    ]
  }
};