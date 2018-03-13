const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname + "/build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      }
    ]
  }
};
