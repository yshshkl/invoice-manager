const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 3004,
    },
    output: {
        publicPath: `http://localhost:${process.env.PORT || 3004}/`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'customersMf',
            filename: 'remoteEntry.js',
            exposes: {
                './CustomerList': './src/modules/CustomerList',
                './AddNewCustomer': './src/modules/AddCustomer',
            },
            remotes: {
                shared: 'shared@http://localhost:3002/remoteEntry.js',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '18.3.1',
                    eager: true
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '18.3.1',
                    eager: true
                },
            }
        }),
    ],
};