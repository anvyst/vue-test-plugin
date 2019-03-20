const { resolve, join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  output: {
    path: resolve(__dirname, '../dist'),
    // filename: `${filename}.common.js`
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: '/\.js$/',
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('./src')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
