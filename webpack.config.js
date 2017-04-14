const { join }          = require('path');
      webpack           =   require("webpack");


module.exports = {
    cache: true,
    devtool: "source-map",
    context: join(__dirname, "/src/client"),
    entry: [
        './main'
    ],
    devServer: { hot: true },
    output: {
        path: join(__dirname, "/public/js/"),
        filename: "[name].js",
        chunkFilename: "[id].js",
        sourceMapFilename: "[name].map",
        publicPath: "/"
    },
    module: {
        rules: [
            // required for babel to kick in
            { test: /\.js$/, exclude: /node_modules/, use: [
                { loader: "babel-loader" }
            ]},

            { test: /\.css$/,  use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]}
        ]
    },
    plugins: [
    ]
};
