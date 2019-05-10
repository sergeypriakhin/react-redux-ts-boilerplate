const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.resolve("build"),
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[name].chunk.js",
    publicPath: "/"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@page": path.resolve("src/pages/"),
      "@module": path.resolve("src/modules/"),
      "@component": path.resolve("src/components/")
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]?[hash]"
        }
      }
    ]
  },

  plugins: [
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("src", "index.html"),
      filename: "index.html",
      favicon: path.resolve("src", "favicon.ico")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].bundle.css",
      chunkFilename: "css/[name].chunk.css"
    }),
    new WebpackPwaManifest({
      name: "tsreact-boilerplate",
      short_name: "tsreact-boilerplate",
      description: "React boilerplate-based project!",
      background_color: "#fafafa",
      theme_color: "#b1624d"
    }),
    new webpack.NamedModulesPlugin(),
  ]
};
