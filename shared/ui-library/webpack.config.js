const path = require("path");

module.exports = {
    entry: {
        components: path.resolve(__dirname, './src/components/index.ts'),
        models: path.resolve(__dirname, './src/models/index.ts')
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        libraryTarget: "umd",
        globalObject: "this"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/
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
            }
        ]
    },
    externals: {
        react: "react",
        "react-dom": "react-dom"
    }
};