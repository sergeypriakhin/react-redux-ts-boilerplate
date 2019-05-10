const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  target: "web",
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk'],
  },
  devtool: "source-map",

  optimization: {
    minimize: true,
    nodeEnv: "production",
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
