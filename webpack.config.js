const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    // точка входа
    entry: {
        main: path.resolve(__dirname, './src/Index.tsx'),
    },
    resolve: {
        // какие расширения файлов резолвим
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // путь до нод модулей
        modules: [
            path.join(__dirname, 'node_modules')
        ],
        alias: {
            '~': path.resolve(__dirname, 'src/'),
        },
    },
    // точка выхода
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                // преобразование jsx и tsx файлов
                test: /\.[jt]sx?$/,
                loader: 'esbuild-loader',
                options: {
                    target: 'es2018',
                    jsx: 'automatic',
                },
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new Dotenv(),
    ],
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        hot: true,
    }
}