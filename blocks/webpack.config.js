var webpack = require('webpack');
module.exports = {
	entry: './block.js',
	output: {
		path: __dirname,
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
   /* new ExtractTextPlugin({
      filename: 'build.min.css',
      allChunks: true,
    }),*/
  ]
};
