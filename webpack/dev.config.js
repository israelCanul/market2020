const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".css", ".scss"] },
  output: {
    path: path.resolve(__dirname, "public/"),
    // publicPath: "public/", //prod
    publicPath: "/public/", //dev
    filename: "[name].js",
  },
  devServer: {
    contentBase: "public",
    port: 3000,
    publicPath: "http://localhost:3000/public/",
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DllReferencePlugin({
    //   manifest: require("./modules-manifest.json"),
    // }),
  ],
};
