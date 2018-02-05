const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const CommonConfig = require("./webpack.common");

module.exports = merge(CommonConfig, {
  devtool: "eval-source-map",

  devServer: {
    contentBase: "src",
    hot: true,
    historyApiFallback: true,
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
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
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin()
  ]
});
