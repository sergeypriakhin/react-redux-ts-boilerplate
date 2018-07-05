const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
			publicPath: '/'
		},

		// Enable sourcemaps for debugging webpack's output.
		devtool: isDev ? 'inline-source-map' : 'source-map',

		resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
		},

		devServer: {
			contentBase: 'src',
			hot: true,
			historyApiFallback: true,
			port: 3000
		},

		module: {
			rules: [
				// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
				{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

				// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
				{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
				{
					test: /\.(sa|sc|c)ss$/,
					loaders: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]--[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								config: {
									ctx: {
										cssnext: {
											browsers: ['last 2 versions', '> 5%']
										}
									}
								}
							}
						}
					]
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]?[hash]'
					}
				}
			]
		},

		optimization: isDev
			? {
					minimize: false,
					nodeEnv: 'development'
			  }
			: {
					minimize: true,
					nodeEnv: 'production',
					sideEffects: true,
					concatenateModules: true,
					splitChunks: { chunks: 'all' },
					runtimeChunk: true
			  },

		performance: isDev
			? {
					hints: false
			  }
			: {
					hints: 'warning',
					maxEntrypointSize: 400000
			  },

		plugins: [
			new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: './index.html',
				favicon: './src/favicon.ico'
			}),
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: 'css/[name].bundle.css',
				chunkFilename: 'css/[name].chunk.css'
			}),
			new WebpackPwaManifest({
				name: 'sp-react-redux-ts-boilerplate',
				short_name: 'react-redux-ts',
				description: 'My React Boilerplate-based project!',
				background_color: '#fafafa',
				theme_color: '#b1624d'
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
