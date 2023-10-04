import { Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./common";
import "webpack-dev-server";

const devConfig: Configuration = {
  mode: "development",

  devtool: "inline-source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};

export default merge<Configuration>(common, devConfig);
