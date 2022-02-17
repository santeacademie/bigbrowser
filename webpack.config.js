const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
// const getPackageJson = require('./scripts/getPackageJson');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// const {
// 	version,
// 	name,
// 	license,
// 	repository,
// 	author,
// } = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = fs.readFileSync('./banner.txt', {encoding:'utf8', flag:'r'});

module.exports = {
	mode: "production",
	devtool: 'source-map',
	entry: './src/lib/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
		library: "bigbrowser",
		libraryTarget: 'umd',
		clean: true
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: (astNode, comment) => {
                            const fs = require('fs');
                            const banner = fs.readFileSync('./banner.txt', {encoding:'utf8', flag:'r'});
                            const bannerLines = banner.split("\n").map((line) => {
                                return line.replace('// ', '').trim();
                            });
                            const currentValue = comment.value.trim();

                            return (bannerLines.includes(currentValue));
                        },
                    },
                },
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false
					}
				}
			})
		],
	},
	module: {
		rules: [
			{
				test: /\.(m|j|t)s$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{loader: "css-loader", options: {sourceMap: true}},
				],
			}
		]
	},
	plugins: [
		new PrettierPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/index.css'
		}),
		new webpack.BannerPlugin({
            banner: banner,
            raw: true,
            entryOnly: false
        })
	],
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};