const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: path.join('js', 'main.js'),
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        allowedHosts: ['all'],
        hot: true,
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin()
    ]
}