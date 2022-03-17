const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'
if(process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    output: {
        // в эту папку складываются все ассеты (картинки, шрифты...)
        assetModuleFilename: "assets/[name].[hash][ext][query]",
        // очищение папки dist от копий предыдущих файлов
        clean: true,
        filename: "[name].[contenthash].js"
    },
    // подключение карты стилей от src
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin ({
            //
            filename: "[name].[contenthash].css"
        }),
        new HTMLWebpackPlugin({
            template: "./src/index.pug"
        })],
    module: {
        rules: [
            {
                // в папке src все файлы c данным расширением могут получать img и передавать на обработку для loader
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                // в папке src все файлы с данными расширениями будут переданы на обработку
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === "development") ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        // поддержка css префиксов для всех браузеров
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                // в папке src все файлы с данными расширениями будут переданы на обработку
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // в папке src все файлы с данными расширениями будут переданы на обработку
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                // все файлы с данными расширениями будут переданы на обработку
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                // преобразовывает современный js под старые браузеры кроме папки node_modules
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}