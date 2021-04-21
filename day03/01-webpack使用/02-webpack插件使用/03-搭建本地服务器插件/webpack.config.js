const path = require("path")
const webpack = require("webpack")
// const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.BannerPlugin("最终版权归Billion公司所有"),
        // new HtmlWebpackPlugin({
        //     template: 'index.html'
        // })
    ],
    module: {
        rules: [
          {//配置加载css样式文件
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {//配置加载less样式文件
            test: /\.less$/,
            use: [{
                loader: "style-loader"
              }, {
                loader: "css-loader"
              }, {
                loader: "less-loader"
              }
            ]
          },
          {//配置加载图片
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: "img/[name][hash:8].[ext]"
                }
              }
            ]
          },
          {//配置es6转化为es5
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {//配置加载.vue文件
              test: /\.vue$/,
              use: ['vue-loader']
          }
        ]
    },
    devServer: {
        contentBase: './dist',
        inline: true
    }
}