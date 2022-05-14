const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 1115;

module.exports = {
  mode: "development",
  entry: { app: "./src/index.js" },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[chunkhash].js",
    publicPath: "/",

    /*
    publicPath
    - 파일들이 위치할 서버상의 경로
    - /assets/ 이라고 설정하면 모든 파일을 요청할 때 http://myserver.com/assets/bundle.js 이런식으로 파일을 요청하게 된다.
    */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  devServer: {
    host: "localhost",
    port: port,
    open: true, // 서버를 실행하면 자동으로 브라우저가 열리게 해주는 옵션
    historyApiFallback: true, // 브라우저에서 URL을 변경할 수 있도록 해주는 옵션
    hot: true, // 변경사항이 즉시 반영될 수 있도록 해주는 옵션
  },
};
