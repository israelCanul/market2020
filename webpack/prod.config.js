const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    publicPath: "/", //dev
    filename: "[name].js",
  },
  mode: "production",
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
  optimization: {
    minimize: true,
    // splitChunks: {
    //   chunks: "all",
    //   minSize: 2000,
    //   // name: "commons",
    // },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
          output: {
            comments: false,
          },
        },
        sourceMap: false,})
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: "css/[name].v18.css",
    //   chunkFilename: "css/[name][id].v18.css",
    // }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json"),
    }),
  ],
};
