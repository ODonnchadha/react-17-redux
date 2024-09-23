const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Declare the node environment.
process.env.NODE_ENV = "development";

// Export a JavaScript object.
module.exports = {
  mode: "development",
  target: "web",
  // A source map for debugging.
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  // NOTE: Webpack doesn't output code in development mode.
  //   It serves up the app from memory.
  //   __dirname: Current directory name.
  output: {
    path: path.resolve(__dirname, "build"),
    // Public URL.
    publicPath: "/",
    // Reference the bundle served from memory.
    filename: "bundle.js"
  },
  // Server the app via Webpack within development.
  devServer: {
    // Reduced command-line information.
    stats: "minimal",
    // Overlay browser errors.
    overlay: true,
    // All requests will be sent to index.html
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    // Where to find
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    // Tell Webpack what files to handle.
    // JavaScript. Ignore node_modules.
    // And run Babel on these files.
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      // And css files. Use two different loaders.
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
