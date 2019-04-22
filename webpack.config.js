const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env, argv) {
  const isDev = argv.mode === "development";

  return {
    target: "web",
    context: __dirname,
    entry: "./src/index.tsx",
    output: {
      path: __dirname + "/build",
      filename: "js/[name].bundle.js",
      chunkFilename: "js/[name].chunk.js",
      publicPath: "/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: isDev ? "cheap-eval-source-map" : "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      alias: {
        "@page": path.resolve(__dirname, "src/pages/"),
        "@module": path.resolve(__dirname, "src/modules/"),
        "@component": path.resolve(__dirname, "src/components/")
      }
    },

    devServer: {
      port: 3000,
      open: true,
      hot: true,
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader" ,
          exclude: /node_modules/
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

    optimization: isDev
      ? {
        minimize: false,
        nodeEnv: "development"
      }
      : {
        minimize: true,
        nodeEnv: "production",
        sideEffects: true,
        concatenateModules: true,
        splitChunks: { chunks: "all" },
        runtimeChunk: true
      },

    performance: isDev
      ? {
        hints: false
      }
      : {
        hints: "warning",
        maxEntrypointSize: 400000
      },

    plugins: [
      new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        favicon: "./src/favicon.ico"
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
      new webpack.HotModuleReplacementPlugin()
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
