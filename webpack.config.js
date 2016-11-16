//var webpack = require('webpack');
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	entry: './js/app.jsx',
	output: {
		filename: './js/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader?presets[]=es2015&presets[]=react']
			},
		]
	}
};