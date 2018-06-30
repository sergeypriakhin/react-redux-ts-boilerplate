const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env, argv) {
  const isDev = argv.mode === "development";
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "js/[name].[hash].js",
      path: __dirname + "/build",
      chunkFilename: "js/[id].chunk.js",
      publicPath: "/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: isDev ? "inline-source-map" : "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    devServer: {
      contentBase: "src",
      hot: true,
      historyApiFallback: true,
      port: 3000
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
          test: /\.(sa|sc|c)ss$/,
          loaders: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            },
            "postcss-loader"
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]?[hash]"
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "async",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: "~",
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        favicon: "./src/favicon.ico"
      }),
      new ManifestPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[id].[hash].css"
      })
    ]
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //   react: "React",
    //   "react-dom": "ReactDOM"
    // }
  };
};
