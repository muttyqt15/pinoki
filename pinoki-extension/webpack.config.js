const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    index: path.resolve("./src/index.tsx"),
    options: path.resolve("./src/options/options.tsx"),
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader", // For loading typescript files
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i, // For loading css files
        use: ["style-loader", "css-loader", {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [tailwindcss, autoprefixer],
                },
            },
        }],
      },
      {
        type: "assets/resource", // For loading images
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "manifest.json", to: "../manifest.json" }],
    }),
    ...getHtmlPlugins(["index", "options"]),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HTMLPlugin({
        title: "Pinoki!",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
