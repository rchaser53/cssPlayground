const webpack = require('webpack');
const path = require("path");

module.exports = {
	context: path.resolve(__dirname, './src'),
  devtool: 'inline-source-map',
  entry: {
    index: "./connection/goodCode.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules:[{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};