const autoprefixer = require("autoprefixer");
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
        test: /\.(css|sass|scss)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: "true",
                localIdentName: "[name]__[local]-[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  autoprefixer({
                    browsers: [
                      ">1%",
                      "last 4 versions",
                      "Firefox ESR",
                      "not ie < 9" // React doesn't support IE8 anyway
                    ],
                    flexbox: "no-2009"
                  })
                ],
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                modules: "true"
              }
            }
          ]
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
