var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
let base = {
    index: __dirname + '/js/index.js',
    playlist:__dirname + '/js/playlist.js',
    song: __dirname + '/js/song.js'
}
module.exports = {
	entry: base,
	output:{
        path: path.resolve(__dirname, 'dist'),  
		filename: '_[name].js'   
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
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                  loader:'babel-loader'
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

