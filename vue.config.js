const path = require("path")
const webpack = require("webpack")
const vendors = ['vue','iview']
let cacheGroups = {}
vendors.forEach((v,index) => {
  cacheGroups = Object.assign(cacheGroups, {
    [index]: { // 键值可以自定义
      chunks:'initial', // 
      name:v, // 入口的entry的key
      test: /\.js/,
      enforce:true   // 强制 
    }
  })
})
Object.assign(cacheGroups, {
  vendors: "",
  common: ""
})
console.log(cacheGroups)
// vue.config.js
module.exports = {
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
  }
}