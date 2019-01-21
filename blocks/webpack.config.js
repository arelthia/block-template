let webpack = require( 'webpack' );
const path = require('path');

NODE_ENV = process.env.NODE_ENV || 'development';
webpackConfig = {
	entry: './admin/js/src/block.js',
	output: {
		path: path.resolve(__dirname, 'admin/js/src'),
		filename: 'block.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( NODE_ENV ),
		} ),
	]
};

if ( 'production' === NODE_ENV ) {
	webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
}

module.exports = webpackConfig;
