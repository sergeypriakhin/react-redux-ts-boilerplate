const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  target: "web",
  entry: {
    app: path.resolve("src", "index.tsx"),
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk'],
  },
  devtool: "source-map",

  optimization: {
    minimize: true,
    nodeEnv: "prod",
    sideEffects: true,
    concatenateModules: true,
    splitChunks: { chunks: "all" },
    runtimeChunk: true
  },

  performance: {
    hints: "warning",
    maxEntrypointSize: 400000
  }
});
