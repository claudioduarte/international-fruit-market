const { environment } = require('@rails/webpacker')
const jquery = require('./plugins/jquery')

const webpack = require('webpack')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default'],
    moment: 'moment/moment'
  })
)

environment.plugins.prepend('jquery', jquery)
module.exports = environment
