const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //  mode 
    mode: 'production',
    // entry
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        about: path.resolve(__dirname, 'src/js/about.js')
    },
    // output
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true // cleans the public file on every entry 
    },
    // devServer
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },

        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true
    },

    // loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    
    // plugins
    plugins: [
        new htmlWebpackPlugin({
            title: "Countries | Home", 
            template: './src/pages/tempIndex.html',
            filename: 'index.html',
            chunks: ['main']
        }),

        new htmlWebpackPlugin({
            title: "Countries | About", 
            template: './src/pages/tempAbout.html',
            filename: 'about.html',
            chunks: ['about']
        }), 

        new MiniCssExtractPlugin()
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 5555,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
}