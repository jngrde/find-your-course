const rewireStyledComponents = require('react-app-rewire-styled-components')
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env)
  config = injectBabelPlugin('babel-plugin-jsx-remove-data-test-id', config)

  return config
}
