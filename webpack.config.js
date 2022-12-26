const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const csso = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const path = require('path');

module.exports = {
    entry:{
      "app":"./src/index.js",
      "assets/js/banner": "./src/assets/js/banner.js",
      "assets/js/tabs": "./src/assets/js/tabs.js",
      "assets/js/upload": "./src/assets/js/upload.js",
      "assets/js/table": "./src/assets/js/table.js",
      "assets/js/chart": "./src/assets/js/chart.js",


    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
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
             {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            
          
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            chunks:["app","assets/js/banner","assets/js/tabs" , "assets/js/chart" , "assets/js/tabs"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/add-product.html",
          filename:"add-product.html",
          chunks:["app","assets/js/upload"]
      }),
      
      new HtmlWebpackPlugin({
        template:"./src/product.html",
        filename:"product.html",
        chunks:["app","assets/js/table"]
      }),
      new HtmlWebpackPlugin({
        template:"./src/users.html",
        filename:"users.html",
        chunks:["app","assets/js/table"]
      }),
      new HtmlWebpackPlugin({
        template:"./src/orders.html",
        filename:"orders.html",
        chunks:["app","assets/js/table"]
      }),
      new HtmlWebpackPlugin({
        template:"./src/add-user.html",
        filename:"add-user.html",
        chunks:["app","assets/js/upload"]
      }),
        new HtmlWebpackPlugin({
            template:"./src/components/button.html",
            filename:"components/button.html",
            chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/textfield.html",
          filename:"components/textfield.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/card.html",
          filename:"components/card.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/banner.html",
          filename:"components/banner.html",
          chunks:["app", "assets/js/banner" ]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/list.html",
          filename:"components/list.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/tabs.html",
          filename:"components/tabs.html",
          chunks:["app" , "assets/js/tabs"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/upload.html",
          filename:"components/upload.html",
          chunks:["app" , "assets/js/upload"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/help.html",
          filename:"components/help.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/summary.html",
          filename:"components/summary.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/actions.html",
          filename:"components/actions.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/sidebar.html",
          filename:"components/sidebar.html",
          chunks:["app"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/table.html",
          filename:"components/table.html",
          chunks:["app" , "assets/js/table"]
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/chart.html",
          filename:"components/chart.html",
          chunks:["app", "assets/js/chart"]
        }),
        new HtmlWebpackPartialsPlugin({
          path: path.resolve(__dirname, './src/components/help.html'),
          location:"help",
          template_filename:["index.html","add-product.html" , "product.html" , "users.html", "orders.html", "add-user.html"],
        }),
        new HtmlWebpackPartialsPlugin({
          path: path.resolve(__dirname, './src/components/banner.html'),
          location:"banner",
          template_filename:["index.html"],
        }),
        new HtmlWebpackPartialsPlugin({
          path: path.resolve(__dirname, './src/components/chart.html'),
          location:"chart",
          template_filename:["index.html"],
        }),
        new HtmlWebpackPartialsPlugin({
          path: path.resolve(__dirname, './src/components/sidebar.html'),
          location:"sidebar",
          template_filename:["index.html", "add-product.html", "product.html" , "users.html", "orders.html", "add-user.html"],
        }),
        new MiniCssExtractPlugin({
            filename:"assets/css/style.css"
            
        }),
        new csso({}),
  ],
};