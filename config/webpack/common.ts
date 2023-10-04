import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";

const commonConfig = {
  // точка входа
  entry: {
    main: path.resolve(__dirname, "../../src/Index.tsx"),
  },
  resolve: {
    // какие расширения файлов резолвим
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // путь до нод модулей
    modules: [path.join(__dirname, "../../node_modules")],
    alias: {
      "~": path.resolve(__dirname, "../../src/"),
      "@assets": path.resolve(__dirname, "../../assets/"),
    },
  },
  // точка выхода
  output: {
    path: path.resolve(__dirname, "../../dist"),
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
      template: path.join(__dirname, "../../src", "index.html"),
    }),
    new Dotenv(),
  ],
};

export default commonConfig;
