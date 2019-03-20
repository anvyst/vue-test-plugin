const merge = require('webpack-merge')
const DashboardPlugin = require("webpack-dashboard/plugin");
const base = require('./webpack.base.config.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: '#eval-source-map',
  plugins: [
    new DashboardPlugin()
  ]
})
