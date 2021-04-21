// webpack配置文件

//CommonJs导入path模块
const path = require('path')

module.exports = {
    // 指定webpack打包命令的源
    entry: './src/main.js',
    // 指定webpack打包命令的目标
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
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
    resolve: {
      alias: {//使用Vue的运行-编译版本
          "vue$": "vue/dist/vue.esm.js"
      },//省略扩展名
      extensions: [".js", ".css", ".less", ".vue"]
    }
}