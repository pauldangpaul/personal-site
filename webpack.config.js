const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 
            {
                loader: "babel-loader"
            },
        },
        {
            test: /\.html$/,
            use: 
            [
                {
                    loader: "html-loader"
                }
            ]
        },
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title: 'Meet Paul Dang',
            template: "./src/index.html",
            filename: "./index.html",
          })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
  };