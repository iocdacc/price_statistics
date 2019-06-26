var proxy = require('http-proxy-middleware');

module.exports = {
  publicPath:"",
  configureWebpack: {
    devtool: false,
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[hash:8].js'
    },
    optimization:{
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'vendors.0',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          vendors_other: {
            test: /[\\/]node_modules[\\/](iview)[\\/]/,
            name: 'vendors.1',
            priority: -9,
            chunks: 'initial',
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: false
          }
        }
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('less').oneOf('vue-modules').use('less-loader').tap(options => {
      options.javascriptEnabled = true
      return options
    })
    config.module.rule('less').oneOf('vue').use('less-loader').tap(options => {
      options.javascriptEnabled = true
      return options
    })
    config.module.rule('less').oneOf('normal-modules').use('less-loader').tap(options => {
      options.javascriptEnabled = true
      return options
    })
    config.module.rule('less').oneOf('normal').use('less-loader').tap(options => {
      options.javascriptEnabled = true
      return options
    })
    if (process.env.NODE_ENV === 'production') {
      config.plugin('named-chunks').tap(args => {
        return []
      })
    }
  }
}