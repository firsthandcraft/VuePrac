const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//multi-word-component-names
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8100',
        changeOrigin:true,
        pathRewrite:{
          '^/': ''
        }
      }
    }
  }

})
