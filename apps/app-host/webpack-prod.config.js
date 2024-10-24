const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false,
                                localIdentName: '[hash:base64:5]',
                            },
                        },
                    }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(), // Cleans the output folder
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                customersMf: 'customersMf@https://app-customer-management-5t6y.web.app/remoteEntry.js', // Adjust URL based on Firebase Hosting setup
                productsMf: 'productsMf@https://app-product-management-5t6y.web.app/remoteEntry.js', // Adjust URL based on Firebase Hosting setup
                invoicesMf: 'invoicesMf@https://app-invoice-management-5t6y.web.app/remoteEntry.js'  // Adjust URL based on Firebase Hosting setup
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '18.3.1',
                    eager: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '18.3.1',
                    eager: true,
                },
            }
        }),
    ],
};