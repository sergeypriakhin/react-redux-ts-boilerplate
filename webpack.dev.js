const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  target: "web",
  entry: {
    app: ['./src/index.tsx', 'webpack-hot-middleware/client'],
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk'],
  },
  devtool: "inline-source-map",

  optimization: {
    minimize: false,
    nodeEnv: "development"
  },

  performance: {
    hints: false
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
