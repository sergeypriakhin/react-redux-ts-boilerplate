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
        test: /\.css$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9" // React doesn't support IE8 anyway
                  ],
                  flexbox: "no-2009"
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: "true",
              localIdentName: "[name]__[local]-[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              modules: "true"
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
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
