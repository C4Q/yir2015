var path = require('path')
var webpack = require('webpack')
var srcDir = 'app'

module.exports = {
  entry: './js/index',
  output: {
    path: path.join(__dirname, 'hosted-dir'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }]
  }
}
