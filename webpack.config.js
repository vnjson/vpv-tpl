const { resolve, join } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
const ExtraWatch = require('extra-watch-webpack-plugin')
const WebpackConcatPlugin = require('webpack-concat-files-plugin');
const stj = require('./scenes-to-json.js')
module.exports = {
  watch: false,
  mode: 'development', //production
  entry: {
    screens: './src/screens/main.js'
  },
  output: {
    path: resolve(__dirname, './dist/app'),
    publicPath: '/dist/app',
    filename: '[name].js'
  },
  devServer: {
    open: false,
    liveReload: true,
    compress: true,
    noInfo: true,
    port: 9000,
    stats: 'errors-only',
    contentBase: ['./dist'],
    filename: 'main.js',
    publicPath: '/app/'

  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',

      }

   ]
 },
 plugins: [
  new stj(),
  new VueLoaderPlugin(),
  new ExtraWatch({dirs: ['./src/scenes']}),
  new WebpackConcatPlugin({
        bundles: [
          {
            dest: './dist/app/plugins.js',
            src: './src/plugins/**/*.js'
          },
        ],
    })   
  ]
}