const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const csso = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = {
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
      },
      devServer:{
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port:1000,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
    },
      module: {      
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "postcss-loader",
                  "sass-loader",
                ],
              },
              
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator : {
                    filename : 'assets/images/[name][ext][query]',
                }
              },
             {
               test: /\.(woff|woff2|eot|ttf|otf)$/i,
               type: 'asset/resource',
               generator : {
                filename : 'assets/fonts/[name][ext][query]',
                }
             },
            
          
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
        }),
        new MiniCssExtractPlugin({
            filename:"assets/css/style.css"
        }),
        new csso({}),
  ],
};