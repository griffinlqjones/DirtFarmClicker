module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000",
      }
    }
  }
}
