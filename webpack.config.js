module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts"
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
