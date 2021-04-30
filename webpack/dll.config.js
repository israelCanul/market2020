const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    modules: ["firebase/database", "lodash", "react", "react-redux"],
  },
  mode: "production",
  output: {
    path: path.join(__dirname, "../build/js/"),
    filename: "[name].js",
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"),
    }),
  ],
};
