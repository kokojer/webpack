const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const resolveTsconfigPathsToAlias = ({
  tsconfigPath = "./tsconfig.json",
  webpackConfigBasePath = __dirname,
} = {}) => {
  const { paths, baseUrl } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "");
    const value = path.resolve(
      webpackConfigBasePath,
      baseUrl,
      paths[item][0].replace("/*", "").replace("*", "")
    );

    aliases[key] = value;
  });

  return aliases;
};

module.exports = {
  // точка входа
  entry: {
    main: path.resolve(__dirname, "./src/Index.tsx"),
  },
  resolve: {
    // какие расширения файлов резолвим
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // путь до нод модулей
    modules: [path.join(__dirname, "node_modules")],
    alias: resolveTsconfigPathsToAlias(),
  },
  // точка выхода
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        // преобразование jsx и tsx файлов
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2018",
          jsx: "automatic",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CssMinimizerPlugin(),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://api.github.com",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
