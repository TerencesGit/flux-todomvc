var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	entry: './js/app.jsx',
	output: {
		filename: './js/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new OpenBrowserPlugin({url: 'http://localhost:8080'})
	],
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