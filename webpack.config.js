const path = require('path');
const webpack = require('webpack');
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const BannerPlugin = require('./plugins/BannerPlugin');
// const BannerAfterMinimizePlugin = require('./plugins/BannerAfterMinimizePlugin');

const {
	version,
	name,
	license,
	repository,
	author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `// ==UserScript==
// @name         @santeacademie/bigbrowser
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  BigBrowser
// @author       santeacademie
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=fr
// @icon         https://assets.website-files.com/5fa997afa489c5171404c70c/60f7e0104650f1a66201de1d_favicon-32.png
// @include      http*://*
// ==/UserScript==

/*
 * ${name} v${version}
 * ${repository.url}
 *
 * Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.
 * 
 * This source code is licensed under the ${license} license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

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
                extractComments: (astNode, comment) => {
                    console.log(comment.value)
                    // if (/@extract/i.test(comment.value)) {
                    //     return true;
                    // }

                    return false;
                },
                // terserOptions: {
                //     format: {
                //         comments: true,
                //     },
                // },
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
        }),
        // new BannerAfterMinimizePlugin({
        //     banner: 'mdr',
        //     raw: true,
        //     entryOnly: false
        // }),
        // new BannerPlugin({
        //     banner: 'mdr',
        //     raw: true,
        //     entryOnly: false
        // })
	],
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};