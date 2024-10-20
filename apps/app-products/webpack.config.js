const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 3003,
    },
    output: {
        publicPath: `http://localhost:${process.env.PORT || 3003}/`,
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
            name: 'productsMf',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsList': './src/modules/ProductsList.tsx',
                './AddNewProduct': './src/modules/AddProduct.tsx',
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