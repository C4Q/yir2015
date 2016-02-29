var path = require('path')
var webpack = require('webpack')
var srcDir = 'js'

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, srcDir, 'index')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/' + srcDir + '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({DEBUG: true})
  ],
  resolve: {
    root: path.join(__dirname, 'app'),
    extensions: ['', '.js', '.jsx']
  },
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
