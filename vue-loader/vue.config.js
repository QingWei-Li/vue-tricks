

module.exports = {
  webpack: function(config, options, webpack) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({
      vue: {
        preserveWhitespace: false,
        transformToRequire: {
          'avatar': 'default-src'
        }
      }
    }))

    return config
  }
}
