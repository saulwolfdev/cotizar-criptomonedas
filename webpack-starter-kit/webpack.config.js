const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
module.exports = {
  entry: {
    js: "./src/index.js"
    // nativo: "./src/javascript_nativo.js"
  },
  output: {
    filename: "[name].[chunkhash].js"
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          //es otra forma de configurar
          // loader: "html-loader?minimize=true",
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          //"css-loader?minimize&sourceMap",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browser: ["last 2 versions"]
              },
              //asi hirian todas las configuraciones de postcss
              //nanocss:{}
              //etc
              sourceMap: true,
              //lo hacemos con un arround function porque solo
              //tenemos un paramatro,
              plugins: () => [autoprefixer]
            }
          },
          //"sass-loader?outputStyle=compressed&sourceMap"
          "resolve-url-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          "file-loader?name=assets/img/[name].[ext]",
          "image-webpack-loader?bypassOnDebug"
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        //use: ["file-loader?name=assets/[name].[ext]"]
        //COMO SOLO TIENE UN ARREGLO LO PONES COMO STRING!!!!
        use: "file-loader?name=assets/[name].[ext]"
      }
      // {
      //   test: /\.(css|sass|scss)$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist/**/*.*"]),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
      chunks: ["js"]
    }),
  ]
};