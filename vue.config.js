var proxy = require('http-proxy-middleware');

module.exports = {
  configureWebpack: {
    devtool: false,
    output: {
      filename: 'js/[name].[hash:8].js',
      publicPath: '/',
      chunkFilename: 'js/[name].[hash:8].js'
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,     // target是域名的话，需要这个参数，
          secure: false,          // 设置支持https协议的代理
        },
      }
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