const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.BannerPlugin("最终版权归Billion公司所有")
    ]
}