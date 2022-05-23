const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const port = 1115;

module.exports = {
  mode: "development",
  entry: { app: "./src/index.js" },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[chunkhash].js", // => app.8sdcmmdsmaksdm.js
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
        type: "asset/resource",
      },

      // { 이미지 파일을 base64로 변경하여 인라인화시켜주고 싶을 때
      //   test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
      //   type: "asset/inline",
      // },
      {
        test: /\.txt/,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true, // 브라우저에서 URL을 변경할 수 있도록 해주는 옵션
    // hot: true, // 변경사항이 즉시 반영될 수 있도록 해주는 옵션
    // open: true, // 서버를 실행하면 자동으로 브라우저가 열리게 해주는 옵션
  },
};
