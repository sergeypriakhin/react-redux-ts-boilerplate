const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = function(env, argv) {
  const isDev = argv.mode === 'development';
  return {
    target: 'web',
    context: __dirname,
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/build',
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/[name].chunk.js',
      publicPath: '/',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: isDev ? 'cheap-eval-source-map' : 'source-map',

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@component': path.resolve(__dirname, 'src/components/'),
        '@module': path.resolve(__dirname, 'src/modules/'),
      },
    },

    devServer: {
      contentBase: 'src',
      hot: true,
      historyApiFallback: true,
      port: 3000,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'awesome-typescript-loader',
          options: {
            getCustomTransformers: () => ({
              before: [
                tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'lib',
                  style: 'css',
                }),
              ],
            }),
          },
          exclude: /node_modules/,
        },

        {
          // Preprocess our own .css files
          // This is the place to add your own loaders (e.g. sass/less etc.)
          // for a list of loaders, see https://webpack.js.org/loaders/#styling
          test: /\.css$/,
          include: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        // {
        //   test: /\.(sa|sc|c)ss$/,
        //   include: /src/,
        //   exclude: /node_modules/,
        //   loaders: [
        //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         modules: true,
        //         localIdentName: '[name]__[local]-[hash:base64:5]',
        //       },
        //     },
        //     {
        //       loader: 'postcss-loader',
        //       options: {
        //         config: {
        //           ctx: {
        //             cssnext: {
        //               browsers: ['last 2 versions', '> 5%'],
        //             },
        //           },
        //         },
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: 'file-loader',
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]?[hash]',
          },
        },
      ],
    },

    optimization: isDev
      ? {
          minimize: false,
          nodeEnv: 'development',
        }
      : {
          minimize: true,
          nodeEnv: 'production',
          sideEffects: true,
          concatenateModules: true,
          splitChunks: { chunks: 'all' },
          runtimeChunk: true,
        },

    performance: isDev
      ? {
          hints: false,
        }
      : {
          hints: 'warning',
          maxEntrypointSize: 400000,
        },

    plugins: [
      new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        favicon: './src/favicon.ico',
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[name].bundle.css',
        chunkFilename: 'css/[name].chunk.css',
      }),
      new WebpackPwaManifest({
        name: 'react-redux-ts-boilerplate',
        short_name: 'rrt-boilerplate',
        description: 'React boilerplate-based project!',
        background_color: '#fafafa',
        theme_color: '#b1624d',
      }),
    ],
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
