const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: {
    server: path.resolve('src/server.tsx')
  },
  output: {
    path: path.resolve("build"),
    filename: "[name].bundle.js",
  },

  optimization: {
    nodeEnv: "server"
  },

  devtool: 'source-map',
  target: "node",
  node: {
    console: true,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  externals: [nodeExternals()],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
  ],
};