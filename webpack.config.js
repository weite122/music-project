var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	entry: __dirname + '/js/index.js',
	output:{
		path: path.resolve(__dirname, 'dist'),  
		filename: 'bundle.js'   
	},
	plugins: [
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: false,
            allChunks: true
        }),
	  ],
    module: {
        //加载器配置
        rules: [
            { 
                test: /\.js$/, 
                loader: 'babel-loader'
            },
			{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:{
                        loader:'css-loader',
                        options: {
                           sourceMap: true
                        }
                    }
                })
            },
		]
	},
	  
}

