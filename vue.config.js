module.exports = {
  productionSourceMap: true, // NOTE: this is default
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8080/",
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
