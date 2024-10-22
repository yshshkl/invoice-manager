const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 3005,
    },
    output: {
        publicPath: `http://localhost:${process.env.PORT || 3005}/`,
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
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false,
                                localIdentName: "[hash:base64:5]",
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
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                customersMf: 'customersMf@http://localhost:3004/remoteEntry.js',
                productsMf: 'productsMf@http://localhost:3003/remoteEntry.js',
                invoicesMf: 'invoicesMf@http://localhost:3007/remoteEntry.js'
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '18.3.1', // Match your React version
                    eager: true
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '18.3.1', // Match your ReactDOM version
                    eager: true
                },
            }
        }),
    ],
};