const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/,
        },
      ],
    },
  },
});
