const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const ckeditorSVG = require('./loaders/ckeditor-svg')
const ckeditorCSS = require('./loaders/ckeditor-css')
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' )

environment.plugins.prepend('CKEditor',new CKEditorWebpackPlugin({
  language: 'en'
  })
)

environment.loaders.append('ckeditorCSS', ckeditorCSS)
environment.loaders.append('ckeditorSVG', ckeditorSVG)

const cssLoader = environment.loaders.get('css');
cssLoader.exclude = /(\.module\.[a-z]+$)|(ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css)/

const fileLoader = environment.loaders.get('file');
fileLoader.exclude = /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
