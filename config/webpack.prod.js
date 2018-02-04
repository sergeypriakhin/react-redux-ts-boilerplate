const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const CommonConfig = require("./webpack.common");

module.exports = merge(CommonConfig, {
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(css|sass|scss|less)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader!less-loader"
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin("bundle.css")
  ]
});
