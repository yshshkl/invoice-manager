const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 3000,
    },
    output: {
        publicPath: `http://localhost:${process.env.PORT || 3000}/`,
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
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                customersMf: 'customersMf@http://localhost:3001/remoteEntry.js',
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