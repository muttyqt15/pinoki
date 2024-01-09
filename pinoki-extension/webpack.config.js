const path = require('node:path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", // Change to production mode once app is done
  entry: {
    popup: './src/popup/popup.tsx',

  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
            from: path.resolve('src/manifest.json'),
            to: path.resolve('dist')
        },
        {
            from: path.resolve('src/assets/Pinoki.png'),
            to: path.resolve('dist')
        }
      ],
    }),
    new HtmlPlugin({
      title: "Pinoki",
      filename: "popup.html",
    })
  ],
};
