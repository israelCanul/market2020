const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    modules: ["firebase/database", "lodash", "react", "react-redux", "axios","react-router-dom"],
  },
  mode: "production",
  output: {
    path: path.join(__dirname, "../build/js/"),
    filename: "[name].js",
    library: "[name]",
  },
  optimization: {
    minimize: true,
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
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"),
    }),
  ],
};
