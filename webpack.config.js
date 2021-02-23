const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports = {
  mode: 'development', //production
  entry: {
    screens: './src/screens/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/app'),
    publicPath: '/dist/app',
    filename: 'screens.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
   ]
 },
 plugins: [
        new VueLoaderPlugin()
  ]
};