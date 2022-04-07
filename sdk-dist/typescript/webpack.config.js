// webpack.config.js
module.exports = {
  entry: "./dist/index.js",
  output: {
    filename: "../etherdata-sdk.js",
    library: {
      type: "umd",
      name: "etherdata-sdk",
    },
    globalObject: "this",
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
