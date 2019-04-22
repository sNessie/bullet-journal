const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = env => {
  const isProduction = env === "production";
  return {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            process.env.NODE_ENV ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js"
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: process.env.NODE_ENV
          ? "style/[name].css"
          : "style/[name].css",
        chunkFilename: process.env.NODE_ENV
          ? "style/[id].css"
          : "style/[id].css"
      }),
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIRABSE_MESSAGINE_SENDER_ID": JSON.stringify(
          process.env.FIRABSE_MESSAGINE_SENDER_ID
        )
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
