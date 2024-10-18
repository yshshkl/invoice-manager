const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
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
            }
        ]
    },
    externals: {
        react: "react",
        "react-dom": "react-dom"
    }
};